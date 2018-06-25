<template>
  <b-container fluid>
    <router-link to="/">Go to Home</router-link>
    <router-link to="/About">Go to About</router-link>
    <b-row id="counter">
        <b-col><p>{{ myMessage }}</p></b-col>
        <b-col><b-button @click="getJokes">+</b-button></b-col>
        <b-col><p>{{ count }}</p></b-col>
    </b-row>
    <router-view></router-view>
  </b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      myMessage: 'Hello World!',
      jokes: [],
      loading: false,
    };
  },

  computed: mapState({
    // arrow functions can make the code very succinct!
    count: state => state.count,

    // passing the string value 'count' is same as `state => state.count`
    countAlias: 'count',

    // to access local state with `this`, a normal function must be used
    countPlusLocalState(state) {
      return state.count + this.localCount;
    },
  }),

  methods: {
    ...mapActions([
      'increment', // map `this.increment()` to `this.$store.dispatch('increment')`
      'getJokes',

      // `mapActions` also supports payloads:
      // map `this.incrementBy(amount)` to `this.$store.dispatch('incrementBy', amount)`
      'incrementBy',
    ]),
    ...mapActions({
      add: 'increment', // map `this.add()` to `this.$store.dispatch('increment')`
    }),
  },
};

</script>
<style lang="scss" scoped>
   @import './layouts/App.scss'
</style>
