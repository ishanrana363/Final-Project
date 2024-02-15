const express = require("express");

const router = express.Router();

const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");


// user

router.post("/registration", userController.registration);
router.post("/login/:email",userController.login);
router.put("/update", authMiddleware, userController.updateUser);
router.get("/profile/details", authMiddleware, userController.profileDetails);




module.exports = router;