const mongoose = require("mongoose");
const User = require("../model/User.model");
const validate = require("../utils/validation/user.auth.validation");
const {
    createHashPassword,
    compareHashPassword,
} = require("../utils/extra/encryptPassword");
const { createJsonWebToken } = require("../utils/token/generateWebToken");

module.exports = {
    registerUser: async (req, res) => {
        const { email, password } = req.body;
        const encryptPassword = await createHashPassword(password);
        const user = await new User({ email, password: encryptPassword });
        try {
            const validationStatus = await validate(req.body);
            if (validationStatus) {
                user.save();
                res.status(200).send("User added");
            } else {
                res.status(400).send("Validation Falied");
            }
        } catch (err) {
            res.status(404).send("Error occured");
        }
    },
    loginUser: async (req, res) => {
        const { email, password } = req.body;
        try {
            const validationStatus = await validate(req.body);
            if (validationStatus) {
                const user = await User.findOne({ email });
                const passwordMatchedStatus = await compareHashPassword(
                    password,
                    user.password
                );
                if (user) {
                    if (passwordMatchedStatus) {
                        // jwt
                        const token = createJsonWebToken(user);
                        res.header("auth-token", token).status(200).send(token);
                    } else {
                        res.status(400).send("Password does not matched ... ");
                    }
                }
            }
        } catch (error) {
            res.status(404).send("Error occured");
        }
    },
    getUserData: async (req, res) => {
        const currentUserId = await req.userLoginStatus._id;
        try {
            const userData = await User.findOne({ _id: currentUserId });
            res.status(200).send(userData.email);
            return;
        } catch (err) {
            res.status(404).send("Something went wrong");
            return;
        }
    },
    deleteUserAccount: async (req, res) => {
        const currentUserId = req.userLoginStatus._id;
        try {
            const userDeleteStatus = await User.deleteOne({
                _id: currentUserId,
            });
            res.status(200).send(userDeleteStatus);
        } catch (error) {
            res.status(404).send("Something went wrong");
            return;
        }
    },
    logoutUser: async (req, res) => {
        try {
            delete req.header["auth-token"];
            res.status(200).send("User logged out");
        } catch (error) {
            res.status(404).send("Something went wrong ... ");
        }
    },
};
