const express = require('express');
const axios = require('axios');
const router = express.Router();
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc')
dayjs.extend(utc)

const admin = require('firebase-admin');
const serviceAccount = require('../../../serviceAccountKey.json');
const dbUrl = 'https://ventus-99c29-default-rtdb.europe-west1.firebasedatabase.app/';
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
  databaseURL: dbUrl
});
const db = admin.database();

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

  // Get date from observations
  var dates = [];
  var finalDate;

  observations.map((e) => {
    const dateObj = new Date(Date.parse(e.obsTimeLocal))
    dates.push(dateObj)
  })

  var sortedDates = dates.sort((a,b) => b - a);

  finalDate = sortedDates[0].getFullYear() + '-' + ("0"+(sortedDates[0].getMonth()+1)).slice(-2) + '-' + ("0" + sortedDates[0].getDate()).slice(-2)

  // Group data by hour   
  const hourGroup = observations.reduce((groups, game) => {
    const date = game.obsTimeLocal.split(' ')[1].split(':')[0];
    if (!groups[date]) {
        groups[date] = [];
    }
    groups[date].push(game);
    return groups;
  }, {});

  for (const property in hourGroup) {
    var avgBucket = [];

    const groupedObservations = hourGroup[property];

    groupedObservations.forEach(element => {
        avgBucket.push(element.metric.tempAvg)
        avgBucket / avgBucket.length
    });

    const length = avgBucket.length;
    const finalAvg =  avgBucket.reduce((a, b) => a + b, 0)
    hourGroup[property] = finalAvg / length
  }

  const sortedObj = Object.entries(hourGroup).sort((a,b) => a[0]-b[0]);
  var finalData = [];

  for(const hour in sortedObj) {
    if (sortedObj[hour][0] != undefined && sortedObj[hour][1] != NaN) {
      var dataObject = {
        label: sortedObj[hour][0] + ':00',
        value: Math.round(sortedObj[hour][1])
      };
      finalData.push(dataObject);
    } else {}
  }

  db.ref(finalDate).set({finalData});

  res.send({observations: finalData});
})
.catch(function (error) {
  console.log(error);
  })
});


router.get(`/previous-observations`, async (req, res) => {

  const date = req.query['date'];

  var sl = date.split('')

  Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
  };

  sl.insert(4, '-')

  sl.insert(7, '-')
  
  var joinedDate = sl.join('')

  var ref = db.ref(joinedDate)
  
  ref.on('value', (snapshot) => {
    if (snapshot.val()) {
      res.send({observations : snapshot.val()})
    } else {
      res.send({observations : {'finalData' : []}})
    }

  }, (errorObject) => {
    console.log('The read failed: ' + errorObject.name);
  }); 
})


module.exports = router;