import express from "express";
import Routes from "./routes/index.route";

const app = express();
const port = 3300;

app.use("/", Routes);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
