const fs = require("fs");
const path = require("path");

const userAgentFile = path.join(__dirname, "../userAgents.json");
const blockedAgentFile = path.join(__dirname, "../blockedAgents.json");

//Save valid user agents
const saveUserAgent = (agentString) => {
  let data = [];
  if (fs.existsSync(userAgentFile)) {
    const raw = fs.readFileSync(userAgentFile);
    data = JSON.parse(raw);
  }
  data.push(agentString);
  fs.writeFileSync(userAgentFile, JSON.stringify(data, null, 2));
};

//Save blocked Agent
const saveBlockedAgents = (agentString) => {
  let data = [];
  if (fs.existsSync(blockedAgentFile)) {
    const raw = fs.readFileSync(blockedAgentFile);
    data = JSON.parse(raw);
  }
  data.push(agentString);
  fs.writeFileSync(blockedAgentFile, JSON.stringify(data, null, 2));
};

module.exports = { saveUserAgent, saveBlockedAgents };
