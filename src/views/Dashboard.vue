<template>
  <main class="dashboard">
    <Navbar @show-modal="openModal" />

    <div class="dashboard-area">
      <div class="all-posts">
        <div class="all-posts-header">
          <h1 class="single" v-if="header">All post</h1>
          <h1 class="plural" v-else>All posts</h1>
        </div>

        <div class="all-posts-content">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>
      <div class="comments">
        <div class="comments-header">
          <h2>Recent comments</h2>
        </div>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>

    <!-- <div class="post-modal" > -->
    <AddPost @close-modal="closeModal" v-if="showModal" />
    <!-- </div> -->
  </main>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Comment from "@/components/Comment.vue";
import ArticleCard from "@/components/ArticleCard.vue";
import AddPost from "@/components/AddPost.vue";

export default {
  name: "Dashboard",
  components: {
    Navbar,
    Comment,
    ArticleCard,
    AddPost,
  },
  data() {
    return {
      header: true,
      showModal: false,
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.dashboard-area {
  position: relative;
  width: 100%;
  padding: 0 40px;
  // border: 1px solid red;
  margin: 40px auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
  align-items: flex-start;

  @include mobile{
      width: 95%;
      display: block;
      padding: 0;
  } 

  @include tablet{
      width: 95%;
      display: block;
      padding: 0;
  }
  @include laptop{
      width: 95%;
      display: block;
      padding: 0;
  }

  .all-posts {
    // border: 1px solid ;
    position: relative;
    display: block;

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

  .comments {
    width: 100%;

    @include mobile{
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