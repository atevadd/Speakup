<template>
  <div class="login">
    <div class="brand-logo">
      <h2>
        Sign in to
        <router-link class="logo" :to="{ name: 'Home' }"
          >Spe<span>ak</span>up</router-link
        >
      </h2>
    </div>

    <form class="login-form">
      <Input id="email" inputtype="email" label="Email" />
      <Input id="password" inputtype="password" label="password" />
      <Button type="submit" buttonText="Sign in" />
    </form>
    <div class="new-account">
      <p>
        New to Speakup?
        <router-link :to="{ name: 'signup' }">Create an account</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";

export default {
  name: "Signup",
  components: {
    Input,
    Button,
  },
};
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  width: 30%;
  margin: 5% auto;

  @include mobile{
    width: 90%;
    margin: 8% auto;
  }
  @include tablet{
    width: 50%;
  }

  .brand-logo {
    position: relative;
    margin-bottom: 20px;

    h2 {
      display: block;
      font-size: 1.5rem;
      text-decoration: none;
      font-weight: 500;
      color: #333;
      text-align: center;

      a {
        font-size: 1.5rem;
        text-decoration: none;
        color: #333;
        text-align: center;
      }

      span {
        color: #f52653;
      }
    }
  }

  &-form {
    width: 100%;
    border: 1px solid #aaa;
    padding: 25px;
    border-radius: 5px;
  }

  .new-account {
    width: 100%;
    padding: 15px;
    text-align: center;
    border: 1px solid #aaa;
    border-radius: 5px;
    margin-top: 20px;

    p {
      font-size: 0.8rem;
    }

    a {
      color: #f52653;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>