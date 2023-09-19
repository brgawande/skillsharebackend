import express from "express";
import {
  addToPlaylist,
  changePassword,
  changeUserRole,
  deleteUser,
  getAllUsers,
  getMyProfile,
  login,
  logout,
  register,
  removeFromPlaylist,
  updateProfile,
  updateProfilePic,
} from "../controllers/userControllers.js";
import { authorizedAdmin, isAuthenticated } from "../middlewares/auth.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.route("/register").post(singleUpload, register);

router.route("/login").post(login);

router.route("/me").get(isAuthenticated, getMyProfile);

router.route("/logout").get(isAuthenticated, logout);

router
  .route("/updateprofilepic")
  .put(isAuthenticated, singleUpload, updateProfilePic);

router.route("/updateprofile").put(isAuthenticated, updateProfile);

router.route("/changepassword").put(isAuthenticated, changePassword);

router.route("/addtoplaylist").post(isAuthenticated, addToPlaylist);

router.route("/removefromplaylist").delete(isAuthenticated, removeFromPlaylist);

// admin routes
router.route("/getallusers").get(isAuthenticated, authorizedAdmin, getAllUsers);

router
  .route("/users/:id")
  .put(isAuthenticated, authorizedAdmin, changeUserRole)
  .delete(isAuthenticated, authorizedAdmin, deleteUser);

export default router;
