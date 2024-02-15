const express = require("express");

const router = express.Router();

const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const productController = require("../controllers/productController")


// user

router.post("/registration", userController.registration);
router.get("/otp-verify/:email/:otp", userController.emailOtpVerify);
router.post("/login/:email",userController.login);
router.put("/update", authMiddleware, userController.updateUser);
router.get("/profile/details", authMiddleware, userController.profileDetails);

// product

router.post("/create/product", authMiddleware, productController.createProduct );






module.exports = router;