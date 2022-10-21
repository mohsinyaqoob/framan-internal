const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.body.token;

  if (!token) {
    return res.status(401).json({ msg: "No token. Authorization denied." });
  }

  next();
};

export default authMiddleware;
