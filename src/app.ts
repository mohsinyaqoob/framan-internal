import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.route";
import bootstrap from "./bootstrap";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

// Create all routes in ./routes/index.ts
app.use("/", routes);

bootstrap(app);
