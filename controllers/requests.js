const localhost = {
  host: "localhost",
  user: "nikita",
  port: "5432",
  password: "nikita",
  database: "nikita"
}
const timeweb = {
  host: "localhost",
  user: "root",
  port: "5432",
  password: "root",
  database: "root"
}

const settings = timeweb;

//-------------------------------------------------------------
const fs = require("fs");

async function getData(req, res) {
  const { Client } = require("pg");
  const client = new Client(settings);

  await client.connect();
  const result = await client.query("SELECT * from mydb");
  client.end();

  res.send(JSON.stringify(result.rows));
}

async function sendDecription(req, res) {
  const description = req.query.desc;

  const { Client } = require("pg");
  const client = new Client(settings);

  await client.connect();
  const result = await client.query(`SELECT "Title", "Description" FROM mydb where "Title" = '${description}'`);
  client.end();

  res.send(JSON.stringify(result.rows));
}

async function readFiles(req, res, next) {
  const directoryPath = req.query.src;
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      console.log("Unnable to scan dyrectory:" + err);
      return next(err);
    }
    return res.send(JSON.stringify(files))
  });
}

async function sendImage(req, res, next) {
  const imageSrc = req.query.src;
  const imageName = req.query.name;
  fs.readFile(`${imageSrc + imageName}`, function (err, data) {
    if (err) {
      return next(err);
    };
    res.writeHead(200, { "Content-Type": "image/webp" });
    res.write(data);
    return res.end();
  });
}

async function sendPrice(req, res, next) {
  const fileDir = req.query.src + req.query.name;
  const fileName = req.query.name;
  return res.download(fileDir, fileName, function (err) {
    if (err) next(err);
  });
}

module.exports = { getData, sendImage, sendPrice, readFiles, sendDecription };
