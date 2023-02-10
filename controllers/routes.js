const { Router } = require("express");
const { getData, sendImage, sendPrice, readFiles } = require("./requests.js");

const router = Router();

router.get("/getData", getData);
router.get("/getImage", sendImage);
router.get("/getPrice", sendPrice);
router.get("/getListOfDirectory", readFiles);

exports.router = router;