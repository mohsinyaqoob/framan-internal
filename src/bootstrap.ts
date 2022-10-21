import connect from "./database/config";
import dotenv from "dotenv";

dotenv.config();

const bootstrap = async (app) => {
  try {
    const port = process.env.PORT;
    // Connect Database
    await connect();
    // Start Web Server
    app.listen(port, () => {
      console.log(`Web Server Running on Port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

export default bootstrap;
