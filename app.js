const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3003

// set EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// serve static files (optional)
app.use(express.static("public"));

// HOME (optional)
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// 🔥 PERSON ROUTE (MAIN PART)
app.get("/person", (req, res) => {
  const name = req.query.name;
  const value = Number(req.query.value);
  const status = req.query.status;

  if (!name || !value) {
    return res.send("Invalid data!");
  }

  res.render("person", { name, value, status });
});

// start server
app.listen(PORT, () => {
  console.log("Server running on port: " + PORT);
});
