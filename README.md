# 幹話產生器 (trash talk generator)

## 環境建置與需求 (prerequisites)
- Node.js 10.15.0
- express 4.17.1
- express-handlebars 5.2.0

## 安裝與執行 (installation and execution)
1. 選定一個資料夾，用來存放本專案。開啟終端機，移動至該資料夾，下載本專案
```
git clone https://github.com/Flora2020/trash_talk_generator.git
```
2. 移動至本專案資料夾
```
cd trash_talk_generator
```
3. 安裝套件
```
npm install
```
4. 啟動伺服器
```
node app.js
```
5. 若終端機出現下列字樣，代表伺服器成功啟動
```
Express is listening on http://localhost:3000
```
6. 執行餐廳清單：打開瀏覽器，於網址列輸入
```
http://localhost:3000
```

## 功能 (features)
- 選擇一個想對他說幹話的對象，按下「產生幹話」，即可得到一句幹話。