# GitHub Pages 部署說明

## 上傳前確認

此包是 `v110.0.0` 乾淨整理版，已保留最新主程式：

- `assets/app.v110.js`
- `assets/app.v110.css`
- `sw.js` 快取版本：`shanxian-pig-study-club-v110`

## 部署步驟

1. 解壓縮 ZIP。
2. 把解壓後的全部檔案上傳到 GitHub Repository 根目錄。
3. GitHub Pages 設定：
   - Source：Deploy from a branch
   - Branch：main
   - Folder：/root
4. 等待 GitHub Pages 部署完成。
5. 開啟網站後，確認首頁版本與功能正常。

## 手機 PWA 快取提醒

如果手機已經安裝過舊版 APP，可能會吃到舊快取。建議：

1. 先從手機主畫面移除舊 APP。
2. 使用瀏覽器重新開啟 GitHub Pages 網址。
3. 重新加入主畫面。

## Google Sheet 同步

若雲端同步失敗，請確認：

- `APPS_SCRIPT_CODE.gs` 已貼到 Apps Script
- Web App 已重新部署
- Web App 權限設定正確
- 系統內同步 URL 是最新部署 URL
- 會員端送出後有顯示「雲端上傳成功」


## PKG107 更新

- 實際以手機寬度檢查主要頁面。
- 修正管理端年度會費頁在手機檢測時發生 `money is not defined` 的錯誤。


## PKG110 更新

- 退會會員名單的刪除改為「永久刪除」，避免和一般會員名單刪除混淆。
- 刪除退會會員前會跳出確認提示，說明會清除會員資料且無法復原。
- 確認後清除會員基本資料與課程關聯；年度會費 / 帳務快照仍保留供查帳。
- 快取版本更新為 `shanxian-pig-study-club-v110`。

## PKG109 更新

- 電腦版與手機版最上方快速操作列已精簡為兩顆端別切換按鈕：`會員端`、`管理端`。
- `新增課程`、`新增會員`、`新增地點` 不再出現在最上方額外欄位，避免手機變成 5 顆兩欄按鈕。
- 管理端頁面內原本的新增資料功能仍保留，不影響新增課程、會員與地點。
- 快取版本更新為 `shanxian-pig-study-club-v109`，GitHub Pages 更新後會重新抓取新版 CSS/JS。
