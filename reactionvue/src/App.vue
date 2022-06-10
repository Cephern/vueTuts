<template>
  <h1>Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <GameBlock v-if="isPlaying" :delay="delay" @endGame="endGame" />
  <ResultsComp v-if="score" :score="score" />
</template>

<script>
import GameBlock from "./components/GameBlock.vue";
import ResultsComp from "./components/ResultsComp.vue";

export default {
  name: "App",

  components: {
    GameBlock,
    ResultsComp,
  },

  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
    };
  },

  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.score = null;
    },

    endGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
</style>
