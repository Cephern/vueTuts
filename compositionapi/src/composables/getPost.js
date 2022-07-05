import { ref } from "vue";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch(`http://localhost:3000/posts/${id}`);

      if (!data.ok) {
        throw Error("oops, data is not found");
      }

      data = await data.json();
      post.value = data;
    } catch (err) {
      error.value = err.message;
    }
  };

  return { post, error, load };
};

export default getPost;