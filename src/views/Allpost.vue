<template>
  <Navbar />
  <main v-if="allPosts.length >= 1">
    <header>
      <h1>All posts</h1>
    </header>
    <section class="all-post-listing">
      <ArticleCard
        v-for="post in allPosts"
        :key="post.id"
        :postid="post.id"
        :title="post.title"
        :content="post.content"
        :author="post.user.first_name + ' ' + post.user.last_name"
        :date="post.created_at"
      />
    </section>
  </main>
  <main id="empty" v-else-if="allPosts.length == 0">
    <img src="@/assets/not-found.svg" alt="no content yet" />
    <h1>There is no blog post yet</h1>
    <Button buttonText="Add post" class="blog-cta" @click="openModal" />
  </main>

  <AddPost @close-modal="closeModal" v-show="showModal" />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import ArticleCard from "@/components/ArticleCard.vue";
import AddPost from "@/components/AddPost.vue";
import Button from "@/components/Button.vue";
import axios from "axios";

export default {
  name: "Allpost",
  components: {
    Navbar,
    ArticleCard,
    Button,
    AddPost,
  },
  data() {
    return {
      showModal: false,
      allPosts: [],
    };
  },
  methods: {
    // show add blog modal
    openModal() {
      this.showModal = true;
    },
    // hide add blog modal
    closeModal() {
      this.showModal = false;
    },
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
          // console.log(response.data.data.data);
          console.log(this.allPosts);
          this.allPosts = response.data.data.data.reverse();
          console.log(this.allPosts);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getAllPosts();
  },
};
</script>

<style lang="scss" scoped>
main {
  position: relative;

  &#empty {
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    // border: 1px solid red;

    img {
      display: block;
      margin: 5% auto 1%;
      width: auto;
      height: 250px;
      // border: 1px solid red;

      @include mobile {
        height: 200px;
      }
      @include tablet {
        height: 250px;
      }
      @include laptop {
        height: 250px;
      }
    }

    h1 {
      font-size: 1.4rem;
      color: #4f4f4f;
      margin-bottom: 30px;
    }
  }

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
