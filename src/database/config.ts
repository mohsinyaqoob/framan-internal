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
      sql.pool = await sql.connect(sqlConfig);
      console.log("Database connectivity established");
      resolve("Database Connected ✔");
    } catch (err) {
      console.log(err);
      reject("Database connection failed ❌");
    }
  });
};

export const runQuery = async (query) => {
  try {
    // const result = await pool.request().query(query);
    // return result.recordsets;
  } catch (error) {
    throw new Error(error);
  }
};

export default connect;
