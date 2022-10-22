import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  const { username, password } = req.body;
  res.json({ ping: "Pong! 😈", message: "Welcome to FraMan API Server 😂" });
});

router.get("/other", (req, res) => {
  res.json({ some: "other route" });
});

export default router;
