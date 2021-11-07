<template>
  <main class="landing">
    <header>
      <div class="brand-logo">
        <router-link class="logo" :to="{ name: 'Home' }">Spe<span>ak</span>up</router-link>
      </div>
      <nav>
        <router-link :to="{ name: 'login' }" class="login-cta"
          >login</router-link
        >
        <router-link :to="{ name: 'About' }" class="signup-cta"
          >Signup</router-link
        >
      </nav>
    </header>

    <section class="hero">
      <h1 class="hero-headline">
        Feel <span>free</span> to say what <span>you</span> want to say when you
        want to📝
      </h1>
      <!-- <p class="hero-subtext">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium,
        reiciendis minima dignissimos quisquam expedita tempora dolorem
        voluptatum hic doloribus harum?
      </p> -->
      <router-link class="hero-cta" :to="{ name: 'About' }"
        >Get Started</router-link
      >
    </section>
  </main>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.landing {
  width: 100%;
  height: 100vh;
  // border: 1px solid red;
  background: $bg-color-gradient;
  overflow: hidden;

  header {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 0;

    .brand-logo {
      position: relative;

      .logo {
        font-size: 1.5rem;
        text-decoration: none;
        font-weight: 600;
        color: #fff;

        span{
          color: #f52653;
        }
      }
    }
    nav {
      display: flex;
      align-items: center;

      a {
        display: inline-flex;
        margin-left: 20px;
        text-decoration: none;
        text-transform: capitalize;
        padding: 12px 25px;

        @include mobile {
          padding: 10px 15px;
        }

        &.signup-cta {
          border: 2px solid #f52653;
          color: #fff;
          border-radius: 5px;
          transition: 0.2s ease;

          &:hover {
            background: #f52653;
          }
        }
        &.login-cta {
          color: #ff0037;

          @include mobile {
            display: none;
      }
        }
      }
    }
  }

  .hero {
    width: 60%;

    position: absolute;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    left: 50%;
    text-align: center;

    @include mobile {
      width: 90%;
    }

    &-headline {
      font-size: 2.3rem;
      color: $white;
      text-transform: uppercase;

      @include mobile {
        font-size: 1.5rem;
      }

      span {
        color: #f52653;
      }
    }
    &-subtext {
      font-size: 0.9rem;
      margin-top: 10px;
      padding: 0 50px;
      color: #acacac;

      @include mobile {
        padding: 0;
        font-size: 0.78rem;
      }
    }
    &-cta {
      display: inline-block;
      padding: 15px 30px;
      border-radius: 5px;
      background: #f52653;
      color: $white;
      margin-top: 25px;
      text-decoration: none;
      transition: 0.2s ease;

      @include mobile {
        padding: 12px 25px;
        font-size: .88rem;
      }

      &:hover {
        background: darken($color: #f52653, $amount: 10%);
      }
    }
  }
}
</style>
