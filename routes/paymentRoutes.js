import express from "express";
import {
  buySubscription,
  getRazorPayKey,
  paymentVerification,
} from "../controllers/paymentControllers.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// Buy Subscription
router.route("/subscribe").get(isAuthenticated, buySubscription);

// payment verification and save refrenece in database
router.route("/paymentverification").post(isAuthenticated, paymentVerification);

// get razorpay key
router.route("/razorpaykey").get(getRazorPayKey);

// cancel subscription
router.route("/subscribe/cancel").delete(isAuthenticated);

export default router;
