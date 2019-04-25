<template>
    <div>
        <h1> Score: {{ score }}</h1>
        <button v-on:click="changeScore(3000)">Incrementer</button>

    </div>
</template>
<script>

import Vuex from 'vuex';

export default {
    name: 'childB',
    computed: {
        ...Vuex.mapGetters(['score']),
    },
    methods: {
        ...Vuex.mapActions({changeScore: 'incrementScore'})
    }
}
</script>

