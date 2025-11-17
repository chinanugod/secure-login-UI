const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("CodeCrackles backend is running!");
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
