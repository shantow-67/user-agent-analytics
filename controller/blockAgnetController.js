const path = require("path");
const fs = require("fs").promises;

const blockAgents = async (req, res) => {
  try {
    const data = await fs.readFile(
      path.join(__dirname, "../blockedAgents.json"),
      "utf-8"
    );
    const blockAgents = JSON.parse(data);
    let blockCount = 0;

    for (let i = 0; i < blockAgents.length; i++) {
      blockCount++;
    }

    res.status(200).json({ blockAgents: blockCount });
  } catch (error) {
    console.error("Error reading/parsing blocked user agent data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = blockAgents;
