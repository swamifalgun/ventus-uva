const express = require('express');
const path = require('path');;
const app = express();
const axios = require('axios');
const { json } = require('express');

const port = process.env.PORT || 3000;

require('dotenv').config()
app.use('/static', express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'));


app.set('view engine', 'pug');

const apiKey = process.env.API_KEY;

app.get('/', function (req, res) {

axios.get('https://api.weather.com/v2/pws/observations/current', {
    params: {
      stationId: 'IHELSI64',
      format: 'json',
      units: 'm',
      apiKey: apiKey
    }
  })
  .then(function (response) {
    // console.log(response.data);
    const data = response.data;
    const observations = data.observations[0];

    res.render('index', {observations: observations})
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  }); 



});

app.get('/next', function (req, res) {
    res.render('next', {
        nextItem: 'This is a next item.'
    });
  });

app.listen(port, function () {
  console.log(`Ventus - Uva Weather stattion listening on port ${port}`);
});