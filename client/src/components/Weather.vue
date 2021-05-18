<template>
  <div>
    <h1>{{weather}}</h1>
    <p v-if="error">{{error}}</p>
  </div>
  
  
</template>

<script>

import WeatherService from '../WeatherService';


export default {
  name: 'Weather',

  data () {
    return  {
      weather : {},
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
