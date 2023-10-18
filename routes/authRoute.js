import express from 'express';
import { loginController, registerController,testController,forgotPasswordController,getOrdersController, getAllOrdersController, orderStatusController } from '../controllers/authController.js';
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import orderModel from '../models/orderModel.js';

const router = express.Router();

// Routing
router.post('/register', registerController);

router.post('/login',loginController);

router.post('/forgot-password]',forgotPasswordController);

router.get("/test", requireSignIn, isAdmin, testController);

//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});


// order
router.get("/orders",requireSignIn,getOrdersController)


// admin  orders

router.get("/all-orders",requireSignIn,isAdmin,getAllOrdersController)


// update admin order status

router.put("/order-status/:orderId",requireSignIn,isAdmin,orderStatusController)

export default router;

