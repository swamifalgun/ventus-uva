<template>
  <div>
    <div class="header">
      Ventus - Uva Weather Station
    </div> 

    <div class="main-content">

      <div class="left-column">
        <div class="temp-label">
          Temperature
        </div>
        <div class="temp">
          {{weather.metric.temp}} °C
        </div>
      </div>

      
      <div class="right-column">
        <div class="small-card">
          <div class="small-card-title">
            Country
          </div>
          <div class="small-card-value">
            {{weather.country}}
          </div>
        </div>

        <div class="small-card">
          <div class="small-card-title">
            Humidity (%)
          </div>
          <div class="small-card-value">
            {{weather.humidity}}
          </div>
        </div>

        <div class="small-card">
          <div class="small-card-title">
            Heat Index
          </div>
          <div class="small-card-value">
            {{weather.metric.heatIndex}}
          </div>
        </div>    

        <div class="small-card">
          <div class="small-card-title">
            Dew Point (°C)
          </div>
          <div class="small-card-value">
            {{weather.metric.dewpt}}
          </div>
        </div>  

        <div class="small-card">
          <div class="small-card-title">
            Wind Chill
          </div>
          <div class="small-card-value">
            {{weather.metric.windChill}}
          </div>
        </div>  

        <div class="small-card">
          <div class="small-card-title">
            Wind Speed (km/h)
          </div>
          <div class="small-card-value">
            {{weather.metric.windSpeed}}
          </div>
        </div>  

      </div>
    </div>
  </div>
  
  
</template>

<script>

import WeatherService from '../WeatherService';


export default {
  name: 'Weather',

  data () {
    return  {
      weather : null,
      error: ''
    }
  },
  async created() {
    try {
      this.weather = await WeatherService.getWeather();
    } catch (error) {
      this.error = error;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
    background-color: #fff;
    text-align: center;
    margin: 0;
    padding: 0;
    font-family: 'Courier New', Courier, monospace;
    height: 100vh;
}

header {
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
    font-family: 'Courier New', Courier, monospace;
    font-size: 60px;
    font-weight: bold;
}
.temp-label {
    font-family: 'Courier New', Courier, monospace;
    color: #A4A6Ac;
    font-weight: bold;
    font-size: 32px;
}
</style>
