import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let store =  new Vuex.Store({
    state: {
        score: 5
    },
    getters: {
        score: function (state) {
            return state.score;
        }
    },
    mutations: {
        increment: function(state, step) {
            state.score += step;
        }
    },
    actions: {
        incrementScore: function({ commit }, delay) {
            setTimeout(function() {
                commit('increment', 3)
            }, delay)
        }

    }
});

global.store = store;
export default store;





 