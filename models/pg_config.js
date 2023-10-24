const Pool = require("pg").Pool;
const pg_conn = new Pool({
  user: "postgres",
  password: "12345",
  host: "localhost",
  database: "khoa",
  port: 5432,
});
module.exports = pg_conn;