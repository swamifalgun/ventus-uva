import Vuex from 'vuex';
import Vue from 'vue';

import WeatherService from '../WeatherService';

Vue.use(Vuex);


const state = {
    observation : null,
    dayObservations : [],
    previousObservations : []
}

let mutations = {
    setWeather(state, data) {
        state.observation = data
    },
    setWeatherObservations(state, data) {
        state.dayObservations = data
    },
    setPreviousObservations(state,data) {
        state.previousObservations = data
    }
}

let getters = {
    observation() {
        return state.observation;
    },
    observations() {
        return state.dayObservations;
    },
    olderObservations() {
        return state.previousObservations
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
    },
    previousObservations(context, data) {
        const date = data.split('-').join('');
        const promise = WeatherService.getPreviousObservations(date);
        promise.then(weather => {
            data = weather
            context.commit('setPreviousObservations', data)
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
