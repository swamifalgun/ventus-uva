const express = require('express');
const axios = require('axios');
const router = express.Router();

require('dotenv').config()

const apiKey = process.env.API_KEY;

// Get Weather
router.get('/', async (req, res) => {
    axios.get('https://api.weather.com/v2/pws/observations/current', {
    params: {
      stationId: 'IHELSI64',
      format: 'json',
      units: 'm',
      apiKey: apiKey
    }
  })
  .then(function (response) {
    const data = response.data;
    const observations = data.observations[0];
    
    // res.render('index', {observations: observations})
    res.send({observations: observations});
  })
  .catch(function (error) {
    console.log(error);
  })
});

// Get Weather
router.get('/day-observations', async (req, res) => {
  axios.get('https://api.weather.com/v2/pws/observations/all/1day', {
  params: {
    stationId: 'IHELSI64',
    format: 'json',
    units: 'm',
    apiKey: apiKey
  }
})
.then(function (response) {
  const data = response.data;
  const observations = data.observations;
  // res.render('index', {observations: observations})
  res.send({observations: observations});
})
.catch(function (error) {
  console.log(error);
})
});

module.exports = router;