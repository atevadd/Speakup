<template>
  <main class="dashboard">
    <Navbar @show-modal="openModal" />

    <div class="dashboard-area">
      <div class="all-posts" v-if="allPosts">
        <div class="all-posts-header">
          <h1 class="single">Your posts</h1>
          <Button buttonText="Add post" class="blog-cta" @click="openModal" />
        </div>
        <!-- All post listing -->
        <div class="all-posts-content">
          <ArticleCard
            v-for="post in allPosts"
            :key="post.id"
            :postid="post.id"
            :title="post.title"
            :content="post.content"
            :author="post.user.first_name + ' ' + post.user.last_name"
            :date="post.created_at"
          />
        </div>
      </div>
      <!-- when the user has no post yet -->
      <div class="empty-state" v-else>
        <img src="@/assets/not-found.svg" alt="" />
        <p>You have no blog post yet</p>
        <Button buttonText="Add post" class="blog-cta" @click="openModal" />
      </div>
    </div>

    <!-- <div class="post-modal" > -->
    <AddPost @close-modal="closeModal" v-show="showModal" />
    <!-- </div> -->
  </main>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import ArticleCard from "@/components/ArticleCard.vue";
import AddPost from "@/components/AddPost.vue";
import Button from "@/components/Button.vue";
import axios from "axios";

export default {
  name: "Dashboard",
  components: {
    Navbar,
    ArticleCard,
    AddPost,
    Button,
  },
  data() {
    return {
      showModal: false,
      allPosts: true,
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    loadUserPosts() {
      const userToken = localStorage.getItem("access_token");

      const config = {
        method: "GET",
        url: "https://tofumi-universal-api.herokuapp.com/api/v1/blog-user-loggedin",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      };

      axios(config)
        .then((response) => {
          console.log(response.data.data.data);
          // reverse the list then store it in the variable
          this.allPosts = response.data.data.data.reverse();
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
  mounted() {
    this.loadUserPosts();
  },
};
</script>

<style lang="scss" scoped>
.dashboard-area {
  position: relative;
  width: 100%;
  padding: 0 40px;
  margin: 40px auto;
  display: flex;
  align-items: flex-start;
  gap: 30px;
  align-items: flex-start;

  @include mobile {
    width: 95%;
    display: block;
    padding: 0;
  }

  @include tablet {
    width: 95%;
    display: block;
    padding: 0;
  }
  @include laptop {
    width: 95%;
    display: block;
    padding: 0;
  }

  .all-posts {
    position: relative;
    display: block;
    width: 100%;

    &-header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;

      h1 {
        color: #4f4f4f;
        font-size: 1.15rem;
        font-weight: 600;
      }
    }

    &-content {
      width: 100%;
    }
  }

  .empty-state {
    width: 100%;
    margin: 0 auto;
    // border: 2px solid red;

    img {
      width: 100%;
      height: 200px;
    }
    p {
      text-align: center;
      font-weight: 500;
      margin-bottom: 20px;
      margin-top: 5px;
    }
    .blog-cta {
      margin: 0 auto;
      display: block;
    }
  }

  .comments {
    width: 100%;

    @include mobile {
      margin-top: 60px;
    }

    &-header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;

      h2 {
        color: #4f4f4f;
        font-size: 1.15rem;
        font-weight: 600;
      }
    }
  }
}
</style>
