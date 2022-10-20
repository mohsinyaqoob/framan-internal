import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.route";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use("/", routes);
app.use(express.json());

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
