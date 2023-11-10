const jwt = require("jsonwebtoken");
function createJWTToken(username) {
    const token = jwt.sign(
        { username },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: "30d",
        }
    );
    return token;
}

module.exports = { createJWTToken };