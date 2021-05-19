import Vuex from 'vuex';
import Vue from 'vue';

import WeatherService from '../WeatherService';

Vue.use(Vuex);


const state = {
    observation : null
}

let mutations = {
    setWeather(state, data) {
        state.observation = data
    }
}

let getters = {
    observation() {
        return state.observation;
    }
}

const actions = {
    fetchWeather(context, data) {
        const promise = WeatherService.getWeather();

        promise.then(weather => {
            data = weather
            context.commit('setWeather', data)
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
