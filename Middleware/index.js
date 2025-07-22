let express = require("express");
require("dotenv").config();

let app = express();

app.use(express.json());

let checkToken = (req, res, next) => {
  console.log("Token:", req.query.token);
  if (!req.query.token) {
    return res.send({
      status: 0,
      msg: "Please provide the token",
    });
  }
  if (req.query.token != process.env.myToken) {
    return res.send({
      status: 0,
      msg: "Invalid token",
    });
  }
  next(); // Pass control to the next middleware or route
};

let checkPass = (req, res, next) => {
  if (!req.query.pass) {
    return res.send({
      status: 0,
      msg: "Please provide the password",
    });
  }
  if (req.query.pass != process.env.myPass) {
    return res.send({
      status: 0,
      msg: "Invalid password",
    });
  }
  next();
};

// Apply middlewares globally
app.use(checkToken);
app.use(checkPass);

app.get("/", (req, res) => {
  res.send({ status: 1, msg: "HomePage API" });
});

app.get("/news", (req, res) => {
  res.send({ status: 1, msg: "Newspage API" });
});

app.get("/news/:id", (req, res) => {
  res.send({ status: 1, msg: "News details API for ID " + req.params.id });
});

app.post("/login", (req, res) => {
  res.send({
    status: 1,
    msg: "Login API",
    bodydata: req.body,
    querydata: req.query,
  });
});

app.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});
