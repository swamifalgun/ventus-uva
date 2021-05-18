const express = require('express');
const app = express();
const port = 3000;
app.get('/', function (req, res) {
  res.send('Dashboard for Ventus W832');
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});