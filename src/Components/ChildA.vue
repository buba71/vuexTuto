<template>
    <div>
        <h1> Score: {{ score }} </h1>
        <button v-on:click="changeScore(3)">Incrementer</button>

    </div>
</template>

<script>
import Vuex from 'vuex';

export default {
    name: 'childA',
    computed: {        
        ...Vuex.mapGetters(['score']),        
    },
    methods: {
        ...Vuex.mapMutations({ changeScore: 'increment'}),
    }
    
}
</script>