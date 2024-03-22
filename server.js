import express from "express";
import connection from "./database/db.js";
import dotenv from "dotenv";
import { router } from "./routes/routes.js";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
const __dirname=path.resolve();
import { v4 as uuid } from "uuid";

dotenv.config();
const userName = process.env.DB_USERNAME;
const passWord = process.env.DB_PASSWORD;
const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);
const PORT = process.env.PORT || 8000;
const URL =
  process.env.MONGO_URI ||
  `mongodb+srv://${userName}:${passWord}@cluster0.ipacw3s.mongodb.net/?retryWrites=true&w=majority`;
connection(URL);

app.use(express.static(path.join(__dirname,"./client/build")))

app.get("*",function(_,res){
  res.sendFile(path.join(__dirname,"./client/build/index.html"),function (err){
    res.status(500).send(err);
  })
})
app.listen(PORT, () => {
  console.log("====================================");
  console.log("Server is running on Port ", PORT);
  console.log("====================================");
});



export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
(paytmParams["MID"] = process.env.PAYTM_MID),
  (paytmParams["WEBSITE"] = process.env.PAYTM_WEBSITE),
  (paytmParams["CHANNEL_ID"] = process.env.PAYTM_CHANNEL_ID),
  (paytmParams["INDUSTRY_TYPE_ID"] = process.env.PAYTM_INDUSTRY_TYPE_ID),
  (paytmParams["ORDER_ID"] = uuid()),
  (paytmParams["CUST_ID"] = process.env.PAYTM_CUST_ID),
  (paytmParams["TXN_AMOUNT"] = "100"),
  (paytmParams["CALLBACK_URL"] = "callback");
paytmParams["EMAIL"] = "rahumishra02022001@gmail.com";
paytmParams["MOBILE_NO"] = "1234567852";
