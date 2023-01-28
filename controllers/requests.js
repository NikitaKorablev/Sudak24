async function data(req, res) {
  const { Client } = require("pg");
  const client = new Client({
    host: "localhost",
    user: "nikita",
    port: "5432",
    password: "nikita",
    database: "nikita",
  });

  client.connect();
  const result = await client.query("SELECT * from mydb");
  await client.end;

  res.send(JSON.stringify(result.rows[0]));
}

const { Router } = require("express");

const router = Router();
router.get("/getData", data);

exports.router = router;
