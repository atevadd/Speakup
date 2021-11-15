<template>
  <header>
    <div class="brand-logo">
      <h2 class="header">
        <router-link class="logo" :to="{ name: 'home' }"
          >Spe<span>ak</span>up</router-link
        >
      </h2>
    </div>

    <nav class="nav">
      <ul>
        <li><router-link :to="{ name: 'dashboard' }">Home</router-link></li>
        <!-- <li><router-link :to="{ name: 'home' }">Feeds</router-link></li> -->
        <li><router-link :to="{ name: 'profile' }">Profile</router-link></li>
      </ul>
    </nav>

    <div class="user-pill">
      <Button buttonText="Add post" @click="showModal" class="btn"></Button>
      <!-- <img src="@/assets/logo.png" alt="" />
      <i class="bx bx-caret-down"></i> -->
    </div>

    <span class="menu-icon" @click="showMenu">
      <i class="bx bx-menu"></i>
    </span>
  </header>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  name: "Navbar",
  components: {
    Button,
  },
  methods: {
    showModal() {
      this.$emit("show-modal");
    },
    showMenu() {
      if (document.querySelector(".nav").style.height == "96px") {
        document.querySelector(".nav").style.height = "0px";
      } else {
        for (let x = 0; x <= 96; x++) {
          document.querySelector(".nav").style.height = `${x}px`;
        }
      }
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
  border-top: 5px solid $brand-color;
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

    &.height {
      height: auto;

      @include mobile {
        height: 0;
      }
      @include tablet {
        height: 0;
      }
      @include laptop{
        height: auto !important;
      }
    }

    @include mobile {
      order: 4;
      width: 100%;
    }
    @include tablet {
      order: 4;
      width: 100%;
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