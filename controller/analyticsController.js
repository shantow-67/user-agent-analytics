const path = require("path");

const analytics = (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../public", "index.html"));
  } catch (error) {
    console.error("Error reading/parsing alaytics data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = analytics;
