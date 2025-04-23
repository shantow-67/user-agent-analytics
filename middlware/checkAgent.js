const { saveUserAgent, saveBlockedAgents } = require("../utils/logger");

const checkUserAgent = (req, res, next) => {
  const userAgent = req.headers["user-agent"];

  const blockedPatterns = [
    /curl/i,
    /wget/i,
    /python-requests/i,
    /Go-http-client/i,
    /Java/i,
    /sqlmap/i,
    /nmap/i,
    /Nikto/i,
    /HeadlessChrome/i,
    /PhantomJS/i,
  ];
  const isBlocked = blockedPatterns.some((pattern) => pattern.test(userAgent));

  if (isBlocked) {
    //if request is blocked , save in blocked user file
    saveBlockedAgents(userAgent);
    return res.status(403).json({
      message: "Forbidden: User-Agent is not allowed, Try diffrent agnet",
    });
  } else if (!userAgent) {
    return res
      .status(403)
      .json({ message: "Forbidden: Suspicious User-Agent" });
  }

  // If request is not blocked, save in user agents file
  saveUserAgent(userAgent);

  next();
};

module.exports = checkUserAgent;
