import Vuex from 'vuex';
import Vue from 'vue';

import WeatherService from '../WeatherService';

Vue.use(Vuex);


const state = {
    observation : null,
    dayObservations : []
}

let mutations = {
    setWeather(state, data) {
        state.observation = data
    },
    setWeatherObservations(state, data) {
        state.dayObservations = data
    }
}

let getters = {
    observation() {
        return state.observation;
    },
    observations() {
        return state.dayObservations;
    }
}

const actions = {
    fetchWeather(context, data) {
        const promise = WeatherService.getWeather();

        promise.then(weather => {
            data = weather
            context.commit('setWeather', data)
        });
    },
    fetchWeatherObservations(context, data) {
        const promise = WeatherService.getDailyObservations();
        promise.then(weather => {
            data = weather
            context.commit('setWeatherObservations', data)
        });
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    modules : {}
})
