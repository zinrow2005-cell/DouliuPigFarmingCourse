# 山線養豬讀書會｜會員課程與主辦廠商管理系統

版本：`v110.0.0`

這是一套可直接部署到 GitHub Pages 的 PWA 系統，包含會員端與管理端，用於山線養豬讀書會課程公告、出席回覆、簽到、會員 / 牧場名單、餐費結算、年度會費、雲端同步與資料備份。

## 目前主要功能

- 年度課程表：課程日期、講師、地點、停車、附件與課後資料
- 會員端出席回覆：會員填寫後會顯示雲端上傳進度，確認 Google Sheet 成功後才算完成
- 管理端資料同步：可手動上傳 / 下載，也支援自動上傳與自動下載
- 同步時間：統一顯示台灣時間 `Asia/Taipei`
- 會員 / 牧場名單：一行式列表，可新增、編輯、設為退會、恢復正常
- 退會會員名單：退會後資料保留，不刪除歷史出席與繳費紀錄
- 年度會費：年度應收、已收、未收、未繳提醒與列印收款表
- 出席與請假統計：日期彈窗查看出席、請假、未回覆名單
- 簽到報到：QR Code 與現場直接簽到
- 餐費結算：餐費、已收、未收、付款方式與匯出
- 公告中心：公告可連結課程，支援課程異動與置頂
- Google Apps Script / Google Sheet：作為雲端資料交換中心

## 檔案結構

```text
.
├── index.html
├── manifest.webmanifest
├── sw.js
├── version.json
├── sample_data.json
├── APPS_SCRIPT_CODE.gs
├── GITHUB_PAGES_DEPLOY.md
├── README.md
├── assets/
│   ├── app.v110.js
│   ├── app.v110.css
│   ├── brand-logo-calligraphy.png
│   ├── hero-banner-calligraphy-pigs.png
│   ├── icon-192.png
│   ├── icon-512.png
│   └── ...
├── docs/
│   ├── CHANGELOG_HISTORY.txt
│   ├── CHECK_REPORT_PKG106_CLEAN_GITHUB_READY.md
│   └── GOOGLE_SHEET_SYNC_SETUP.md
└── templates/
    ├── course_import_template.csv
    ├── course_import_template.xlsx
    ├── member_import_template.csv
    └── member_import_template.xlsx
```

## GitHub Pages 上傳方式

1. 解壓縮本 ZIP。
2. 將所有檔案上傳到 GitHub Repository 根目錄。
3. 到 GitHub Pages 設定：
   - Source：Deploy from a branch
   - Branch：`main`
   - Folder：`/root`
4. 確認網址可開啟。
5. 手機若已安裝舊版 PWA，建議移除後重新加入主畫面，避免舊 Service Worker 快取。

## Google Sheet 同步

請將 `APPS_SCRIPT_CODE.gs` 的內容貼到 Google Apps Script，重新部署 Web App，並確認系統內同步 URL 指向最新 Web App URL。

詳細步驟請看：

```text
docs/GOOGLE_SHEET_SYNC_SETUP.md
```

## 重要提醒

會員端送出出席回覆後，畫面必須顯示「雲端上傳成功，管理端可以抓到這筆資料」才代表 Google Sheet 已收到。若只顯示本機暫存或上傳失敗，管理端暫時抓不到該筆資料。


## PKG107 更新

- 實際以手機寬度檢查主要頁面。
- 修正管理端年度會費頁在手機檢測時發生 `money is not defined` 的錯誤。


## PKG110 更新

- 退會會員名單中的刪除按鈕改為「永久刪除」。
- 對退會會員按永久刪除時會先跳出明確確認提示。
- 確認後會清除會員基本資料，並移除課程出席、請假、簽到、問卷、課前任務與餐費連結。
- 年度會費 / 帳務歷史保留為快照，避免影響查帳。
- 快取版本更新為 `shanxian-pig-study-club-v110`，GitHub Pages 更新後會重新抓取新版 CSS/JS。

## PKG109 更新

- 電腦版與手機版最上方快速操作列已精簡為兩顆端別切換按鈕：`會員端`、`管理端`。
- `新增課程`、`新增會員`、`新增地點` 不再出現在最上方額外欄位，避免手機變成 5 顆兩欄按鈕。
- 管理端頁面內原本的新增資料功能仍保留，不影響新增課程、會員與地點。
- 快取版本更新為 `shanxian-pig-study-club-v109`，GitHub Pages 更新後會重新抓取新版 CSS/JS。
