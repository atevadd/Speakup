<template>
  <div class="signup">
    <h2 class="header">
      Signup to
      <router-link class="logo" :to="{ name: 'Home' }"
        >Spe<span>ak</span>up</router-link
      >
    </h2>

    <form action="" class="signup-form">
      <Input id="fname" label="first name" inputtype="text" />
      <Input id="lname" label="last name" inputtype="text" />
      <Input id="email" label="email" inputtype="email" />
      <Input id="tel" label="Phone number" inputtype="tel" />
      <Input id="pass" label="password" inputtype="password" />
      <Button buttonText="Sign up" type="submit" />
    </form>

    <div class="login-container">
      <p>Already a user? <router-link :to="{name: 'login'}">Login</router-link></p>
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
.signup {
  width: 30%;
  margin: 5% auto;
  position: relative;

  @include mobile{
    width: 90%;
  }
  @include tablet{
    width: 60%;
  }

  .header {
    display: block;
    font-size: 1.5rem;
    text-decoration: none;
    font-weight: 500;
    color: #333;
    text-align: center;
    margin-bottom: 20px;

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

  &-form {
    width: 100%;
    border: 1px solid #aaa;
    padding: 25px;
    border-radius: 5px;
  }

  .login-container{
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