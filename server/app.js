const express = require('express');
const cors = require('cors');
const path = require('path');;
const app = express();

const port = process.env.PORT || 3000;

app.use('/static', express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'pug');

const weather = require('./router/api/weather');

app.use('/api/weather', weather);

app.use(express.json());
app.use(cors());

// Handle production
if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + '/public/'));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

app.listen(port, function () {
  console.log(`Ventus - Uva Weather stattion listening on port ${port}`);
});