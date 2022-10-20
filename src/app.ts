import express from "express";
import dotenv from "dotenv";
import Routes from "./routes/index.route";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use("/", Routes);
app.use(express.json());

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
