const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;
const rateLimit = require("express-rate-limit");
const usersRoute = require("./routes/usersRouter");
const checkUserAgent = require("./middlware/checkAgent");
const cors = require("cors");

//midldleware
app.use(express.json());
app.use(cors());
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

const rateLimiter = rateLimit({
  windowMs: 1 * 1000,
  max: 3,
  message: {
    message: "Too many requests from this IP, please try again in 30 seconds.",
  },
});

app.use("/api/user", rateLimiter, checkUserAgent, usersRoute);

//default health check
app.get("/health", (req, res) => {
  res.status(200).send("Server health is in good condition");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
