import mongoose from "mongoose";

export const connectdb = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "skillsharebackend",
    })
    .then((c) => console.log(`DataBase Connected on host ${c.connection.host}`))
    .catch((e) => console.log("error"));
};
