const { Router } = require("express");
const { getData, sendImage, sendPrice } = require("./requests.js");

const router = Router();

router.get("/getData", getData);
router.get("/getImage", sendImage);
router.get("/getPrice", sendPrice);


exports.router = router;