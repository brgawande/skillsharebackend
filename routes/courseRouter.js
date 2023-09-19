import express from "express";
import {
  addLectures,
  createCourse,
  deleteCourse,
  deleteCourseLecture,
  getAllCourses,
  getCourseLecture,
} from "../controllers/courseControllers.js";
import { singleUpload } from "../middlewares/multer.js";
import { authorizedAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.route("/getallcourses").get(getAllCourses);

router
  .route("/createcourse")
  .post(isAuthenticated, authorizedAdmin, singleUpload, createCourse);

router
  .route("/course/:id")
  .get(isAuthenticated, authorizedAdmin, getCourseLecture)
  .post(isAuthenticated, authorizedAdmin, singleUpload, addLectures)
  .delete(isAuthenticated, authorizedAdmin, deleteCourse);

router
  .route("/deletecourselecture")
  .delete(isAuthenticated, authorizedAdmin, deleteCourseLecture);

export default router;
