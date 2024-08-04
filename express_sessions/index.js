const express = require("express");
const session = require("express-session");
let port = 3000;

app = express();
//express middleware to set up sessions
app.use(session({ secret: "thisisnotagoodsecret" }));

app.get("/viewscount", (req, res) => {
  if (req.session.count) {
    req.session.count += 1;
  } else {
    req.session.count = 1;
  }
  res.send(`You have viewed this page ${req.session.count} times`);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
