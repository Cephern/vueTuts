<template>
  <h1>Jobs</h1>
  <div v-for="{ title, id } in jobs" :key="id" class="job">
    <router-link :to="{ name: 'JobDetails', params: { id } }">
      <h2>{{ title }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { title: "Ninja Ux Designer", id: 1, details: "lorem" },
        { title: "Ninja Web Developer", id: 2, details: "lorem" },
        { title: "Ninja Vue Developer", id: 3, details: "lorem" },
      ],
    };
  },
};
</script>

<style>
.job h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.job h2:hover {
  background: #ddd;
}
.job a {
  text-decoration: none;
}
</style>