import axios from 'axios';

const url = 'api/weather';
const dailyObservationUrl = 'api/weather/day-observations';

/* eslint-disable no-async-promise-executor */
class WeatherService {

    static async getWeather() {
        let response;
        try  {
            response = await axios.get(url);
        }catch (e) {
            console.log(`Error fetching weather : ${e}`);
            // reject(e);
        }
        return response.data.observations
    }

    static async getDailyObservations(){
        let response;
        try  {
            response = await axios.get(dailyObservationUrl);
        }catch (e) {
            console.log(`Error fetching weather : ${e}`);
            // reject(e);
        }
        return response.data.observations
    }

    static async getPreviousObservations(date) {


        console.log('date from weather service ', date)
        let response;
        try  {
            response = await axios.get(`api/weather/previous-observations`, {params: {
                date
            }});
        }catch (e) {
            console.log(`Error fetching weather : ${e}`);
            // reject(e);
        }
        return response.data.observations
    }
}

export default WeatherService;