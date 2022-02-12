<template>
  <header>
    <div class="brand-logo">
      <h2 class="header">
        <router-link class="logo" :to="{ name: 'home' }"
          >Spe<span>ak</span>up</router-link
        >
      </h2>
    </div>
    <BaseInput>
      <input
        type="search"
        id="search"
        placeholder="Search blog..."
        autocomplete="off"
      />
    </BaseInput>
    <nav class="nav">
      <ul>
        <li><router-link :to="{ name: 'dashboard' }">Home</router-link></li>
        <li><router-link :to="{ name: 'post' }">Posts</router-link></li>
        <li><router-link :to="{ name: 'profile' }">Profile</router-link></li>
      </ul>
    </nav>

    <!-- <div class="user-pill">
      <Button buttonText="Add post" @click="showModal" class="btn"></Button>
    </div> -->

    <span class="menu-icon" @click="showMenu">
      <i class="bx bx-menu"></i>
    </span>
  </header>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue";

export default {
  name: "Navbar",
  components: {
    BaseInput,
  },
  methods: {
    showModal() {
      this.$emit("show-modal");
    },
    showMenu() {
      document.querySelector(".nav").classList.toggle("show");
    },
  },
  mounted() {
    document.querySelector(".nav").classList.add("height");
  },
};
</script>

<style lang="scss" scoped>
header {
  position: relative;
  width: 100%;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 3px solid $brand-color;
  background: #b5b5b5;
  flex-wrap: wrap;
  flex: 1 1 0;
  overflow: hidden;

  @include mobile {
    justify-content: center;
    padding: 10px 15px;
  }

  .brand-logo {
    position: relative;

    h2 {
      position: relative;

      a {
        color: #333;

        span {
          color: $brand-color;
        }
      }
    }
  }

  .nav {
    position: relative;
    transition: height 0.3s ease;

    &.show {
      display: block;
    }

    // &.height {
    //   height: auto;

    //   @include mobile {
    //     // height: 0;
    //     display: none;
    //   }
    //   @include tablet {
    //     // height: 0;
    //     display: none;
    //   }
    //   @include laptop {
    //     height: auto !important;
    //   }
    // }

    @include mobile {
      order: 4;
      width: 100%;
      display: none;
    }
    @include tablet {
      order: 4;
      width: 100%;
      display: none;
    }

    ul {
      display: flex;
      list-style-type: none;
      align-items: center;

      @include mobile {
        display: block;
        width: 100%;
      }
      @include tablet {
        display: block;
        width: 100%;
      }

      li {
        margin: 0 25px;

        @include mobile {
          margin: 20px 0;
        }
        @include tablet {
          margin: 20px 0;
        }

        a {
          color: rgb(119, 119, 119);
          font-size: 0.88rem;

          @include mobile {
            display: block;
          }
          @include tablet {
            display: block;
          }

          &.router-link-active {
            color: #333;
            font-weight: 700;
          }

          &:hover {
            border-bottom: 2px solid $brand-color;

            @include mobile {
              border: none;
              color: #333;
              font-weight: 700;
            }
            @include tablet {
              border: none;
              color: #333;
              font-weight: 700;
            }
          }
        }
      }
    }
  }

  .input {
    width: max-content;
    align-self: center;
    position: relative;
    // border: 1px solid red;
    margin: 0;

    #search {
      height: 35px;
      width: 350px;
      border: none;
      border-radius: 5px;
      padding: 0 7px;
      outline: none;
      // background: transparent;

      &:focus {
        border: 1px solid $brand-color;
      }
    }
  }

  .user-pill {
    display: flex;
    align-items: center;

    @include mobile {
      margin-left: auto;
    }
    @include tablet {
      margin-left: auto;
    }

    img {
      display: inline-block;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      margin-right: 5px;
      margin-left: 20px;
    }
  }

  span.menu-icon {
    order: 3;
    font-size: 2.3rem;
    cursor: pointer;
    display: none;

    @include mobile {
      display: block;
    }
    @include tablet {
      display: block;
      margin-left: 10px;
    }

    i {
      color: #333;
    }
  }
}
</style>
