# Google Sheet 同步設定

## 一、建立 Google Sheet 與 Apps Script

1. 建立一個新的 Google Sheet。
2. 點選「擴充功能 → Apps Script」。
3. 將本包 `APPS_SCRIPT_CODE.gs` 全部貼上。
4. 保持或修改：

```javascript
const ADMIN_TOKEN = 'shanxian_admin_2026';
const READ_TOKEN = 'shanxian_read_2026';
```

5. 部署 → 新增部署作業 → 類型選擇 Web App。
6. 執行身分選「我」。
7. 存取權限依你的使用方式設定，通常要讓會員可送出表單，需允許知道連結的人可存取。
8. 複製 Web App URL。

## 二、回到系統管理端設定

1. 開啟 `index.html?mode=admin&adminToken=shanxian_admin_2026`。
2. 到「雲端同步」。
3. 貼上 Apps Script Web App URL。
4. 填入 Admin Token 與 Read Token。
5. 按「測試連線」。
6. 按「上傳到雲端」。

## 三、產生 LINE 群組報名連結

到「LINE 公告 / 分享卡 / 報名連結」複製「一般會員共用報名連結」。系統會自動把 Apps Script URL 與 Read Token 放進連結裡。

會員不用輸入 Apps Script URL，也不用知道 Google Sheet 位置。

## 四、會員送出後資料如何回寫

會員送出後會呼叫 Apps Script：

```text
POST action=participantSignup
```

資料會寫入該課程的 `participantSignups`：

- 牧場 / 姓名
- 聯絡人
- 參加人數
- 狀態：會出席 / 請假 / 尚未確定
- 電話 / LINE
- 備註
- 最後更新時間

同一場課、同一牧場 / 姓名重複送出時，會更新原資料，不會重複累加。

## 五、管理端統計

管理端可到：

- 出席統計
- 年度課程表
- 費用結算

查看每一場課程的參加總人數與明細。


管理端登入密碼：`pig2025`（Admin Token 仍為 `shanxian_admin_2026`）。
