<template>
  <Navbar />
  <main>
    <header>
      <h1>All posts</h1>
    </header>
    <section class="all-post-listing">
      <ArticleCard
        v-for="post in allPosts"
        :key="post.id"
        :postid="post.id"
        :title="post.title"
        :author="post.user.first_name + ' ' + post.user.last_name"
        :date="post.created_at"
      />
    </section>
  </main>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import ArticleCard from "@/components/ArticleCard.vue";
import axios from "axios";

export default {
  name: "Allpost",
  components: {
    Navbar,
    ArticleCard,
  },
  data() {
    return {
      allPosts: null,
    };
  },
  methods: {
    getAllPosts() {
      //   API CONFIG
      const config = {
        method: "GET",
        url: "https://tofumi-universal-api.herokuapp.com/api/v1/blog",
        headers: {
          "Content-Type": "application/json",
        },
      };

      axios(config)
        .then((response) => {
          console.log(response.data.data.data);
          this.allPosts = response.data.data.data.reverse();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getAllPosts();
  },
};
</script>

<style lang="scss" scoped>
main {
  position: relative;

  header {
    margin: 30px auto 15px;
    width: 95%;

    h1 {
      color: #4f4f4f;
      font-size: 1.15rem;
      font-weight: 600;
    }
  }

  .all-post-listing {
    width: 95%;
    margin: 0 auto;
  }
}
</style>
