const express = require("express");
const session = require("express-session");
let port = 3000;

app = express();
//express middleware to set up sessions
const sessionOptions = {
  secret: "thisisnotagoodsecret",
  resave: false,
  saveUninitialized: false,
};
app.use(session(sessionOptions));

app.get("/viewscount", (req, res) => {
  if (req.session.count) {
    req.session.count += 1;
  } else {
    req.session.count = 1;
  }
  res.send(`You have viewed this page ${req.session.count} times`);
});

app.get("/register", (req, res) => {
  const { username = "anonymous" } = req.query;
  req.session.username = username;
  res.redirect("/greet");
});

app.get("/greet", (req, res) => {
  res.send(`Welcome Back ! ${req.session.username}`);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
