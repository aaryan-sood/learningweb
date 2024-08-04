const express = require("express");
let port = 3000;

app = express();

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
