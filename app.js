const express = require("express");
const app = express();

app.get("slowly-framework", function (req, res) {
  return res.json({
    message: "Say hello to the world's slowest framework",
  });
});

app.listen(3000);
console.log("slowly-js running on port 3000");
