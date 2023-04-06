const { Router } = require("express");
const { getData, sendImage, sendPrice, readFiles, sendDecription } = require("./requests.js");

const router = Router();

router.get("/getData", getData);
router.get("/getImage", sendImage);
router.get("/getPrice", sendPrice);
router.get("/getListOfDirectory", readFiles);
router.get("/getDescription", sendDecription);

exports.router = router;