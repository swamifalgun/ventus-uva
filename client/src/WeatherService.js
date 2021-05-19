import axios from 'axios';

const url = 'api/weather';

/* eslint-disable no-async-promise-executor */
class WeatherService {
    static getWeather() {
        return new Promise(async (resolve, reject) =>  {
            try  {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                   data.observations
                )
            }catch (e) {
                console.log(`Error fetching weather : ${e}`);
                reject(e);
            }
        })
    }
}

export default WeatherService;