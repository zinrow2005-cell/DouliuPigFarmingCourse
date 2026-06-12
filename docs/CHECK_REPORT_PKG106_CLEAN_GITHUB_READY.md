# PKG106｜檔案與程式碼整理報告

## 整理內容

- 以 PKG105 為基礎整理成乾淨 GitHub 上傳版。
- 主程式版本升級為：
  - `assets/app.v106.js`
  - `assets/app.v106.css`
- `index.html` 已改為引用 v106。
- `sw.js` 快取版本已更新為 `shanxian-pig-study-club-v106`。
- 移除舊的逐包檢查報告，避免 docs 目錄過於雜亂。
- 保留必要文件：
  - `README.md`
  - `GITHUB_PAGES_DEPLOY.md`
  - `docs/GOOGLE_SHEET_SYNC_SETUP.md`
  - `docs/CHANGELOG_HISTORY.txt`
  - `docs/CHECK_REPORT_PKG106_CLEAN_GITHUB_READY.md`
- 保留 Google Sheet 同步程式：
  - `APPS_SCRIPT_CODE.gs`
- 保留匯入範本：
  - `templates/course_import_template.csv`
  - `templates/course_import_template.xlsx`
  - `templates/member_import_template.csv`
  - `templates/member_import_template.xlsx`

## 保留功能

- PKG105 會員端出席回覆雲端上傳進度確認
- PKG104 台灣時間顯示
- PKG103 右上快速操作按鈕實際顯示修正
- PKG101 一行式會員名單與退會會員名單
- PKG100 退會會員歷史繳費紀錄保留
- PKG099 年度會費管理

## 已移除舊檢查報告

- CHECK_REPORT_PKG089_CLEAN_GITHUB_READY.md
- CHECK_REPORT_PKG090_NEXT_COURSE_PENDING.md
- CHECK_REPORT_PKG091_SYNC_COURSE_ADMIN.md
- CHECK_REPORT_PKG092_APPS_SCRIPT_URL_UPDATE.md
- CHECK_REPORT_PKG093_AUTO_CLOUD_SYNC.md
- CHECK_REPORT_PKG094_ATTENDANCE_REPLY_MODAL.md
- CHECK_REPORT_PKG095_MEMBER_SIGNIN_PRINT.md
- CHECK_REPORT_PKG096_COURSE_LAYOUT_FIX.md
- CHECK_REPORT_PKG097_COURSE_FORM_CLEANUP.md
- CHECK_REPORT_PKG098_COURSE_TEXTAREA_2_ROWS.md
- CHECK_REPORT_PKG099_ANNUAL_FEES.md
- CHECK_REPORT_PKG100_MEMBER_RETIRE_HISTORY.md
- CHECK_REPORT_PKG101_MEMBER_LIST_RETIRED.md
- CHECK_REPORT_PKG102_TOP_ACTION_BUTTONS.md
- CHECK_REPORT_PKG103_TOP_ACTIONS_VISIBILITY.md
- CHECK_REPORT_PKG104_TAIWAN_SYNC_TIME.md
- CHECK_REPORT_PKG105_MEMBER_UPLOAD_PROGRESS.md

## 檢查結果

- app.v106.js 語法檢查通過
- sw.js 語法檢查通過
- index.html 引用 v106
- sw.js 快取清單引用 v106
- Service Worker 快取清單無缺檔
- ZIP 內非 ASCII 檔名數為 0
- Windows 解壓縮測試通過
