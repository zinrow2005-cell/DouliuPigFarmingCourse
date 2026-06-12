const STORAGE_KEY = 'shanxianPigStudyClub.v56';
const PREVIOUS_STORAGE_KEY = 'shanxianPigStudyClub.v55';
const LEGACY_STORAGE_KEY = 'shanxianPigStudyClub.v9';
const OLDER_STORAGE_KEY = 'shanxianPigStudyClub.v5';
const OLD_LEGACY_STORAGE_KEY = 'shanxianPigStudyClub.v4';
const FIRST_STORAGE_KEY = 'shanxianPigStudyClub.v3';
const ANCIENT_STORAGE_KEY = 'shanxianPigStudyClub.v2';
const SETTINGS_KEY = 'shanxianPigStudyClub.settings.v25';
const PREVIOUS_SETTINGS_KEY = 'shanxianPigStudyClub.settings.v24';
const BACKUP_KEY = 'shanxianPigStudyClub.backups.v56';
const PREVIOUS_BACKUP_KEY = 'shanxianPigStudyClub.backups.v55';
const ADMIN_UNLOCK_KEY = 'shanxianPigStudyClub.adminUnlocked.v56';
const MAX_BACKUP_COUNT = 35;

const seedData = {
  "members": [
    {
      "id": "m002",
      "memberToken": "SX-M002-2026",
      "name": "讀書會會長",
      "role": "會長",
      "groupName": "幹部",
      "farmName": "",
      "area": "台中山線",
      "farmType": "養豬產業",
      "scale": "不公開",
      "specialty": "會務協調、課程安排",
      "phone": "",
      "lineId": "",
      "bio": "示範資料：可放年度讀書會方向、課程安排與聯絡方式。",
      "visibility": "會員可見"
    },
    {
      "id": "m003",
      "memberToken": "SX-M003-2026",
      "name": "第一組組長",
      "role": "組長",
      "groupName": "第一組",
      "farmName": "",
      "area": "苗栗/台中",
      "farmType": "母豬場",
      "scale": "不公開",
      "specialty": "會員聯絡、出席統計",
      "phone": "",
      "lineId": "",
      "bio": "示範資料：負責組員通知、課程確認與出席回報。",
      "visibility": "會員可見"
    }
  ],
  "locations": [
    {
      "id": "loc_matsuya",
      "name": "松屋日本料理",
      "address": "雲林縣斗六市中正路8號",
      "phone": "05-5320999",
      "googleMapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%9B%B2%E6%9E%97%E7%B8%A3%E6%96%97%E5%85%AD%E5%B8%82%E4%B8%AD%E6%AD%A3%E8%B7%AF8%E8%99%9F%20%E6%9D%BE%E5%B1%8B%E6%97%A5%E6%9C%AC%E6%96%99%E7%90%86",
      "parkingAvailable": "未提供",
      "parkingNote": "尚未提供停車資訊，請課前再確認。",
      "capacity": "",
      "mealType": "日本料理 / 聚餐",
      "avgCost": "",
      "note": "2025/01/17 課程地點；地址/電話已補齊。"
    },
    {
      "id": "loc_haixiang",
      "name": "海象土雞城",
      "address": "雲林縣斗六市梅林里梅林路167號",
      "phone": "05-5576789 / 05-5571605",
      "googleMapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%9B%B2%E6%9E%97%E7%B8%A3%E6%96%97%E5%85%AD%E5%B8%82%E6%A2%85%E6%9E%97%E9%87%8C%E6%A2%85%E6%9E%97%E8%B7%AF167%E8%99%9F%20%E6%B5%B7%E8%B1%A1%E5%9C%9F%E9%9B%9E%E5%9F%8E",
      "parkingAvailable": "未提供",
      "parkingNote": "尚未提供停車資訊，請課前再確認。",
      "capacity": "",
      "mealType": "土雞城 / 桌菜",
      "avgCost": "",
      "note": "2026/02/11 課程地點；地址/電話已補齊。"
    },
    {
      "id": "loc_sakura",
      "name": "櫻日式創意料理 / 斗六櫻餐廳",
      "address": "雲林縣斗六市安順街6號",
      "phone": "05-5330966",
      "googleMapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%9B%B2%E6%9E%97%E7%B8%A3%E6%96%97%E5%85%AD%E5%B8%82%E5%AE%89%E9%A0%86%E8%A1%976%E8%99%9F%20%E6%AB%BB%E6%97%A5%E5%BC%8F%E5%89%B5%E6%84%8F%E6%96%99%E7%90%86%20%E6%96%97%E5%85%AD%E6%AB%BB%E9%A4%90%E5%BB%B3",
      "parkingAvailable": "未提供",
      "parkingNote": "尚未提供停車資訊，請課前再確認。",
      "capacity": "",
      "mealType": "日式料理 / 桌菜",
      "avgCost": "",
      "note": "多場雲林養豬山線座談會使用地點；09/04 原文寫斗六市順安街6號，本系統先依多數資料使用安順街6號。"
    },
    {
      "id": "loc_taohuayuan",
      "name": "桃花源餐廳",
      "address": "雲林縣斗六市文化路646巷101號",
      "phone": "05-5353669",
      "googleMapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%9B%B2%E6%9E%97%E7%B8%A3%E6%96%97%E5%85%AD%E5%B8%82%E6%96%87%E5%8C%96%E8%B7%AF646%E5%B7%B7101%E8%99%9F%20%E6%A1%83%E8%8A%B1%E6%BA%90%E9%A4%90%E5%BB%B3",
      "parkingAvailable": "未提供",
      "parkingNote": "尚未提供停車資訊，請課前再確認。",
      "capacity": "",
      "mealType": "餐廳 / 桌菜",
      "avgCost": "",
      "note": "2025/06/16 課程地點；地址/電話已補齊。"
    },
    {
      "id": "loc_shuiniao",
      "name": "水鳥和洋創作料理-斗六店",
      "address": "雲林縣斗六市正心一路65號",
      "phone": "05-551-0515",
      "googleMapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%9B%B2%E6%9E%97%E7%B8%A3%E6%96%97%E5%85%AD%E5%B8%82%E6%AD%A3%E5%BF%83%E4%B8%80%E8%B7%AF65%E8%99%9F%20%E6%B0%B4%E9%B3%A5%E5%92%8C%E6%B4%8B%E5%89%B5%E4%BD%9C%E6%96%99%E7%90%86%20%E6%96%97%E5%85%AD%E5%BA%97",
      "parkingAvailable": "未提供",
      "parkingNote": "尚未提供停車資訊，請課前再確認。",
      "capacity": "",
      "mealType": "和洋創作料理",
      "avgCost": "",
      "note": "2025/08/13、2026/05/07 課程地點；地址/電話已補齊。"
    },
    {
      "id": "loc_haicun",
      "name": "海村澎湖活海鮮餐廳",
      "address": "雲林縣斗六市南京路430號",
      "phone": "05-5326423",
      "googleMapUrl": "https://www.google.com/maps/search/?api=1&query=%E9%9B%B2%E6%9E%97%E7%B8%A3%E6%96%97%E5%85%AD%E5%B8%82%E5%8D%97%E4%BA%AC%E8%B7%AF430%E8%99%9F%20%E6%B5%B7%E6%9D%91%E6%BE%8E%E6%B9%96%E6%B4%BB%E6%B5%B7%E9%AE%AE%E9%A4%90%E5%BB%B3",
      "parkingAvailable": "未提供",
      "parkingNote": "尚未提供停車資訊，請課前再確認。",
      "capacity": "",
      "mealType": "海鮮餐廳 / 桌菜",
      "avgCost": "",
      "note": "2025/10/14 課程地點；地址/電話已補齊。"
    },
    {
      "id": "loc_ooedo",
      "name": "大江戶日本料理",
      "address": "雲林縣斗六市龍潭路14-14號",
      "phone": "0905-916-777",
      "googleMapUrl": "https://maps.app.goo.gl/B5mMZdDJmUtUnBw39?g_st=ic",
      "parkingAvailable": "有",
      "parkingNote": "附設停車場：https://maps.app.goo.gl/nbtgxoAJhF6oGzsh6?g_st=ic",
      "capacity": "",
      "mealType": "日本料理 / 聚餐",
      "avgCost": "",
      "note": "2026/06/10 課程地點，已附 Google 地圖、地址、電話與停車場連結。"
    }
  ],
  "courses": [
    {
      "id": "c_20250117",
      "year": "2025",
      "date": "2025-01-17",
      "startTime": "18:00",
      "endTime": "21:00",
      "title": "2024台灣豬病例回顧，2025整備出發",
      "speaker": "郭鴻志教授",
      "locationId": "loc_matsuya",
      "content": "主題：2024台灣豬病例回顧，2025整備出發。主辦公司：台灣禮藍 & 雲偉生技。",
      "parkingNote": "尚未提供停車資訊，請課前再確認。",
      "fee": "",
      "status": "done",
      "attachmentNote": "",
      "afterNote": "",
      "attendance": {
        "going": [],
        "leave": [],
        "unknown": []
      },
      "participantCount": "",
      "category": "疾病管理",
      "attachmentLinks": "",
      "photoLinks": "",
      "questionNote": "",
      "applicationNote": "",
      "followUpNote": "",
      "unitMealFee": "",
      "totalMealCost": "",
      "otherCost": "0",
      "settleNote": "",
      "payments": {},
      "prepTasks": [],
      "checkins": {},
      "mediaItems": [],
      "feedbacks": [],
      "participantSignups": [],
      "sourceNote": "使用者提供：2025年1月17，時間18:00，地點松屋日本料理，公司台灣禮藍 & 雲偉生技，主講郭鴻志教授。",
      "company": "台灣禮藍 & 雲偉生技",
      "sponsorVendorId": "sv_lichan_yunwei",
      "sponsorContact": ""
    },
    {
      "id": "c_20250312",
      "year": "2025",
      "date": "2025-03-12",
      "startTime": "18:30",
      "endTime": "21:00",
      "title": "從生物安全確實讓豬場效益提升",
      "speaker": "廖培志",
      "locationId": "loc_sakura",
      "content": "雲林養豬山線座談會。講課老師：防治所所長 廖培志。",
      "parkingNote": "尚未提供停車資訊，請課前再確認。",
      "fee": "",
      "status": "done",
      "attachmentNote": "",
      "afterNote": "",
      "attendance": {
        "going": [],
        "leave": [],
        "unknown": []
      },
      "participantCount": "",
      "category": "疾病管理",
      "attachmentLinks": "",
      "photoLinks": "",
      "questionNote": "",
      "applicationNote": "",
      "followUpNote": "",
      "unitMealFee": "",
      "totalMealCost": "",
      "otherCost": "0",
      "settleNote": "",
      "payments": {},
      "prepTasks": [],
      "checkins": {},
      "mediaItems": [],
      "feedbacks": [],
      "participantSignups": [],
      "sourceNote": "日期：2025/03/12 星期三；地點：櫻日式創意料理。",
      "company": "",
      "sponsorVendorId": "",
      "sponsorContact": ""
    },
    {
      "id": "c_20250410",
      "year": "2025",
      "date": "2025-04-10",
      "startTime": "18:30",
      "endTime": "21:00",
      "title": "豬飼料配方原料選用與夏季調整建議事項",
      "speaker": "陳啓禎博士",
      "locationId": "loc_sakura",
      "content": "雲林養豬山線座談會。豬飼料配方原料選用與夏季調整建議事項。",
      "parkingNote": "尚未提供停車資訊，請課前再確認。",
      "fee": "",
      "status": "done",
      "attachmentNote": "",
      "afterNote": "",
      "attendance": {
        "going": [],
        "leave": [],
        "unknown": []
      },
      "participantCount": "",
      "category": "營養飼料",
      "attachmentLinks": "",
      "photoLinks": "",
      "questionNote": "",
      "applicationNote": "",
      "followUpNote": "",
      "unitMealFee": "",
      "totalMealCost": "",
      "otherCost": "0",
      "settleNote": "",
      "payments": {},
      "prepTasks": [],
      "checkins": {},
      "mediaItems": [],
      "feedbacks": [],
      "participantSignups": [],
      "sourceNote": "日期：114年04月10日 星期四。",
      "company": "",
      "sponsorVendorId": "",
      "sponsorContact": ""
    },
    {
      "id": "c_20250506",
      "year": "2025",
      "date": "2025-05-06",
      "startTime": "18:30",
      "endTime": "21:00",
      "title": "疫苗種類簡介與母豬適合的免疫時機",
      "speaker": "廖志明博士",
      "locationId": "loc_sakura",
      "content": "雲林養豬山線座談會。疫苗種類簡介與母豬適合的免疫時機。備註：原文標示星期三，系統先依日期 114/05/06 建檔。",
      "parkingNote": "尚未提供停車資訊，請課前再確認。",
      "fee": "",
      "status": "done",
      "attachmentNote": "",
      "afterNote": "",
      "attendance": {
        "going": [],
        "leave": [],
        "unknown": []
      },
      "participantCount": "",
      "category": "疾病管理",
      "attachmentLinks": "",
      "photoLinks": "",
      "questionNote": "",
      "applicationNote": "",
      "followUpNote": "",
      "unitMealFee": "",
      "totalMealCost": "",
      "otherCost": "0",
      "settleNote": "",
      "payments": {},
      "prepTasks": [],
      "checkins": {},
      "mediaItems": [],
      "feedbacks": [],
      "participantSignups": [],
      "sourceNote": "日期：114年05月06日（三），原文星期與日期可能需再確認。",
      "company": "",
      "sponsorVendorId": "",
      "sponsorContact": ""
    },
    {
      "id": "c_20250616",
      "year": "2025",
      "date": "2025-06-16",
      "startTime": "18:00",
      "endTime": "21:00",
      "title": "呼吸道疾病預防",
      "speaker": "郭鴻志教授",
      "locationId": "loc_taohuayuan",
      "content": "活動資訊：嘉義大學郭鴻志教授，授課內容：呼吸道疾病預防。",
      "parkingNote": "尚未提供停車資訊，請課前再確認。",
      "fee": "",
      "status": "done",
      "attachmentNote": "",
      "afterNote": "",
      "attendance": {
        "going": [],
        "leave": [],
        "unknown": []
      },
      "participantCount": "",
      "category": "疾病管理",
      "attachmentLinks": "",
      "photoLinks": "",
      "questionNote": "",
      "applicationNote": "",
      "followUpNote": "",
      "unitMealFee": "",
      "totalMealCost": "",
      "otherCost": "0",
      "settleNote": "",
      "payments": {},
      "prepTasks": [],
      "checkins": {},
      "mediaItems": [],
      "feedbacks": [],
      "participantSignups": [],
      "sourceNote": "日期：2025年6月16日（星期一），時間下午6:00-9:00。",
      "company": "",
      "sponsorVendorId": "",
      "sponsorContact": ""
    },
    {
      "id": "c_20250702",
      "year": "2025",
      "date": "2025-07-02",
      "startTime": "18:30",
      "endTime": "21:00",
      "title": "為什麼小豬需要打疫苗",
      "speaker": "郭坤霖獸醫",
      "locationId": "loc_sakura",
      "content": "雲林養豬山線座談會。課程：為什麼小豬需要打疫苗。",
      "parkingNote": "尚未提供停車資訊，請課前再確認。",
      "fee": "",
      "status": "done",
      "attachmentNote": "",
      "afterNote": "",
      "attendance": {
        "going": [],
        "leave": [],
        "unknown": []
      },
      "participantCount": "",
      "category": "疾病管理",
      "attachmentLinks": "",
      "photoLinks": "",
      "questionNote": "",
      "applicationNote": "",
      "followUpNote": "",
      "unitMealFee": "",
      "totalMealCost": "",
      "otherCost": "0",
      "settleNote": "",
      "payments": {},
      "prepTasks": [],
      "checkins": {},
      "mediaItems": [],
      "feedbacks": [],
      "participantSignups": [],
      "sourceNote": "日期：114年07月02日（三）。",
      "company": "",
      "sponsorVendorId": "",
      "sponsorContact": ""
    },
    {
      "id": "c_20250813",
      "year": "2025",
      "date": "2025-08-13",
      "startTime": "18:30",
      "endTime": "21:00",
      "title": "飼料與原料品質分析及應用",
      "speaker": "蔡智恆協理",
      "locationId": "loc_shuiniao",
      "content": "雲林養豬山線座談會。課程：飼料與原料品質分析及應用。",
      "parkingNote": "尚未提供停車資訊，請課前再確認。",
      "fee": "",
      "status": "done",
      "attachmentNote": "",
      "afterNote": "",
      "attendance": {
        "going": [],
        "leave": [],
        "unknown": []
      },
      "participantCount": "",
      "category": "營養飼料",
      "attachmentLinks": "",
      "photoLinks": "",
      "questionNote": "",
      "applicationNote": "",
      "followUpNote": "",
      "unitMealFee": "",
      "totalMealCost": "",
      "otherCost": "0",
      "settleNote": "",
      "payments": {},
      "prepTasks": [],
      "checkins": {},
      "mediaItems": [],
      "feedbacks": [],
      "participantSignups": [],
      "sourceNote": "日期：114年08月13日（三）；地點：水鳥和洋創作料理。",
      "company": "",
      "sponsorVendorId": "",
      "sponsorContact": ""
    },
    {
      "id": "c_20250904",
      "year": "2025",
      "date": "2025-09-04",
      "startTime": "18:30",
      "endTime": "21:00",
      "title": "10變成1000的工藝（好的預混料來源要件）",
      "speaker": "王建文總經理",
      "locationId": "loc_sakura",
      "content": "雲林養豬山線座談會。課程：10變成1000的工藝（好的預混料來源要件）。講課老師：台灣裕昌國際股份有限公司 王建文總經理。",
      "parkingNote": "尚未提供停車資訊，請課前再確認。",
      "fee": "",
      "status": "done",
      "attachmentNote": "",
      "afterNote": "",
      "attendance": {
        "going": [],
        "leave": [],
        "unknown": []
      },
      "participantCount": "",
      "category": "營養飼料",
      "attachmentLinks": "",
      "photoLinks": "",
      "questionNote": "",
      "applicationNote": "",
      "followUpNote": "",
      "unitMealFee": "",
      "totalMealCost": "",
      "otherCost": "0",
      "settleNote": "",
      "payments": {},
      "prepTasks": [],
      "checkins": {},
      "mediaItems": [],
      "feedbacks": [],
      "participantSignups": [],
      "sourceNote": "日期：114年09月04日（四）；地點原文寫櫻日本料理（斗六市順安街6號），系統先併入櫻日式創意料理/斗六櫻餐廳。",
      "company": "台灣裕昌國際股份有限公司",
      "sponsorVendorId": "sv_yuchang",
      "sponsorContact": "王建文總經理"
    },
    {
      "id": "c_20251014",
      "year": "2025",
      "date": "2025-10-14",
      "startTime": "18:30",
      "endTime": "19:30",
      "title": "提升豬隻防護力的關鍵要素",
      "speaker": "盧世哲顧問",
      "locationId": "loc_haicun",
      "content": "雲林養豬山線座談會。課程：提升豬隻防護力的關鍵要素。",
      "parkingNote": "尚未提供停車資訊，請課前再確認。",
      "fee": "",
      "status": "done",
      "attachmentNote": "",
      "afterNote": "",
      "attendance": {
        "going": [],
        "leave": [],
        "unknown": []
      },
      "participantCount": "",
      "category": "疾病管理",
      "attachmentLinks": "",
      "photoLinks": "",
      "questionNote": "",
      "applicationNote": "",
      "followUpNote": "",
      "unitMealFee": "",
      "totalMealCost": "",
      "otherCost": "0",
      "settleNote": "",
      "payments": {},
      "prepTasks": [],
      "checkins": {},
      "mediaItems": [],
      "feedbacks": [],
      "participantSignups": [],
      "sourceNote": "日期：114.10.14，時間18:30～19:30。",
      "company": "",
      "sponsorVendorId": "",
      "sponsorContact": ""
    },
    {
      "id": "c_20260211",
      "year": "2026",
      "date": "2026-02-11",
      "startTime": "18:30",
      "endTime": "21:00",
      "title": "慢談抗生素利用與價值",
      "speaker": "吳明勳",
      "locationId": "loc_haixiang",
      "content": "主題：慢談抗生素利用與價值。主辦公司：中國化學。",
      "parkingNote": "尚未提供停車資訊，請課前再確認。",
      "fee": "",
      "status": "done",
      "attachmentNote": "",
      "afterNote": "",
      "attendance": {
        "going": [],
        "leave": [],
        "unknown": []
      },
      "participantCount": "",
      "category": "疾病管理",
      "attachmentLinks": "",
      "photoLinks": "",
      "questionNote": "",
      "applicationNote": "",
      "followUpNote": "",
      "unitMealFee": "",
      "totalMealCost": "",
      "otherCost": "0",
      "settleNote": "",
      "payments": {},
      "prepTasks": [],
      "checkins": {},
      "mediaItems": [],
      "feedbacks": [],
      "participantSignups": [],
      "sourceNote": "使用者提供：2026年2月11，時間18:30，地點海象土雞城，公司中國化學，主講吳明勳。",
      "company": "中國化學",
      "sponsorVendorId": "sv_china_chemical",
      "sponsorContact": ""
    },
    {
      "id": "c_20260226",
      "year": "2026",
      "date": "2026-02-26",
      "startTime": "18:30",
      "endTime": "19:30",
      "title": "中國近年嚴重傳染病傳播&防治歷程",
      "speaker": "陳秉誼",
      "locationId": "loc_sakura",
      "content": "雲林養豬山線座談會。課程：中國近年嚴重傳染病傳播&防治歷程。",
      "parkingNote": "尚未提供停車資訊，請課前再確認。",
      "fee": "",
      "status": "done",
      "attachmentNote": "",
      "afterNote": "",
      "attendance": {
        "going": [],
        "leave": [],
        "unknown": []
      },
      "participantCount": "",
      "category": "疾病管理",
      "attachmentLinks": "",
      "photoLinks": "",
      "questionNote": "",
      "applicationNote": "",
      "followUpNote": "",
      "unitMealFee": "",
      "totalMealCost": "",
      "otherCost": "0",
      "settleNote": "",
      "payments": {},
      "prepTasks": [],
      "checkins": {},
      "mediaItems": [],
      "feedbacks": [],
      "participantSignups": [],
      "sourceNote": "日期：115/2/26，地點斗六櫻餐廳。",
      "company": "",
      "sponsorVendorId": "",
      "sponsorContact": ""
    },
    {
      "id": "c_20260319",
      "year": "2026",
      "date": "2026-03-19",
      "startTime": "18:30",
      "endTime": "19:30",
      "title": "新時代活性維生素D對豬隻的效益",
      "speaker": "鄭英康博士",
      "locationId": "loc_sakura",
      "content": "雲林養豬山線座談會。講課老師：鄭英康博士（獸醫師），德國 Phytobiotics 亞太區技術總監暨馬來西亞發展總監。",
      "parkingNote": "尚未提供停車資訊，請課前再確認。",
      "fee": "",
      "status": "done",
      "attachmentNote": "",
      "afterNote": "",
      "attendance": {
        "going": [],
        "leave": [],
        "unknown": []
      },
      "participantCount": "",
      "category": "營養飼料",
      "attachmentLinks": "",
      "photoLinks": "",
      "questionNote": "",
      "applicationNote": "",
      "followUpNote": "",
      "unitMealFee": "",
      "totalMealCost": "",
      "otherCost": "0",
      "settleNote": "",
      "payments": {},
      "prepTasks": [],
      "checkins": {},
      "mediaItems": [],
      "feedbacks": [],
      "participantSignups": [],
      "sourceNote": "日期：115/3/19，地點斗六櫻餐廳。",
      "company": "",
      "sponsorVendorId": "",
      "sponsorContact": ""
    },
    {
      "id": "c_20260409",
      "year": "2026",
      "date": "2026-04-09",
      "startTime": "18:30",
      "endTime": "19:30",
      "title": "精益求精",
      "speaker": "陳靜玟獸醫師",
      "locationId": "loc_sakura",
      "content": "雲林養豬山線座談會。課程：精益求精。講課老師：陳靜玟獸醫師。",
      "parkingNote": "尚未提供停車資訊，請課前再確認。",
      "fee": "",
      "status": "done",
      "attachmentNote": "",
      "afterNote": "",
      "attendance": {
        "going": [],
        "leave": [],
        "unknown": []
      },
      "participantCount": "",
      "category": "其他",
      "attachmentLinks": "",
      "photoLinks": "",
      "questionNote": "",
      "applicationNote": "",
      "followUpNote": "",
      "unitMealFee": "",
      "totalMealCost": "",
      "otherCost": "0",
      "settleNote": "",
      "payments": {},
      "prepTasks": [],
      "checkins": {},
      "mediaItems": [],
      "feedbacks": [],
      "participantSignups": [],
      "sourceNote": "日期：115/4/9，地點斗六櫻餐廳。",
      "company": "",
      "sponsorVendorId": "",
      "sponsorContact": ""
    },
    {
      "id": "c_20260507",
      "year": "2026",
      "date": "2026-05-07",
      "startTime": "18:00",
      "endTime": "21:00",
      "title": "原物料與維生素漲價如何因應",
      "speaker": "劉博士",
      "locationId": "loc_shuiniao",
      "content": "雲林養豬山線座談會。課程：原物料與維生素漲價如何因應。",
      "parkingNote": "尚未提供停車資訊，請課前再確認。",
      "fee": "",
      "status": "done",
      "attachmentNote": "",
      "afterNote": "",
      "attendance": {
        "going": [],
        "leave": [],
        "unknown": []
      },
      "participantCount": "",
      "category": "營養飼料",
      "attachmentLinks": "",
      "photoLinks": "",
      "questionNote": "",
      "applicationNote": "",
      "followUpNote": "",
      "unitMealFee": "",
      "totalMealCost": "",
      "otherCost": "0",
      "settleNote": "",
      "payments": {},
      "prepTasks": [],
      "checkins": {},
      "mediaItems": [],
      "feedbacks": [],
      "participantSignups": [],
      "sourceNote": "原文日期：5/7，因前後為115年課表，系統先以 2026/05/07 建檔。",
      "company": "",
      "sponsorVendorId": "",
      "sponsorContact": ""
    },
    {
      "id": "c_20260610",
      "year": "2026",
      "date": "2026-06-10",
      "startTime": "18:00",
      "endTime": "21:00",
      "title": "近期台灣豬隻重要疾病防控策略",
      "speaker": "郭鴻志教授",
      "locationId": "loc_ooedo",
      "content": "雲林養豬山線座談會。課程：近期台灣豬隻重要疾病防控策略。講課老師：郭鴻志老師。",
      "parkingNote": "附設停車場：https://maps.app.goo.gl/nbtgxoAJhF6oGzsh6?g_st=ic",
      "fee": "",
      "status": "planned",
      "attachmentNote": "",
      "afterNote": "",
      "attendance": {
        "going": [],
        "leave": [],
        "unknown": []
      },
      "participantCount": "",
      "category": "疾病管理",
      "attachmentLinks": "",
      "photoLinks": "",
      "questionNote": "",
      "applicationNote": "",
      "followUpNote": "",
      "unitMealFee": "",
      "totalMealCost": "",
      "otherCost": "0",
      "settleNote": "",
      "payments": {},
      "prepTasks": [],
      "checkins": {},
      "mediaItems": [],
      "feedbacks": [],
      "participantSignups": [],
      "sourceNote": "原文日期：6/10（三），因前後為115年課表且 2026/06/10 為星期三，系統先以 2026/06/10 建檔。",
      "company": "",
      "sponsorVendorId": "",
      "sponsorContact": ""
    }
  ],
  "speakers": [
    {
      "id": "sp_kuo_hung_chih",
      "name": "郭鴻志教授",
      "type": "教授 / 講師",
      "organization": "嘉義大學",
      "area": "台灣",
      "specialty": "豬隻病例回顧、呼吸道疾病預防、疾病防控",
      "phone": "",
      "lineId": "",
      "email": "",
      "defaultFee": "",
      "visibility": "幹部可見",
      "note": "2025/01/17、2025/06/16、2026/06/10 課程講師。"
    },
    {
      "id": "sp_wu_ming_hsun",
      "name": "吳明勳",
      "type": "講師",
      "organization": "",
      "area": "",
      "specialty": "抗生素利用與價值",
      "phone": "",
      "lineId": "",
      "email": "",
      "defaultFee": "",
      "visibility": "幹部可見",
      "note": "2026/02/11 課程講師。"
    },
    {
      "id": "sp_liao_pei_chih",
      "name": "廖培志",
      "type": "防治所所長",
      "organization": "防治所",
      "area": "",
      "specialty": "生物安全、豬場效益提升",
      "phone": "",
      "lineId": "",
      "email": "",
      "defaultFee": "",
      "visibility": "幹部可見",
      "note": "2025/03/12 課程講師。"
    },
    {
      "id": "sp_chen_chi_chen",
      "name": "陳啓禎博士",
      "type": "博士 / 講師",
      "organization": "",
      "area": "",
      "specialty": "豬飼料配方、原料選用、夏季調整",
      "phone": "",
      "lineId": "",
      "email": "",
      "defaultFee": "",
      "visibility": "幹部可見",
      "note": "2025/04/10 課程講師。"
    },
    {
      "id": "sp_liao_chih_ming",
      "name": "廖志明博士",
      "type": "博士 / 講師",
      "organization": "",
      "area": "",
      "specialty": "疫苗種類、母豬免疫時機",
      "phone": "",
      "lineId": "",
      "email": "",
      "defaultFee": "",
      "visibility": "幹部可見",
      "note": "2025/05/06 課程講師。"
    },
    {
      "id": "sp_kuo_kun_lin",
      "name": "郭坤霖獸醫",
      "type": "獸醫師",
      "organization": "",
      "area": "",
      "specialty": "小豬疫苗、免疫規劃",
      "phone": "",
      "lineId": "",
      "email": "",
      "defaultFee": "",
      "visibility": "幹部可見",
      "note": "2025/07/02 課程講師。"
    },
    {
      "id": "sp_tsai_chih_heng",
      "name": "蔡智恆協理",
      "type": "協理 / 講師",
      "organization": "",
      "area": "",
      "specialty": "飼料與原料品質分析及應用",
      "phone": "",
      "lineId": "",
      "email": "",
      "defaultFee": "",
      "visibility": "幹部可見",
      "note": "2025/08/13 課程講師。"
    },
    {
      "id": "sp_wang_chien_wen",
      "name": "王建文總經理",
      "type": "總經理 / 講師",
      "organization": "台灣裕昌國際股份有限公司",
      "area": "",
      "specialty": "預混料來源要件、預混料工藝",
      "phone": "",
      "lineId": "",
      "email": "",
      "defaultFee": "",
      "visibility": "幹部可見",
      "note": "2025/09/04 課程講師。"
    },
    {
      "id": "sp_lu_shih_che",
      "name": "盧世哲顧問",
      "type": "顧問",
      "organization": "",
      "area": "",
      "specialty": "提升豬隻防護力",
      "phone": "",
      "lineId": "",
      "email": "",
      "defaultFee": "",
      "visibility": "幹部可見",
      "note": "2025/10/14 課程講師。"
    },
    {
      "id": "sp_chen_ping_yi",
      "name": "陳秉誼",
      "type": "大中華區經理 / 講師",
      "organization": "",
      "area": "大中華區",
      "specialty": "中國近年嚴重傳染病傳播與防治歷程",
      "phone": "",
      "lineId": "",
      "email": "",
      "defaultFee": "",
      "visibility": "幹部可見",
      "note": "2026/02/26 課程講師。"
    },
    {
      "id": "sp_cheng_ying_kang",
      "name": "鄭英康博士",
      "type": "博士 / 獸醫師",
      "organization": "德國 Phytobiotics",
      "area": "亞太區 / 馬來西亞",
      "specialty": "活性維生素D、豬隻營養效益",
      "phone": "",
      "lineId": "",
      "email": "",
      "defaultFee": "",
      "visibility": "幹部可見",
      "note": "德國 Phytobiotics 亞太區技術總監暨馬來西亞發展總監；2026/03/19 課程講師。"
    },
    {
      "id": "sp_chen_ching_wen",
      "name": "陳靜玟獸醫師",
      "type": "獸醫師",
      "organization": "",
      "area": "",
      "specialty": "精益求精（待補詳細內容）",
      "phone": "",
      "lineId": "",
      "email": "",
      "defaultFee": "",
      "visibility": "幹部可見",
      "note": "2026/04/09 課程講師。"
    },
    {
      "id": "sp_liu_doctor",
      "name": "劉博士",
      "type": "博士 / 講師",
      "organization": "",
      "area": "",
      "specialty": "原物料與維生素價格、飼料成本因應",
      "phone": "",
      "lineId": "",
      "email": "",
      "defaultFee": "",
      "visibility": "幹部可見",
      "note": "2026/05/07 課程講師。"
    }
  ],
  "announcements": [],
  "invitations": [
    {
      "id": "iv_20250117",
      "courseId": "c_20250117",
      "speakerId": "sp_kuo_hung_chih",
      "sponsorVendorId": "sv_lichan_yunwei",
      "status": "已完成",
      "contactDate": "",
      "confirmDate": "",
      "speakerFee": "",
      "sponsorSupportType": "主辦",
      "sponsorAmount": "",
      "sponsorNote": "台灣禮藍 & 雲偉生技",
      "followUpStatus": "",
      "note": "使用者提供：2025年1月17，時間18:00，地點松屋日本料理，公司台灣禮藍 & 雲偉生技，主講郭鴻志教授。"
    },
    {
      "id": "iv_20250312",
      "courseId": "c_20250312",
      "speakerId": "sp_liao_pei_chih",
      "sponsorVendorId": "",
      "status": "已完成",
      "contactDate": "",
      "confirmDate": "",
      "speakerFee": "",
      "sponsorSupportType": "",
      "sponsorAmount": "",
      "sponsorNote": "",
      "followUpStatus": "",
      "note": "日期：2025/03/12 星期三；地點：櫻日式創意料理。"
    },
    {
      "id": "iv_20250410",
      "courseId": "c_20250410",
      "speakerId": "sp_chen_chi_chen",
      "sponsorVendorId": "",
      "status": "已完成",
      "contactDate": "",
      "confirmDate": "",
      "speakerFee": "",
      "sponsorSupportType": "",
      "sponsorAmount": "",
      "sponsorNote": "",
      "followUpStatus": "",
      "note": "日期：114年04月10日 星期四。"
    },
    {
      "id": "iv_20250506",
      "courseId": "c_20250506",
      "speakerId": "sp_liao_chih_ming",
      "sponsorVendorId": "",
      "status": "已完成",
      "contactDate": "",
      "confirmDate": "",
      "speakerFee": "",
      "sponsorSupportType": "",
      "sponsorAmount": "",
      "sponsorNote": "",
      "followUpStatus": "",
      "note": "日期：114年05月06日（三），原文星期與日期可能需再確認。"
    },
    {
      "id": "iv_20250616",
      "courseId": "c_20250616",
      "speakerId": "sp_kuo_hung_chih",
      "sponsorVendorId": "",
      "status": "已完成",
      "contactDate": "",
      "confirmDate": "",
      "speakerFee": "",
      "sponsorSupportType": "",
      "sponsorAmount": "",
      "sponsorNote": "",
      "followUpStatus": "",
      "note": "日期：2025年6月16日（星期一），時間下午6:00-9:00。"
    },
    {
      "id": "iv_20250702",
      "courseId": "c_20250702",
      "speakerId": "sp_kuo_kun_lin",
      "sponsorVendorId": "",
      "status": "已完成",
      "contactDate": "",
      "confirmDate": "",
      "speakerFee": "",
      "sponsorSupportType": "",
      "sponsorAmount": "",
      "sponsorNote": "",
      "followUpStatus": "",
      "note": "日期：114年07月02日（三）。"
    },
    {
      "id": "iv_20250813",
      "courseId": "c_20250813",
      "speakerId": "sp_tsai_chih_heng",
      "sponsorVendorId": "",
      "status": "已完成",
      "contactDate": "",
      "confirmDate": "",
      "speakerFee": "",
      "sponsorSupportType": "",
      "sponsorAmount": "",
      "sponsorNote": "",
      "followUpStatus": "",
      "note": "日期：114年08月13日（三）；地點：水鳥和洋創作料理。"
    },
    {
      "id": "iv_20250904",
      "courseId": "c_20250904",
      "speakerId": "sp_wang_chien_wen",
      "sponsorVendorId": "sv_yuchang",
      "status": "已完成",
      "contactDate": "",
      "confirmDate": "",
      "speakerFee": "",
      "sponsorSupportType": "主辦",
      "sponsorAmount": "",
      "sponsorNote": "台灣裕昌國際股份有限公司",
      "followUpStatus": "",
      "note": "日期：114年09月04日（四）；地點原文寫櫻日本料理（斗六市順安街6號），系統先併入櫻日式創意料理/斗六櫻餐廳。"
    },
    {
      "id": "iv_20251014",
      "courseId": "c_20251014",
      "speakerId": "sp_lu_shih_che",
      "sponsorVendorId": "",
      "status": "已完成",
      "contactDate": "",
      "confirmDate": "",
      "speakerFee": "",
      "sponsorSupportType": "",
      "sponsorAmount": "",
      "sponsorNote": "",
      "followUpStatus": "",
      "note": "日期：114.10.14，時間18:30～19:30。"
    },
    {
      "id": "iv_20260211",
      "courseId": "c_20260211",
      "speakerId": "sp_wu_ming_hsun",
      "sponsorVendorId": "sv_china_chemical",
      "status": "已完成",
      "contactDate": "",
      "confirmDate": "",
      "speakerFee": "",
      "sponsorSupportType": "主辦",
      "sponsorAmount": "",
      "sponsorNote": "中國化學",
      "followUpStatus": "",
      "note": "使用者提供：2026年2月11，時間18:30，地點海象土雞城，公司中國化學，主講吳明勳。"
    },
    {
      "id": "iv_20260226",
      "courseId": "c_20260226",
      "speakerId": "sp_chen_ping_yi",
      "sponsorVendorId": "",
      "status": "已完成",
      "contactDate": "",
      "confirmDate": "",
      "speakerFee": "",
      "sponsorSupportType": "",
      "sponsorAmount": "",
      "sponsorNote": "",
      "followUpStatus": "",
      "note": "日期：115/2/26，地點斗六櫻餐廳。"
    },
    {
      "id": "iv_20260319",
      "courseId": "c_20260319",
      "speakerId": "sp_cheng_ying_kang",
      "sponsorVendorId": "",
      "status": "已完成",
      "contactDate": "",
      "confirmDate": "",
      "speakerFee": "",
      "sponsorSupportType": "",
      "sponsorAmount": "",
      "sponsorNote": "",
      "followUpStatus": "",
      "note": "日期：115/3/19，地點斗六櫻餐廳。"
    },
    {
      "id": "iv_20260409",
      "courseId": "c_20260409",
      "speakerId": "sp_chen_ching_wen",
      "sponsorVendorId": "",
      "status": "已完成",
      "contactDate": "",
      "confirmDate": "",
      "speakerFee": "",
      "sponsorSupportType": "",
      "sponsorAmount": "",
      "sponsorNote": "",
      "followUpStatus": "",
      "note": "日期：115/4/9，地點斗六櫻餐廳。"
    },
    {
      "id": "iv_20260507",
      "courseId": "c_20260507",
      "speakerId": "sp_liu_doctor",
      "sponsorVendorId": "",
      "status": "已完成",
      "contactDate": "",
      "confirmDate": "",
      "speakerFee": "",
      "sponsorSupportType": "",
      "sponsorAmount": "",
      "sponsorNote": "",
      "followUpStatus": "",
      "note": "原文日期：5/7，因前後為115年課表，系統先以 2026/05/07 建檔。"
    },
    {
      "id": "iv_20260610",
      "courseId": "c_20260610",
      "speakerId": "sp_kuo_hung_chih",
      "sponsorVendorId": "",
      "status": "已確認",
      "contactDate": "",
      "confirmDate": "",
      "speakerFee": "",
      "sponsorSupportType": "",
      "sponsorAmount": "",
      "sponsorNote": "",
      "followUpStatus": "",
      "note": "原文日期：6/10（三），因前後為115年課表且 2026/06/10 為星期三，系統先以 2026/06/10 建檔。"
    }
  ],
  "sponsorVendors": [
    {
      "id": "sv_lichan_yunwei",
      "name": "台灣禮藍 & 雲偉生技",
      "type": "動保/生技廠商",
      "contactPerson": "",
      "area": "台灣",
      "products": "動物保健、生物科技相關服務（待補）",
      "phone": "",
      "lineId": "",
      "email": "",
      "supportType": "主辦",
      "defaultSupportAmount": "",
      "visibility": "幹部可見",
      "note": "2025/01/17 課程主辦公司。"
    },
    {
      "id": "sv_china_chemical",
      "name": "中國化學",
      "type": "藥品/化學相關廠商",
      "contactPerson": "",
      "area": "台灣",
      "products": "抗生素、藥品與相關產品（待補）",
      "phone": "",
      "lineId": "",
      "email": "",
      "supportType": "主辦",
      "defaultSupportAmount": "",
      "visibility": "幹部可見",
      "note": "2026/02/11 課程主辦公司。"
    },
    {
      "id": "sv_yuchang",
      "name": "台灣裕昌國際股份有限公司",
      "type": "預混料/飼料添加廠商",
      "contactPerson": "王建文總經理",
      "area": "台灣",
      "products": "預混料、飼料添加與相關服務（待補）",
      "phone": "",
      "lineId": "",
      "email": "",
      "supportType": "主辦/講師來源",
      "defaultSupportAmount": "",
      "visibility": "幹部可見",
      "note": "2025/09/04 課程講師所屬公司，暫列主辦/講師來源公司。"
    }
  ]
};

const defaultSettings = {
  syncUrl: 'https://script.google.com/macros/s/AKfycbzJwB9GqSf4TQNRHyX0RoFTD2QvQjJas_ZId7MiFmJ6wVvUAWZ7CEOdRlGx53KfojGd/exec',
  adminToken: 'shanxian_admin_2026',
  readToken: 'shanxian_read_2026',
  githubPagesUrl: 'https://zinrow2005-cell.github.io/DouliuPigFarmingCourse/',
  adminPassword: 'pig2025',
  requireAdminLogin: 'true',
  defaultMode: 'member',
  memberAllowDirectory: 'true',
  memberShowFarmName: 'true',
  memberShowFarmType: 'true',
  memberShowScale: 'false',
  memberShowPhone: 'false',
  memberShowLine: 'false',
  memberShowSpecialty: 'true',
  memberShowBio: 'true',
  publicHomeNote: '課程時間、地點與停車資訊若有異動，請以 LINE 群組最新公告為準。',
  lastSync: '',
  embedSyncInPublicLinks: 'true',
  autoPullPublicCloud: 'true',
  autoUploadCloud: 'true',
  autoDownloadCloud: 'true',
  autoUploadDelayMs: '5000',
  autoDownloadIntervalMs: '90000'
};

let state = loadState();
let settings = loadSettings();
const bootSearchParams = new URLSearchParams(window.location.search);
const urlSyncSetting = bootSearchParams.get('sync') || bootSearchParams.get('appsScriptUrl') || bootSearchParams.get('webAppUrl');
const urlReadTokenSetting = bootSearchParams.get('rt') || bootSearchParams.get('readToken');
if (urlSyncSetting) settings.syncUrl = urlSyncSetting;
if (urlReadTokenSetting) settings.readToken = urlReadTokenSetting;
if (urlSyncSetting || urlReadTokenSetting) saveSettings();
let publicAutoCloudPullDone = false;
let publicAutoCloudPullRunning = false;
let publicLocalMutationAt = 0;
function markPublicLocalMutation() {
  publicLocalMutationAt = Date.now();
  publicAutoCloudPullDone = true;
}
const MEMBER_PUBLIC_VIEWS = ['dashboard', 'courses', 'announcements', 'locations', 'reply', 'checkin', 'media', 'members'];
const MEMBER_BLOCKED_VIEWS = ['sync', 'data', 'backup', 'settings', 'notify', 'prep', 'groups', 'import', 'course-import', 'planning', 'speakers', 'knowledge', 'records', 'feedback', 'report', 'attendance', 'finance', 'annual-fees', 'share', 'share-card'];

let currentView = resolveInitialView();
let recordFocusCourseId = '';
let appMode = resolveInitialMode();
let replyContext = resolveReplyContext();
let lastPublicSignupResult = null;
let publicSignupSubmitting = false;
let notifyContext = {
  courseId: '',
  preset: 'initial',
  audience: 'group',
  extraNote: '',
  includeMap: true,
  includeParking: true,
  includeFee: true,
  includeStats: true,
  includeContent: true,
  includeLinks: false
};

let shareCardContext = {
  courseId: '',
  template: 'formal',
  tone: 'friendly',
  extraNote: '',
  includeMap: true,
  includeParking: true,
  includeFee: true,
  includeStats: true,
  includeContent: true,
  includeReply: true,
  includeCheckin: false,
  includePublic: true
};

let reportContext = { year: '', category: 'all' };
let planningContext = { year: '', mode: 'all' };
let speakerContext = { type: 'all', status: 'all', search: '' };
let announcementContext = { type: 'all', status: 'all', courseId: 'all', search: '' };
let prepContext = { courseId: 'all', status: 'all', search: '' };
let groupContext = { courseId: 'all', groupName: 'all', status: 'all', search: '' };
let mediaContext = { courseId: 'all', type: 'all', search: '' };
let feedbackContext = resolveFeedbackContext();
let checkinContext = resolveCheckinContext();
let memberImportPreview = [];
let courseImportPreview = [];
let backupContext = { search: '', type: 'all' };
let settingsContext = { changed: false };
let annualFeeContext = { year: String(new Date().getFullYear()), status: 'all', search: '' };

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

let renderTimer = 0;
let lastRenderedView = '';
let toastTimer = 0;
let mobileNavSignature = '';
let lastMobileNavActivationAt = 0;
let lastMobileNavActionKey = '';
let localDirtyAt = Number(localStorage.getItem('shanxianPigStudyClub.localDirtyAt.v93') || localStorage.getItem('shanxianPigStudyClub.localDirtyAt.v91') || '0') || 0;
let globalSyncBusy = false;
let autoUploadTimer = 0;
let autoDownloadTimer = 0;
let lastAutoDownloadAt = 0;
let lastAutoUploadAt = 0;
const reduceMotion = () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function setElementBusy(element, busy, label = '處理中...') {
  if (!element) return;
  if (busy) {
    if (!element.dataset.originalText) element.dataset.originalText = element.textContent.trim();
    element.disabled = true;
    element.setAttribute('aria-busy', 'true');
    element.classList.add('is-busy');
    element.textContent = label;
  } else {
    element.disabled = false;
    element.removeAttribute('aria-busy');
    element.classList.remove('is-busy');
    if (element.dataset.originalText) {
      element.textContent = element.dataset.originalText;
      delete element.dataset.originalText;
    }
  }
}

async function withButtonBusy(element, action, label = '處理中...') {
  if (element?.disabled) return;
  setElementBusy(element, true, label);
  try {
    return await action();
  } finally {
    setElementBusy(element, false);
  }
}

function isMobileViewport() {
  return window.matchMedia ? window.matchMedia('(max-width: 760px)').matches : window.innerWidth <= 760;
}

let lastSidebarActionAt = 0;
let lastSidebarActionKey = '';

function setMobileSidebarOpen(nextOpen) {
  const sidebar = $('#sidebar');
  if (!sidebar) return;
  sidebar.classList.toggle('open', !!nextOpen);
  document.body.classList.toggle('sidebar-open', !!nextOpen);
}

function closeMobileSidebar() {
  setMobileSidebarOpen(false);
}

function openMobileSidebar() {
  setMobileSidebarOpen(true);
}

function toggleMobileSidebar() {
  const sidebar = $('#sidebar');
  if (!sidebar) return;
  setMobileSidebarOpen(!sidebar.classList.contains('open'));
}

function runSidebarActionOnce(event, key, action) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
    if (typeof event.stopImmediatePropagation === 'function') event.stopImmediatePropagation();
  }
  const now = Date.now();
  if (lastSidebarActionKey === key && now - lastSidebarActionAt < 420) return;
  lastSidebarActionKey = key;
  lastSidebarActionAt = now;
  action();
}

function mobileBottomNavItems() {
  // PKG076：手機底部快捷列只保留最高頻操作，減少誤觸與切頁重建成本。
  if (appMode === 'member') {
    return [
      { view: 'dashboard', icon: '🏠', label: '首頁' },
      { view: 'courses', icon: '📅', label: '課表' },
      { view: 'reply', icon: '✅', label: '回覆' },
      { view: 'members', icon: '👥', label: '名單' },
      { view: 'checkin', icon: '📲', label: '簽到' }
    ].filter(item => isMemberAllowedView(item.view));
  }
  return [
    { view: 'dashboard', icon: '🏠', label: '首頁' },
    { view: 'courses', icon: '📅', label: '課表' },
    { view: 'checkin', icon: '📲', label: '簽到' },
    { more: true, icon: '☰', label: '更多' }
  ];
}

function renderMobileBottomNav() {
  const nav = $('#mobileBottomNav');
  if (!nav) return;
  const items = mobileBottomNavItems();
  const signature = `${appMode}|${items.map(item => item.more ? 'more' : item.view).join('|')}`;
  // PKG070：底部快捷列不再每次 render 都重建按鈕。
  // 手機 Safari / LINE 內建瀏覽器在 touch/click 過程中若節點被 innerHTML 移除，
  // 會出現第一次點擊頁面閃現後消失、第二次才完成渲染的情況。
  if (nav.dataset.signature !== signature) {
    nav.innerHTML = items.map(item => {
      if (item.more) {
        return `<button type="button" class="nav-item mobile-more-btn" data-mobile-more="true" aria-label="開啟完整功能選單"><span class="mobile-nav-icon">${item.icon}</span><span>${item.label}</span></button>`;
      }
      return `<button type="button" class="nav-item" data-view="${item.view}"><span class="mobile-nav-icon">${item.icon}</span><span>${item.label}</span></button>`;
    }).join('');
    nav.dataset.signature = signature;
  }
  updateMobileBottomNavActive(currentView);
}

function updateMobileBottomNavActive(view = currentView) {
  $$('#mobileBottomNav .nav-item[data-view]').forEach(button => {
    const active = button.dataset.view === view;
    button.classList.toggle('active', active);
    if (active) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
  });
}

function syncModeButtons() {
  const memberBtn = $('#switchMemberMode');
  const adminBtn = $('#switchAdminMode');
  if (memberBtn) {
    memberBtn.classList.toggle('is-active-mode', appMode === 'member');
    memberBtn.setAttribute('aria-pressed', appMode === 'member' ? 'true' : 'false');
  }
  if (adminBtn) {
    adminBtn.classList.toggle('is-active-mode', appMode === 'admin');
    adminBtn.setAttribute('aria-pressed', appMode === 'admin' ? 'true' : 'false');
  }
}

function updateViewUrl(view) {
  if (!window.history || !window.history.replaceState) return;
  const params = new URLSearchParams(window.location.search);
  const specialMode = params.get('mode');
  if (['reply', 'checkin', 'feedback'].includes(specialMode)) return;
  params.set('mode', appMode === 'admin' ? 'admin' : 'member');
  params.set('view', view || 'dashboard');
  const query = params.toString();
  const nextUrl = `${window.location.pathname}${query ? `?${query}` : ''}${window.location.hash || ''}`;
  try { window.history.replaceState(null, '', nextUrl); } catch (error) {}
}

function scrollActiveNavIntoView() {
  const active = $('.nav-item.active');
  const nav = $('.sidebar .nav-list');
  if (!active || !nav) return;
  const navRect = nav.getBoundingClientRect();
  const activeRect = active.getBoundingClientRect();
  if (activeRect.top < navRect.top || activeRect.bottom > navRect.bottom) {
    active.scrollIntoView({ block: 'nearest', behavior: reduceMotion() ? 'auto' : 'smooth' });
  }
}

function scheduleRender(delay = 120) {
  window.clearTimeout(renderTimer);
  renderTimer = window.setTimeout(() => {
    renderTimer = 0;
    render();
  }, delay);
}

function updateActiveNavigation(view = currentView) {
  $$('.view').forEach(section => {
    const active = section.id === `view-${view}`;
    section.classList.toggle('active', active);
    if (active) section.removeAttribute('hidden');
    else section.setAttribute('hidden', '');
  });
  $$('.sidebar .nav-item[data-view]').forEach(button => {
    const active = button.dataset.view === view;
    button.classList.toggle('active', active);
    if (active) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
  });
  updateMobileBottomNavActive(view);
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadState() {
  const sources = [
    { key: STORAGE_KEY, current: true },
    { key: PREVIOUS_STORAGE_KEY, current: false },
    { key: LEGACY_STORAGE_KEY, current: false },
    { key: OLDER_STORAGE_KEY, current: false },
    { key: OLD_LEGACY_STORAGE_KEY, current: false },
    { key: FIRST_STORAGE_KEY, current: false },
    { key: ANCIENT_STORAGE_KEY, current: false }
  ];
  const found = sources.map(source => ({ ...source, raw: localStorage.getItem(source.key) })).find(source => source.raw);
  if (!found) return normalizeState(clone(seedData));
  try {
    const parsed = JSON.parse(found.raw);
    const seed = clone(seedData);
    const parsedCourseCount = Array.isArray(parsed.courses) ? parsed.courses.length : 0;
    const parsedLocationCount = Array.isArray(parsed.locations) ? parsed.locations.length : 0;
    const parsedSpeakerCount = Array.isArray(parsed.speakers) ? parsed.speakers.length : 0;
    const parsedSponsorCount = Array.isArray(parsed.sponsorVendors) ? parsed.sponsorVendors.length : 0;
    const looksCleared = parsedCourseCount === 0 || parsedLocationCount === 0 || parsedSpeakerCount === 0 || parsedSponsorCount === 0;
    if (!found.current || looksCleared) {
      // PKG055：重新置入正式資料。舊瀏覽器若曾載入清空版或舊版 localStorage，
      // 不再讓空的 courses / locations / speakers / sponsorVendors 覆蓋系統內建正式資料。
      const upgraded = normalizeState({
        ...seed,
        members: Array.isArray(parsed.members) && parsed.members.length ? parsed.members : seed.members,
        announcements: Array.isArray(parsed.announcements) ? parsed.announcements : seed.announcements,
        officers: Array.isArray(parsed.officers) && parsed.officers.length ? parsed.officers : seed.officers,
        settings: parsed.settings || seed.settings
      });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(upgraded));
      return upgraded;
    }
    const merged = normalizeState({ ...seed, ...parsed });
    return merged;
  } catch (error) {
    console.warn('Data parse failed, fallback to seed data', error);
    return normalizeState(clone(seedData));
  }
}

function normalizeState(data) {
  data.members = Array.isArray(data.members) ? data.members : [];
  // PKG043：移除先前示範用的王泰山會員資料，幹部名單改由實際幹部自行新增。
  data.members = data.members.filter(member => !(member.id === 'm001' || member.name === '王泰山' || member.farmName === '王泰山畜牧場'));
  data.locations = Array.isArray(data.locations) ? data.locations : [];
  data.speakers = Array.isArray(data.speakers) ? data.speakers : [];
  data.sponsorVendors = Array.isArray(data.sponsorVendors) ? data.sponsorVendors : [];
  data.invitations = Array.isArray(data.invitations) ? data.invitations : [];
  data.announcements = Array.isArray(data.announcements) ? data.announcements : [];
  data.annualFees = Array.isArray(data.annualFees) ? data.annualFees : [];
  data.courses = Array.isArray(data.courses) ? data.courses : [];

  data.members.forEach((member, index) => {
    if (!member.id) member.id = uid('m');
    if (!member.memberToken) member.memberToken = `SX-${String(index + 1).padStart(3, '0')}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    if (!member.visibility) member.visibility = '會員可見';
    if (!member.memberStatus) member.memberStatus = '正常';
    if (!member.retiredAt) member.retiredAt = '';
    if (!member.retiredNote) member.retiredNote = '';
  });

  data.speakers.forEach(speaker => {
    if (!speaker.id) speaker.id = uid('sp');
    if (!speaker.type) speaker.type = '講師/顧問';
    if (!speaker.specialty) speaker.specialty = '';
    if (!speaker.organization) speaker.organization = '';
    if (!speaker.area) speaker.area = '';
    if (!speaker.phone) speaker.phone = '';
    if (!speaker.lineId) speaker.lineId = '';
    if (!speaker.email) speaker.email = '';
    if (!speaker.defaultFee) speaker.defaultFee = '';
    delete speaker.handoutSupport;
    if (!speaker.visibility) speaker.visibility = '幹部可見';
    if (!speaker.note) speaker.note = '';
  });


  data.sponsorVendors.forEach(vendor => {
    if (!vendor.id) vendor.id = uid('sv');
    if (!vendor.name) vendor.name = '未命名主辦廠商';
    if (!vendor.type) vendor.type = '廠商/主辦單位';
    if (!vendor.contactPerson) vendor.contactPerson = '';
    if (!vendor.area) vendor.area = '';
    if (!vendor.products) vendor.products = '';
    if (!vendor.phone) vendor.phone = '';
    if (!vendor.lineId) vendor.lineId = '';
    if (!vendor.email) vendor.email = '';
    if (!vendor.supportType) vendor.supportType = '主辦';
    if (!vendor.defaultSupportAmount) vendor.defaultSupportAmount = '';
    if (!vendor.visibility) vendor.visibility = '幹部可見';
    if (!vendor.note) vendor.note = '';
  });


  data.announcements.forEach(item => {
    if (!item.id) item.id = uid('an');
    if (!item.title) item.title = '未命名公告';
    if (!item.type) item.type = '正式公告';
    if (!item.priority) item.priority = '一般';
    if (!item.pinned) item.pinned = '否';
    if (!item.status) item.status = 'draft';
    if (!item.courseId) item.courseId = '';
    if (!item.announceDate) item.announceDate = '';
    if (!item.expireDate) item.expireDate = '';
    if (!item.channel) item.channel = 'LINE 群組';
    if (!item.lineText) item.lineText = '';
    if (!item.note) item.note = '';
    if (!item.createdAt) item.createdAt = new Date().toISOString().slice(0, 16).replace('T', ' ');
  });

  data.invitations.forEach(invite => {
    if (!invite.id) invite.id = uid('iv');
    if (!invite.courseId) invite.courseId = '';
    if (!invite.speakerId) invite.speakerId = '';
    if (!invite.sponsorVendorId) invite.sponsorVendorId = '';
    if (!invite.status) invite.status = '尚未邀約';
    if (!invite.contactDate) invite.contactDate = '';
    if (!invite.confirmDate) invite.confirmDate = '';
    if (!invite.speakerFee) invite.speakerFee = '';
    if (!invite.sponsorSupportType) invite.sponsorSupportType = '';
    if (!invite.sponsorAmount) invite.sponsorAmount = '';
    if (!invite.sponsorNote) invite.sponsorNote = '';
    delete invite.handoutStatus;
    if (!invite.followUpStatus) invite.followUpStatus = '';
    if (!invite.note) invite.note = '';
  });

  data.courses.forEach(course => {
    if (!course.id) course.id = uid('c');
    if (!course.status) course.status = 'planned';
    if (course.participantCount === undefined || course.participantCount === null) course.participantCount = '';
    if (!course.unitMealFee) course.unitMealFee = inferUnitFee(course.fee);
    if (course.totalMealCost === undefined || course.totalMealCost === null) course.totalMealCost = '';
    if (course.otherCost === undefined || course.otherCost === null) course.otherCost = '';
    if (course.settleNote === undefined || course.settleNote === null) course.settleNote = '';
    if (!course.payments || typeof course.payments !== 'object' || Array.isArray(course.payments)) course.payments = {};
    if (!Array.isArray(course.reconfirmPendingMemberIds)) course.reconfirmPendingMemberIds = [];
    if (!course.reconfirmRequired) course.reconfirmRequired = 'no';
    ['reconfirmReason','reconfirmAt','reconfirmResolvedAt','reconfirmOriginalDate','reconfirmNewDate','reconfirmOriginalStartTime','reconfirmOriginalEndTime'].forEach(key => {
      if (course[key] === undefined || course[key] === null) course[key] = '';
    });
    if (!course.attendanceBeforeReconfirm || typeof course.attendanceBeforeReconfirm !== 'object' || Array.isArray(course.attendanceBeforeReconfirm)) course.attendanceBeforeReconfirm = null;
    if (!Array.isArray(course.participantSignupsBeforeReconfirm)) course.participantSignupsBeforeReconfirm = [];
    if (!course.category) course.category = '其他';
    const linkedInvite = data.invitations.find(invite => invite.courseId === course.id);
    const linkedVendor = linkedInvite ? data.sponsorVendors.find(vendor => vendor.id === linkedInvite.sponsorVendorId) : null;
    if (course.sponsorVendorId === undefined || course.sponsorVendorId === null) course.sponsorVendorId = linkedInvite?.sponsorVendorId || '';
    if (course.sponsorContact === undefined || course.sponsorContact === null) course.sponsorContact = linkedVendor?.contactPerson || '';
    delete course.handoutFiles;
    delete course.handoutStatus;
    ['attachmentLinks', 'photoLinks', 'attachmentNote', 'afterNote', 'questionNote', 'applicationNote', 'followUpNote'].forEach(key => { if (course[key] === undefined || course[key] === null) course[key] = ''; });
    if (!Array.isArray(course.mediaItems)) course.mediaItems = buildLegacyMediaItems(course);
    course.mediaItems = course.mediaItems.map((item, index) => ({
      id: item.id || uid('mi'),
      type: item.type || inferMediaType(item.url || item.title || ''),
      title: item.title || item.name || `附件 ${index + 1}`,
      url: item.url || item.link || '',
      note: item.note || '',
      createdAt: item.createdAt || course.date || ''
    })).filter(item => item.title || item.url || item.note);

    if (!Array.isArray(course.feedbacks)) course.feedbacks = [];
    course.feedbacks = course.feedbacks.map((item, index) => ({
      id: item.id || uid('fb'),
      memberId: item.memberId || '',
      overallScore: String(item.overallScore || ''),
      speakerScore: String(item.speakerScore || ''),
      practicalScore: String(item.practicalScore || ''),
      topicFitScore: String(item.topicFitScore || ''),
      difficulty: item.difficulty || '剛好',
      favoritePoint: item.favoritePoint || '',
      improvement: item.improvement || '',
      nextTopic: item.nextTopic || '',
      applyPlan: item.applyPlan || '',
      anonymous: Boolean(item.anonymous),
      createdAt: item.createdAt || ''
    })).filter(item => item.memberId || item.favoritePoint || item.improvement || item.nextTopic || item.applyPlan || item.overallScore);
    if (!Array.isArray(course.participantSignups)) course.participantSignups = [];
    course.participantSignups = course.participantSignups.map((item, index) => ({
      id: item.id || uid('ps'),
      farmOrName: String(item.farmOrName || item.farmName || item.name || '').trim(),
      contactName: String(item.contactName || item.contact || '').trim(),
      count: String(item.count || item.participantCount || '1').trim(),
      phone: String(item.phone || '').trim(),
      note: String(item.note || '').trim(),
      status: item.status || 'going',
      needsReconfirm: Boolean(item.needsReconfirm),
      previousStatus: item.previousStatus || '',
      previousCount: item.previousCount || '',
      reconfirmAt: item.reconfirmAt || '',
      checkinStatus: item.checkinStatus || '',
      checkinTime: item.checkinTime || '',
      checkinNote: item.checkinNote || '',
      checkedCount: item.checkedCount || '',
      createdAt: item.createdAt || new Date().toISOString().slice(0, 16).replace('T', ' '),
      updatedAt: item.updatedAt || item.createdAt || ''
    })).filter(item => item.farmOrName || item.contactName || Number(item.count) > 0);
    if (!Array.isArray(course.prepTasks)) course.prepTasks = [];
    course.prepTasks = course.prepTasks.map((task, index) => ({
      id: task.id || uid('pt'),
      title: task.title || task.item || `課前任務 ${index + 1}`,
      ownerId: task.ownerId || '',
      dueDate: task.dueDate || '',
      priority: task.priority || 'normal',
      status: task.status || 'todo',
      note: task.note || ''
    }));
    if (!course.checkins || typeof course.checkins !== 'object' || Array.isArray(course.checkins)) course.checkins = {};
    Object.keys(course.checkins).forEach(memberId => {
      const item = course.checkins[memberId] || {};
      course.checkins[memberId] = {
        status: item.status || '',
        time: item.time || '',
        note: item.note || ''
      };
    });
    const a = normalizeAttendance(course.attendance);
    const allMemberIds = data.members.map(member => member.id);
    const assigned = new Set([...a.going, ...a.leave, ...a.unknown]);
    allMemberIds.forEach(memberId => {
      if (!assigned.has(memberId)) a.unknown.push(memberId);
    });
    course.attendance = {
      going: a.going.filter(memberId => allMemberIds.includes(memberId)),
      leave: a.leave.filter(memberId => allMemberIds.includes(memberId)),
      unknown: a.unknown.filter(memberId => allMemberIds.includes(memberId))
    };
    allMemberIds.forEach(memberId => {
      const existingPayment = course.payments[memberId] || {};
      course.payments[memberId] = {
        amount: existingPayment.amount ?? '',
        status: existingPayment.status || 'unpaid',
        method: existingPayment.method || '',
        note: existingPayment.note || ''
      };
    });
    Object.keys(course.payments).forEach(memberId => {
      if (!allMemberIds.includes(memberId)) delete course.payments[memberId];
    });
    allMemberIds.forEach(memberId => {
      const existingCheckin = course.checkins[memberId] || {};
      course.checkins[memberId] = {
        status: existingCheckin.status || '',
        time: existingCheckin.time || '',
        note: existingCheckin.note || ''
      };
    });
    Object.keys(course.checkins).forEach(memberId => {
      if (!allMemberIds.includes(memberId)) delete course.checkins[memberId];
    });
  });

  data.annualFees = data.annualFees.map(fee => {
    const year = String(fee.year || new Date().getFullYear());
    const defaultAmount = String(fee.defaultAmount ?? fee.amount ?? '1000');
    const members = Array.isArray(fee.members) ? fee.members : [];
    return {
      id: fee.id || `af_${year}`,
      year,
      title: fee.title || `${year} 年度會費`,
      defaultAmount,
      note: fee.note || '',
      createdAt: fee.createdAt || '',
      updatedAt: fee.updatedAt || '',
      members: members.map(row => ({
        id: row.id || uid('afr'),
        memberId: row.memberId || '',
        memberSnapshotId: row.memberSnapshotId || row.memberId || '',
        memberStatusAtRecord: row.memberStatusAtRecord || row.memberStatus || '',
        farmName: row.farmName || '',
        memberName: row.memberName || '',
        role: row.role || '',
        amountDue: String(row.amountDue ?? defaultAmount),
        amountPaid: String(row.amountPaid ?? ''),
        status: row.status || 'unpaid',
        paidDate: row.paidDate || '',
        method: row.method || '',
        note: row.note || '',
        payments: Array.isArray(row.payments) ? row.payments : []
      }))
    };
  });
  return data;
}

function arrayHasItems(value) {
  return Array.isArray(value) && value.length > 0;
}

function cloudPayloadSummary(payload) {
  return backupSummaryFromState(payload || {});
}

function hasFormalCoursePayload(payload) {
  return arrayHasItems(payload?.courses);
}

function ensureFormalDataForCloudPayload(payload, fallback = state) {
  const seed = clone(seedData);
  const local = fallback && typeof fallback === 'object' ? clone(fallback) : {};
  const incoming = payload && typeof payload === 'object' ? clone(payload) : {};
  const base = normalizeState({ ...seed, ...local });
  const merged = { ...seed, ...local, ...incoming };
  const protectedCollections = ['courses', 'locations', 'speakers', 'sponsorVendors'];
  protectedCollections.forEach(key => {
    if (!arrayHasItems(incoming[key])) {
      merged[key] = arrayHasItems(base[key]) ? clone(base[key]) : clone(seed[key] || []);
    }
  });
  if (!arrayHasItems(incoming.members)) {
    merged.members = arrayHasItems(base.members) ? clone(base.members) : clone(seed.members || []);
  }
  if (!arrayHasItems(incoming.announcements) && arrayHasItems(base.announcements)) {
    merged.announcements = clone(base.announcements);
  }
  if (!arrayHasItems(incoming.officers) && arrayHasItems(base.officers)) {
    merged.officers = clone(base.officers);
  }
  return normalizeState(merged);
}

function cloudPayloadLooksUninitialized(payload) {
  const summary = cloudPayloadSummary(payload || {});
  return !hasFormalCoursePayload(payload) || summary.courses === 0;
}

function cloudUninitializedMessage() {
  return 'Google Sheet 雲端目前尚未初始化課程資料；已保留系統內建正式課程。請先在管理端按「上傳到雲端」建立雲端資料。';
}

function markLocalDirty(options = {}) {
  localDirtyAt = Date.now();
  localStorage.setItem('shanxianPigStudyClub.localDirtyAt.v93', String(localDirtyAt));
  localStorage.setItem('shanxianPigStudyClub.localDirtyAt.v91', String(localDirtyAt));
  if (!options.skipAutoSync) scheduleAutoUpload('data-change');
}

function clearLocalDirty() {
  localDirtyAt = 0;
  localStorage.removeItem('shanxianPigStudyClub.localDirtyAt.v93');
  localStorage.removeItem('shanxianPigStudyClub.localDirtyAt.v91');
}

function hasLocalDirty() {
  if (!localDirtyAt) return false;
  const lastSyncTime = settings.lastSync ? new Date(settings.lastSync).getTime() : 0;
  return !lastSyncTime || localDirtyAt > lastSyncTime;
}

function saveState(options = {}) {
  state = normalizeState(state);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  if (!options.skipDirty) markLocalDirty({ skipAutoSync: !!options.skipAutoSync });
  if (!options.skipBackup) {
    createBackupSnapshot('auto', options.title || '自動儲存備份');
  }
}

function loadBackups() {
  const raw = localStorage.getItem(BACKUP_KEY) || localStorage.getItem(PREVIOUS_BACKUP_KEY) || '[]';
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn('Backup parse failed', error);
    return [];
  }
}

function saveBackups(list) {
  localStorage.setItem(BACKUP_KEY, JSON.stringify(list.slice(0, MAX_BACKUP_COUNT)));
}

function simpleHash(value) {
  const text = typeof value === 'string' ? value : JSON.stringify(value || '');
  let hash = 0;
  for (let i = 0; i < text.length; i += 1) {
    hash = ((hash << 5) - hash) + text.charCodeAt(i);
    hash |= 0;
  }
  return `${text.length}-${Math.abs(hash)}`;
}

function backupSummaryFromState(data) {
  const courses = Array.isArray(data?.courses) ? data.courses : [];
  const members = Array.isArray(data?.members) ? data.members : [];
  const locations = Array.isArray(data?.locations) ? data.locations : [];
  const done = courses.filter(course => course.status === 'done').length;
  const planned = courses.filter(course => course.status === 'planned').length;
  const announcements = Array.isArray(data?.announcements) ? data.announcements : [];
  return {
    members: members.length,
    courses: courses.length,
    locations: locations.length,
    done,
    planned,
    announcements: announcements.length
  };
}

function createBackupSnapshot(type = 'manual', title = '手動備份', snapshot = state) {
  try {
    const normalized = normalizeState(clone(snapshot));
    const json = JSON.stringify(normalized);
    const hash = simpleHash(json);
    const backups = loadBackups();
    const latest = backups[0];
    if (type === 'auto' && latest?.hash === hash) return latest;
    const now = new Date();
    const item = {
      id: uid('bk'),
      type,
      title,
      createdAt: now.toISOString(),
      displayTime: now.toLocaleString('zh-TW'),
      hash,
      size: json.length,
      summary: backupSummaryFromState(normalized),
      data: normalized
    };
    backups.unshift(item);
    saveBackups(backups);
    return item;
  } catch (error) {
    console.warn('Create backup failed', error);
    return null;
  }
}

function formatBytes(size = 0) {
  const n = Number(size) || 0;
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / 1024 / 1024).toFixed(2)} MB`;
}

function backupTypeLabel(type) {
  return ({ auto: '自動備份', manual: '手動備份', import: '匯入前備份', reset: '重置前備份', cloud: '雲端覆蓋前備份' }[type] || '備份');
}

function filteredBackups() {
  const keyword = backupContext.search.trim().toLowerCase();
  return loadBackups().filter(item => {
    const passType = backupContext.type === 'all' || item.type === backupContext.type;
    const hay = [item.title, backupTypeLabel(item.type), item.displayTime, item.createdAt, item.summary?.courses, item.summary?.members].join(' ').toLowerCase();
    return passType && (!keyword || hay.includes(keyword));
  });
}

function loadSettings() {
  const raw = localStorage.getItem(SETTINGS_KEY) || localStorage.getItem(PREVIOUS_SETTINGS_KEY);
  if (!raw) return { ...defaultSettings };
  try {
    const parsed = { ...defaultSettings, ...JSON.parse(raw) };
    if (!String(parsed.syncUrl || '').trim()) parsed.syncUrl = defaultSettings.syncUrl;
    if (!String(parsed.githubPagesUrl || '').trim()) parsed.githubPagesUrl = defaultSettings.githubPagesUrl;
    if (parsed.adminPassword === 'shanxian_admin_2026') parsed.adminPassword = 'pig2025';
    return parsed;
  } catch (error) {
    return { ...defaultSettings };
  }
}

function saveSettings() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

function boolSetting(value) {
  return value === true || value === 'true' || value === 'yes' || value === '1' || value === 1;
}

function currentAppBaseUrl() {
  return `${window.location.origin}${window.location.pathname}`;
}

function normalizeConfiguredBaseUrl(raw = '') {
  let value = String(raw || '').trim();
  if (!value) return currentAppBaseUrl();
  if (!/^https?:\/\//i.test(value) && !value.startsWith('./') && !value.startsWith('/')) value = `https://${value}`;
  try {
    const url = new URL(value, window.location.href);
    url.search = '';
    url.hash = '';
    if (!url.pathname.endsWith('/') && !/\.[^/]+$/.test(url.pathname.split('/').pop() || '')) {
      url.pathname = `${url.pathname}/`;
    }
    return url.toString();
  } catch (error) {
    return currentAppBaseUrl();
  }
}

function appBaseUrl() {
  return normalizeConfiguredBaseUrl(settings.githubPagesUrl || '');
}

function appendPublicSyncParams(params, options = {}) {
  if (!params) return params;
  const includeReadToken = options.includeReadToken !== false;
  if (boolSetting(settings.embedSyncInPublicLinks) && settings.syncUrl) {
    params.set('sync', settings.syncUrl);
    if (includeReadToken && settings.readToken) params.set('rt', settings.readToken);
  }
  return params;
}

function publicSyncBadgeText() {
  if (!settings.syncUrl) return '尚未綁定 Apps Script；會員送出後只會先儲存在本機。';
  return boolSetting(settings.embedSyncInPublicLinks)
    ? '已綁定 Apps Script；LINE 報名連結會自動帶入雲端同步設定，會員不需要再輸入。'
    : '已設定 Apps Script，但目前不會自動放入會員分享連結。';
}

function adminProtectionEnabled() {
  return boolSetting(settings.requireAdminLogin);
}

function markAdminUnlocked() {
  localStorage.setItem(ADMIN_UNLOCK_KEY, 'yes');
}

function lockAdminSession() {
  localStorage.removeItem(ADMIN_UNLOCK_KEY);
}

function urlAdminTokenMatches() {
  const params = new URLSearchParams(window.location.search);
  const token = params.get('adminToken') || params.get('admin') || '';
  if (!token) return false;
  return token === settings.adminToken || token === settings.adminPassword;
}

function isAdminUnlocked() {
  if (!adminProtectionEnabled()) return true;
  if (urlAdminTokenMatches()) {
    markAdminUnlocked();
    return true;
  }
  return localStorage.getItem(ADMIN_UNLOCK_KEY) === 'yes';
}

function requestAdminUnlock() {
  const password = prompt('請輸入管理端密碼 / Admin Token');
  if (!password) {
    showToast('尚未解鎖管理端');
    return false;
  }
  if (password === settings.adminPassword || password === settings.adminToken) {
    markAdminUnlocked();
    showToast('管理端已解鎖');
    setAppMode('admin', { skipAuth: true });
    return true;
  }
  alert('密碼或 Admin Token 不正確。');
  return false;
}

function resolveInitialMode() {
  const params = new URLSearchParams(window.location.search);
  const mode = params.get('mode');
  if (mode === 'member' || mode === 'public' || mode === 'reply' || mode === 'checkin' || mode === 'feedback') return 'member';
  if (mode === 'admin') return isAdminUnlocked() ? 'admin' : 'member';
  const saved = localStorage.getItem('shanxianPigStudyClub.mode');
  if (saved === 'admin') return isAdminUnlocked() ? 'admin' : 'member';
  return settings.defaultMode === 'admin' && isAdminUnlocked() ? 'admin' : 'member';
}

function resolveReplyContext() {
  const params = new URLSearchParams(window.location.search);
  return {
    courseId: params.get('courseId') || '',
    memberId: params.get('memberId') || '',
    token: params.get('token') || '',
    status: params.get('status') || 'going'
  };
}

function resolveCheckinContext() {
  const params = new URLSearchParams(window.location.search);
  return {
    courseId: params.get('courseId') || '',
    memberId: params.get('memberId') || '',
    token: params.get('token') || ''
  };
}


function resolveFeedbackContext() {
  const params = new URLSearchParams(window.location.search);
  return {
    courseId: params.get('courseId') || 'all',
    memberId: params.get('memberId') || '',
    token: params.get('token') || '',
    score: 'all',
    search: ''
  };
}

function resolveInitialView() {
  const params = new URLSearchParams(window.location.search);
  const mode = params.get('mode');
  const requestedView = params.get('view') || '';
  if (mode === 'reply') return 'reply';
  if (mode === 'checkin') return 'checkin';
  if (mode === 'feedback') return 'feedback';
  if (requestedView) {
    const initialMode = resolveInitialMode();
    if (initialMode === 'member' && !isMemberAllowedView(requestedView)) return 'dashboard';
    return requestedView;
  }
  return 'dashboard';
}

function uid(prefix) {
  return `${prefix}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function formatDate(dateString) {
  if (!dateString) return '未設定日期';
  const date = new Date(`${dateString}T00:00:00`);
  if (Number.isNaN(date.getTime())) return dateString;
  const week = ['日', '一', '二', '三', '四', '五', '六'][date.getDay()];
  return `${dateString.replaceAll('-', '/')}（${week}）`;
}

function formatTaiwanDateTime(value, { seconds = false, suffix = '' } = {}) {
  if (!value) return '尚未同步';
  const raw = String(value);
  let date = value instanceof Date ? value : new Date(raw);
  if (Number.isNaN(date.getTime()) && /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}/.test(raw)) {
    date = new Date(raw.replace(' ', 'T'));
  }
  if (Number.isNaN(date.getTime())) {
    const fallback = raw.replace('T', ' ').replace(/\.\d{3}Z$/, '').slice(0, seconds ? 19 : 16);
    return suffix ? `${fallback}${suffix}` : fallback;
  }
  const parts = new Intl.DateTimeFormat('zh-TW', {
    timeZone: 'Asia/Taipei',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    ...(seconds ? { second: '2-digit' } : {}),
    hour12: false
  }).formatToParts(date).reduce((acc, part) => {
    acc[part.type] = part.value;
    return acc;
  }, {});
  const time = `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}${seconds ? `:${parts.second}` : ''}`;
  return suffix ? `${time}${suffix}` : time;
}

function formatTaiwanSyncTime(value, options = {}) {
  return formatTaiwanDateTime(value, { ...options, suffix: '（台灣）' });
}

function getLocation(id) {
  return state.locations.find(item => item.id === id) || null;
}

function getMember(id) {
  return state.members.find(item => item.id === id) || null;
}

function getSpeaker(id) {
  return state.speakers.find(item => item.id === id) || null;
}

function getSponsorVendor(id) {
  return state.sponsorVendors.find(item => item.id === id) || null;
}

function getCourse(id) {
  return state.courses.find(item => item.id === id) || null;
}

function getCourseStatusLabel(status) {
  return ({ planned: '未上課', done: '已完成', cancelled: '取消/延期' }[status] || '未上課');
}

function getStatusBadgeClass(status) {
  return ({ planned: 'blue', done: 'green', cancelled: 'red' }[status] || 'blue');
}

function sortedCourses() {
  return [...state.courses].sort((a, b) => `${a.date || ''} ${a.startTime || ''}`.localeCompare(`${b.date || ''} ${b.startTime || ''}`));
}

function parseCourseDateParts(value, courseYear = '') {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return { year: value.getFullYear(), month: value.getMonth() + 1, day: value.getDate() };
  }
  if (typeof value === 'number' && Number.isFinite(value)) {
    const excelBase = new Date(Date.UTC(1899, 11, 30));
    const date = new Date(excelBase.getTime() + value * 86400000);
    if (!Number.isNaN(date.getTime())) return { year: date.getUTCFullYear(), month: date.getUTCMonth() + 1, day: date.getUTCDate() };
  }
  const raw = String(value || '').trim();
  if (!raw) return null;
  let match = raw.match(/^(\d{4})[-/.年](\d{1,2})[-/.月](\d{1,2})/);
  if (match) return { year: Number(match[1]), month: Number(match[2]), day: Number(match[3]) };
  match = raw.match(/^(\d{2,3})\s*年\s*(\d{1,2})\s*月\s*(\d{1,2})/);
  if (match) return { year: Number(match[1]) + 1911, month: Number(match[2]), day: Number(match[3]) };
  match = raw.match(/^(\d{2,3})[/.](\d{1,2})[/.](\d{1,2})$/);
  if (match) {
    const y = Number(match[1]);
    return { year: y < 1911 ? y + 1911 : y, month: Number(match[2]), day: Number(match[3]) };
  }
  match = raw.match(/^(\d{1,2})[/.月](\d{1,2})/);
  if (match) {
    let y = Number(String(courseYear || '').replace(/\D/g, '')) || new Date().getFullYear();
    if (y < 1911) y += 1911;
    return { year: y, month: Number(match[1]), day: Number(match[2]) };
  }
  const parsed = new Date(raw);
  if (!Number.isNaN(parsed.getTime())) {
    return { year: parsed.getFullYear(), month: parsed.getMonth() + 1, day: parsed.getDate() };
  }
  return null;
}

function courseEndDateTime(course) {
  if (!course || !course.date) return null;
  const parts = parseCourseDateParts(course.date, course.year);
  if (!parts) return null;
  const time = String(course.endTime || course.startTime || '23:59').trim() || '23:59';
  const match = time.match(/(\d{1,2})[:：](\d{2})/);
  const hour = match ? Math.min(23, Math.max(0, Number(match[1]))) : 23;
  const minute = match ? Math.min(59, Math.max(0, Number(match[2]))) : 59;
  const date = new Date(parts.year, parts.month - 1, parts.day, hour, minute, 0, 0);
  return Number.isNaN(date.getTime()) ? null : date;
}

function isCourseOpenForReply(course) {
  if (!course) return false;
  const status = String(course.status || '').toLowerCase();
  if (['done', 'completed', 'cancelled', 'canceled', 'closed'].includes(status)) return false;
  const end = courseEndDateTime(course);
  if (!end) return false;
  return end.getTime() >= Date.now();
}

function isCourseCompletedByDate(course) {
  if (!course) return false;
  const status = String(course.status || '').toLowerCase();
  if (['done', 'completed', 'closed'].includes(status)) return true;
  if (['cancelled', 'canceled'].includes(status)) return false;
  const end = courseEndDateTime(course);
  return Boolean(end && end.getTime() < Date.now());
}

function computedCourseStatusKey(course) {
  const status = String(course?.status || 'planned').toLowerCase();
  if (['cancelled', 'canceled'].includes(status)) return 'cancelled';
  if (isCourseCompletedByDate(course)) return 'done';
  return 'planned';
}

function computedCourseStatusLabel(course) {
  if (isCourseCompletedByDate(course)) return '已完成課程';
  return getCourseStatusLabel(course?.status);
}

function computedCourseStatusBadgeClass(course) {
  if (isCourseCompletedByDate(course)) return 'green course-completed-badge';
  return getStatusBadgeClass(course?.status);
}

function replyButtonForCourse(course, label = '回覆') {
  if (isCourseOpenForReply(course)) {
    return `<button class="mini-btn" data-reply-course="${course.id}">${escapeHtml(label)}</button>`;
  }
  return '<button class="mini-btn disabled-reply" disabled aria-disabled="true" title="已完成或未開放的課程不能再回覆">回覆已關閉</button>';
}

function replyAvailableCourses() {
  return sortedCourses().filter(isCourseOpenForReply);
}

function shareableUpcomingCourses() {
  return replyAvailableCourses();
}

function announcementSelectableCourses() {
  // PKG064：公告表單的「連結課程」只列尚未上課、未取消且仍可回覆的課程，
  // 並沿用 sortedCourses() 由日期近到遠排序，避免公告誤連到已完成課程。
  return shareableUpcomingCourses();
}

function firstShareableCourse() {
  return shareableUpcomingCourses()[0] || null;
}

function checkinSelectableCourses() {
  // PKG059：簽到中心只列出尚未上課、仍可簽到的課程；已完成、取消或已過結束時間的課程不再出現在下拉選單。
  return sortedCourses().filter(isCourseOpenForReply);
}

function upcomingOpenCourses() {
  // PKG090：下一堂課只取尚未上課且仍開放回覆 / 簽到的課程。
  // 已完成、已過日期、取消 / 延期的課程都不再回填到「下一堂課」。
  return sortedCourses().filter(isCourseOpenForReply);
}

function nextCourse() {
  return upcomingOpenCourses()[0] || null;
}

function showToast(message) {
  const toast = $('#toast');
  if (!toast) return;
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.setAttribute('role', 'status');
  toast.classList.add('show');
  toastTimer = window.setTimeout(() => toast.classList.remove('show'), 2400);
}

function getMemberAllowedViews() {
  return [...MEMBER_PUBLIC_VIEWS];
}

function isMemberAllowedView(view) {
  return getMemberAllowedViews().includes(view);
}

function applyPermissionClasses() {
  // PKG086：會員端固定開放「會員名單」列表；不再受舊設定影響。
  document.body.classList.add('allow-member-directory');
  document.body.classList.remove('hide-member-directory');
}

function setAppMode(mode, options = {}) {
  const targetMode = mode === 'member' ? 'member' : 'admin';
  if (targetMode === 'admin' && !options.skipAuth && !isAdminUnlocked()) {
    if (options.silent) {
      appMode = 'member';
    } else {
      requestAdminUnlock();
      return;
    }
  } else {
    appMode = targetMode;
  }
  localStorage.setItem('shanxianPigStudyClub.mode', appMode);
  document.body.classList.toggle('member-mode', appMode === 'member');
  document.body.classList.toggle('admin-mode', appMode === 'admin');
  applyPermissionClasses();
  $('#modePill').textContent = appMode === 'admin' ? '管理端' : '會員公開版';
  syncModeButtons();
  if (appMode === 'member' && !isMemberAllowedView(currentView)) currentView = 'dashboard';
  renderMobileBottomNav();
  updateActiveNavigation(currentView);
  render();
}

function stabilizeMobileViewPaint(view = currentView) {
  if (!isMobileViewport()) return;
  const activeView = $(`#view-${view}`);
  if (!activeView) return;
  // PKG071：手機管理端切頁時，直接鎖定 active view 的可見狀態。
  // 之前使用 content-visibility / 兩段 requestAnimationFrame，LINE 與部分 Android WebView
  // 會出現「點一下閃現又消失，要點第二下」的情況。
  document.body.classList.add('mobile-nav-rendering');
  activeView.hidden = false;
  activeView.removeAttribute('hidden');
  activeView.classList.add('active', 'mobile-view-force-paint');
  activeView.style.display = 'block';
  if (activeView.offsetHeight < 1) activeView.style.minHeight = '60vh';
  window.setTimeout(() => {
    if (currentView === view) {
      activeView.hidden = false;
      activeView.removeAttribute('hidden');
      activeView.classList.add('active');
      activeView.style.display = '';
      activeView.style.minHeight = '';
      activeView.classList.remove('mobile-view-force-paint');
      document.body.classList.remove('mobile-nav-rendering');
    }
  }, 90);
}

function setView(view, options = {}) {
  if (!view || !$(`#view-${view}`)) view = 'dashboard';
  if (appMode === 'member' && !isMemberAllowedView(view)) view = 'dashboard';
  window.clearTimeout(renderTimer);
  currentView = view;
  closeMobileSidebar();
  updateViewUrl(view);
  updateActiveNavigation(view);
  render();
  updateActiveNavigation(view);
  stabilizeMobileViewPaint(view);
  window.setTimeout(scrollActiveNavIntoView, 0);
  const main = $('#mainContent');
  if (main && !options.fromMobileBottom) {
    try { main.focus({ preventScroll: true }); }
    catch (error) { main.focus(); }
  }
  const scrollBehavior = (reduceMotion() || isMobileViewport()) ? 'auto' : 'smooth';
  try { window.scrollTo({ top: 0, behavior: scrollBehavior }); }
  catch (error) { window.scrollTo(0, 0); }
}

function navigateFromMobileBottom(view) {
  if (!view) return;
  lastMobileNavActivationAt = Date.now();
  setView(view, { fromMobileBottom: true });
  // PKG071：切頁後立即與延遲各確認一次，避免手機 WebView 第一次點擊只換網址不換內容。
  updateActiveNavigation(view);
  stabilizeMobileViewPaint(view);
  window.setTimeout(() => {
    if (currentView === view) {
      updateActiveNavigation(view);
      stabilizeMobileViewPaint(view);
    }
  }, 80);
}

function handleMobileBottomAction(event) {
  const target = event.target.closest?.('.mobile-bottom-nav [data-view], .mobile-bottom-nav [data-mobile-more]');
  if (!target) return;
  event.preventDefault();
  event.stopPropagation();
  const actionKey = target.dataset.mobileMore === 'true' ? 'more' : (target.dataset.view || '');
  const now = Date.now();
  // PKG072：同一次手機點擊會連續送出 pointer/touch/click。若同一個 action 在短時間重複觸發，只處理第一次。
  if (actionKey && actionKey === lastMobileNavActionKey && now - lastMobileNavActivationAt < 850) return;
  lastMobileNavActionKey = actionKey;
  lastMobileNavActivationAt = now;
  if (target.dataset.mobileMore === 'true') {
    // PKG076：手機相容性修正。部分 WebView 會在 pointerup 後補送 click，
    // 文件層點擊事件可能把剛打開的側欄關回去；延後到本次事件循環後再開啟，確保「更多」單次點擊可停留在開啟狀態。
    window.setTimeout(() => {
      openMobileSidebar();
      updateMobileBottomNavActive(currentView);
    }, 0);
    return;
  }
  navigateFromMobileBottom(target.dataset.view);
}

function renderCurrentView() {
  const renderers = {
    dashboard: renderDashboard,
    courses: renderCourses,
    media: renderMedia,
    feedback: renderFeedback,
    records: renderRecords,
    planning: renderPlanning,
    speakers: renderSpeakers,
    announcements: renderAnnouncements,
    knowledge: renderKnowledge,
    report: renderReport,
    prep: renderPrep,
    groups: renderGroups,
    members: renderMembers,
    'retired-members': renderRetiredMembers,
    locations: renderLocations,
    attendance: renderAttendance,
    finance: renderFinance,
    'annual-fees': renderAnnualFees,
    reply: renderReply,
    notify: renderNotify,
    'share-card': renderCourseShareCard,
    import: renderMemberImport,
    'course-import': renderCourseImport,
    checkin: renderCheckin,
    sync: renderSyncSettings,
    share: renderSharePage,
    backup: renderBackups,
    settings: renderSystemSettings,
    data: () => {}
  };
  const renderer = renderers[currentView] || renderDashboard;
  try {
    renderer();
  } catch (error) {
    console.error('Render failed for view:', currentView, error);
    const activeView = $(`#view-${currentView}`);
    if (activeView) {
      activeView.innerHTML = `<section class="panel"><h2>頁面載入失敗</h2><p class="muted">此頁面剛剛沒有正確載入，請回首頁後再試一次。若持續發生，請通知管理端重新同步資料。</p><div class="stack-actions"><button class="primary-btn" data-view-jump="dashboard">回首頁</button><button class="ghost-btn" data-view-jump="courses">查看課表</button></div></section>`;
    }
  }
  lastRenderedView = currentView;
}

function shouldAutoPullPublicCloud() {
  if (!boolSetting(settings.autoPullPublicCloud) || !settings.syncUrl || appMode === 'admin') return false;
  return ['reply', 'courses', 'announcements', 'locations', 'media', 'checkin', 'feedback'].includes(currentView);
}

async function maybeAutoPullPublicCloud() {
  if (publicAutoCloudPullDone || publicAutoCloudPullRunning || !shouldAutoPullPublicCloud()) return;
  publicAutoCloudPullDone = true;
  publicAutoCloudPullRunning = true;
  const pullStartedAt = Date.now();
  try {
    const json = await getCloud('get', settings.readToken || settings.adminToken);
    if (json.payload) {
      if (cloudPayloadLooksUninitialized(json.payload)) {
        if ($('#syncStatus')) setSyncStatus(cloudUninitializedMessage(), 'warn');
        console.warn('Cloud payload skipped because courses are empty', cloudPayloadSummary(json.payload));
        return;
      }
      if (publicLocalMutationAt && publicLocalMutationAt > pullStartedAt) {
        console.warn('Cloud auto pull skipped because local public check-in/reply was just updated.');
        return;
      }
      state = ensureFormalDataForCloudPayload(json.payload, state);
      settings.lastSync = new Date().toISOString();
      saveState({ skipBackup: true, skipDirty: true });
      saveSettings();
      if ($('#syncStatus')) setSyncStatus(`已自動讀取 Google Sheet 最新資料：${formatTaiwanSyncTime(settings.lastSync, { seconds: true })}`, 'ok');
      showToast('已自動讀取最新課程資料');
      render();
    }
  } catch (error) {
    console.warn('Public cloud auto pull failed', error);
    if ($('#syncStatus')) setSyncStatus(`自動讀取雲端失敗：${error.message}`, 'err');
  } finally {
    publicAutoCloudPullRunning = false;
  }
}

function render() {
  renderHero();
  updateActiveNavigation(currentView);
  renderCurrentView();
  renderMobileBottomNav();
  updateActiveNavigation(currentView);
  updateGlobalSyncPanel();
  maybeAutoPullPublicCloud();
}

function renderHero() {
  const titleEl = $('#nextCourseTitle');
  const metaEl = $('#nextCourseMeta');
  // PKG056：首頁右上角下一堂課卡片已移除；若元素不存在，不能阻斷後續資料渲染。
  if (!titleEl || !metaEl) return;
  const course = nextCourse();
  if (!course) {
    titleEl.textContent = '下一堂課待排中';
    metaEl.textContent = '目前沒有未來未完成課程，請等待管理端安排。';
    return;
  }
  const location = getLocation(course.locationId);
  titleEl.textContent = course.title;
  metaEl.textContent = `${formatDate(course.date)} ${course.startTime || ''}-${course.endTime || ''}｜${location?.name || '未設定地點'}`;
}


function renderCompactMobileDashboards(course, upcoming, totalParticipants, parkingOk, announcementStats) {
  const memberBox = $('#memberMobilePrimary');
  const adminBox = $('#adminMobileWorkbench');
  const location = course ? getLocation(course.locationId) : null;
  const courseMeta = course ? `${formatDate(course.date)} ${course.startTime || ''}${course.endTime ? `-${course.endTime}` : ''}` : '目前沒有未來未完成課程，待管理端安排。';
  const locationText = location ? `${location.name}${location.parkingAvailable === '有' ? '｜有停車' : ''}` : '待排中';
  const linkedNotices = course ? activeAnnouncements().filter(item => item.courseId === course.id).slice(0, 2) : [];

  if (memberBox) {
    if (appMode !== 'member') {
      memberBox.innerHTML = '';
    } else {
      memberBox.innerHTML = `<section class="mobile-primary-card member-next-action">
        <div class="mobile-primary-head">
          <div>
            <p class="eyebrow">下一堂課</p>
            <h2>${course ? escapeHtml(course.title) : '下一堂課待排中'}</h2>
            <p class="muted">${escapeHtml(courseMeta)}${course ? `｜${escapeHtml(locationText)}` : ''}</p>
          </div>
          <span class="mobile-primary-badge">${course ? (linkedNotices.length ? '有公告' : `${upcoming} 堂未上`) : '待排中'}</span>
        </div>
        ${linkedNotices.length ? `<div class="mobile-mini-notices">${linkedNotices.map(item => `<button type="button" data-view-jump="announcements">📌 ${escapeHtml(item.title)}</button>`).join('')}</div>` : ''}
        <div class="mobile-primary-actions">
          ${course ? '<button class="primary-btn" data-view-jump="reply">我要回覆</button><button class="ghost-btn" data-view-jump="checkin">現場簽到</button>' : '<button class="primary-btn" data-view-jump="courses">查看課表</button>'}
          <button class="ghost-btn" data-view-jump="courses">查看全部</button>
        </div>
      </section>`;
    }
  }

  if (adminBox) {
    if (appMode !== 'admin') {
      adminBox.innerHTML = '';
    } else {
      const attendance = course ? normalizeAttendance(course.attendance) : { going: [], leave: [], unknown: [] };
      const checkin = course ? getCheckinSummary(course) : { actual: 0, expected: 0, none: 0 };
      const syncLabel = settings.lastSync ? formatTaiwanSyncTime(settings.lastSync) : '尚未同步';
      adminBox.innerHTML = `<section class="mobile-primary-card admin-workbench-card">
        <div class="mobile-primary-head">
          <div>
            <p class="eyebrow">手機管理工作台</p>
            <h2>${course ? escapeHtml(course.title) : '下一堂課待排中'}</h2>
            <p class="muted">${escapeHtml(courseMeta)}${course ? `｜${escapeHtml(locationText)}` : ''}</p>
          </div>
          <span class="mobile-primary-badge">雲端：${escapeHtml(syncLabel)}</span>
        </div>
        <div class="admin-mobile-stats">
          <span><strong>${attendance.going.length}</strong><small>已回覆出席</small></span>
          <span><strong>${checkin.actual}/${checkin.expected}</strong><small>已報到</small></span>
          <span><strong>${attendance.unknown.length}</strong><small>未回覆</small></span>
          <span><strong>${announcementStats.pinned}</strong><small>置頂公告</small></span>
        </div>
        <div class="mobile-primary-actions">
          <button class="primary-btn" data-view-jump="checkin">開啟簽到</button>
          <button class="ghost-btn" data-view-jump="announcements">新增/查看公告</button>
          <button class="ghost-btn" data-view-jump="sync">雲端同步</button>
        </div>
      </section>`;
    }
  }
}

function renderDashboard() {
  const years = [...new Set(state.courses.map(c => courseDisplayYear(c)).filter(Boolean))].sort((a, b) => String(b).localeCompare(String(a)));
  const yearLabel = years.length ? `${years.join(' / ')} 年度` : `${new Date().getFullYear()} 年度`;
  $('#yearPill').textContent = yearLabel;

  const completed = state.courses.filter(c => c.status === 'done').length;
  const upcoming = upcomingOpenCourses().length;
  const parkingOk = state.locations.filter(l => l.parkingAvailable === '有').length;
  const syncLabel = settings.lastSync ? formatTaiwanSyncTime(settings.lastSync) : '未同步';
  const totalParticipants = state.courses.reduce((sum, course) => sum + numericParticipantCount(course), 0);
  const recorded = state.courses.filter(course => hasCourseRecord(course)).length;
  const financeTotal = getAllFinanceSummary();
  const prepTotal = getAllPrepSummary();
  const feedbackTotal = getFeedbackOverallStats();
  const announcementStats = getAnnouncementStats();

  const publicKpis = [
    ['年度課程', state.courses.length],
    ['未上課程', upcoming],
    ['參加人次', totalParticipants],
    ['上課地點', state.locations.length],
    ['有停車地點', parkingOk],
    ['置頂公告', announcementStats.pinned]
  ];
  const adminKpis = [
    ['會員人數', state.members.length],
    ['年度課程', state.courses.length],
    ['未上課程', upcoming],
    ['參加人次', totalParticipants],
    ['已收餐費', formatMoney(financeTotal.paid)],
    ['未收餐費', formatMoney(financeTotal.unpaid)],
    ['已整理紀錄', recorded],
    ['課前待辦', prepTotal.pending],
    ['問卷回饋', feedbackTotal.count],
    ['平均滿意', feedbackTotal.avg ? `${feedbackTotal.avg.toFixed(1)}/5` : '-'],
    ['置頂公告', announcementStats.pinned]
  ];
  $('#kpiGrid').innerHTML = (appMode === 'member' ? publicKpis : adminKpis).map(([label, value]) => `<div class="kpi-card"><span>${label}</span><strong>${escapeHtml(value)}</strong></div>`).join('');

  const course = nextCourse();
  const courseAttendance = course ? normalizeAttendance(course.attendance) : { going: [], leave: [], unknown: [] };
  renderCompactMobileDashboards(course, upcoming, totalParticipants, parkingOk, announcementStats);
  const quickModules = $('#dashboardQuickModules');
  if (quickModules) {
    const compactMobile = isMobileViewport();
    const memberQuickModules = compactMobile ? [
      { title: '查看課表', desc: '日期、地點、停車。', icon: '📅', view: 'courses' },
      { title: '出席回覆', desc: '我要參加 / 請假。', icon: '✅', view: 'reply' },
      { title: '現場簽到', desc: '掃碼或報到確認。', icon: '📲', view: 'checkin' },
      { title: '地點停車', desc: '餐廳與地圖。', icon: '📍', view: 'locations' }
    ] : [
      { title: '年度課程表', desc: '查看日期、講師、上課地點與停車資訊。', icon: '📅', view: 'courses' },
      { title: '公告中心', desc: '查看置頂公告、課程異動與停車提醒。', icon: '📌', view: 'announcements' },
      { title: '餐廳地點', desc: '打開 Google 地圖與停車說明。', icon: '📍', view: 'locations' },
      { title: '我要出席回覆', desc: '選擇課程後自行填寫牧場名稱 / 姓名與參加人數。', icon: '✅', view: 'reply' },
      { title: '現場簽到', desc: '課程當天掃碼或手動完成報到。', icon: '📲', view: 'checkin' },
      { title: '照片附件', desc: '查看課程照片、PDF、PPT 與雲端連結。', icon: '🖼️', view: 'media' }
    ];
    const adminQuickModules = compactMobile ? [
      { title: '年度課表', desc: '快速查課程。', icon: '📅', view: 'courses' },
      { title: '簽到報到', desc: 'QR / 直接簽到。', icon: '📲', view: 'checkin' },
      { title: '公告通知', desc: '異動與提醒。', icon: '📌', view: 'announcements' },
      { title: '雲端同步', desc: '上傳 / 下載。', icon: '☁️', view: 'sync', adminOnly: true }
    ] : [
      { title: '查看年度課程表', desc: '確認日期、講師、地點、停車與參加人數。', icon: '📅', view: 'courses' },
      { title: '查看公告中心', desc: '置頂公告、課程異動、停車與繳費提醒。', icon: '📌', view: 'announcements' },
      { title: '出席統計', desc: '查看報名、請假、未回覆與總人數統計。', icon: '✅', view: 'attendance' },
      { title: '現場簽到報到', desc: 'QR Code 報到、簽到表與實到統計。', icon: '📲', view: 'checkin' },
      { title: 'LINE公告與報名連結', desc: '產生課程通知、報名連結、簽到連結與 LINE 分享文字。', icon: '💬', view: 'share-card', adminOnly: true },
      { title: '餐費結算', desc: '確認已收、未收、免收與收款方式。', icon: '💰', view: 'finance' },
      { title: '新增課程', desc: '管理端快速建立新課程資料。', icon: '＋', form: 'course', adminOnly: true },
      { title: 'Google Sheet 同步', desc: '上傳、下載與測試雲端資料。', icon: '☁️', view: 'sync', adminOnly: true }
    ];
    quickModules.innerHTML = (appMode === 'member' ? memberQuickModules : adminQuickModules).map(item => `<button class="dashboard-quick-card ${item.adminOnly ? 'admin-only' : ''}" ${item.form ? `data-open-form="${item.form}"` : `data-view-jump="${item.view}"`}>
        <span class="quick-icon">${item.icon}</span>
        <strong>${escapeHtml(item.title)}</strong>
        <small>${escapeHtml(item.desc)}</small>
      </button>`).join('');
  }
  const alertBox = $('#dashboardAlerts');
  if (alertBox) {
    const alerts = [
      { label: '下一堂課未回覆', value: course ? `${courseAttendance.unknown.length} 位` : '待排中', desc: course ? `${formatDate(course.date)}｜${course.title}` : '目前沒有未來未完成課程', tone: courseAttendance.unknown.length ? 'warn' : 'ok', view: course ? 'attendance' : 'courses' },
      { label: '課前逾期任務', value: `${prepTotal.overdue} 項`, desc: prepTotal.overdue ? '請到幹部工作分派檢查。' : '目前沒有逾期課前任務。', tone: prepTotal.overdue ? 'danger' : 'ok', view: 'prep', adminOnly: true },
      { label: '餐費未收', value: formatMoney(financeTotal.unpaid), desc: financeTotal.unpaid ? '請到費用結算檢查未收名單。' : '目前餐費未收為 0。', tone: financeTotal.unpaid ? 'danger' : 'ok', view: 'finance' },
      { label: '課程紀錄完成', value: `${recorded}/${state.courses.length}`, desc: state.courses.length ? '課後重點、附件與實務應用整理進度。' : '尚未建立課程。', tone: recorded >= state.courses.length && state.courses.length ? 'ok' : 'warn', view: 'records' }
    ];
    alertBox.innerHTML = alerts.map(item => `<button class="dashboard-alert-card ${item.tone} ${item.adminOnly ? 'admin-only' : ''}" data-view-jump="${item.view}">
      <span>${escapeHtml(item.label)}</span>
      <strong>${escapeHtml(item.value)}</strong>
      <small>${escapeHtml(item.desc)}</small>
    </button>`).join('');
  }
  $('#nextCourseDetail').innerHTML = course ? courseDetailHtml(course, true) : '<div class="empty-box next-course-pending-box"><strong>下一堂課待排中</strong><br>目前沒有未來未完成課程；已完成或已過日期的課程不會再顯示在下一堂課。</div>';

  const pinnedNotices = activeAnnouncements().slice(0, 3).map(item => `📌 <strong>${escapeHtml(item.title)}</strong>${item.lineText ? `：${escapeHtml(item.lineText).replaceAll('\n', '<br>')}` : ''}`);
  const dashboardNotices = appMode === 'member'
    ? [
        ...pinnedNotices,
        `目前已建立 <strong>${state.courses.length}</strong> 堂課程、<strong>${parkingOk}</strong> 個有停車地點。`,
        '會員公開版僅顯示課表、公告、餐廳地點、出席回覆、簽到與照片附件。',
        '課程當天可使用「簽到」完成報到；課前可到「回覆」確認出席或請假。'
      ]
    : [
        ...pinnedNotices,
        `目前已建立 <strong>${state.members.length}</strong> 位會員、<strong>${state.courses.length}</strong> 堂課程、<strong>${parkingOk}</strong> 個有停車地點。`,
        completed ? `已有 <strong>${completed}</strong> 堂課標記為完成，可補上課後重點。` : '課後可補上重點筆記、照片/附件連結、會員提問與豬場應用。',
        `餐費結算目前已收 <strong>${formatMoney(financeTotal.paid)}</strong>，未收 <strong>${formatMoney(financeTotal.unpaid)}</strong>。`,
        `課前分工目前共有 <strong>${prepTotal.total}</strong> 項，待處理 <strong>${prepTotal.pending}</strong> 項，逾期 <strong>${prepTotal.overdue}</strong> 項。`,
        '目前為管理端，可新增資料、產生回覆連結、管理公告與同步 Google Sheet。'
      ];
  $('#noticeList').innerHTML = dashboardNotices.map(text => `<div class="notice">${text}</div>`).join('');

  const timeline = sortedCoursesRecentFirst();
  if (timeline.length) {
    const rows = [];
    let currentTimelineYear = '';
    timeline.forEach(course => {
      const location = getLocation(course.locationId);
      const courseAnnouncements = publishedCourseAnnouncements(course.id);
      const year = courseDisplayYear(course);
      if (year !== currentTimelineYear) {
        currentTimelineYear = year;
        rows.push(`<div class="timeline-year-divider"><span>${escapeHtml(year)} 年度</span><small>近期課程在上方</small></div>`);
      }
      rows.push(`<div class="timeline-item">
        <div class="timeline-date">${formatDate(course.date)}</div>
        <div>
          <strong>${escapeHtml(course.title)}</strong>
          <div class="card-meta">${escapeHtml(course.startTime || '')}-${escapeHtml(course.endTime || '')}｜${escapeHtml(course.speaker || '未設定講師')}｜${escapeHtml(location?.name || '未設定地點')}｜參加 ${escapeHtml(participantLabel(course))}</div>
        </div>
        <span class="badge ${computedCourseStatusBadgeClass(course)}">${computedCourseStatusLabel(course)}</span>
        ${courseAnnouncements.length ? `<span class="badge red">公告提醒 ${courseAnnouncements.length}</span>` : ''}
      </div>`);
    });
    $('#courseTimeline').innerHTML = rows.join('');
  } else {
    $('#courseTimeline').innerHTML = '<div class="empty-box">尚未建立年度課程表。</div>';
  }
}

function courseSponsorInfo(course) {
  const invite = courseSpeakerInvite(course?.id);
  const sponsor = course?.sponsorVendorId ? getSponsorVendor(course.sponsorVendorId) : (invite ? getSponsorVendor(invite.sponsorVendorId) : null);
  const contact = course?.sponsorContact || sponsor?.contactPerson || '';
  return { invite, sponsor, name: sponsor?.name || course?.sponsorName || '', contact };
}

function firstUrlFromText(value = '') {
  return splitLines(value).find(line => /^(https?:\/\/|data:)/i.test(line)) || '';
}

function formatFileSize(bytes = 0) {
  const n = Number(bytes || 0);
  if (!n) return '';
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / 1024 / 1024).toFixed(1)} MB`;
}

function courseDetailHtml(course, compact = false) {
  const location = getLocation(course.locationId);
  const attendance = normalizeAttendance(course.attendance);
  const mapUrl = location?.googleMapUrl || '';
  const finance = courseFinanceSummary(course);
  const prep = coursePrepSummary(course);
  const mediaCount = Array.isArray(course.mediaItems) ? course.mediaItems.length : 0;
  const feedbackStats = courseFeedbackStats(course);
  const sponsorInfo = courseSponsorInfo(course);
  const invite = sponsorInfo.invite;
  const linkedSpeaker = invite ? getSpeaker(invite.speakerId) : null;
  const linkedSponsor = sponsorInfo.sponsor;
  const speakerDisplay = linkedSpeaker?.name || course.speaker || '未設定';
  const sponsorDisplay = sponsorInfo.name || '未設定主辦廠商';
  const sponsorContactDisplay = sponsorInfo.contact || '未設定';
  const publicMode = appMode === 'member';
  const publicCourseLink = buildPublicLink('courses', course.id);
  const checkinLink = buildCheckinLink(course.id);
  const inviteBadge = invite ? `<span class="badge ${getInviteBadgeClass(invite.status)}">邀約 ${escapeHtml(invite.status)}</span>` : '<span class="badge blue">未連結講師</span>';
  const isCompleted = isCourseCompletedByDate(course);
  const linkedAnnouncements = publishedCourseAnnouncements(course.id);
  const announcementStamp = courseAnnouncementStampHtml(course.id);
  const reconfirmStamp = courseNeedsDateReconfirm(course) ? '<div class="course-announcement-stamp danger course-reconfirm-stamp"><span>日期異動</span><small>重回覆</small></div>' : '';
  const announcementDigest = courseAnnouncementDigestHtml(course.id, compact);
  const completedNotice = isCompleted ? '<div class="course-completed-notice">✓ 已完成課程｜已過上課日期，停止回覆</div>' : '';
  const reconfirmNotice = courseReconfirmNoticeHtml(course);
  const adminActions = appMode === 'admin' ? `
      <button class="mini-btn" data-edit="course" data-id="${course.id}">編輯課程</button>
      <button class="mini-btn" data-payment="${course.id}">餐費結算</button>
      <button class="mini-btn" data-prep-jump="${course.id}">課前分工</button>
      <button class="mini-btn" data-delete="course" data-id="${course.id}">刪除</button>` : '';
  const cardClass = `${compact ? 'item-card course-card-compact' : 'item-card'}${isCompleted ? ' course-completed-card' : ''}${linkedAnnouncements.length ? ' course-has-announcement' : ''}${courseNeedsDateReconfirm(course) ? ' course-needs-reconfirm' : ''}`;
  const compactMeta = compact ? `
      📅 ${formatDate(course.date)} ${escapeHtml(course.startTime || '')}-${escapeHtml(course.endTime || '')}<br>
      👨‍🏫 ${escapeHtml(speakerDisplay)}｜🏢 ${escapeHtml(sponsorDisplay)}<br>
      👤 窗口：${escapeHtml(sponsorContactDisplay)}<br>
      📍 ${escapeHtml(location?.name || '未設定地點')}｜👥 ${escapeHtml(participantLabel(course))}<br>
      🅿️ ${courseParkingHtml(course, location)}
    ` : '';
  const compactBadges = compact ? `
      ${isCompleted ? '<span class="badge green course-completed-badge">已完成課程</span>' : ''}
      ${courseNeedsDateReconfirm(course) ? `<span class="badge red">日期異動｜待重新確認 ${courseReconfirmPendingMemberIds(course).length + courseReconfirmPendingSignupRows(course).length}</span>` : ''}
      <span class="badge">${escapeHtml(course.category || '其他')}</span>
      <span class="badge ${linkedSponsor ? 'green' : 'blue'}">主辦 ${escapeHtml(sponsorDisplay)}</span>
      <span class="badge">參加 ${escapeHtml(participantLabel(course))}</span>
      ${course.fee ? `<span class="badge">餐費 ${escapeHtml(course.fee)}</span>` : ''}
      ${publicMode ? '' : `<span class="badge ${finance.unpaid > 0 ? 'red' : 'green'}">未收 ${formatMoney(finance.unpaid)}</span>
      <span class="badge ${prep.pending ? 'red' : 'green'}">課前 ${prep.done}/${prep.total || 0}</span>`}
    ` : '';
  const compactActions = compact ? (publicMode ? `
        ${mapUrl ? `<a class="mini-btn" href="${escapeHtml(mapUrl)}" target="_blank" rel="noopener">地圖</a>` : ''}
        ${replyButtonForCourse(course, '回覆')}
      ` : `
        ${mapUrl ? `<a class="mini-btn" href="${escapeHtml(mapUrl)}" target="_blank" rel="noopener">地圖</a>` : ''}
        <button class="mini-btn" data-edit="course" data-id="${course.id}">編輯</button>
        <button class="mini-btn" data-view-jump="attendance">統計</button>
        <button class="mini-btn" data-record-course="${course.id}">紀錄</button>
        <button class="mini-btn" data-payment="${course.id}">餐費</button>
      `) : '';
  return `<article class="${cardClass}">
    ${reconfirmStamp}
    ${announcementStamp}
    <div class="card-top">
      <div>
        <p class="eyebrow">${escapeHtml(course.year)} 年度課程</p>
        <div class="card-title">${escapeHtml(course.title)}</div>
      </div>
      <span class="badge ${computedCourseStatusBadgeClass(course)}">${computedCourseStatusLabel(course)}</span>
    </div>
    <div class="card-meta">
      ${compact ? compactMeta : `📅 ${formatDate(course.date)} ${escapeHtml(course.startTime || '')}-${escapeHtml(course.endTime || '')}<br>
      👨‍🏫 講師：${escapeHtml(speakerDisplay)}${invite ? `｜邀約：${escapeHtml(invite.status)}` : ''}<br>
      🏢 主辦廠商：${escapeHtml(sponsorDisplay)}${invite?.sponsorSupportType ? `｜${escapeHtml(invite.sponsorSupportType)}` : ''}<br>
      👤 聯絡窗口：${escapeHtml(sponsorContactDisplay)}<br>
      🏷️ 主題分類：${escapeHtml(course.category || '其他')}<br>
      📍 地點：${escapeHtml(location?.name || '未設定地點')}<br>
      👥 參加人數：${escapeHtml(participantLabel(course))}<br>
      ${publicMode ? '' : `💰 餐費結算：應收 ${formatMoney(finance.expected)}｜已收 ${formatMoney(finance.paid)}｜未收 ${formatMoney(finance.unpaid)}<br>`}
      🅿️ 停車：${courseParkingHtml(course, location)}`}
    </div>
    ${completedNotice}
    ${reconfirmNotice}
    ${announcementDigest}
    <div class="badge-row">
      ${compact ? compactBadges : `<span class="badge">${escapeHtml(course.category || '其他')}</span>
      <span class="badge">參加 ${escapeHtml(participantLabel(course))}</span>
      ${courseNeedsDateReconfirm(course) ? `<span class="badge red">日期異動｜待重新確認 ${courseReconfirmPendingMemberIds(course).length + courseReconfirmPendingSignupRows(course).length}</span>` : ''}
      ${publicMode ? '' : `<span class="badge green">已收 ${formatMoney(finance.paid)}</span>
      <span class="badge ${finance.unpaid > 0 ? 'red' : 'green'}">未收 ${formatMoney(finance.unpaid)}</span>`}
      <span class="badge ${hasCourseRecord(course) ? 'green' : 'blue'}">${hasCourseRecord(course) ? '已有紀錄' : '待補紀錄'}</span>
      ${publicMode ? '' : `<span class="badge ${feedbackStats.count ? 'green' : 'blue'}">回饋 ${feedbackStats.count}${feedbackStats.avgOverall ? `｜${feedbackStats.avgOverall.toFixed(1)}/5` : ''}</span>
      ${inviteBadge}
      <span class="badge ${linkedSponsor ? 'green' : 'blue'}">主辦 ${escapeHtml(linkedSponsor?.name || '未設定')}</span>
      <span class="badge ${prep.pending ? 'red' : 'green'}">課前 ${prep.done}/${prep.total || 0}</span>
      <span class="badge green">出席 ${attendance.going.length}</span>
      <span class="badge red">請假 ${attendance.leave.length}</span>
      <span class="badge blue">未回覆 ${attendance.unknown.length}</span>`}
      ${course.fee ? `<span class="badge">餐費 ${escapeHtml(course.fee)}</span>` : ''}`}
    </div>
    ${compact ? '' : `<p class="muted">${escapeHtml(course.content || '尚未填寫上課內容。')}</p>`}
    ${course.afterNote && !compact ? `<div class="notice"><strong>課後重點：</strong>${escapeHtml(course.afterNote)}</div>` : ''}
    <div class="card-actions ${publicMode ? 'member-course-actions' : ''}">
      ${compact ? compactActions : `${mapUrl ? `<a class="mini-btn" href="${escapeHtml(mapUrl)}" target="_blank" rel="noopener">Google 地圖</a>` : ''}
      ${publicMode ? `
        ${replyButtonForCourse(course, '我要回覆')}
        <button class="mini-btn" data-view-jump="checkin">簽到報到</button>
      ` : `
        <button class="mini-btn" data-record-course="${course.id}">課程紀錄</button>
        <button class="mini-btn" data-feedback-course="${course.id}">問卷回饋</button>
        <button class="mini-btn admin-only" data-speaker-course="${course.id}">講師邀約</button>
      `}
      ${publicMode ? '' : adminActions}`}
    </div>
  </article>`;
}

function courseRecentSortKey(course) {
  return `${course?.date || ''} ${course?.startTime || ''}`;
}

function courseDisplayYear(course) {
  return String(course?.year || (course?.date || '').slice(0, 4) || '未設定年度');
}


function renderCourses() {
  const search = ($('#courseSearch')?.value || '').trim().toLowerCase();
  const status = $('#courseStatusFilter')?.value || 'all';
  let list = sortedCoursesRecentFirst();
  if (status !== 'all') list = list.filter(course => computedCourseStatusKey(course) === status);
  if (search) {
    list = list.filter(course => {
      const location = getLocation(course.locationId);
      const sponsor = courseSponsorInfo(course);
      return [course.title, course.speaker, course.category, course.content, course.afterNote, course.attachmentNote, course.attachmentLinks, course.photoLinks, course.questionNote, course.applicationNote, course.followUpNote, course.sponsorContact, sponsor.name, sponsor.contact, location?.name, location?.address, courseSpeakerInvite(course.id)?.status, getSpeaker(courseSpeakerInvite(course.id)?.speakerId || '')?.name]
        .join(' ').toLowerCase().includes(search);
    });
  }
  if (!list.length) {
    $('#courseCards').innerHTML = '<div class="empty-box course-grid-full">找不到符合條件的課程。</div>';
    return;
  }
  const groupedHtml = [];
  let currentYear = '';
  list.forEach(course => {
    const year = courseDisplayYear(course);
    if (year !== currentYear) {
      currentYear = year;
      const count = list.filter(item => courseDisplayYear(item) === year).length;
      groupedHtml.push(`<div class="course-year-divider"><span>${escapeHtml(year)} 年度</span><small>${count} 堂課｜近期課程在上方</small></div>`);
    }
    groupedHtml.push(courseDetailHtml(course, true));
  });
  $('#courseCards').innerHTML = groupedHtml.join('');
}


function hasCourseRecord(course) {
  return Boolean([
    course.afterNote,
    course.attachmentNote,
    course.attachmentLinks,
    course.photoLinks,
    course.questionNote,
    course.applicationNote,
    course.followUpNote
  ].some(value => String(value || '').trim()));
}

function hasAttachment(course) {
  return Boolean([course.attachmentLinks, course.photoLinks, course.attachmentNote].some(value => String(value || '').trim())) || Boolean(Array.isArray(course.mediaItems) && course.mediaItems.length);
}

function splitLines(value = '') {
  return String(value || '').split(/\n+/).map(line => line.trim()).filter(Boolean);
}

function firstUrlFromText(value = '') {
  const match = String(value || '').match(/https?:\/\/[^\s<>'")]+/i);
  return match ? match[0] : '';
}

function linkifyParkingNote(value = '', linkLabel = 'Google Map') {
  const text = String(value || '').trim();
  if (!text) return '未設定';
  const url = firstUrlFromText(text);
  if (!url) return escapeHtml(text);
  const labelSource = text.replace(url, '').replace(/[：:：\-－—、，,。\s]+$/g, '').trim();
  const label = labelSource && labelSource.length <= 16 ? labelSource : linkLabel;
  const prefix = labelSource && labelSource.length > 16 ? `${escapeHtml(labelSource)} ` : '';
  return `${prefix}<a class="inline-map-link" href="${escapeHtml(url)}" target="_blank" rel="noopener">${escapeHtml(label || linkLabel)}</a>`;
}

function courseParkingHtml(course, location) {
  return linkifyParkingNote(course?.parkingNote || location?.parkingNote || '未設定', 'Google Map');
}

function sortedCoursesRecentFirst(list = state.courses) {
  return [...list].sort((a, b) => courseRecentSortKey(b).localeCompare(courseRecentSortKey(a)));
}

function linkListHtml(value = '', title = '連結') {
  const lines = splitLines(value);
  if (!lines.length) return '';
  const links = lines.map((line, index) => {
    const isUrl = /^https?:\/\//i.test(line);
    return isUrl
      ? `<a class="mini-btn" href="${escapeHtml(line)}" target="_blank" rel="noopener">${escapeHtml(title)} ${index + 1}</a>`
      : `<span class="mini-btn soft">${escapeHtml(line)}</span>`;
  }).join('');
  return `<div class="record-links"><strong>${escapeHtml(title)}：</strong><div class="card-actions">${links}</div></div>`;
}

function recordBlock(label, value, fallback = '尚未填寫') {
  const text = String(value || '').trim();
  return `<div class="record-block"><strong>${escapeHtml(label)}</strong><p>${escapeHtml(text || fallback).replaceAll('\n', '<br>')}</p></div>`;
}

function renderRecords() {
  const cards = $('#recordCards');
  if (!cards) return;
  const search = ($('#recordSearch')?.value || '').trim().toLowerCase();
  const category = $('#recordCategoryFilter')?.value || 'all';
  const recordStatus = $('#recordStatusFilter')?.value || 'all';
  let list = sortedCoursesRecentFirst();
  if (recordFocusCourseId) list = list.filter(course => course.id === recordFocusCourseId);
  if (category !== 'all') list = list.filter(course => (course.category || '其他') === category);
  if (recordStatus === 'hasRecord') list = list.filter(hasCourseRecord);
  if (recordStatus === 'needRecord') list = list.filter(course => !hasCourseRecord(course));
  if (recordStatus === 'hasAttachment') list = list.filter(hasAttachment);
  if (search) {
    list = list.filter(course => {
      const location = getLocation(course.locationId);
      return [course.title, course.speaker, course.category, course.content, course.afterNote, course.attachmentNote, course.attachmentLinks, course.photoLinks, course.questionNote, course.applicationNote, course.followUpNote, location?.name]
        .join(' ').toLowerCase().includes(search);
    });
  }
  const total = state.courses.length;
  const recorded = state.courses.filter(hasCourseRecord).length;
  const withAttachment = state.courses.filter(hasAttachment).length;
  const focusCourse = recordFocusCourseId ? getCourse(recordFocusCourseId) : null;
  const summary = $('#recordSummary');
  if (summary) {
    summary.innerHTML = `<div class="record-stat"><span>課程總數</span><strong>${total}</strong></div>
      <div class="record-stat"><span>已有紀錄</span><strong>${recorded}</strong></div>
      <div class="record-stat"><span>已有附件</span><strong>${withAttachment}</strong></div>
      <div class="record-stat"><span>目前檢視</span><strong>${focusCourse ? escapeHtml(focusCourse.title) : `${list.length} 筆`}</strong></div>`;
  }
  cards.innerHTML = list.length ? list.map(course => {
    const location = getLocation(course.locationId);
    const adminActions = appMode === 'admin' ? `<button class="mini-btn" data-edit="course" data-id="${course.id}">編輯紀錄</button>` : '';
    return `<article class="item-card record-card">
      <div class="card-top">
        <div>
          <p class="eyebrow">${formatDate(course.date)}｜${escapeHtml(course.category || '其他')}</p>
          <div class="card-title">${escapeHtml(course.title)}</div>
        </div>
        <span class="badge ${hasCourseRecord(course) ? 'green' : 'blue'}">${hasCourseRecord(course) ? '已建紀錄' : '待補紀錄'}</span>
      </div>
      <div class="card-meta">
        👨‍🏫 ${escapeHtml(course.speaker || '未設定講師')}｜📍 ${escapeHtml(location?.name || '未設定地點')}｜👥 ${escapeHtml(participantLabel(course))}
      </div>
      <div class="record-sections">
        ${recordBlock('上課內容', course.content, '尚未填寫上課內容')}
        ${recordBlock('課後重點', course.afterNote, '課後尚未整理')}
        ${recordBlock('會員提問', course.questionNote, '尚未記錄會員提問')}
        ${recordBlock('豬場實務應用', course.applicationNote, '尚未整理可落地應用')}
        ${recordBlock('下次追蹤事項', course.followUpNote, '尚未設定追蹤事項')}
      </div>
      ${linkListHtml(course.attachmentLinks, '附件連結')}
      ${linkListHtml(course.photoLinks, '照片')}
      ${course.attachmentNote ? `<div class="notice"><strong>附件備註：</strong>${escapeHtml(course.attachmentNote).replaceAll('\n', '<br>')}</div>` : ''}
      <div class="card-actions">
        ${adminActions}
        ${location?.googleMapUrl ? `<a class="mini-btn" href="${escapeHtml(location.googleMapUrl)}" target="_blank" rel="noopener">Google 地圖</a>` : ''}
      </div>
    </article>`;
  }).join('') : '<div class="empty-box">找不到符合條件的課程紀錄。</div>';
}


function splitMediaLines(value = '') {
  return String(value || '').split(/\n|、|；|;/).map(line => line.trim()).filter(Boolean);
}

function inferMediaType(value = '') {
  const text = String(value || '').toLowerCase();
  if (/\.(jpg|jpeg|png|gif|webp)(\?|$)/.test(text) || text.includes('photos.app.goo') || text.includes('photo') || text.includes('相簿') || text.includes('照片')) return 'photo';
  if (text.includes('.pdf') || text.includes('pdf')) return 'pdf';
  if (text.includes('.ppt') || text.includes('.pptx') || text.includes('簡報') || text.includes('slide')) return 'slide';
  if (text.includes('youtube') || text.includes('youtu.be') || text.includes('video') || text.includes('影片')) return 'video';
  if (text.includes('drive.google') || text.includes('folder') || text.includes('雲端')) return 'drive';
  return 'link';
}

function buildLegacyMediaItems(course) {
  const items = [];
  splitMediaLines(course.photoLinks).forEach((line, index) => {
    items.push({ id: uid('mi'), type: 'photo', title: `照片 / 相簿 ${index + 1}`, url: line, note: course.attachmentNote || '', createdAt: course.date || '' });
  });
  splitMediaLines(course.attachmentLinks).forEach((line, index) => {
    items.push({ id: uid('mi'), type: inferMediaType(line), title: `附件 ${index + 1}`, url: line, note: course.attachmentNote || '', createdAt: course.date || '' });
  });
  return items;
}

function mediaTypeLabel(type) {
  return ({ photo: '照片', pdf: 'PDF / 附件', slide: 'PPT / 簡報', video: '影片', drive: '雲端資料夾', link: '一般連結' }[type] || '一般連結');
}

function mediaTypeIcon(type) {
  return ({ photo: '🖼️', pdf: '📄', slide: '📊', video: '🎬', drive: '☁️', link: '🔗' }[type] || '🔗');
}

function isImageUrl(url = '') {
  return /\.(jpg|jpeg|png|gif|webp)(\?|$)/i.test(String(url || ''));
}

function allMediaItems() {
  return sortedCourses().flatMap(course => (course.mediaItems || []).map(item => ({ ...item, course })));
}

function mediaMatches(item, course, search, type) {
  if (type !== 'all' && item.type !== type) return false;
  const keyword = String(search || '').trim().toLowerCase();
  if (!keyword) return true;
  const location = getLocation(course.locationId);
  return [item.title, item.url, item.note, item.type, course.title, course.speaker, course.category, location?.name]
    .join(' ').toLowerCase().includes(keyword);
}

function selectedMediaCourses() {
  const courseId = $('#mediaCourseFilter')?.value || mediaContext.courseId || 'all';
  const type = $('#mediaTypeFilter')?.value || mediaContext.type || 'all';
  const search = ($('#mediaSearch')?.value || mediaContext.search || '').trim();
  let courses = sortedCourses();
  if (courseId !== 'all') courses = courses.filter(course => course.id === courseId);
  return courses.map(course => ({
    course,
    items: (course.mediaItems || []).filter(item => mediaMatches(item, course, search, type))
  })).filter(group => group.items.length || (courseId !== 'all' && !search && type === 'all'));
}

function renderMedia() {
  const root = $('#view-media');
  if (!root) return;
  const courseFilter = $('#mediaCourseFilter');
  const itemCourse = $('#mediaItemCourse');
  const courseOptions = `<option value="all">全部課程</option>` + sortedCourses().map(course => `<option value="${course.id}">${formatDate(course.date)}｜${escapeHtml(course.title)}</option>`).join('');
  if (courseFilter) {
    const previous = courseFilter.value || mediaContext.courseId || 'all';
    courseFilter.innerHTML = courseOptions;
    courseFilter.value = sortedCourses().some(course => course.id === previous) ? previous : 'all';
  }
  if (itemCourse) {
    const preferred = ($('#mediaCourseFilter')?.value && $('#mediaCourseFilter').value !== 'all') ? $('#mediaCourseFilter').value : (nextCourse()?.id || state.courses[0]?.id || '');
    itemCourse.innerHTML = sortedCourses().map(course => `<option value="${course.id}">${formatDate(course.date)}｜${escapeHtml(course.title)}</option>`).join('');
    if (preferred) itemCourse.value = preferred;
  }
  const all = allMediaItems();
  const photos = all.filter(item => item.type === 'photo').length;
  const files = all.filter(item => ['pdf', 'slide', 'drive', 'link'].includes(item.type)).length;
  const videos = all.filter(item => item.type === 'video').length;
  const summary = $('#mediaSummary');
  if (summary) {
    summary.innerHTML = `<div class="record-stat"><span>附件總數</span><strong>${all.length}</strong></div>
      <div class="record-stat"><span>照片 / 相簿</span><strong>${photos}</strong></div>
      <div class="record-stat"><span>附件 / 檔案</span><strong>${files}</strong></div>
      <div class="record-stat"><span>影片</span><strong>${videos}</strong></div>`;
  }
  const groups = selectedMediaCourses();
  const box = $('#mediaCourseGroups');
  if (!box) return;
  box.innerHTML = groups.length ? groups.map(({ course, items }) => mediaCourseGroupHtml(course, items)).join('') : '<div class="empty-box">目前沒有符合條件的照片或附件。管理端可先新增 Google Drive、相簿、PDF 或 PPT 連結。</div>';
}

function mediaCourseGroupHtml(course, items) {
  const location = getLocation(course.locationId);
  const typeCounts = items.reduce((acc, item) => { acc[item.type] = (acc[item.type] || 0) + 1; return acc; }, {});
  const chips = Object.keys(typeCounts).map(type => `<span class="token-badge">${mediaTypeIcon(type)} ${mediaTypeLabel(type)} ${typeCounts[type]}</span>`).join('');
  return `<section class="panel media-course-panel">
    <div class="panel-head">
      <div>
        <p class="eyebrow">${formatDate(course.date)}｜${escapeHtml(course.category || '其他')}</p>
        <h3>${escapeHtml(course.title)}</h3>
        <p class="muted">${escapeHtml(course.speaker || '未設定講師')}｜${escapeHtml(location?.name || '未設定地點')}</p>
      </div>
      <div class="media-chip-row">${chips || '<span class="token-badge">尚無附件</span>'}</div>
    </div>
    ${items.length ? `<div class="media-grid">${items.map(item => mediaItemCardHtml(course, item)).join('')}</div>` : '<div class="empty-box">本場課程尚未建立照片或附件。</div>'}
  </section>`;
}

function mediaItemCardHtml(course, item) {
  const url = String(item.url || '').trim();
  const isPhoto = item.type === 'photo';
  const preview = isPhoto && isImageUrl(url)
    ? `<img src="${escapeHtml(url)}" alt="${escapeHtml(item.title || '課程照片')}" loading="lazy" />`
    : `<div class="media-placeholder"><span>${mediaTypeIcon(item.type)}</span><strong>${escapeHtml(mediaTypeLabel(item.type))}</strong></div>`;
  const openBtn = url ? `<a class="mini-btn" href="${escapeHtml(url)}" target="_blank" rel="noopener">開啟連結</a>` : '';
  const adminDelete = appMode === 'admin' ? `<button class="mini-btn danger-mini" data-delete-media="${course.id}|${item.id}">刪除</button>` : '';
  return `<article class="media-card">
    <div class="media-preview">${preview}</div>
    <div class="media-card-body">
      <div class="media-card-title">${escapeHtml(item.title || mediaTypeLabel(item.type))}</div>
      <div class="card-meta">${mediaTypeIcon(item.type)} ${escapeHtml(mediaTypeLabel(item.type))}｜${escapeHtml(item.createdAt || course.date || '')}</div>
      ${item.note ? `<p>${escapeHtml(item.note).replaceAll('\n', '<br>')}</p>` : '<p class="muted">尚未填寫備註。</p>'}
      ${url ? `<div class="copy-url-box small-url">${escapeHtml(url)}</div>` : ''}
      <div class="card-actions">
        ${openBtn}
        ${url ? `<button class="mini-btn" data-copy-media-url="${escapeHtml(url)}">複製連結</button>` : ''}
        ${adminDelete}
      </div>
    </div>
  </article>`;
}

function addMediaItem() {
  const courseId = $('#mediaItemCourse')?.value || '';
  const course = getCourse(courseId);
  if (!course) { alert('請先選擇課程。'); return; }
  const type = $('#mediaItemType')?.value || 'link';
  const title = ($('#mediaItemTitle')?.value || '').trim();
  const url = ($('#mediaItemUrl')?.value || '').trim();
  const note = ($('#mediaItemNote')?.value || '').trim();
  if (!title && !url) { alert('請至少輸入標題或連結。'); return; }
  if (!Array.isArray(course.mediaItems)) course.mediaItems = [];
  course.mediaItems.unshift({ id: uid('mi'), type, title: title || mediaTypeLabel(type), url, note, createdAt: new Date().toISOString().slice(0, 10) });
  if (type === 'photo' && url) course.photoLinks = [url, course.photoLinks || ''].filter(Boolean).join('\n');
  if (type !== 'photo' && url) course.attachmentLinks = [url, course.attachmentLinks || ''].filter(Boolean).join('\n');
  if (note && !course.attachmentNote) course.attachmentNote = note;
  saveState();
  clearMediaForm(false);
  render();
  showToast('已新增照片 / 附件連結');
}

function clearMediaForm(show = true) {
  ['mediaItemTitle', 'mediaItemUrl', 'mediaItemNote'].forEach(id => { const el = $(`#${id}`); if (el) el.value = ''; });
  if (show) showToast('已清空新增欄位');
}

function deleteMediaItem(courseId, mediaId) {
  const course = getCourse(courseId);
  if (!course) return;
  const item = (course.mediaItems || []).find(media => media.id === mediaId);
  const ok = confirm(`確定刪除「${item?.title || '此附件'}」嗎？`);
  if (!ok) return;
  course.mediaItems = (course.mediaItems || []).filter(media => media.id !== mediaId);
  saveState();
  render();
  showToast('照片 / 附件已刪除');
}

function buildMediaDigest() {
  const groups = selectedMediaCourses();
  if (!groups.length) return '目前沒有符合條件的照片或附件。';
  return groups.map(({ course, items }) => {
    const location = getLocation(course.locationId);
    const lines = items.map((item, index) => `${index + 1}. ${mediaTypeIcon(item.type)} ${mediaTypeLabel(item.type)}｜${item.title || '未命名'}\n${item.url || '未填連結'}${item.note ? `\n備註：${item.note}` : ''}`).join('\n');
    return `【${course.title}】\n日期：${formatDate(course.date)}\n地點：${location?.name || '未設定'}\n${lines}`;
  }).join('\n\n---\n\n');
}

function exportMediaCsv() {
  const rows = [['課程ID','課程日期','課程主題','講師','地點','附件類型','標題','連結','備註','建立日期']];
  selectedMediaCourses().forEach(({ course, items }) => {
    const location = getLocation(course.locationId);
    items.forEach(item => rows.push([course.id, course.date || '', course.title || '', course.speaker || '', location?.name || '', mediaTypeLabel(item.type), item.title || '', item.url || '', item.note || '', item.createdAt || '']));
  });
  downloadTextFile(`山線養豬讀書會_照片附件_${new Date().toISOString().slice(0,10)}.csv`, '﻿' + toCsv(rows), 'text/csv;charset=utf-8');
}

function knowledgeFieldMap() {
  return [
    { key: 'content', label: '上課內容', icon: '📘' },
    { key: 'afterNote', label: '課後重點', icon: '📝' },
    { key: 'questionNote', label: '會員提問', icon: '❓' },
    { key: 'applicationNote', label: '豬場實務應用', icon: '🐷' },
    { key: 'followUpNote', label: '下次追蹤事項', icon: '📌' },
    { key: 'attachmentLinks', label: '附件連結', icon: '📎' }
  ];
}

function getKnowledgeSearchText(course) {
  const location = getLocation(course.locationId);
  return [
    course.title,
    course.speaker,
    course.category,
    course.content,
    course.afterNote,
    course.questionNote,
    course.applicationNote,
    course.followUpNote,
    course.attachmentNote,
    course.attachmentLinks,
    course.photoLinks,
    location?.name,
    location?.address,
    location?.parkingNote
  ].join(' ').toLowerCase();
}

function highlightKeyword(text, keyword) {
  const safe = escapeHtml(text || '');
  const term = String(keyword || '').trim();
  if (!term) return safe.replaceAll('\n', '<br>');
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  try {
    return safe.replace(new RegExp(`(${escaped})`, 'ig'), '<mark>$1</mark>').replaceAll('\n', '<br>');
  } catch (error) {
    return safe.replaceAll('\n', '<br>');
  }
}

function courseKnowledgeBlocks(course, typeFilter = 'all', search = '') {
  const fields = knowledgeFieldMap().filter(field => typeFilter === 'all' || field.key === typeFilter);
  const keyword = String(search || '').trim().toLowerCase();
  return fields.map(field => {
    const text = String(course[field.key] || '').trim();
    if (!text) return null;
    if (keyword) {
      const haystack = [course.title, course.speaker, course.category, text].join(' ').toLowerCase();
      if (!haystack.includes(keyword)) return null;
    }
    return { ...field, text };
  }).filter(Boolean);
}

function knowledgeCoursePasses(course, search, category, typeFilter) {
  if (category !== 'all' && (course.category || '其他') !== category) return false;
  const blocks = courseKnowledgeBlocks(course, typeFilter, search);
  if (!blocks.length) return false;
  const keyword = String(search || '').trim().toLowerCase();
  if (!keyword) return true;
  return getKnowledgeSearchText(course).includes(keyword);
}

function knowledgeCategoryCounts() {
  return state.courses.reduce((acc, course) => {
    const category = course.category || '其他';
    acc[category] = (acc[category] || 0) + (hasCourseRecord(course) || course.content ? 1 : 0);
    return acc;
  }, {});
}


function scoreNumber(value) {
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : 0;
}

function averageFeedbackScore(items, key) {
  const scores = items.map(item => scoreNumber(item[key])).filter(Boolean);
  if (!scores.length) return 0;
  return scores.reduce((sum, value) => sum + value, 0) / scores.length;
}

function courseFeedbackStats(course) {
  const items = Array.isArray(course?.feedbacks) ? course.feedbacks : [];
  return {
    count: items.length,
    avgOverall: averageFeedbackScore(items, 'overallScore'),
    avgSpeaker: averageFeedbackScore(items, 'speakerScore'),
    avgPractical: averageFeedbackScore(items, 'practicalScore'),
    avgTopicFit: averageFeedbackScore(items, 'topicFitScore'),
    lowCount: items.filter(item => scoreNumber(item.overallScore) && scoreNumber(item.overallScore) <= 3).length
  };
}

function getFeedbackOverallStats(courseId = 'all') {
  const courses = courseId === 'all' ? state.courses : state.courses.filter(course => course.id === courseId);
  const items = courses.flatMap(course => Array.isArray(course.feedbacks) ? course.feedbacks : []);
  return {
    count: items.length,
    avg: averageFeedbackScore(items, 'overallScore'),
    avgSpeaker: averageFeedbackScore(items, 'speakerScore'),
    avgPractical: averageFeedbackScore(items, 'practicalScore'),
    lowCount: items.filter(item => scoreNumber(item.overallScore) && scoreNumber(item.overallScore) <= 3).length
  };
}

function renderStars(value) {
  const n = scoreNumber(value);
  if (!n) return '<span class="muted">未評分</span>';
  return `<span class="star-score">${'★'.repeat(Math.round(n))}${'☆'.repeat(Math.max(0, 5 - Math.round(n)))} <b>${n}/5</b></span>`;
}

function feedbackMemberName(item) {
  const member = getMember(item.memberId);
  if (item.anonymous) return '匿名會員';
  return member ? member.name : '未知會員';
}

function getAllFeedbackRows() {
  return sortedCourses().flatMap(course => (Array.isArray(course.feedbacks) ? course.feedbacks : []).map(item => ({ course, item })));
}

function buildFeedbackLink(courseId, memberId, token) {
  const base = appBaseUrl();
  const params = new URLSearchParams({ mode: 'feedback', courseId, memberId, token: token || '' });
  appendPublicSyncParams(params, { includeReadToken: false });
  return `${base}?${params.toString()}`;
}

function buildAllFeedbackLinks(courseId) {
  const course = getCourse(courseId) || sortedCourses()[0];
  if (!course) return '';
  return state.members.map(member => `${member.name}：${buildFeedbackLink(course.id, member.id, member.memberToken)}`).join('\n');
}

function resolveFeedbackCourseForForm() {
  if (feedbackContext.courseId && feedbackContext.courseId !== 'all') return getCourse(feedbackContext.courseId) || sortedCourses()[0] || null;
  return sortedCoursesRecentFirst().find(course => computedCourseStatusKey(course) === 'done') || nextCourse() || sortedCoursesRecentFirst()[0] || null;
}

function renderFeedback() {
  const courseFilter = $('#feedbackCourseFilter');
  const tableBody = $('#feedbackTable tbody');
  if (!courseFilter || !tableBody) return;

  const courseOptions = '<option value="all">全部課程</option>' + sortedCoursesRecentFirst().map(course => `<option value="${course.id}">${formatDate(course.date)}｜${escapeHtml(course.title)}</option>`).join('');
  courseFilter.innerHTML = courseOptions || '<option value="all">尚無課程</option>';
  if (![...courseFilter.options].some(option => option.value === feedbackContext.courseId)) feedbackContext.courseId = 'all';
  courseFilter.value = feedbackContext.courseId || 'all';
  const scoreFilter = $('#feedbackScoreFilter');
  if (scoreFilter) scoreFilter.value = feedbackContext.score || 'all';
  const searchEl = $('#feedbackSearch');
  if (searchEl && searchEl.value !== feedbackContext.search) feedbackContext.search = searchEl.value || '';

  let rows = getAllFeedbackRows();
  if (feedbackContext.courseId && feedbackContext.courseId !== 'all') rows = rows.filter(row => row.course.id === feedbackContext.courseId);
  const scoreMode = feedbackContext.score || 'all';
  if (scoreMode === '5') rows = rows.filter(row => scoreNumber(row.item.overallScore) === 5);
  if (scoreMode === '4') rows = rows.filter(row => scoreNumber(row.item.overallScore) >= 4);
  if (scoreMode === 'low') rows = rows.filter(row => scoreNumber(row.item.overallScore) && scoreNumber(row.item.overallScore) <= 3);
  if (scoreMode === 'none') rows = rows.filter(row => !scoreNumber(row.item.overallScore));
  const search = (feedbackContext.search || '').trim().toLowerCase();
  if (search) rows = rows.filter(({ course, item }) => {
    const member = getMember(item.memberId);
    return [course.title, course.speaker, course.category, member?.name, member?.groupName, item.favoritePoint, item.improvement, item.nextTopic, item.applyPlan, item.difficulty]
      .join(' ').toLowerCase().includes(search);
  });

  const stats = getFeedbackOverallStats(feedbackContext.courseId || 'all');
  $('#feedbackSummary').innerHTML = [
    ['回饋筆數', stats.count],
    ['整體滿意', stats.avg ? `${stats.avg.toFixed(1)} / 5` : '尚無'],
    ['講師評分', stats.avgSpeaker ? `${stats.avgSpeaker.toFixed(1)} / 5` : '尚無'],
    ['實用度', stats.avgPractical ? `${stats.avgPractical.toFixed(1)} / 5` : '尚無'],
    ['低分追蹤', stats.lowCount]
  ].map(([label, value]) => `<div class="summary-chip"><span>${label}</span><strong>${escapeHtml(value)}</strong></div>`).join('');

  renderFeedbackForm();
  renderFeedbackInsight(rows);

  tableBody.innerHTML = rows.length ? rows.map(({ course, item }) => {
    const action = appMode === 'admin' ? `<button class="mini-btn danger-mini" data-delete-feedback="${course.id}|${item.id}">刪除</button>` : '';
    return `<tr>
      <td><strong>${escapeHtml(course.title)}</strong><br><span class="muted">${formatDate(course.date)}</span></td>
      <td>${escapeHtml(feedbackMemberName(item))}</td>
      <td>${renderStars(item.overallScore)}</td>
      <td>${renderStars(item.speakerScore)}</td>
      <td>${renderStars(item.practicalScore)}</td>
      <td>${escapeHtml(item.nextTopic || '未填寫')}</td>
      <td><strong>喜歡：</strong>${escapeHtml(item.favoritePoint || '未填寫')}<br><strong>建議：</strong>${escapeHtml(item.improvement || '未填寫')}</td>
      <td class="admin-only">${action}</td>
    </tr>`;
  }).join('') : '<tr><td colspan="8">尚無符合條件的問卷回饋。</td></tr>';
}

function renderFeedbackForm() {
  const grid = $('#feedbackFormGrid');
  const box = $('#feedbackStatusBox');
  if (!grid || !box) return;
  const course = resolveFeedbackCourseForForm();
  const member = getMember(feedbackContext.memberId) || state.members[0] || null;
  const current = course && member ? (course.feedbacks || []).find(item => item.memberId === member.id) : null;
  const courseOptions = sortedCoursesRecentFirst().map(item => `<option value="${item.id}" ${course?.id === item.id ? 'selected' : ''}>${formatDate(item.date)}｜${escapeHtml(item.title)}</option>`).join('');
  const memberOptions = state.members.map(item => `<option value="${item.id}" ${member?.id === item.id ? 'selected' : ''}>${escapeHtml(item.name)}｜${escapeHtml(item.groupName || item.role || '會員')}</option>`).join('');
  box.innerHTML = course && member
    ? `<strong>${escapeHtml(member.name)}</strong> 正在填寫：<strong>${escapeHtml(course.title)}</strong><br>${formatDate(course.date)} ${escapeHtml(course.startTime || '')}-${escapeHtml(course.endTime || '')}`
    : '請先建立課程與會員資料。';
  grid.innerHTML = `<div class="form-field full">
      <label for="feedbackCourse">課程</label>
      <select id="feedbackCourse" class="form-control">${courseOptions || '<option value="">尚無課程</option>'}</select>
    </div>
    <div class="form-field">
      <label for="feedbackMember">會員</label>
      <select id="feedbackMember" class="form-control">${memberOptions || '<option value="">尚無會員</option>'}</select>
    </div>
    <div class="form-field">
      <label for="feedbackToken">會員 Token（舊版個人連結用）</label>
      <input id="feedbackToken" class="form-control" value="${escapeHtml(feedbackContext.token || member?.memberToken || '')}" placeholder="舊版個人連結才會自動帶入" />
    </div>
    ${scoreSelectHtml('feedbackOverallScore', '整體滿意度', current?.overallScore)}
    ${scoreSelectHtml('feedbackSpeakerScore', '講師表達', current?.speakerScore)}
    ${scoreSelectHtml('feedbackPracticalScore', '豬場實用度', current?.practicalScore)}
    ${scoreSelectHtml('feedbackTopicFitScore', '主題符合需求', current?.topicFitScore)}
    <div class="form-field">
      <label for="feedbackDifficulty">課程難度</label>
      <select id="feedbackDifficulty" class="form-control">
        ${['太簡單','剛好','稍難','太難'].map(text => `<option value="${text}" ${(current?.difficulty || '剛好') === text ? 'selected' : ''}>${text}</option>`).join('')}
      </select>
    </div>
    <div class="form-field full"><label for="feedbackFavoritePoint">這堂課最有幫助的重點</label><textarea id="feedbackFavoritePoint" class="form-control" rows="3">${escapeHtml(current?.favoritePoint || '')}</textarea></div>
    <div class="form-field full"><label for="feedbackImprovement">建議改善 / 希望補充</label><textarea id="feedbackImprovement" class="form-control" rows="3">${escapeHtml(current?.improvement || '')}</textarea></div>
    <div class="form-field full"><label for="feedbackNextTopic">下次想聽的題目</label><input id="feedbackNextTopic" class="form-control" value="${escapeHtml(current?.nextTopic || '')}" placeholder="例如：PRRS、飼料配方、產房管理、環控設備..." /></div>
    <div class="form-field full"><label for="feedbackApplyPlan">回到豬場後想嘗試的做法</label><textarea id="feedbackApplyPlan" class="form-control" rows="3">${escapeHtml(current?.applyPlan || '')}</textarea></div>
    <div class="form-field full checkbox-field"><label><input type="checkbox" id="feedbackAnonymous" ${current?.anonymous ? 'checked' : ''}> 統計與明細顯示為匿名會員</label></div>
    <div class="form-actions">
      <button type="button" class="ghost-btn" id="reloadFromCloud">先從雲端更新資料</button>
      <button type="button" class="primary-btn" id="submitFeedback">送出 / 更新問卷</button>
    </div>`;
}

function scoreSelectHtml(id, label, value) {
  return `<div class="form-field"><label for="${id}">${label}</label><select id="${id}" class="form-control">
    <option value="">未評分</option>
    ${[5,4,3,2,1].map(n => `<option value="${n}" ${String(value || '') === String(n) ? 'selected' : ''}>${n} 分${n === 5 ? '｜非常滿意' : n === 4 ? '｜滿意' : n === 3 ? '｜普通' : n === 2 ? '｜不太滿意' : '｜需改善'}</option>`).join('')}
  </select></div>`;
}

function renderFeedbackInsight(rows) {
  const box = $('#feedbackInsight');
  if (!box) return;
  const nextTopics = rows.map(row => row.item.nextTopic).filter(Boolean).slice(0, 12);
  const improvements = rows.map(row => row.item.improvement).filter(Boolean).slice(0, 8);
  const applications = rows.map(row => row.item.applyPlan).filter(Boolean).slice(0, 8);
  box.innerHTML = `<div class="feedback-topic-cloud">
      ${(nextTopics.length ? nextTopics : ['尚無下次題目建議']).map(text => `<span class="knowledge-chip">${escapeHtml(text)}</span>`).join('')}
    </div>
    <div class="record-block"><strong>主要改善建議</strong><p>${escapeHtml(improvements.join('\n') || '尚無改善建議。').replaceAll('\n', '<br>')}</p></div>
    <div class="record-block"><strong>回場實務應用</strong><p>${escapeHtml(applications.join('\n') || '尚無實務應用回饋。').replaceAll('\n', '<br>')}</p></div>`;
}

function buildFeedbackDigest() {
  const course = feedbackContext.courseId && feedbackContext.courseId !== 'all' ? getCourse(feedbackContext.courseId) : null;
  const rows = getAllFeedbackRows().filter(row => !course || row.course.id === course.id);
  const stats = getFeedbackOverallStats(course?.id || 'all');
  const topics = rows.map(row => row.item.nextTopic).filter(Boolean).slice(0, 10);
  const low = rows.filter(row => scoreNumber(row.item.overallScore) && scoreNumber(row.item.overallScore) <= 3);
  return `山線養豬讀書會｜課程問卷回饋摘要\n範圍：${course ? course.title : '全部課程'}\n回饋筆數：${stats.count}\n整體滿意：${stats.avg ? stats.avg.toFixed(1) + '/5' : '尚無'}\n講師評分：${stats.avgSpeaker ? stats.avgSpeaker.toFixed(1) + '/5' : '尚無'}\n實用度：${stats.avgPractical ? stats.avgPractical.toFixed(1) + '/5' : '尚無'}\n低分需追蹤：${low.length}\n\n下次想聽題目：\n${topics.length ? topics.map((text, i) => `${i + 1}. ${text}`).join('\n') : '尚無'}\n`;
}

function collectFeedbackFormData() {
  return {
    overallScore: $('#feedbackOverallScore')?.value || '',
    speakerScore: $('#feedbackSpeakerScore')?.value || '',
    practicalScore: $('#feedbackPracticalScore')?.value || '',
    topicFitScore: $('#feedbackTopicFitScore')?.value || '',
    difficulty: $('#feedbackDifficulty')?.value || '剛好',
    favoritePoint: $('#feedbackFavoritePoint')?.value || '',
    improvement: $('#feedbackImprovement')?.value || '',
    nextTopic: $('#feedbackNextTopic')?.value || '',
    applyPlan: $('#feedbackApplyPlan')?.value || '',
    anonymous: Boolean($('#feedbackAnonymous')?.checked)
  };
}

async function submitFeedback() {
  const courseId = $('#feedbackCourse')?.value || '';
  const memberId = $('#feedbackMember')?.value || '';
  const token = ($('#feedbackToken')?.value || '').trim();
  const course = getCourse(courseId);
  const member = getMember(memberId);
  if (!course || !member) { alert('找不到課程或會員資料。'); return; }
  if (appMode !== 'admin' && member.memberToken && token !== member.memberToken) {
    alert('會員 Token（舊版個人連結用） 不正確，請使用管理端產生的專屬問卷連結。');
    return;
  }
  if (!Array.isArray(course.feedbacks)) course.feedbacks = [];
  const data = { memberId, ...collectFeedbackFormData(), createdAt: new Date().toLocaleString('zh-TW', { hour12: false }) };
  const existingIndex = course.feedbacks.findIndex(item => item.memberId === memberId);
  if (existingIndex >= 0) course.feedbacks[existingIndex] = { ...course.feedbacks[existingIndex], ...data };
  else course.feedbacks.push({ id: uid('fb'), ...data });
  feedbackContext = { ...feedbackContext, courseId, memberId, token };
  saveState();
  render();
  showToast('本機問卷回饋已儲存');
  if (settings.syncUrl) {
    try {
      const feedback = course.feedbacks.find(item => item.memberId === memberId);
      const json = await postCloud('feedback', { courseId, memberId, feedback }, token || member.memberToken);
      if (json.payload) {
        state = ensureFormalDataForCloudPayload(json.payload, state);
        saveState();
        render();
      }
      showToast('問卷回饋已同步雲端');
    } catch (error) {
      console.warn(error);
      alert('本機已儲存，但雲端同步失敗。請確認 Web App URL 或重新部署 Apps Script。');
    }
  }
}

function deleteFeedbackItem(courseId, feedbackId) {
  if (appMode !== 'admin') return;
  const course = getCourse(courseId);
  if (!course || !Array.isArray(course.feedbacks)) return;
  if (!confirm('確定要刪除這筆問卷回饋嗎？')) return;
  course.feedbacks = course.feedbacks.filter(item => item.id !== feedbackId);
  saveState();
  render();
  showToast('問卷回饋已刪除');
}

function exportFeedbackCsv() {
  const rows = [['課程ID','課程日期','課程主題','會員ID','會員姓名','組別','整體滿意','講師評分','實用度','主題符合','難度','最有幫助','改善建議','下次題目','實務應用','匿名','填寫時間']];
  getAllFeedbackRows().forEach(({ course, item }) => {
    const member = getMember(item.memberId) || {};
    rows.push([course.id, course.date || '', course.title || '', item.memberId || '', member.name || '', member.groupName || '', item.overallScore || '', item.speakerScore || '', item.practicalScore || '', item.topicFitScore || '', item.difficulty || '', item.favoritePoint || '', item.improvement || '', item.nextTopic || '', item.applyPlan || '', item.anonymous ? '是' : '否', item.createdAt || '']);
  });
  const csv = rows.map(row => row.map(value => `"${String(value ?? '').replaceAll('"', '""')}"`).join(',')).join('\n');
  downloadTextFile('山線養豬讀書會_課程問卷回饋.csv', '\ufeff' + csv, 'text/csv;charset=utf-8');
  showToast('已匯出問卷回饋 CSV');
}


const COURSE_CATEGORIES = ['疾病管理','營養飼料','環控設備','批次管理','產房管理','保育肉豬','經營管理','其他'];
const TOPIC_TARGETS = {
  '疾病管理': 2,
  '營養飼料': 2,
  '環控設備': 1,
  '批次管理': 1,
  '產房管理': 1,
  '保育肉豬': 1,
  '經營管理': 1,
  '其他': 0
};
const CATEGORY_KEYWORDS = {
  '疾病管理': ['PRRS','疾病','疫苗','免疫','用藥','抗生素','黴漿菌','腹瀉','呼吸道','檢驗','採樣','病原','生物安全'],
  '營養飼料': ['飼料','營養','豆粉','玉米','採食','配方','添加物','胺基酸','礦物質','飼料桶'],
  '環控設備': ['環控','通風','風速','水簾','溫度','濕度','熱緊迫','冷卻','設備','天窗'],
  '批次管理': ['批次','10天','配種','轉舍','排程','分娩率','PSY','週批','管理流程'],
  '產房管理': ['產房','分娩','哺乳','母豬','仔豬','離乳','活仔','壓死','寄養'],
  '保育肉豬': ['保育','肉豬','育成','上市','增重','料肉比','離乳後','死亡率'],
  '經營管理': ['成本','人員','薪資','KPI','報表','收支','經營','財務','制度','讀書會']
};

function getPlanningYears() {
  const years = [...new Set(state.courses.map(course => course.year || (course.date || '').slice(0, 4)).filter(Boolean))].sort();
  const current = String(new Date().getFullYear());
  if (!years.includes(current)) years.push(current);
  return years.sort();
}

function selectedPlanningYear() {
  const years = getPlanningYears();
  const select = $('#planningYearFilter');
  const preferred = select?.value || planningContext.year || years.at(-1) || String(new Date().getFullYear());
  planningContext.year = years.includes(preferred) ? preferred : (years.at(-1) || preferred);
  return planningContext.year;
}

function coursesForPlanningYear(year) {
  return sortedCourses().filter(course => String(course.year || (course.date || '').slice(0, 4)) === String(year));
}

function inferCategoryFromText(text = '') {
  const normalized = String(text || '').toLowerCase();
  let best = { category: '其他', score: 0 };
  Object.entries(CATEGORY_KEYWORDS).forEach(([category, words]) => {
    const score = words.reduce((sum, word) => sum + (normalized.includes(String(word).toLowerCase()) ? 1 : 0), 0);
    if (score > best.score) best = { category, score };
  });
  return best.category;
}

function allFeedbackRowsForYear(year) {
  return coursesForPlanningYear(year).flatMap(course => (course.feedbacks || []).map(item => ({ course, item, member: getMember(item.memberId) })));
}

function topicDemandItems(year) {
  const rows = allFeedbackRowsForYear(year);
  const map = new Map();
  rows.forEach(({ course, item, member }) => {
    const text = String(item.nextTopic || '').trim();
    if (!text) return;
    const key = text.replace(/\s+/g, ' ');
    const category = inferCategoryFromText(`${text} ${course.category || ''}`);
    if (!map.has(key)) map.set(key, { topic: key, category, count: 0, members: [], examples: [] });
    const entry = map.get(key);
    entry.count += 1;
    if (member?.name && !entry.members.includes(member.name)) entry.members.push(member.name);
    if (course.title && !entry.examples.includes(course.title)) entry.examples.push(course.title);
  });
  return [...map.values()].sort((a, b) => b.count - a.count || a.topic.localeCompare(b.topic, 'zh-Hant'));
}

function planningCategoryStats(year) {
  const courses = coursesForPlanningYear(year);
  const demand = topicDemandItems(year);
  return COURSE_CATEGORIES.map(category => {
    const categoryCourses = courses.filter(course => (course.category || '其他') === category);
    const done = categoryCourses.filter(course => course.status === 'done').length;
    const planned = categoryCourses.filter(course => course.status === 'planned').length;
    const target = TOPIC_TARGETS[category] ?? 1;
    const demandCount = demand.filter(item => item.category === category).reduce((sum, item) => sum + item.count, 0);
    const gap = Math.max(0, target - categoryCourses.length);
    const score = Math.max(0, Math.min(100, Math.round((categoryCourses.length / Math.max(1, target)) * 100)));
    return { category, target, count: categoryCourses.length, done, planned, gap, demandCount, score, courses: categoryCourses };
  });
}

function buildPlanningSuggestions(year) {
  const stats = planningCategoryStats(year);
  const demand = topicDemandItems(year);
  const suggestions = [];
  demand.slice(0, 6).forEach(item => {
    suggestions.push({
      source: '會員問卷',
      category: item.category,
      title: item.topic,
      reason: `有 ${item.count} 筆問卷提到，來源會員：${item.members.slice(0, 4).join('、') || '匿名/未填'}。`,
      priority: item.count >= 2 ? '高' : '中'
    });
  });
  stats.filter(item => item.gap > 0 && item.category !== '其他').forEach(item => {
    const defaultTitle = {
      '疾病管理': 'PRRS / 呼吸道疾病監測與穩定場策略',
      '營養飼料': '各階段豬隻營養需求與自配料成本檢討',
      '環控設備': '夏季熱緊迫、通風與水簾管理實務',
      '批次管理': '10 天一批生產流程與轉舍節點檢討',
      '產房管理': '產房分娩、寄養與離乳前死亡率改善',
      '保育肉豬': '保育到肉豬轉舍、增重與死亡率管理',
      '經營管理': '豬場成本、用人與年度生產報表管理'
    }[item.category] || `${item.category} 主題補強課程`;
    suggestions.push({
      source: '缺口分析',
      category: item.category,
      title: defaultTitle,
      reason: `${year} 年度 ${item.category} 目前 ${item.count} 堂，建議目標 ${item.target} 堂，尚缺 ${item.gap} 堂。`,
      priority: item.gap >= 2 ? '高' : '中'
    });
  });
  const seen = new Set();
  return suggestions.filter(item => {
    const key = `${item.category}|${item.title}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, 9);
}

function monthlyPlanningStats(year) {
  const months = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));
  const courses = coursesForPlanningYear(year);
  return months.map(month => {
    const list = courses.filter(course => String(course.date || '').slice(5, 7) === month);
    const cats = [...new Set(list.map(course => course.category || '其他'))];
    return { month, count: list.length, categories: cats, courses: list };
  });
}

function planningOverallStats(year) {
  const courses = coursesForPlanningYear(year);
  const stats = planningCategoryStats(year);
  const demand = topicDemandItems(year);
  const missing = stats.filter(item => item.gap > 0 && item.category !== '其他').length;
  const balanced = stats.filter(item => item.category !== '其他' && item.gap === 0).length;
  const totalTarget = stats.reduce((sum, item) => sum + item.target, 0);
  const totalGap = stats.reduce((sum, item) => sum + item.gap, 0);
  const coverage = percent(totalTarget - totalGap, totalTarget);
  return { courses: courses.length, missing, balanced, demand: demand.length, coverage };
}

function renderPlanning() {
  const root = $('#view-planning');
  if (!root) return;
  const years = getPlanningYears();
  const yearSelect = $('#planningYearFilter');
  if (yearSelect) {
    const previous = yearSelect.value || planningContext.year || years.at(-1);
    yearSelect.innerHTML = years.map(year => `<option value="${escapeHtml(year)}">${escapeHtml(year)} 年度</option>`).join('');
    yearSelect.value = years.includes(previous) ? previous : years.at(-1);
  }
  const modeSelect = $('#planningModeFilter');
  if (modeSelect) modeSelect.value = planningContext.mode || 'all';
  const year = selectedPlanningYear();
  const mode = modeSelect?.value || planningContext.mode || 'all';
  planningContext.mode = mode;
  const overall = planningOverallStats(year);
  const summary = $('#planningSummary');
  if (summary) {
    summary.innerHTML = `<div class="record-stat"><span>${escapeHtml(year)} 課程數</span><strong>${overall.courses}</strong></div>
      <div class="record-stat"><span>主題覆蓋率</span><strong>${overall.coverage}%</strong></div>
      <div class="record-stat"><span>仍有缺口</span><strong>${overall.missing}</strong></div>
      <div class="record-stat"><span>問卷題目</span><strong>${overall.demand}</strong></div>`;
  }
  let stats = planningCategoryStats(year);
  if (mode === 'gap') stats = stats.filter(item => item.gap > 0);
  if (mode === 'feedback') stats = stats.filter(item => item.demandCount > 0 || item.gap > 0).sort((a, b) => b.demandCount - a.demandCount || b.gap - a.gap);
  const maxCount = Math.max(1, ...stats.map(item => Math.max(item.count, item.target, item.demandCount)));
  const categoryList = $('#planningCategoryList');
  if (categoryList) {
    categoryList.innerHTML = stats.length ? stats.map(item => {
      const width = Math.min(100, Math.round((item.count / maxCount) * 100));
      return `<article class="planning-row ${item.gap ? 'has-gap' : 'is-ok'}">
        <div class="planning-row-main">
          <div>
            <strong>${escapeHtml(item.category)}</strong>
            <p class="muted">已排 ${item.count} 堂｜已完成 ${item.done}｜未上 ${item.planned}｜問卷需求 ${item.demandCount}</p>
          </div>
          <span class="badge ${item.gap ? 'red' : 'green'}">${item.gap ? `缺 ${item.gap} 堂` : '已達標'}</span>
        </div>
        <div class="progress-track"><div class="progress-bar" style="width:${width}%"></div></div>
        <div class="small-note">年度建議目標：${item.target} 堂。${item.courses.length ? `已排：${item.courses.map(course => course.title).join('、')}` : '尚未安排此類主題。'}</div>
      </article>`;
    }).join('') : '<div class="empty-box">目前沒有符合篩選的主題缺口。</div>';
  }
  const demand = topicDemandItems(year);
  const demandBox = $('#planningFeedbackDemand');
  if (demandBox) {
    demandBox.innerHTML = demand.length ? demand.slice(0, 10).map(item => `<article class="planning-demand-item">
      <div><strong>${escapeHtml(item.topic)}</strong><p class="muted">推估分類：${escapeHtml(item.category)}｜來源：${escapeHtml(item.members.join('、') || '匿名/未填')}</p></div>
      <span class="badge ${item.count >= 2 ? 'red' : 'blue'}">${item.count} 筆</span>
    </article>`).join('') : '<div class="empty-box">尚未有會員填寫「下次想聽的題目」。</div>';
  }
  const suggestions = buildPlanningSuggestions(year);
  const suggestionBox = $('#planningSuggestions');
  if (suggestionBox) {
    suggestionBox.innerHTML = suggestions.length ? suggestions.map(item => `<article class="item-card planning-suggestion-card">
      <div class="card-top"><div><p class="eyebrow">${escapeHtml(item.source)}｜${escapeHtml(item.category)}</p><div class="card-title">${escapeHtml(item.title)}</div></div><span class="badge ${item.priority === '高' ? 'red' : 'blue'}">${escapeHtml(item.priority)}優先</span></div>
      <p class="muted">${escapeHtml(item.reason)}</p>
      <div class="card-actions"><button class="mini-btn" data-copy-planning-suggestion="${escapeHtml(item.title)}\n分類：${escapeHtml(item.category)}\n原因：${escapeHtml(item.reason)}">複製此建議</button></div>
    </article>`).join('') : '<div class="empty-box">目前年度主題已大致均衡，或尚無足夠資料產生建議。</div>';
  }
  const monthBox = $('#planningMonthGrid');
  if (monthBox) {
    monthBox.innerHTML = monthlyPlanningStats(year).map(item => `<div class="planning-month-card ${item.count ? '' : 'empty'}">
      <strong>${Number(item.month)} 月</strong>
      <span>${item.count} 堂</span>
      <small>${escapeHtml(item.categories.join('、') || '未排課')}</small>
    </div>`).join('');
  }
}

function buildPlanningDigest() {
  const year = selectedPlanningYear();
  const overall = planningOverallStats(year);
  const stats = planningCategoryStats(year);
  const suggestions = buildPlanningSuggestions(year);
  const lines = [];
  lines.push(`【山線養豬讀書會｜${year} 年度課程主題規劃】`);
  lines.push(`年度課程：${overall.courses} 堂｜主題覆蓋率：${overall.coverage}%｜仍有缺口主題：${overall.missing} 類`);
  lines.push('');
  lines.push('一、主題缺口');
  stats.forEach(item => {
    lines.push(`${item.category}：已排 ${item.count}/${item.target} 堂${item.gap ? `，尚缺 ${item.gap} 堂` : '，已達標'}｜問卷需求 ${item.demandCount} 筆`);
  });
  lines.push('');
  lines.push('二、下一季建議課程');
  if (suggestions.length) suggestions.forEach((item, index) => lines.push(`${index + 1}. 【${item.category}】${item.title}（${item.source}，${item.priority}優先）`));
  else lines.push('目前尚無明顯缺口或問卷題目，建議先補齊年度課表與問卷。');
  return lines.join('\n');
}

function exportPlanningCsv() {
  const year = selectedPlanningYear();
  const rows = [['年度','分類','已排課程數','建議目標','缺口堂數','已完成','未上課','問卷需求筆數','已排課程']];
  planningCategoryStats(year).forEach(item => rows.push([year, item.category, item.count, item.target, item.gap, item.done, item.planned, item.demandCount, item.courses.map(course => course.title).join('；')]));
  downloadText(`shanxian_topic_planning_${year}.csv`, toCsv(rows));
}


function courseSpeakerInvite(courseId) {
  return state.invitations.find(item => item.courseId === courseId) || null;
}

function getInviteStatusLabel(status) {
  return status || '尚未邀約';
}

function getInviteBadgeClass(status) {
  return ({ '尚未邀約': 'blue', '洽詢中': 'blue', '已確認': 'green', '待補資料': 'red', '已完成': 'green', '取消': 'red' }[status] || 'blue');
}

function speakerTypeOptions() {
  const types = ['獸醫師', '營養師/顧問', '教授/研究員', '設備/環控顧問', '經營管理顧問', '會員分享', '其他'];
  const extras = [...new Set(state.speakers.map(s => s.type).filter(Boolean))].filter(t => !types.includes(t));
  return [...types, ...extras];
}

function sponsorVendorTypeOptions() {
  const types = ['飼料/營養廠商', '動保/疫苗廠商', '設備/環控廠商', '藥品/消毒廠商', '檢驗/實驗室', '農會/協會', '其他'];
  const extras = [...new Set(state.sponsorVendors.map(v => v.type).filter(Boolean))].filter(t => !types.includes(t));
  return [...types, ...extras];
}

function speakerInvitationStats() {
  const totalSpeakers = state.speakers.length;
  const totalSponsorVendors = state.sponsorVendors.length;
  const totalInvites = state.invitations.length;
  const confirmed = state.invitations.filter(invite => invite.status === '已確認' || invite.status === '已完成').length;
  const pending = state.invitations.filter(invite => ['尚未邀約', '洽詢中', '待補資料'].includes(invite.status)).length;
  const feeTotal = state.invitations.reduce((sum, invite) => sum + Number(invite.speakerFee || 0), 0);
  const sponsorTotal = state.invitations.reduce((sum, invite) => sum + Number(invite.sponsorAmount || 0), 0);
  const sponsorLinked = state.invitations.filter(invite => invite.sponsorVendorId).length;
  return { totalSpeakers, totalSponsorVendors, totalInvites, confirmed, pending, feeTotal, sponsorTotal, sponsorLinked };
}

function renderSpeakerSelectors() {
  const courseSelect = $('#inviteCourseSelect');
  if (courseSelect) {
    const previous = courseSelect.value || nextCourse()?.id || state.courses[0]?.id || '';
    courseSelect.innerHTML = sortedCourses().map(course => `<option value="${course.id}" ${previous === course.id ? 'selected' : ''}>${escapeHtml(formatDate(course.date))}｜${escapeHtml(course.title)}</option>`).join('') || '<option value="">請先新增課程</option>';
  }
  const speakerSelect = $('#inviteSpeakerSelect');
  if (speakerSelect) {
    const previous = speakerSelect.value || state.speakers[0]?.id || '';
    speakerSelect.innerHTML = state.speakers.map(speaker => `<option value="${speaker.id}" ${previous === speaker.id ? 'selected' : ''}>${escapeHtml(speaker.name)}｜${escapeHtml(speaker.type || '講師/顧問')}</option>`).join('') || '<option value="">請先新增講師</option>';
  }
  const sponsorSelect = $('#inviteSponsorSelect');
  if (sponsorSelect) {
    const previous = sponsorSelect.value || '';
    sponsorSelect.innerHTML = '<option value="">未設定主辦廠商</option>' + state.sponsorVendors.map(vendor => `<option value="${vendor.id}" ${previous === vendor.id ? 'selected' : ''}>${escapeHtml(vendor.name)}｜${escapeHtml(vendor.type || '廠商/主辦單位')}</option>`).join('');
  }
}

function filteredSpeakers() {
  const search = ($('#speakerSearch')?.value || speakerContext.search || '').trim().toLowerCase();
  const type = $('#speakerTypeFilter')?.value || speakerContext.type || 'all';
  speakerContext.search = search;
  speakerContext.type = type;
  return state.speakers.filter(speaker => {
    if (type !== 'all' && speaker.type !== type) return false;
    if (!search) return true;
    return [speaker.name, speaker.type, speaker.organization, speaker.area, speaker.specialty, speaker.phone, speaker.lineId, speaker.email, speaker.note]
      .join(' ').toLowerCase().includes(search);
  });
}

function filteredSponsorVendors() {
  const search = ($('#speakerSearch')?.value || speakerContext.search || '').trim().toLowerCase();
  return state.sponsorVendors.filter(vendor => {
    if (!search) return true;
    return [vendor.name, vendor.type, vendor.contactPerson, vendor.area, vendor.products, vendor.phone, vendor.lineId, vendor.email, vendor.supportType, vendor.defaultSupportAmount, vendor.note]
      .join(' ').toLowerCase().includes(search);
  }).sort((a, b) => String(a.name || '').localeCompare(String(b.name || ''), 'zh-Hant'));
}

function filteredInvitations() {
  const status = $('#speakerInviteStatusFilter')?.value || speakerContext.status || 'all';
  const search = ($('#speakerSearch')?.value || speakerContext.search || '').trim().toLowerCase();
  speakerContext.status = status;
  return state.invitations.filter(invite => {
    if (status !== 'all' && invite.status !== status) return false;
    if (!search) return true;
    const course = getCourse(invite.courseId);
    const speaker = getSpeaker(invite.speakerId);
    const sponsor = getSponsorVendor(invite.sponsorVendorId);
    return [course?.title, course?.date, speaker?.name, speaker?.type, speaker?.specialty, sponsor?.name, sponsor?.type, sponsor?.products, invite.status, invite.sponsorSupportType, invite.sponsorAmount, invite.sponsorNote, invite.followUpStatus, invite.note]
      .join(' ').toLowerCase().includes(search);
  }).sort((a, b) => {
    const ac = getCourse(a.courseId), bc = getCourse(b.courseId);
    return `${ac?.date || ''} ${ac?.title || ''}`.localeCompare(`${bc?.date || ''} ${bc?.title || ''}`);
  });
}

function renderSpeakers() {
  const root = $('#view-speakers');
  if (!root) return;
  const typeSelect = $('#speakerTypeFilter');
  if (typeSelect) {
    const previous = typeSelect.value || speakerContext.type || 'all';
    typeSelect.innerHTML = '<option value="all">全部類型</option>' + speakerTypeOptions().map(type => `<option value="${escapeHtml(type)}">${escapeHtml(type)}</option>`).join('');
    typeSelect.value = [...typeSelect.options].some(o => o.value === previous) ? previous : 'all';
  }
  const statusSelect = $('#speakerInviteStatusFilter');
  if (statusSelect) statusSelect.value = speakerContext.status || 'all';
  renderSpeakerSelectors();
  const stats = speakerInvitationStats();
  const summary = $('#speakerSummary');
  if (summary) {
    summary.innerHTML = `<div class="record-stat"><span>講師/顧問</span><strong>${stats.totalSpeakers}</strong></div>
      <div class="record-stat"><span>主辦廠商</span><strong>${stats.totalSponsorVendors}</strong></div>
      <div class="record-stat"><span>邀約紀錄</span><strong>${stats.totalInvites}</strong></div>
      <div class="record-stat"><span>已確認/完成</span><strong>${stats.confirmed}</strong></div>
      <div class="record-stat"><span>待處理</span><strong>${stats.pending}</strong></div>
      <div class="record-stat"><span>講師費估計</span><strong>${formatMoney(stats.feeTotal)}</strong></div>`;
  }
  const speakerCards = $('#speakerCards');
  const list = filteredSpeakers();
  if (speakerCards) {
    speakerCards.innerHTML = list.length ? list.map(speaker => {
      const invites = state.invitations.filter(invite => invite.speakerId === speaker.id);
      const confirmed = invites.filter(invite => invite.status === '已確認' || invite.status === '已完成').length;
      return `<article class="item-card speaker-card">
        <div class="card-top">
          <div><p class="eyebrow">${escapeHtml(speaker.type || '講師/顧問')}｜${escapeHtml(speaker.area || '未設定地區')}</p><div class="card-title">${escapeHtml(speaker.name)}</div></div>
          <span class="badge ${confirmed ? 'green' : 'blue'}">邀約 ${invites.length}</span>
        </div>
        <div class="card-meta">🏢 ${escapeHtml(speaker.organization || '未設定單位')}<br>🎯 ${escapeHtml(speaker.specialty || '尚未填寫專長')}<br>💰 預設講師費：${escapeHtml(speaker.defaultFee || '未設定')}</div>
        <div class="record-sections">
          <div class="record-block"><strong>內部聯絡</strong><p>電話：${escapeHtml(speaker.phone || '未填')}｜LINE：${escapeHtml(speaker.lineId || '未填')}｜Email：${escapeHtml(speaker.email || '未填')}</p></div>
          <div class="record-block"><strong>備註</strong><p>${escapeHtml(speaker.note || '尚未填寫').replaceAll('\n', '<br>')}</p></div>
        </div>
        <div class="card-actions">
          <button class="mini-btn" data-edit="speaker" data-id="${speaker.id}">編輯講師</button>
          <button class="mini-btn" data-load-invite-speaker="${speaker.id}">建立邀約</button>
          <button class="mini-btn" data-delete="speaker" data-id="${speaker.id}">刪除</button>
        </div>
      </article>`;
    }).join('') : '<div class="empty-box">尚未建立講師 / 顧問資料，或沒有符合篩選的資料。</div>';
  }
  const sponsorCards = $('#sponsorVendorCards');
  const vendors = filteredSponsorVendors();
  if (sponsorCards) {
    sponsorCards.innerHTML = vendors.length ? vendors.map(vendor => {
      const invites = state.invitations.filter(invite => invite.sponsorVendorId === vendor.id);
      const sponsorTotal = invites.reduce((sum, invite) => sum + Number(invite.sponsorAmount || 0), 0);
      return `<article class="item-card sponsor-card">
        <div class="card-top">
          <div><p class="eyebrow">${escapeHtml(vendor.type || '廠商/主辦單位')}｜${escapeHtml(vendor.area || '未設定地區')}</p><div class="card-title">${escapeHtml(vendor.name)}</div></div>
          <span class="badge ${invites.length ? 'green' : 'blue'}">主辦 ${invites.length}</span>
        </div>
        <div class="card-meta">👤 窗口：${escapeHtml(vendor.contactPerson || '未設定')}<br>🎯 產品/服務：${escapeHtml(vendor.products || '尚未填寫')}<br>🤝 支援：${escapeHtml(vendor.supportType || '未設定')}｜💰 預設 ${escapeHtml(vendor.defaultSupportAmount || '未設定')}｜累計 ${formatMoney(sponsorTotal)}</div>
        <div class="record-sections">
          <div class="record-block"><strong>內部聯絡</strong><p>電話：${escapeHtml(vendor.phone || '未填')}｜LINE：${escapeHtml(vendor.lineId || '未填')}｜Email：${escapeHtml(vendor.email || '未填')}</p></div>
          <div class="record-block"><strong>備註</strong><p>${escapeHtml(vendor.note || '尚未填寫').replaceAll('\n', '<br>')}</p></div>
        </div>
        <div class="card-actions">
          <button class="mini-btn" data-edit="sponsorVendor" data-id="${vendor.id}">編輯廠商</button>
          <button class="mini-btn" data-load-invite-sponsor="${vendor.id}">建立邀約</button>
          <button class="mini-btn" data-delete="sponsorVendor" data-id="${vendor.id}">刪除</button>
        </div>
      </article>`;
    }).join('') : '<div class="empty-box">尚未建立主辦廠商資料，或沒有符合篩選的資料。</div>';
  }

  const inviteCards = $('#speakerInviteCards');
  const invites = filteredInvitations();
  if (inviteCards) {
    inviteCards.innerHTML = invites.length ? invites.map(invite => {
      const course = getCourse(invite.courseId);
      const speaker = getSpeaker(invite.speakerId);
      const sponsor = getSponsorVendor(invite.sponsorVendorId);
      return `<article class="item-card invite-card">
        <div class="card-top"><div><p class="eyebrow">${escapeHtml(formatDate(course?.date || ''))}｜${escapeHtml(course?.category || '未分類')}</p><div class="card-title">${escapeHtml(course?.title || '課程已刪除')}</div></div><span class="badge ${getInviteBadgeClass(invite.status)}">${escapeHtml(getInviteStatusLabel(invite.status))}</span></div>
        <div class="card-meta">👨‍🏫 ${escapeHtml(speaker?.name || '講師已刪除')}｜${escapeHtml(speaker?.type || '')}<br>🏢 主辦：${escapeHtml(sponsor?.name || '未設定主辦廠商')}｜${escapeHtml(invite.sponsorSupportType || sponsor?.supportType || '支援方式未設定')}｜💰 支援 ${escapeHtml(invite.sponsorAmount || sponsor?.defaultSupportAmount || '未設定')}<br>📅 洽詢：${escapeHtml(invite.contactDate || '未填')}｜確認：${escapeHtml(invite.confirmDate || '未確認')}｜講師費 ${escapeHtml(invite.speakerFee || speaker?.defaultFee || '未設定')}</div>
        <div class="record-sections">
          <div class="record-block"><strong>主辦廠商備註</strong><p>${escapeHtml(invite.sponsorNote || sponsor?.note || '尚未填寫').replaceAll('\n','<br>')}</p></div>
          <div class="record-block"><strong>課後追蹤</strong><p>${escapeHtml(invite.followUpStatus || '尚未設定').replaceAll('\n','<br>')}</p></div>
          <div class="record-block"><strong>邀約備註</strong><p>${escapeHtml(invite.note || '尚未填寫').replaceAll('\n','<br>')}</p></div>
        </div>
        <div class="card-actions">
          <button class="mini-btn" data-load-invite="${invite.id}">載入編輯</button>
          <button class="mini-btn" data-copy-invite="${invite.id}">複製邀約紀錄</button>
          <button class="mini-btn" data-delete-invite="${invite.id}">刪除邀約</button>
        </div>
      </article>`;
    }).join('') : '<div class="empty-box">尚未建立邀約紀錄，或沒有符合篩選的資料。</div>';
  }
}

function readInviteForm() {
  return {
    id: $('#inviteRecordId')?.value || '',
    courseId: $('#inviteCourseSelect')?.value || '',
    speakerId: $('#inviteSpeakerSelect')?.value || '',
    sponsorVendorId: $('#inviteSponsorSelect')?.value || '',
    status: $('#inviteStatus')?.value || '尚未邀約',
    contactDate: $('#inviteContactDate')?.value || '',
    confirmDate: $('#inviteConfirmDate')?.value || '',
    speakerFee: $('#inviteSpeakerFee')?.value || '',
    sponsorSupportType: $('#inviteSponsorSupportType')?.value || '',
    sponsorAmount: $('#inviteSponsorAmount')?.value || '',
    sponsorNote: $('#inviteSponsorNote')?.value || '',
    followUpStatus: $('#inviteFollowUpStatus')?.value || '',
    note: $('#inviteNote')?.value || ''
  };
}

function fillInviteForm(invite = {}) {
  renderSpeakerSelectors();
  if ($('#inviteRecordId')) $('#inviteRecordId').value = invite.id || '';
  if ($('#inviteCourseSelect')) $('#inviteCourseSelect').value = invite.courseId || nextCourse()?.id || state.courses[0]?.id || '';
  if ($('#inviteSpeakerSelect')) $('#inviteSpeakerSelect').value = invite.speakerId || state.speakers[0]?.id || '';
  if ($('#inviteSponsorSelect')) $('#inviteSponsorSelect').value = invite.sponsorVendorId || '';
  if ($('#inviteStatus')) $('#inviteStatus').value = invite.status || '尚未邀約';
  if ($('#inviteContactDate')) $('#inviteContactDate').value = invite.contactDate || '';
  if ($('#inviteConfirmDate')) $('#inviteConfirmDate').value = invite.confirmDate || '';
  if ($('#inviteSpeakerFee')) $('#inviteSpeakerFee').value = invite.speakerFee || getSpeaker($('#inviteSpeakerSelect')?.value || '')?.defaultFee || '';
  const sponsor = getSponsorVendor($('#inviteSponsorSelect')?.value || '');
  if ($('#inviteSponsorSupportType')) $('#inviteSponsorSupportType').value = invite.sponsorSupportType || sponsor?.supportType || '';
  if ($('#inviteSponsorAmount')) $('#inviteSponsorAmount').value = invite.sponsorAmount || sponsor?.defaultSupportAmount || '';
  if ($('#inviteSponsorNote')) $('#inviteSponsorNote').value = invite.sponsorNote || '';
  if ($('#inviteFollowUpStatus')) $('#inviteFollowUpStatus').value = invite.followUpStatus || '';
  if ($('#inviteNote')) $('#inviteNote').value = invite.note || '';
}

function saveInviteRecord() {
  if (appMode !== 'admin') return;
  const data = readInviteForm();
  if (!data.courseId || !data.speakerId) { alert('請先選擇課程與講師。'); return; }
  const duplicate = state.invitations.find(item => item.courseId === data.courseId && item.speakerId === data.speakerId && (!data.id || item.id !== data.id));
  const targetId = data.id || duplicate?.id || '';
  if (targetId) {
    const index = state.invitations.findIndex(item => item.id === targetId);
    if (index >= 0) state.invitations[index] = { ...state.invitations[index], ...data, id: targetId };
  } else {
    state.invitations.push({ ...data, id: uid('iv') });
  }
  const course = getCourse(data.courseId);
  const speaker = getSpeaker(data.speakerId);
  if (course && speaker && !course.speaker) course.speaker = speaker.name;
  saveState();
  fillInviteForm({});
  render();
  showToast('講師邀約紀錄已儲存');
}

function loadInviteRecord(id) {
  const invite = state.invitations.find(item => item.id === id);
  if (!invite) return;
  fillInviteForm(invite);
  setView('speakers');
}

function deleteInviteRecord(id) {
  const ok = confirm('確定要刪除這筆講師邀約紀錄嗎？');
  if (!ok) return;
  state.invitations = state.invitations.filter(item => item.id !== id);
  saveState();
  renderSpeakers();
  showToast('邀約紀錄已刪除');
}

function buildInviteText(id) {
  const invite = state.invitations.find(item => item.id === id);
  if (!invite) return '';
  const course = getCourse(invite.courseId);
  const speaker = getSpeaker(invite.speakerId);
  const sponsor = getSponsorVendor(invite.sponsorVendorId);
  return [`【山線養豬讀書會｜講師邀約紀錄】`, `課程：${course?.title || '未設定課程'}`, `日期：${formatDate(course?.date || '')} ${course?.startTime || ''}-${course?.endTime || ''}`, `講師：${speaker?.name || '未設定講師'}（${speaker?.type || ''}）`, `主辦廠商：${sponsor?.name || '未設定'}（${sponsor?.type || ''}）`, `廠商支援：${invite.sponsorSupportType || sponsor?.supportType || '未設定'}｜金額/預算：${invite.sponsorAmount || sponsor?.defaultSupportAmount || '未設定'}`, `邀約狀態：${invite.status || '尚未邀約'}`, `洽詢日期：${invite.contactDate || '未填'}`, `確認日期：${invite.confirmDate || '未確認'}`, `講師費：${invite.speakerFee || speaker?.defaultFee || '未設定'}`, `主辦備註：${invite.sponsorNote || sponsor?.note || '無'}`, `課後追蹤：${invite.followUpStatus || '尚未設定'}`, `備註：${invite.note || '無'}`].join('\n');
}

function buildSpeakerDigest() {
  const stats = speakerInvitationStats();
  const lines = [];
  lines.push('【山線養豬讀書會｜講師與顧問邀約總表】');
  lines.push(`講師/顧問：${stats.totalSpeakers} 位｜主辦廠商：${stats.totalSponsorVendors} 家｜邀約紀錄：${stats.totalInvites} 筆｜已確認/完成：${stats.confirmed} 筆｜待處理：${stats.pending} 筆｜廠商支援估計：${formatMoney(stats.sponsorTotal)}`);
  lines.push('');
  lines.push('一、邀約紀錄');
  filteredInvitations().forEach((invite, index) => {
    const course = getCourse(invite.courseId);
    const speaker = getSpeaker(invite.speakerId);
    const sponsor = getSponsorVendor(invite.sponsorVendorId);
    lines.push(`${index + 1}. ${formatDate(course?.date || '')}｜${course?.title || '未設定課程'}｜講師：${speaker?.name || '未設定講師'}｜主辦：${sponsor?.name || '未設定'}｜${invite.status || '尚未邀約'}｜廠商支援：${invite.sponsorSupportType || sponsor?.supportType || '未設定'} ${invite.sponsorAmount || sponsor?.defaultSupportAmount || ''}｜講師費：${invite.speakerFee || speaker?.defaultFee || '未設定'}`);
  });
  lines.push('');
  lines.push('二、講師名單');
  filteredSpeakers().forEach((speaker, index) => lines.push(`${index + 1}. ${speaker.name}｜${speaker.type || '講師/顧問'}｜${speaker.specialty || '未填專長'}｜預設講師費：${speaker.defaultFee || '未設定'}`));
  lines.push('');
  lines.push('三、主辦廠商名單');
  filteredSponsorVendors().forEach((vendor, index) => lines.push(`${index + 1}. ${vendor.name}｜${vendor.type || '廠商/主辦單位'}｜窗口：${vendor.contactPerson || '未填'}｜支援：${vendor.supportType || '未設定'}｜預設金額：${vendor.defaultSupportAmount || '未設定'}｜產品/服務：${vendor.products || '未填'}`));
  return lines.join('\n');
}

function exportSpeakerCsv() {
  const rows = [['講師類型','名稱','單位','地區','專長','電話','LINE','Email','預設講師費','備註']];
  filteredSpeakers().forEach(speaker => rows.push([speaker.type, speaker.name, speaker.organization, speaker.area, speaker.specialty, speaker.phone, speaker.lineId, speaker.email, speaker.defaultFee, speaker.note]));
  rows.push([]);
  rows.push(['廠商類型','主辦廠商','聯絡窗口','地區','產品/服務/可支援主題','電話','LINE','Email','預設支援方式','預設支援金額','備註']);
  filteredSponsorVendors().forEach(vendor => rows.push([vendor.type, vendor.name, vendor.contactPerson, vendor.area, vendor.products, vendor.phone, vendor.lineId, vendor.email, vendor.supportType, vendor.defaultSupportAmount, vendor.note]));
  rows.push([]);
  rows.push(['課程日期','課程主題','講師','主辦廠商','廠商支援方式','廠商支援金額','邀約狀態','洽詢日期','確認日期','講師費','主辦備註','課後追蹤','邀約備註']);
  filteredInvitations().forEach(invite => {
    const course = getCourse(invite.courseId);
    const speaker = getSpeaker(invite.speakerId);
    const sponsor = getSponsorVendor(invite.sponsorVendorId);
    rows.push([course?.date || '', course?.title || '', speaker?.name || '', sponsor?.name || '', invite.sponsorSupportType || sponsor?.supportType || '', invite.sponsorAmount || sponsor?.defaultSupportAmount || '', invite.status, invite.contactDate, invite.confirmDate, invite.speakerFee, invite.sponsorNote, invite.followUpStatus, invite.note]);
  });
  downloadText('shanxian_speakers_sponsors_and_invites.csv', toCsv(rows));
}


function announcementTypeOptions() {
  return ['正式公告','課程異動','課前提醒','當天提醒','出席催覆','繳費提醒','停車提醒','課後公告','臨時通知','其他'];
}

function announcementStatusLabel(status) {
  return ({ draft: '草稿', published: '已發布', archived: '封存' }[status] || '草稿');
}

function announcementStatusBadge(status) {
  return ({ draft: 'blue', published: 'green', archived: 'red' }[status] || 'blue');
}

function announcementPriorityBadge(priority) {
  return ({ '一般': 'blue', '重要': 'green', '緊急': 'red' }[priority] || 'blue');
}

function isAnnouncementExpired(item) {
  if (!item.expireDate) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const end = new Date(`${item.expireDate}T23:59:59`);
  return end < today;
}

function sortedAnnouncements() {
  return [...state.announcements].sort((a, b) => {
    const pin = (b.pinned === '是') - (a.pinned === '是');
    if (pin) return pin;
    return `${b.announceDate || b.createdAt || ''}`.localeCompare(`${a.announceDate || a.createdAt || ''}`);
  });
}

function activeAnnouncements() {
  return sortedAnnouncements().filter(item => item.status === 'published' && item.pinned === '是' && !isAnnouncementExpired(item));
}

function publishedCourseAnnouncements(courseId) {
  if (!courseId) return [];
  const priorityRank = { '緊急': 0, '重要': 1, '一般': 2 };
  const updateTypes = ['課程異動', '臨時通知', '當天提醒', '停車提醒', '課前提醒', '出席催覆', '繳費提醒'];
  return sortedAnnouncements()
    .filter(item => item.courseId === courseId && item.status === 'published' && !isAnnouncementExpired(item))
    .sort((a, b) => {
      const typeA = updateTypes.includes(a.type) ? 0 : 1;
      const typeB = updateTypes.includes(b.type) ? 0 : 1;
      if (typeA !== typeB) return typeA - typeB;
      const rankA = priorityRank[a.priority] ?? 2;
      const rankB = priorityRank[b.priority] ?? 2;
      if (rankA !== rankB) return rankA - rankB;
      return `${b.announceDate || b.createdAt || ''}`.localeCompare(`${a.announceDate || a.createdAt || ''}`);
    });
}

function courseAnnouncementTone(item) {
  if (!item) return 'info';
  if (item.priority === '緊急' || ['課程異動', '臨時通知'].includes(item.type)) return 'danger';
  if (item.priority === '重要' || ['當天提醒', '停車提醒', '課前提醒'].includes(item.type)) return 'warn';
  return 'info';
}

function courseAnnouncementStampHtml(courseId) {
  const items = publishedCourseAnnouncements(courseId);
  if (!items.length) return '';
  const main = items[0];
  const tone = courseAnnouncementTone(main);
  const label = main.type === '課程異動' ? '課程異動' : main.type === '臨時通知' ? '臨時通知' : '有公告';
  const title = [main.title, items.length > 1 ? `另有 ${items.length - 1} 則` : ''].filter(Boolean).join('｜');
  return `<div class="course-announcement-stamp ${tone}" title="${escapeHtml(title)}">
    <span>${escapeHtml(label)}</span>
    <small>${escapeHtml(main.priority || '一般')}</small>
  </div>`;
}

function courseAnnouncementDigestHtml(courseId, compact = false) {
  const items = publishedCourseAnnouncements(courseId);
  if (!items.length) return '';
  const visible = compact ? items.slice(0, 2) : items.slice(0, 3);
  const rows = visible.map(item => `<div class="course-announcement-row ${courseAnnouncementTone(item)}">
      <strong>${escapeHtml(item.type || '公告')}｜${escapeHtml(item.title || '未命名公告')}</strong>
      ${item.lineText ? `<span>${escapeHtml(item.lineText).replaceAll('\n', '<br>')}</span>` : ''}
      <small>公告日期：${escapeHtml(item.announceDate || item.createdAt || '未填日期')}${item.expireDate ? `｜到期：${escapeHtml(item.expireDate)}` : ''}</small>
    </div>`).join('');
  const more = items.length > visible.length ? `<div class="course-announcement-more">另有 ${items.length - visible.length} 則公告，請到公告中心查看。</div>` : '';
  return `<div class="course-announcement-alert" data-course-announcements="${escapeHtml(courseId)}">
    <div class="course-announcement-alert-title">📌 本課程有公告異動 / 提醒</div>
    ${rows}${more}
  </div>`;
}

function getAnnouncementStats() {
  const all = state.announcements || [];
  return {
    total: all.length,
    pinned: all.filter(item => item.pinned === '是' && item.status === 'published' && !isAnnouncementExpired(item)).length,
    published: all.filter(item => item.status === 'published').length,
    draft: all.filter(item => item.status === 'draft').length,
    archived: all.filter(item => item.status === 'archived').length,
    expired: all.filter(isAnnouncementExpired).length
  };
}

function announcementCourseTitle(item) {
  const course = getCourse(item.courseId);
  return course ? `${formatDate(course.date)}｜${course.title}` : '一般公告 / 不連結課程';
}

function filteredAnnouncements() {
  const search = ($('#announcementSearch')?.value || announcementContext.search || '').trim().toLowerCase();
  const type = $('#announcementTypeFilter')?.value || announcementContext.type || 'all';
  const status = $('#announcementStatusFilter')?.value || announcementContext.status || 'all';
  const courseId = $('#announcementCourseFilter')?.value || announcementContext.courseId || 'all';
  announcementContext = { search, type, status, courseId };
  return sortedAnnouncements().filter(item => {
    if (appMode !== 'admin' && item.status !== 'published') return false;
    if (appMode !== 'admin' && item.status === 'archived') return false;
    if (type !== 'all' && item.type !== type) return false;
    if (status !== 'all') {
      if (status === 'expired') { if (!isAnnouncementExpired(item)) return false; }
      else if (item.status !== status) return false;
    }
    if (courseId !== 'all') {
      if (courseId === 'general' && item.courseId) return false;
      if (courseId !== 'general' && item.courseId !== courseId) return false;
    }
    if (!search) return true;
    const course = getCourse(item.courseId);
    return [item.title, item.type, item.priority, item.status, item.channel, item.lineText, item.note, course?.title, course?.speaker, course?.date]
      .join(' ').toLowerCase().includes(search);
  });
}

function renderAnnouncementSelectors() {
  const typeSelect = $('#announcementTypeFilter');
  if (typeSelect) {
    const previous = typeSelect.value || announcementContext.type || 'all';
    typeSelect.innerHTML = '<option value="all">全部類型</option>' + announcementTypeOptions().map(type => `<option value="${escapeHtml(type)}">${escapeHtml(type)}</option>`).join('');
    typeSelect.value = [...typeSelect.options].some(o => o.value === previous) ? previous : 'all';
  }
  const courseSelect = $('#announcementCourseFilter');
  if (courseSelect) {
    const previous = courseSelect.value || announcementContext.courseId || 'all';
    courseSelect.innerHTML = '<option value="all">全部課程</option><option value="general">一般公告</option>' + sortedCourses().map(course => `<option value="${course.id}">${escapeHtml(formatDate(course.date))}｜${escapeHtml(course.title)}</option>`).join('');
    courseSelect.value = [...courseSelect.options].some(o => o.value === previous) ? previous : 'all';
  }
  const statusSelect = $('#announcementStatusFilter');
  if (statusSelect) statusSelect.value = announcementContext.status || 'all';
}

function renderAnnouncements() {
  const root = $('#view-announcements');
  if (!root) return;
  renderAnnouncementSelectors();
  const stats = getAnnouncementStats();
  const summary = $('#announcementSummary');
  if (summary) {
    summary.innerHTML = `<div class="record-stat"><span>全部公告</span><strong>${stats.total}</strong></div>
      <div class="record-stat"><span>已發布</span><strong>${stats.published}</strong></div>
      <div class="record-stat"><span>草稿</span><strong>${stats.draft}</strong></div>
      <div class="record-stat"><span>置頂</span><strong>${stats.pinned}</strong></div>
      <div class="record-stat"><span>已到期</span><strong>${stats.expired}</strong></div>
      <div class="record-stat"><span>封存</span><strong>${stats.archived}</strong></div>`;
  }
  const list = filteredAnnouncements();
  const cards = $('#announcementCards');
  if (!cards) return;
  cards.innerHTML = list.length ? list.map(item => {
    const course = getCourse(item.courseId);
    const expired = isAnnouncementExpired(item);
    const lineText = buildAnnouncementLineText(item.id);
    const adminActions = appMode === 'admin' ? `<button class="mini-btn" data-edit="announcement" data-id="${item.id}">編輯</button>
      <button class="mini-btn" data-duplicate-announcement="${item.id}">複製成新公告</button>
      <button class="mini-btn" data-toggle-announcement-status="${item.id}|published">發布</button>
      <button class="mini-btn" data-toggle-announcement-status="${item.id}|archived">封存</button>
      <button class="mini-btn" data-delete="announcement" data-id="${item.id}">刪除</button>` : '';
    return `<article class="item-card announcement-card ${item.pinned === '是' ? 'pinned-announcement' : ''}">
      <div class="card-top">
        <div><p class="eyebrow">${item.pinned === '是' ? '📌 置頂｜' : ''}${escapeHtml(item.type || '公告')}｜${escapeHtml(item.channel || 'LINE 群組')}</p><div class="card-title">${escapeHtml(item.title)}</div></div>
        <span class="badge ${announcementStatusBadge(item.status)}">${escapeHtml(announcementStatusLabel(item.status))}</span>
      </div>
      <div class="badge-row">
        <span class="badge ${announcementPriorityBadge(item.priority)}">${escapeHtml(item.priority || '一般')}</span>
        ${item.pinned === '是' ? '<span class="badge green">置頂</span>' : ''}
        ${expired ? '<span class="badge red">已到期</span>' : ''}
        <span class="badge">${escapeHtml(item.announceDate || '未填日期')}</span>
        ${item.expireDate ? `<span class="badge">到期 ${escapeHtml(item.expireDate)}</span>` : ''}
        ${course && item.type === '課程異動' ? `<span class="badge ${courseNeedsDateReconfirm(course) ? 'red' : 'blue'}">${courseNeedsDateReconfirm(course) ? '日期異動需重回覆' : '時間/內容異動免重回覆'}</span>` : ''}
      </div>
      <div class="card-meta">📌 連結：${escapeHtml(announcementCourseTitle(item))}${course ? `<br>📅 課程時間：${escapeHtml(formatDate(course.date))} ${escapeHtml(course.startTime || '')}-${escapeHtml(course.endTime || '')}` : ''}</div>
      <div class="notice announcement-line-text">${escapeHtml(item.lineText || '尚未填寫公告文字。').replaceAll('\n', '<br>')}</div>
      ${item.note ? `<div class="record-block"><strong>內部備註 / 歷史紀錄</strong><p>${escapeHtml(item.note).replaceAll('\n', '<br>')}</p></div>` : ''}
      <div class="card-actions">
        <button class="mini-btn" data-copy-announcement="${item.id}">複製 LINE 公告</button>
        ${adminActions}
      </div>
    </article>`;
  }).join('') : '<div class="empty-box">尚未建立公告，或目前沒有符合篩選條件的公告。</div>';
}

function buildAnnouncementLineText(id) {
  const item = state.announcements.find(x => x.id === id);
  if (!item) return '';
  const course = getCourse(item.courseId);
  const location = course ? getLocation(course.locationId) : null;
  const lines = [];
  lines.push(`【山線養豬讀書會｜${item.type || '公告'}】`);
  lines.push(item.title || '未命名公告');
  if (course) {
    lines.push(`課程：${course.title}`);
    lines.push(`時間：${formatDate(course.date)} ${course.startTime || ''}-${course.endTime || ''}`.trim());
    if (location?.name) lines.push(`地點：${location.name}`);
    if (location?.googleMapUrl) lines.push(`地圖：${location.googleMapUrl}`);
    if (item.type === '課程異動') {
      lines.push(courseNeedsDateReconfirm(course) ? '出席回覆：上課日期已異動，請會員重新確認出席。' : '出席回覆：本次若僅調整上課時間或提醒內容，不需要重新回覆。');
    }
    const parking = course.parkingNote || location?.parkingNote || '';
    if (parking) lines.push(`停車：${parking}`);
    if (course.fee) lines.push(`餐費：${course.fee}`);
  }
  if (item.lineText) {
    lines.push('');
    lines.push(item.lineText);
  }
  if (item.note && item.channel === '幹部群') {
    lines.push('');
    lines.push(`幹部備註：${item.note}`);
  }
  return lines.join('\n');
}

function duplicateAnnouncement(id) {
  if (appMode !== 'admin') return;
  const item = state.announcements.find(x => x.id === id);
  if (!item) return;
  state.announcements.unshift({ ...clone(item), id: uid('an'), title: `${item.title}（複製）`, status: 'draft', pinned: '否', createdAt: new Date().toISOString().slice(0, 16).replace('T', ' ') });
  saveState();
  renderAnnouncements();
  showToast('已複製成新公告草稿');
}

function updateAnnouncementStatus(id, status) {
  if (appMode !== 'admin') return;
  const item = state.announcements.find(x => x.id === id);
  if (!item) return;
  item.status = status || item.status;
  if (status === 'published' && !item.announceDate) item.announceDate = new Date().toISOString().slice(0, 10);
  saveState();
  render();
  showToast(`公告已更新為：${announcementStatusLabel(item.status)}`);
}

function buildPinnedAnnouncementDigest() {
  const items = activeAnnouncements();
  if (!items.length) return '目前沒有置頂且已發布的公告。';
  return ['【山線養豬讀書會｜置頂公告】', ...items.map((item, index) => `${index + 1}. ${buildAnnouncementLineText(item.id)}`)].join('\n\n---\n\n');
}

function exportAnnouncementsCsv() {
  const rows = [['公告日期','公告標題','類型','重要程度','置頂','狀態','連結課程','到期日期','發布管道','LINE公告文字','內部備註','建立時間']];
  filteredAnnouncements().forEach(item => rows.push([item.announceDate, item.title, item.type, item.priority, item.pinned, announcementStatusLabel(item.status), announcementCourseTitle(item), item.expireDate, item.channel, item.lineText, item.note, item.createdAt]));
  downloadText('shanxian_announcements.csv', toCsv(rows));
}

function renderKnowledge() {
  const results = $('#knowledgeResults');
  if (!results) return;
  const search = ($('#knowledgeSearch')?.value || '').trim().toLowerCase();
  const category = $('#knowledgeCategoryFilter')?.value || 'all';
  const typeFilter = $('#knowledgeTypeFilter')?.value || 'all';
  const totalCourses = state.courses.length;
  const coursesWithKnowledge = state.courses.filter(course => hasCourseRecord(course) || String(course.content || '').trim()).length;
  const totalBlocks = state.courses.reduce((sum, course) => sum + courseKnowledgeBlocks(course, 'all', '').length, 0);
  const list = sortedCourses().filter(course => knowledgeCoursePasses(course, search, category, typeFilter));

  const summary = $('#knowledgeSummary');
  if (summary) {
    summary.innerHTML = `<div class="record-stat"><span>課程總數</span><strong>${totalCourses}</strong></div>
      <div class="record-stat"><span>可搜尋課程</span><strong>${coursesWithKnowledge}</strong></div>
      <div class="record-stat"><span>知識段落</span><strong>${totalBlocks}</strong></div>
      <div class="record-stat"><span>目前結果</span><strong>${list.length}</strong></div>`;
  }

  const counts = knowledgeCategoryCounts();
  const cloud = $('#knowledgeCategoryCloud');
  if (cloud) {
    const categories = ['疾病管理', '營養飼料', '環控設備', '批次管理', '產房管理', '保育肉豬', '經營管理', '其他'];
    cloud.innerHTML = categories.map(cat => {
      const active = category === cat ? 'active' : '';
      return `<button class="knowledge-chip ${active}" data-knowledge-category="${escapeHtml(cat)}">${escapeHtml(cat)} <span>${counts[cat] || 0}</span></button>`;
    }).join('');
  }

  results.innerHTML = list.length ? list.map(course => {
    const location = getLocation(course.locationId);
    const blocks = courseKnowledgeBlocks(course, typeFilter, search);
    const adminActions = appMode === 'admin' ? `<button class="mini-btn" data-edit="course" data-id="${course.id}">補充紀錄</button>` : '';
    return `<article class="knowledge-card">
      <div class="card-top">
        <div>
          <p class="eyebrow">${formatDate(course.date)}｜${escapeHtml(course.category || '其他')}</p>
          <div class="card-title">${highlightKeyword(course.title, search)}</div>
        </div>
        <span class="badge ${hasCourseRecord(course) ? 'green' : 'blue'}">${hasCourseRecord(course) ? '已整理' : '有內容'}</span>
      </div>
      <div class="knowledge-meta">👨‍🏫 ${escapeHtml(course.speaker || '未設定講師')}｜📍 ${escapeHtml(location?.name || '未設定地點')}｜👥 ${escapeHtml(participantLabel(course))}</div>
      <div class="knowledge-tags">
        <span>${escapeHtml(course.category || '其他')}</span>
        <span>${escapeHtml(getCourseStatusLabel(course.status))}</span>
        ${hasAttachment(course) ? '<span>有附件</span>' : ''}
      </div>
      <div class="knowledge-blocks">
        ${blocks.map(block => `<section class="knowledge-block"><h3>${block.icon} ${escapeHtml(block.label)}</h3><p>${highlightKeyword(block.text, search)}</p></section>`).join('')}
      </div>
      <div class="card-actions">
        ${adminActions}
        <button class="mini-btn" data-record-course="${course.id}">查看課程紀錄</button>
        <button class="mini-btn" data-copy-knowledge-course="${course.id}">複製本課重點</button>
        ${location?.googleMapUrl ? `<a class="mini-btn" href="${escapeHtml(location.googleMapUrl)}" target="_blank" rel="noopener">Google 地圖</a>` : ''}
      </div>
    </article>`;
  }).join('') : '<div class="empty-box">找不到符合條件的知識資料。可先到「課程紀錄」補上課後重點、會員提問或實務應用。</div>';
}

function buildKnowledgeDigest(courseId = '') {
  const search = ($('#knowledgeSearch')?.value || '').trim().toLowerCase();
  const category = $('#knowledgeCategoryFilter')?.value || 'all';
  const typeFilter = $('#knowledgeTypeFilter')?.value || 'all';
  let list = sortedCourses();
  if (courseId) list = list.filter(course => course.id === courseId);
  else list = list.filter(course => knowledgeCoursePasses(course, search, category, typeFilter));
  if (!list.length) return '目前沒有可彙整的課程知識資料。';

  const lines = ['山線養豬讀書會｜課程知識庫重點彙整', `產生時間：${new Date().toLocaleString('zh-TW')}`, ''];
  list.forEach(course => {
    const location = getLocation(course.locationId);
    lines.push(`【${course.category || '其他'}】${course.title}`);
    lines.push(`日期：${formatDate(course.date)}　講師：${course.speaker || '未設定'}　地點：${location?.name || '未設定'}`);
    courseKnowledgeBlocks(course, typeFilter, '').forEach(block => {
      lines.push(`\n${block.label}：`);
      lines.push(String(block.text || '').trim());
    });
    lines.push('\n---\n');
  });
  return lines.join('\n');
}


function reportYears() {
  const years = [...new Set(state.courses.map(course => String(course.year || '').trim()).filter(Boolean))].sort();
  const current = String(new Date().getFullYear());
  return years.length ? years : [current];
}

function reportCourses() {
  const yearSelect = $('#reportYearFilter');
  const categorySelect = $('#reportCategoryFilter');
  const years = reportYears();
  const selectedYear = yearSelect?.value || reportContext.year || years.at(-1) || String(new Date().getFullYear());
  const selectedCategory = categorySelect?.value || reportContext.category || 'all';
  reportContext.year = selectedYear;
  reportContext.category = selectedCategory;
  return sortedCourses().filter(course => {
    const yearOk = String(course.year || '') === String(selectedYear);
    const categoryOk = selectedCategory === 'all' || (course.category || '其他') === selectedCategory;
    return yearOk && categoryOk;
  });
}

function updateReportFilters() {
  const yearSelect = $('#reportYearFilter');
  if (!yearSelect) return;
  const years = reportYears();
  const selected = reportContext.year || years.at(-1) || String(new Date().getFullYear());
  yearSelect.innerHTML = years.map(year => `<option value="${escapeHtml(year)}" ${String(year) === String(selected) ? 'selected' : ''}>${escapeHtml(year)} 年度</option>`).join('');
  reportContext.year = yearSelect.value || selected;
  const categorySelect = $('#reportCategoryFilter');
  if (categorySelect) {
    categorySelect.value = reportContext.category || 'all';
  }
}

function percent(numerator, denominator) {
  if (!denominator) return 0;
  return Math.round((Number(numerator) / Number(denominator)) * 100);
}

function reportSummaryForCourses(courses) {
  const finance = courses.reduce((acc, course) => {
    const f = courseFinanceSummary(course);
    acc.expected += f.expected;
    acc.paid += f.paid;
    acc.unpaid += f.unpaid;
    return acc;
  }, { expected: 0, paid: 0, unpaid: 0 });
  const totalParticipants = courses.reduce((sum, course) => sum + numericParticipantCount(course), 0);
  const completed = courses.filter(course => course.status === 'done').length;
  const planned = courses.filter(course => course.status === 'planned').length;
  const cancelled = courses.filter(course => course.status === 'cancelled').length;
  const recorded = courses.filter(course => hasCourseRecord(course)).length;
  const attachments = courses.filter(course => hasAttachment(course)).length;
  const attendanceTotal = courses.reduce((sum, course) => sum + normalizeAttendance(course.attendance).going.length, 0);
  const possibleAttendance = courses.length * state.members.length;
  return {
    total: courses.length,
    completed,
    planned,
    cancelled,
    recorded,
    attachments,
    totalParticipants,
    avgParticipants: courses.length ? Math.round((totalParticipants / courses.length) * 10) / 10 : 0,
    recordRate: percent(recorded, courses.length),
    attendanceRate: percent(attendanceTotal, possibleAttendance),
    finance
  };
}

function reportCategoryStats(courses) {
  const categories = ['疾病管理', '營養飼料', '環控設備', '批次管理', '產房管理', '保育肉豬', '經營管理', '其他'];
  return categories.map(category => {
    const list = courses.filter(course => (course.category || '其他') === category);
    const participants = list.reduce((sum, course) => sum + numericParticipantCount(course), 0);
    const recorded = list.filter(course => hasCourseRecord(course)).length;
    return { category, count: list.length, participants, recorded, recordRate: percent(recorded, list.length) };
  }).filter(item => item.count || courses.length === 0);
}

function reportMonthlyStats(courses) {
  return Array.from({ length: 12 }, (_, index) => {
    const month = String(index + 1).padStart(2, '0');
    const list = courses.filter(course => String(course.date || '').slice(5, 7) === month);
    const participants = list.reduce((sum, course) => sum + numericParticipantCount(course), 0);
    return { month: `${index + 1}月`, count: list.length, participants };
  });
}

function reportMemberStats(courses) {
  return state.members.map(member => {
    let going = 0, leave = 0, unknown = 0, unpaid = 0;
    courses.forEach(course => {
      const a = normalizeAttendance(course.attendance);
      if (a.going.includes(member.id)) going += 1;
      else if (a.leave.includes(member.id)) leave += 1;
      else unknown += 1;
      const payment = course.payments?.[member.id] || {};
      const amount = parseMoney(payment.amount || course.unitMealFee || course.fee);
      if (a.going.includes(member.id) && payment.status !== 'paid' && payment.status !== 'free' && payment.status !== 'none') unpaid += amount;
    });
    const total = going + leave + unknown;
    return { member, going, leave, unknown, rate: percent(going, total), unpaid };
  }).sort((a, b) => b.rate - a.rate || b.going - a.going || String(a.member.name).localeCompare(String(b.member.name), 'zh-Hant'));
}

function renderBarRows(items, valueKey, labelKey, maxValue, extra = () => '') {
  if (!items.length) return '<div class="empty-box">目前沒有可統計資料。</div>';
  const max = maxValue || Math.max(1, ...items.map(item => Number(item[valueKey]) || 0));
  return items.map(item => {
    const value = Number(item[valueKey]) || 0;
    const width = Math.max(3, Math.round((value / max) * 100));
    return `<div class="report-bar-row">
      <div class="report-bar-label"><strong>${escapeHtml(item[labelKey])}</strong><span>${extra(item)}</span></div>
      <div class="report-bar-track"><div class="report-bar-fill" style="width:${width}%"></div></div>
      <div class="report-bar-value">${escapeHtml(value)}</div>
    </div>`;
  }).join('');
}

function renderReport() {
  if (!$('#reportKpis')) return;
  updateReportFilters();
  const courses = reportCourses();
  const summary = reportSummaryForCourses(courses);
  const titleCategory = reportContext.category && reportContext.category !== 'all' ? `｜${reportContext.category}` : '';
  $('#reportTitle').textContent = `${reportContext.year} 年度讀書會成效總覽${titleCategory}`;
  $('#reportGeneratedAt').textContent = `產生：${new Date().toLocaleString('zh-TW')}`;
  $('#reportKpis').innerHTML = [
    ['年度課程', summary.total],
    ['已完成', summary.completed],
    ['未上課', summary.planned],
    ['參加人次', summary.totalParticipants],
    ['平均人數/場', summary.avgParticipants],
    ['出席率', `${summary.attendanceRate}%`],
    ['紀錄完成率', `${summary.recordRate}%`],
    ['已有附件', summary.attachments],
    ['餐費應收', formatMoney(summary.finance.expected)],
    ['餐費已收', formatMoney(summary.finance.paid)],
    ['餐費未收', formatMoney(summary.finance.unpaid)]
  ].map(([label, value]) => `<div class="report-kpi"><span>${label}</span><strong>${escapeHtml(value)}</strong></div>`).join('');

  const categoryStats = reportCategoryStats(courses);
  const maxCategory = Math.max(1, ...categoryStats.map(item => item.count));
  $('#reportCategoryBars').innerHTML = renderBarRows(categoryStats, 'count', 'category', maxCategory, item => `課程 ${item.count} 堂｜參加 ${item.participants} 人次｜紀錄 ${item.recordRate}%`);

  const monthlyStats = reportMonthlyStats(courses);
  const maxMonthly = Math.max(1, ...monthlyStats.map(item => item.participants || item.count));
  $('#reportMonthlyBars').innerHTML = renderBarRows(monthlyStats, 'participants', 'month', maxMonthly, item => `課程 ${item.count} 堂｜參加 ${item.participants} 人次`);

  const memberRows = reportMemberStats(courses);
  const memberBody = $('#reportMemberTable tbody');
  if (memberBody) {
    memberBody.innerHTML = memberRows.length ? memberRows.map(row => `<tr>
      <td><strong>${escapeHtml(row.member.name)}</strong></td>
      <td>${escapeHtml(row.member.role || '會員')} / ${escapeHtml(row.member.groupName || '未分組')}</td>
      <td>${row.going}</td>
      <td>${row.leave}</td>
      <td>${row.unknown}</td>
      <td><span class="badge ${row.rate >= 80 ? 'green' : row.rate >= 50 ? 'blue' : 'red'}">${row.rate}%</span></td>
      <td>${formatMoney(row.unpaid)}</td>
    </tr>`).join('') : '<tr><td colspan="7">目前沒有會員資料。</td></tr>';
  }

  const courseBody = $('#reportCourseTable tbody');
  if (courseBody) {
    courseBody.innerHTML = courses.length ? courses.map(course => {
      const location = getLocation(course.locationId);
      const finance = courseFinanceSummary(course);
      const prep = coursePrepSummary(course);
      const mediaCount = Array.isArray(course.mediaItems) ? course.mediaItems.length : 0;
      const feedbackStats = courseFeedbackStats(course);
      return `<tr>
        <td>${formatDate(course.date)}</td>
        <td><strong>${escapeHtml(course.title)}</strong><br><span class="table-sub">${escapeHtml(course.speaker || '未設定講師')}</span></td>
        <td>${escapeHtml(course.category || '其他')}</td>
        <td>${escapeHtml(participantLabel(course))}</td>
        <td><span class="badge ${hasCourseRecord(course) ? 'green' : 'blue'}">${hasCourseRecord(course) ? '已有紀錄' : '待補紀錄'}</span>
      <span class="badge ${mediaCount ? 'green' : 'blue'}">附件 ${mediaCount}</span>
      <span class="badge ${feedbackStats.count ? 'green' : 'blue'}">回饋 ${feedbackStats.count}${feedbackStats.avgOverall ? `｜${feedbackStats.avgOverall.toFixed(1)}/5` : ''}</span>
      <span class="badge ${prep.pending ? 'red' : 'green'}">課前 ${prep.done}/${prep.total || 0}</span></td>
        <td>${formatMoney(finance.expected)} / ${formatMoney(finance.unpaid)}</td>
        <td>${escapeHtml(location?.name || '未設定地點')}</td>
      </tr>`;
    }).join('') : '<tr><td colspan="7">目前沒有符合條件的課程。</td></tr>';
  }
}

function buildAnnualReportText() {
  const courses = reportCourses();
  const summary = reportSummaryForCourses(courses);
  const categoryStats = reportCategoryStats(courses).filter(item => item.count);
  const monthlyStats = reportMonthlyStats(courses).filter(item => item.count || item.participants);
  const memberRows = reportMemberStats(courses);
  const titleCategory = reportContext.category && reportContext.category !== 'all' ? `｜${reportContext.category}` : '';
  const lines = [
    `山線養豬讀書會｜${reportContext.year} 年度報表${titleCategory}`,
    `產生時間：${new Date().toLocaleString('zh-TW')}`,
    '',
    '一、年度總覽',
    `課程總數：${summary.total} 堂`,
    `已完成：${summary.completed} 堂｜未上課：${summary.planned} 堂｜取消/延期：${summary.cancelled} 堂`,
    `參加人次：${summary.totalParticipants}｜平均每場：${summary.avgParticipants} 人`,
    `會員出席率：${summary.attendanceRate}%｜課程紀錄完成率：${summary.recordRate}%｜已有附件：${summary.attachments} 堂`,
    `餐費應收：${formatMoney(summary.finance.expected)}｜已收：${formatMoney(summary.finance.paid)}｜未收：${formatMoney(summary.finance.unpaid)}`,
    '',
    '二、主題比例'
  ];
  if (categoryStats.length) categoryStats.forEach(item => lines.push(`${item.category}：${item.count} 堂｜參加 ${item.participants} 人次｜紀錄完成率 ${item.recordRate}%`));
  else lines.push('尚無主題資料。');
  lines.push('', '三、每月課程分布');
  if (monthlyStats.length) monthlyStats.forEach(item => lines.push(`${item.month}：${item.count} 堂｜參加 ${item.participants} 人次`));
  else lines.push('尚無每月課程資料。');
  lines.push('', '四、會員出席率');
  if (memberRows.length) memberRows.forEach(row => lines.push(`${row.member.name}（${row.member.role || '會員'} / ${row.member.groupName || '未分組'}）：出席 ${row.going}｜請假 ${row.leave}｜未回覆 ${row.unknown}｜出席率 ${row.rate}%｜未收 ${formatMoney(row.unpaid)}`));
  else lines.push('尚無會員資料。');
  lines.push('', '五、課程明細');
  if (courses.length) courses.forEach(course => {
    const location = getLocation(course.locationId);
    const finance = courseFinanceSummary(course);
    lines.push(`${formatDate(course.date)}｜${course.title}｜${course.category || '其他'}｜參加 ${participantLabel(course)}｜紀錄：${hasCourseRecord(course) ? '已有紀錄' : '待補'}｜餐費應收 ${formatMoney(finance.expected)} / 未收 ${formatMoney(finance.unpaid)}｜地點：${location?.name || '未設定'}`);
  });
  else lines.push('尚無課程明細。');
  return lines.join('\n');
}

function exportAnnualReportCsv() {
  const courses = reportCourses();
  const rows = [['日期', '年度', '課程', '講師', '主題', '參加人數', '出席', '請假', '未回覆', '紀錄狀態', '應收', '已收', '未收', '地點']];
  courses.forEach(course => {
    const a = normalizeAttendance(course.attendance);
    const f = courseFinanceSummary(course);
    const location = getLocation(course.locationId);
    rows.push([course.date || '', course.year || '', course.title || '', course.speaker || '', course.category || '其他', participantLabel(course), a.going.length, a.leave.length, a.unknown.length, hasCourseRecord(course) ? '已有紀錄' : '待補紀錄', f.expected, f.paid, f.unpaid, location?.name || '未設定']);
  });
  const csv = rows.map(row => row.map(value => `"${String(value ?? '').replaceAll('"', '""')}"`).join(',')).join('\n');
  downloadTextFile(`山線養豬讀書會_${reportContext.year}_年度報表.csv`, '\ufeff' + csv, 'text/csv;charset=utf-8');
  showToast('已匯出年度報表 CSV');
}

function printAnnualReport() {
  window.print();
}

function parseMoney(value) {
  const text = String(value ?? '').replace(/,/g, '').trim();
  const match = text.match(/-?\d+(?:\.\d+)?/);
  if (!match) return 0;
  const n = Number(match[0]);
  return Number.isFinite(n) ? n : 0;
}

function inferUnitFee(value) {
  const amount = parseMoney(value);
  return amount ? String(amount) : '';
}

function formatMoney(value) {
  const n = Math.round(Number(value) || 0);
  return `$${n.toLocaleString('zh-TW')}`;
}

function money(value) {
  return formatMoney(value);
}


function num(value) {
  return parseMoney(value);
}

function kpiCard(label, value, note = '') {
  return `<div class="report-kpi"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong>${note ? `<small>${escapeHtml(note)}</small>` : ''}</div>`;
}

function courseFinanceSummary(course) {
  const attendance = normalizeAttendance(course.attendance);
  const participantCount = numericParticipantCount(course);
  const unitFee = parseMoney(course.unitMealFee || course.fee);
  const manualTotal = parseMoney(course.totalMealCost);
  const otherCost = parseMoney(course.otherCost);
  const baseExpected = manualTotal > 0 ? manualTotal : participantCount * unitFee;
  let expected = baseExpected + otherCost;
  let paid = 0;
  let unpaidMembers = 0;
  let paidMembers = 0;
  const memberIds = new Set(attendance.going.length ? attendance.going : state.members.map(member => member.id));

  state.members.forEach(member => {
    const payment = course.payments?.[member.id] || {};
    const amount = parseMoney(payment.amount || unitFee);
    if (payment.status === 'paid') {
      paid += amount;
      paidMembers += 1;
    } else if (memberIds.has(member.id) && payment.status !== 'free' && payment.status !== 'none' && amount > 0) {
      unpaidMembers += 1;
    }
  });

  if (!expected && unitFee && attendance.going.length) expected = attendance.going.length * unitFee + otherCost;
  const unpaid = Math.max(expected - paid, 0);
  return { participantCount, unitFee, expected, paid, unpaid, paidMembers, unpaidMembers, otherCost, manualTotal };
}

function getAllFinanceSummary() {
  return state.courses.reduce((acc, course) => {
    const summary = courseFinanceSummary(course);
    acc.expected += summary.expected;
    acc.paid += summary.paid;
    acc.unpaid += summary.unpaid;
    acc.paidMembers += summary.paidMembers;
    acc.unpaidMembers += summary.unpaidMembers;
    return acc;
  }, { expected: 0, paid: 0, unpaid: 0, paidMembers: 0, unpaidMembers: 0 });
}


function annualFeeYears() {
  const years = new Set(state.annualFees.map(item => String(item.year || '')).filter(Boolean));
  years.add(String(new Date().getFullYear()));
  return Array.from(years).sort((a, b) => Number(b) - Number(a));
}

function getAnnualFee(year = annualFeeContext.year, create = false) {
  const y = String(year || new Date().getFullYear());
  let fee = state.annualFees.find(item => String(item.year) === y);
  if (!fee && create) {
    fee = {
      id: `af_${y}`,
      year: y,
      title: `${y} 年度會費`,
      defaultAmount: '1000',
      note: '山線養豬讀書會年度會費',
      createdAt: new Date().toISOString(),
      updatedAt: '',
      members: []
    };
    state.annualFees.push(fee);
  }
  return fee || null;
}

function annualFeeMemberRows(fee) {
  if (!fee) return [];
  return Array.isArray(fee.members) ? fee.members : [];
}

function annualFeeRowStatus(row) {
  const due = num(row.amountDue || 0);
  const paid = num(row.amountPaid || 0);
  if (row.status === 'excluded') return { key: 'excluded', label: '不列入', className: 'blue' };
  if (row.status === 'free') return { key: 'free', label: '免收', className: 'green' };
  if (paid >= due && due > 0) return { key: 'paid', label: '已繳清', className: 'green' };
  if (paid > 0) return { key: 'partial', label: '部分繳費', className: 'orange' };
  return { key: 'unpaid', label: '未繳', className: 'red' };
}

function syncAnnualFeeMembers(fee, { addMissingOnly = false } = {}) {
  if (!fee) return;
  if (!Array.isArray(fee.members)) fee.members = [];
  const existingIds = new Set(fee.members.map(row => row.memberId).filter(Boolean));
  state.members.filter(isAnnualFeeEligibleMember).forEach(member => {
    if (existingIds.has(member.id)) return;
    fee.members.push({
      id: uid('afr'),
      memberId: member.id,
      memberSnapshotId: member.id,
      memberStatusAtRecord: member.memberStatus || '正常',
      farmName: member.farmName || member.groupName || '',
      memberName: member.name || '',
      role: member.role || '會員',
      amountDue: String(fee.defaultAmount || 1000),
      amountPaid: '',
      status: 'unpaid',
      paidDate: '',
      method: '',
      note: '',
      payments: []
    });
  });
  if (!addMissingOnly) {
    fee.members.forEach(row => {
      const member = getMember(row.memberId);
      if (member) {
        // 年度會費保留建立當時快照；只補空欄位，不覆蓋過往已存在的畜牧場名稱 / 會員姓名。
        row.memberSnapshotId = row.memberSnapshotId || member.id;
        row.memberStatusAtRecord = row.memberStatusAtRecord || member.memberStatus || '正常';
        row.farmName = row.farmName || member.farmName || member.groupName || '';
        row.memberName = row.memberName || member.name || '';
        row.role = row.role || member.role || '會員';
        if (row.amountDue === '' || row.amountDue === undefined || row.amountDue === null) row.amountDue = String(fee.defaultAmount || 1000);
      }
    });
  }
  fee.updatedAt = new Date().toISOString();
}

function collectAnnualFeeSettings() {
  const year = String($('#annualFeeYearInput')?.value || annualFeeContext.year || new Date().getFullYear());
  annualFeeContext.year = year;
  let fee = getAnnualFee(year, true);
  fee.defaultAmount = String($('#annualFeeDefaultAmount')?.value || fee.defaultAmount || '1000');
  fee.note = $('#annualFeeNote')?.value || fee.note || '';
  fee.title = `${year} 年度會費`;
  fee.updatedAt = new Date().toISOString();
  return fee;
}

function filteredAnnualFeeRows(fee) {
  let rows = annualFeeMemberRows(fee);
  const status = annualFeeContext.status || 'all';
  const search = (annualFeeContext.search || '').trim().toLowerCase();
  if (status !== 'all') rows = rows.filter(row => annualFeeRowStatus(row).key === status);
  if (search) {
    rows = rows.filter(row => [row.farmName, row.memberName, row.role, row.status, row.method, row.note].join(' ').toLowerCase().includes(search));
  }
  return rows;
}

function annualFeeSummary(fee) {
  const rows = annualFeeMemberRows(fee);
  return rows.reduce((acc, row) => {
    const status = annualFeeRowStatus(row).key;
    const due = status === 'excluded' || status === 'free' ? 0 : num(row.amountDue || 0);
    const paidValue = status === 'excluded' || status === 'free' ? 0 : num(row.amountPaid || 0);
    acc.count += 1;
    acc.dueAmount += due;
    acc.paidAmount += paidValue;
    acc.unpaidAmount += Math.max(0, due - paidValue);
    acc.statusCounts[status] = (acc.statusCounts[status] || 0) + 1;
    return acc;
  }, { count: 0, dueAmount: 0, paidAmount: 0, unpaidAmount: 0, statusCounts: {} });
}

function renderAnnualFees() {
  if (appMode !== 'admin') return;
  const years = annualFeeYears();
  if (!annualFeeContext.year || !years.includes(annualFeeContext.year)) annualFeeContext.year = years[0] || String(new Date().getFullYear());
  const selector = $('#annualFeeYearSelect');
  if (selector) {
    selector.innerHTML = years.map(year => `<option value="${escapeHtml(year)}" ${year === annualFeeContext.year ? 'selected' : ''}>${escapeHtml(year)} 年度</option>`).join('');
  }
  const fee = getAnnualFee(annualFeeContext.year, true);
  if ($('#annualFeeYearInput')) $('#annualFeeYearInput').value = fee.year;
  if ($('#annualFeeDefaultAmount')) $('#annualFeeDefaultAmount').value = fee.defaultAmount || '';
  if ($('#annualFeeNote')) $('#annualFeeNote').value = fee.note || '';
  if ($('#annualFeeSearch')) $('#annualFeeSearch').value = annualFeeContext.search || '';
  if ($('#annualFeeStatusFilter')) $('#annualFeeStatusFilter').value = annualFeeContext.status || 'all';

  const summary = annualFeeSummary(fee);
  const summaryEl = $('#annualFeeSummary');
  if (summaryEl) {
    summaryEl.innerHTML = [
      ['本年度名單', `${summary.count} 位`, '依會員 / 牧場名單建立'],
      ['應收總額', formatMoney(summary.dueAmount), '不含免收與不列入'],
      ['已收總額', formatMoney(summary.paidAmount), '依已收金額加總'],
      ['未收總額', formatMoney(summary.unpaidAmount), '應收扣除已收'],
      ['已繳清 / 未繳', `${summary.statusCounts.paid || 0} / ${summary.statusCounts.unpaid || 0}`, '人數狀態統計']
    ].map(([label, value, note]) => `<div class="record-stat"><span>${label}</span><strong>${value}</strong><small>${note}</small></div>`).join('');
  }

  const rows = filteredAnnualFeeRows(fee);
  const tbody = $('#annualFeeTable tbody');
  if (!tbody) return;
  tbody.innerHTML = rows.length ? rows.map((row, index) => {
    const status = annualFeeRowStatus(row);
    return `<tr data-annual-fee-row="${escapeHtml(row.id)}">
      <td>${index + 1}</td>
      <td class="strong-cell">${escapeHtml(row.farmName || '未填寫')}</td>
      <td class="strong-cell">${escapeHtml(row.memberName || '未填寫')}${row.memberStatusAtRecord === '退會' ? '<br><span class="badge red">退會保留紀錄</span>' : ''}</td>
      <td>${escapeHtml(row.role || '會員')}</td>
      <td><input class="table-input" data-annual-fee-field="amountDue" data-id="${escapeHtml(row.id)}" type="number" min="0" value="${escapeHtml(row.amountDue || '')}" /></td>
      <td><input class="table-input" data-annual-fee-field="amountPaid" data-id="${escapeHtml(row.id)}" type="number" min="0" value="${escapeHtml(row.amountPaid || '')}" /></td>
      <td><select class="table-input" data-annual-fee-field="status" data-id="${escapeHtml(row.id)}">
        ${annualFeeStatusOptions(row.status)}
      </select><br><span class="badge ${status.className}">${status.label}</span></td>
      <td><input class="table-input" data-annual-fee-field="paidDate" data-id="${escapeHtml(row.id)}" type="date" value="${escapeHtml(row.paidDate || '')}" /></td>
      <td><select class="table-input" data-annual-fee-field="method" data-id="${escapeHtml(row.id)}">${annualFeeMethodOptions(row.method)}</select></td>
      <td><input class="table-input wide" data-annual-fee-field="note" data-id="${escapeHtml(row.id)}" value="${escapeHtml(row.note || '')}" /></td>
    </tr>`;
  }).join('') : '<tr><td colspan="10">尚未建立年度會費名單，請先按「建立 / 更新本年度會費名單」。</td></tr>';
}

function annualFeeStatusOptions(value = 'unpaid') {
  const options = [['unpaid', '未繳'], ['partial', '部分繳費'], ['paid', '已繳清'], ['free', '免收'], ['excluded', '不列入']];
  return options.map(([key, label]) => `<option value="${key}" ${value === key ? 'selected' : ''}>${label}</option>`).join('');
}

function annualFeeMethodOptions(value = '') {
  const options = ['', '現金', '匯款', 'LINE Pay', '其他', '免收'];
  return options.map(item => `<option value="${escapeHtml(item)}" ${value === item ? 'selected' : ''}>${escapeHtml(item || '未設定')}</option>`).join('');
}

function updateAnnualFeeRow(rowId, field, value) {
  const fee = getAnnualFee(annualFeeContext.year, true);
  const row = fee.members.find(item => item.id === rowId);
  if (!row) return;
  row[field] = value;
  if (field === 'amountPaid') {
    const s = annualFeeRowStatus(row).key;
    if (!['free', 'excluded'].includes(row.status)) row.status = s;
  }
  fee.updatedAt = new Date().toISOString();
  saveState({ title: '年度會費更新' });
  updateGlobalSyncPanel();
}

function createAnnualFeeList(addMissingOnly = false) {
  const fee = collectAnnualFeeSettings();
  syncAnnualFeeMembers(fee, { addMissingOnly });
  saveState({ title: `${fee.year} 年度會費名單更新` });
  renderAnnualFees();
  showToast(addMissingOnly ? '已補上新增會員' : '已建立 / 更新年度會費名單');
}

function saveAnnualFeePage() {
  const fee = collectAnnualFeeSettings();
  syncAnnualFeeMembers(fee, { addMissingOnly: true });
  saveState({ title: `${fee.year} 年度會費儲存` });
  renderAnnualFees();
  showToast('年度會費資料已儲存');
}

function exportAnnualFeeCsv() {
  const fee = getAnnualFee(annualFeeContext.year, true);
  const rows = [['年度', '畜牧場名稱', '會員姓名', '身份', '應收', '已收', '狀態', '收款日期', '方式', '備註']];
  filteredAnnualFeeRows(fee).forEach(row => {
    const status = annualFeeRowStatus(row).label;
    rows.push([fee.year, row.farmName, row.memberName, row.role, row.amountDue, row.amountPaid, status, row.paidDate, row.method, row.note]);
  });
  const csv = rows.map(row => row.map(value => `"${String(value ?? '').replaceAll('"', '""')}"`).join(',')).join('\n');
  downloadTextFile(`山線養豬讀書會_${fee.year}_年度會費.csv`, '\ufeff' + csv, 'text/csv;charset=utf-8');
  showToast('已匯出年度會費 CSV');
}

function printAnnualFeeSheet() {
  const fee = getAnnualFee(annualFeeContext.year, true);
  const rows = filteredAnnualFeeRows(fee);
  const tr = rows.map((row, index) => `<tr><td>${index + 1}</td><td>${escapeHtml(row.farmName || '')}</td><td>${escapeHtml(row.memberName || '')}</td><td>${escapeHtml(row.amountDue || '')}</td><td>${escapeHtml(row.amountPaid || '')}</td><td>${escapeHtml(annualFeeRowStatus(row).label)}</td><td></td></tr>`).join('');
  const html = `<!doctype html><html lang="zh-Hant"><head><meta charset="utf-8"><title>${escapeHtml(fee.year)} 年度會費收款表</title><style>
    body{font-family:"Microsoft JhengHei","Noto Sans TC",Arial,sans-serif;margin:22px;color:#1f1a14}
    h1{margin:0 0 8px;font-size:24px}.meta{color:#6b5a49;margin-bottom:12px}
    table{width:100%;border-collapse:collapse;table-layout:fixed}th,td{border:1px solid #4b3a2a;padding:8px;font-size:15px;height:38px}th{background:#f1e2cc}
    td:nth-child(1),th:nth-child(1){width:50px;text-align:center}td:nth-child(2),th:nth-child(2){width:30%}td:nth-child(3),th:nth-child(3){width:20%}
    @page{size:A4;margin:12mm}@media print{body{margin:0}th{-webkit-print-color-adjust:exact;print-color-adjust:exact}}
  </style></head><body><h1>山線養豬讀書會 ${escapeHtml(fee.year)} 年度會費收款表</h1><div class="meta">固定欄位：畜牧場名稱、會員姓名、應收、已收、狀態、簽收。</div><table><thead><tr><th>#</th><th>畜牧場名稱</th><th>會員姓名</th><th>應收</th><th>已收</th><th>狀態</th><th>簽收</th></tr></thead><tbody>${tr}</tbody></table><script>window.addEventListener('load',()=>setTimeout(()=>window.print(),250));<\/script></body></html>`;
  const printWindow = window.open('', '_blank', 'width=980,height=720');
  if (!printWindow) { alert('瀏覽器阻擋彈出視窗，請允許此網站開啟列印視窗。'); return; }
  printWindow.document.open();
  printWindow.document.write(html);
  printWindow.document.close();
  printWindow.focus();
}

function copyAnnualFeeReminder() {
  const fee = getAnnualFee(annualFeeContext.year, true);
  const unpaid = annualFeeMemberRows(fee).filter(row => annualFeeRowStatus(row).key === 'unpaid');
  if (!unpaid.length) { showToast('目前沒有未繳名單'); return; }
  const names = unpaid.map(row => `- ${row.farmName || '未填牧場'}｜${row.memberName || '未填姓名'}｜應收 ${row.amountDue || fee.defaultAmount} 元`).join('\n');
  const text = `山線養豬讀書會 ${fee.year} 年度會費提醒\\n\\n目前系統紀錄尚未收到以下年度會費：\\n${names}\\n\\n若已繳費，請協助回覆收款方式與日期，方便幹部核對，謝謝。`;
  copyText(text).then(() => showToast('已複製未繳 LINE 文字'));
}

function renderFinance() {
  const summaryBox = $('#financeSummary');
  const tbody = $('#financeTable tbody');
  if (!summaryBox || !tbody) return;
  const search = ($('#financeSearch')?.value || '').trim().toLowerCase();
  const filter = $('#financeStatusFilter')?.value || 'all';
  let list = sortedCoursesRecentFirst();
  if (search) {
    list = list.filter(course => {
      const location = getLocation(course.locationId);
      return [course.title, course.speaker, course.category, course.fee, course.settleNote, location?.name].join(' ').toLowerCase().includes(search);
    });
  }
  if (filter === 'unpaid') list = list.filter(course => courseFinanceSummary(course).unpaid > 0);
  if (filter === 'settled') list = list.filter(course => courseFinanceSummary(course).expected > 0 && courseFinanceSummary(course).unpaid <= 0);
  if (filter === 'noFee') list = list.filter(course => courseFinanceSummary(course).expected <= 0);

  const total = getAllFinanceSummary();
  summaryBox.innerHTML = `<div class="record-stat"><span>全部應收</span><strong>${formatMoney(total.expected)}</strong></div>
    <div class="record-stat"><span>全部已收</span><strong>${formatMoney(total.paid)}</strong></div>
    <div class="record-stat"><span>全部未收</span><strong>${formatMoney(total.unpaid)}</strong></div>
    <div class="record-stat"><span>未收會員筆數</span><strong>${total.unpaidMembers}</strong></div>`;

  tbody.innerHTML = list.length ? list.map(course => {
    const finance = courseFinanceSummary(course);
    const location = getLocation(course.locationId);
    const statusBadge = finance.expected <= 0 ? '<span class="badge blue">未設定餐費</span>' : finance.unpaid > 0 ? '<span class="badge red">尚有未收</span>' : '<span class="badge green">已結清</span>';
    const action = appMode === 'admin'
      ? `<button class="mini-btn" data-payment="${course.id}">結算管理</button>`
      : `<button class="mini-btn" data-reply-course="${course.id}">出席回覆</button>`;
    return `<tr>
      <td>${formatDate(course.date)}</td>
      <td><strong>${escapeHtml(course.title)}</strong><br><span class="table-sub">${escapeHtml(location?.name || '未設定地點')}</span></td>
      <td>${escapeHtml(participantLabel(course))}</td>
      <td>${formatMoney(finance.unitFee)}</td>
      <td>${formatMoney(finance.expected)}</td>
      <td>${formatMoney(finance.paid)}</td>
      <td>${formatMoney(finance.unpaid)}</td>
      <td>${statusBadge}</td>
      <td>${action}</td>
    </tr>`;
  }).join('') : '<tr><td colspan="9">找不到符合條件的結算資料。</td></tr>';
}


function memberImportHeaders() {
  return ['姓名','身份','組別','豬場名稱','地區','飼養型態','飼養規模','專長','電話','LINE_ID','簡介','顯示權限','會員Token'];
}

function sampleMemberImportRows() {
  return [
    ['讀書會會長','會長','幹部','','台中山線','養豬產業','不公開','會務協調、課程安排','','','年度方向與課程安排聯絡人','會員可見','SX-PRESIDENT-2026'],
    ['第一組組長','組長','第一組','','苗栗/台中','母豬場','不公開','會員聯絡、出席統計','','','負責組員通知與出席回報','會員可見','SX-GROUP01-2026']
  ];
}

function toCsv(rows) {
  return '\ufeff' + rows.map(row => row.map(value => `"${String(value ?? '').replaceAll('"', '""')}"`).join(',')).join('\n');
}

function downloadText(filename, content, mimeType = 'text/plain;charset=utf-8') {
  downloadTextFile(filename, content, mimeType);
}

function generateMemberTemplateCsv(includeSamples = true) {
  const rows = [memberImportHeaders()];
  if (includeSamples) rows.push(...sampleMemberImportRows());
  return toCsv(rows);
}

function exportMemberTemplateCsv() {
  downloadTextFile('山線養豬讀書會_會員匯入模板.csv', generateMemberTemplateCsv(true), 'text/csv;charset=utf-8');
  showToast('已下載會員 CSV 模板');
}

function exportMembersCsv() {
  const rows = [memberImportHeaders()];
  state.members.forEach(member => {
    rows.push([
      member.name || '', member.role || '', member.groupName || '', member.farmName || '', member.area || '',
      member.farmType || '', member.scale || '', member.specialty || '', member.phone || '', member.lineId || '',
      member.bio || '', member.visibility || '會員可見', member.memberToken || ''
    ]);
  });
  downloadTextFile(`山線養豬讀書會_目前會員資料_${new Date().toISOString().slice(0, 10)}.csv`, toCsv(rows), 'text/csv;charset=utf-8');
  showToast('已匯出目前會員 CSV');
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = '';
  let inQuotes = false;
  const value = String(text || '').replace(/^\ufeff/, '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  for (let i = 0; i < value.length; i += 1) {
    const ch = value[i];
    const next = value[i + 1];
    if (ch === '"') {
      if (inQuotes && next === '"') { cell += '"'; i += 1; }
      else inQuotes = !inQuotes;
    } else if (ch === ',' && !inQuotes) {
      row.push(cell); cell = '';
    } else if (ch === '\n' && !inQuotes) {
      row.push(cell); rows.push(row); row = []; cell = '';
    } else {
      cell += ch;
    }
  }
  if (cell !== '' || row.length) { row.push(cell); rows.push(row); }
  return rows.filter(r => r.some(c => String(c || '').trim() !== ''));
}

function headerKey(header) {
  return String(header || '').replace(/^\ufeff/, '').trim().toLowerCase().replace(/\s+/g, '');
}

function normalizeMemberImportRow(raw, index, headers, defaultVisibility) {
  const aliases = {
    name: ['姓名','name','會員姓名'],
    role: ['身份','職務','role','會員身份'],
    groupName: ['組別','group','groupname','分組'],
    farmName: ['豬場名稱','牧場名稱','farm','farmname'],
    area: ['地區','area','所在區域'],
    farmType: ['飼養型態','畜牧型態','farmtype'],
    scale: ['飼養規模','規模','scale'],
    specialty: ['專長','specialty','擅長'],
    phone: ['電話','手機','phone','tel'],
    lineId: ['line_id','lineid','line','LINE_ID','LINE'],
    bio: ['簡介','備註','bio','介紹'],
    visibility: ['顯示權限','visibility','隱私'],
    memberToken: ['會員token','membertoken','token','會員Token']
  };
  const map = {};
  headers.forEach((header, i) => { map[headerKey(header)] = i; });
  const pick = (field) => {
    for (const alias of aliases[field]) {
      const idx = map[headerKey(alias)];
      if (idx !== undefined) return String(raw[idx] ?? '').trim();
    }
    return '';
  };
  const member = {
    id: '',
    memberToken: pick('memberToken'),
    name: pick('name'),
    role: pick('role') || '會員',
    groupName: pick('groupName') || '未分組',
    farmName: pick('farmName'),
    area: pick('area'),
    farmType: pick('farmType'),
    scale: pick('scale'),
    specialty: pick('specialty'),
    phone: pick('phone'),
    lineId: pick('lineId'),
    bio: pick('bio'),
    visibility: pick('visibility') || defaultVisibility || '會員可見'
  };
  const note = [];
  if (!member.name) note.push('缺少姓名，將略過');
  const validRoles = ['會長','副會長','組長','會員','講師/顧問'];
  if (member.role && !validRoles.includes(member.role)) note.push('身份不在建議清單內，但仍可匯入');
  return { index, member, note };
}

function findExistingMemberForImport(member) {
  if (member.memberToken) {
    const byToken = state.members.find(item => String(item.memberToken || '').trim() === member.memberToken);
    if (byToken) return byToken;
  }
  const name = String(member.name || '').trim();
  const phone = String(member.phone || '').trim();
  if (name && phone) {
    const byNamePhone = state.members.find(item => String(item.name || '').trim() === name && String(item.phone || '').trim() === phone);
    if (byNamePhone) return byNamePhone;
  }
  if (name && !phone) {
    const byName = state.members.find(item => String(item.name || '').trim() === name);
    if (byName) return byName;
  }
  return null;
}

function buildMemberImportPreview() {
  const paste = $('#memberCsvPaste')?.value || '';
  if (!paste.trim()) throw new Error('請先選擇 CSV 檔案或貼上 CSV 內容。');
  const rows = parseCsv(paste);
  if (rows.length < 2) throw new Error('CSV 至少需要標題列與一筆資料。');
  const headers = rows[0];
  const defaultVisibility = $('#memberImportDefaultVisibility')?.value || '會員可見';
  const duplicateMode = $('#memberImportDuplicateMode')?.value || 'update';
  const preview = [];
  rows.slice(1).forEach((row, idx) => {
    const item = normalizeMemberImportRow(row, idx + 2, headers, defaultVisibility);
    if (!item.member.name) {
      preview.push({ ...item, action: 'error', existingId: '', message: item.note.join('；') || '缺少姓名' });
      return;
    }
    const existing = duplicateMode === 'new' ? null : findExistingMemberForImport(item.member);
    if (existing && duplicateMode === 'skip') preview.push({ ...item, action: 'skip', existingId: existing.id, message: `已存在：${existing.name}，將略過` });
    else if (existing) preview.push({ ...item, action: 'update', existingId: existing.id, message: `將更新：${existing.name}` });
    else preview.push({ ...item, action: 'create', existingId: '', message: '將新增會員' });
  });
  return preview;
}

function previewMemberImport() {
  try {
    memberImportPreview = buildMemberImportPreview();
    renderMemberImport();
    const executable = memberImportPreview.some(item => item.action === 'create' || item.action === 'update');
    const btn = $('#executeMemberImport');
    if (btn) btn.disabled = !executable;
    showToast('已產生匯入預覽');
  } catch (error) {
    memberImportPreview = [];
    renderMemberImport();
    const message = $('#memberImportMessage');
    if (message) { message.textContent = `預覽失敗：${error.message}`; message.className = 'sync-status err'; }
  }
}

function executeMemberImport() {
  if (!memberImportPreview.length) return alert('請先預覽匯入。');
  const executable = memberImportPreview.filter(item => item.action === 'create' || item.action === 'update');
  if (!executable.length) return alert('沒有可匯入的資料。');
  const ok = confirm(`確定要匯入 ${executable.length} 筆會員資料嗎？\n新增與更新後，所有課程的出席、收費欄位也會自動補上。`);
  if (!ok) return;
  executable.forEach(item => {
    const incoming = { ...item.member };
    if (!incoming.memberToken) incoming.memberToken = `SX-${String(state.members.length + 1).padStart(3, '0')}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    if (item.action === 'update') {
      const target = state.members.find(member => member.id === item.existingId);
      if (target) Object.assign(target, incoming, { id: target.id });
    } else {
      incoming.id = uid('m');
      state.members.push(incoming);
    }
  });
  state = normalizeState(state);
  saveState();
  memberImportPreview = [];
  if ($('#memberCsvPaste')) $('#memberCsvPaste').value = '';
  if ($('#importMemberCsv')) $('#importMemberCsv').value = '';
  render();
  showToast('會員資料已完成批次匯入');
}

function importMemberCsvFile(file) {
  if (!file) return;
  if (!file.name.toLowerCase().endsWith('.csv')) {
    alert('目前瀏覽器版支援 CSV 匯入。請將 Excel 另存為 CSV UTF-8 後匯入。');
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    const textarea = $('#memberCsvPaste');
    if (textarea) textarea.value = reader.result || '';
    previewMemberImport();
  };
  reader.readAsText(file, 'utf-8');
}

function clearMemberImport() {
  memberImportPreview = [];
  if ($('#memberCsvPaste')) $('#memberCsvPaste').value = '';
  if ($('#importMemberCsv')) $('#importMemberCsv').value = '';
  const btn = $('#executeMemberImport');
  if (btn) btn.disabled = true;
  renderMemberImport();
  showToast('已清除匯入預覽');
}

function renderMemberImport() {
  const kpi = $('#importKpis');
  if (kpi) {
    const groups = new Set(state.members.map(member => member.groupName || '未分組'));
    const leaders = state.members.filter(member => ['會長','副會長','組長'].includes(member.role)).length;
    kpi.innerHTML = [
      kpiCard('目前會員', `${state.members.length}`, 'members'),
      kpiCard('組別數', `${groups.size}`, 'groups'),
      kpiCard('幹部/組長', `${leaders}`, 'leaders'),
      kpiCard('本次預覽', `${memberImportPreview.length}`, 'preview')
    ].join('');
  }
  const tbody = $('#memberImportPreviewTable tbody');
  const pill = $('#importPreviewPill');
  const message = $('#memberImportMessage');
  const executeBtn = $('#executeMemberImport');
  const counts = memberImportPreview.reduce((acc, item) => { acc[item.action] = (acc[item.action] || 0) + 1; return acc; }, {});
  if (pill) pill.textContent = memberImportPreview.length ? `新增 ${counts.create || 0}｜更新 ${counts.update || 0}｜略過 ${counts.skip || 0}｜錯誤 ${counts.error || 0}` : '尚未預覽';
  if (message) {
    if (!memberImportPreview.length) { message.textContent = '請先選擇 CSV 或貼上內容，再按「預覽匯入」。'; message.className = 'sync-status'; }
    else { message.textContent = `預覽完成：新增 ${counts.create || 0} 筆、更新 ${counts.update || 0} 筆、略過 ${counts.skip || 0} 筆、錯誤 ${counts.error || 0} 筆。`; message.className = counts.error ? 'sync-status err' : 'sync-status ok'; }
  }
  if (executeBtn) executeBtn.disabled = !memberImportPreview.some(item => item.action === 'create' || item.action === 'update');
  if (!tbody) return;
  tbody.innerHTML = memberImportPreview.length ? memberImportPreview.map(item => {
    const m = item.member;
    const actionLabel = item.action === 'create' ? '新增' : item.action === 'update' ? '更新' : item.action === 'skip' ? '略過' : '錯誤';
    return `<tr>
      <td><span class="status-badge ${item.action}">${actionLabel}</span></td>
      <td>${escapeHtml(m.name)}</td>
      <td>${escapeHtml(m.role)}</td>
      <td>${escapeHtml(m.groupName)}</td>
      <td>${escapeHtml(m.area)}</td>
      <td>${escapeHtml(m.phone)}</td>
      <td>${escapeHtml(m.lineId)}</td>
      <td>${escapeHtml(m.memberToken || '自動產生')}</td>
      <td>${escapeHtml(item.message || item.note.join('；'))}</td>
    </tr>`;
  }).join('') : '<tr><td colspan="9" class="muted">尚無匯入預覽資料。</td></tr>';
}


function courseImportHeaders() {
  return ['年度','日期','星期','開始時間','結束時間','課程主題','講師','主辦廠商','聯絡窗口','主題分類','地點名稱','餐廳地址','Google地圖連結','停車狀態','停車說明','每人餐費','參加人數','本場應收總額','其他費用','上課內容','附件連結','照片連結','課程狀態','課程ID'];
}

function sampleCourseImportRows() {
  return [
    ['2026','2026-09-18','五','18:30','21:00','母豬分娩率提升與返情分析','示範獸醫師','示範主辦廠商','王先生','產房管理','示範餐廳 A','台中市后里區示範路 100 號','https://www.google.com/maps/search/?api=1&query=台中市后里區','有','餐廳旁停車場，建議提早抵達','600','20','12000','0','課程重點：發情觀察、配種時機、返情原因、批次分娩率追蹤。','','', '未上課', ''],
    ['2026','115/10/20','二','18:30','21:00','PRRS 監測採樣與後備馴化流程','示範教授','示範主辦單位','李小姐','疾病管理','示範餐廳 C','苗栗縣三義鄉示範路 66 號','https://www.google.com/maps/search/?api=1&query=苗栗縣三義鄉','路邊停車','請避開紅線，建議共乘','700','18','','0','課程重點：PRRS 採樣、抗體追蹤、後備馴化與群體穩定。','','', 'planned', '']
  ];
}

function generateCourseTemplateCsv(includeSamples = true) {
  const rows = [courseImportHeaders()];
  if (includeSamples) rows.push(...sampleCourseImportRows());
  return toCsv(rows);
}

function exportCourseTemplateCsv() {
  downloadTextFile('山線養豬讀書會_年度課程匯入模板.csv', generateCourseTemplateCsv(true), 'text/csv;charset=utf-8');
  showToast('已下載年度課程 CSV 模板');
}

function exportCoursesCsv() {
  const rows = [courseImportHeaders()];
  sortedCourses().forEach(course => {
    const location = getLocation(course.locationId) || {};
    rows.push([
      course.year || '', course.date || '', weekdayText(course.date), course.startTime || '', course.endTime || '',
      course.title || '', course.speaker || '', courseSponsorInfo(course).name || '', courseSponsorInfo(course).contact || '', course.category || '其他', location.name || '', location.address || '',
      location.googleMapUrl || '', location.parkingAvailable || '', course.parkingNote || location.parkingNote || '',
      course.unitMealFee || inferUnitFee(course.fee) || '', course.participantCount || '', course.totalMealCost || '', course.otherCost || '',
      course.content || '', course.attachmentLinks || '', course.photoLinks || '', statusToText(course.status), course.id || ''
    ]);
  });
  downloadTextFile(`山線養豬讀書會_年度課程資料_${new Date().toISOString().slice(0, 10)}.csv`, toCsv(rows), 'text/csv;charset=utf-8');
  showToast('已匯出目前年度課程 CSV');
}

function weekdayText(dateText) {
  const d = new Date(String(dateText || '').replace(/\//g, '-'));
  if (Number.isNaN(d.getTime())) return '';
  return ['日','一','二','三','四','五','六'][d.getDay()];
}

function statusToText(status) {
  return status === 'done' ? '已完成' : status === 'cancelled' ? '取消/延期' : '未上課';
}

function normalizeCourseStatus(value) {
  const text = String(value || '').trim().toLowerCase();
  if (!text) return 'planned';
  if (['done','完成','已完成','上完','結束'].includes(text)) return 'done';
  if (['cancelled','canceled','取消','延期','取消/延期','停課'].includes(text)) return 'cancelled';
  return 'planned';
}

function normalizeCourseDate(value) {
  const text = String(value || '').trim();
  if (!text) return '';
  const cleaned = text.replace(/[年月.]/g, '/').replace(/日/g, '').replace(/-/g, '/');
  const parts = cleaned.split('/').map(part => part.trim()).filter(Boolean);
  if (parts.length >= 3) {
    let y = Number(parts[0]);
    const m = Number(parts[1]);
    const d = Number(parts[2]);
    if (Number.isFinite(y) && y > 0 && y < 1911) y += 1911;
    if (Number.isFinite(y) && Number.isFinite(m) && Number.isFinite(d)) {
      return `${String(y).padStart(4, '0')}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    }
  }
  const parsed = new Date(text);
  if (!Number.isNaN(parsed.getTime())) return parsed.toISOString().slice(0, 10);
  return text;
}

function normalizeCourseYear(dateText, explicitYear) {
  const y = String(explicitYear || '').trim();
  if (y) return y.length <= 3 && Number(y) < 1911 ? String(Number(y) + 1911) : y;
  const date = normalizeCourseDate(dateText);
  return date ? date.slice(0, 4) : String(new Date().getFullYear());
}

function normalizeCourseCategory(value) {
  const text = String(value || '').trim();
  const valid = ['疾病管理','營養飼料','環控設備','批次管理','產房管理','保育肉豬','經營管理','其他'];
  return valid.includes(text) ? text : '其他';
}

function normalizeParking(value) {
  const text = String(value || '').trim();
  const valid = ['有','無','路邊停車','收費停車場','未確認'];
  return valid.includes(text) ? text : (text || '未確認');
}

function normalizeCourseImportRow(raw, index, headers) {
  const aliases = {
    year: ['年度','年','year'],
    date: ['日期','課程日期','上課日期','date'],
    startTime: ['開始時間','開始','上課時間','starttime','start'],
    endTime: ['結束時間','結束','endtime','end'],
    title: ['課程主題','主題','課程名稱','title'],
    speaker: ['講師','speaker','授課講師'],
    sponsorName: ['主辦廠商','主辦單位','廠商','公司','sponsor','sponsorname'],
    sponsorContact: ['聯絡窗口','窗口','廠商窗口','contact','sponsorcontact'],
    category: ['主題分類','課程分類','分類','category'],
    locationName: ['地點名稱','餐廳名稱','上課地點','地點','location','locationname'],
    address: ['餐廳地址','地址','locationaddress','address'],
    googleMapUrl: ['google地圖連結','googlemap','googlemapurl','地圖連結','Google地圖連結'],
    parkingAvailable: ['停車狀態','有否停車位','是否有停車位','parking','parkingavailable'],
    parkingNote: ['停車說明','停車資訊','停車提醒','parkingnote'],
    unitMealFee: ['每人餐費','餐費','單人餐費','unitmealfee'],
    participantCount: ['參加人數','預計人數','實際人數','participantcount'],
    totalMealCost: ['本場應收總額','應收總額','總餐費','totalmealcost'],
    otherCost: ['其他費用','場地費','othercost'],
    content: ['上課內容','課程內容','內容','content'],
    attachmentLinks: ['附件連結','參考連結','ppt連結','pdf連結','attachmentlinks'],
    photoLinks: ['照片連結','上課照片連結','photolinks'],
    status: ['課程狀態','狀態','status'],
    courseId: ['課程id','courseid','id','課程ID']
  };
  const map = {};
  headers.forEach((header, i) => { map[headerKey(header)] = i; });
  const pick = (field) => {
    for (const alias of aliases[field]) {
      const idx = map[headerKey(alias)];
      if (idx !== undefined) return String(raw[idx] ?? '').trim();
    }
    return '';
  };
  const date = normalizeCourseDate(pick('date'));
  const course = {
    id: pick('courseId'),
    year: normalizeCourseYear(date, pick('year')),
    date,
    startTime: pick('startTime'),
    endTime: pick('endTime'),
    title: pick('title'),
    speaker: pick('speaker'),
    sponsorName: pick('sponsorName'),
    sponsorContact: pick('sponsorContact'),
    category: normalizeCourseCategory(pick('category')),
    content: pick('content'),
    parkingNote: pick('parkingNote'),
    fee: pick('unitMealFee') ? `每人 ${pick('unitMealFee')} 元` : '',
    participantCount: pick('participantCount'),
    unitMealFee: pick('unitMealFee'),
    totalMealCost: pick('totalMealCost'),
    otherCost: pick('otherCost') || '0',
    status: normalizeCourseStatus(pick('status')),
    attachmentLinks: pick('attachmentLinks'),
    photoLinks: pick('photoLinks')
  };
  const location = {
    name: pick('locationName'),
    address: pick('address'),
    googleMapUrl: pick('googleMapUrl'),
    parkingAvailable: normalizeParking(pick('parkingAvailable')),
    parkingNote: pick('parkingNote'),
    phone: '', capacity: '', mealType: '', avgCost: '', note: ''
  };
  const note = [];
  if (!course.title) note.push('缺少課程主題，將略過');
  if (!course.date) note.push('缺少日期，建議補上');
  if (!location.name) note.push('未填地點名稱，可先匯入課程後再補地點');
  return { index, course, location, note };
}

function findExistingCourseForImport(course) {
  if (course.id) {
    const byId = state.courses.find(item => String(item.id || '').trim() === String(course.id).trim());
    if (byId) return byId;
  }
  const title = String(course.title || '').trim();
  const date = String(course.date || '').trim();
  if (title && date) {
    const byDateTitle = state.courses.find(item => String(item.date || '').trim() === date && String(item.title || '').trim() === title);
    if (byDateTitle) return byDateTitle;
  }
  return null;
}

function findExistingLocationForImport(location) {
  const name = String(location.name || '').trim();
  const address = String(location.address || '').trim();
  if (name) {
    const byName = state.locations.find(item => String(item.name || '').trim() === name);
    if (byName) return byName;
  }
  if (address) {
    const byAddress = state.locations.find(item => String(item.address || '').trim() === address);
    if (byAddress) return byAddress;
  }
  return null;
}

function buildCourseImportPreview() {
  const paste = $('#courseCsvPaste')?.value || '';
  if (!paste.trim()) throw new Error('請先選擇年度課程 CSV 檔案或貼上 CSV 內容。');
  const rows = parseCsv(paste);
  if (rows.length < 2) throw new Error('CSV 至少需要標題列與一筆資料。');
  const headers = rows[0];
  const duplicateMode = $('#courseImportDuplicateMode')?.value || 'update';
  const locationMode = $('#courseImportLocationMode')?.value || 'createUpdate';
  const preview = [];
  rows.slice(1).forEach((row, idx) => {
    const item = normalizeCourseImportRow(row, idx + 2, headers);
    if (!item.course.title) {
      preview.push({ ...item, action: 'error', existingId: '', locationAction: '無', message: item.note.join('；') || '缺少課程主題' });
      return;
    }
    const existing = duplicateMode === 'new' ? null : findExistingCourseForImport(item.course);
    const existingLocation = findExistingLocationForImport(item.location);
    const locationAction = !item.location.name ? '無地點' : existingLocation ? '沿用/更新地點' : (locationMode === 'neverCreate' ? '不建立地點' : '新增地點');
    if (existing && duplicateMode === 'skip') preview.push({ ...item, action: 'skip', existingId: existing.id, locationAction, message: `已存在：${existing.title}，將略過` });
    else if (existing) preview.push({ ...item, action: 'update', existingId: existing.id, locationAction, message: `將更新：${existing.title}` });
    else preview.push({ ...item, action: 'create', existingId: '', locationAction, message: '將新增課程' });
  });
  return preview;
}

function previewCourseImport() {
  try {
    courseImportPreview = buildCourseImportPreview();
    renderCourseImport();
    const executable = courseImportPreview.some(item => item.action === 'create' || item.action === 'update');
    const btn = $('#executeCourseImport');
    if (btn) btn.disabled = !executable;
    showToast('已產生年度課程匯入預覽');
  } catch (error) {
    courseImportPreview = [];
    renderCourseImport();
    const message = $('#courseImportMessage');
    if (message) { message.textContent = `預覽失敗：${error.message}`; message.className = 'sync-status err'; }
  }
}

function prepareImportedLocation(item) {
  const locationMode = $('#courseImportLocationMode')?.value || 'createUpdate';
  if (!item.location.name) return '';
  const existing = findExistingLocationForImport(item.location);
  if (existing) {
    if (locationMode === 'createUpdate') Object.assign(existing, { ...existing, ...item.location, id: existing.id });
    return existing.id;
  }
  if (locationMode === 'neverCreate') return '';
  const newLocation = { id: uid('l'), ...item.location };
  state.locations.push(newLocation);
  return newLocation.id;
}

function executeCourseImport() {
  if (!courseImportPreview.length) return alert('請先預覽匯入。');
  const executable = courseImportPreview.filter(item => item.action === 'create' || item.action === 'update');
  if (!executable.length) return alert('沒有可匯入的課程資料。');
  const ok = confirm(`確定要匯入 ${executable.length} 筆年度課程資料嗎？\n若地點不存在，系統會依設定自動建立餐廳地點。`);
  if (!ok) return;
  executable.forEach(item => {
    const locationId = prepareImportedLocation(item);
    const incoming = { ...item.course, locationId };
    if (item.action === 'update') {
      const target = state.courses.find(course => course.id === item.existingId);
      if (target) {
        Object.assign(target, incoming, {
          id: target.id,
          attendance: target.attendance || { going: [], leave: [], unknown: state.members.map(member => member.id) },
          payments: target.payments || {},
          prepTasks: target.prepTasks || []
        });
      }
    } else {
      incoming.id = incoming.id && !state.courses.some(course => course.id === incoming.id) ? incoming.id : uid('c');
      incoming.attendance = { going: [], leave: [], unknown: state.members.map(member => member.id) };
      incoming.payments = {};
      incoming.prepTasks = [];
      state.courses.push(incoming);
    }
  });
  state = normalizeState(state);
  saveState();
  courseImportPreview = [];
  if ($('#courseCsvPaste')) $('#courseCsvPaste').value = '';
  if ($('#importCourseCsv')) $('#importCourseCsv').value = '';
  render();
  showToast('年度課程已完成批次匯入');
}

function importCourseCsvFile(file) {
  if (!file) return;
  if (!file.name.toLowerCase().endsWith('.csv')) {
    alert('目前瀏覽器版支援 CSV 匯入。請將 Excel 另存為 CSV UTF-8 後匯入。');
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    const textarea = $('#courseCsvPaste');
    if (textarea) textarea.value = reader.result || '';
    previewCourseImport();
  };
  reader.readAsText(file, 'utf-8');
}

function clearCourseImport() {
  courseImportPreview = [];
  if ($('#courseCsvPaste')) $('#courseCsvPaste').value = '';
  if ($('#importCourseCsv')) $('#importCourseCsv').value = '';
  const btn = $('#executeCourseImport');
  if (btn) btn.disabled = true;
  renderCourseImport();
  showToast('已清除課程匯入預覽');
}

function renderCourseImport() {
  const kpi = $('#courseImportKpis');
  if (kpi) {
    const years = new Set(state.courses.map(course => course.year || '').filter(Boolean));
    const planned = state.courses.filter(course => course.status === 'planned').length;
    kpi.innerHTML = [
      kpiCard('目前課程', `${state.courses.length}`, 'courses'),
      kpiCard('年度數', `${years.size || 0}`, 'years'),
      kpiCard('未上課', `${planned}`, 'planned'),
      kpiCard('本次預覽', `${courseImportPreview.length}`, 'preview')
    ].join('');
  }
  const tbody = $('#courseImportPreviewTable tbody');
  const pill = $('#courseImportPreviewPill');
  const message = $('#courseImportMessage');
  const executeBtn = $('#executeCourseImport');
  const counts = courseImportPreview.reduce((acc, item) => { acc[item.action] = (acc[item.action] || 0) + 1; return acc; }, {});
  if (pill) pill.textContent = courseImportPreview.length ? `新增 ${counts.create || 0}｜更新 ${counts.update || 0}｜略過 ${counts.skip || 0}｜錯誤 ${counts.error || 0}` : '尚未預覽';
  if (message) {
    if (!courseImportPreview.length) { message.textContent = '請先選擇年度課程 CSV 或貼上內容，再按「預覽匯入」。'; message.className = 'sync-status'; }
    else { message.textContent = `預覽完成：新增 ${counts.create || 0} 筆、更新 ${counts.update || 0} 筆、略過 ${counts.skip || 0} 筆、錯誤 ${counts.error || 0} 筆。`; message.className = counts.error ? 'sync-status err' : 'sync-status ok'; }
  }
  if (executeBtn) executeBtn.disabled = !courseImportPreview.some(item => item.action === 'create' || item.action === 'update');
  if (!tbody) return;
  tbody.innerHTML = courseImportPreview.length ? courseImportPreview.map(item => {
    const c = item.course;
    const actionLabel = item.action === 'create' ? '新增' : item.action === 'update' ? '更新' : item.action === 'skip' ? '略過' : '錯誤';
    return `<tr>
      <td><span class="status-badge ${item.action}">${actionLabel}</span></td>
      <td>${escapeHtml(c.date || '')}</td>
      <td>${escapeHtml([c.startTime, c.endTime].filter(Boolean).join('-'))}</td>
      <td><strong>${escapeHtml(c.title || '')}</strong></td>
      <td>${escapeHtml(c.speaker || '')}</td>
      <td>${escapeHtml(c.category || '其他')}</td>
      <td>${escapeHtml(item.location.name || '未設定')}</td>
      <td>${escapeHtml(c.participantCount || '')}</td>
      <td>${escapeHtml(statusToText(c.status))}</td>
      <td>${escapeHtml(item.locationAction || '')}</td>
      <td>${escapeHtml(item.message || item.note.join('；'))}</td>
    </tr>`;
  }).join('') : '<tr><td colspan="11" class="muted">尚無年度課程匯入預覽資料。</td></tr>';
}


function memberStatusInfo(member = {}) {
  const status = member.memberStatus || '正常';
  const map = {
    '正常': { key: 'active', label: '正常', className: 'green' },
    '暫停': { key: 'paused', label: '暫停', className: 'blue' },
    '退會': { key: 'retired', label: '退會', className: 'red' },
    '不列入年度會費': { key: 'noFee', label: '不列入年度會費', className: 'blue' }
  };
  return map[status] || map['正常'];
}

function isAnnualFeeEligibleMember(member = {}) {
  return (member.memberStatus || '正常') === '正常';
}

function memberHasHistory(memberId) {
  if (!memberId) return false;
  const hasCourseHistory = state.courses.some(course => {
    const a = normalizeAttendance(course.attendance);
    return a.going.includes(memberId) || a.leave.includes(memberId) || a.unknown.includes(memberId)
      || Boolean(course.payments?.[memberId])
      || Boolean(course.checkins?.[memberId])
      || (Array.isArray(course.feedbacks) && course.feedbacks.some(item => item.memberId === memberId))
      || (Array.isArray(course.prepTasks) && course.prepTasks.some(task => task.ownerId === memberId));
  });
  const hasAnnualFeeHistory = state.annualFees?.some(fee => Array.isArray(fee.members) && fee.members.some(row => row.memberId === memberId || row.memberSnapshotId === memberId));
  return hasCourseHistory || hasAnnualFeeHistory;
}

function retireMember(memberId, reason = '退會保留歷史紀錄') {
  const member = getMember(memberId);
  if (!member) return false;
  member.memberStatus = '退會';
  member.retiredAt = new Date().toISOString().slice(0, 10);
  member.retiredNote = reason;
  member.visibility = member.visibility || '幹部可見';
  // 只停用未來用途，不清除過往出席、課程、年度會費資料。
  state.annualFees.forEach(fee => {
    annualFeeMemberRows(fee).forEach(row => {
      if (row.memberId !== memberId) return;
      row.memberSnapshotId = row.memberSnapshotId || memberId;
      row.memberStatusAtRecord = row.memberStatusAtRecord || row.memberStatus || '退會';
      row.farmName = row.farmName || member.farmName || member.groupName || '';
      row.memberName = row.memberName || member.name || '';
      row.role = row.role || member.role || '會員';
      row.note = row.note || '會員已退會，保留歷史會費紀錄';
    });
  });
  saveState({ title: '會員退會保留歷史紀錄' });
  render();
  showToast('已改為退會，過往繳費與出席紀錄已保留');
  return true;
}


function setMemberStatus(memberId, status, reason = '') {
  if (appMode !== 'admin') return false;
  const member = getMember(memberId);
  if (!member) return false;
  if (status === '退會') {
    return retireMember(memberId, reason || '管理端設定退會');
  }
  member.memberStatus = status || '正常';
  if (status === '正常') {
    member.retiredNote = member.retiredNote || '';
  }
  member.statusUpdatedAt = new Date().toISOString();
  saveState({ title: '會員狀態更新' });
  render();
  showToast(status === '正常' ? '已恢復為正常會員' : `會員狀態已更新為：${status}`);
  return true;
}

function compactText(value, fallback = '—') {
  const text = String(value || '').replace(/\s+/g, ' ').trim();
  return text || fallback;
}

function memberDirectoryList() {
  const search = ($('#memberSearch')?.value || '').trim().toLowerCase();
  const role = $('#memberRoleFilter')?.value || 'all';
  const statusFilter = $('#memberStatusFilter')?.value || 'active';
  let list = [...state.members].sort((a, b) => roleWeight(a.role) - roleWeight(b.role) || String(a.farmName || '').localeCompare(String(b.farmName || ''), 'zh-Hant') || String(a.name).localeCompare(String(b.name), 'zh-Hant'));
  if (role !== 'all') list = list.filter(member => member.role === role);
  if (statusFilter === 'active') list = list.filter(member => isAnnualFeeEligibleMember(member));
  else if (statusFilter !== 'all') list = list.filter(member => (member.memberStatus || '正常') === statusFilter);
  if (search) list = list.filter(member => Object.values(member).join(' ').toLowerCase().includes(search));
  return list;
}

function printMemberSignInSheet() {
  const list = memberDirectoryList();
  if (!list.length) {
    alert('目前沒有可列印的會員 / 牧場名單。');
    return;
  }
  const today = new Date().toLocaleDateString('zh-TW');
  const rows = list.map((member, index) => `<tr>
    <td>${index + 1}</td>
    <td>${escapeHtml(member.farmName || member.groupName || '未填寫')}</td>
    <td>${escapeHtml(member.name || '未填寫')}</td>
    <td></td>
  </tr>`).join('');
  const html = `<!doctype html>
<html lang="zh-Hant">
<head>
<meta charset="utf-8" />
<title>山線養豬讀書會簽到表</title>
<style>
  * { box-sizing: border-box; }
  body { font-family: "Microsoft JhengHei", "Noto Sans TC", Arial, sans-serif; margin: 24px; color: #1f1a14; }
  .print-head { display: flex; justify-content: space-between; gap: 16px; align-items: flex-end; border-bottom: 3px solid #6b4423; padding-bottom: 12px; margin-bottom: 16px; }
  h1 { margin: 0; font-size: 26px; letter-spacing: .08em; }
  .meta { color: #6b5a49; font-size: 14px; text-align: right; line-height: 1.7; }
  table { width: 100%; border-collapse: collapse; table-layout: fixed; }
  th, td { border: 1px solid #4b3a2a; padding: 10px 8px; font-size: 16px; height: 42px; vertical-align: middle; }
  th { background: #f1e2cc; font-weight: 900; }
  td:nth-child(1), th:nth-child(1) { width: 56px; text-align: center; }
  td:nth-child(2), th:nth-child(2) { width: 42%; }
  td:nth-child(3), th:nth-child(3) { width: 28%; }
  td:nth-child(4), th:nth-child(4) { width: 22%; }
  .note { margin-top: 14px; color: #6b5a49; font-size: 13px; }
  @page { size: A4; margin: 12mm; }
  @media print {
    body { margin: 0; }
    .no-print { display: none; }
    th { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  }
</style>
</head>
<body>
  <div class="print-head">
    <div>
      <h1>山線養豬讀書會簽到表</h1>
      <div class="note">固定欄位：畜牧場名稱、會員姓名、簽到。</div>
    </div>
    <div class="meta">
      列印日期：${escapeHtml(today)}<br>
      名單筆數：${list.length} 筆
    </div>
  </div>
  <table>
    <thead>
      <tr><th>#</th><th>畜牧場名稱</th><th>會員姓名</th><th>簽到</th></tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>
  <div class="note">※ 此表依目前會員 / 牧場名單篩選結果列印。</div>
  <script>
    window.addEventListener('load', function() {
      setTimeout(function() { window.print(); }, 250);
    });
  <\/script>
</body>
</html>`;
  const printWindow = window.open('', '_blank', 'width=980,height=720');
  if (!printWindow) {
    alert('瀏覽器阻擋彈出視窗，請允許此網站開啟列印視窗。');
    return;
  }
  printWindow.document.open();
  printWindow.document.write(html);
  printWindow.document.close();
  printWindow.focus();
}


function memberTableRows(list, { retiredOnly = false } = {}) {
  const isAdmin = appMode === 'admin';
  return list.map((member, index) => {
    const farmName = escapeHtml(compactText(member.farmName || member.groupName, '未填寫'));
    const name = escapeHtml(compactText(member.name, '未填寫'));
    const groupName = escapeHtml(compactText(member.groupName, '未分組'));
    const roleLabel = escapeHtml(compactText(member.role, '會員'));
    const statusInfo = memberStatusInfo(member);
    const statusBadge = `<span class="badge ${statusInfo.className}">${escapeHtml(statusInfo.label)}</span>`;
    const area = escapeHtml(compactText(member.area, '未設定'));
    const farmTypeScale = escapeHtml([compactText(member.farmType, ''), compactText(member.scale, '')].filter(Boolean).join(' / ') || '未設定');
    const phoneLine = escapeHtml([compactText(member.phone, ''), compactText(member.lineId ? `LINE:${member.lineId}` : '', '')].filter(Boolean).join(' / ') || '未設定');
    const noteSource = retiredOnly ? (member.retiredNote || member.bio || member.specialty || '') : (member.bio || member.specialty || '');
    const note = escapeHtml(compactText(noteSource, '—'));
    const retiredDate = escapeHtml(compactText(member.retiredAt, '—'));
    const quickStatus = isAdmin
      ? ((member.memberStatus || '正常') === '退會'
          ? `<button class="mini-btn" data-member-status-id="${member.id}" data-member-status="正常">恢復正常</button>`
          : `<button class="mini-btn warn" data-member-status-id="${member.id}" data-member-status="退會">設為退會</button>`)
      : '';
    const deleteLabel = retiredOnly && (member.memberStatus || '正常') === '退會' ? '永久刪除' : '刪除';
    const deleteClass = retiredOnly && (member.memberStatus || '正常') === '退會' ? 'mini-btn danger-mini' : 'mini-btn';
    const adminActions = isAdmin
      ? `<div class="table-actions member-actions"><button class="mini-btn" data-edit="member" data-id="${member.id}">編輯</button>${quickStatus}<button class="${deleteClass}" data-delete="member" data-id="${member.id}">${deleteLabel}</button></div>`
      : '';
    return isAdmin
      ? `<tr class="${(member.memberStatus || '正常') === '退會' ? 'is-retired-member' : ''}">
          <td>${index + 1}</td>
          <td>${statusBadge}</td>
          <td><span class="badge">${roleLabel}</span></td>
          <td class="strong-cell text-nowrap">${farmName}</td>
          <td class="strong-cell text-nowrap">${name}</td>
          <td class="text-nowrap">${groupName}</td>
          <td class="text-nowrap">${area}</td>
          <td class="text-nowrap">${farmTypeScale}</td>
          <td class="text-nowrap">${phoneLine}</td>
          ${retiredOnly ? `<td class="text-nowrap">${retiredDate}</td>` : ''}
          <td class="muted-cell text-truncate" title="${note}">${note}</td>
          <td>${adminActions}</td>
        </tr>`
      : `<tr>
          <td>${index + 1}</td>
          <td>${statusBadge}</td>
          <td><span class="badge">${roleLabel}</span></td>
          <td class="text-nowrap">${groupName}</td>
          <td class="strong-cell text-nowrap">${farmName}</td>
          <td class="strong-cell text-nowrap">${name}</td>
          <td class="text-nowrap">${area}</td>
          <td class="text-nowrap">${farmTypeScale}</td>
          <td class="muted-cell text-truncate" title="${note}">${note}</td>
        </tr>`;
  }).join('');
}

function renderMemberTable(target, list, { retiredOnly = false } = {}) {
  const isAdmin = appMode === 'admin';
  if (!target) return;
  const summaryText = retiredOnly
    ? `退會會員名單｜共 ${list.length} 筆，可恢復正常；按「永久刪除」會清除會員資料。`
    : isAdmin
      ? `管理端名單｜共 ${list.length} 筆，一行式列表，可新增、編輯、設為退會。`
      : `會員端公開名單｜共 ${list.length} 筆，以一行式列表呈現。`;

  if (!list.length) {
    target.innerHTML = `<section class="panel member-list-panel"><div class="empty-box">${retiredOnly ? '目前沒有退會會員。' : '找不到符合條件的會員。'}</div></section>`;
    return;
  }

  const rows = memberTableRows(list, { retiredOnly });
  const adminHead = `<tr>
      <th>#</th><th>狀態</th><th>身份</th><th>牧場 / 單位</th><th>姓名</th><th>組別</th><th>地區</th><th>型態 / 規模</th><th>電話 / LINE</th>${retiredOnly ? '<th>退會日期</th>' : ''}<th>備註</th><th>管理</th>
    </tr>`;
  const memberHead = `<tr>
      <th>#</th><th>狀態</th><th>身份</th><th>組別</th><th>牧場 / 單位</th><th>姓名</th><th>地區</th><th>型態 / 規模</th><th>專長 / 備註</th>
    </tr>`;

  target.innerHTML = `<section class="panel member-list-panel compact-member-list-panel">
    <div class="member-list-summary">
      <div>
        <strong>${summaryText}</strong>
        <span>${retiredOnly ? '退會會員刪除前會跳出確認提示；年度會費 / 帳務快照仍保留。' : '列表盡量一行顯示；完整內容可點「編輯」查看。'}</span>
      </div>
      <button class="primary-btn small" data-print-member-signin>列印簽到表</button>
    </div>
    <div class="table-wrap member-list-table-wrap compact-table-wrap">
      <table class="data-table member-list-table compact-member-table">
        <thead>${isAdmin ? adminHead : memberHead}</thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  </section>`;
}

function renderMembers() {
  renderMemberTable($('#memberCards'), memberDirectoryList(), { retiredOnly: false });
}

function renderRetiredMembers() {
  const search = ($('#retiredMemberSearch')?.value || '').trim().toLowerCase();
  let list = state.members
    .filter(member => (member.memberStatus || '正常') === '退會')
    .sort((a, b) => String(b.retiredAt || '').localeCompare(String(a.retiredAt || '')) || String(a.farmName || '').localeCompare(String(b.farmName || ''), 'zh-Hant'));
  if (search) list = list.filter(member => Object.values(member).join(' ').toLowerCase().includes(search));
  renderMemberTable($('#retiredMemberCards'), list, { retiredOnly: true });
}

function roleWeight(role) {
  return ({ '會長': 1, '副會長': 2, '組長': 3, '幹部': 4, '講師/顧問': 5, '會員': 6 }[role] || 9);
}

function normalizeGroupName(name) {
  const text = String(name || '').trim();
  return text || '未分組';
}

function getGroups() {
  const map = new Map();
  state.members.forEach(member => {
    const groupName = normalizeGroupName(member.groupName);
    if (!map.has(groupName)) map.set(groupName, []);
    map.get(groupName).push(member);
  });
  return Array.from(map.entries()).map(([groupName, members]) => ({
    groupName,
    members: members.sort((a, b) => roleWeight(a.role) - roleWeight(b.role) || String(a.name).localeCompare(String(b.name), 'zh-Hant'))
  })).sort((a, b) => String(a.groupName).localeCompare(String(b.groupName), 'zh-Hant'));
}

function getGroupLeaders(groupMembers) {
  const leaders = groupMembers.filter(member => ['會長', '副會長', '組長'].includes(member.role));
  return leaders.length ? leaders : groupMembers.filter(member => String(member.role || '').includes('組長'));
}

function memberCourseStatus(memberId, course) {
  if (!course) return { key: 'none', label: '未選課程', className: 'blue' };
  const attendance = normalizeAttendance(course.attendance);
  if (attendance.going.includes(memberId)) return { key: 'going', label: '會出席', className: 'green' };
  if (attendance.leave.includes(memberId)) return { key: 'leave', label: '請假', className: 'red' };
  if (courseReconfirmPendingMemberIds(course).includes(memberId)) return { key: 'unknown', label: '日期異動待重新確認', className: 'red' };
  return { key: 'unknown', label: '未回覆', className: 'blue' };
}

function memberPaymentStatus(memberId, course) {
  if (!course) return { key: 'none', label: '未選課程', className: 'blue', amount: 0 };
  const payment = course.payments?.[memberId] || {};
  const amount = num(payment.amount || course.unitMealFee || 0);
  if (payment.status === 'paid') return { key: 'paid', label: '已收', className: 'green', amount };
  if (payment.status === 'free') return { key: 'free', label: '免收', className: 'green', amount: 0 };
  if (payment.status === 'none') return { key: 'none', label: '不列入', className: 'blue', amount: 0 };
  return { key: 'unpaid', label: '未收', className: 'red', amount };
}

function groupCourseStats(groupMembers, course) {
  const stats = { total: groupMembers.length, going: 0, leave: 0, unknown: 0, paid: 0, unpaid: 0, unpaidAmount: 0 };
  groupMembers.forEach(member => {
    const attendance = memberCourseStatus(member.id, course);
    if (attendance.key === 'going') stats.going += 1;
    else if (attendance.key === 'leave') stats.leave += 1;
    else if (attendance.key === 'unknown') stats.unknown += 1;
    const payment = memberPaymentStatus(member.id, course);
    if (payment.key === 'paid') stats.paid += 1;
    if (payment.key === 'unpaid') {
      stats.unpaid += 1;
      stats.unpaidAmount += payment.amount;
    }
  });
  return stats;
}

function groupMemberPasses(member, course, statusFilter, search) {
  const attendance = memberCourseStatus(member.id, course);
  const payment = memberPaymentStatus(member.id, course);
  const statusOk = statusFilter === 'all'
    || statusFilter === attendance.key
    || statusFilter === payment.key
    || (statusFilter === 'needReply' && attendance.key === 'unknown')
    || (statusFilter === 'needCollect' && payment.key === 'unpaid');
  if (!statusOk) return false;
  if (!search) return true;
  const text = [member.name, member.role, member.groupName, member.area, member.farmName, member.farmType, member.specialty, member.phone, member.lineId, attendance.label, payment.label].join(' ').toLowerCase();
  return text.includes(search);
}

function updateGroupFilters() {
  const courseSelect = $('#groupCourseFilter');
  if (courseSelect) {
    const selected = groupContext.courseId || courseSelect.value || 'all';
    courseSelect.innerHTML = '<option value="all">全部課程 / 不指定</option>' + state.courses.map(course => `<option value="${course.id}">${formatDate(course.date)}｜${escapeHtml(course.title)}</option>`).join('');
    courseSelect.value = state.courses.some(course => course.id === selected) ? selected : 'all';
    groupContext.courseId = courseSelect.value;
  }
  const groupSelect = $('#groupNameFilter');
  if (groupSelect) {
    const selected = groupContext.groupName || groupSelect.value || 'all';
    groupSelect.innerHTML = '<option value="all">全部組別</option>' + getGroups().map(group => `<option value="${escapeHtml(group.groupName)}">${escapeHtml(group.groupName)}</option>`).join('');
    groupSelect.value = getGroups().some(group => group.groupName === selected) ? selected : 'all';
    groupContext.groupName = groupSelect.value;
  }
  const statusSelect = $('#groupStatusFilter');
  if (statusSelect) statusSelect.value = groupContext.status || 'all';
  const searchInput = $('#groupSearch');
  if (searchInput && document.activeElement !== searchInput) searchInput.value = groupContext.search || '';
}


function isOfficerRole(member) {
  return ['會長', '副會長', '組長', '幹部'].includes(String(member?.role || ''));
}

function officerMembers() {
  return state.members
    .filter(isOfficerRole)
    .sort((a, b) => roleWeight(a.role) - roleWeight(b.role) || String(a.groupName || '').localeCompare(String(b.groupName || ''), 'zh-Hant') || String(a.name || '').localeCompare(String(b.name || ''), 'zh-Hant'));
}

function officerCardHtml(member) {
  return `<article class="item-card officer-card">
    <div class="card-top">
      <div>
        <p class="eyebrow">${escapeHtml(member.groupName || '未分組')}｜${escapeHtml(member.area || '未設定地區')}</p>
        <div class="card-title">${escapeHtml(member.name || '未命名幹部')}</div>
      </div>
      <span class="badge green">${escapeHtml(member.role || '幹部')}</span>
    </div>
    <div class="card-meta">
      ⭐ ${escapeHtml(member.specialty || '未設定負責事項')}<br>
      ☎️ ${escapeHtml(member.phone || '未設定電話')}｜LINE：${escapeHtml(member.lineId || '未設定')}
    </div>
    ${member.bio ? `<p class="muted">${escapeHtml(member.bio)}</p>` : ''}
    <div class="card-actions">
      <button class="mini-btn" data-edit="member" data-id="${member.id}">編輯幹部</button>
      <button class="mini-btn danger-mini" data-delete="member" data-id="${member.id}">刪除</button>
    </div>
  </article>`;
}

function renderGroups() {
  if (!$('#groupCards')) return;
  updateGroupFilters();
  const courseId = $('#groupCourseFilter')?.value || groupContext.courseId || 'all';
  const groupName = $('#groupNameFilter')?.value || groupContext.groupName || 'all';
  const status = $('#groupStatusFilter')?.value || groupContext.status || 'all';
  const search = ($('#groupSearch')?.value || groupContext.search || '').trim().toLowerCase();
  groupContext = { courseId, groupName, status, search };
  const course = courseId === 'all' ? (nextCourse() || state.courses[0] || null) : getCourse(courseId);
  const groups = getGroups().filter(group => groupName === 'all' || group.groupName === groupName);
  const visibleGroups = groups.map(group => ({
    ...group,
    filteredMembers: group.members.filter(member => groupMemberPasses(member, course, status, search))
  })).filter(group => group.filteredMembers.length || (status === 'all' && !search));
  const officers = officerMembers().filter(member => {
    if (groupName !== 'all' && normalizeGroupName(member.groupName) !== normalizeGroupName(groupName)) return false;
    if (!search) return true;
    return [member.name, member.role, member.groupName, member.area, member.phone, member.lineId, member.specialty, member.bio]
      .join(' ').toLowerCase().includes(search);
  });
  const totals = visibleGroups.reduce((acc, group) => {
    const stats = groupCourseStats(group.members, course);
    acc.groups += 1;
    acc.members += group.members.length;
    acc.leaders += getGroupLeaders(group.members).length;
    acc.unknown += stats.unknown;
    acc.unpaid += stats.unpaid;
    acc.unpaidAmount += stats.unpaidAmount;
    return acc;
  }, { groups: 0, members: 0, leaders: 0, unknown: 0, unpaid: 0, unpaidAmount: 0 });
  $('#groupCourseHint').textContent = course ? `${formatDate(course.date)}｜${course.title}` : '尚未建立課程';
  $('#groupKpis').innerHTML = [
    ['幹部人數', officers.length],
    ['組別數', totals.groups],
    ['組員數', totals.members],
    ['未回覆', totals.unknown],
    ['未收餐費', `${totals.unpaid} 筆 / ${formatMoney(totals.unpaidAmount)}`]
  ].map(([label, value]) => `<div class="report-kpi"><span>${label}</span><strong>${escapeHtml(value)}</strong></div>`).join('');
  const officerSection = `<section class="officer-roster-panel">
    <div class="panel-head compact-head">
      <div><p class="eyebrow">Officer Roster</p><h3>幹部名單</h3><p class="muted">會長、副會長、組長與幹部集中管理；可直接新增、編輯或刪除。</p></div>
      <button class="primary-btn small" data-open-form="member">新增幹部</button>
    </div>
    <div class="card-grid officer-grid">${officers.length ? officers.map(officerCardHtml).join('') : '<div class="empty-box">尚未建立幹部資料，請按「新增幹部」建立。</div>'}</div>
  </section>`;
  const groupSection = `<section class="group-responsibility-panel">
    <div class="panel-head compact-head">
      <div><p class="eyebrow">Group Responsibility</p><h3>分組通知責任區</h3><p class="muted">下方保留組別通知輔助資料；主要入口名稱已改為「幹部名單」。</p></div>
    </div>
    <div class="group-card-list-inner">${visibleGroups.length ? visibleGroups.map(group => groupCardHtml(group, course)).join('') : '<div class="empty-box">目前沒有符合條件的組別或會員。</div>'}</div>
  </section>`;
  $('#groupCards').innerHTML = officerSection + groupSection;
}

function groupCardHtml(group, course) {
  const leaders = getGroupLeaders(group.members);
  const stats = groupCourseStats(group.members, course);
  const leaderText = leaders.length ? leaders.map(member => member.name).join('、') : '未指定組長';
  const progress = stats.total ? Math.round((stats.going + stats.leave) / stats.total * 100) : 0;
  return `<article class="group-card">
    <div class="card-top">
      <div>
        <p class="eyebrow">Group Responsibility</p>
        <div class="card-title">${escapeHtml(group.groupName)}</div>
        <div class="card-meta">👥 組員 ${group.members.length} 人｜🧑‍💼 負責幹部：${escapeHtml(leaderText)}</div>
      </div>
      <span class="badge ${stats.unknown ? 'red' : 'green'}">回覆 ${stats.going + stats.leave}/${stats.total}</span>
    </div>
    <div class="prep-progress"><div class="prep-progress-fill" style="width:${progress}%"></div></div>
    <div class="badge-row">
      <span class="badge green">出席 ${stats.going}</span>
      <span class="badge red">請假 ${stats.leave}</span>
      <span class="badge blue">未回覆 ${stats.unknown}</span>
      <span class="badge ${stats.unpaid ? 'red' : 'green'}">未收 ${stats.unpaid} / ${formatMoney(stats.unpaidAmount)}</span>
    </div>
    <div class="prep-actions admin-only">
      <button class="mini-btn" data-copy-group-notice="${escapeHtml(group.groupName)}">複製本組課前通知</button>
      <button class="mini-btn" data-copy-group-unreplied="${escapeHtml(group.groupName)}">複製未回覆催覆</button>
      <button class="mini-btn" data-copy-group-unpaid="${escapeHtml(group.groupName)}">複製未繳費提醒</button>
      <button class="mini-btn" data-copy-group-roster="${escapeHtml(group.groupName)}">複製組員名單</button>
    </div>
    <div class="group-member-list">
      ${group.filteredMembers.length ? group.filteredMembers.map(member => groupMemberRowHtml(member, course)).join('') : '<div class="empty-box">本組沒有符合目前篩選的會員。</div>'}
    </div>
  </article>`;
}

function groupMemberRowHtml(member, course) {
  const attendance = memberCourseStatus(member.id, course);
  const payment = memberPaymentStatus(member.id, course);
  const contact = appMode === 'admin' ? `｜☎️ ${escapeHtml(member.phone || '未設定')}｜LINE：${escapeHtml(member.lineId || '未設定')}` : '';
  const replyLink = '';
  return `<div class="group-member-row">
    <div>
      <strong>${escapeHtml(member.name)}</strong>
      <span>${escapeHtml(member.role || '會員')}｜${escapeHtml(member.area || '未設定地區')}｜${escapeHtml(member.specialty || '未設定專長')}${contact}</span>
    </div>
    <div class="group-member-status">
      <span class="badge ${attendance.className}">${attendance.label}</span>
      <span class="badge ${payment.className}">${payment.label}${payment.amount ? ` ${formatMoney(payment.amount)}` : ''}</span>
      ${replyLink}
    </div>
  </div>`;
}

function currentGroupCourse() {
  const courseId = groupContext.courseId || $('#groupCourseFilter')?.value || 'all';
  if (courseId === 'all') return nextCourse() || state.courses[0] || null;
  return getCourse(courseId);
}

function getGroupMembers(groupName) {
  return state.members.filter(member => normalizeGroupName(member.groupName) === normalizeGroupName(groupName));
}

function buildGroupRosterText(groupName) {
  const members = getGroupMembers(groupName);
  const leaders = getGroupLeaders(members).map(member => member.name).join('、') || '未指定';
  return [`【山線養豬讀書會｜${groupName} 組員名單】`, `負責幹部：${leaders}`, '', ...members.map((member, index) => `${index + 1}. ${member.name}｜${member.role || '會員'}｜${member.area || '未設定地區'}｜${member.phone || '未設定電話'}｜LINE：${member.lineId || '未設定'}`)].join('\n');
}

function buildGroupNoticeText(groupName, kind = 'notice') {
  const course = currentGroupCourse();
  const members = getGroupMembers(groupName);
  if (!course) return '尚未建立課程。';
  const location = getLocation(course.locationId);
  const leaders = getGroupLeaders(members).map(member => member.name).join('、') || '組長';
  const lines = [];
  if (kind === 'unreplied') {
    const unreplied = members.filter(member => memberCourseStatus(member.id, course).key === 'unknown');
    lines.push(`【山線養豬讀書會｜${groupName} 出席催覆】`);
    lines.push(`請 ${leaders} 協助提醒本組會員使用共用報名連結回覆：`);
    lines.push(`課程：${course.title}`);
    lines.push(`時間：${formatDate(course.date)} ${course.startTime || ''}-${course.endTime || ''}`);
    lines.push('');
    if (unreplied.length) {
      unreplied.forEach((member, index) => lines.push(`${index + 1}. ${member.name}`));
      lines.push('');
      lines.push(`共用報名連結：${buildReplyLink(course.id)}`);
    } else {
      lines.push('本組目前沒有未回覆會員。');
    }
    return lines.join('\n');
  }
  if (kind === 'unpaid') {
    const unpaid = members.filter(member => memberPaymentStatus(member.id, course).key === 'unpaid');
    lines.push(`【山線養豬讀書會｜${groupName} 餐費提醒】`);
    lines.push(`課程：${course.title}`);
    lines.push(`時間：${formatDate(course.date)} ${course.startTime || ''}-${course.endTime || ''}`);
    lines.push('');
    if (unpaid.length) {
      unpaid.forEach((member, index) => {
        const payment = memberPaymentStatus(member.id, course);
        lines.push(`${index + 1}. ${member.name}｜未收 ${formatMoney(payment.amount || course.unitMealFee || 0)}`);
      });
    } else {
      lines.push('本組目前沒有未繳費會員。');
    }
    return lines.join('\n');
  }
  lines.push(`【山線養豬讀書會｜${groupName} 課前通知】`);
  lines.push(`請 ${leaders} 協助通知本組會員。`);
  lines.push(`課程：${course.title}`);
  lines.push(`時間：${formatDate(course.date)} ${course.startTime || ''}-${course.endTime || ''}`);
  lines.push(`地點：${location?.name || '未設定地點'}`);
  if (location?.address) lines.push(`地址：${location.address}`);
  if (location?.googleMapUrl) lines.push(`Google 地圖：${location.googleMapUrl}`);
  const parking = course.parkingNote || location?.parkingNote || '';
  if (parking) lines.push(`停車：${parking}`);
  if (course.fee || course.unitMealFee) lines.push(`餐費：${course.fee || `每人 ${course.unitMealFee} 元`}`);
  lines.push('');
  lines.push('本組回覆狀態：');
  members.forEach((member, index) => {
    const attendance = memberCourseStatus(member.id, course);
    lines.push(`${index + 1}. ${member.name}｜${attendance.label}`);
  });
  lines.push('');
  lines.push(`共用報名連結：${buildReplyLink(course.id)}`);
  return lines.join('\n');
}

function exportGroupCsv() {
  const course = currentGroupCourse();
  const rows = [['組別','會員','身份','地區','電話','LINE','出席狀態','收款狀態','應收金額','課程']];
  getGroups().forEach(group => {
    group.members.forEach(member => {
      const attendance = memberCourseStatus(member.id, course);
      const payment = memberPaymentStatus(member.id, course);
      rows.push([group.groupName, member.name, member.role || '', member.area || '', member.phone || '', member.lineId || '', attendance.label, payment.label, payment.amount || '', course?.title || '']);
    });
  });
  downloadText(`山線養豬讀書會_組別責任區_${new Date().toISOString().slice(0,10)}.csv`, toCsv(rows), 'text/csv;charset=utf-8');
}


function renderLocations() {
  const search = ($('#locationSearch')?.value || '').trim().toLowerCase();
  let list = [...state.locations].sort((a, b) => String(a.name).localeCompare(String(b.name), 'zh-Hant'));
  if (search) list = list.filter(location => [location.name, location.address, location.phone, location.parkingAvailable].join(' ').toLowerCase().includes(search));
  $('#locationCards').innerHTML = list.length ? list.map(location => {
    const adminActions = appMode === 'admin' ? `<button class="mini-btn" data-edit="location" data-id="${location.id}">編輯</button><button class="mini-btn" data-delete="location" data-id="${location.id}">刪除</button>` : '';
    const parking = location.parkingAvailable || '未確認';
    return `<article class="item-card location-card-simple">
      <div class="card-top">
        <div>
          <p class="eyebrow">上課地點</p>
          <div class="card-title">${escapeHtml(location.name || '未命名地點')}</div>
        </div>
        <span class="badge ${parking === '有' ? 'green' : parking === '無' ? 'red' : 'blue'}">${escapeHtml(parking)}</span>
      </div>
      <div class="location-line">📍 ${escapeHtml(location.address || '未設定地址')}</div>
      <div class="location-line">☎️ ${escapeHtml(location.phone || '未設定電話')}</div>
      <div class="card-actions compact-actions">
        ${location.googleMapUrl ? `<a class="mini-btn" href="${escapeHtml(location.googleMapUrl)}" target="_blank" rel="noopener">Google 地圖</a>` : ''}
        ${adminActions}
      </div>
    </article>`;
  }).join('') : '<div class="empty-box">找不到符合條件的地點。</div>';
}

function normalizeAttendance(attendance = {}) {
  return {
    going: Array.isArray(attendance.going) ? attendance.going : [],
    leave: Array.isArray(attendance.leave) ? attendance.leave : [],
    unknown: Array.isArray(attendance.unknown) ? attendance.unknown : []
  };
}

function uniqueIds(list = []) {
  return [...new Set(list.map(id => String(id || '').trim()).filter(Boolean))];
}

function nowLocalText() {
  return new Date().toLocaleString('zh-TW', { hour12: false });
}

function normalizedCourseDateKey(value, courseYear = '') {
  const parts = parseCourseDateParts(value, courseYear);
  if (!parts) return String(value || '').trim();
  return `${parts.year}-${String(parts.month).padStart(2, '0')}-${String(parts.day).padStart(2, '0')}`;
}

function isCourseDateChanged(existingCourse, nextData) {
  if (!existingCourse) return false;
  const oldKey = normalizedCourseDateKey(existingCourse.date, existingCourse.year);
  const newKey = normalizedCourseDateKey(nextData.date, nextData.year || existingCourse.year);
  return Boolean(oldKey && newKey && oldKey !== newKey);
}

function courseReconfirmPendingMemberIds(course) {
  const validIds = new Set(state.members.map(member => member.id));
  return uniqueIds(course?.reconfirmPendingMemberIds || []).filter(id => validIds.has(id));
}

function courseReconfirmPendingSignupRows(course) {
  return participantSignupRows(course).filter(item => Boolean(item.needsReconfirm));
}

function courseNeedsDateReconfirm(course) {
  return String(course?.reconfirmRequired || 'no') === 'yes' && (courseReconfirmPendingMemberIds(course).length > 0 || courseReconfirmPendingSignupRows(course).length > 0);
}

function refreshCourseReconfirmStatus(course) {
  if (!course) return;
  course.reconfirmPendingMemberIds = courseReconfirmPendingMemberIds(course);
  if (course.reconfirmPendingMemberIds.length || courseReconfirmPendingSignupRows(course).length) {
    course.reconfirmRequired = 'yes';
    return;
  }
  if (course.reconfirmRequired === 'yes') {
    course.reconfirmRequired = 'no';
    course.reconfirmResolvedAt = nowLocalText();
  }
}

function markCourseDateChangeForReconfirm(existingCourse, nextData) {
  if (!existingCourse || !isCourseDateChanged(existingCourse, nextData)) return false;
  const beforeAttendance = normalizeAttendance(existingCourse.attendance);
  const pendingMemberIds = uniqueIds([...beforeAttendance.going, ...beforeAttendance.leave]);
  const allMemberIds = state.members.map(member => member.id);
  const now = nowLocalText();
  nextData.attendanceBeforeReconfirm = clone(existingCourse.attendance || beforeAttendance);
  nextData.participantSignupsBeforeReconfirm = clone(existingCourse.participantSignups || []);
  nextData.reconfirmRequired = 'yes';
  nextData.reconfirmReason = '上課日期異動';
  nextData.reconfirmAt = now;
  nextData.reconfirmResolvedAt = '';
  nextData.reconfirmOriginalDate = existingCourse.date || '';
  nextData.reconfirmNewDate = nextData.date || '';
  nextData.reconfirmOriginalStartTime = existingCourse.startTime || '';
  nextData.reconfirmOriginalEndTime = existingCourse.endTime || '';
  nextData.reconfirmPendingMemberIds = pendingMemberIds;
  nextData.attendance = { going: [], leave: [], unknown: allMemberIds };
  nextData.participantSignups = (existingCourse.participantSignups || []).map(item => ({
    ...clone(item),
    previousStatus: item.status || 'going',
    previousCount: item.count || item.participantCount || '0',
    status: 'unknown',
    count: '0',
    needsReconfirm: true,
    reconfirmAt: now,
    updatedAt: now
  }));
  nextData.participantCount = '';
  nextData.updatedAt = now;
  return true;
}

function courseReconfirmNoticeHtml(course) {
  if (!courseNeedsDateReconfirm(course)) return '';
  const memberPending = courseReconfirmPendingMemberIds(course).length;
  const signupPending = courseReconfirmPendingSignupRows(course).length;
  const oldDate = course.reconfirmOriginalDate ? formatDate(course.reconfirmOriginalDate) : '原日期未記錄';
  const newDate = formatDate(course.date || course.reconfirmNewDate || '');
  return `<div class="course-reconfirm-notice">
    ⚠️ 上課日期已由 ${escapeHtml(oldDate)} 改為 ${escapeHtml(newDate)}，需要重新確認出席。<br>
    <small>只改晚上 6:00 / 6:30 等上課時間不會要求重新回覆；目前待重新確認：會員 ${memberPending} 位、公開登記 ${signupPending} 筆。</small>
  </div>`;
}

function toPositiveInteger(value, fallback = 0) {
  const parsed = Number(String(value ?? '').trim());
  if (!Number.isFinite(parsed)) return fallback;
  return Math.max(0, Math.floor(parsed));
}

function participantSignupRows(course) {
  return Array.isArray(course?.participantSignups) ? course.participantSignups : [];
}

function publicSignupStats(course) {
  const rows = participantSignupRows(course).map(item => ({ ...item, status: item.status || 'going' }));
  const goingRows = rows.filter(item => item.status === 'going');
  const leaveRows = rows.filter(item => item.status === 'leave');
  const unknownRows = rows.filter(item => item.status === 'unknown');
  const goingTotal = goingRows.reduce((sum, item) => sum + toPositiveInteger(item.count ?? item.participantCount, 0), 0);
  const unknownTotal = unknownRows.reduce((sum, item) => sum + toPositiveInteger(item.count ?? item.participantCount, 0), 0);
  const lastUpdated = rows
    .map(item => item.updatedAt || item.createdAt || '')
    .filter(Boolean)
    .sort()
    .at(-1) || '';
  return { rows, goingRows, leaveRows, unknownRows, goingTotal, unknownTotal, lastUpdated };
}

function publicSignupTotal(course) {
  return publicSignupStats(course).goingTotal;
}

function memberAttendanceGoingCount(course) {
  return normalizeAttendance(course?.attendance).going.length;
}

function combinedEstimatedParticipants(course) {
  const memberGoing = memberAttendanceGoingCount(course);
  const publicGoing = publicSignupTotal(course);
  const manualValue = String(course?.participantCount ?? '').trim();
  const manual = manualValue !== '' ? toPositiveInteger(manualValue, 0) : 0;
  // 若有會員端牧場/姓名登記，代表這場以公開登記為主；若還有會員名單回覆，管理端表格會分開顯示，總估算加總以利訂桌。
  if (publicGoing > 0 && memberGoing > 0) return publicGoing + memberGoing;
  if (publicGoing > 0) return publicGoing;
  if (manualValue !== '') return manual;
  return memberGoing;
}

function numericParticipantCount(course) {
  const value = String(course?.participantCount ?? '').trim();
  const parsed = Number(value);
  if (value !== '' && Number.isFinite(parsed) && parsed >= 0) return Math.floor(parsed);
  const signupTotal = publicSignupTotal(course);
  if (signupTotal > 0) return signupTotal;
  return memberAttendanceGoingCount(course);
}

function participantLabel(course) {
  const value = String(course?.participantCount ?? '').trim();
  const signupTotal = publicSignupTotal(course);
  if (signupTotal > 0) return `${signupTotal}（牧場/姓名登記）`;
  if (value !== '') return `${value}（手動）`;
  return `${memberAttendanceGoingCount(course)}（依會員名單）`;
}


function attendanceMemberChip(memberId, statusLabel = '') {
  const member = getMember(memberId);
  if (!member) return '';
  const meta = [member.farmName || '', member.area || '', member.role || '會員'].filter(Boolean).join('｜');
  return `<span class="reply-person-chip member-chip"><strong>${escapeHtml(member.name || '未命名會員')}</strong>${meta ? `<small>${escapeHtml(meta)}</small>` : ''}${statusLabel ? `<em>${escapeHtml(statusLabel)}</em>` : ''}</span>`;
}

function attendancePublicSignupChip(item) {
  const status = publicSignupStatusLabel(item.status || 'going');
  const count = toPositiveInteger(item.count ?? item.participantCount, 0);
  const contact = [item.contactName || '', item.phone || ''].filter(Boolean).join('｜');
  const note = item.note ? `｜${item.note}` : '';
  return `<span class="reply-person-chip public-chip"><strong>${escapeHtml(item.farmOrName || item.contactName || '未填姓名')}</strong><small>${escapeHtml(contact || '會員端公開回覆')}${note ? escapeHtml(note) : ''}</small><em>${escapeHtml(status)}${item.status === 'going' ? `｜${count} 人` : ''}</em>${item.needsReconfirm ? '<b class="badge red">待重回覆</b>' : ''}</span>`;
}

function replyGroupHtml(title, countText, items, emptyText = '目前尚無名單') {
  return `<div class="attendance-reply-group">
    <div class="attendance-reply-group-head"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(String(countText))}</span></div>
    <div class="reply-person-list">${items.length ? items.join('') : `<span class="muted small-text">${escapeHtml(emptyText)}</span>`}</div>
  </div>`;
}

function renderAttendanceReplyDetails() {
  // PKG094：各課程回覆名單不再顯示在統計頁最下方，改由點擊課程日期開啟彈窗。
  const box = $('#attendanceReplyDetails');
  if (box) box.innerHTML = '';
}

function attendanceMemberReplyRow(memberId, statusText) {
  const member = getMember(memberId);
  if (!member) return '';
  const farm = member.farmName || member.groupName || '未填牧場/組別';
  const meta = [member.area || '', member.role || '會員', member.phone ? `電話 ${member.phone}` : ''].filter(Boolean).join('｜');
  return `<div class="attendance-reply-line member-line">
    <span class="reply-line-status">${escapeHtml(statusText)}</span>
    <strong>${escapeHtml(member.name || '未命名會員')}</strong>
    <span>${escapeHtml(farm)}</span>
    <small>${escapeHtml(meta || '會員名單')}</small>
  </div>`;
}

function attendancePublicSignupRow(item, statusText) {
  const count = toPositiveInteger(item.count ?? item.participantCount, 0);
  const contact = [item.contactName || '', item.phone || '', item.lineId ? `LINE ${item.lineId}` : ''].filter(Boolean).join('｜');
  const note = [contact || '會員端公開回覆', item.note || ''].filter(Boolean).join('｜');
  return `<div class="attendance-reply-line public-line">
    <span class="reply-line-status">${escapeHtml(statusText)}</span>
    <strong>${escapeHtml(item.farmOrName || item.contactName || '未填姓名')}</strong>
    <span>${statusText === '會出席' ? `${escapeHtml(String(count || 1))} 人` : '不計人數'}</span>
    <small>${escapeHtml(note)}</small>
    ${item.needsReconfirm ? '<em class="badge red">待重回覆</em>' : ''}
  </div>`;
}

function attendanceReplyLineSection(title, summary, rows, emptyText) {
  return `<section class="attendance-reply-modal-section">
    <div class="attendance-reply-modal-section-head">
      <h4>${escapeHtml(title)}</h4>
      <span>${escapeHtml(summary)}</span>
    </div>
    <div class="attendance-reply-line-list">
      ${rows.length ? rows.join('') : `<div class="empty-box small-empty">${escapeHtml(emptyText)}</div>`}
    </div>
  </section>`;
}

function pendingAttendanceMemberIds(course, attendance) {
  const replied = uniqueIds([...(attendance.going || []), ...(attendance.leave || [])]);
  const explicitUnknown = Array.isArray(attendance.unknown) ? attendance.unknown.filter(id => !replied.includes(id)) : [];
  if (explicitUnknown.length) return explicitUnknown;
  return state.members.map(member => member.id).filter(id => !replied.includes(id));
}

function openAttendanceReplyModal(courseId) {
  if (appMode !== 'admin') {
    showToast('會員端僅可查看自己的回覆與課表。');
    return;
  }
  const course = getCourse(courseId);
  if (!course) return;
  const a = normalizeAttendance(course.attendance);
  const ps = publicSignupStats(course);
  const pendingIds = pendingAttendanceMemberIds(course, a);
  const memberGoingRows = a.going.map(id => attendanceMemberReplyRow(id, '會出席')).filter(Boolean);
  const publicGoingRows = ps.goingRows.map(item => attendancePublicSignupRow(item, '會出席'));
  const memberLeaveRows = a.leave.map(id => attendanceMemberReplyRow(id, '請假')).filter(Boolean);
  const publicLeaveRows = ps.leaveRows.map(item => attendancePublicSignupRow(item, '請假'));
  const memberUnknownRows = pendingIds.map(id => attendanceMemberReplyRow(id, '未回覆')).filter(Boolean);
  const publicUnknownRows = ps.unknownRows.map(item => attendancePublicSignupRow(item, '未確定'));
  const goingPeople = a.going.length + ps.goingTotal;
  const leaveCount = memberLeaveRows.length + publicLeaveRows.length;
  const unknownCount = memberUnknownRows.length + publicUnknownRows.length;
  const lastUpdated = ps.lastUpdated || course.updatedAt || '尚無更新時間';

  $('#modalEyebrow').textContent = 'Attendance Reply List';
  $('#modalTitle').textContent = `${formatDate(course.date)}｜${course.title || '課程回覆名單'}`;
  const form = $('#dynamicForm');
  form.dataset.type = '';
  form.dataset.id = '';
  form.className = 'attendance-reply-modal-content';
  form.innerHTML = `
    <div class="attendance-reply-modal-summary">
      <div><span>總估算出席</span><strong>${escapeHtml(String(combinedEstimatedParticipants(course)))}</strong><small>含會員名單與公開報名</small></div>
      <div><span>會出席</span><strong>${escapeHtml(String(goingPeople))}</strong><small>會員 ${a.going.length} / 公開 ${ps.goingRows.length} 筆</small></div>
      <div><span>請假 / 不參加</span><strong>${escapeHtml(String(leaveCount))}</strong><small>不計入出席</small></div>
      <div><span>未回覆 / 未確定</span><strong>${escapeHtml(String(unknownCount))}</strong><small>最後更新：${escapeHtml(lastUpdated)}</small></div>
    </div>
    ${courseNeedsDateReconfirm(course) ? courseReconfirmNoticeHtml(course) : ''}
    ${attendanceReplyLineSection('會出席名單', `${a.going.length} 位會員 / ${ps.goingRows.length} 筆公開回覆 / ${ps.goingTotal} 人`, [...memberGoingRows, ...publicGoingRows], '目前尚無會出席回覆')}
    ${attendanceReplyLineSection('請假 / 不參加名單', `${leaveCount} 筆`, [...memberLeaveRows, ...publicLeaveRows], '目前尚無請假資料')}
    ${attendanceReplyLineSection('未回覆 / 未確定', `${unknownCount} 筆`, [...memberUnknownRows, ...publicUnknownRows], '目前沒有未回覆或未確定資料')}
    <div class="form-actions">
      <button type="button" class="ghost-btn" id="cancelForm">關閉</button>
      <button type="button" class="primary-btn" data-reply-course="${escapeHtml(course.id)}">開啟回覆管理</button>
    </div>`;
  $('#modalBackdrop').hidden = false;
  $('#cancelForm')?.addEventListener('click', closeModal);
}


function renderAttendance() {
  const tbody = $('#attendanceTable tbody');
  const courses = sortedCoursesRecentFirst();
  const summary = courses.reduce((acc, course) => {
    const a = normalizeAttendance(course.attendance);
    const ps = publicSignupStats(course);
    acc.memberGoing += a.going.length;
    acc.publicGoing += ps.goingTotal;
    acc.publicRows += ps.rows.length;
    acc.leave += a.leave.length + ps.leaveRows.length;
    acc.unknown += a.unknown.length + ps.unknownRows.length;
    acc.estimated += combinedEstimatedParticipants(course);
    return acc;
  }, { memberGoing: 0, publicGoing: 0, publicRows: 0, leave: 0, unknown: 0, estimated: 0 });
  const summaryGrid = $('#attendanceSummaryGrid');
  if (summaryGrid) {
    summaryGrid.innerHTML = [
      ['總估算人數', summary.estimated, '會員名單與牧場/姓名登記分開統計後彙整'],
      ['會員名單會出席', summary.memberGoing, '由會員資料庫內的出席回覆計算'],
      ['牧場/姓名登記', `${summary.publicGoing} 人 / ${summary.publicRows} 筆`, '由會員端報名表加總，只計入「會出席」'],
      ['請假 / 未確定', `${summary.leave} / ${summary.unknown}`, '請假自動不計入參加人數']
    ].map(([label, value, note]) => `<div class="attendance-kpi"><span>${label}</span><strong>${value}</strong><small>${note}</small></div>`).join('');
  }
  tbody.innerHTML = courses.map(course => {
    const a = normalizeAttendance(course.attendance);
    const ps = publicSignupStats(course);
    const memberTotal = state.members.length || (a.going.length + a.leave.length + a.unknown.length);
    const rate = memberTotal ? Math.round((a.going.length / memberTotal) * 100) : 0;
    const action = appMode === 'admin'
      ? '<span class="muted small-text">統計檢視</span>'
      : `<button class="mini-btn" data-reply-course="${course.id}">我要回覆</button>`;
    const totalEstimate = combinedEstimatedParticipants(course);
    const lastUpdated = ps.lastUpdated || course.updatedAt || '';
    return `<tr class="attendance-click-row" data-attendance-replies="${escapeHtml(course.id)}">
      <td><button type="button" class="link-cell-btn attendance-date-btn" data-attendance-replies="${escapeHtml(course.id)}">${formatDate(course.date)}</button></td>
      <td><strong>${escapeHtml(course.title)}</strong><br><span class="muted small-text">${escapeHtml(course.startTime || '')}-${escapeHtml(course.endTime || '')}｜${escapeHtml(computedCourseStatusLabel(course))}</span>${courseNeedsDateReconfirm(course) ? '<br><span class="badge red">日期異動待重新確認</span>' : ''}</td>
      <td><strong>${escapeHtml(String(totalEstimate))}</strong><br><span class="muted small-text">${escapeHtml(participantLabel(course))}</span></td>
      <td>${a.going.length}</td>
      <td>${ps.goingTotal} 人 / ${ps.goingRows.length} 筆</td>
      <td>${a.leave.length + ps.leaveRows.length}</td>
      <td>${a.unknown.length + ps.unknownRows.length}</td>
      <td>${rate}%<br><span class="muted small-text">${escapeHtml(lastUpdated || '尚無公開登記')}</span></td>
      <td>${appMode === 'admin' ? `<button class="mini-btn" data-attendance-replies="${escapeHtml(course.id)}">查看名單</button>` : action}</td>
    </tr>`;
  }).join('') || '<tr><td colspan="9">尚未建立課程。</td></tr>';
  renderAttendanceReplyDetails();
  renderReplyLinkPanel();
}

function renderReplyLinkPanel() {
  const panel = $('#replyLinkPanel');
  if (!panel) return;
  const courses = replyAvailableCourses();
  if (!courses.length) {
    panel.innerHTML = '<div class="empty-box">目前沒有可回覆的未上課課程。</div>';
    return;
  }
  panel.innerHTML = courses.map(course => {
    const url = buildReplyLink(course.id);
    return `<div class="reply-course-block">
      <div class="card-top">
        <div>
          <p class="eyebrow">${formatDate(course.date)} ${escapeHtml(course.startTime || '')}-${escapeHtml(course.endTime || '')}</p>
          <div class="card-title">${escapeHtml(course.title)}</div>
        </div>
        <button class="mini-btn" data-copy-link="${escapeHtml(url)}">複製共用報名連結</button>
      </div>
      <div class="reply-member-row common-signup-link">
        <strong>LINE 群組共用連結</strong>
        <input class="copy-input" value="${escapeHtml(url)}" readonly />
        <button class="mini-btn" data-copy-link="${escapeHtml(url)}">複製</button>
      </div>
      <div class="small-note">一般會員點開後自行填寫牧場名稱 / 姓名、是否參加與參加人數；幹部或會長則使用管理端密碼進入後台編輯資料。</div>
    </div>`;
  }).join('');
}

function buildReplyLink(courseId, memberId = '', token = '') {
  const base = appBaseUrl();
  const params = new URLSearchParams({ mode: 'reply', courseId });
  if (memberId) params.set('memberId', memberId);
  if (token) params.set('token', token);
  appendPublicSyncParams(params);
  return `${base}?${params.toString()}`;
}


function publicSignupProgressHtml(result) {
  if (!result) return '';
  const state = result.syncState || 'local';
  const percent = state === 'synced' ? 100 : state === 'syncing' ? 72 : state === 'failed' ? 72 : 34;
  const title = state === 'synced'
    ? '雲端上傳成功，管理端可以抓到這筆資料'
    : state === 'failed'
      ? '雲端上傳失敗，管理端暫時抓不到這筆資料'
      : state === 'syncing'
        ? '正在上傳 Google Sheet，請先不要關閉頁面'
        : '尚未完成雲端上傳';
  const detail = state === 'synced'
    ? `Google Sheet 已回傳成功。最後同步：${escapeHtml(result.syncedAt || '')}`
    : state === 'failed'
      ? escapeHtml(result.errorMessage || '資料只暫存在此手機，本次尚未成功上傳雲端。')
      : state === 'syncing'
        ? '資料已暫存本機，正在送到 Apps Script / Google Sheet。完成前不算管理端已收到。'
        : '目前沒有設定 Google Sheet 同步，管理端無法從雲端抓到這筆資料。';
  return `<div class="signup-confirmation ${state === 'failed' || state === 'local' ? 'warn' : ''}">
        <strong>${escapeHtml(title)}</strong>
        <span>課程：${escapeHtml(result.courseTitle || '')}</span>
        <span>時間：${escapeHtml(result.courseTime || '')}</span>
        <span>牧場 / 姓名：${escapeHtml(result.farmOrName || '')}｜參加人數：${escapeHtml(String(result.count || 0))} 人｜狀態：${escapeHtml(publicSignupStatusLabel(result.status || 'going'))}</span>
        <div class="cloud-upload-progress" aria-label="出席回覆上傳進度">
          <div class="cloud-upload-bar"><i style="width:${percent}%"></i></div>
          <div class="cloud-upload-steps">
            <span class="done">1 本機暫存</span>
            <span class="${state === 'syncing' || state === 'synced' || state === 'failed' ? 'done' : ''}">2 上傳雲端</span>
            <span class="${state === 'synced' ? 'done' : state === 'failed' ? 'fail' : ''}">3 Google Sheet 確認</span>
          </div>
        </div>
        <small>${detail}</small>
      </div>`;
}

function renderReply() {
  const box = $('#replyStatusBox');
  const grid = $('#replyFormGrid');
  if (!box || !grid) return;
  const availableCourses = replyAvailableCourses();
  const requestedCourse = getCourse(replyContext.courseId);
  const currentCourse = requestedCourse && isCourseOpenForReply(requestedCourse) ? requestedCourse : (availableCourses[0] || null);

  if (appMode !== 'admin') {
    if (!availableCourses.length) {
      box.innerHTML = '<strong>會員端報名表</strong><br><span class="muted">目前沒有尚未上課、可開放回覆的課程。</span>';
      grid.innerHTML = '<div class="empty-box">目前沒有可登記課程；已完成、已取消或時間已過的課程不會出現在上課時段選單。</div>';
      return;
    }
    const courseOptions = availableCourses.map(course => `<option value="${course.id}" ${currentCourse?.id === course.id ? 'selected' : ''}>${formatDate(course.date)} ${escapeHtml(course.startTime || '')}-${escapeHtml(course.endTime || '')}｜${escapeHtml(course.title)}</option>`).join('');
    const location = currentCourse ? getLocation(currentCourse.locationId) : null;
    const stats = currentCourse ? publicSignupStats(currentCourse) : { goingTotal: 0, goingRows: [], rows: [] };
    const success = lastPublicSignupResult && lastPublicSignupResult.courseId === currentCourse?.id ? lastPublicSignupResult : null;
    box.innerHTML = currentCourse
      ? `<strong>會員端報名表</strong><br>${formatDate(currentCourse.date)} ${escapeHtml(currentCourse.startTime || '')}-${escapeHtml(currentCourse.endTime || '')}｜${escapeHtml(currentCourse.title)}${location ? `<br>地點：${escapeHtml(location.name || '')}` : ''}<br><span class="muted">${escapeHtml(publicSyncBadgeText())}</span>`
      : '請先建立課程資料。';
    const successBox = publicSignupProgressHtml(success);
    grid.innerHTML = `<div class="member-signup-layout simplified-signup">
      <div class="member-signup-form">
        ${successBox}
        <div class="signup-step full"><b>1</b><span>選擇課程與上課時段</span></div>
        <div class="form-field full">
          <label for="replyPublicCourse">上課時段</label>
          <select id="replyPublicCourse" class="form-control">${courseOptions || '<option value="">尚無可登記課程</option>'}</select>
        </div>
        <div class="signup-step full"><b>2</b><span>填寫牧場或姓名與人數</span></div>
        <div class="form-field full">
          <label for="replyFarmOrName">牧場名稱 / 姓名 <span class="required-star">*</span></label>
          <input id="replyFarmOrName" class="form-control" placeholder="牧場名稱 / 姓名" autocomplete="name" />
          <small class="field-help">同一場課、同一牧場 / 姓名重複送出時，系統會更新原本資料。</small>
        </div>
        <div class="form-field">
          <label for="replyPublicStatus">出席狀態</label>
          <select id="replyPublicStatus" class="form-control">
            <option value="going">會出席</option>
            <option value="leave">請假 / 不參加</option>
            <option value="unknown">尚未確定</option>
          </select>
          <small class="field-help">請選擇是否參加本次課程。</small>
        </div>
        <div class="form-field">
          <label for="replyParticipantCount">參加人數</label>
          <input id="replyParticipantCount" class="form-control" type="number" min="1" step="1" inputmode="numeric" value="1" placeholder="請輸入人數" />
          <small class="field-help" id="replyCountHelp">會出席時至少 1 人；請假或尚未確定會自動不計入人數。</small>
        </div>
        <div class="signup-step full"><b>3</b><span>留下聯絡資料，方便幹部確認</span></div>
        <div class="form-field">
          <label for="replyContactName">聯絡人姓名</label>
          <input id="replyContactName" class="form-control" placeholder="可選填" />
          <small class="field-help">可填實際聯絡人姓名。</small>
        </div>
        <div class="form-field">
          <label for="replyPhone">電話 / LINE</label>
          <input id="replyPhone" class="form-control" placeholder="可選填，僅供幹部確認" />
          <small class="field-help">可填電話或 LINE，方便幹部確認。</small>
        </div>
        <div class="form-field full">
          <label for="replyPublicNote">備註</label>
          <textarea id="replyPublicNote" class="form-control" rows="3" placeholder="例如：素食 1 位、會晚到、同行人數說明等"></textarea>
        </div>
        <div class="form-actions full sticky-signup-actions">
          <button type="button" class="ghost-btn" id="reloadFromCloud">先從雲端更新資料</button>
          <button type="button" class="primary-btn" id="submitPublicSignup" ${publicSignupSubmitting ? 'disabled' : ''}>${publicSignupSubmitting ? '正在上傳雲端...' : '送出並立即回傳'}</button>
        </div>
      </div>
      <div class="member-signup-side">
        <div class="signup-summary-card">
          <span>目前本場已登記</span>
          <strong>${escapeHtml(String(stats.goingTotal || numericParticipantCount(currentCourse)))}</strong>
          <small>${stats.goingRows.length ? `牧場 / 姓名登記 ${stats.goingRows.length} 筆，只計入「會出席」人數` : '尚未有會員端登記，暫以課程人數或會員名單估算'}</small>
        </div>
        <div class="notice"><strong>防呆規則：</strong>牧場 / 姓名不可空白；會出席至少 1 人；請假 / 不參加與尚未確定會自動以 0 人計算。</div>
        ${location?.googleMapUrl ? `<a class="mini-btn map-large" href="${escapeHtml(location.googleMapUrl)}" target="_blank" rel="noopener">開啟 Google 地圖</a>` : ''}
      </div>
    </div>`;
    window.setTimeout(applyPublicStatusCountGuard, 0);
    return;
  }

  const courseOptions = availableCourses.map(course => `<option value="${course.id}" ${currentCourse?.id === course.id ? 'selected' : ''}>${formatDate(course.date)}｜${escapeHtml(course.title)}</option>`).join('');
  const memberOptions = state.members.map(member => `<option value="${member.id}" ${replyContext.memberId === member.id ? 'selected' : ''}>${escapeHtml(member.name)}｜${escapeHtml(member.role || '會員')}</option>`).join('');
  if (!availableCourses.length) {
    box.innerHTML = '<strong>會員出席回覆</strong><br><span class="muted">目前沒有尚未上課、可回覆的課程。</span>';
    grid.innerHTML = '<div class="empty-box">已完成、已取消或上課時間已過的課程不會出現在課程選單；若要查看歷史統計，請到「出席統計」或「年度課程表」。</div>';
    return;
  }
  const currentMember = getMember(replyContext.memberId) || state.members[0] || null;
  const current = currentCourse && currentMember ? getMemberAttendanceStatus(currentCourse, currentMember.id) : 'unknown';
  const chosenStatus = replyContext.status || current || 'going';
  const signupList = participantSignupRows(currentCourse);
  const ps = publicSignupStats(currentCourse);
  box.innerHTML = currentCourse && currentMember
    ? `<strong>${escapeHtml(currentMember.name)}</strong> 正在回覆：<strong>${escapeHtml(currentCourse.title)}</strong><br>${formatDate(currentCourse.date)} ${escapeHtml(currentCourse.startTime || '')}-${escapeHtml(currentCourse.endTime || '')}`
    : '請先建立課程與會員資料。';
  grid.innerHTML = `<div class="form-field full">
      <label for="replyCourse">課程</label>
      <select id="replyCourse" class="form-control">${courseOptions || '<option value="">尚無課程</option>'}</select>
    </div>
    <div class="form-field">
      <label for="replyMember">會員</label>
      <select id="replyMember" class="form-control">${memberOptions || '<option value="">尚無會員</option>'}</select>
    </div>
    <div class="form-field">
      <label for="replyToken">會員 Token（舊版個人連結用）</label>
      <input id="replyToken" class="form-control" value="${escapeHtml(replyContext.token || '')}" placeholder="舊版個人連結才會自動帶入" />
    </div>
    <div class="form-field full">
      <label for="replyStatus">出席狀態</label>
      <select id="replyStatus" class="form-control">
        <option value="going" ${chosenStatus === 'going' ? 'selected' : ''}>會出席 / 已出席</option>
        <option value="leave" ${chosenStatus === 'leave' ? 'selected' : ''}>請假</option>
        <option value="unknown" ${chosenStatus === 'unknown' ? 'selected' : ''}>尚未確定</option>
      </select>
    </div>
    <div class="form-actions full">
      <button type="button" class="ghost-btn" id="reloadFromCloud">先從雲端更新資料</button>
      <button type="button" class="primary-btn" id="submitReply">送出回覆</button>
    </div>
    <div class="form-field full">
      <div class="public-signup-admin-box">
        <div class="panel-head compact-head">
          <div><p class="eyebrow">Member Public Signups</p><h3>會員端牧場 / 姓名參加人數登記</h3></div>
          <span class="badge blue">會出席 ${escapeHtml(String(ps.goingTotal))} 人 / ${escapeHtml(String(ps.goingRows.length))} 筆</span>
        </div>
        <div class="attendance-breakdown-row">
          <span>會員名單會出席：<strong>${normalizeAttendance(currentCourse?.attendance).going.length}</strong></span>
          <span>牧場/姓名登記：<strong>${ps.goingTotal}</strong></span>
          <span>請假：<strong>${ps.leaveRows.length}</strong></span>
          <span>尚未確定：<strong>${ps.unknownRows.length}</strong></span>
        </div>
        ${signupList.length ? `<div class="table-wrap"><table class="data-table compact-table"><thead><tr><th>牧場 / 姓名</th><th>聯絡人</th><th>人數</th><th>狀態</th><th>電話/LINE</th><th>備註</th><th>最後更新</th><th>操作</th></tr></thead><tbody>${signupList.map(item => `<tr><td><strong>${escapeHtml(item.farmOrName || '')}</strong></td><td>${escapeHtml(item.contactName || '')}</td><td>${escapeHtml(item.count || '0')}</td><td>${escapeHtml(publicSignupStatusLabel(item.status))}${item.needsReconfirm ? '<br><span class="badge red">日期異動待確認</span>' : ''}</td><td>${escapeHtml(item.phone || '')}</td><td>${escapeHtml(item.note || '')}</td><td>${escapeHtml(item.updatedAt || item.createdAt || '')}</td><td><button class="tiny-btn danger-mini" data-delete-public-signup="${escapeHtml(currentCourse?.id || '')}|${escapeHtml(item.id)}">刪除</button></td></tr>`).join('')}</tbody></table></div>` : '<div class="empty-box">此課程目前尚無會員端參加人數登記。</div>'}
      </div>
    </div>`;
}

function applyPublicStatusCountGuard() {
  const statusEl = $('#replyPublicStatus');
  const countEl = $('#replyParticipantCount');
  const helpEl = $('#replyCountHelp');
  if (!statusEl || !countEl) return;
  if (statusEl.value === 'going') {
    countEl.disabled = false;
    countEl.min = '1';
    if (!countEl.value || Number(countEl.value) < 1) countEl.value = '1';
    if (helpEl) helpEl.textContent = '會出席時至少 1 人；若同一牧場 / 姓名重複送出，會更新舊資料。';
  } else {
    countEl.value = '0';
    countEl.min = '0';
    countEl.disabled = true;
    if (helpEl) helpEl.textContent = statusEl.value === 'leave' ? '請假 / 不參加不列入參加人數。' : '尚未確定暫不列入參加人數。';
  }
}

function publicSignupStatusLabel(status) {
  return ({ going: '會出席', leave: '請假 / 不參加', unknown: '尚未確定' }[status] || '會出席');
}

function upsertPublicSignup(course, signup) {
  if (!course) return null;
  if (!Array.isArray(course.participantSignups)) course.participantSignups = [];
  const key = String(signup.farmOrName || '').trim().toLowerCase();
  const contactKey = String(signup.contactName || '').trim().toLowerCase();
  const existingIndex = course.participantSignups.findIndex(item => {
    const itemKey = String(item.farmOrName || '').trim().toLowerCase();
    const itemContact = String(item.contactName || '').trim().toLowerCase();
    return key && itemKey === key && (!contactKey || !itemContact || itemContact === contactKey);
  });
  const now = new Date().toLocaleString('zh-TW', { hour12: false });
  const status = signup.status || 'going';
  const normalizedCount = status === 'going' ? Math.max(1, toPositiveInteger(signup.count, 1)) : 0;
  const previous = existingIndex >= 0 ? course.participantSignups[existingIndex] : null;
  const item = {
    id: signup.id || (previous?.id || uid('ps')),
    farmOrName: String(signup.farmOrName || '').trim(),
    contactName: String(signup.contactName || '').trim(),
    count: String(normalizedCount),
    phone: String(signup.phone || '').trim(),
    note: String(signup.note || '').trim(),
    status,
    needsReconfirm: false,
    previousStatus: previous?.previousStatus || '',
    previousCount: previous?.previousCount || '',
    reconfirmAt: previous?.reconfirmAt || '',
    checkinStatus: signup.checkinStatus || previous?.checkinStatus || '',
    checkinTime: signup.checkinTime || previous?.checkinTime || '',
    checkinNote: signup.checkinNote || previous?.checkinNote || '',
    checkedCount: signup.checkedCount || previous?.checkedCount || '',
    createdAt: previous?.createdAt || signup.createdAt || now,
    updatedAt: now
  };
  if (existingIndex >= 0) course.participantSignups[existingIndex] = item;
  else course.participantSignups.push(item);
  const total = publicSignupTotal(course);
  course.participantCount = total > 0 ? String(total) : '';
  course.updatedAt = now;
  refreshCourseReconfirmStatus(course);
  return { item, isUpdate: existingIndex >= 0 };
}

async function submitPublicSignup() {
  if (publicSignupSubmitting) return;
  const courseId = $('#replyPublicCourse')?.value || '';
  const course = getCourse(courseId);
  const farmOrName = ($('#replyFarmOrName')?.value || '').trim();
  const contactName = ($('#replyContactName')?.value || '').trim();
  const rawCount = ($('#replyParticipantCount')?.value || '').trim();
  const phone = ($('#replyPhone')?.value || '').trim();
  const status = $('#replyPublicStatus')?.value || 'going';
  const note = ($('#replyPublicNote')?.value || '').trim();
  if (!course) { alert('請先選擇上課時段。'); return; }
  if (!farmOrName) { alert('請輸入牧場名稱或姓名。'); $('#replyFarmOrName')?.focus(); return; }
  let count = 0;
  if (status === 'going') {
    count = toPositiveInteger(rawCount, 0);
    if (count < 1) { alert('會出席時參加人數至少要 1 人。'); $('#replyParticipantCount')?.focus(); return; }
  }
  const result = upsertPublicSignup(course, { farmOrName, contactName, count: String(count), phone, status, note });
  if (!result) return;
  const { item, isUpdate } = result;
  const location = getLocation(course.locationId);
  publicSignupSubmitting = true;
  lastPublicSignupResult = {
    courseId,
    courseTitle: course.title,
    courseTime: `${formatDate(course.date)} ${course.startTime || ''}-${course.endTime || ''}`,
    farmOrName: item.farmOrName,
    count: item.count,
    status: item.status,
    isUpdate,
    syncState: settings.syncUrl ? 'syncing' : 'local',
    locationName: location?.name || '',
    syncedAt: '',
    errorMessage: settings.syncUrl ? '' : '尚未設定 Google Sheet 同步，資料只暫存在會員端手機。'
  };
  saveState({ title: '會員端出席回覆本機暫存' });
  markPublicLocalMutation();
  replyContext = { ...replyContext, courseId };
  setSyncStatus(settings.syncUrl ? '1/3 本機已暫存，2/3 正在上傳 Google Sheet...' : '未設定 Google Sheet 同步；本次回覆尚未上傳雲端。', settings.syncUrl ? 'warn' : 'err');
  render();
  showToast(settings.syncUrl ? '正在上傳雲端，請稍候' : '未設定雲端同步，管理端暫時抓不到此筆資料');
  if (!settings.syncUrl) {
    publicSignupSubmitting = false;
    lastPublicSignupResult = { ...lastPublicSignupResult, syncState: 'failed' };
    renderReply();
    alert('尚未設定 Google Sheet 同步，這筆資料目前只暫存在會員端手機，管理端無法從雲端抓到。');
    return;
  }
  try {
    const json = await postCloud('participantSignup', { courseId, signup: item }, settings.readToken || settings.adminToken);
    const serverTime = json.serverTime || new Date().toISOString();
    const syncedAt = formatTaiwanSyncTime(serverTime, { seconds: true });
    if (json.payload) {
      state = ensureFormalDataForCloudPayload(json.payload, state);
    }
    settings.lastSync = serverTime;
    clearLocalDirty();
    saveState({ title: '會員端出席回覆雲端確認', skipDirty: true });
    saveSettings();
    publicSignupSubmitting = false;
    lastPublicSignupResult = { ...lastPublicSignupResult, syncState: 'synced', syncedAt, errorMessage: '' };
    setSyncStatus(`3/3 Google Sheet 已確認收到。最後同步：${syncedAt}`, 'ok');
    render();
    showToast('雲端上傳成功，管理端可以抓到這筆資料');
  } catch (error) {
    console.warn(error);
    publicSignupSubmitting = false;
    const initHint = String(error.message || '').includes('Course not found')
      ? 'Google Sheet 雲端尚未建立正式課程資料，請先用管理端「上傳到雲端」初始化。'
      : '請確認 Web App URL、READ_TOKEN 或網路連線。';
    lastPublicSignupResult = { ...lastPublicSignupResult, syncState: 'failed', errorMessage: `雲端同步失敗：${error.message}。${initHint}` };
    setSyncStatus(`雲端同步失敗：${error.message}。${initHint}`, 'err');
    renderReply();
    alert(`本機已暫存，但 Google Sheet 沒有確認成功。管理端目前抓不到這筆資料。${initHint}`);
  }
}

function deletePublicSignup(courseId, signupId) {
  const course = getCourse(courseId);
  if (!course || !Array.isArray(course.participantSignups)) return;
  const item = course.participantSignups.find(row => row.id === signupId);
  const ok = confirm(`確定刪除「${item?.farmOrName || '這筆'}」的參加人數登記嗎？`);
  if (!ok) return;
  course.participantSignups = course.participantSignups.filter(row => row.id !== signupId);
  const total = publicSignupTotal(course);
  course.participantCount = total > 0 ? String(total) : '';
  course.updatedAt = new Date().toLocaleString('zh-TW', { hour12: false });
  saveState();
  render();
  showToast('已刪除會員端登記資料');
}

function getMemberAttendanceStatus(course, memberId) {
  const a = normalizeAttendance(course.attendance);
  if (a.going.includes(memberId)) return 'going';
  if (a.leave.includes(memberId)) return 'leave';
  return 'unknown';
}

function updateCourseAttendance(courseId, memberId, status) {
  const course = getCourse(courseId);
  if (!course) return false;
  const a = normalizeAttendance(course.attendance);
  const clean = {
    going: a.going.filter(id => id !== memberId),
    leave: a.leave.filter(id => id !== memberId),
    unknown: a.unknown.filter(id => id !== memberId)
  };
  clean[status || 'unknown'].push(memberId);
  course.attendance = clean;
  if (Array.isArray(course.reconfirmPendingMemberIds)) {
    course.reconfirmPendingMemberIds = course.reconfirmPendingMemberIds.filter(id => id !== memberId);
    refreshCourseReconfirmStatus(course);
  }
  saveState();
  return true;
}

async function submitReply() {
  const courseId = $('#replyCourse')?.value || '';
  const memberId = $('#replyMember')?.value || '';
  const token = ($('#replyToken')?.value || '').trim();
  const status = $('#replyStatus')?.value || 'unknown';
  const member = getMember(memberId);
  const course = getCourse(courseId);
  if (!member || !course) {
    alert('找不到課程或會員資料。');
    return;
  }
  if (appMode !== 'admin' && member.memberToken && token !== member.memberToken) {
    alert('這是舊版個人連結驗證；一般會員請使用 LINE 群組共用報名連結。');
    return;
  }
  updateCourseAttendance(courseId, memberId, status);
  replyContext = { courseId, memberId, token, status };
  render();
  if (!settings.syncUrl) {
    setSyncStatus('未設定 Google Sheet 同步；出席回覆目前只暫存在本機。', 'err');
    alert('尚未設定 Google Sheet 同步，管理端無法從雲端抓到這筆出席回覆。');
    return;
  }
  setSyncStatus('1/3 本機已暫存，2/3 正在上傳 Google Sheet...', 'warn');
  showToast('正在上傳雲端，請稍候');
  if (settings.syncUrl) {
    try {
      const json = await postCloud('attendance', { courseId, memberId, status }, token || member.memberToken);
      const serverTime = json.serverTime || new Date().toISOString();
      settings.lastSync = serverTime;
      clearLocalDirty();
      saveSettings();
      if (json.payload) { state = ensureFormalDataForCloudPayload(json.payload, state); saveState({ title: '會員出席回覆雲端確認', skipDirty: true }); }
      setSyncStatus(`3/3 出席回覆已送到 Google Sheet。最後同步：${formatTaiwanSyncTime(serverTime, { seconds: true })}`, 'ok');
      showToast('出席回覆已同步雲端，管理端可以抓到資料');
    } catch (error) {
      console.warn(error);
      setSyncStatus(`雲端同步失敗：${error.message}`, 'err');
      alert('本機已更新，但雲端同步失敗。請確認 Web App URL 或網路連線。');
    }
  }
}

const formSchemas = {
  member: {
    title: '新增 / 編輯會員', eyebrow: 'Member Form', prefix: 'm', collection: 'members',
    fields: [
      ['name', '姓名', 'text', true], ['role', '身份', 'select:會長|副會長|組長|會員|講師/顧問', true],
      ['memberStatus', '會員狀態', 'select:正常|暫停|退會|不列入年度會費'],
      ['groupName', '組別', 'text'], ['area', '地區', 'text'],
      ['farmName', '豬場名稱', 'text'], ['farmType', '飼養型態', 'text'],
      ['scale', '飼養規模', 'text'], ['specialty', '專長（可用、分隔）', 'text'],
      ['phone', '電話（內部）', 'text'], ['lineId', 'LINE ID（內部）', 'text'],
      ['visibility', '顯示權限', 'select:公開|會員可見|幹部可見|不公開'],
      ['bio', '簡介', 'textarea']
    ]
  },
  location: {
    title: '新增 / 編輯餐廳地點', eyebrow: 'Location Form', prefix: 'l', collection: 'locations',
    fields: [
      ['name', '餐廳 / 地點名稱', 'text', true], ['address', '地址', 'text'],
      ['phone', '電話', 'text'], ['googleMapUrl', 'Google 地圖連結', 'url'],
      ['parkingAvailable', '是否有停車位', 'select:有|無|路邊停車|收費停車場|未確認'], ['capacity', '可容納人數', 'text'],
      ['mealType', '餐點形式', 'text'], ['avgCost', '平均費用', 'text'],
      ['parkingNote', '停車說明', 'textarea'], ['note', '備註', 'textarea']
    ]
  },
  speaker: {
    title: '新增 / 編輯講師與顧問', eyebrow: 'Speaker Form', prefix: 'sp', collection: 'speakers',
    fields: [
      ['name', '講師 / 顧問姓名', 'text', true], ['type', '類型', 'select:獸醫師|營養師/顧問|教授/研究員|設備/環控顧問|經營管理顧問|會員分享|其他', true],
      ['organization', '服務單位 / 公司', 'text'], ['area', '地區', 'text'],
      ['specialty', '專長主題（可用、分隔）', 'textarea'], ['phone', '電話（內部）', 'text'],
      ['lineId', 'LINE ID（內部）', 'text'], ['email', 'Email（內部）', 'email'],
      ['defaultFee', '預設講師費 / 車馬費', 'number'],
      ['visibility', '顯示權限', 'select:公開|會員可見|幹部可見|不公開'], ['note', '備註', 'textarea']
    ]
  },
  sponsorVendor: {
    title: '新增 / 編輯主辦廠商', eyebrow: 'Sponsor Vendor Form', prefix: 'sv', collection: 'sponsorVendors',
    fields: [
      ['name', '主辦廠商 / 單位名稱', 'text', true], ['type', '廠商類型', 'select:飼料/營養廠商|動保/疫苗廠商|設備/環控廠商|藥品/消毒廠商|檢驗/實驗室|農會/協會|其他', true],
      ['contactPerson', '聯絡窗口', 'text'], ['area', '地區', 'text'],
      ['products', '產品 / 服務 / 可支援主題', 'textarea'], ['phone', '電話（內部）', 'text'],
      ['lineId', 'LINE ID（內部）', 'text'], ['email', 'Email（內部）', 'email'],
      ['supportType', '預設支援方式', 'select:主辦|協辦|贊助餐費|贊助講師費|提供產品資料|提供贈品|其他'], ['defaultSupportAmount', '預設支援金額 / 預算', 'number'],
      ['visibility', '顯示權限', 'select:公開|會員可見|幹部可見|不公開'], ['note', '備註', 'textarea']
    ]
  },
  announcement: {
    title: '新增 / 編輯讀書會公告', eyebrow: 'Announcement Form', prefix: 'an', collection: 'announcements',
    fields: [
      ['title', '公告標題', 'text', true], ['type', '公告類型', 'select:正式公告|課程異動|課前提醒|當天提醒|出席催覆|繳費提醒|停車提醒|課後公告|臨時通知|其他', true],
      ['priority', '重要程度', 'select:一般|重要|緊急'], ['pinned', '是否置頂', 'select:否|是'],
      ['status', '公告狀態', 'select:draft=草稿|published=已發布|archived=封存'], ['courseId', '連結課程', 'courseSelect'],
      ['announceDate', '公告日期', 'date'], ['expireDate', '到期日期', 'date'],
      ['channel', '發布管道', 'select:LINE 群組|幹部群|會員端|電話通知|其他'],
      ['lineText', 'LINE 公告文字 / 通知內容', 'textarea'], ['note', '內部備註 / 歷史紀錄', 'textarea']
    ]
  },
  course: {
    title: '新增 / 編輯課程', eyebrow: 'Course Form', prefix: 'c', collection: 'courses',
    fields: [
      ['year', '年度', 'number', true], ['date', '課程日期', 'date', true],
      ['startTime', '開始時間', 'time'], ['endTime', '結束時間', 'time'],
      ['title', '課程主題', 'text', true], ['speaker', '講師', 'text'],
      ['sponsorVendorId', '主辦廠商 / 單位', 'sponsorVendorSelect'], ['sponsorContact', '聯絡窗口', 'text'],
      ['category', '課程主題分類', 'select:疾病管理|營養飼料|環控設備|批次管理|產房管理|保育肉豬|經營管理|其他'],
      ['participantCount', '參加人數', 'number'], ['unitMealFee', '每人餐費 / 應收金額', 'number'],
      ['totalMealCost', '本場應收總額（可空白自動計）', 'number'], ['otherCost', '其他費用 / 場地費', 'number'],
      ['locationId', '餐廳 / 地點', 'locationSelect'], ['status', '課程狀態', 'select:planned=未上課|done=已完成|cancelled=取消/延期'],
      ['fee', '餐費顯示文字', 'text'], ['settleNote', '餐費結算備註', 'textarea'], ['parkingNote', '本次停車提醒', 'textarea'],
      ['content', '上課內容 / 課前摘要', 'textarea'], ['attachmentLinks', '附件 / 參考連結（每行一筆）', 'textarea'],
      ['photoLinks', '上課照片連結（每行一筆）', 'textarea'], ['attachmentNote', '附件 / 簡報 / 照片備註', 'textarea'],
      ['afterNote', '課後重點整理', 'textarea'], ['questionNote', '會員提問紀錄', 'textarea'],
      ['applicationNote', '豬場實務應用重點', 'textarea'], ['followUpNote', '下次追蹤事項', 'textarea']
    ]
  }
};

function openForm(type, id = null) {
  if (appMode !== 'admin') {
    showToast('會員端僅可查看與回覆出席。');
    return;
  }
  const schema = formSchemas[type];
  const item = id ? state[schema.collection].find(x => x.id === id) : null;
  $('#modalEyebrow').textContent = schema.eyebrow;
  $('#modalTitle').textContent = schema.title;
  const form = $('#dynamicForm');
  form.className = type === 'course' ? 'form-grid compact-course-form' : 'form-grid';
  form.dataset.type = type;
  form.dataset.id = id || '';
  form.removeAttribute('data-attendance-course-id');
  let extraFormBlocks = '';
  if (type === 'course') {
    extraFormBlocks = `${courseLocationPreviewHtml(item || {})}`;
  }
  const deleteButton = type === 'course' && id
    ? `<button type="button" class="danger-btn" id="deleteCourseFromModal">刪除課程</button>`
    : '';
  form.innerHTML = schema.fields.map(([key, label, inputType, required]) => fieldHtml(key, label, inputType, item?.[key] ?? defaultFieldValue(key, type), required)).join('') +
    extraFormBlocks +
    `<div class="form-actions form-actions-split"><div>${deleteButton}</div><div><button type="button" class="ghost-btn" id="cancelForm">取消</button><button type="submit" class="primary-btn">儲存</button></div></div>`;
  $('#modalBackdrop').hidden = false;
  $('#cancelForm').addEventListener('click', closeModal);
  const deleteCourseBtn = $('#deleteCourseFromModal');
  if (deleteCourseBtn) deleteCourseBtn.addEventListener('click', () => {
    deleteItem('course', id);
    closeModal();
  });
  if (type === 'course') bindCourseFormHelpers();
}

function defaultFieldValue(key, type) {
  if (key === 'year') return String(new Date().getFullYear());
  if (key === 'status') return 'planned';
  if (key === 'category') return '其他';
  if (key === 'visibility') return '會員可見';
  if (key === 'parkingAvailable') return '未確認';
  if (key === 'locationId') return state.locations[0]?.id || '';
  if (key === 'memberToken') return `SX-${Math.random().toString(36).slice(2, 10).toUpperCase()}`;
  if (key === 'participantCount') return '';
  if (key === 'unitMealFee') return '';
  if (key === 'totalMealCost') return '';
  if (key === 'otherCost') return '0';
  if (key === 'settleNote') return '';
  if (key === 'type' && type === 'speaker') return '獸醫師';
  if (key === 'type' && type === 'sponsorVendor') return '飼料/營養廠商';
  if (key === 'supportType') return '主辦';
  if (key === 'type' && type === 'announcement') return '正式公告';
  if (key === 'priority') return '一般';
  if (key === 'pinned') return '否';
  if (key === 'channel') return 'LINE 群組';
  if (key === 'announceDate') return new Date().toISOString().slice(0, 10);
  if (key === 'courseId') return announcementSelectableCourses()[0]?.id || '';
  if (key === 'status' && type === 'announcement') return 'draft';
  if (key === 'sponsorVendorId') return state.sponsorVendors[0]?.id || '';
  if (key === 'sponsorContact') return '';
  return '';
}

function fieldHtml(key, label, inputType, value, required) {
  const full = inputType === 'textarea' || key === 'content' || key === 'parkingNote' || key === 'afterNote' || key === 'attachmentNote' || key === 'attachmentLinks' || key === 'photoLinks' || key === 'questionNote' || key === 'applicationNote' || key === 'followUpNote' || key === 'settleNote' || key === 'note' || key === 'specialty' || key === 'products' || key === 'lineText';
  const req = required ? 'required' : '';
  const common = `name="${key}" id="field-${key}" class="form-control" ${req}`;
  let control = '';
  if (inputType.startsWith('select:')) {
    const options = inputType.replace('select:', '').split('|').map(part => {
      const [val, text] = part.includes('=') ? part.split('=') : [part, part];
      return `<option value="${escapeHtml(val)}" ${String(value) === val ? 'selected' : ''}>${escapeHtml(text)}</option>`;
    }).join('');
    control = `<select ${common}>${options}</select>`;
  } else if (inputType === 'locationSelect') {
    const options = state.locations.map(location => `<option value="${location.id}" ${value === location.id ? 'selected' : ''}>${escapeHtml(location.name)}</option>`).join('');
    control = `<select ${common}>${options || '<option value="">請先新增地點</option>'}</select>`;
  } else if (inputType === 'sponsorVendorSelect') {
    const options = '<option value="">未設定主辦廠商</option>' + state.sponsorVendors.map(vendor => `<option value="${vendor.id}" ${value === vendor.id ? 'selected' : ''}>${escapeHtml(vendor.name)}${vendor.contactPerson ? `｜${escapeHtml(vendor.contactPerson)}` : ''}</option>`).join('');
    control = `<select ${common}>${options}</select>`;
  } else if (inputType === 'courseSelect') {
    const availableCourses = announcementSelectableCourses();
    const courseOptions = availableCourses.map(course => `<option value="${course.id}" ${value === course.id ? 'selected' : ''}>${escapeHtml(formatDate(course.date))}｜${escapeHtml(course.startTime || '')}｜${escapeHtml(course.title)}</option>`).join('');
    const options = '<option value="">不連結特定課程</option>' + (courseOptions || '<option value="" disabled>目前沒有尚未上課的課程</option>');
    control = `<select ${common}>${options}</select><small class="field-hint">只顯示尚未上課的課程，並依日期由近期到遠期排序；已完成、已取消或已過結束時間的課程不會出現在這裡。</small>`;
  } else if (inputType === 'textarea') {
    const courseCompactTextareaKeys = ['settleNote', 'parkingNote', 'content', 'attachmentLinks', 'photoLinks', 'attachmentNote', 'afterNote', 'questionNote', 'applicationNote', 'followUpNote'];
    const compactClass = courseCompactTextareaKeys.includes(key) ? ' compact-course-textarea' : '';
    control = `<textarea ${common}${compactClass} rows="${courseCompactTextareaKeys.includes(key) ? 2 : 4}">${escapeHtml(value)}</textarea>`;
  } else if (inputType === 'file') {
    control = `<input type="file" ${common} accept=".pdf,.ppt,.pptx,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.webp" multiple />`;
  } else {
    control = `<input type="${inputType}" ${common} value="${escapeHtml(value)}" />`;
  }
  return `<div class="form-field ${full ? 'full' : ''}"><label for="field-${key}">${label}</label>${control}</div>`;
}

function courseLocationPreviewHtml(course = {}) {
  const location = getLocation(course.locationId || state.locations[0]?.id || '');
  return `<div class="form-field full course-location-preview" id="courseLocationPreview">${locationAutoFillHtml(location)}</div>`;
}

function locationAutoFillHtml(location) {
  if (!location) return '<div class="autofill-card muted">尚未選擇餐廳地點。</div>';
  return `<div class="autofill-card">
    <strong>餐廳資料已帶入</strong>
    <span>📍 ${escapeHtml(location.address || '地址未填')}</span>
    <span>☎️ ${escapeHtml(location.phone || '電話未填')}</span>
    <span>🅿️ ${escapeHtml(location.parkingAvailable || '停車未確認')}</span>
    ${location.googleMapUrl ? `<a href="${escapeHtml(location.googleMapUrl)}" target="_blank" rel="noopener">開啟 Google 地圖</a>` : ''}
  </div>`;
}

function bindCourseFormHelpers() {
  const locationSelect = $('#field-locationId');
  const sponsorSelect = $('#field-sponsorVendorId');
  if (locationSelect) {
    const apply = (force = false) => applySelectedLocationToCourseForm(force);
    locationSelect.addEventListener('change', () => apply(true));
    apply(false);
  }
  if (sponsorSelect) {
    sponsorSelect.addEventListener('change', () => {
      const vendor = getSponsorVendor(sponsorSelect.value);
      const contactField = $('#field-sponsorContact');
      if (vendor && contactField && !String(contactField.value || '').trim()) contactField.value = vendor.contactPerson || '';
    });
  }
}

function applySelectedLocationToCourseForm(force = false) {
  const location = getLocation($('#field-locationId')?.value || '');
  const preview = $('#courseLocationPreview');
  if (preview) preview.innerHTML = locationAutoFillHtml(location);
  if (!location) return;
  const parkingField = $('#field-parkingNote');
  const feeField = $('#field-fee');
  const unitFeeField = $('#field-unitMealFee');
  if (parkingField && (force || !String(parkingField.value || '').trim())) {
    const note = [location.parkingAvailable ? `停車：${location.parkingAvailable}` : '', location.parkingNote || ''].filter(Boolean).join('｜');
    parkingField.value = note;
  }
  if (feeField && location.avgCost && (force || !String(feeField.value || '').trim())) feeField.value = location.avgCost;
  const avgNumber = String(location.avgCost || '').match(/\d+/)?.[0] || '';
  if (unitFeeField && avgNumber && (force || !String(unitFeeField.value || '').trim())) unitFeeField.value = avgNumber;
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = () => reject(reader.error || new Error('檔案讀取失敗'));
    reader.readAsDataURL(file);
  });
}

async function closeModal() {
  $('#modalBackdrop').hidden = true;
  const form = $('#dynamicForm');
  form.innerHTML = '';
  form.className = 'form-grid';
  form.dataset.type = '';
  form.dataset.id = '';
}

async function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const type = form.dataset.type;
  if (!type) return;
  const id = form.dataset.id;
  const schema = formSchemas[type];
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  let dateReconfirmTriggered = false;

  if (type === 'announcement') {
    const existing = id ? state.announcements.find(item => item.id === id) : null;
    data.createdAt = existing?.createdAt || new Date().toISOString().slice(0, 16).replace('T', ' ');
  }

  if (type === 'course') {
    const existing = id ? state.courses.find(course => course.id === id) : null;
    data.attendance = existing?.attendance || {
      going: [], leave: [], unknown: state.members.map(member => member.id)
    };
    data.payments = existing?.payments || {};
    data.prepTasks = existing?.prepTasks || [];
    dateReconfirmTriggered = markCourseDateChangeForReconfirm(existing, data);
    delete data.handoutFiles;
    delete data.handoutStatus;
  }

  if (id) {
    const index = state[schema.collection].findIndex(item => item.id === id);
    state[schema.collection][index] = { ...state[schema.collection][index], ...data };
  } else {
    state[schema.collection].push({ id: uid(schema.prefix), ...data });
  }

  if (type === 'course') {
    const savedCourse = id ? state[schema.collection].find(item => item.id === id) : state[schema.collection].at(-1);
    refreshCourseReconfirmStatus(savedCourse);
  }

  saveState();
  closeModal();
  render();
  showToast(dateReconfirmTriggered ? '課程日期已異動，原出席回覆已標記待重新確認' : '資料已儲存');
}

function cleanupMemberLinkedData(memberId, { keepAnnualFeeSnapshots = true } = {}) {
  if (!memberId) return;
  state.courses.forEach(course => {
    if (Array.isArray(course.prepTasks)) {
      course.prepTasks.forEach(task => { if (task.ownerId === memberId) task.ownerId = ''; });
    }
    if (Array.isArray(course.feedbacks)) course.feedbacks = course.feedbacks.filter(item => item.memberId !== memberId);
    if (Array.isArray(course.reconfirmPendingMemberIds)) course.reconfirmPendingMemberIds = course.reconfirmPendingMemberIds.filter(item => item !== memberId);
    const a = normalizeAttendance(course.attendance);
    course.attendance = {
      going: a.going.filter(item => item !== memberId),
      leave: a.leave.filter(item => item !== memberId),
      unknown: a.unknown.filter(item => item !== memberId)
    };
    if (course.payments && typeof course.payments === 'object' && !Array.isArray(course.payments)) delete course.payments[memberId];
    if (course.checkins && typeof course.checkins === 'object' && !Array.isArray(course.checkins)) delete course.checkins[memberId];
  });
  state.annualFees.forEach(fee => {
    annualFeeMemberRows(fee).forEach(row => {
      if (row.memberId !== memberId && row.memberSnapshotId !== memberId) return;
      if (keepAnnualFeeSnapshots) {
        row.memberSnapshotId = row.memberSnapshotId || memberId;
        row.memberStatusAtRecord = row.memberStatusAtRecord || row.memberStatus || '退會';
        row.memberId = '';
        if (!String(row.note || '').includes('會員資料已永久刪除')) {
          row.note = [row.note, '會員資料已永久刪除，帳務快照保留'].filter(Boolean).join('；');
        }
      } else {
        row.memberId = '';
        row.memberSnapshotId = '';
      }
    });
  });
}


function deleteItem(type, id) {
  if (appMode !== 'admin') return;
  const schema = formSchemas[type];
  if (type === 'member') {
    const member = getMember(id);
    if (!member) return;
    const memberLabel = [member.farmName || member.groupName, member.name].filter(Boolean).join(' / ') || '此會員';
    if ((member.memberStatus || '正常') === '退會') {
      const okRetiredDelete = confirm(`確定要從退會會員名單永久刪除「${memberLabel}」嗎？\n\n刪除後會清除會員基本資料，並移除課程出席、請假、簽到、問卷、課前任務與餐費連結。年度會費 / 帳務歷史會保留為快照，方便日後查帳。\n\n此動作無法復原。`);
      if (!okRetiredDelete) return;
    } else if (memberHasHistory(id)) {
      const retireOk = confirm('此會員已有出席、簽到、課程或年度會費紀錄。建議先改為「退會」以保留過往繳費紀錄。\n\n按「確定」改為退會；按「取消」則不刪除。');
      if (retireOk) retireMember(id);
      return;
    } else {
      const okMember = confirm('此會員目前未偵測到歷史紀錄。確定要刪除嗎？此動作無法復原。');
      if (!okMember) return;
    }
  } else {
    const ok = confirm('確定要刪除這筆資料嗎？此動作無法復原。');
    if (!ok) return;
  }
  state[schema.collection] = state[schema.collection].filter(item => item.id !== id);
  if (type === 'member') {
    cleanupMemberLinkedData(id, { keepAnnualFeeSnapshots: true });
  }
  if (type === 'location') {
    state.courses.forEach(course => { if (course.locationId === id) course.locationId = ''; });
  }
  if (type === 'course') {
    state.announcements.forEach(item => { if (item.courseId === id) item.courseId = ''; });
    state.invitations = state.invitations.filter(invite => invite.courseId !== id);
  }
  if (type === 'speaker') {
    state.invitations.forEach(invite => { if (invite.speakerId === id) invite.speakerId = ''; });
  }
  if (type === 'sponsorVendor') {
    state.invitations.forEach(invite => { if (invite.sponsorVendorId === id) invite.sponsorVendorId = ''; });
  }
  saveState();
  render();
  showToast('資料已刪除');
}

function openAttendance(courseId) {
  if (appMode !== 'admin') {
    replyContext = { ...replyContext, courseId };
    setView('reply');
    return;
  }
  const course = state.courses.find(item => item.id === courseId);
  if (!course) return;
  const a = normalizeAttendance(course.attendance);
  $('#modalEyebrow').textContent = 'Attendance Form';
  $('#modalTitle').textContent = `出席管理｜${course.title}`;
  const form = $('#dynamicForm');
  form.dataset.attendanceCourseId = courseId;
  form.removeAttribute('data-type');
  const participantField = `<div class="form-field full">
      <label for="field-participantCount">本場參加人數</label>
      <input id="field-participantCount" class="form-control" name="participantCount" type="number" min="0" value="${escapeHtml(course.participantCount || '')}" placeholder="可手動輸入實際參加總人數" />
    </div>`;
  form.innerHTML = participantField + state.members.map(member => {
    const current = a.going.includes(member.id) ? 'going' : a.leave.includes(member.id) ? 'leave' : 'unknown';
    return `<div class="form-field">
      <label>${escapeHtml(member.name)}｜${escapeHtml(member.role)}</label>
      <select class="form-control" name="att_${member.id}">
        <option value="going" ${current === 'going' ? 'selected' : ''}>會出席 / 已出席</option>
        <option value="leave" ${current === 'leave' ? 'selected' : ''}>請假</option>
        <option value="unknown" ${current === 'unknown' ? 'selected' : ''}>未回覆</option>
      </select>
    </div>`;
  }).join('') + `<div class="form-actions"><button type="button" class="ghost-btn" id="cancelForm">取消</button><button type="button" class="primary-btn" id="saveAttendance">儲存出席</button></div>`;
  $('#modalBackdrop').hidden = false;
  $('#cancelForm').addEventListener('click', closeModal);
  $('#saveAttendance').addEventListener('click', () => saveAttendance(courseId));
}

function saveAttendance(courseId) {
  const formData = new FormData($('#dynamicForm'));
  const attendance = { going: [], leave: [], unknown: [] };
  state.members.forEach(member => {
    const status = formData.get(`att_${member.id}`) || 'unknown';
    attendance[status].push(member.id);
  });
  const course = state.courses.find(item => item.id === courseId);
  course.participantCount = String(formData.get('participantCount') || '').trim();
  course.attendance = attendance;
  course.reconfirmPendingMemberIds = [];
  refreshCourseReconfirmStatus(course);
  saveState();
  closeModal();
  render();
  showToast('出席狀態已更新');
}

function openPayment(courseId) {
  if (appMode !== 'admin') {
    showToast('會員端僅可查看結算狀態。');
    return;
  }
  const course = getCourse(courseId);
  if (!course) return;
  const attendance = normalizeAttendance(course.attendance);
  const finance = courseFinanceSummary(course);
  $('#modalEyebrow').textContent = 'Fee Settlement';
  $('#modalTitle').textContent = `餐費結算｜${course.title}`;
  const form = $('#dynamicForm');
  form.dataset.paymentCourseId = courseId;
  form.removeAttribute('data-type');
  form.removeAttribute('data-attendance-course-id');
  const rows = state.members.map(member => {
    const currentStatus = getMemberAttendanceStatus(course, member.id);
    const payment = course.payments?.[member.id] || {};
    const defaultAmount = payment.amount !== undefined && payment.amount !== '' ? payment.amount : (currentStatus === 'going' ? (course.unitMealFee || inferUnitFee(course.fee)) : '0');
    return `<div class="payment-row">
      <div>
        <strong>${escapeHtml(member.name)}</strong>
        <span>${escapeHtml(member.role || '會員')}｜出席狀態：${currentStatus === 'going' ? '會出席/已出席' : currentStatus === 'leave' ? '請假' : '未回覆'}</span>
      </div>
      <input class="form-control" type="number" min="0" name="pay_amount_${member.id}" value="${escapeHtml(defaultAmount)}" placeholder="金額" />
      <select class="form-control" name="pay_status_${member.id}">
        <option value="unpaid" ${(payment.status || 'unpaid') === 'unpaid' ? 'selected' : ''}>未收</option>
        <option value="paid" ${payment.status === 'paid' ? 'selected' : ''}>已收</option>
        <option value="free" ${payment.status === 'free' ? 'selected' : ''}>免收</option>
        <option value="none" ${payment.status === 'none' ? 'selected' : ''}>不列入</option>
      </select>
      <select class="form-control" name="pay_method_${member.id}">
        ${['', '現金', '轉帳', 'LINE Pay', '由幹部代收', '其他'].map(method => `<option value="${method}" ${String(payment.method || '') === method ? 'selected' : ''}>${method || '收款方式'}</option>`).join('')}
      </select>
      <input class="form-control" name="pay_note_${member.id}" value="${escapeHtml(payment.note || '')}" placeholder="備註" />
    </div>`;
  }).join('');
  form.innerHTML = `<div class="finance-modal-summary full">
      <div><span>目前應收</span><strong>${formatMoney(finance.expected)}</strong></div>
      <div><span>目前已收</span><strong>${formatMoney(finance.paid)}</strong></div>
      <div><span>目前未收</span><strong>${formatMoney(finance.unpaid)}</strong></div>
    </div>
    <div class="form-field">
      <label for="field-unitMealFee">每人餐費 / 應收金額</label>
      <input id="field-unitMealFee" class="form-control" name="unitMealFee" type="number" min="0" value="${escapeHtml(course.unitMealFee || '')}" />
    </div>
    <div class="form-field">
      <label for="field-totalMealCost">本場應收總額（可空白自動計）</label>
      <input id="field-totalMealCost" class="form-control" name="totalMealCost" type="number" min="0" value="${escapeHtml(course.totalMealCost || '')}" />
    </div>
    <div class="form-field">
      <label for="field-otherCost">其他費用 / 場地費</label>
      <input id="field-otherCost" class="form-control" name="otherCost" type="number" min="0" value="${escapeHtml(course.otherCost || '0')}" />
    </div>
    <div class="form-field full">
      <label for="field-settleNote">結算備註</label>
      <textarea id="field-settleNote" class="form-control" name="settleNote">${escapeHtml(course.settleNote || '')}</textarea>
    </div>
    <div class="payment-list full">${rows}</div>
    <div class="form-actions"><button type="button" class="ghost-btn" id="cancelForm">取消</button><button type="button" class="primary-btn" id="savePayment">儲存結算</button></div>`;
  $('#modalBackdrop').hidden = false;
  $('#cancelForm').addEventListener('click', closeModal);
  $('#savePayment').addEventListener('click', () => savePayment(courseId));
}

function savePayment(courseId) {
  const course = getCourse(courseId);
  if (!course) return;
  const formData = new FormData($('#dynamicForm'));
  course.unitMealFee = String(formData.get('unitMealFee') || '').trim();
  course.totalMealCost = String(formData.get('totalMealCost') || '').trim();
  course.otherCost = String(formData.get('otherCost') || '').trim();
  course.settleNote = String(formData.get('settleNote') || '').trim();
  const payments = {};
  state.members.forEach(member => {
    payments[member.id] = {
      amount: String(formData.get(`pay_amount_${member.id}`) || '').trim(),
      status: String(formData.get(`pay_status_${member.id}`) || 'unpaid').trim(),
      method: String(formData.get(`pay_method_${member.id}`) || '').trim(),
      note: String(formData.get(`pay_note_${member.id}`) || '').trim()
    };
  });
  course.payments = payments;
  saveState();
  closeModal();
  render();
  showToast('餐費結算已儲存');
}


function standardPrepTaskTemplates() {
  return [
    { title: '確認餐廳包廂與桌數', priority: 'high', offsetDays: -7, note: '確認人數、桌數、包廂、餐費與是否可使用投影。' },
    { title: '確認講師與課程題綱', priority: 'high', offsetDays: -7, note: '確認講師時間、主題、課程資料與是否需要設備。' },
    { title: 'LINE 群組正式通知與出席回覆', priority: 'high', offsetDays: -5, note: '附上日期、時間、地點、Google 地圖、停車、餐費與回覆連結。' },
    { title: '未回覆會員催覆', priority: 'normal', offsetDays: -2, note: '整理未回覆名單，請組長協助提醒。' },
    { title: '準備投影設備與延長線', priority: 'normal', offsetDays: 0, note: '確認筆電、投影、HDMI、轉接頭、延長線、麥克風與網路。' },
    { title: '停車動線與導航提醒', priority: 'normal', offsetDays: -1, note: '確認停車位、路邊停車注意事項、集合位置與餐廳入口。' },
    { title: '當天收費與餐費結算', priority: 'normal', offsetDays: 0, note: '依出席名單收款，課後更新費用結算狀態。' },
    { title: '課後重點整理與附件上傳', priority: 'normal', offsetDays: 2, note: '補上課後重點、會員提問、豬場實務應用、照片與附件連結。' }
  ];
}

function dateOffset(dateString, days) {
  if (!dateString) return '';
  const d = new Date(`${dateString}T00:00:00`);
  if (Number.isNaN(d.getTime())) return '';
  d.setDate(d.getDate() + Number(days || 0));
  return d.toISOString().slice(0, 10);
}

function prepStatusLabel(status) {
  return ({ todo: '待處理', doing: '進行中', done: '已完成', blocked: '卡住/需協助' }[status] || '待處理');
}

function prepStatusClass(status) {
  return ({ todo: 'blue', doing: 'blue', done: 'green', blocked: 'red' }[status] || 'blue');
}

function prepPriorityLabel(priority) {
  return ({ high: '高', normal: '一般', low: '低' }[priority] || '一般');
}

function prepTasks(course) {
  return Array.isArray(course?.prepTasks) ? course.prepTasks : [];
}

function isPrepOverdue(task) {
  if (!task?.dueDate || task.status === 'done') return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const d = new Date(`${task.dueDate}T00:00:00`);
  if (Number.isNaN(d.getTime())) return false;
  return d < today;
}

function coursePrepSummary(course) {
  const tasks = prepTasks(course);
  const done = tasks.filter(task => task.status === 'done').length;
  const blocked = tasks.filter(task => task.status === 'blocked').length;
  const overdue = tasks.filter(isPrepOverdue).length;
  const pending = tasks.filter(task => task.status !== 'done').length;
  return { total: tasks.length, done, pending, blocked, overdue };
}

function getAllPrepSummary(courses = state.courses) {
  return courses.reduce((acc, course) => {
    const s = coursePrepSummary(course);
    acc.total += s.total;
    acc.done += s.done;
    acc.pending += s.pending;
    acc.blocked += s.blocked;
    acc.overdue += s.overdue;
    return acc;
  }, { total: 0, done: 0, pending: 0, blocked: 0, overdue: 0 });
}

function prepFilteredCourses() {
  const courseFilter = $('#prepCourseFilter')?.value || prepContext.courseId || 'all';
  const statusFilter = $('#prepStatusFilter')?.value || prepContext.status || 'all';
  const search = ($('#prepSearch')?.value || prepContext.search || '').trim().toLowerCase();
  prepContext = { courseId: courseFilter, status: statusFilter, search };
  return sortedCourses().filter(course => {
    if (courseFilter !== 'all' && course.id !== courseFilter) return false;
    if (!search && statusFilter === 'all') return true;
    const tasks = prepTasks(course);
    const location = getLocation(course.locationId);
    const courseText = [course.title, course.speaker, course.date, location?.name].join(' ').toLowerCase();
    const matchingTasks = tasks.filter(task => prepTaskPasses(task, statusFilter, search));
    if (statusFilter !== 'all' && !matchingTasks.length) return false;
    if (search && !courseText.includes(search) && !matchingTasks.length) return false;
    return true;
  });
}

function prepTaskPasses(task, statusFilter = 'all', search = '') {
  if (statusFilter === 'overdue' && !isPrepOverdue(task)) return false;
  if (!['all', 'overdue'].includes(statusFilter) && task.status !== statusFilter) return false;
  if (search) {
    const owner = getMember(task.ownerId);
    const text = [task.title, task.note, owner?.name, owner?.role, owner?.groupName, task.dueDate, prepStatusLabel(task.status), prepPriorityLabel(task.priority)].join(' ').toLowerCase();
    if (!text.includes(search)) return false;
  }
  return true;
}

function updatePrepCourseFilter(courses) {
  const select = $('#prepCourseFilter');
  if (!select) return;
  const selected = prepContext.courseId || select.value || 'all';
  select.innerHTML = '<option value="all">全部課程</option>' + sortedCourses().map(course => `<option value="${escapeHtml(course.id)}" ${course.id === selected ? 'selected' : ''}>${formatDate(course.date)}｜${escapeHtml(course.title)}</option>`).join('');
  if ([...select.options].some(opt => opt.value === selected)) select.value = selected;
  else select.value = 'all';
  prepContext.courseId = select.value;
}

function renderPrep() {
  if (!$('#prepCourseCards')) return;
  updatePrepCourseFilter();
  const statusSelect = $('#prepStatusFilter');
  if (statusSelect) statusSelect.value = prepContext.status || 'all';
  const searchInput = $('#prepSearch');
  if (searchInput && document.activeElement !== searchInput) searchInput.value = prepContext.search || '';

  const list = prepFilteredCourses();
  const summary = getAllPrepSummary(list);
  $('#prepGeneratedAt').textContent = `更新：${new Date().toLocaleString('zh-TW')}`;
  $('#prepKpis').innerHTML = [
    ['顯示課程', list.length],
    ['任務總數', summary.total],
    ['已完成', summary.done],
    ['待處理', summary.pending],
    ['卡住', summary.blocked],
    ['已逾期', summary.overdue]
  ].map(([label, value]) => `<div class="report-kpi"><span>${label}</span><strong>${escapeHtml(value)}</strong></div>`).join('');

  $('#prepCourseCards').innerHTML = list.length ? list.map(course => prepCourseCardHtml(course)).join('') : '<div class="empty-box">目前沒有符合條件的課前分工資料。</div>';
}

function prepCourseCardHtml(course) {
  const location = getLocation(course.locationId);
  const summary = coursePrepSummary(course);
  const search = prepContext.search || '';
  const status = prepContext.status || 'all';
  const tasks = prepTasks(course).filter(task => prepTaskPasses(task, status, search));
  return `<article class="prep-course-card">
    <div class="card-top">
      <div>
        <p class="eyebrow">${formatDate(course.date)}｜${escapeHtml(course.startTime || '')}-${escapeHtml(course.endTime || '')}</p>
        <div class="card-title">${escapeHtml(course.title)}</div>
        <div class="card-meta">👨‍🏫 ${escapeHtml(course.speaker || '未設定講師')}｜📍 ${escapeHtml(location?.name || '未設定地點')}｜👥 ${escapeHtml(participantLabel(course))}</div>
      </div>
      <span class="badge ${summary.pending ? 'red' : 'green'}">${summary.done}/${summary.total || 0} 完成</span>
    </div>
    <div class="prep-progress"><div class="prep-progress-fill" style="width:${summary.total ? Math.round(summary.done / summary.total * 100) : 0}%"></div></div>
    <div class="badge-row">
      <span class="badge green">已完成 ${summary.done}</span>
      <span class="badge blue">待處理 ${summary.pending}</span>
      <span class="badge ${summary.blocked ? 'red' : 'green'}">卡住 ${summary.blocked}</span>
      <span class="badge ${summary.overdue ? 'red' : 'green'}">逾期 ${summary.overdue}</span>
    </div>
    <div class="prep-actions admin-only">
      <button class="mini-btn" data-prep-add="${course.id}">新增任務</button>
      <button class="mini-btn" data-prep-template="${course.id}">套用標準清單</button>
      <button class="mini-btn" data-copy-prep-course="${course.id}">複製本場清單</button>
      <button class="mini-btn" data-edit="course" data-id="${course.id}">編輯課程</button>
    </div>
    <div class="prep-task-list">
      ${tasks.length ? tasks.map(task => prepTaskRowHtml(course, task)).join('') : '<div class="empty-box">本場尚未建立課前任務。可點「套用標準清單」快速建立。</div>'}
    </div>
  </article>`;
}

function prepTaskRowHtml(course, task) {
  const owner = getMember(task.ownerId);
  const overdue = isPrepOverdue(task);
  const options = ['todo', 'doing', 'done', 'blocked'].map(status => `<option value="${status}" ${task.status === status ? 'selected' : ''}>${prepStatusLabel(status)}</option>`).join('');
  return `<div class="prep-task-row ${overdue ? 'overdue' : ''}">
    <div class="prep-task-main">
      <strong>${escapeHtml(task.title)}</strong>
      <span>${escapeHtml(task.note || '無備註')}</span>
      <div class="prep-task-meta">
        <span>負責：${escapeHtml(owner?.name || '未指定')}</span>
        <span>期限：${task.dueDate ? formatDate(task.dueDate) : '未設定'}</span>
        <span>優先：${prepPriorityLabel(task.priority)}</span>
        ${overdue ? '<span class="danger-text">已逾期</span>' : ''}
      </div>
    </div>
    <div class="prep-task-controls admin-only">
      <select class="form-control compact-control" data-prep-status="${course.id}|${task.id}">${options}</select>
      <button class="mini-btn" data-prep-edit="${course.id}|${task.id}">編輯</button>
      <button class="mini-btn danger" data-prep-delete="${course.id}|${task.id}">刪除</button>
    </div>
    <span class="badge ${prepStatusClass(task.status)}">${prepStatusLabel(task.status)}</span>
  </div>`;
}

function openPrepTask(courseId, taskId = '') {
  if (appMode !== 'admin') return;
  const course = getCourse(courseId);
  if (!course) return;
  const task = prepTasks(course).find(item => item.id === taskId) || null;
  $('#modalEyebrow').textContent = 'Prep Task';
  $('#modalTitle').textContent = `${task ? '編輯' : '新增'}課前任務｜${course.title}`;
  const form = $('#dynamicForm');
  form.removeAttribute('data-type');
  form.dataset.prepCourseId = courseId;
  form.dataset.prepTaskId = taskId || '';
  const memberOptions = '<option value="">未指定</option>' + state.members.map(member => `<option value="${member.id}" ${task?.ownerId === member.id ? 'selected' : ''}>${escapeHtml(member.name)}｜${escapeHtml(member.role || '會員')}｜${escapeHtml(member.groupName || '未分組')}</option>`).join('');
  form.innerHTML = `
    <div class="form-field full"><label for="prep-title">工作項目</label><input id="prep-title" class="form-control" name="title" required value="${escapeHtml(task?.title || '')}" placeholder="例如：確認餐廳包廂與桌數" /></div>
    <div class="form-field"><label for="prep-owner">負責人</label><select id="prep-owner" class="form-control" name="ownerId">${memberOptions}</select></div>
    <div class="form-field"><label for="prep-due">期限</label><input id="prep-due" class="form-control" name="dueDate" type="date" value="${escapeHtml(task?.dueDate || course.date || '')}" /></div>
    <div class="form-field"><label for="prep-priority">優先順序</label><select id="prep-priority" class="form-control" name="priority">
      <option value="high" ${task?.priority === 'high' ? 'selected' : ''}>高</option>
      <option value="normal" ${!task || task.priority === 'normal' ? 'selected' : ''}>一般</option>
      <option value="low" ${task?.priority === 'low' ? 'selected' : ''}>低</option>
    </select></div>
    <div class="form-field"><label for="prep-status">狀態</label><select id="prep-status" class="form-control" name="status">
      <option value="todo" ${!task || task.status === 'todo' ? 'selected' : ''}>待處理</option>
      <option value="doing" ${task?.status === 'doing' ? 'selected' : ''}>進行中</option>
      <option value="done" ${task?.status === 'done' ? 'selected' : ''}>已完成</option>
      <option value="blocked" ${task?.status === 'blocked' ? 'selected' : ''}>卡住/需協助</option>
    </select></div>
    <div class="form-field full"><label for="prep-note">備註</label><textarea id="prep-note" class="form-control" name="note" placeholder="補充說明、注意事項、需要帶的設備或確認狀況">${escapeHtml(task?.note || '')}</textarea></div>
    <div class="form-actions"><button type="button" class="ghost-btn" id="cancelForm">取消</button><button type="button" class="primary-btn" id="savePrepTask">儲存任務</button></div>`;
  $('#modalBackdrop').hidden = false;
  $('#cancelForm').addEventListener('click', closeModal);
  $('#savePrepTask').addEventListener('click', savePrepTask);
}

function savePrepTask() {
  const form = $('#dynamicForm');
  const course = getCourse(form.dataset.prepCourseId);
  if (!course) return;
  const taskId = form.dataset.prepTaskId || '';
  const data = Object.fromEntries(new FormData(form).entries());
  if (!String(data.title || '').trim()) {
    alert('請輸入工作項目。');
    return;
  }
  if (!Array.isArray(course.prepTasks)) course.prepTasks = [];
  if (taskId) {
    const idx = course.prepTasks.findIndex(task => task.id === taskId);
    if (idx >= 0) course.prepTasks[idx] = { ...course.prepTasks[idx], ...data };
  } else {
    course.prepTasks.push({ id: uid('pt'), ...data });
  }
  saveState();
  closeModal();
  render();
  showToast('課前任務已儲存');
}

function deletePrepTask(courseId, taskId) {
  if (appMode !== 'admin') return;
  const course = getCourse(courseId);
  if (!course) return;
  const ok = confirm('確定要刪除這個課前任務嗎？');
  if (!ok) return;
  course.prepTasks = prepTasks(course).filter(task => task.id !== taskId);
  saveState();
  render();
  showToast('課前任務已刪除');
}

function updatePrepStatus(courseId, taskId, status) {
  const course = getCourse(courseId);
  const task = prepTasks(course).find(item => item.id === taskId);
  if (!task) return;
  task.status = status || 'todo';
  saveState();
  render();
  showToast('任務狀態已更新');
}

function applyPrepTemplate(courseId) {
  if (appMode !== 'admin') return;
  const course = getCourse(courseId);
  if (!course) return;
  if (!Array.isArray(course.prepTasks)) course.prepTasks = [];
  const existingTitles = new Set(course.prepTasks.map(task => String(task.title || '').trim()));
  let added = 0;
  standardPrepTaskTemplates().forEach(template => {
    if (existingTitles.has(template.title)) return;
    course.prepTasks.push({
      id: uid('pt'),
      title: template.title,
      ownerId: '',
      dueDate: dateOffset(course.date, template.offsetDays),
      priority: template.priority,
      status: 'todo',
      note: template.note
    });
    added += 1;
  });
  saveState();
  render();
  showToast(added ? `已套用標準清單，新增 ${added} 項任務` : '本場已具備標準清單項目');
}

function buildPrepCourseText(course) {
  const location = getLocation(course.locationId);
  const summary = coursePrepSummary(course);
  const lines = [
    `山線養豬讀書會｜課前準備清單`,
    `課程：${course.title}`,
    `時間：${formatDate(course.date)} ${course.startTime || ''}${course.endTime ? '-' + course.endTime : ''}`,
    `地點：${location?.name || '未設定'}`,
    `進度：${summary.done}/${summary.total || 0} 完成｜待處理 ${summary.pending}｜逾期 ${summary.overdue}`,
    ''
  ];
  if (!prepTasks(course).length) lines.push('尚未建立課前任務。');
  prepTasks(course).forEach((task, index) => {
    const owner = getMember(task.ownerId);
    lines.push(`${index + 1}. [${prepStatusLabel(task.status)}] ${task.title}`);
    lines.push(`   負責：${owner?.name || '未指定'}｜期限：${task.dueDate ? formatDate(task.dueDate) : '未設定'}｜優先：${prepPriorityLabel(task.priority)}${isPrepOverdue(task) ? '｜已逾期' : ''}`);
    if (task.note) lines.push(`   備註：${task.note}`);
  });
  return lines.join('\n');
}

function buildPrepDigestText() {
  const list = prepFilteredCourses();
  const summary = getAllPrepSummary(list);
  const lines = [
    '山線養豬讀書會｜幹部工作分派與課前準備總清單',
    `產生時間：${new Date().toLocaleString('zh-TW')}`,
    `篩選結果：課程 ${list.length} 場｜任務 ${summary.total} 項｜已完成 ${summary.done}｜待處理 ${summary.pending}｜卡住 ${summary.blocked}｜逾期 ${summary.overdue}`,
    ''
  ];
  if (!list.length) lines.push('目前沒有符合條件的課前分工資料。');
  list.forEach(course => {
    lines.push(buildPrepCourseText(course), '\n---\n');
  });
  return lines.join('\n');
}

function exportPrepCsv() {
  const list = prepFilteredCourses();
  const rows = [['課程日期', '課程', '講師', '地點', '工作項目', '負責人', '期限', '優先', '狀態', '是否逾期', '備註']];
  list.forEach(course => {
    const location = getLocation(course.locationId);
    prepTasks(course).filter(task => prepTaskPasses(task, prepContext.status, prepContext.search)).forEach(task => {
      const owner = getMember(task.ownerId);
      rows.push([course.date || '', course.title || '', course.speaker || '', location?.name || '', task.title || '', owner?.name || '', task.dueDate || '', prepPriorityLabel(task.priority), prepStatusLabel(task.status), isPrepOverdue(task) ? '是' : '否', task.note || '']);
    });
  });
  const csv = rows.map(row => row.map(value => `"${String(value ?? '').replaceAll('"', '""')}"`).join(',')).join('\n');
  downloadTextFile(`山線養豬讀書會_課前分工清單_${new Date().toISOString().slice(0, 10)}.csv`, '\ufeff' + csv, 'text/csv;charset=utf-8');
  showToast('已匯出課前分工 CSV');
}

function exportJson() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `山線養豬讀書會資料備份_${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  showToast('已匯出 JSON 備份');
}


function downloadTextFile(filename, content, mimeType = 'text/plain;charset=utf-8') {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function importJson(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      if (!Array.isArray(parsed.members) || !Array.isArray(parsed.courses) || !Array.isArray(parsed.locations)) {
        throw new Error('格式不符');
      }
      createBackupSnapshot('import', `匯入前備份 ${new Date().toLocaleString('zh-TW')}`);
      state = normalizeState(parsed);
      saveState({ title: 'JSON 匯入後備份' });
      render();
      showToast('資料已匯入');
    } catch (error) {
      alert('匯入失敗：JSON 格式不正確。');
    }
  };
  reader.readAsText(file);
}

function resetData() {
  const ok = confirm('確定要重置為範例資料嗎？目前瀏覽器內的資料會被覆蓋。');
  if (!ok) return;
  createBackupSnapshot('reset', `重置前備份 ${new Date().toLocaleString('zh-TW')}`);
  state = normalizeState(clone(seedData));
  saveState({ title: '重置為範例資料後備份' });
  render();
  showToast('已重置為範例資料');
}


function memberNameList(ids) {
  const names = (ids || []).map(id => getMember(id)?.name).filter(Boolean);
  return names.length ? names.join('、') : '無';
}

function notifyCourseTitle(course) {
  return `${formatDate(course.date)} ${course.startTime || ''}${course.endTime ? '-' + course.endTime : ''}｜${course.title || '未命名課程'}`;
}

function collectNotifyControls() {
  const courseSelect = $('#notifyCourseSelect');
  if (!courseSelect) return;
  notifyContext.courseId = courseSelect.value || notifyContext.courseId;
  notifyContext.preset = $('#notifyPreset')?.value || notifyContext.preset;
  notifyContext.audience = $('#notifyAudience')?.value || notifyContext.audience;
  notifyContext.extraNote = $('#notifyExtraNote')?.value || '';
  notifyContext.includeMap = Boolean($('#notifyIncludeMap')?.checked);
  notifyContext.includeParking = Boolean($('#notifyIncludeParking')?.checked);
  notifyContext.includeFee = Boolean($('#notifyIncludeFee')?.checked);
  notifyContext.includeStats = Boolean($('#notifyIncludeStats')?.checked);
  notifyContext.includeContent = Boolean($('#notifyIncludeContent')?.checked);
  notifyContext.includeLinks = Boolean($('#notifyIncludeLinks')?.checked);
}

function renderNotify() {
  const select = $('#notifyCourseSelect');
  const output = $('#notifyOutput');
  if (!select || !output) return;
  const allCourses = sortedCourses();
  const courses = shareableUpcomingCourses();
  if (!allCourses.length) {
    select.innerHTML = '<option value="">尚無課程</option>';
    output.value = '尚未建立課程，請先到「年度課程表」新增課程。';
    if ($('#notifyLengthPill')) $('#notifyLengthPill').textContent = `${output.value.length} 字`;
    if ($('#notifySummary')) $('#notifySummary').innerHTML = '<div class="empty-box">尚無可產生通知的課程。</div>';
    return;
  }
  if (!courses.length) {
    select.innerHTML = '<option value="">目前沒有尚未上課的課程</option>';
    output.value = '目前沒有尚未上課的課程；已上完或已取消的課程不會出現在 LINE 通知選單。';
    if ($('#notifyLengthPill')) $('#notifyLengthPill').textContent = `${output.value.length} 字`;
    if ($('#notifySummary')) $('#notifySummary').innerHTML = '<div class="empty-box">目前沒有可產生 LINE 通知的未上課程。</div>';
    return;
  }
  if (!notifyContext.courseId || !courses.some(course => course.id === notifyContext.courseId)) {
    notifyContext.courseId = courses[0].id;
  }
  select.innerHTML = courses.map(course => `<option value="${course.id}" ${course.id === notifyContext.courseId ? 'selected' : ''}>${escapeHtml(notifyCourseTitle(course))}</option>`).join('');
  if ($('#notifyPreset')) $('#notifyPreset').value = notifyContext.preset;
  if ($('#notifyAudience')) $('#notifyAudience').value = notifyContext.audience;
  if ($('#notifyExtraNote')) $('#notifyExtraNote').value = notifyContext.extraNote;
  ['Map', 'Parking', 'Fee', 'Stats', 'Content', 'Links'].forEach(key => {
    const el = $(`#notifyInclude${key}`);
    if (el) el.checked = Boolean(notifyContext[`include${key}`]);
  });
  renderNotifyOutput();
}

function audienceLabel(value) {
  return ({ group: 'LINE 群組', officers: '幹部 / 組長', unreplied: '未回覆會員', attendees: '已確認出席會員' }[value] || 'LINE 群組');
}

function presetTitle(value) {
  return ({
    initial: '山線養豬讀書會｜課程通知',
    before: '山線養豬讀書會｜課前提醒',
    today: '山線養豬讀書會｜今晚課程提醒',
    attendance: '山線養豬讀書會｜出席回覆提醒',
    after: '山線養豬讀書會｜課後重點與附件',
    formalRich: '山線養豬讀書會｜正式公告',
    parking: '山線養豬讀書會｜地點與停車提醒',
    payment: '山線養豬讀書會｜餐費與出席統計',
    officer: '山線養豬讀書會｜幹部確認事項'
  }[value] || '山線養豬讀書會｜課程通知');
}

function buildCourseReplyBase(courseId) {
  const base = `${window.location.origin}${window.location.pathname}`;
  const params = new URLSearchParams({ mode: 'reply', courseId });
  appendPublicSyncParams(params);
  return `${base}?${params.toString()}`;
}

function buildMemberReplyLinksText(courseId) {
  const course = getCourse(courseId);
  if (!course) return '';
  return `共用報名連結：${buildReplyLink(courseId)}`;
}

function buildUnrepliedText(courseId) {
  const course = getCourse(courseId);
  if (!course) return '找不到課程。';
  const a = normalizeAttendance(course.attendance);
  const unknown = a.unknown.length ? a.unknown : state.members.filter(member => !a.going.includes(member.id) && !a.leave.includes(member.id)).map(member => member.id);
  const names = unknown.map(id => getMember(id)?.name).filter(Boolean);
  if (!names.length) return '目前沒有未回覆會員。';
  return [`未回覆名單：${names.join('、')}`, '', `共用報名連結：${buildReplyLink(courseId)}`].join('\n');
}

function buildNotifyText(course) {
  if (!course) return '';
  const location = getLocation(course.locationId);
  const a = normalizeAttendance(course.attendance);
  const finance = courseFinanceSummary(course);
  const preset = notifyContext.preset || 'initial';
  const lines = [];
  lines.push(`【${presetTitle(preset)}】`);
  if (notifyContext.audience !== 'group') lines.push(`通知對象：${audienceLabel(notifyContext.audience)}`);
  lines.push('');

  if (preset === 'attendance') {
    lines.push('請還沒回覆的會員協助確認本次讀書會是否出席，方便統計人數與餐廳訂位。');
  } else if (preset === 'before') {
    lines.push('提醒大家，本次課程即將舉行，請提早安排時間與交通。');
  } else if (preset === 'today') {
    lines.push('今晚讀書會課程提醒，請已確認出席的會員準時到場。');
  } else if (preset === 'after') {
    lines.push('本次課程已完成，以下整理課後重點與相關附件，方便會員回顧。');
  } else {
    lines.push('本次讀書會課程資訊如下，請會員協助確認出席狀態。');
  }
  lines.push('');
  lines.push(`課程：${course.title || '未命名課程'}`);
  lines.push(`日期：${formatDate(course.date)}`);
  lines.push(`時間：${course.startTime || '未設定'}${course.endTime ? ' - ' + course.endTime : ''}`);
  if (course.speaker) lines.push(`講師：${course.speaker}`);
  if (course.category) lines.push(`主題分類：${course.category}`);
  if (location?.name) lines.push(`地點：${location.name}`);
  if (location?.address) lines.push(`地址：${location.address}`);
  if (notifyContext.includeMap && location?.googleMapUrl) lines.push(`Google 地圖：${location.googleMapUrl}`);
  if (notifyContext.includeParking) lines.push(`停車資訊：${course.parkingNote || location?.parkingNote || '尚未設定'}`);
  if (notifyContext.includeFee) lines.push(`餐費：${course.fee || (finance.unitFee ? `每人 ${formatMoney(finance.unitFee)}` : '尚未設定')}`);
  if (notifyContext.includeStats) {
    lines.push(`出席統計：會出席 ${a.going.length} 人｜請假 ${a.leave.length} 人｜未回覆 ${a.unknown.length} 人｜參加人數 ${participantLabel(course)}`);
  }
  if (notifyContext.includeContent && course.content) {
    lines.push('');
    lines.push('上課內容：');
    lines.push(course.content);
  }
  if (preset === 'after') {
    if (course.afterNote) { lines.push(''); lines.push('課後重點：'); lines.push(course.afterNote); }
    if (course.applicationNote) { lines.push(''); lines.push('豬場實務應用：'); lines.push(course.applicationNote); }
    if (course.followUpNote) { lines.push(''); lines.push('下次追蹤事項：'); lines.push(course.followUpNote); }
    if (course.attachmentLinks) { lines.push(''); lines.push('附件連結：'); lines.push(course.attachmentLinks); }
    if (course.photoLinks) { lines.push(''); lines.push('上課照片：'); lines.push(course.photoLinks); }
  }
  if (preset === 'attendance' || notifyContext.audience === 'unreplied') {
    const unreplied = a.unknown.map(id => getMember(id)?.name).filter(Boolean);
    lines.push('');
    lines.push(`尚未回覆：${unreplied.length ? unreplied.join('、') : '目前無未回覆會員'}`);
  }
  lines.push('');
  lines.push('出席回覆：請點選 LINE 群組共用報名連結，自行填寫牧場名稱 / 姓名與參加人數。');
  if (notifyContext.includeLinks) {
    lines.push('');
    lines.push(buildMemberReplyLinksText(course.id));
  } else {
    lines.push(`課程回覆頁：${buildCourseReplyBase(course.id)}`);
    lines.push('※ 一般會員只需要共用報名連結；幹部與會長請用管理端密碼登入後台。');
  }
  const extra = String(notifyContext.extraNote || '').trim();
  if (extra) { lines.push(''); lines.push(`補充：${extra}`); }
  lines.push('');
  lines.push('— 山線養豬讀書會 —');
  return lines.join('\n').replace(/\n{3,}/g, '\n\n').trim();
}

function renderNotifyOutput() {
  collectNotifyControls();
  const current = getCourse(notifyContext.courseId);
  const course = current && isCourseOpenForReply(current) ? current : firstShareableCourse();
  const output = $('#notifyOutput');
  if (!output) return;
  const text = buildNotifyText(course);
  output.value = text;
  if ($('#notifyLengthPill')) $('#notifyLengthPill').textContent = `${text.length} 字`;
  const summary = $('#notifySummary');
  if (summary && course) {
    const a = normalizeAttendance(course.attendance);
    const finance = courseFinanceSummary(course);
    summary.innerHTML = `<div class="record-stat"><span>會出席</span><strong>${a.going.length}</strong></div>
      <div class="record-stat"><span>請假</span><strong>${a.leave.length}</strong></div>
      <div class="record-stat"><span>未回覆</span><strong>${a.unknown.length}</strong></div>
      <div class="record-stat"><span>未收餐費</span><strong>${formatMoney(finance.unpaid)}</strong></div>
      <div class="notify-name-box"><strong>未回覆名單</strong><p>${escapeHtml(memberNameList(a.unknown))}</p></div>`;
  }
}

function copyNotifyText() {
  renderNotifyOutput();
  const text = $('#notifyOutput')?.value || '';
  if (!text) return;
  copyText(text).then(() => showToast('已複製 LINE 通知文字'));
}

function copyNotifyLinks() {
  renderNotifyOutput();
  const text = buildMemberReplyLinksText(notifyContext.courseId);
  if (!text) return;
  copyText(text).then(() => showToast('已複製共用報名連結'));
}

function copyNotifyUnreplied() {
  renderNotifyOutput();
  const text = buildUnrepliedText(notifyContext.courseId);
  if (!text) return;
  copyText(text).then(() => showToast('已複製未回覆名單'));
}

function openLineShare() {
  renderNotifyOutput();
  const text = $('#notifyOutput')?.value || '';
  if (!text) return;
  window.open(`https://line.me/R/msg/text/?${encodeURIComponent(text)}`, '_blank', 'noopener');
}


function collectShareCardControls() {
  const courseSelect = $('#shareCardCourseSelect');
  if (!courseSelect) return;
  shareCardContext.courseId = courseSelect.value || shareCardContext.courseId;
  shareCardContext.template = $('#shareCardTemplate')?.value || shareCardContext.template;
  shareCardContext.tone = $('#shareCardTone')?.value || shareCardContext.tone;
  shareCardContext.extraNote = $('#shareCardExtraNote')?.value || '';
  shareCardContext.includeMap = Boolean($('#shareCardIncludeMap')?.checked);
  shareCardContext.includeParking = Boolean($('#shareCardIncludeParking')?.checked);
  shareCardContext.includeFee = Boolean($('#shareCardIncludeFee')?.checked);
  shareCardContext.includeStats = Boolean($('#shareCardIncludeStats')?.checked);
  shareCardContext.includeContent = Boolean($('#shareCardIncludeContent')?.checked);
  shareCardContext.includeReply = Boolean($('#shareCardIncludeReply')?.checked);
  shareCardContext.includeCheckin = Boolean($('#shareCardIncludeCheckin')?.checked);
  shareCardContext.includePublic = Boolean($('#shareCardIncludePublic')?.checked);
}

function shareCardTonePrefix(tone) {
  if (tone === 'urgent') return '【重要提醒】';
  if (tone === 'formal') return '【正式通知】';
  return '【溫馨提醒】';
}

function shareCardTemplateLabel(template) {
  return ({
    formal: '正式公告版',
    compact: '精簡提醒版',
    parking: '地點停車版',
    payment: '餐費統計版',
    after: '課後成果版',
    officer: '幹部確認版'
  }[template] || '正式公告版');
}

function shareCardToneLabel(tone) {
  return ({ friendly: '親切提醒', formal: '正式清楚', urgent: '重要提醒' }[tone] || '親切提醒');
}

function shareCardOpening(template, tone) {
  const urgent = tone === 'urgent';
  const formal = tone === 'formal';
  const prefix = shareCardTonePrefix(tone);
  if (template === 'compact') return `${prefix} 本次讀書會課程資訊如下，請直接點選報名連結回覆是否參加。`;
  if (template === 'after') return urgent ? `${prefix} 本次課程已完成，請幹部與會員確認課後重點與後續追蹤。` : (formal ? `${prefix} 本次課程重點整理如下，敬請會員參考。` : `${prefix} 本次課程重點已整理，提供大家回顧與豬場應用。`);
  if (template === 'parking') return urgent ? `${prefix} 本場課程請特別留意地點與停車資訊，請提早出發。` : (formal ? `${prefix} 本場課程地點與停車資訊如下，請會員提早安排交通。` : `${prefix} 本場課程地點與停車資訊整理如下，大家可以先看導航與停車位置。`);
  if (template === 'payment') return urgent ? `${prefix} 請各組協助確認出席人數與餐費統計。` : (formal ? `${prefix} 本場課程出席與餐費資訊如下，敬請幹部協助確認。` : `${prefix} 本場課程同步統計人數與餐費，請大家協助確認。`);
  if (template === 'officer') return urgent ? `${prefix} 請幹部立即確認本場課程準備事項。` : (formal ? `${prefix} 請幹部與組長確認本場課程準備事項。` : `${prefix} 幹部與組長請協助確認本場課程準備事項。`);
  if (urgent) return `${prefix} 本次讀書會課程資訊如下，請會員務必確認出席與交通安排。`;
  if (formal) return `${prefix} 本次讀書會課程資訊如下，敬請各位會員參考並回覆出席。`;
  return `${prefix} 提醒大家，本次山線養豬讀書會課程資訊如下，請協助回覆出席，方便統計人數與訂位。`;
}

function buildCourseCommonLinks(course) {
  if (!course) return [];
  const items = [];
  items.push(['會員公開課表', buildPublicLink('courses', course.id)]);
  items.push(['出席回覆頁', buildCourseReplyBase(course.id)]);
  items.push(['簽到報到頁', buildCheckinLink(course.id)]);
  const location = getLocation(course.locationId);
  if (location?.googleMapUrl) items.push(['Google 地圖', location.googleMapUrl]);
  return items;
}

function buildCourseShareCardText(course, compact = false) {
  if (!course) return '尚未建立課程，請先新增年度課表。';
  collectShareCardControls();
  const location = getLocation(course.locationId);
  const a = normalizeAttendance(course.attendance);
  const finance = courseFinanceSummary(course);
  const template = shareCardContext.template || 'formal';
  const tone = shareCardContext.tone || 'friendly';
  const lines = [];
  const courseTime = `${formatDate(course.date)} ${course.startTime || ''}${course.endTime ? '-' + course.endTime : ''}`.trim();
  const replyUrl = buildCourseReplyBase(course.id);
  const mapUrl = location?.googleMapUrl || '';
  const parkingText = course.parkingNote || location?.parkingNote || '尚未設定';
  const feeText = course.fee || (finance.unitFee ? `每人 ${formatMoney(finance.unitFee)}` : '尚未設定');

  if (compact || template === 'compact') {
    lines.push(`${shareCardTonePrefix(tone)} 山線養豬讀書會`);
    lines.push(`課程：${course.title || '未命名課程'}`);
    lines.push(`時間：${courseTime}`);
    if (location?.name) lines.push(`地點：${location.name}`);
    if (shareCardContext.includeMap && mapUrl) lines.push(`地圖：${mapUrl}`);
    if (shareCardContext.includeParking) lines.push(`停車：${parkingText}`);
    if (shareCardContext.includeReply) lines.push(`報名回覆：${replyUrl}`);
    const extra = String(shareCardContext.extraNote || '').trim();
    if (extra) lines.push(`補充：${extra}`);
    return lines.join('\n').trim();
  }

  const titleMap = {
    formal: '山線養豬讀書會｜正式課程公告',
    parking: '山線養豬讀書會｜地點停車提醒',
    payment: '山線養豬讀書會｜出席餐費統計',
    after: '山線養豬讀書會｜課後成果整理',
    officer: '山線養豬讀書會｜幹部確認清單'
  };
  lines.push('🐷━━━━━━━━━━━━━━');
  lines.push(`【${titleMap[template] || '山線養豬讀書會｜單場課程分享卡'}】`);
  lines.push(`版型：${shareCardTemplateLabel(template)}｜語氣：${shareCardToneLabel(tone)}`);
  lines.push('━━━━━━━━━━━━━━');
  lines.push(shareCardOpening(template, tone));
  lines.push('');

  if (template === 'parking') {
    lines.push(`📌 課程：${course.title || '未命名課程'}`);
    lines.push(`📅 時間：${courseTime}`);
    if (location?.name) lines.push(`📍 地點：${location.name}`);
    if (location?.address) lines.push(`🏠 地址：${location.address}`);
    if (shareCardContext.includeMap && mapUrl) lines.push(`🗺️ Google 地圖：${mapUrl}`);
    lines.push(`🅿️ 停車：${parkingText}`);
    if (shareCardContext.includeReply) { lines.push(''); lines.push(`出席回覆：${replyUrl}`); }
  } else if (template === 'payment') {
    lines.push(`📌 課程：${course.title || '未命名課程'}`);
    lines.push(`📅 時間：${courseTime}`);
    if (location?.name) lines.push(`📍 地點：${location.name}`);
    lines.push('');
    lines.push('👥 出席與人數');
    lines.push(`會出席：${a.going.length}｜請假：${a.leave.length}｜未回覆：${a.unknown.length}`);
    lines.push(`參加人數：${participantLabel(course)}`);
    lines.push('');
    lines.push('💰 餐費');
    lines.push(`餐費資訊：${feeText}`);
    lines.push(`未收餐費：${formatMoney(finance.unpaid)}`);
    if (shareCardContext.includeReply) { lines.push(''); lines.push(`出席回覆：${replyUrl}`); }
  } else if (template === 'after') {
    lines.push(`📌 課程：${course.title || '未命名課程'}`);
    lines.push(`📅 日期：${formatDate(course.date)}`);
    if (course.speaker) lines.push(`👨‍🏫 講師：${course.speaker}`);
    if (course.afterNote) { lines.push(''); lines.push('✅ 課後重點'); lines.push(course.afterNote); }
    if (course.applicationNote) { lines.push(''); lines.push('🐖 豬場實務應用'); lines.push(course.applicationNote); }
    if (course.followUpNote) { lines.push(''); lines.push('🔎 下次追蹤'); lines.push(course.followUpNote); }
    if (!course.afterNote && !course.applicationNote && !course.followUpNote) { lines.push(''); lines.push('課後重點尚未填寫，可於課後資料中心補充。'); }
  } else if (template === 'officer') {
    lines.push(`📌 課程：${course.title || '未命名課程'}`);
    lines.push(`📅 時間：${courseTime}`);
    if (location?.name) lines.push(`📍 地點：${location.name}`);
    lines.push('');
    lines.push('🧾 幹部確認事項');
    lines.push(buildOfficerChecklistText(course, false));
  } else {
    lines.push(`📌 課程：${course.title || '未命名課程'}`);
    lines.push(`📅 日期：${formatDate(course.date)}`);
    lines.push(`⏰ 時間：${course.startTime || '未設定'}${course.endTime ? ' - ' + course.endTime : ''}`);
    if (course.speaker) lines.push(`👨‍🏫 講師：${course.speaker}`);
    if (course.category) lines.push(`🏷️ 主題：${course.category}`);
    if (location?.name) lines.push(`📍 地點：${location.name}`);
    if (location?.address) lines.push(`🏠 地址：${location.address}`);
    if (shareCardContext.includeMap && mapUrl) lines.push(`🗺️ Google 地圖：${mapUrl}`);
    if (shareCardContext.includeParking) lines.push(`🅿️ 停車：${parkingText}`);
    if (shareCardContext.includeFee) lines.push(`💰 餐費：${feeText}`);
    if (shareCardContext.includeStats) lines.push(`👥 出席：會出席 ${a.going.length}｜請假 ${a.leave.length}｜未回覆 ${a.unknown.length}｜參加人數 ${participantLabel(course)}`);
    if (shareCardContext.includeContent && course.content) {
      lines.push('');
      lines.push('📖 上課內容');
      lines.push(course.content);
    }
  }

  if ((template !== 'parking' && template !== 'payment') && (shareCardContext.includeReply || shareCardContext.includeCheckin || shareCardContext.includePublic)) {
    lines.push('');
    lines.push('🔗 常用連結');
    if (shareCardContext.includePublic) lines.push(`課程公開頁：${buildPublicLink('courses', course.id)}`);
    if (shareCardContext.includeReply) lines.push(`出席回覆：${replyUrl}`);
    if (shareCardContext.includeCheckin) lines.push(`簽到報到：${buildCheckinLink(course.id)}`);
  }
  const extra = String(shareCardContext.extraNote || '').trim();
  if (extra) { lines.push(''); lines.push(`📝 補充：${extra}`); }
  lines.push('');
  lines.push('— 山線養豬讀書會 —');
  return lines.join('\n').replace(/\n{3,}/g, '\n\n').trim();
}

function buildOfficerChecklistText(course, includeHeader = true) {
  if (!course) return '尚未選擇課程。';
  const location = getLocation(course.locationId);
  const a = normalizeAttendance(course.attendance);
  const finance = courseFinanceSummary(course);
  const lines = [];
  if (includeHeader) lines.push(`【幹部確認清單｜${course.title || '未命名課程'}】`);
  lines.push(`□ 確認餐廳：${location?.name || '尚未設定'} / 桌數與包廂`);
  lines.push(`□ 確認講師：${course.speaker || '尚未設定'} / 課程資料與投影設備`);
  lines.push(`□ 確認出席：會出席 ${a.going.length}｜請假 ${a.leave.length}｜未回覆 ${a.unknown.length}`);
  lines.push(`□ 確認停車：${course.parkingNote || location?.parkingNote || '尚未設定'}`);
  lines.push(`□ 確認餐費：未收 ${formatMoney(finance.unpaid)}`);
  lines.push('□ 課後：照片、附件、課程重點與問卷回饋');
  return lines.join('\n');
}

function buildShareCardLinksText(course) {
  return buildCourseCommonLinks(course).map(([label, url]) => `${label}：${url}`).join('\n') || '尚無連結。';
}

function renderCourseShareCard() {
  const select = $('#shareCardCourseSelect');
  const output = $('#shareCardOutput');
  if (!select || !output) return;
  const allCourses = sortedCourses();
  const courses = shareableUpcomingCourses();
  if (!allCourses.length) {
    select.innerHTML = '<option value="">尚無課程</option>';
    output.value = '尚未建立課程，請先到「年度課程表」新增課程。';
    if ($('#courseShareCardPreview')) $('#courseShareCardPreview').innerHTML = '<div class="empty-box">尚無可產生分享卡的課程。</div>';
    if ($('#shareCardMemberSignupBox')) $('#shareCardMemberSignupBox').innerHTML = '';
    return;
  }
  if (!courses.length) {
    select.innerHTML = '<option value="">目前沒有尚未上課的課程</option>';
    output.value = '目前沒有尚未上課的課程；已上完或已取消的課程不會出現在 LINE 公告 / 分享卡 / 報名連結選單。';
    if ($('#shareCardLengthPill')) $('#shareCardLengthPill').textContent = `${output.value.length} 字`;
    if ($('#courseShareCardPreview')) $('#courseShareCardPreview').innerHTML = '<div class="empty-box">目前沒有可產生分享卡的未上課程。</div>';
    if ($('#shareCardMemberSignupBox')) $('#shareCardMemberSignupBox').innerHTML = '<div class="empty-box">目前沒有尚未上課程可產生一般會員共用報名連結。</div>';
    if ($('#shareCardSummary')) $('#shareCardSummary').innerHTML = '';
    return;
  }
  if (!shareCardContext.courseId || !courses.some(course => course.id === shareCardContext.courseId)) shareCardContext.courseId = courses[0].id;
  select.innerHTML = courses.map(course => `<option value="${course.id}" ${course.id === shareCardContext.courseId ? 'selected' : ''}>${escapeHtml(notifyCourseTitle(course))}</option>`).join('');
  if ($('#shareCardTemplate')) $('#shareCardTemplate').value = shareCardContext.template;
  if ($('#shareCardTone')) $('#shareCardTone').value = shareCardContext.tone;
  if ($('#shareCardExtraNote')) $('#shareCardExtraNote').value = shareCardContext.extraNote;
  ['Map', 'Parking', 'Fee', 'Stats', 'Content', 'Reply', 'Checkin', 'Public'].forEach(key => {
    const el = $(`#shareCardInclude${key}`);
    if (el) el.checked = Boolean(shareCardContext[`include${key}`]);
  });
  renderCourseShareCardOutput();
}

function renderCourseShareCardOutput() {
  collectShareCardControls();
  const current = getCourse(shareCardContext.courseId);
  const course = current && isCourseOpenForReply(current) ? current : firstShareableCourse();
  const text = buildCourseShareCardText(course, false);
  const output = $('#shareCardOutput');
  if (output) output.value = text;
  if ($('#shareCardLengthPill')) $('#shareCardLengthPill').textContent = `${text.length} 字`;
  const preview = $('#courseShareCardPreview');
  const memberSignupBox = $('#shareCardMemberSignupBox');
  if (memberSignupBox && course) {
    const signupUrl = buildReplyLink(course.id);
    const cloudText = settings.syncUrl ? '已綁定 Apps Script，會員送出後會立即回傳 Google Sheet。' : '尚未設定 Apps Script Web App URL；設定後此連結會自動帶入同步參數。';
    memberSignupBox.innerHTML = `<div class="member-signup-link-head">
        <div><p class="eyebrow">Member Signup Link</p><h3>一般會員共用報名連結</h3></div>
        <span class="badge blue">LINE 群組用</span>
      </div>
      <p class="muted">把這個連結貼到 LINE 群組，會員自行輸入牧場名稱 / 姓名、是否參加與人數。幹部與會長則用管理端密碼登入後台。</p>
      <div class="share-url large-url">${escapeHtml(signupUrl)}</div>
      <div class="card-actions">
        <button class="mini-btn" data-copy-public-link="${escapeHtml(signupUrl)}">複製一般會員報名連結</button>
        <a class="mini-btn" href="${escapeHtml(signupUrl)}" target="_blank" rel="noopener">開啟測試</a>
      </div>
      <div class="small-note">${escapeHtml(cloudText)}</div>`;
  }
  if (preview && course) {
    const location = getLocation(course.locationId);
    const a = normalizeAttendance(course.attendance);
    const template = shareCardContext.template || 'formal';
    const tone = shareCardContext.tone || 'friendly';
    const templateLabel = shareCardTemplateLabel(template);
    const toneLabel = shareCardToneLabel(tone);
    const opening = shareCardOpening(template, tone);
    const previewNote = template === 'parking'
      ? `停車：${course.parkingNote || location?.parkingNote || '尚未設定'}`
      : template === 'payment'
        ? `餐費：${course.fee || courseFinanceSummary(course).unitFee || '尚未設定'}｜未收 ${formatMoney(courseFinanceSummary(course).unpaid)}`
        : template === 'after'
          ? (course.afterNote || course.applicationNote || '課後重點尚未填寫')
          : template === 'officer'
            ? '幹部確認：餐廳、講師、出席、停車、餐費、課後整理'
            : (course.content || '尚未填寫上課內容。');
    preview.innerHTML = `<div class="share-card-topline">山線養豬讀書會｜${escapeHtml(templateLabel)}｜${escapeHtml(toneLabel)}</div>
      <h3>${escapeHtml(course.title || '未命名課程')}</h3>
      <div class="share-card-opening">${escapeHtml(opening)}</div>
      <div class="share-card-meta">
        <span>📅 ${escapeHtml(formatDate(course.date))}</span>
        <span>⏰ ${escapeHtml(course.startTime || '未設定')}${course.endTime ? ' - ' + escapeHtml(course.endTime) : ''}</span>
        <span>🏷️ ${escapeHtml(course.category || '未分類')}</span>
      </div>
      <div class="share-card-location">📍 ${escapeHtml(location?.name || '尚未設定地點')}</div>
      <p>${escapeHtml(previewNote)}</p>
      <div class="share-card-stat-row">
        <span><strong>${a.going.length}</strong><small>會出席</small></span>
        <span><strong>${a.leave.length}</strong><small>請假</small></span>
        <span><strong>${a.unknown.length}</strong><small>未回覆</small></span>
        <span><strong>${escapeHtml(participantLabel(course))}</strong><small>參加人數</small></span>
      </div>
      <div class="share-card-footer">${escapeHtml(templateLabel)}會依版型輸出不同貼文內容</div>`;
  }
  const summary = $('#shareCardSummary');
  if (summary && course) {
    const finance = courseFinanceSummary(course);
    summary.innerHTML = `<div class="record-stat"><span>公告版型</span><strong>${escapeHtml(shareCardTemplateLabel(shareCardContext.template || 'formal'))}</strong></div>
      <div class="record-stat"><span>語氣</span><strong>${escapeHtml(shareCardToneLabel(shareCardContext.tone || 'friendly'))}</strong></div>
      <div class="record-stat"><span>參加人數</span><strong>${escapeHtml(participantLabel(course))}</strong></div>
      <div class="record-stat"><span>未收餐費</span><strong>${formatMoney(finance.unpaid)}</strong></div>
      <div class="record-stat"><span>常用連結</span><strong>${buildCourseCommonLinks(course).length}</strong></div>`;
  }
}

function copyShareCardText() {
  renderCourseShareCardOutput();
  const text = $('#shareCardOutput')?.value || '';
  if (!text) return;
  copyText(text).then(() => showToast('已複製單場課程分享卡文字'));
}

function copyShareCardCompact() {
  const current = getCourse(shareCardContext.courseId);
  const course = current && isCourseOpenForReply(current) ? current : firstShareableCourse();
  const text = buildCourseShareCardText(course, true);
  if (!text) return;
  copyText(text).then(() => showToast('已複製精簡版課程提醒'));
}

function openShareCardLine() {
  renderCourseShareCardOutput();
  const text = $('#shareCardOutput')?.value || '';
  if (!text) return;
  window.open(`https://line.me/R/msg/text/?${encodeURIComponent(text)}`, '_blank', 'noopener');
}


function checkinStatusLabel(status) {
  return ({ checked: '已報到', late: '遲到', absent: '未到', leave: '請假', '': '未報到' }[status] || '未報到');
}

function checkinBadgeClass(status) {
  return ({ checked: 'green', late: 'yellow', absent: 'red', leave: 'blue', '': 'gray' }[status] || 'gray');
}

function getCheckinSummary(course) {
  if (!course) return { checked: 0, late: 0, absent: 0, leave: 0, none: 0, actual: 0, expected: 0 };
  const result = { checked: 0, late: 0, absent: 0, leave: 0, none: 0, actual: 0, expected: 0 };
  const attendance = normalizeAttendance(course.attendance);
  const expectedMemberIds = attendance.going.length ? attendance.going : [];
  expectedMemberIds.forEach(memberId => {
    const status = course.checkins?.[memberId]?.status || '';
    if (status === 'checked') result.checked += 1;
    else if (status === 'late') result.late += 1;
    else if (status === 'absent') result.absent += 1;
    else if (status === 'leave') result.leave += 1;
    else result.none += 1;
  });
  (course.participantSignups || []).forEach(signup => {
    if (String(signup.status || 'going') !== 'going' || signup.needsReconfirm) return;
    const status = signup.checkinStatus || '';
    if (status === 'checked') result.checked += 1;
    else if (status === 'late') result.late += 1;
    else if (status === 'absent') result.absent += 1;
    else if (status === 'leave') result.leave += 1;
    else result.none += 1;
  });
  result.actual = result.checked + result.late;
  result.expected = expectedMemberIds.length + (course.participantSignups || []).filter(signup => String(signup.status || 'going') === 'going' && !signup.needsReconfirm).length;
  return result;
}

function buildCheckinLink(courseId, memberId = '', token = '') {
  const baseUrl = appBaseUrl();
  const params = new URLSearchParams({ mode: 'checkin', courseId });
  if (memberId) params.set('memberId', memberId);
  if (token) params.set('token', token);
  appendPublicSyncParams(params);
  return `${baseUrl}?${params.toString()}`;
}

function qrImageUrl(text, cacheKey = '') {
  const versionKey = cacheKey || simpleHash(text);
  return `https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=12&qrv=${encodeURIComponent(versionKey)}&data=${encodeURIComponent(text)}`;
}

function applyCheckinCourseSelection(courseId, event = null) {
  if (event && typeof event.stopPropagation === 'function') event.stopPropagation();
  const id = String(courseId || '').trim();
  if (!id) return;
  checkinContext.courseId = id;
  renderCheckin();
}

function resolveCheckinCourse() {
  const selectable = checkinSelectableCourses();
  if (checkinContext.courseId) {
    const selected = selectable.find(course => course.id === checkinContext.courseId);
    if (selected) return selected;
  }
  return selectable[0] || null;
}

function resolveCheckinMember() {
  if (checkinContext.memberId) return getMember(checkinContext.memberId);
  return null;
}

function renderCheckin() {
  const root = $('#view-checkin');
  if (!root) return;
  const selectableCourses = checkinSelectableCourses();
  const course = resolveCheckinCourse();
  const select = $('#checkinCourseSelect');
  if (select) {
    select.innerHTML = selectableCourses.length
      ? selectableCourses.map(c => `<option value="${c.id}" ${course?.id === c.id ? 'selected' : ''}>${formatDate(c.date)}｜${escapeHtml(c.title)}</option>`).join('')
      : '<option value="">目前沒有可簽到的未上課程</option>';
    select.disabled = !selectableCourses.length;
    // PKG060：課程一選到就立即刷新 QR Code，不等離開欄位或重新整理。
    select.oninput = event => applyCheckinCourseSelection(event.target.value, event);
    select.onchange = event => applyCheckinCourseSelection(event.target.value, event);
  }
  if (!course) {
    checkinContext.courseId = '';
    $('#checkinCourseTitle').textContent = '目前沒有可簽到的未上課程';
    $('#checkinCourseMeta').textContent = '已完成、取消或已過結束時間的課程不會顯示在簽到下拉選單中。';
    $('#checkinKpis').innerHTML = '';
    $('#checkinPublicBox').innerHTML = '<div class="empty-state">目前沒有可產生 QR Code 的未上課程。請新增下一堂課，或確認課程狀態仍為「未上課」。</div>';
    $('#checkinMemberTable tbody').innerHTML = '';
    return;
  }

  checkinContext.courseId = course.id;
  const location = getLocation(course.locationId);
  const summary = getCheckinSummary(course);
  const planned = numericParticipantCount(course);
  const attendance = normalizeAttendance(course.attendance);
  const plannedGoing = attendance.going.length;
  const generalLink = buildCheckinLink(course.id);

  $('#checkinCourseTitle').textContent = course.title;
  $('#checkinCourseMeta').textContent = `${formatDate(course.date)} ${course.startTime || ''}-${course.endTime || ''}｜${location?.name || '未設定地點'}`;
  $('#checkinKpis').innerHTML = [
    kpiCard('預估參加', `${planned || plannedGoing} 人`, '以課程參加人數或會出席人數估算'),
    kpiCard('實際報到', `${summary.actual} 人`, `已報到 ${summary.checked}｜遲到 ${summary.late}`),
    kpiCard('尚未報到', `${summary.none} 人`, `未到 ${summary.absent}｜請假 ${summary.leave}`),
    kpiCard('報到率', `${plannedGoing ? Math.round(summary.actual / plannedGoing * 100) : 0}%`, '以會出席名單為分母')
  ].join('');

  renderPublicCheckinBox(course, generalLink);
  renderCheckinTable(course);
}

function publicCheckinOptionRows(course) {
  if (!course) return [];
  const attendance = normalizeAttendance(course.attendance);
  const rows = [];
  attendance.going.forEach(memberId => {
    const member = getMember(memberId);
    if (!member) return;
    const item = course.checkins?.[member.id] || {};
    rows.push({
      value: `member:${member.id}`,
      label: `${member.name}｜${member.groupName || '未分組'}｜${checkinStatusLabel(item.status)}`,
      type: 'member',
      status: item.status || '',
      sortText: `${member.groupName || ''}${member.name || ''}`
    });
  });
  (course.participantSignups || []).forEach(signup => {
    if (String(signup.status || 'going') !== 'going' || signup.needsReconfirm) return;
    const name = signup.farmOrName || signup.contactName || '公開登記';
    const count = toPositiveInteger(signup.count, 1);
    rows.push({
      value: `signup:${signup.id}`,
      label: `${name}${signup.contactName ? `｜${signup.contactName}` : ''}｜${count} 人｜${checkinStatusLabel(signup.checkinStatus || '')}`,
      type: 'signup',
      status: signup.checkinStatus || '',
      sortText: `${name}${signup.contactName || ''}`
    });
  });
  return rows.sort((a, b) => String(a.sortText || '').localeCompare(String(b.sortText || ''), 'zh-Hant'));
}

function renderCheckinCourseQuickSelect(course) {
  const courses = checkinSelectableCourses();
  if (!courses.length) return '';
  const options = courses.map(c => `<option value="${escapeHtml(c.id)}" ${course?.id === c.id ? 'selected' : ''}>${escapeHtml(formatDate(c.date))}｜${escapeHtml(c.title)}</option>`).join('');
  return `<div class="checkin-public-card click-checkin-course-card">
    <div>
      <p class="eyebrow">Course</p>
      <h3>選擇要簽到的課程</h3>
      <p class="muted">不用掃 QR Code，也可以在這裡直接選課程後報到。</p>
    </div>
    <select id="publicCheckinCourseSelect" class="form-control">${options}</select>
  </div>`;
}

function renderPublicGeneralCheckinBox(course, mode = 'qr') {
  const rows = publicCheckinOptionRows(course);
  const options = rows.length
    ? rows.map(row => `<option value="${escapeHtml(row.value)}">${escapeHtml(row.label)}</option>`).join('')
    : '<option value="">尚無已回覆會出席名單</option>';
  const checkedCount = rows.filter(row => row.status === 'checked' || row.status === 'late').length;
  const isDirect = mode === 'direct';
  const mainEyebrow = isDirect ? 'Click Check-in' : 'QR Code 現場報到';
  const mainTitle = isDirect ? '已回覆出席者，直接選擇後按報到確認' : '已回覆出席者，請從選單選擇後按報到確認';
  const mainText = isDirect
    ? `目前課程：${escapeHtml(formatDate(course.date))}｜${escapeHtml(course.title)}。若你已經有出席回覆，不用掃 QR Code，直接從下方選單選擇姓名 / 牧場名稱後報到。`
    : `此頁面已綁定課程：${escapeHtml(formatDate(course.date))}｜${escapeHtml(course.title)}。若已經有出席回覆，請直接選擇姓名 / 牧場名稱；若沒有出席回覆，請使用下方「現場新增報到」。`;
  const sourceNote = isDirect
    ? '選單來源包含：會員端出席回覆為「會出席」者，以及公開報名表已填寫「會出席」的資料。'
    : '選單來源包含：會員端出席回覆為「會出席」者，以及公開報名表已填寫「會出席」的資料。';
  return `
    <div class="checkin-public-card public-checkin-select-card ${isDirect ? 'click-checkin-card' : ''}">
      <div>
        <p class="eyebrow">${mainEyebrow}</p>
        <h3>${mainTitle}</h3>
        <p class="muted">${mainText}</p>
      </div>
      <div class="public-checkin-summary-row">
        <span class="badge green">已回覆 ${rows.length}</span>
        <span class="badge blue">已報到 ${checkedCount}</span>
      </div>
      <div class="public-checkin-form-row">
        <select id="publicCheckinExistingSelect" class="form-control" ${rows.length ? '' : 'disabled'}>${options}</select>
        <button class="primary-btn" id="submitPublicCheckinSelection" ${rows.length ? '' : 'disabled'}>${isDirect ? '直接報到確認' : '報到確認'}</button>
      </div>
      <p class="small-note">${sourceNote}</p>
    </div>
    <div class="checkin-public-card public-walkin-checkin-card">
      <div>
        <p class="eyebrow">未事先回覆 / 臨時到場</p>
        <h3>現場新增報到</h3>
        <p class="muted">若選單找不到資料，代表原本沒有出席回覆；請在這裡填寫牧場 / 姓名與人數，系統會同時建立出席回覆並完成報到。</p>
      </div>
      <div class="public-walkin-grid">
        <label>牧場名稱 / 姓名<input id="publicCheckinWalkinName" class="form-control" placeholder="例如：王泰山牧場 / 王先生" autocomplete="name" /></label>
        <label>聯絡人<input id="publicCheckinWalkinContact" class="form-control" placeholder="可留空" autocomplete="name" /></label>
        <label>報到人數<input id="publicCheckinWalkinCount" class="form-control" type="number" min="1" value="1" inputmode="numeric" /></label>
        <label>電話<input id="publicCheckinWalkinPhone" class="form-control" placeholder="可留空" autocomplete="tel" /></label>
      </div>
      <label class="public-walkin-note">備註<textarea id="publicCheckinWalkinNote" class="form-control" rows="2" placeholder="例如：臨時增加 1 人、由同牧場代填"></textarea></label>
      <button class="primary-btn" id="submitWalkinCheckin">新增並完成報到</button>
    </div>`;
}

function renderClickCheckinBox(course) {
  return `<div class="click-checkin-section">
    ${renderCheckinCourseQuickSelect(course)}
    ${renderPublicGeneralCheckinBox(course, 'direct')}
  </div>`;
}


function setSignupCheckinStatus(courseId, signupId, status = 'checked', note = '') {
  const course = getCourse(courseId);
  if (!course || !Array.isArray(course.participantSignups)) return null;
  const signup = course.participantSignups.find(item => String(item.id) === String(signupId));
  if (!signup) return null;
  const now = new Date().toLocaleString('zh-TW', { hour12: false });
  signup.checkinStatus = status === 'clear' ? '' : status;
  signup.checkinTime = status === 'clear' ? '' : now;
  signup.checkinNote = status === 'clear' ? '' : (note || 'QR Code 現場報到');
  signup.checkedCount = status === 'checked' || status === 'late' ? String(toPositiveInteger(signup.count, 1)) : '';
  signup.updatedAt = now;
  course.updatedAt = now;
  course.participantCount = String(publicSignupTotal(course));
  markPublicLocalMutation();
  saveState();
  render();
  return signup;
}

async function syncPublicCheckin(payload) {
  if (!settings.syncUrl) return;
  try {
    const json = await postCloud('publicCheckin', payload, settings.readToken || settings.adminToken);
    if (json.payload) {
      settings.lastSync = new Date().toISOString();
      saveSettings();
    }
    showToast('報到已同步雲端');
  } catch (error) {
    console.warn(error);
    showToast('本機已報到，雲端同步失敗');
  }
}

function selectedPublicCheckinOption() {
  return ($('#publicCheckinExistingSelect')?.value || '').trim();
}

async function submitPublicCheckinSelection() {
  const course = resolveCheckinCourse();
  const value = selectedPublicCheckinOption();
  if (!course || !value) { alert('請先選擇要報到的資料。'); return; }
  const [type, id] = value.split(':');
  if (type === 'member') {
    const member = getMember(id);
    if (!member) { alert('找不到會員資料。'); return; }
    markPublicLocalMutation();
    setCheckinStatus(course.id, member.id, 'checked', '現場點擊 / QR Code 報到');
    showToast('已完成報到確認');
    await syncPublicCheckin({ courseId: course.id, memberId: member.id, status: 'checked', note: '現場點擊 / QR Code 報到' });
    return;
  }
  if (type === 'signup') {
    const signup = setSignupCheckinStatus(course.id, id, 'checked', '現場點擊 / QR Code 報到');
    if (!signup) { alert('找不到公開報名資料。'); return; }
    showToast('已完成報到確認');
    await syncPublicCheckin({ courseId: course.id, signupId: signup.id, status: 'checked', note: '現場點擊 / QR Code 報到' });
  }
}

async function submitWalkinCheckin() {
  const course = resolveCheckinCourse();
  if (!course) { alert('找不到課程資料。'); return; }
  const farmOrName = ($('#publicCheckinWalkinName')?.value || '').trim();
  const contactName = ($('#publicCheckinWalkinContact')?.value || '').trim();
  const count = toPositiveInteger($('#publicCheckinWalkinCount')?.value || '1', 1);
  const phone = ($('#publicCheckinWalkinPhone')?.value || '').trim();
  const note = ($('#publicCheckinWalkinNote')?.value || '').trim();
  if (!farmOrName) { alert('請輸入牧場名稱或姓名。'); $('#publicCheckinWalkinName')?.focus(); return; }
  const now = new Date().toLocaleString('zh-TW', { hour12: false });
  markPublicLocalMutation();
  const result = upsertPublicSignup(course, {
    farmOrName,
    contactName,
    count: String(Math.max(1, count)),
    phone,
    note,
    status: 'going',
    checkinStatus: 'checked',
    checkinTime: now,
    checkinNote: '現場新增報到',
    checkedCount: String(Math.max(1, count))
  });
  if (!result?.item) return;
  result.item.checkinStatus = 'checked';
  result.item.checkinTime = now;
  result.item.checkinNote = '現場新增報到';
  result.item.checkedCount = String(Math.max(1, count));
  saveState();
  render();
  showToast('已新增並完成報到');
  if (settings.syncUrl) {
    await syncPublicCheckin({
      courseId: course.id,
      signup: result.item,
      status: 'checked',
      note: '現場新增報到'
    });
  }
}

function renderPublicCheckinBox(course, generalLink) {
  const member = resolveCheckinMember();
  const tokenOk = member && checkinContext.token && checkinContext.token === member.memberToken;
  const root = $('#checkinPublicBox');
  if (!root) return;

  const isQrCheckinPage = new URLSearchParams(window.location.search).get('mode') === 'checkin';
  if (isQrCheckinPage && !member) {
    root.innerHTML = renderPublicGeneralCheckinBox(course);
    return;
  }

  if (isQrCheckinPage && member) {
    const current = course.checkins?.[member.id] || {};
    root.innerHTML = `
      <div class="checkin-public-card">
        <div>
          <p class="eyebrow">Member Check-in</p>
          <h3>${escapeHtml(member.name)}｜${escapeHtml(course.title)}</h3>
          <p class="muted">${tokenOk ? '身分驗證完成，可直接按下方按鈕完成報到。' : 'Token 不符合，請使用組長提供的專屬報到連結。'}</p>
          <p class="small-text">目前狀態：<span class="badge ${checkinBadgeClass(current.status)}">${checkinStatusLabel(current.status)}</span>${current.time ? `｜${escapeHtml(current.time)}` : ''}</p>
        </div>
        <div class="stack-actions">
          <button class="primary-btn" id="submitCheckin" ${tokenOk ? '' : 'disabled'}>完成現場報到</button>
          <button class="ghost-btn" id="reloadFromCloud">從雲端重新整理</button>
        </div>
      </div>`;
    return;
  }

  const directOptions = state.members
    .map(member => `<option value="${escapeHtml(member.id)}">${escapeHtml(member.name)}｜${escapeHtml(member.groupName || '未分組')}｜${escapeHtml(member.role || '會員')}</option>`)
    .join('');
  root.innerHTML = `
    ${renderClickCheckinBox(course)}
    <div class="checkin-qr-layout compact-qr-layout">
      <div class="qr-card">
        <img id="checkinQrImage" data-course-id="${escapeHtml(course.id)}" src="${qrImageUrl(generalLink, course.id)}" alt="本場簽到 QR Code" />
        <span>本場共用報到 QR Code</span>
      </div>
      <div class="checkin-public-card">
        <p class="eyebrow">QR Code Backup</p>
        <h3>也可以掃碼報到</h3>
        <p class="muted">若現場要放 QR Code，仍可使用這個本堂課專屬連結；不用掃碼時，請直接使用上方「直接報到確認」。</p>
        <div class="copy-url-box" id="checkinQrLinkBox" data-course-id="${escapeHtml(course.id)}">${escapeHtml(generalLink)}</div>
        <div class="stack-actions">
          <button class="ghost-btn" data-copy-checkin-link="${escapeHtml(generalLink)}">複製本場共用報到連結</button>
          <button class="primary-btn admin-only" id="copyAllCheckinLinks">複製全部會員專屬報到連結</button>
          <button class="ghost-btn admin-only" id="printCheckinSheet">列印簽到表 / QR Code</button>
          <button class="ghost-btn admin-only" id="exportCheckinCsv">匯出報到 CSV</button>
        </div>
      </div>
    </div>
    <div class="direct-checkin-box admin-only">
      <div>
        <p class="eyebrow">Admin Direct Check-in</p>
        <h3>管理端快速簽到</h3>
        <p class="muted">管理端可直接搜尋或選擇會員後按「直接簽到」；會員端則可使用上方「直接報到確認」。</p>
      </div>
      <div class="direct-checkin-row">
        <input id="directCheckinSearch" class="form-control" placeholder="搜尋姓名、組別、角色..." autocomplete="off" />
        <select id="directCheckinMember" class="form-control">${directOptions || '<option value="">尚未建立會員</option>'}</select>
        <button class="primary-btn" data-direct-checkin="${escapeHtml(course.id)}">直接簽到</button>
        <button class="ghost-btn" data-direct-checkin-late="${escapeHtml(course.id)}">標記遲到</button>
      </div>
      <div class="direct-checkin-hints" id="directCheckinHints"></div>
    </div>`;
  renderDirectCheckinHints(course.id, '');
}

function filterDirectCheckinMembers(keyword = '') {
  const term = String(keyword || '').trim().toLowerCase();
  if (!term) return state.members;
  return state.members.filter(member => [member.name, member.groupName, member.role, member.farmName, member.area]
    .some(value => String(value || '').toLowerCase().includes(term)));
}

function renderDirectCheckinHints(courseId, keyword = '') {
  const box = $('#directCheckinHints');
  const select = $('#directCheckinMember');
  if (!box || !select) return;
  const course = getCourse(courseId);
  const members = filterDirectCheckinMembers(keyword).slice(0, 12);
  select.innerHTML = members.length
    ? members.map(member => `<option value="${escapeHtml(member.id)}">${escapeHtml(member.name)}｜${escapeHtml(member.groupName || '未分組')}｜${escapeHtml(member.role || '會員')}</option>`).join('')
    : '<option value="">查無會員</option>';
  box.innerHTML = members.length
    ? members.map(member => {
        const item = course?.checkins?.[member.id] || {};
        return `<button type="button" class="direct-checkin-chip" data-direct-member="${escapeHtml(member.id)}">
          <strong>${escapeHtml(member.name)}</strong><span>${escapeHtml(member.groupName || '未分組')}｜${checkinStatusLabel(item.status)}</span>
        </button>`;
      }).join('')
    : '<div class="small-note">查無符合的會員，可改用下拉選單或先到會員名錄新增。</div>';
}

function runDirectCheckin(courseId, status = 'checked') {
  const select = $('#directCheckinMember');
  const memberId = select?.value || '';
  if (!courseId || !memberId) {
    alert('請先選擇要簽到的會員。');
    return;
  }
  setCheckinStatus(courseId, memberId, status, status === 'late' ? '管理端直接標記遲到' : '管理端直接簽到');
  showToast(status === 'late' ? '已標記遲到' : '已完成直接簽到');
}

function renderCheckinTable(course) {
  const tbody = $('#checkinMemberTable tbody');
  if (!tbody) return;
  const attendance = normalizeAttendance(course.attendance);
  const memberRows = state.members.map(member => {
    const item = course.checkins?.[member.id] || {};
    const planned = attendance.going.includes(member.id) ? '會出席' : attendance.leave.includes(member.id) ? '請假' : '未回覆';
    const link = buildCheckinLink(course.id, member.id, member.memberToken);
    return `<tr>
      <td><strong>${escapeHtml(member.name)}</strong><br><span class="muted">${escapeHtml(member.groupName || '未分組')}｜${escapeHtml(member.role || '會員')}</span></td>
      <td>${planned}</td>
      <td><span class="badge ${checkinBadgeClass(item.status)}">${checkinStatusLabel(item.status)}</span></td>
      <td>${escapeHtml(item.time || '—')}</td>
      <td>${escapeHtml(item.note || '')}</td>
      <td class="table-actions">
        <button class="tiny-btn" data-set-checkin="${course.id}|${member.id}|checked">已報到</button>
        <button class="tiny-btn" data-set-checkin="${course.id}|${member.id}|late">遲到</button>
        <button class="tiny-btn" data-set-checkin="${course.id}|${member.id}|absent">未到</button>
        <button class="tiny-btn" data-set-checkin="${course.id}|${member.id}|clear">清除</button>
        <button class="tiny-btn" data-copy-checkin-link="${escapeHtml(link)}">複製連結</button>
      </td>
    </tr>`;
  });
  const signupRows = (course.participantSignups || []).map(signup => {
    const status = signup.checkinStatus || '';
    const name = signup.farmOrName || signup.contactName || '公開登記';
    return `<tr class="public-signup-row">
      <td><strong>${escapeHtml(name)}</strong><br><span class="muted">公開回覆${signup.contactName ? `｜${escapeHtml(signup.contactName)}` : ''}</span></td>
      <td>${publicSignupStatusLabel(signup.status)}｜${escapeHtml(signup.count || '0')} 人</td>
      <td><span class="badge ${checkinBadgeClass(status)}">${checkinStatusLabel(status)}</span></td>
      <td>${escapeHtml(signup.checkinTime || '—')}</td>
      <td>${escapeHtml(signup.checkinNote || signup.note || '')}</td>
      <td class="table-actions">
        <button class="tiny-btn" data-set-signup-checkin="${course.id}|${signup.id}|checked">已報到</button>
        <button class="tiny-btn" data-set-signup-checkin="${course.id}|${signup.id}|late">遲到</button>
        <button class="tiny-btn" data-set-signup-checkin="${course.id}|${signup.id}|absent">未到</button>
        <button class="tiny-btn" data-set-signup-checkin="${course.id}|${signup.id}|clear">清除</button>
      </td>
    </tr>`;
  });
  tbody.innerHTML = [...memberRows, ...signupRows].join('');
}

async function submitCheckin() {
  const course = resolveCheckinCourse();
  const member = resolveCheckinMember();
  if (!course || !member) return;
  if (checkinContext.token !== member.memberToken) {
    alert('Token 不符合，請使用組長提供的專屬報到連結。');
    return;
  }
  setCheckinStatus(course.id, member.id, 'checked', '會員掃碼自行報到');
  if (settings.syncUrl) {
    try {
      const json = await postCloud('checkin', { courseId: course.id, memberId: member.id, status: 'checked', note: '會員掃碼自行報到' }, member.memberToken);
      if (json.payload) {
        state = ensureFormalDataForCloudPayload(json.payload, state);
        saveState();
        render();
      }
      showToast('已完成報到並同步雲端');
    } catch (error) {
      console.warn(error);
      showToast('已本機報到，雲端同步失敗');
    }
  } else {
    showToast('已完成本機報到');
  }
}

function setCheckinStatus(courseId, memberId, status, note = '') {
  const course = getCourse(courseId);
  if (!course || !getMember(memberId)) return;
  if (!course.checkins) course.checkins = {};
  if (status === 'clear') {
    course.checkins[memberId] = { status: '', time: '', note: '' };
  } else {
    course.checkins[memberId] = {
      status,
      time: new Date().toLocaleString('zh-TW', { hour12: false }),
      note: note || (status === 'checked' ? '現場報到' : status === 'late' ? '現場標記遲到' : status === 'absent' ? '現場標記未到' : '')
    };
  }
  if (status === 'checked' || status === 'late') {
    const a = normalizeAttendance(course.attendance);
    if (!a.going.includes(memberId)) a.going.push(memberId);
    a.leave = a.leave.filter(id => id !== memberId);
    a.unknown = a.unknown.filter(id => id !== memberId);
    course.attendance = a;
    course.participantCount = String(getCheckinSummary(course).actual || numericParticipantCount(course));
  }
  saveState();
  render();
}

function buildAllCheckinLinks(courseId) {
  const course = getCourse(courseId);
  if (!course) return '';
  return state.members.map(member => `${member.name}：${buildCheckinLink(course.id, member.id, member.memberToken)}`).join('\n');
}

function buildCheckinSheetText(course) {
  if (!course) return '';
  const location = getLocation(course.locationId);
  const rows = state.members.map((member, index) => `${index + 1}. ${member.name}（${member.groupName || '未分組'}）　□簽到　□繳費　備註：`).join('\n');
  return `山線養豬讀書會｜課程簽到表\n課程：${course.title}\n時間：${formatDate(course.date)} ${course.startTime || ''}-${course.endTime || ''}\n地點：${location?.name || '未設定'}\n\n${rows}`;
}

function printCheckinSheet() {
  const course = resolveCheckinCourse();
  if (!course) return;
  const text = buildCheckinSheetText(course).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
  const link = buildCheckinLink(course.id);
  const win = window.open('', '_blank');
  win.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>簽到表</title><style>body{font-family:Arial,"Noto Sans TC",sans-serif;padding:28px;line-height:1.7}h1{font-size:24px}.qr{float:right;text-align:center}pre{white-space:pre-wrap;font-size:16px}.row{border-bottom:1px solid #ddd;padding:8px 0}@media print{button{display:none}}</style></head><body><button onclick="window.print()">列印</button><div class="qr"><img src="${qrImageUrl(link, course.id)}" width="150"><div>本課程專屬報到 QR</div></div><pre>${text}</pre></body></html>`);
  win.document.close();
}

function exportCheckinCsv() {
  const course = resolveCheckinCourse();
  if (!course) return;
  const rows = [['課程ID','課程日期','課程主題','會員ID','姓名','組別','預定出席','報到狀態','報到時間','備註']];
  const attendance = normalizeAttendance(course.attendance);
  state.members.forEach(member => {
    const item = course.checkins?.[member.id] || {};
    const planned = attendance.going.includes(member.id) ? '會出席' : attendance.leave.includes(member.id) ? '請假' : '未回覆';
    rows.push([course.id, course.date || '', course.title || '', member.id, member.name || '', member.groupName || '', planned, checkinStatusLabel(item.status), item.time || '', item.note || '']);
  });
  downloadTextFile(`山線養豬讀書會_${course.date || '課程'}_簽到報到.csv`, '﻿' + toCsv(rows), 'text/csv;charset=utf-8');
}


function renderBackups() {
  const all = loadBackups();
  const list = filteredBackups();
  const latest = all[0] || null;
  const autoCount = all.filter(item => item.type === 'auto').length;
  const manualCount = all.filter(item => item.type === 'manual').length;
  const totalSize = all.reduce((sum, item) => sum + (Number(item.size) || 0), 0);
  const kpis = $('#backupKpis');
  if (kpis) {
    kpis.innerHTML = [
      ['備份數', all.length],
      ['自動備份', autoCount],
      ['手動備份', manualCount],
      ['使用容量', formatBytes(totalSize)],
      ['目前會員', state.members.length],
      ['目前課程', state.courses.length]
    ].map(([label, value]) => `<div class="kpi-card"><span>${label}</span><strong>${escapeHtml(value)}</strong></div>`).join('');
  }
  const latestBox = $('#backupLatestBox');
  if (latestBox) {
    latestBox.innerHTML = latest ? `最新備份：<strong>${escapeHtml(latest.title)}</strong>｜${escapeHtml(backupTypeLabel(latest.type))}｜${escapeHtml(latest.displayTime || latest.createdAt || '')}｜課程 ${latest.summary?.courses ?? '-'} 場、會員 ${latest.summary?.members ?? '-'} 位` : '目前尚未建立備份。建議先按「建立手動備份」。';
  }
  const table = $('#backupTable');
  if (table) {
    if (!list.length) {
      table.innerHTML = `<tr><td colspan="7"><div class="empty-box">目前沒有符合條件的備份紀錄。</div></td></tr>`;
    } else {
      table.innerHTML = list.map(item => `
        <tr>
          <td><strong>${escapeHtml(item.title || '未命名備份')}</strong><br><span class="muted small-text">${escapeHtml(item.id)}</span></td>
          <td><span class="badge ${item.type === 'manual' ? 'green' : item.type === 'auto' ? 'blue' : ''}">${escapeHtml(backupTypeLabel(item.type))}</span></td>
          <td>${escapeHtml(item.displayTime || (item.createdAt || '').replace('T', ' ').slice(0, 19))}</td>
          <td>會員 ${item.summary?.members ?? 0}<br>課程 ${item.summary?.courses ?? 0}<br>地點 ${item.summary?.locations ?? 0}</td>
          <td>已完成 ${item.summary?.done ?? 0}<br>未上課 ${item.summary?.planned ?? 0}<br>公告 ${item.summary?.announcements ?? 0}</td>
          <td>${escapeHtml(formatBytes(item.size || JSON.stringify(item.data || {}).length))}</td>
          <td>
            <div class="stack-actions compact-actions">
              <button class="mini-btn" data-export-backup="${escapeHtml(item.id)}">匯出</button>
              <button class="mini-btn" data-restore-backup="${escapeHtml(item.id)}">還原</button>
              <button class="mini-btn danger-mini" data-delete-backup="${escapeHtml(item.id)}">刪除</button>
            </div>
          </td>
        </tr>
      `).join('');
    }
  }
}

function createManualBackup() {
  const defaultTitle = `手動備份 ${new Date().toLocaleString('zh-TW')}`;
  const title = prompt('請輸入備份名稱：', defaultTitle);
  if (title === null) return;
  const item = createBackupSnapshot('manual', title.trim() || defaultTitle);
  renderBackups();
  showToast(item ? '已建立手動備份' : '建立備份失敗');
}

function restoreBackup(id) {
  const item = loadBackups().find(backup => backup.id === id);
  if (!item) { alert('找不到這筆備份。'); return; }
  const ok = confirm(`確定要還原「${item.title}」嗎？\n\n目前資料會先自動建立一份「還原前備份」，再用此備份覆蓋。`);
  if (!ok) return;
  createBackupSnapshot('manual', `還原前備份 ${new Date().toLocaleString('zh-TW')}`);
  state = normalizeState(clone(item.data));
  saveState({ skipBackup: true, skipDirty: true });
  render();
  showToast('已還原指定備份');
}

function exportBackup(id) {
  const item = loadBackups().find(backup => backup.id === id);
  if (!item) { alert('找不到這筆備份。'); return; }
  const safeName = (item.title || '備份').replace(/[\\/:*?"<>|]/g, '_').slice(0, 40);
  downloadTextFile(`山線養豬讀書會_${safeName}_${(item.createdAt || '').slice(0,10)}.json`, JSON.stringify(item.data, null, 2), 'application/json;charset=utf-8');
  showToast('已匯出指定備份 JSON');
}

function deleteBackup(id) {
  const item = loadBackups().find(backup => backup.id === id);
  const ok = confirm(`確定刪除備份「${item?.title || id}」嗎？`);
  if (!ok) return;
  saveBackups(loadBackups().filter(backup => backup.id !== id));
  renderBackups();
  showToast('已刪除備份');
}

function clearAutoBackups() {
  const ok = confirm('確定清除所有「自動備份」嗎？手動備份會保留。');
  if (!ok) return;
  saveBackups(loadBackups().filter(item => item.type !== 'auto'));
  renderBackups();
  showToast('已清除自動備份');
}

function exportBackupList() {
  const rows = [['備份ID', '名稱', '類型', '時間', '會員數', '課程數', '地點數', '已完成課程', '未上課程', '公告數', '容量']];
  loadBackups().forEach(item => rows.push([
    item.id,
    item.title || '',
    backupTypeLabel(item.type),
    item.displayTime || item.createdAt || '',
    item.summary?.members ?? 0,
    item.summary?.courses ?? 0,
    item.summary?.locations ?? 0,
    item.summary?.done ?? 0,
    item.summary?.planned ?? 0,
    item.summary?.announcements ?? 0,
    formatBytes(item.size || 0)
  ]));
  downloadTextFile(`山線養豬讀書會_備份清單_${new Date().toISOString().slice(0,10)}.csv`, '\ufeff' + toCsv(rows), 'text/csv;charset=utf-8');
  showToast('已匯出備份清單 CSV');
}


function getSystemSettingsFromForm() {
  settings.defaultMode = $('#settingDefaultMode')?.value || settings.defaultMode || 'member';
  settings.requireAdminLogin = $('#settingRequireAdminLogin')?.value || 'true';
  settings.adminPassword = ($('#settingAdminPassword')?.value || '').trim() || settings.adminPassword || settings.adminToken || 'pig2025';
  settings.adminToken = ($('#settingAdminToken')?.value || '').trim() || settings.adminToken || 'shanxian_admin_2026';
  settings.readToken = ($('#settingReadToken')?.value || '').trim() || settings.readToken || 'shanxian_read_2026';
  settings.syncUrl = ($('#settingSyncUrl')?.value || '').trim() || defaultSettings.syncUrl;
  settings.githubPagesUrl = ($('#settingGitHubUrl')?.value || '').trim();
  settings.memberAllowDirectory = $('#settingMemberAllowDirectory')?.checked ? 'true' : 'false';
  settings.memberShowFarmName = $('#settingMemberShowFarmName')?.checked ? 'true' : 'false';
  settings.memberShowFarmType = $('#settingMemberShowFarmType')?.checked ? 'true' : 'false';
  settings.memberShowScale = $('#settingMemberShowScale')?.checked ? 'true' : 'false';
  settings.memberShowPhone = $('#settingMemberShowPhone')?.checked ? 'true' : 'false';
  settings.memberShowLine = $('#settingMemberShowLine')?.checked ? 'true' : 'false';
  settings.memberShowSpecialty = $('#settingMemberShowSpecialty')?.checked ? 'true' : 'false';
  settings.memberShowBio = $('#settingMemberShowBio')?.checked ? 'true' : 'false';
  settings.publicHomeNote = ($('#settingPublicHomeNote')?.value || '').trim();
}

function renderSystemSettings() {
  if (!$('#view-settings')) return;
  const setValue = (id, value) => { const el = $(`#${id}`); if (el && document.activeElement !== el) el.value = value ?? ''; };
  const setChecked = (id, value) => { const el = $(`#${id}`); if (el) el.checked = boolSetting(value); };
  setValue('settingDefaultMode', settings.defaultMode || 'member');
  setValue('settingRequireAdminLogin', String(settings.requireAdminLogin ?? 'true'));
  setValue('settingAdminPassword', settings.adminPassword || '');
  setValue('settingAdminToken', settings.adminToken || '');
  setValue('settingReadToken', settings.readToken || '');
  setValue('settingSyncUrl', settings.syncUrl || '');
  setValue('settingGitHubUrl', settings.githubPagesUrl || '');
  setValue('settingPublicHomeNote', settings.publicHomeNote || '');
  setValue('settingSessionNote', isAdminUnlocked() ? '已解鎖，可使用管理端' : '未解鎖，需輸入管理端密碼');
  setChecked('settingMemberAllowDirectory', settings.memberAllowDirectory);
  setChecked('settingMemberShowFarmName', settings.memberShowFarmName);
  setChecked('settingMemberShowFarmType', settings.memberShowFarmType);
  setChecked('settingMemberShowScale', settings.memberShowScale);
  setChecked('settingMemberShowPhone', settings.memberShowPhone);
  setChecked('settingMemberShowLine', settings.memberShowLine);
  setChecked('settingMemberShowSpecialty', settings.memberShowSpecialty);
  setChecked('settingMemberShowBio', settings.memberShowBio);

  const summary = $('#settingsSummaryGrid');
  if (summary) {
    summary.innerHTML = [
      { label: '預設模式', value: settings.defaultMode === 'admin' ? '管理端' : '會員端公開版' },
      { label: '管理端密碼', value: adminProtectionEnabled() ? '已啟用' : '未啟用' },
      { label: '會員名錄', value: boolSetting(settings.memberAllowDirectory) ? '會員端可見' : '會員端隱藏' },
      { label: 'GitHub 連結', value: settings.githubPagesUrl ? '使用上線網址' : '使用目前網址' },
      { label: 'Google Sheet', value: settings.syncUrl ? '已填寫 URL' : '尚未設定' }
    ].map(item => `<div class="kpi-card"><span>${escapeHtml(item.label)}</span><strong>${escapeHtml(item.value)}</strong></div>`).join('');
  }

  const preview = $('#memberPrivacyPreview');
  if (preview) {
    const visible = [];
    if (boolSetting(settings.memberShowFarmName)) visible.push('豬場名稱');
    if (boolSetting(settings.memberShowFarmType)) visible.push('飼養型態');
    if (boolSetting(settings.memberShowScale)) visible.push('飼養規模');
    if (boolSetting(settings.memberShowPhone)) visible.push('電話');
    if (boolSetting(settings.memberShowLine)) visible.push('LINE ID');
    if (boolSetting(settings.memberShowSpecialty)) visible.push('專長');
    if (boolSetting(settings.memberShowBio)) visible.push('簡介');
    preview.innerHTML = boolSetting(settings.memberAllowDirectory)
      ? `會員端可查看會員名錄；目前公開欄位：<strong>${visible.length ? visible.map(escapeHtml).join('、') : '僅姓名、身份、地區與組別'}</strong>。`
      : '會員端目前不顯示會員名錄；只有管理端可查看完整會員資料。';
  }

  const linkGrid = $('#settingsLinkGrid');
  if (linkGrid) {
    linkGrid.innerHTML = [
      shareLinkCard('會員端首頁連結網址', '適合貼到 LINE 群組置頂；會優先使用 GitHub Pages 網址。', buildPublicLink('dashboard')),
      shareLinkCard('會員端課表連結網址', '直接打開年度課程表；會自動帶入雲端同步參數。', buildPublicLink('courses')),
      shareLinkCard('管理端登入網址', '會帶入 Admin Token，適合自己電腦測試用，勿公開轉傳。', buildAdminLoginLink())
    ].join('');
  }
}

function saveSystemSettings() {
  getSystemSettingsFromForm();
  saveSettings();
  applyPermissionClasses();
  renderSyncSettings();
  renderSystemSettings();
  renderMembers();
  showToast('系統設定已儲存');
}

function buildAdminLoginLink() {
  const base = appBaseUrl();
  const params = new URLSearchParams({ mode: 'admin', view: 'dashboard' });
  if (settings.adminToken) params.set('adminToken', settings.adminToken);
  return `${base}?${params.toString()}`;
}

function buildSettingsSummaryText() {
  return [
    '山線養豬讀書會｜系統設定摘要',
    `預設模式：${settings.defaultMode === 'admin' ? '管理端' : '會員端公開版'}`,
    `管理端密碼保護：${adminProtectionEnabled() ? '啟用' : '停用'}`,
    `會員端會員名錄：${boolSetting(settings.memberAllowDirectory) ? '開放' : '隱藏'}`,
    `會員端顯示電話：${boolSetting(settings.memberShowPhone) ? '是' : '否'}`,
    `會員端顯示 LINE：${boolSetting(settings.memberShowLine) ? '是' : '否'}`,
    `會員端顯示豬場名稱：${boolSetting(settings.memberShowFarmName) ? '是' : '否'}`,
    `會員端顯示規模：${boolSetting(settings.memberShowScale) ? '是' : '否'}`,
    `GitHub Pages 網址：${settings.githubPagesUrl || '尚未設定，暫用目前開啟網址'}`,
    `Google Sheet URL：${settings.syncUrl ? '已設定' : '尚未設定'}`
  ].join('\n');
}

function resetSystemSettings() {
  const ok = confirm('確定要恢復系統設定預設值嗎？不會刪除課程與會員資料，但會重設密碼、公開欄位與同步欄位。');
  if (!ok) return;
  settings = { ...defaultSettings };
  lockAdminSession();
  saveSettings();
  render();
  showToast('系統設定已恢復預設值');
}

function renderSyncSettings() {
  if ($('#syncUrl')) $('#syncUrl').value = settings.syncUrl || '';
  if ($('#adminToken')) $('#adminToken').value = settings.adminToken || '';
  if ($('#readToken')) $('#readToken').value = settings.readToken || '';
  if ($('#autoUploadCloud')) $('#autoUploadCloud').checked = boolSetting(settings.autoUploadCloud);
  if ($('#autoDownloadCloud')) $('#autoDownloadCloud').checked = boolSetting(settings.autoDownloadCloud);
  if ($('#autoDownloadIntervalMs')) $('#autoDownloadIntervalMs').value = String(settings.autoDownloadIntervalMs || defaultSettings.autoDownloadIntervalMs);
  if ($('#settingSyncUrl') && document.activeElement !== $('#settingSyncUrl')) $('#settingSyncUrl').value = settings.syncUrl || '';
  if ($('#settingGitHubUrl') && document.activeElement !== $('#settingGitHubUrl')) $('#settingGitHubUrl').value = settings.githubPagesUrl || '';
  if ($('#settingAdminToken') && document.activeElement !== $('#settingAdminToken')) $('#settingAdminToken').value = settings.adminToken || '';
  if ($('#settingReadToken') && document.activeElement !== $('#settingReadToken')) $('#settingReadToken').value = settings.readToken || '';
  if ($('#syncStatus') && settings.syncUrl && !$('#syncStatus').className.includes('err')) setSyncStatus(publicSyncBadgeText(), 'ok');
}

function collectSyncSettings() {
  const syncInput = $('#syncUrl') || $('#settingSyncUrl');
  const adminInput = $('#adminToken') || $('#settingAdminToken');
  const readInput = $('#readToken') || $('#settingReadToken');
  if (syncInput) settings.syncUrl = (syncInput.value || '').trim() || defaultSettings.syncUrl;
  if (adminInput) settings.adminToken = (adminInput.value || '').trim() || settings.adminToken || defaultSettings.adminToken;
  if (readInput) settings.readToken = (readInput.value || '').trim() || settings.readToken || defaultSettings.readToken;
  if ($('#autoUploadCloud')) settings.autoUploadCloud = $('#autoUploadCloud').checked ? 'true' : 'false';
  if ($('#autoDownloadCloud')) settings.autoDownloadCloud = $('#autoDownloadCloud').checked ? 'true' : 'false';
  if ($('#autoDownloadIntervalMs')) settings.autoDownloadIntervalMs = $('#autoDownloadIntervalMs').value || defaultSettings.autoDownloadIntervalMs;
  if (!settings.syncUrl) settings.syncUrl = defaultSettings.syncUrl;
  if (!settings.adminToken) settings.adminToken = defaultSettings.adminToken;
  if (!settings.readToken) settings.readToken = defaultSettings.readToken;
  saveSettings();
}

function setSyncStatus(message, type = '') {
  const el = $('#syncStatus');
  if (el) {
    el.textContent = message;
    el.className = `sync-status ${type}`.trim();
  }
  const global = $('#globalSyncStatus');
  if (global) {
    global.textContent = message;
    global.className = `global-sync-status ${type}`.trim();
  }
}

function syncUrlWithParams(action, token) {
  if (!settings.syncUrl) throw new Error('尚未設定 Apps Script Web App URL');
  const url = new URL(settings.syncUrl);
  url.searchParams.set('action', action);
  url.searchParams.set('token', token || settings.readToken || settings.adminToken || '');
  return url.toString();
}

async function getCloud(action = 'get', token = '') {
  const res = await fetch(syncUrlWithParams(action, token || settings.readToken || settings.adminToken), { method: 'GET', cache: 'no-store' });
  const json = await res.json();
  if (!json.ok) throw new Error(json.error || 'Google Sheet 回傳失敗');
  return json;
}

async function postCloud(action, payload = {}, token = '') {
  if (!settings.syncUrl) throw new Error('尚未設定 Apps Script Web App URL');
  const res = await fetch(settings.syncUrl, {
    method: 'POST',
    body: JSON.stringify({ action, token: token || settings.adminToken, ...payload })
  });
  const json = await res.json();
  if (!json.ok) throw new Error(json.error || 'Google Sheet 回傳失敗');
  return json;
}

async function testCloud() {
  collectSyncSettings();
  try {
    setSyncStatus('測試連線中...', '');
    const json = await getCloud('ping', settings.readToken || settings.adminToken);
    setSyncStatus(`連線成功：${json.message || 'Google Sheet Web App 已回應'}`, 'ok');
  } catch (error) {
    console.warn(error);
    setSyncStatus(`連線失敗：${error.message}`, 'err');
  }
}


function autoUploadEnabled() {
  return boolSetting(settings.autoUploadCloud) && !!settings.syncUrl;
}

function autoDownloadEnabled() {
  return boolSetting(settings.autoDownloadCloud) && !!settings.syncUrl;
}

function autoUploadDelayMs() {
  const n = Number(settings.autoUploadDelayMs || defaultSettings.autoUploadDelayMs || 5000);
  return Number.isFinite(n) && n >= 1000 ? n : 5000;
}

function autoDownloadIntervalMs() {
  const n = Number(settings.autoDownloadIntervalMs || defaultSettings.autoDownloadIntervalMs || 90000);
  return Number.isFinite(n) && n >= 30000 ? n : 90000;
}

function scheduleAutoUpload(reason = 'data-change') {
  if (!autoUploadEnabled()) return;
  if (globalSyncBusy) return;
  window.clearTimeout(autoUploadTimer);
  autoUploadTimer = window.setTimeout(() => {
    if (!hasLocalDirty() || globalSyncBusy || !autoUploadEnabled()) return;
    autoUploadLatestData(reason);
  }, autoUploadDelayMs());
  updateGlobalSyncPanel();
}

async function autoUploadLatestData(reason = 'auto') {
  if (!autoUploadEnabled() || !hasLocalDirty() || globalSyncBusy) return false;
  setSyncStatus(`偵測到資料更新，正在自動上傳雲端...`, 'warn');
  const ok = await uploadLatestData({ skipConfirm: true, auto: true, reason });
  if (ok) {
    lastAutoUploadAt = Date.now();
    setSyncStatus(`已自動上傳雲端：${new Date(lastAutoUploadAt).toLocaleTimeString('zh-TW', { hour12: false })}`, 'ok');
  }
  return ok;
}

async function autoDownloadLatestData(reason = 'timer') {
  if (!autoDownloadEnabled() || globalSyncBusy) return false;
  const now = Date.now();
  if (reason === 'timer' && now - lastAutoDownloadAt < Math.max(25000, autoDownloadIntervalMs() - 5000)) return false;
  if (hasLocalDirty()) {
    const uploaded = await autoUploadLatestData('before-download');
    if (!uploaded && hasLocalDirty()) return false;
  }
  lastAutoDownloadAt = now;
  return downloadLatestData({ skipBackup: true, auto: true, reason });
}

function startAutoCloudSync() {
  window.clearInterval(autoDownloadTimer);
  if (autoDownloadEnabled()) {
    autoDownloadTimer = window.setInterval(() => {
      autoDownloadLatestData('timer');
    }, autoDownloadIntervalMs());
  }
  window.addEventListener('focus', () => autoDownloadLatestData('focus'));
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) autoDownloadLatestData('visible');
  });
}

function updateGlobalSyncPanel() {
  const panel = $('#globalSyncPanel');
  if (!panel) return;
  const status = $('#globalSyncStatus');
  const dirty = hasLocalDirty();
  const last = settings.lastSync ? formatTaiwanSyncTime(settings.lastSync) : '尚未同步';
  const modeText = appMode === 'admin' ? '管理端' : '會員端';
  if (status && !globalSyncBusy) {
    const autoText = `${boolSetting(settings.autoUploadCloud) ? '自動上傳開' : '自動上傳關'} / ${boolSetting(settings.autoDownloadCloud) ? '自動下載開' : '自動下載關'}`;
    status.textContent = dirty ? `${modeText} 有本機更新待上傳｜${autoText}｜上次同步 ${last}` : `${modeText} 已是本機最新｜${autoText}｜上次同步 ${last}`;
    status.className = `global-sync-status ${dirty ? 'warn' : 'ok'}`;
  }
  panel.classList.toggle('has-dirty', dirty);
}

async function downloadLatestData(options = {}) {
  collectSyncSettings();
  try {
    globalSyncBusy = true;
    setSyncStatus(options.auto ? '正在自動下載雲端最新資料...' : '正在下載雲端最新資料...', '');
    const json = await getCloud('get', settings.readToken || settings.adminToken);
    if (!json.payload) throw new Error('雲端沒有資料 payload');
    if (cloudPayloadLooksUninitialized(json.payload)) {
      setSyncStatus(cloudUninitializedMessage(), 'warn');
      showToast('雲端尚未初始化，已保留本機正式課程');
      return false;
    }
    if (!options.skipBackup) createBackupSnapshot('cloud', `雲端下載覆蓋前備份 ${new Date().toLocaleString('zh-TW')}`);
    state = ensureFormalDataForCloudPayload(json.payload, state);
    settings.lastSync = json.serverTime || new Date().toISOString();
    clearLocalDirty();
    saveState({ title: '雲端下載後備份', skipDirty: true });
    saveSettings();
    render();
    setSyncStatus(`下載完成：${formatTaiwanSyncTime(settings.lastSync, { seconds: true })}`, 'ok');
    return true;
  } catch (error) {
    console.warn(error);
    setSyncStatus(`下載失敗：${error.message}`, 'err');
    return false;
  } finally {
    globalSyncBusy = false;
    updateGlobalSyncPanel();
  }
}

async function uploadLatestData(options = {}) {
  collectSyncSettings();
  try {
    globalSyncBusy = true;
    const payload = ensureFormalDataForCloudPayload(clone(state), state);
    const adminCanSaveAll = appMode === 'admin' && settings.adminToken && isAdminUnlocked();
    const action = adminCanSaveAll ? 'saveAll' : 'mergeAll';
    const token = adminCanSaveAll ? settings.adminToken : (settings.readToken || settings.adminToken);
    if (!options.skipConfirm) {
      const text = adminCanSaveAll
        ? '確定要把目前管理端本機資料完整上傳到 Google Sheet 嗎？'
        : '確定要把會員端本機回覆 / 簽到等更新上傳到 Google Sheet 嗎？';
      if (!confirm(text)) return false;
    }
    setSyncStatus(options.auto ? '正在自動上傳雲端更新...' : (adminCanSaveAll ? '正在上傳管理端完整資料...' : '正在上傳會員端更新...'), '');
    const json = await postCloud(action, { payload }, token);
    if (json.payload) {
      state = ensureFormalDataForCloudPayload(json.payload, state);
      saveState({ title: '上傳同步後備份', skipDirty: true });
    }
    settings.lastSync = json.serverTime || new Date().toISOString();
    clearLocalDirty();
    saveSettings();
    render();
    setSyncStatus(`上傳完成：${formatTaiwanSyncTime(settings.lastSync, { seconds: true })}`, 'ok');
    return true;
  } catch (error) {
    console.warn(error);
    setSyncStatus(`上傳失敗：${error.message}`, 'err');
    return false;
  } finally {
    globalSyncBusy = false;
    updateGlobalSyncPanel();
  }
}

async function syncLatestData() {
  if (globalSyncBusy) return;
  const dirty = hasLocalDirty();
  if (dirty) {
    const uploaded = await uploadLatestData({ skipConfirm: true });
    if (!uploaded) return;
  }
  await downloadLatestData({ skipBackup: true });
}

async function pullCloud() {
  await downloadLatestData();
}

async function pushCloud() {
  await uploadLatestData();
}

function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text).then(() => true).catch(() => fallbackCopy(text));
  }
  return Promise.resolve(fallbackCopy(text));
}

function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  const ok = document.execCommand('copy');
  textarea.remove();
  return ok;
}


function buildPublicLink(view = 'dashboard', courseId = '') {
  const base = appBaseUrl();
  const params = new URLSearchParams({ mode: 'member' });
  if (view && view !== 'dashboard') params.set('view', view);
  if (courseId) params.set('courseId', courseId);
  appendPublicSyncParams(params);
  return `${base}?${params.toString()}`;
}

function shareLinkCard(title, desc, url, extra = '') {
  return `<article class="share-link-card">
    <strong>${escapeHtml(title)}</strong>
    <small class="muted">${escapeHtml(desc)}</small>
    <div class="share-url">${escapeHtml(url)}</div>
    <div class="card-actions">
      <button class="mini-btn" data-copy-public-link="${escapeHtml(url)}">複製連結</button>
      <a class="mini-btn" href="${escapeHtml(url)}" target="_blank" rel="noopener">開啟測試</a>
    </div>
    ${extra || ''}
  </article>`;
}

function buildPublicShareDigest() {
  const course = nextCourse();
  const rows = [
    `山線養豬讀書會｜會員端公開連結`,
    `首頁：${buildPublicLink('dashboard')}`,
    `年度課表：${buildPublicLink('courses')}`,
    `公告中心：${buildPublicLink('announcements')}`,
    `餐廳地點：${buildPublicLink('locations')}`,
    `出席回覆：${buildPublicLink('reply')}`,
    `簽到報到：${buildPublicLink('checkin')}`
  ];
  if (course) {
    rows.push('', `下一堂課：${formatDate(course.date)}｜${course.title}`);
    rows.push(`出席回覆：${buildReplyLink(course.id, '', '')}`);
    rows.push(`簽到報到：${buildCheckinLink(course.id)}`);
  }
  return rows.join('\n');
}

function renderSharePage() {
  const box = $('#publicShareLinks');
  const nextBox = $('#nextCourseShareBox');
  if (!box || !nextBox) return;
  const generalLinks = [
    ['會員端首頁', '建議貼到 LINE 群組置頂；若設定 GitHub Pages 網址，會用上線網址產生。', buildPublicLink('dashboard')],
    ['年度課程表', '查看整年度課程日期、講師、地點與停車資訊。', buildPublicLink('courses')],
    ['公告中心', '查看已發布公告、課程異動、停車提醒與臨時通知。', buildPublicLink('announcements')],
    ['餐廳地點', '查看餐廳地址、Google 地圖與停車說明。', buildPublicLink('locations')],
    ['出席回覆', '會員可自行選擇課程與姓名回覆出席或請假。', buildPublicLink('reply')],
    ['簽到報到', '課程當天可打開簽到頁面完成現場報到。', buildPublicLink('checkin')]
  ];
  box.innerHTML = generalLinks.map(([title, desc, url]) => shareLinkCard(title, desc, url)).join('');
  const course = nextCourse();
  if (!course) {
    nextBox.innerHTML = '<div class="empty-box">尚未建立下一堂課，建立課程後會自動產生單場分享連結。</div>';
    return;
  }
  const location = getLocation(course.locationId);
  const courseInfo = `<div class="member-public-note">${escapeHtml(formatDate(course.date))} ${escapeHtml(course.startTime || '')}-${escapeHtml(course.endTime || '')}<br>${escapeHtml(course.title)}｜${escapeHtml(location?.name || '未設定地點')}</div>`;
  nextBox.innerHTML = [
    shareLinkCard('下一堂課：會員端課表', '直接開啟會員端課表，會員可查看本場資訊。', buildPublicLink('courses', course.id), courseInfo),
    shareLinkCard('下一堂課：出席回覆', '可放在 LINE 課程通知內，會員打開後回覆出席或請假。', buildReplyLink(course.id, '', '')),
    shareLinkCard('下一堂課：簽到報到', '課程當天給會員掃碼或點擊完成報到。', buildCheckinLink(course.id)),
  ].join('');
}

function copyAllLinks(courseId) {
  const course = getCourse(courseId);
  if (!course) return '';
  return `共用報名連結：${buildReplyLink(courseId)}`;
}

function bindEvents() {
  $$('.sidebar .nav-item[data-view]').forEach(button => button.addEventListener('click', () => {
    setView(button.dataset.view);
    if (isMobileViewport()) closeMobileSidebar();
  }));
  const toggleSidebarBtn = $('#toggleSidebar');
  if (toggleSidebarBtn) {
    const openSidebarFromEvent = event => runSidebarActionOnce(event, 'open-sidebar', openMobileSidebar);
    // PKG083：手機側欄開啟改用 pointerdown 優先，click 僅作後備，避免同一次觸控重複觸發造成卡住。
    toggleSidebarBtn.addEventListener('pointerdown', openSidebarFromEvent, { passive: false });
    toggleSidebarBtn.addEventListener('touchstart', openSidebarFromEvent, { passive: false });
    toggleSidebarBtn.addEventListener('click', openSidebarFromEvent, { passive: false });
  }
  const closeSidebarBtn = $('#closeSidebar');
  if (closeSidebarBtn) {
    const closeSidebarFromEvent = event => runSidebarActionOnce(event, 'close-sidebar', closeMobileSidebar);
    // PKG083：收合按鈕改為 pointerdown / touchstart 優先處理，點一下就關，不再等 click 補送。
    closeSidebarBtn.addEventListener('pointerdown', closeSidebarFromEvent, { passive: false });
    closeSidebarBtn.addEventListener('touchstart', closeSidebarFromEvent, { passive: false });
    closeSidebarBtn.addEventListener('click', closeSidebarFromEvent, { passive: false });
  }
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    if (!$('#modalBackdrop')?.hidden) closeModal();
    closeMobileSidebar();
  });
  document.addEventListener('click', event => {
    if (!document.body.classList.contains('sidebar-open')) return;
    // PKG076：忽略底部快捷列剛觸發後補送的 click，避免「更多」打開又立刻關閉。
    if (Date.now() - lastMobileNavActivationAt < 850) return;
    if (event.target.closest('#sidebar') || event.target.closest('#toggleSidebar') || event.target.closest('.mobile-bottom-nav')) return;
    closeMobileSidebar();
  });
  $('#switchMemberMode').addEventListener('click', () => { setAppMode('member'); showToast('已切換會員端'); });
  $('#switchAdminMode').addEventListener('click', () => { setAppMode('admin'); if (appMode === 'admin') showToast('已切換管理端'); });
  const copyMemberPublicDigestBtn = $('#copyMemberPublicDigest');
  if (copyMemberPublicDigestBtn) copyMemberPublicDigestBtn.addEventListener('click', () => copyText(buildPublicShareDigest()).then(() => showToast('已複製全部會員端分享連結')));
  const mobileBottomNav = $('#mobileBottomNav');
  if (mobileBottomNav) {
    // PKG072：底部快捷列改為「主要觸控事件 + click 後備」；不再同時綁 pointerdown/touchend/click。
    // 同一個手指點擊在手機瀏覽器常會連續產生 pointer/touch/click，多重觸發會造成頁面閃現、更多選單打開又關閉。
    const primaryMobileNavEvent = window.PointerEvent ? 'pointerup' : (('ontouchend' in window) ? 'touchend' : 'click');
    mobileBottomNav.addEventListener(primaryMobileNavEvent, handleMobileBottomAction, { passive: false });
    if (primaryMobileNavEvent !== 'click') {
      mobileBottomNav.addEventListener('click', handleMobileBottomAction, { passive: false });
    }
  }
  document.addEventListener('click', event => {
    if (event.target.closest('button[disabled], .is-busy')) return;
    if (event.target.closest('.mobile-bottom-nav')) return;
    const publicCopyBtn = event.target.closest('[data-copy-public-link]');
    if (publicCopyBtn) copyText(publicCopyBtn.dataset.copyPublicLink).then(() => showToast('已複製會員端分享連結'));
    const openBtn = event.target.closest('[data-open-form]');
    if (openBtn) {
      if (appMode !== 'admin') {
        setAppMode('admin');
        if (appMode !== 'admin') return;
      }
      openForm(openBtn.dataset.openForm);
    }
    const editBtn = event.target.closest('[data-edit]');
    if (editBtn) openForm(editBtn.dataset.edit, editBtn.dataset.id);
    const deleteBtn = event.target.closest('[data-delete]');
    if (deleteBtn) deleteItem(deleteBtn.dataset.delete, deleteBtn.dataset.id);
    const memberStatusBtn = event.target.closest('[data-member-status-id]');
    if (memberStatusBtn) {
      const nextStatus = memberStatusBtn.dataset.memberStatus || '正常';
      if (nextStatus === '退會') {
        const ok = confirm('確定要將此會員設為退會嗎？\n\n退會後不會加入新年度會費名單，但過往繳費、出席與簽到紀錄都會保留。');
        if (!ok) return;
      }
      setMemberStatus(memberStatusBtn.dataset.memberStatusId, nextStatus);
    }
    const jumpBtn = event.target.closest('[data-view-jump]');
    if (jumpBtn) setView(jumpBtn.dataset.viewJump);
    const attendanceBtn = event.target.closest('[data-attendance]');
    if (attendanceBtn) openAttendance(attendanceBtn.dataset.attendance);
    const mediaCourseBtn = event.target.closest('[data-media-course]');
    if (mediaCourseBtn) { mediaContext.courseId = mediaCourseBtn.dataset.mediaCourse || 'all'; setView('media'); }
    const feedbackCourseBtn = event.target.closest('[data-feedback-course]');
    if (feedbackCourseBtn) { feedbackContext.courseId = feedbackCourseBtn.dataset.feedbackCourse || 'all'; setView('feedback'); }
    const paymentBtn = event.target.closest('[data-payment]');
    if (paymentBtn) openPayment(paymentBtn.dataset.payment);
    const prepJumpBtn = event.target.closest('[data-prep-jump]');
    if (prepJumpBtn) { prepContext.courseId = prepJumpBtn.dataset.prepJump || 'all'; setView('prep'); }
    const prepAddBtn = event.target.closest('[data-prep-add]');
    if (prepAddBtn) openPrepTask(prepAddBtn.dataset.prepAdd);
    const prepEditBtn = event.target.closest('[data-prep-edit]');
    if (prepEditBtn) { const [courseId, taskId] = prepEditBtn.dataset.prepEdit.split('|'); openPrepTask(courseId, taskId); }
    const prepDeleteBtn = event.target.closest('[data-prep-delete]');
    if (prepDeleteBtn) { const [courseId, taskId] = prepDeleteBtn.dataset.prepDelete.split('|'); deletePrepTask(courseId, taskId); }
    const prepTemplateBtn = event.target.closest('[data-prep-template]');
    if (prepTemplateBtn) applyPrepTemplate(prepTemplateBtn.dataset.prepTemplate);
    const copyPrepCourseBtn = event.target.closest('[data-copy-prep-course]');
    if (copyPrepCourseBtn) { const course = getCourse(copyPrepCourseBtn.dataset.copyPrepCourse); if (course) copyText(buildPrepCourseText(course)).then(() => showToast('已複製本場準備清單')); }
    const copyGroupNoticeBtn = event.target.closest('[data-copy-group-notice]');
    if (copyGroupNoticeBtn) copyText(buildGroupNoticeText(copyGroupNoticeBtn.dataset.copyGroupNotice, 'notice')).then(() => showToast('已複製本組課前通知'));
    const copyGroupUnrepliedBtn = event.target.closest('[data-copy-group-unreplied]');
    if (copyGroupUnrepliedBtn) copyText(buildGroupNoticeText(copyGroupUnrepliedBtn.dataset.copyGroupUnreplied, 'unreplied')).then(() => showToast('已複製本組未回覆催覆'));
    const copyGroupUnpaidBtn = event.target.closest('[data-copy-group-unpaid]');
    if (copyGroupUnpaidBtn) copyText(buildGroupNoticeText(copyGroupUnpaidBtn.dataset.copyGroupUnpaid, 'unpaid')).then(() => showToast('已複製本組未繳費提醒'));
    const copyGroupRosterBtn = event.target.closest('[data-copy-group-roster]');
    if (copyGroupRosterBtn) copyText(buildGroupRosterText(copyGroupRosterBtn.dataset.copyGroupRoster)).then(() => showToast('已複製本組名單'));
    const recordBtn = event.target.closest('[data-record-course]');
    if (recordBtn) { recordFocusCourseId = recordBtn.dataset.recordCourse; setView('records'); }
    const knowledgeCategoryBtn = event.target.closest('[data-knowledge-category]');
    if (knowledgeCategoryBtn) {
      const select = $('#knowledgeCategoryFilter');
      if (select) select.value = knowledgeCategoryBtn.dataset.knowledgeCategory || 'all';
      renderKnowledge();
    }
    const copyKnowledgeCourseBtn = event.target.closest('[data-copy-knowledge-course]');
    if (copyKnowledgeCourseBtn) {
      copyText(buildKnowledgeDigest(copyKnowledgeCourseBtn.dataset.copyKnowledgeCourse)).then(() => showToast('已複製本課重點'));
    }
    const attendanceReplyBtn = event.target.closest('[data-attendance-replies]');
    if (attendanceReplyBtn) {
      openAttendanceReplyModal(attendanceReplyBtn.dataset.attendanceReplies);
      return;
    }
    const printMemberSigninBtn = event.target.closest('[data-print-member-signin]');
    if (printMemberSigninBtn) {
      printMemberSignInSheet();
      return;
    }
    const replyCourseBtn = event.target.closest('[data-reply-course]');
    if (replyCourseBtn) {
      replyContext = { ...replyContext, courseId: replyCourseBtn.dataset.replyCourse };
      setView('reply');
    }
    const copyBtn = event.target.closest('[data-copy-link]');
    if (copyBtn) {
      copyText(copyBtn.dataset.copyLink).then(() => showToast('已複製回覆連結'));
    }
    const copyAllBtn = event.target.closest('[data-copy-all-links]');
    if (copyAllBtn) {
      copyText(copyAllLinks(copyAllBtn.dataset.copyAllLinks)).then(() => showToast('已複製共用報名連結'));
    }
    const deletePublicSignupBtn = event.target.closest('[data-delete-public-signup]');
    if (deletePublicSignupBtn) {
      const [courseId, signupId] = deletePublicSignupBtn.dataset.deletePublicSignup.split('|');
      deletePublicSignup(courseId, signupId);
    }
    const directMemberChip = event.target.closest('[data-direct-member]');
    if (directMemberChip) {
      const select = $('#directCheckinMember');
      if (select) select.value = directMemberChip.dataset.directMember;
      return;
    }
    const directCheckinBtn = event.target.closest('[data-direct-checkin]');
    if (directCheckinBtn) { runDirectCheckin(directCheckinBtn.dataset.directCheckin, 'checked'); return; }
    const directCheckinLateBtn = event.target.closest('[data-direct-checkin-late]');
    if (directCheckinLateBtn) { runDirectCheckin(directCheckinLateBtn.dataset.directCheckinLate, 'late'); return; }
    const setCheckinBtn = event.target.closest('[data-set-checkin]');
    if (setCheckinBtn) {
      const [courseId, memberId, status] = setCheckinBtn.dataset.setCheckin.split('|');
      setCheckinStatus(courseId, memberId, status);
      showToast('報到狀態已更新');
    }
    const setSignupCheckinBtn = event.target.closest('[data-set-signup-checkin]');
    if (setSignupCheckinBtn) {
      const [courseId, signupId, status] = setSignupCheckinBtn.dataset.setSignupCheckin.split('|');
      setSignupCheckinStatus(courseId, signupId, status, '管理端調整公開回覆報到狀態');
      showToast('公開回覆報到狀態已更新');
    }
    const copyCheckinBtn = event.target.closest('[data-copy-checkin-link]');
    if (copyCheckinBtn) {
      copyText(copyCheckinBtn.dataset.copyCheckinLink).then(() => showToast('已複製報到連結'));
    }
    const copyMediaUrlBtn = event.target.closest('[data-copy-media-url]');
    if (copyMediaUrlBtn) {
      copyText(copyMediaUrlBtn.dataset.copyMediaUrl).then(() => showToast('已複製附件連結'));
    }
    const deleteMediaBtn = event.target.closest('[data-delete-media]');
    if (deleteMediaBtn) {
      const [courseId, mediaId] = deleteMediaBtn.dataset.deleteMedia.split('|');
      deleteMediaItem(courseId, mediaId);
    }
    const deleteFeedbackBtn = event.target.closest('[data-delete-feedback]');
    if (deleteFeedbackBtn) {
      const [courseId, feedbackId] = deleteFeedbackBtn.dataset.deleteFeedback.split('|');
      deleteFeedbackItem(courseId, feedbackId);
    }
    const copyPlanningSuggestionBtn = event.target.closest('[data-copy-planning-suggestion]');
    if (copyPlanningSuggestionBtn) {
      copyText(copyPlanningSuggestionBtn.dataset.copyPlanningSuggestion).then(() => showToast('已複製此課程建議'));
    }
    const speakerCourseBtn = event.target.closest('[data-speaker-course]');
    if (speakerCourseBtn) { setView('speakers'); window.setTimeout(() => { fillInviteForm({ courseId: speakerCourseBtn.dataset.speakerCourse }); }, 30); }
    const loadInviteBtn = event.target.closest('[data-load-invite]');
    if (loadInviteBtn) loadInviteRecord(loadInviteBtn.dataset.loadInvite);
    const loadInviteSpeakerBtn = event.target.closest('[data-load-invite-speaker]');
    if (loadInviteSpeakerBtn) { fillInviteForm({ speakerId: loadInviteSpeakerBtn.dataset.loadInviteSpeaker, courseId: nextCourse()?.id || state.courses[0]?.id || '' }); showToast('已帶入講師，請選擇課程後儲存邀約'); }
    const loadInviteSponsorBtn = event.target.closest('[data-load-invite-sponsor]');
    if (loadInviteSponsorBtn) { fillInviteForm({ sponsorVendorId: loadInviteSponsorBtn.dataset.loadInviteSponsor, courseId: nextCourse()?.id || state.courses[0]?.id || '' }); showToast('已帶入主辦廠商，請選擇課程與講師後儲存邀約'); }
    const deleteInviteBtn = event.target.closest('[data-delete-invite]');
    if (deleteInviteBtn) deleteInviteRecord(deleteInviteBtn.dataset.deleteInvite);
    const copyInviteBtn = event.target.closest('[data-copy-invite]');
    if (copyInviteBtn) copyText(buildInviteText(copyInviteBtn.dataset.copyInvite)).then(() => showToast('已複製邀約紀錄'));
    const copyAnnouncementBtn = event.target.closest('[data-copy-announcement]');
    if (copyAnnouncementBtn) copyText(buildAnnouncementLineText(copyAnnouncementBtn.dataset.copyAnnouncement)).then(() => showToast('已複製 LINE 公告文字'));
    const toggleAnnouncementBtn = event.target.closest('[data-toggle-announcement-status]');
    if (toggleAnnouncementBtn) { const [id, status] = toggleAnnouncementBtn.dataset.toggleAnnouncementStatus.split('|'); updateAnnouncementStatus(id, status); }
    const duplicateAnnouncementBtn = event.target.closest('[data-duplicate-announcement]');
    if (duplicateAnnouncementBtn) duplicateAnnouncement(duplicateAnnouncementBtn.dataset.duplicateAnnouncement);
  });
  document.addEventListener('input', event => {
    if (event.target.id === 'directCheckinSearch') {
      renderDirectCheckinHints(checkinContext.courseId || resolveCheckinCourse()?.id || '', event.target.value || '');
    }
  });
  document.addEventListener('change', event => {
    if (event.target.id === 'publicCheckinCourseSelect') {
      applyCheckinCourseSelection(event.target.value, event);
      return;
    }
    if (event.target.id === 'replyCourse' || event.target.id === 'replyPublicCourse') {
      replyContext.courseId = event.target.value;
      lastPublicSignupResult = null;
      renderReply();
    }
    if (event.target.id === 'replyPublicStatus') {
      applyPublicStatusCountGuard();
    }
    if (event.target.id === 'replyMember') {
      replyContext.memberId = event.target.value;
      const member = getMember(replyContext.memberId);
      replyContext.token = member?.memberToken || '';
      renderReply();
    }
    if (event.target.id === 'reportYearFilter') {
      reportContext.year = event.target.value;
      renderReport();
    }
    if (event.target.id === 'reportCategoryFilter') {
      reportContext.category = event.target.value || 'all';
      renderReport();
    }
    if (event.target.id === 'planningYearFilter') {
      planningContext.year = event.target.value || '';
      renderPlanning();
    }
    if (event.target.id === 'planningModeFilter') {
      planningContext.mode = event.target.value || 'all';
      renderPlanning();
    }
    if (event.target.id === 'prepCourseFilter') {
      prepContext.courseId = event.target.value || 'all';
      renderPrep();
    }
    if (event.target.id === 'prepStatusFilter') {
      prepContext.status = event.target.value || 'all';
      renderPrep();
    }
    if (event.target.id === 'groupCourseFilter') {
      groupContext.courseId = event.target.value || 'all';
      renderGroups();
    }
    if (event.target.id === 'groupNameFilter') {
      groupContext.groupName = event.target.value || 'all';
      renderGroups();
    }
    if (event.target.id === 'groupStatusFilter') {
      groupContext.status = event.target.value || 'all';
      renderGroups();
    }
    if (event.target.id === 'checkinCourseSelect') {
      applyCheckinCourseSelection(event.target.value || '', event);
    }
    if (event.target.id === 'mediaCourseFilter') {
      mediaContext.courseId = event.target.value || 'all';
      renderMedia();
    }
    if (event.target.id === 'mediaTypeFilter') {
      mediaContext.type = event.target.value || 'all';
      renderMedia();
    }
    if (event.target.id === 'feedbackCourseFilter') {
      feedbackContext.courseId = event.target.value || 'all';
      renderFeedback();
    }
    if (event.target.id === 'feedbackScoreFilter') {
      feedbackContext.score = event.target.value || 'all';
      renderFeedback();
    }
    if (event.target.id === 'feedbackCourse') {
      feedbackContext.courseId = event.target.value || 'all';
      renderFeedback();
    }
    if (event.target.id === 'feedbackMember') {
      feedbackContext.memberId = event.target.value;
      const member = getMember(feedbackContext.memberId);
      feedbackContext.token = member?.memberToken || '';
      renderFeedback();
    }
    if (event.target.id === 'speakerTypeFilter') { speakerContext.type = event.target.value || 'all'; renderSpeakers(); }
    if (event.target.id === 'speakerInviteStatusFilter') { speakerContext.status = event.target.value || 'all'; renderSpeakers(); }
    if (event.target.id === 'announcementTypeFilter') { announcementContext.type = event.target.value || 'all'; renderAnnouncements(); }
    if (event.target.id === 'backupSearch') { backupContext.search = event.target.value || ''; renderBackups(); }
    if (event.target.id === 'announcementStatusFilter') { announcementContext.status = event.target.value || 'all'; renderAnnouncements(); }
    if (event.target.id === 'announcementCourseFilter') { announcementContext.courseId = event.target.value || 'all'; renderAnnouncements(); }
    if (event.target.id === 'backupTypeFilter') { backupContext.type = event.target.value || 'all'; renderBackups(); }
    if (event.target.id && event.target.id.startsWith('setting')) {
      getSystemSettingsFromForm();
      saveSettings();
      applyPermissionClasses();
      renderSystemSettings();
      renderMembers();
    }
    if (['shareCardCourseSelect', 'shareCardTemplate', 'shareCardTone', 'shareCardIncludeMap', 'shareCardIncludeParking', 'shareCardIncludeFee', 'shareCardIncludeStats', 'shareCardIncludeContent', 'shareCardIncludeReply', 'shareCardIncludeCheckin', 'shareCardIncludePublic'].includes(event.target.id)) {
      renderCourseShareCardOutput();
    }
    if (event.target.id === 'inviteSpeakerSelect') {
      const speaker = getSpeaker(event.target.value || '');
      if (speaker && $('#inviteSpeakerFee') && !$('#inviteSpeakerFee').value) $('#inviteSpeakerFee').value = speaker.defaultFee || '';
    }
    if (event.target.id === 'inviteSponsorSelect') {
      const sponsor = getSponsorVendor(event.target.value || '');
      if (sponsor && $('#inviteSponsorSupportType') && !$('#inviteSponsorSupportType').value) $('#inviteSponsorSupportType').value = sponsor.supportType || '';
      if (sponsor && $('#inviteSponsorAmount') && !$('#inviteSponsorAmount').value) $('#inviteSponsorAmount').value = sponsor.defaultSupportAmount || '';
    }
    const prepStatusSelect = event.target.closest('[data-prep-status]');
    if (prepStatusSelect) {
      const [courseId, taskId] = prepStatusSelect.dataset.prepStatus.split('|');
      updatePrepStatus(courseId, taskId, prepStatusSelect.value);
    }
  });
  document.addEventListener('click', event => {
    if (event.target.id === 'submitReply') submitReply();
    if (event.target.id === 'submitPublicSignup') submitPublicSignup();
    if (event.target.id === 'submitCheckin') submitCheckin();
    if (event.target.id === 'submitPublicCheckinSelection') submitPublicCheckinSelection();
    if (event.target.id === 'submitWalkinCheckin') submitWalkinCheckin();
    if (event.target.id === 'reloadFromCloud') pullCloud();
    if (event.target.id === 'copyAllCheckinLinks') copyText(buildAllCheckinLinks(checkinContext.courseId)).then(() => showToast('已複製全部會員專屬報到連結'));
    if (event.target.id === 'printCheckinSheet') printCheckinSheet();
    if (event.target.id === 'exportCheckinCsv') exportCheckinCsv();
    if (event.target.id === 'addMediaItem') addMediaItem();
    if (event.target.id === 'clearMediaForm') clearMediaForm(true);
    if (event.target.id === 'submitFeedback') submitFeedback();
    if (event.target.id === 'saveInviteRecord') saveInviteRecord();
    if (event.target.id === 'clearInviteForm') { fillInviteForm({}); showToast('已清空邀約表單'); }
    if (event.target.id === 'createManualBackup') createManualBackup();
    if (event.target.id === 'clearAutoBackups') clearAutoBackups();
    if (event.target.id === 'exportBackupList') exportBackupList();
    if (event.target.id === 'saveSystemSettings') saveSystemSettings();
    if (event.target.id === 'lockAdminNow') { lockAdminSession(); setAppMode('member'); showToast('已鎖定管理端並切換會員端'); }
    if (event.target.id === 'copyAdminLoginLink') copyText(buildAdminLoginLink()).then(() => showToast('已複製管理端登入連結，請勿公開轉傳'));
    if (event.target.id === 'copySettingsSummary') copyText(buildSettingsSummaryText()).then(() => showToast('已複製設定摘要'));
    if (event.target.id === 'resetSystemSettings') resetSystemSettings();
    const restoreBtn = event.target.closest('[data-restore-backup]');
    if (restoreBtn) restoreBackup(restoreBtn.dataset.restoreBackup);
    const exportBackupBtn = event.target.closest('[data-export-backup]');
    if (exportBackupBtn) exportBackup(exportBackupBtn.dataset.exportBackup);
    const deleteBackupBtn = event.target.closest('[data-delete-backup]');
    if (deleteBackupBtn) deleteBackup(deleteBackupBtn.dataset.deleteBackup);
  });
  if ($('#copyNotifyText')) $('#copyNotifyText').addEventListener('click', copyNotifyText);
  if ($('#copyNotifyLinks')) $('#copyNotifyLinks').addEventListener('click', copyNotifyLinks);
  if ($('#copyNotifyUnreplied')) $('#copyNotifyUnreplied').addEventListener('click', copyNotifyUnreplied);
  if ($('#refreshNotifyText')) $('#refreshNotifyText').addEventListener('click', renderNotifyOutput);
  if ($('#openLineShare')) $('#openLineShare').addEventListener('click', openLineShare);
  if ($('#copyShareCardText')) $('#copyShareCardText').addEventListener('click', copyShareCardText);
  if ($('#copyShareCardCompact')) $('#copyShareCardCompact').addEventListener('click', copyShareCardCompact);
  if ($('#openShareCardLine')) $('#openShareCardLine').addEventListener('click', openShareCardLine);
  if ($('#refreshShareCard')) $('#refreshShareCard').addEventListener('click', renderCourseShareCardOutput);
  const shareCardExtraNote = $('#shareCardExtraNote');
  if (shareCardExtraNote) shareCardExtraNote.addEventListener('input', renderCourseShareCardOutput);
  if ($('#copyShareCardOfficer')) $('#copyShareCardOfficer').addEventListener('click', () => {
    const current = getCourse(shareCardContext.courseId);
  const course = current && isCourseOpenForReply(current) ? current : firstShareableCourse();
    copyText(buildOfficerChecklistText(course, true)).then(() => showToast('已複製幹部確認清單'));
  });
  if ($('#copyShareCardLinks')) $('#copyShareCardLinks').addEventListener('click', () => {
    const current = getCourse(shareCardContext.courseId);
  const course = current && isCourseOpenForReply(current) ? current : firstShareableCourse();
    copyText(buildShareCardLinksText(course)).then(() => showToast('已複製本場常用連結'));
  });
  const shareExtra = $('#shareCardExtraNote');
  if (shareExtra) shareExtra.addEventListener('input', renderCourseShareCardOutput);
  ['notifyCourseSelect', 'notifyPreset', 'notifyAudience', 'notifyExtraNote', 'notifyIncludeMap', 'notifyIncludeParking', 'notifyIncludeFee', 'notifyIncludeStats', 'notifyIncludeContent', 'notifyIncludeLinks'].forEach(id => {
    const el = $(`#${id}`);
    if (el) {
      el.addEventListener('input', renderNotifyOutput);
      el.addEventListener('change', renderNotifyOutput);
    }
  });
  $('#closeModal').addEventListener('click', closeModal);
  $('#modalBackdrop').addEventListener('click', event => { if (event.target.id === 'modalBackdrop') closeModal(); });
  $('#dynamicForm').addEventListener('submit', handleFormSubmit);
  ['courseSearch', 'courseStatusFilter', 'recordSearch', 'recordCategoryFilter', 'recordStatusFilter', 'mediaSearch', 'mediaCourseFilter', 'mediaTypeFilter', 'feedbackSearch', 'feedbackCourseFilter', 'feedbackScoreFilter', 'knowledgeSearch', 'knowledgeCategoryFilter', 'knowledgeTypeFilter', 'planningYearFilter', 'planningModeFilter', 'speakerSearch', 'speakerTypeFilter', 'speakerInviteStatusFilter', 'announcementSearch', 'announcementTypeFilter', 'announcementStatusFilter', 'announcementCourseFilter', 'backupSearch', 'backupTypeFilter', 'reportYearFilter', 'reportCategoryFilter', 'prepCourseFilter', 'prepStatusFilter', 'prepSearch', 'groupCourseFilter', 'groupNameFilter', 'groupStatusFilter', 'groupSearch', 'financeSearch', 'financeStatusFilter', 'memberSearch', 'memberRoleFilter', 'memberStatusFilter', 'retiredMemberSearch', 'locationSearch'].forEach(id => {
    const el = $(`#${id}`);
    if (el) el.addEventListener('input', () => scheduleRender(110));
    if (el) el.addEventListener('change', () => render());
  });
  const addPrepTaskTop = $('#addPrepTaskTop');
  if (addPrepTaskTop) addPrepTaskTop.addEventListener('click', () => {
    const courseId = $('#prepCourseFilter')?.value && $('#prepCourseFilter').value !== 'all' ? $('#prepCourseFilter').value : (nextCourse()?.id || state.courses[0]?.id || '');
    if (!courseId) { alert('請先新增課程。'); return; }
    openPrepTask(courseId);
  });
  const copyPrepDigest = $('#copyPrepDigest');
  if (copyPrepDigest) copyPrepDigest.addEventListener('click', () => {
    copyText(buildPrepDigestText()).then(() => showToast('已複製課前分工總清單'));
  });
  const exportPrepCsvBtn = $('#exportPrepCsv');
  if (exportPrepCsvBtn) exportPrepCsvBtn.addEventListener('click', exportPrepCsv);
  const copyGroupDigest = $('#copyGroupDigest');
  if (copyGroupDigest) copyGroupDigest.addEventListener('click', () => {
    const groupName = $('#groupNameFilter')?.value || 'all';
    const groups = groupName === 'all' ? getGroups().map(group => group.groupName) : [groupName];
    copyText(groups.map(name => buildGroupNoticeText(name, 'notice')).join('\n\n---\n\n')).then(() => showToast('已複製組別通知總表'));
  });
  const exportGroupCsvBtn = $('#exportGroupCsv');
  if (exportGroupCsvBtn) exportGroupCsvBtn.addEventListener('click', exportGroupCsv);
  const clearRecordFocus = $('#clearRecordFocus');
  if (clearRecordFocus) clearRecordFocus.addEventListener('click', () => {
    recordFocusCourseId = '';
    if ($('#recordSearch')) $('#recordSearch').value = '';
    if ($('#recordCategoryFilter')) $('#recordCategoryFilter').value = 'all';
    if ($('#recordStatusFilter')) $('#recordStatusFilter').value = 'all';
    renderRecords();
  });
  const clearKnowledgeFilters = $('#clearKnowledgeFilters');
  if (clearKnowledgeFilters) clearKnowledgeFilters.addEventListener('click', () => {
    if ($('#knowledgeSearch')) $('#knowledgeSearch').value = '';
    if ($('#knowledgeCategoryFilter')) $('#knowledgeCategoryFilter').value = 'all';
    if ($('#knowledgeTypeFilter')) $('#knowledgeTypeFilter').value = 'all';
    renderKnowledge();
  });
  const copyKnowledgeDigest = $('#copyKnowledgeDigest');
  if (copyKnowledgeDigest) copyKnowledgeDigest.addEventListener('click', () => {
    copyText(buildKnowledgeDigest()).then(() => showToast('已複製知識庫重點彙整'));
  });
  const copyAnnualReport = $('#copyAnnualReport');
  if (copyAnnualReport) copyAnnualReport.addEventListener('click', () => {
    renderReport();
    copyText(buildAnnualReportText()).then(() => showToast('已複製年度報告文字'));
  });
  const exportReportCsv = $('#exportReportCsv');
  if (exportReportCsv) exportReportCsv.addEventListener('click', exportAnnualReportCsv);
  const printAnnualReportBtn = $('#printAnnualReport');
  if (printAnnualReportBtn) printAnnualReportBtn.addEventListener('click', printAnnualReport);
  const copyMediaDigestBtn = $('#copyMediaDigest');
  if (copyMediaDigestBtn) copyMediaDigestBtn.addEventListener('click', () => copyText(buildMediaDigest()).then(() => showToast('已複製照片附件彙整')));
  const exportMediaCsvBtn = $('#exportMediaCsv');
  if (exportMediaCsvBtn) exportMediaCsvBtn.addEventListener('click', exportMediaCsv);
  const copyFeedbackLinksBtn = $('#copyFeedbackLinks');
  if (copyFeedbackLinksBtn) copyFeedbackLinksBtn.addEventListener('click', () => {
    const course = resolveFeedbackCourseForForm();
    copyText(buildAllFeedbackLinks(course?.id || '')).then(() => showToast('已複製會員問卷連結'));
  });
  const exportFeedbackCsvBtn = $('#exportFeedbackCsv');
  if (exportFeedbackCsvBtn) exportFeedbackCsvBtn.addEventListener('click', exportFeedbackCsv);
  const copyFeedbackDigestBtn = $('#copyFeedbackDigest');
  if (copyFeedbackDigestBtn) copyFeedbackDigestBtn.addEventListener('click', () => copyText(buildFeedbackDigest()).then(() => showToast('已複製問卷摘要')));
  const copyPlanningDigestBtn = $('#copyPlanningDigest');
  if (copyPlanningDigestBtn) copyPlanningDigestBtn.addEventListener('click', () => copyText(buildPlanningDigest()).then(() => showToast('已複製年度課程規劃建議')));
  const exportPlanningCsvBtn = $('#exportPlanningCsv');
  if (exportPlanningCsvBtn) exportPlanningCsvBtn.addEventListener('click', exportPlanningCsv);
  const copySpeakerDigestBtn = $('#copySpeakerDigest');
  if (copySpeakerDigestBtn) copySpeakerDigestBtn.addEventListener('click', () => copyText(buildSpeakerDigest()).then(() => showToast('已複製講師邀約總表')));
  const exportSpeakerCsvBtn = $('#exportSpeakerCsv');
  if (exportSpeakerCsvBtn) exportSpeakerCsvBtn.addEventListener('click', exportSpeakerCsv);
  const copyPinnedAnnouncementsBtn = $('#copyPinnedAnnouncements');
  if (copyPinnedAnnouncementsBtn) copyPinnedAnnouncementsBtn.addEventListener('click', () => copyText(buildPinnedAnnouncementDigest()).then(() => showToast('已複製置頂公告總表')));
  const exportAnnouncementsCsvBtn = $('#exportAnnouncementsCsv');
  if (exportAnnouncementsCsvBtn) exportAnnouncementsCsvBtn.addEventListener('click', exportAnnouncementsCsv);
  const downloadMemberTemplate = $('#downloadMemberTemplate');
  if (downloadMemberTemplate) downloadMemberTemplate.addEventListener('click', exportMemberTemplateCsv);
  const downloadCourseTemplate = $('#downloadCourseTemplate');
  if (downloadCourseTemplate) downloadCourseTemplate.addEventListener('click', exportCourseTemplateCsv);
  const exportMembersCsvBtn = $('#exportMembersCsv');
  if (exportMembersCsvBtn) exportMembersCsvBtn.addEventListener('click', exportMembersCsv);
  const exportCoursesCsvBtn = $('#exportCoursesCsv');
  if (exportCoursesCsvBtn) exportCoursesCsvBtn.addEventListener('click', exportCoursesCsv);
  const previewMemberImportBtn = $('#previewMemberImport');
  if (previewMemberImportBtn) previewMemberImportBtn.addEventListener('click', () => withButtonBusy(previewMemberImportBtn, previewMemberImport, '預覽中...'));
  const previewCourseImportBtn = $('#previewCourseImport');
  if (previewCourseImportBtn) previewCourseImportBtn.addEventListener('click', () => withButtonBusy(previewCourseImportBtn, previewCourseImport, '預覽中...'));
  const executeMemberImportBtn = $('#executeMemberImport');
  if (executeMemberImportBtn) executeMemberImportBtn.addEventListener('click', () => withButtonBusy(executeMemberImportBtn, executeMemberImport, '匯入中...'));
  const executeCourseImportBtn = $('#executeCourseImport');
  if (executeCourseImportBtn) executeCourseImportBtn.addEventListener('click', () => withButtonBusy(executeCourseImportBtn, executeCourseImport, '匯入中...'));
  const clearMemberImportBtn = $('#clearMemberImport');
  if (clearMemberImportBtn) clearMemberImportBtn.addEventListener('click', clearMemberImport);
  const clearCourseImportBtn = $('#clearCourseImport');
  if (clearCourseImportBtn) clearCourseImportBtn.addEventListener('click', clearCourseImport);
  const importMemberCsvInput = $('#importMemberCsv');
  if (importMemberCsvInput) importMemberCsvInput.addEventListener('change', event => importMemberCsvFile(event.target.files[0]));
  const importCourseCsvInput = $('#importCourseCsv');
  if (importCourseCsvInput) importCourseCsvInput.addEventListener('change', event => importCourseCsvFile(event.target.files[0]));
  $('#exportJson').addEventListener('click', exportJson);
  $('#importJson').addEventListener('change', event => importJson(event.target.files[0]));
  $('#resetData').addEventListener('click', event => withButtonBusy(event.currentTarget, resetData, '重置中...'));
  $('#saveSyncSettings').addEventListener('click', event => withButtonBusy(event.currentTarget, () => { collectSyncSettings(); render(); showToast('同步設定已儲存'); }, '儲存中...'));
  $('#testSync').addEventListener('click', event => withButtonBusy(event.currentTarget, testCloud, '測試中...'));
  $('#pullCloud').addEventListener('click', event => withButtonBusy(event.currentTarget, pullCloud, '下載中...'));
  $('#pushCloud').addEventListener('click', event => withButtonBusy(event.currentTarget, pushCloud, '上傳中...'));
  $('#downloadLatestData')?.addEventListener('click', event => withButtonBusy(event.currentTarget, downloadLatestData, '下載中...'));
  $('#uploadLatestData')?.addEventListener('click', event => withButtonBusy(event.currentTarget, uploadLatestData, '上傳中...'));
  $('#syncLatestData')?.addEventListener('click', event => withButtonBusy(event.currentTarget, syncLatestData, '同步中...'));
  $('#annualFeeYearSelect')?.addEventListener('change', event => { annualFeeContext.year = event.target.value; renderAnnualFees(); });
  $('#annualFeeSearch')?.addEventListener('input', event => { annualFeeContext.search = event.target.value || ''; scheduleRender(80); });
  $('#annualFeeStatusFilter')?.addEventListener('change', event => { annualFeeContext.status = event.target.value || 'all'; renderAnnualFees(); });
  $('#createAnnualFeeList')?.addEventListener('click', () => createAnnualFeeList(false));
  $('#addMissingAnnualFeeMembers')?.addEventListener('click', () => createAnnualFeeList(true));
  $('#saveAnnualFeePage')?.addEventListener('click', saveAnnualFeePage);
  $('#printAnnualFeeSheet')?.addEventListener('click', printAnnualFeeSheet);
  $('#exportAnnualFeeCsv')?.addEventListener('click', exportAnnualFeeCsv);
  $('#copyAnnualFeeReminder')?.addEventListener('click', copyAnnualFeeReminder);
  ['autoUploadCloud', 'autoDownloadCloud', 'autoDownloadIntervalMs'].forEach(id => {
    const el = $('#' + id);
    if (el) el.addEventListener('change', () => {
      collectSyncSettings();
      startAutoCloudSync();
      updateGlobalSyncPanel();
      showToast('自動同步設定已更新');
    });
  });
  document.addEventListener('change', event => {
    const annualInput = event.target.closest?.('[data-annual-fee-field]');
    if (annualInput) {
      updateAnnualFeeRow(annualInput.dataset.id, annualInput.dataset.annualFeeField, annualInput.value);
      if (annualInput.dataset.annualFeeField === 'status' || annualInput.dataset.annualFeeField === 'amountPaid' || annualInput.dataset.annualFeeField === 'amountDue') renderAnnualFees();
    }
  });
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(error => console.warn('SW registration failed', error));
  });
}

bindEvents();
saveState({ skipBackup: true, skipDirty: true });
startAutoCloudSync();
const bootMode = bootSearchParams.get('mode');
document.body.classList.toggle('public-checkin-mode', bootMode === 'checkin');
setAppMode(appMode, { silent: true });
if (bootMode === 'reply') setView('reply');
else if (bootMode === 'checkin') setView('checkin');
else if (bootMode === 'feedback') setView('feedback');
else if (bootSearchParams.get('view')) setView(currentView);
else render();


/* PKG106: Clean GitHub-ready package. Functional logic inherited from PKG105. */




/* PKG109: Top quick action bar simplified to member/admin mode switch only. */

/* PKG110: Retired member permanent delete now asks for confirmation, clears member profile/course-linked data, and keeps annual fee accounting snapshots. */
