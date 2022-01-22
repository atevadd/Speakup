<template>
  <Navbar />
  <main>
    <h2>{{ id }}</h2>
    <h2>{{ pagetitle }}</h2>
  </main>
</template>

<script>
import axios from "axios";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Post",
  props: ["id", "pagetitle"],
  components: {
    Navbar,
  },
  methods: {
    getSinglePost() {
      const userToken = localStorage.getItem("access_token");

      // API config
      const config = {
        methods: "GET",
        url: `https://tofumi-universal-api.herokuapp.com/api/v1/blog/${this.id}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      };

      axios(config)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
  mounted() {
    this.getSinglePost();
  },
};
</script>

<style lang="scss" scoped></style>
