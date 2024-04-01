const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const { connectToDatabase } = require("./config/database.js");

const checkCon = connectToDatabase();
app.get("/", (req, res) => {
  if (checkCon) {
    res.send("Connected");
  } else {
    res.send("not connected");
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

