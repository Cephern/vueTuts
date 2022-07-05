<template>
  <div class="home">
    <h1>Home</h1>

    <main v-if="posts.length">
      <PostList :posts="posts" v-if="showPosts" />

      <button @click="showPosts = !showPosts">Toggle posts</button>

      <button @click="posts.pop()">Delete a post</button>
    </main>
    <div v-else-if="!error">Loading...</div>

    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts.js";

export default {
  name: "HomeView",

  components: { PostList },

  setup() {
    const { posts, error, load } = getPosts();

    setTimeout(load, 1000);

    const showPosts = ref(true);

    return { posts, showPosts, error };
  },
};
</script>
