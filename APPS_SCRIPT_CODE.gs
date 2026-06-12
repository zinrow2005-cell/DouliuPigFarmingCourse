/*******************************************************
 * 山線養豬讀書會｜Google Sheet 雲端同步 Web App
 * GitHub Ready v66：上課日期異動才要求重新回覆，時間異動只提醒
 * 用法：
 * 1) 建立 Google Sheet
 * 2) 擴充功能 → Apps Script
 * 3) 貼上本檔內容
 * 4) 修改 ADMIN_TOKEN / READ_TOKEN
 * 5) 部署 → 新增部署作業 → Web App
 * 6) 首次使用請在管理端按「上傳到雲端」，把正式課程資料寫入 Google Sheet
 *******************************************************/

const SHEET_ID = ''; // 若此 Apps Script 是綁定 Google Sheet，可留空。若為獨立 Apps Script，請填 Sheet ID。
const DATA_SHEET_NAME = 'SHANXIAN_DATA';
const LOG_SHEET_NAME = 'SYNC_LOG';

const ADMIN_TOKEN = 'shanxian_admin_2026';
const READ_TOKEN = 'shanxian_read_2026';
const CHUNK_SIZE = 45000;

function doGet(e) {
  try {
    const action = String((e.parameter.action || 'get')).trim();
    const token = String((e.parameter.token || '')).trim();
    if (action === 'ping') {
      requireReadToken_(token);
      return json_({ ok: true, message: 'Google Sheet Web App 連線正常', serverTime: new Date().toISOString() });
    }
    if (action === 'get') {
      requireReadToken_(token);
      const payload = readPayload_();
      return json_({ ok: true, payload, serverTime: new Date().toISOString() });
    }
    return json_({ ok: false, error: 'Unknown action: ' + action });
  } catch (err) {
    return json_({ ok: false, error: String(err.message || err) });
  }
}

function doPost(e) {
  try {
    const body = parseBody_(e);
    const action = String(body.action || '').trim();
    const token = String(body.token || '').trim();

    if (action === 'saveAll') {
      requireAdminToken_(token);
      if (!body.payload) throw new Error('Missing payload');
      writePayload_(body.payload);
      log_('saveAll', 'admin', '完整資料已覆蓋雲端');
      return json_({ ok: true, message: '資料已儲存到 Google Sheet', serverTime: new Date().toISOString() });
    }

    if (action === 'mergeAll') {
      requireReadToken_(token);
      if (!body.payload) throw new Error('Missing payload');
      var currentPayload = readPayload_();
      var mergedPayload = mergePublicPayload_(currentPayload, body.payload);
      writePayload_(mergedPayload);
      log_('mergeAll', 'member', '會員端更新已合併到雲端');
      return json_({ ok: true, message: '會員端更新已合併到 Google Sheet', payload: mergedPayload, serverTime: new Date().toISOString() });
    }

    if (action === 'attendance') {
      const courseId = String(body.courseId || '').trim();
      const memberId = String(body.memberId || '').trim();
      const status = String(body.status || 'unknown').trim();
      const payload = readPayload_();
      updateAttendance_(payload, courseId, memberId, status, token);
      writePayload_(payload);
      log_('attendance', memberId, courseId + ' → ' + status);
      return json_({ ok: true, message: '出席狀態已更新', payload, serverTime: new Date().toISOString() });
    }

    if (action === 'participantSignup') {
      requireReadToken_(token);
      const courseId = String(body.courseId || '').trim();
      const signup = body.signup || {};
      const payload = readPayload_();
      updateParticipantSignup_(payload, courseId, signup);
      writePayload_(payload);
      log_('participantSignup', String(signup.farmOrName || signup.contactName || 'member'), courseId + ' → ' + String(signup.count || ''));
      return json_({ ok: true, message: '參加人數登記已更新', payload, serverTime: new Date().toISOString() });
    }

    if (action === 'publicCheckin') {
      requireReadToken_(token);
      const courseId = String(body.courseId || '').trim();
      const payload = readPayload_();
      updatePublicCheckin_(payload, courseId, body);
      writePayload_(payload);
      log_('publicCheckin', String(body.memberId || body.signupId || (body.signup && body.signup.farmOrName) || 'onsite'), courseId + ' → ' + String(body.status || 'checked'));
      return json_({ ok: true, message: '現場報到已更新', payload, serverTime: new Date().toISOString() });
    }



    if (action === 'feedback') {
      const courseId = String(body.courseId || '').trim();
      const memberId = String(body.memberId || '').trim();
      const feedback = body.feedback || {};
      const payload = readPayload_();
      updateFeedback_(payload, courseId, memberId, feedback, token);
      writePayload_(payload);
      log_('feedback', memberId, courseId + ' → survey');
      return json_({ ok: true, message: '課程問卷回饋已更新', payload, serverTime: new Date().toISOString() });
    }

    if (action === 'checkin') {
      const courseId = String(body.courseId || '').trim();
      const memberId = String(body.memberId || '').trim();
      const status = String(body.status || 'checked').trim();
      const note = String(body.note || '').trim();
      const payload = readPayload_();
      updateCheckin_(payload, courseId, memberId, status, note, token);
      writePayload_(payload);
      log_('checkin', memberId, courseId + ' → ' + status);
      return json_({ ok: true, message: '簽到報到已更新', payload, serverTime: new Date().toISOString() });
    }

    return json_({ ok: false, error: 'Unknown action: ' + action });
  } catch (err) {
    return json_({ ok: false, error: String(err.message || err) });
  }
}

function parseBody_(e) {
  const text = e && e.postData && e.postData.contents ? e.postData.contents : '{}';
  try {
    return JSON.parse(text);
  } catch (err) {
    throw new Error('POST body is not valid JSON');
  }
}

function requireReadToken_(token) {
  if (token !== READ_TOKEN && token !== ADMIN_TOKEN) throw new Error('讀取權限不足，請確認 READ_TOKEN 或 ADMIN_TOKEN');
}

function requireAdminToken_(token) {
  if (token !== ADMIN_TOKEN) throw new Error('管理權限不足，請確認 ADMIN_TOKEN');
}

function getSs_() {
  return SHEET_ID ? SpreadsheetApp.openById(SHEET_ID) : SpreadsheetApp.getActiveSpreadsheet();
}

function getDataSheet_() {
  const ss = getSs_();
  let sheet = ss.getSheetByName(DATA_SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(DATA_SHEET_NAME);
    sheet.getRange(1, 1, 1, 3).setValues([['chunk_index', 'json_chunk', 'updated_at']]);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function readPayload_() {
  const sheet = getDataSheet_();
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return { members: [], locations: [], courses: [] };
  const values = sheet.getRange(2, 1, lastRow - 1, 2).getValues();
  const chunks = values
    .filter(row => row[0] !== '' && row[1] !== '')
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .map(row => String(row[1]));
  if (!chunks.length) return { members: [], locations: [], courses: [] };
  const jsonText = chunks.join('');
  return JSON.parse(jsonText);
}

function writePayload_(payload) {
  const sheet = getDataSheet_();
  const jsonText = JSON.stringify(payload);
  const chunks = [];
  for (let i = 0; i < jsonText.length; i += CHUNK_SIZE) {
    chunks.push([chunks.length + 1, jsonText.slice(i, i + CHUNK_SIZE), new Date()]);
  }
  sheet.clearContents();
  sheet.getRange(1, 1, 1, 3).setValues([['chunk_index', 'json_chunk', 'updated_at']]);
  if (chunks.length) sheet.getRange(2, 1, chunks.length, 3).setValues(chunks);
  sheet.autoResizeColumns(1, 3);
}

function updateAttendance_(payload, courseId, memberId, status, token) {
  if (!courseId || !memberId) throw new Error('Missing courseId or memberId');
  if (!['going', 'leave', 'unknown'].includes(status)) throw new Error('Invalid status');
  if (!payload || !Array.isArray(payload.members) || !Array.isArray(payload.courses)) throw new Error('Cloud payload is invalid');

  const member = payload.members.find(m => String(m.id) === memberId);
  if (!member) throw new Error('Member not found: ' + memberId);
  const isAdmin = token === ADMIN_TOKEN;
  if (!isAdmin && String(member.memberToken || '') !== String(token || '')) {
    throw new Error('會員 Token 不正確');
  }

  const course = payload.courses.find(c => String(c.id) === courseId);
  if (!course) throw new Error('Course not found: ' + courseId);
  const a = course.attendance || { going: [], leave: [], unknown: [] };
  const clean = {
    going: Array.isArray(a.going) ? a.going.filter(id => id !== memberId) : [],
    leave: Array.isArray(a.leave) ? a.leave.filter(id => id !== memberId) : [],
    unknown: Array.isArray(a.unknown) ? a.unknown.filter(id => id !== memberId) : []
  };
  clean[status].push(memberId);
  course.attendance = clean;
  if (Array.isArray(course.reconfirmPendingMemberIds)) {
    course.reconfirmPendingMemberIds = course.reconfirmPendingMemberIds.filter(function(id) { return String(id) !== memberId; });
    refreshReconfirmStatus_(course, payload.members || []);
  }
}

function refreshReconfirmStatus_(course, members) {
  if (!course) return;
  var validIds = {};
  (members || []).forEach(function(member) { if (member && member.id) validIds[String(member.id)] = true; });
  if (!Array.isArray(course.reconfirmPendingMemberIds)) course.reconfirmPendingMemberIds = [];
  course.reconfirmPendingMemberIds = course.reconfirmPendingMemberIds.filter(function(id, index, arr) {
    var key = String(id || '').trim();
    return key && validIds[key] && arr.indexOf(id) === index;
  });
  var pendingSignups = Array.isArray(course.participantSignups)
    ? course.participantSignups.filter(function(item) { return Boolean(item && item.needsReconfirm); }).length
    : 0;
  if (course.reconfirmPendingMemberIds.length || pendingSignups) {
    course.reconfirmRequired = 'yes';
    return;
  }
  if (course.reconfirmRequired === 'yes') {
    course.reconfirmRequired = 'no';
    course.reconfirmResolvedAt = new Date().toISOString();
  }
}





function mergeUniqueArray_(baseList, incomingList) {
  var out = Array.isArray(baseList) ? baseList.slice() : [];
  (Array.isArray(incomingList) ? incomingList : []).forEach(function(value) {
    var text = String(value || '').trim();
    if (text && out.indexOf(text) < 0) out.push(text);
  });
  return out;
}

function mergeByIdOrKey_(baseList, incomingList, keyFn) {
  var out = Array.isArray(baseList) ? baseList.slice() : [];
  (Array.isArray(incomingList) ? incomingList : []).forEach(function(item) {
    if (!item) return;
    var key = String(item.id || keyFn(item) || '').toLowerCase();
    var idx = out.findIndex(function(row) {
      return String(row.id || keyFn(row) || '').toLowerCase() === key;
    });
    if (idx >= 0) {
      out[idx] = Object.assign({}, out[idx], item, { updatedAt: item.updatedAt || new Date().toISOString() });
    } else {
      out.push(item);
    }
  });
  return out;
}

function mergeCheckins_(baseCheckins, incomingCheckins) {
  var out = Object.assign({}, baseCheckins || {});
  if (!incomingCheckins || typeof incomingCheckins !== 'object') return out;
  Object.keys(incomingCheckins).forEach(function(memberId) {
    var item = incomingCheckins[memberId];
    if (!item || !item.status) return;
    out[memberId] = Object.assign({}, out[memberId] || {}, item);
  });
  return out;
}

function mergeAttendance_(baseAttendance, incomingAttendance) {
  var base = baseAttendance || {};
  var incoming = incomingAttendance || {};
  var out = {
    going: mergeUniqueArray_(base.going, []),
    leave: mergeUniqueArray_(base.leave, []),
    unknown: mergeUniqueArray_(base.unknown, [])
  };
  ['going', 'leave', 'unknown'].forEach(function(status) {
    (Array.isArray(incoming[status]) ? incoming[status] : []).forEach(function(memberId) {
      memberId = String(memberId || '').trim();
      if (!memberId) return;
      out.going = out.going.filter(function(id) { return id !== memberId; });
      out.leave = out.leave.filter(function(id) { return id !== memberId; });
      out.unknown = out.unknown.filter(function(id) { return id !== memberId; });
      out[status].push(memberId);
    });
  });
  return out;
}

function mergePublicPayload_(basePayload, incomingPayload) {
  var base = basePayload && Array.isArray(basePayload.courses) ? basePayload : { courses: [] };
  var incomingCourses = incomingPayload && Array.isArray(incomingPayload.courses) ? incomingPayload.courses : [];
  incomingCourses.forEach(function(incomingCourse) {
    if (!incomingCourse || !incomingCourse.id) return;
    var course = base.courses.find(function(c) { return String(c.id) === String(incomingCourse.id); });
    if (!course) return;
    course.participantSignups = mergeByIdOrKey_(course.participantSignups, incomingCourse.participantSignups, function(item) {
      return [item.farmOrName || item.farmName || item.name || '', item.contactName || item.contact || ''].join('|');
    });
    course.checkins = mergeCheckins_(course.checkins, incomingCourse.checkins);
    course.feedbacks = mergeByIdOrKey_(course.feedbacks, incomingCourse.feedbacks, function(item) {
      return [item.memberId || '', item.createdAt || item.updatedAt || '', item.overallScore || ''].join('|');
    });
    course.attendance = mergeAttendance_(course.attendance, incomingCourse.attendance);
    course.participantCount = String(publicSignupTotal_(course));
    updateReconfirmState_(course);
    course.updatedAt = new Date().toISOString();
  });
  return base;
}

function publicSignupTotal_(course) {
  if (!course || !Array.isArray(course.participantSignups)) return 0;
  return course.participantSignups.reduce(function(sum, item) {
    if (String(item.status || 'going') !== 'going') return sum;
    var n = Number(String(item.count || item.participantCount || '').trim());
    return sum + (isFinite(n) && n > 0 ? n : 0);
  }, 0);
}

function updateParticipantSignup_(payload, courseId, signup) {
  if (!courseId) throw new Error('Missing courseId');
  if (!payload || !Array.isArray(payload.courses)) throw new Error('Cloud payload is invalid');
  var course = payload.courses.find(function(c) { return String(c.id) === courseId; });
  if (!course) throw new Error('Course not found: ' + courseId);
  if (!Array.isArray(course.participantSignups)) course.participantSignups = [];

  var farmOrName = String(signup.farmOrName || signup.farmName || signup.name || '').trim();
  var contactName = String(signup.contactName || signup.contact || '').trim();
  var count = Number(String(signup.count || signup.participantCount || '0').trim());
  var status = String(signup.status || 'going').trim();
  if (['going', 'leave', 'unknown'].indexOf(status) < 0) status = 'going';
  if (!farmOrName) throw new Error('Missing farmOrName');
  if (status === 'going') {
    if (!isFinite(count) || count < 1) throw new Error('Invalid participant count');
    count = Math.floor(count);
  } else {
    count = 0;
  }

  var key = farmOrName.toLowerCase();
  var contactKey = contactName.toLowerCase();
  var index = course.participantSignups.findIndex(function(item) {
    var itemKey = String(item.farmOrName || '').trim().toLowerCase();
    var itemContact = String(item.contactName || '').trim().toLowerCase();
    return key && itemKey === key && (!contactKey || !itemContact || itemContact === contactKey);
  });
  var item = {
    id: String(signup.id || (index >= 0 ? course.participantSignups[index].id : ('ps' + Date.now() + Math.floor(Math.random() * 1000)))),
    farmOrName: farmOrName,
    contactName: contactName,
    count: String(count),
    phone: String(signup.phone || '').trim(),
    note: String(signup.note || '').trim(),
    status: status,
    needsReconfirm: false,
    previousStatus: String(index >= 0 ? (course.participantSignups[index].previousStatus || '') : ''),
    previousCount: String(index >= 0 ? (course.participantSignups[index].previousCount || '') : ''),
    reconfirmAt: String(index >= 0 ? (course.participantSignups[index].reconfirmAt || '') : ''),
    checkinStatus: String(signup.checkinStatus || (index >= 0 ? (course.participantSignups[index].checkinStatus || '') : '')),
    checkinTime: String(signup.checkinTime || (index >= 0 ? (course.participantSignups[index].checkinTime || '') : '')),
    checkinNote: String(signup.checkinNote || (index >= 0 ? (course.participantSignups[index].checkinNote || '') : '')),
    checkedCount: String(signup.checkedCount || (index >= 0 ? (course.participantSignups[index].checkedCount || '') : '')),
    createdAt: String(signup.createdAt || (index >= 0 ? course.participantSignups[index].createdAt : new Date().toISOString())),
    updatedAt: new Date().toISOString()
  };
  if (index >= 0) course.participantSignups[index] = item;
  else course.participantSignups.push(item);
  course.participantCount = String(publicSignupTotal_(course));
  refreshReconfirmStatus_(course, payload.members || []);
}

function updateFeedback_(payload, courseId, memberId, feedback, token) {
  if (!courseId || !memberId) throw new Error('Missing courseId or memberId');
  if (!payload || !Array.isArray(payload.members) || !Array.isArray(payload.courses)) throw new Error('Cloud payload is invalid');

  const member = payload.members.find(m => String(m.id) === memberId);
  if (!member) throw new Error('Member not found: ' + memberId);
  const isAdmin = token === ADMIN_TOKEN;
  if (!isAdmin && String(member.memberToken || '') !== String(token || '')) {
    throw new Error('會員 Token 不正確');
  }

  const course = payload.courses.find(c => String(c.id) === courseId);
  if (!course) throw new Error('Course not found: ' + courseId);
  if (!Array.isArray(course.feedbacks)) course.feedbacks = [];

  const item = {
    id: String(feedback.id || ('fb' + Date.now() + Math.floor(Math.random() * 1000))),
    memberId: memberId,
    overallScore: String(feedback.overallScore || ''),
    speakerScore: String(feedback.speakerScore || ''),
    practicalScore: String(feedback.practicalScore || ''),
    topicFitScore: String(feedback.topicFitScore || ''),
    difficulty: String(feedback.difficulty || '剛好'),
    favoritePoint: String(feedback.favoritePoint || ''),
    improvement: String(feedback.improvement || ''),
    nextTopic: String(feedback.nextTopic || ''),
    applyPlan: String(feedback.applyPlan || ''),
    anonymous: Boolean(feedback.anonymous),
    createdAt: String(feedback.createdAt || new Date().toISOString())
  };
  const index = course.feedbacks.findIndex(f => String(f.memberId || '') === memberId);
  if (index >= 0) {
    course.feedbacks[index] = Object.assign({}, course.feedbacks[index], item);
  } else {
    course.feedbacks.push(item);
  }
}

function updatePublicCheckin_(payload, courseId, body) {
  if (!courseId) throw new Error('Missing courseId');
  if (!payload || !Array.isArray(payload.courses)) throw new Error('Cloud payload is invalid');
  const status = String(body.status || 'checked').trim();
  const note = String(body.note || '').trim();
  if (!['checked', 'late', 'absent', 'leave', 'clear'].includes(status)) throw new Error('Invalid checkin status');
  const course = payload.courses.find(c => String(c.id) === courseId);
  if (!course) throw new Error('Course not found: ' + courseId);
  if (!course.checkins || typeof course.checkins !== 'object' || Array.isArray(course.checkins)) course.checkins = {};
  if (!Array.isArray(course.participantSignups)) course.participantSignups = [];

  const memberId = String(body.memberId || '').trim();
  const signupId = String(body.signupId || '').trim();
  const now = new Date().toISOString();

  if (memberId) {
    const member = Array.isArray(payload.members) ? payload.members.find(m => String(m.id) === memberId) : null;
    if (!member) throw new Error('Member not found: ' + memberId);
    if (status === 'clear') course.checkins[memberId] = { status: '', time: '', note: '' };
    else course.checkins[memberId] = { status, time: now, note: note || 'QR Code 現場報到' };
    if (status === 'checked' || status === 'late') {
      const a = course.attendance || { going: [], leave: [], unknown: [] };
      const clean = {
        going: Array.isArray(a.going) ? a.going.filter(id => id !== memberId) : [],
        leave: Array.isArray(a.leave) ? a.leave.filter(id => id !== memberId) : [],
        unknown: Array.isArray(a.unknown) ? a.unknown.filter(id => id !== memberId) : []
      };
      clean.going.push(memberId);
      course.attendance = clean;
    }
  } else if (signupId) {
    const signup = course.participantSignups.find(item => String(item.id) === signupId);
    if (!signup) throw new Error('Signup not found: ' + signupId);
    signup.checkinStatus = status === 'clear' ? '' : status;
    signup.checkinTime = status === 'clear' ? '' : now;
    signup.checkinNote = status === 'clear' ? '' : (note || 'QR Code 現場報到');
    signup.checkedCount = (status === 'checked' || status === 'late') ? String(signup.count || '1') : '';
    signup.updatedAt = now;
  } else if (body.signup) {
    const signup = Object.assign({}, body.signup);
    signup.status = 'going';
    signup.checkinStatus = status === 'clear' ? '' : status;
    signup.checkinTime = status === 'clear' ? '' : now;
    signup.checkinNote = status === 'clear' ? '' : (note || '現場新增報到');
    signup.checkedCount = String(signup.count || '1');
    updateParticipantSignup_(payload, courseId, signup);
  } else {
    throw new Error('Missing memberId, signupId or signup');
  }
  course.participantCount = String(publicSignupTotal_(course) || course.participantCount || '');
}

function updateCheckin_(payload, courseId, memberId, status, note, token) {
  if (!courseId || !memberId) throw new Error('Missing courseId or memberId');
  if (!['checked', 'late', 'absent', 'leave', 'clear'].includes(status)) throw new Error('Invalid checkin status');
  if (!payload || !Array.isArray(payload.members) || !Array.isArray(payload.courses)) throw new Error('Cloud payload is invalid');

  const member = payload.members.find(m => String(m.id) === memberId);
  if (!member) throw new Error('Member not found: ' + memberId);
  const isAdmin = token === ADMIN_TOKEN;
  if (!isAdmin && String(member.memberToken || '') !== String(token || '')) {
    throw new Error('會員 Token 不正確');
  }

  const course = payload.courses.find(c => String(c.id) === courseId);
  if (!course) throw new Error('Course not found: ' + courseId);
  if (!course.checkins || typeof course.checkins !== 'object' || Array.isArray(course.checkins)) course.checkins = {};

  if (status === 'clear') {
    course.checkins[memberId] = { status: '', time: '', note: '' };
  } else {
    course.checkins[memberId] = {
      status,
      time: new Date().toISOString(),
      note: note || ''
    };
  }

  if (status === 'checked' || status === 'late') {
    const a = course.attendance || { going: [], leave: [], unknown: [] };
    const clean = {
      going: Array.isArray(a.going) ? a.going.filter(id => id !== memberId) : [],
      leave: Array.isArray(a.leave) ? a.leave.filter(id => id !== memberId) : [],
      unknown: Array.isArray(a.unknown) ? a.unknown.filter(id => id !== memberId) : []
    };
    clean.going.push(memberId);
    course.attendance = clean;
    const actual = Object.keys(course.checkins).filter(id => ['checked', 'late'].includes(String(course.checkins[id].status || ''))).length;
    course.participantCount = String(actual || course.participantCount || '');
  }
}

function log_(action, actor, note) {
  const ss = getSs_();
  let sheet = ss.getSheetByName(LOG_SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(LOG_SHEET_NAME);
    sheet.getRange(1, 1, 1, 4).setValues([['time', 'action', 'actor', 'note']]);
    sheet.setFrozenRows(1);
  }
  sheet.appendRow([new Date(), action, actor, note]);
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
