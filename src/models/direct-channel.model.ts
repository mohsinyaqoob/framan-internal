import sql from "mssql";

export const getAll = async () => {
  try {
    const result = await sql.query`SELECT * FROM DirectChannel`;
    return result.recordset;
  } catch (error) {
    throw new Error(error);
  }
};
