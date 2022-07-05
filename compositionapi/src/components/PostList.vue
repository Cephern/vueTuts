<template>
  <div class="post-list">
    <SinglePost v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import SinglePost from "./SinglePost.vue";

export default {
  components: { SinglePost },
  props: ["posts"],

  setup(props) {
    onMounted(() => console.log("component mounted"));
  },
};
</script>

<style>
</style>