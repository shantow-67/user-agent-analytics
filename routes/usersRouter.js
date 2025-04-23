const express = require("express");
const userAgent = require("../controller/userAgentController");
const analytics = require("../controller/analyticsController");
const blockAgents = require("../controller/blockAgnetController");

const router = express.Router();

router.get("/analytics/user-agents", userAgent);
router.get("/analytics/blocked-agent", blockAgents);

//serve html file
router.get("/analytics", analytics);

module.exports = router;
