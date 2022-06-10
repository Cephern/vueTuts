<template>
  <h1>{{ title }}</h1>
  <teleport to=".modals">
    <Modal @close="toggleModal" v-if="showModal" theme="sale">
      <template v-slot:links>
        <a href="#">Sign up Now</a>
        <a href="#">More Info</a>
      </template>

      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
    </Modal>
  </teleport>

  <teleport to=".modals">
    <Modal @close="toggleModalTwo" v-if="showModalTwo" theme="sale">
      <h1>Modal Two</h1>
      <p>Yep, modal TWO!</p>
    </Modal>
  </teleport>

  <p>Welcome...</p>
  <button @click.alt="toggleModal">Open Modal (alt)</button>
  <button @click="toggleModalTwo">Open Another Modal</button>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",

  components: {
    Modal,
  },

  data() {
    return {
      title: "My First Vue App",
      header: "Sign up fot the Giveaway!",
      text: "Grab yout ninja Swag for half price!",
      showModal: false,
      showModalTwo: false,
    };
  },

  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },

    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    },
  },
};
</script>

<style>
#app,
.modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
