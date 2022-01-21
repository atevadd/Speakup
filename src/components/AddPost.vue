<template>
  <div class="add-post">
    <div class="add-post-container">
      <span @click="closeModal"><i class="bx bx-x"></i></span>

      <form class="add-post-form" @submit.prevent="addBlogPost">
        <header>
          <h1>Add blog post</h1>
        </header>
        <p class="form-error" v-show="formError">{{ formError }}</p>
        <BaseInput id="title" label="title" inputtype="text">
          <label for="title">Title</label>
          <input type="text" id="title" v-model="addBlogDetails.title" />
        </BaseInput>
        <BaseSelect>
          <label for="blog-cat">Blog Category</label>
          <select
            id="blog-cat"
            class="blog-cat-dropdown"
            v-model="addBlogDetails.blog_category_id"
          >
            <option disabled value="">Select a category</option>
            <option
              :value="cat.id"
              v-for="cat in blogCategoryList"
              :key="cat.id"
            >
              {{ cat.name }}
            </option>
          </select>
        </BaseSelect>
        <Textarea>
          <label for="blog-content">Blog Content</label>
          <textarea
            id="blog-content"
            v-model="addBlogDetails.content"
          ></textarea>
        </Textarea>

        <Button
          :class="[sendingStatus ? 'loading' : '', 'post-btn']"
          width="100%"
          buttonText="Add post"
        />
      </form>
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue";
import BaseSelect from "@/components/BaseSelect.vue";
import Textarea from "@/components/Textarea.vue";
import Button from "@/components/Button.vue";
import axios from "axios";

export default {
  name: "AddPost",
  components: {
    BaseInput,
    Textarea,
    Button,
    BaseSelect,
  },
  data() {
    return {
      blogCategoryList: null,
      addBlogDetails: {
        title: "",
        blog_category_id: "",
        content: "",
      },
      sendingStatus: false,
      formError: null,
    };
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
    loadBlogCategories() {
      const userToken = localStorage.getItem("access_token");

      const config = {
        method: "GET",
        url: "https://tofumi-universal-api.herokuapp.com/api/v1/blog-categories",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      };

      axios(config)
        .then((response) => {
          this.blogCategoryList = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // adding a blog post
    addBlogPost() {
      console.log(this.addBlogDetails);
      this.sendingStatus = true;
      const userToken = localStorage.getItem("access_token");

      const config = {
        method: "POST",
        url: "https://tofumi-universal-api.herokuapp.com/api/v1/blog",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        data: this.addBlogDetails,
      };

      axios(config)
        .then((response) => {
          console.log(response);
          this.sendingStatus = false;

          // closing the modal after a successful post.
          this.closeModal();
        })
        .catch((error) => {
          this.formError = error.response.data.message;
          this.sendingStatus = false;

          // removing the formError after 3s
          setTimeout(() => {
            this.formError = null;
          }, 3000);
        });
    },
  },
  mounted() {
    this.loadBlogCategories();
  },
};
</script>

<style lang="scss" scoped>
.add-post {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
  z-index: 10;

  &-container {
    position: relative;
    width: 35%;
    padding: 20px;
    border-radius: 10px;
    background-color: $white;

    @include mobile {
      width: 90%;
    }
    @include tablet {
      width: 70%;
    }
    @include laptop {
      width: 50%;
    }

    span {
      background: $white;
      width: 30px;
      height: 30px;
      position: absolute;
      right: 0;
      top: -40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: 0.15s ease;
      cursor: pointer;

      &:hover {
        background-color: darken($color: $white, $amount: 15%);
      }

      i {
        font-size: 1.4rem;
      }
    }
  }

  header {
    margin-bottom: 20px;

    h1 {
      font-weight: 700;
      color: #333;
      font-size: 1.5rem;
    }
  }

  .form-error {
    display: block;
    text-align: center;
    color: $white;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 20px;
    font-size: 0.85rem;
    font-weight: 500;
    background-color: #cc3636;

    @include mobile {
      font-size: 0.75rem;
    }
    @include tablet {
      font-size: 0.82rem;
    }
    @include laptop {
      font-size: 0.85rem;
    }
  }

  label {
    display: block;
    font-size: 0.83rem;
    font-weight: 600;
    color: #5a5a5a;
    margin-bottom: 3px;
    text-transform: capitalize;

    &::after {
      content: "*";
      color: red;
    }
  }

  input,
  select {
    display: block;
    position: relative;
    height: 35px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #aaa;
    padding: 0 10px;
    outline: none;

    &:focus {
      border: 1px solid $brand-color;
    }
  }
  textarea {
    display: block;
    position: relative;
    height: 200px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #aaa;
    padding: 10px;
    outline: none;
    resize: none;

    &:focus {
      border: 1px solid $brand-color;
    }
  }

  button {
    overflow: hidden;

    &.loading {
      position: relative;
      z-index: 2;
      cursor: wait;
      color: rgb(167, 167, 167);
      pointer-events: none;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 300%;
        height: 100%;
        background: $brand-color
          repeating-linear-gradient(
            60deg,
            transparent,
            transparent 10px,
            lighten($color: $brand-color, $amount: 10%) 10px,
            lighten($color: $brand-color, $amount: 10%) 20px
          );
        z-index: -1;
        animation: loading 1s infinite linear;
      }
    }
  }
}

@keyframes loading {
  0% {
    transform: translateX(-25px);
  }
  100% {
    transform: translateX(20px);
  }
}
</style>
