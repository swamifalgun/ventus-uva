<template>
  <div class="canvas">
    <div class="header">
      Ventus - Uva Weather Station
    </div> 

    <div v-if="getWeather" class="main-content">
      <div class="left-column">
        <div class="temp-label">
          Current Temperature
        </div>
        <div class="temp">
          <span class="temp-value">{{getWeather.metric.temp}}</span>
          <span class="degree">°C</span>
        </div>
        
      </div>

      <div class="right-column">

        <div class="nav">
          <button v-on:click="getToday" class="button">Today</button>
          <span class="text"> or</span>
          <span class="text"> Get weather for </span>
          <date-picker v-model="date" valueType="format" placeholder="YYYY-MM-DD" :disabled-date="(date) => date >= new Date()"></date-picker>
          <button class="button" v-on:click="getDayObservation"> Get Observations</button> 
        </div>

        <div v-if="showCurrent" class="metric">
          <div class="small-card">
            <div class="small-card-title">
              Country
            </div>
            <div class="small-card-value">
              {{getWeather.country}}
            </div>
          </div>

          <div class="small-card">
            <div class="small-card-title">
              Humidity (%)
            </div>
            <div class="small-card-value">
              {{getWeather.humidity}}
            </div>
          </div>

          <div class="small-card">
            <div class="small-card-title">
              Heat Index
            </div>
            <div class="small-card-value">
              {{getWeather.metric.heatIndex}}
            </div>
          </div>    

          <div class="small-card">
            <div class="small-card-title">
              Dew Point (°C)
            </div>
            <div class="small-card-value">
              {{getWeather.metric.dewpt}}
            </div>
          </div>  

          <div class="small-card">
            <div class="small-card-title">
              Wind Chill
            </div>
            <div class="small-card-value">
              {{getWeather.metric.windChill}}
            </div>
          </div>  

          <div class="small-card">
            <div class="small-card-title">
              Wind Speed (km/h)
            </div>
            <div class="small-card-value">
              {{getWeather.metric.windSpeed}}
            </div>
          </div>
        </div>

        <div v-else></div>

        <div v-if="showCurrent" class="graph">
          <chart-component :tempVar="getWeatherObservations" />
        </div>

        <div v-else-if="!showCurrent && getWeatherPreviousObservations.length > 0" class="oldGraph">
          <chart-component :tempVar="getWeatherPreviousObservations" />
        </div>
        <div v-else>
          <h3>No weather data from this date available. Please select a date later than 2021-06-03.</h3>
        </div>


      </div>
    </div>
    <div class="loading" v-else>
      <span class="loadingText">Loading weather...</span>
    </div>
  </div>
  
  
</template>

<script>
import { mapState } from 'vuex';
import ChartComponent from './ChartComponent.vue';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
  components: { ChartComponent, DatePicker, },
  name: 'Weather',

  data () {
    return  {
      // weather : null,
      error: '',
      date: null,
      showCurrent: true
    }
  },
  computed: {
    ...mapState(['observation']),

    getWeather() {
      return this.$store.getters.observation},
    getWeatherObservations() {
      return this.$store.getters.observations},
    getWeatherPreviousObservations() {
      return this.$store.getters.olderObservations
    },
  },

  // async created() {
  //   try {
  //     await WeatherService.getWeather();
  //     // this.$store.dispatch("getWeather", weather)
  //   } catch (error) {
  //     this.error = error;
  //   }
  // }

  created () {
    setInterval(() => {
      this.$store.dispatch('fetchWeather')
    }, 10000)

    setInterval(() => {
      this.$store.dispatch('fetchWeatherObservations')
    }, 10000) //10000
  },
  methods: {
    getDayObservation : function () {
      // let formatDate = this.date.split('-').join()
      this.showCurrent = false
      this.$store.dispatch('previousObservations', this.date)
    },
    getToday : function () {
      this.showCurrent = true
    }
  }
}
</script>

<style scoped>
body {
    background-color: #fff;
    text-align: center;
    margin: 0;
    padding: 0;
    font-family: 'Courier New', Courier, monospace;
    height: 100vh;
}

.header {
    background-color: #A4A6Ac;
    font-size: 32px;
    font-weight: bold;
    padding: 20px;
}

.main-content {
    display: flex;
    flex-direction: row;
    margin: 30px;
    border-radius: 15px 15px 15px 15px;
    box-shadow: 0 0 13px #A4A6Ac;
}

.metric {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.2;
}
.today {
  cursor: pointer;
}

.today :hover {
  cursor: pointer !important;
}

.thisWeek {
  padding-left: 20px;
}

.right-column {
    display: flex;
    flex: 4;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    background-color: #F6F6F7;
    height: 80vh;
    padding: 30px 30px 30px 30px;
    border-radius: 0 15px 15px 0;

}
.left-column {
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: #fff;
    height: 80vh;
    padding: 30px 30px 30px 30px;
    border-radius: 15px 0 0 15px;
    justify-content: center;
}

.card {
    background-color: #fff;
    padding: 20px;
    border-radius: 15px;
    font-size: 24px;
}

.small-card {
    background-color: #fff;
    padding: 15px;
    border-radius: 15px;
    height: 90px;
    width: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.small-card:hover {
  box-shadow: 0 0 15px #A4A6Ac;
}

.small-card-value {
    font-family: 'Courier New', Courier, monospace;
    font-size: 24px;
    color: #1E1714;
    font-weight: bold;
}
.small-card-title {
    font-family: 'Courier New', Courier, monospace;
    font-size: 16px;
    color: #A4A6Ac;
}

.bottom-banner {
    background-color: #A4A6Ac;
    height: 30px;
    padding: 20px;
}

.temp {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.temp-value {
    font-family: 'Courier New', Courier, monospace;
    font-size: 100px;
    font-weight: bold;
}

.degree {
    font-family: 'Courier New', Courier, monospace;
    font-size: 50px;
    font-weight: bold;
}

.temp-label {
    font-family: 'Courier New', Courier, monospace;
    color: #A4A6Ac;
    font-weight: bold;
    font-size: 32px;
}

.loading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.loadingText {
  font-family: 'Courier New', Courier, monospace;
  color: #1E1714;
  font-size: 36px;
}

.canvas {
  display: flex;
  flex-direction: column;
  justify-content: center;
  vertical-align: center;
}

.text {
  margin-left: 10px;
}
.mx-datepicker {
  margin: 0 5px 0 5px;
  border: 1px solid white;
}

.button {
  background-color: white;
  border-radius: 15px;
  border: 1px solid white;
  height: 40px;
  box-shadow: 0 0 15px #A4A6Ac;
  margin-left: 5px;
  width: 150px;
  cursor: pointer;
}
</style>
