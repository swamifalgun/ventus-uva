<template>
  <div class="canvas">
    <div class="header">
      Ventus - Uva Weather Station
    </div> 

    <div v-if="getWeather" class="main-content">

      <div class="left-column">
        <div class="temp-label">
          Temperature
        </div>
        <div class="temp">
          <span class="temp-value">{{getWeather.metric.temp}}</span>
          <span class="degree">°C</span>
        </div>
        
      </div>

      <div class="right-column">
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
    </div>
    <div class="loading" v-else>
      <span class="loadingText">Loading weather...</span>
    </div>
  </div>
  
  
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Weather',

  data () {
    return  {
      // weather : null,
      error: ''
    }
  },
  computed: {
    ...mapState(['observation']),

    getWeather() {
      return this.$store.getters.observation}
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

.right-column {
    display: flex;
    flex: 4;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: #F6F6F7;
    height: 70vh;
    padding: 30px 30px 30px 30px;
    border-radius: 0 15px 15px 0;

}
.left-column {
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: #fff;
    height: 70vh;
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
</style>
