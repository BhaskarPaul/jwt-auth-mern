const express = require("express");
const {
    registerUser,
    loginUser,
    getUserData,
    deleteUserAccount,
    logoutUser,
} = require("../controllers/user.auth.controll");
const { isLoggedIn } = require("../middlewares/checkLoginStatus");

const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.get("/home", isLoggedIn, getUserData);

// router.post("/logout", isLoggedIn, logoutUser);

router.post("/deleteAccount", isLoggedIn, deleteUserAccount);

module.exports = router;
