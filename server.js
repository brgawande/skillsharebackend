import app from "./app.js";
import dotenv from "dotenv";
import { connectdb } from "./config/database.js";
import cloudinary from "cloudinary";
import NodeCron from "node-cron";
import { Stats } from "./models/statsModel.js";
dotenv.config({
  path: "./config/config.env",
});
connectdb();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

// payments

// nodecors
// this starts denotres seconds minutes hours days months years
NodeCron.schedule("0 0 0 1 * *", async () => {
  try {
    await Stats.create({});
  } catch (error) {
    console.log(error);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Servver is running on port ${process.env.PORT}`);
});
