import sql from "mssql";

export const getTransactionTypeByDirectChannelId = async (id: number) => {
  try {
    const result =
      await sql.query`SELECT * FROM TransactionType WHERE DirectChannelId = ${id}`;
    return result.recordset;
  } catch (error) {
    throw new Error(error);
  }
};
