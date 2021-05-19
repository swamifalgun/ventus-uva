import axios from 'axios';

const url = 'api/weather';

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

        // const data = response.data;
        return response.data.observations

        // return new Promise(async (resolve, reject) =>  {
        //     try  {
        //         const res = await axios.get(url);
        //         const data = res.data;

        //         resolve(
        //            data.observations,
        //         //    store.dispatch("weather", data.observations)
        //         )
        //     }catch (e) {
        //         console.log(`Error fetching weather : ${e}`);
        //         reject(e);
        //     }
        // })
    }
}

export default WeatherService;