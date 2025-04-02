const { Pool } = require("pg");
const secrets = require("../secrets.json");

// const pool = new Pool({
//   connectionString: secrets.DATABASE_URL,
// });
// let isConnected = false;

// const _getPool = async () => {
//   if (!isConnected) {
//     try {
//       await pool.connect();
//       isConnected = true;
//     } catch (e) {
//       console.error("Failed while connecting to DB");
//     }
//   }

//   return pool;
// };

const getPool = async () => {
  try {
    const pool = new Pool({
      connectionString: secrets.DATABASE_URL,
    });
    await pool.connect();
    return pool;
  } catch (e) {
    console.error("Failed while connecting to DB");
  }
};

module.exports = {
  getPool,
};
