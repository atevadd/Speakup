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
    </form>
  </div>
</template>

<script>
import Input from "@/components/Input.vue";

export default {
  name: "Signup",
  components: {
    Input,
  },
};
</script>

<style lang="scss" scoped>
.signup {
  width: 30%;
  margin: 5% auto;
  position: relative;

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
}
</style>