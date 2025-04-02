const { getPool } = require("./db");

(async () => {
  const pool = await getPool();
  const res = await pool.query(
    `SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'`
  );
  console.log(res.rows);
  process.exit();
})();
