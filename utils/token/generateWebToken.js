const jwt = require("jsonwebtoken");

const createJsonWebToken = (user) => {
    const token = jwt.sign({ _id: user._id }, process.env.WEBTOKENSECRET, {
        expiresIn: "1h",
    });
    return token;
};

module.exports = { createJsonWebToken };
