const jwt = require("jsonwebtoken");

const isLoggedIn = (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) res.status(401).send("Access denided ... ");

    try {
        const verified = jwt.verify(token, process.env.WEBTOKENSECRET); // returns token consists of data
        req.user = verified;
    } catch (error) {
        res.status(400).send("Invalid Auth Credentials ... ");
    }

    next();
};

module.exports = { isLoggedIn };
