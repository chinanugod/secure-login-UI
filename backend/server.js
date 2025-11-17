const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const USERS_FILE = path.join(__dirname, "users.json");

// Helper to read users
const readUsers = () => {
  if (!fs.existsSync(USERS_FILE)) return [];
  const data = fs.readFileSync(USERS_FILE, "utf8");
  try {
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

// Helper to write users
const writeUsers = (users) => {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};

/* ===== REGISTRATION ===== */
app.post("/api/register", (req, res) => {
  const { fullname, email, password } = req.body;

  if (!fullname || !email || !password) {
    return res.status(400).json({ message: "Please fill in all fields." });
  }

  const users = readUsers();
  const existing = users.find((u) => u.email === email);

  if (existing) {
    return res.status(409).json({ message: "User already exists." });
  }

  users.push({ fullname, email, password });
  writeUsers(users);

  res.status(201).json({ message: "Registration successful!" });
});

/* ===== LOGIN ===== */
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const users = readUsers();
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password." });
  }

  res.json({ message: "Login successful!", user });
});

/* ===== GET PROFILE ===== */
app.get("/api/profile/:email", (req, res) => {
  const { email } = req.params;

  const users = readUsers();
  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(404).json({ message: "User not found." });
  }

  // For demo, return basic info (exclude password)
  const { fullname } = user;
  res.json({ fullname, email });
});

/* ===== TEST ROUTE ===== */
app.get("/", (req, res) => {
  res.send("CodeCrackles backend is running!");
});

/* ===== START SERVER ===== */
const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
