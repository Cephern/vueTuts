<template>
  <p v-if="score">Reaction time: {{ score }} ms</p>
</template>

<script>
export default {
  props: ["score"],
};
</script>

<style>
</style>