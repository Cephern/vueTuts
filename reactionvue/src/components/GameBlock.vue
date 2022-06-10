<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
    <p>click me</p>
    <p v-if="reactionTime">{{ reactionTime }}</p>
  </div>
</template>

<script>
export default {
  props: ["delay"],

  data() {
    return {
      showBlock: false,
      reactionTime: null,
      startTime: 0,
      endTime: 0,
      gameEnded: false,
    };
  },

  mounted() {
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },

  methods: {
    startTimer() {
      this.startTime = Date.now();
    },

    stopTimer() {
      if (this.gameEnded) {
        return;
      }
      this.gameEnded = true;
      this.endTime = Date.now();
      this.reactionTime = this.endTime - this.startTime;

      this.$emit("endGame", this.reactionTime);
    },
  },
};
</script>

<style>
.block {
  width: 400px;
  border-radius: 20px;
  background: #0faf87;
  color: #fff;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>