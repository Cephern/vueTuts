<template>
  <div class="home">
    <p ref="pRef">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me :)</button>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "HomeView",

  setup() {
    const pRef = ref(null);

    let name = "mario";
    let age = 30;

    const handleClick = () => {
      console.log(pRef, pRef.value);
      pRef.value.classList.add("test");
    };

    return { name, age, handleClick, pRef };
  },
};
</script>
