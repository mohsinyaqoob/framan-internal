import sql from "mssql";
import dotenv from "dotenv";

dotenv.config();

const sqlConfig = {
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  server: process.env.DB_SERVER,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: false, // for azure
    trustServerCertificate: false, // change to true for local dev / self-signed certs
  },
};

const connect = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      await sql.connect(sqlConfig);
      // const result = await sql.query`select * from Gender`;
      console.log("Database connectivity established");
      resolve("Database Connected ✔");
    } catch (err) {
      reject("Database connection failed ❌");
    }
  });
};

export default connect;
