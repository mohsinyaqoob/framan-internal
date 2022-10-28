import sql from "mssql";

export const getAll = async () => {
  try {
    let params = [{ name: "IsActive", value: 1, type: sql.Bit }];
    const pool = sql.pool;
    const result1 = await pool.request();
    params.forEach((param) =>
      result1.input(param.name, param.type, param.value)
    );
    const result = await result1.query(
      `SELECT * FROM ClientAccountType WHERE IsActive=@IsActive`
    );
    return result.recordset;
  } catch (error) {
    throw new Error(error);
  }
};
