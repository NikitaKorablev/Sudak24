const fs = require("fs");

function readFiles() {
  const directoryPath = "media/";
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      console.log("Unnable to scan dyrectory:" + err);
    }
    files.forEach((file) => {
      console.log(file);
    });
  });
}

async function getData(req, res) {
  const { Client } = require("pg");
  const client = new Client({
    host: "localhost",
    user: "nikita",
    port: "5432",
    password: "nikita",
    database: "nikita",
  });

  await client.connect();
  const result = await client.query("SELECT * from mydb");
  client.end();

  res.send(JSON.stringify(result.rows[0]));
}

async function sendImage(req, res, next) {
  const imageSrc = req.query.src;
  console.log(imageSrc);
  fs.readFile(`${imageSrc}`, function (err, data) {
    if (err) {
      return next(err);
    };
    res.writeHead(200, { "Content-Type": "image/jpg" });
    res.write(data);
    return res.end();
  });
}

async function sendPrice(req, res, next) {
  const fileSrc = req.query.src;
  fs.readFile(`${fileSrc}`, function (err, data) {
    if (err) {
      return next(err);
    };
    res.writeHead(200, { "Content-Type": "application/pdf" });
    res.write(data);
    return res.end();
  });
}

module.exports = { getData, sendImage, sendPrice };
