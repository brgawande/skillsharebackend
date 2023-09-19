import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(cors({}));

// using routes
import userRouter from "./routes/userRoutes.js";
import courseRouter from "./routes/courseRouter.js";
import statsRouter from "./routes/statsRoutes.js";
app.use("/api/v1", userRouter);
app.use("/api/v1", courseRouter);
app.use("/api/v1", statsRouter);

export default app;

app.use(errorMiddleware);
