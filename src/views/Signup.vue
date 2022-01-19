<template>
  <div class="signup">
    <h2 class="header">
      Signup to
      <router-link class="logo" :to="{ name: 'home' }">
        Spe
        <span>ak</span>up
      </router-link>
    </h2>

    <form @submit.prevent="submitForm" class="signup-form">
      <div class="error" v-show="formError">{{ formError }}</div>
      <div class="error msg" v-show="msg">{{ msg }}</div>
      <BaseInput>
        <label for="fname">First name</label>
        <input
          type="text"
          v-model="userData.first_name"
          id="fname"
          autocomplete="off"
          inputmode="text"
        />
      </BaseInput>
      <BaseInput>
        <label for="lname">last name</label>
        <input
          type="text"
          v-model="userData.last_name"
          id="lname"
          autocomplete="off"
          inputmode="text"
        />
      </BaseInput>
      <BaseInput>
        <label for="email">Email</label>
        <input
          type="email"
          v-model="userData.email"
          id="email"
          autocomplete="off"
          inputmode="email"
        />
      </BaseInput>
      <BaseInput>
        <label for="phone">Phone number</label>
        <input type="tel" id="phone" v-model="userData.phone" inputmode="tel" />
      </BaseInput>
      <BaseInput>
        <label for="passsword">Password</label>
        <input
          type="password"
          v-model="userData.password"
          id="passsword"
          inputmode="text"
          autocomplete="new-password"
        />
        <span @click="togglePassword" class="toggle-password">
          <i class="bx bxs-show"></i>
        </span>
      </BaseInput>
      <BaseInput>
        <label for="cpassword">Confirm Password</label>
        <input
          type="password"
          id="cpassword"
          v-model="userData.confirm_password"
          inputmode="text"
          autocomplete="new-password"
        />
        <span @click="togglePassword" class="toggle-password">
          <i class="bx bxs-show"></i>
        </span>
      </BaseInput>
      <Button buttonText="Sign up" type="submit" width="100%" :class="{loading: sendingRequest}" />
    </form>

    <div class="login-container">
      <p>
        Already a user?
        <router-link :to="{ name: 'login' }">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue";
import Button from "@/components/Button.vue";
import axios from "axios";

export default {
  name: "Signup",
  components: {
    BaseInput,
    Button
  },
  props:{
    msg: String,
  },
  data() {
    return {
      userData: {
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        password: "",
        confirm_password: ""
      },
      sendingRequest: false,
      formError: null
    };
  },
  methods: {
    // This methods submits the signup form
    submitForm() {
      // API POST request configuration
      let config = {
        method: "POST",
        url: "https://tofumi-universal-api.herokuapp.com/api/v1/register",
        headers: {
          "Content-Type": "application/json"
        },
        data: this.userData
      };

      // console.log(this.userData)

      this.sendingRequest = true;

      // Submitting the user data to the API
      axios(config)
        .then(response => {
          // console.log(response);

          this.formError = null;

          if (response.status === 200 || response.data.status === "success") {
            this.$router.push({
              name: "login",
              params: {
                msg: "Your account has been created"
              }
            });
          }
        })
        .catch(error => {
          if (error.response.data.message != null) {
            this.formError = error.response.data.errors.email[0];
          }
          console.log(error.response);

          this.sendingRequest = false;
        });
    },
    // this function toggle the password visibility
    //  on the password input field
    togglePassword(e) {
      let passwordField = e.target.parentElement.previousElementSibling;
      let icon = e.target;
      if (passwordField.type === "password") {
        passwordField.type = "text";
        icon.className = "bx bxs-hide";
      } else {
        passwordField.type = "password";
        icon.className = "bx bxs-show";
      }
    }
  },
  mounted(){
    if(this.msg != null){
      setTimeout(() =>{
        document.querySelector(".msg").remove();
      }, 4000)
    }else if(this.formError !== null){
      setTimeout(() =>{
        this.formError = null
      }, 4000)
    }
  }
};
</script>

<style lang="scss" scoped>
.signup {
  width: 30%;
  margin: 2% auto;
  position: relative;

  @include mobile {
    width: 90%;
  }
  @include tablet {
    width: 70%;
  }
  @include laptop {
    width: 40%;
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

    .error {
      padding: 10px 0;
      text-align: center;
      background-color: #ff3838e3;
      border-radius: 5px;
      color: $white;
      margin-bottom: 10px;

      @include mobile {
        font-size: 0.75rem;
      }
      @include tablet {
        font-size: 0.8rem;
      }
      @include laptop {
        font-size: 0.86rem;
      }
    }

    label {
      display: block;
      font-size: 0.83rem;
      color: #5a5a5a;
      margin-bottom: 3px;
      text-transform: capitalize;
    }

    input {
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
    .toggle-password {
      position: absolute;
      top: 50%;
      //   transform: translateY(%);
      right: 10px;
      font-size: 1.2rem;
      transition: 0.15s ease;

      i {
        color: #5a5a5a;
        cursor: pointer;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.25s ease;
      // background: transparent;
      overflow: hidden;
      z-index: 2;

      &:focus {
        outline: 1px solid #141414;
        outline-offset: 5px;
      }

      &.loading {
        position: relative;
        z-index: 2;
        cursor: wait;
        color: rgb(167, 167, 167);

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
              lighten($color: $brand-color, $amount: 5%) 10px,
              lighten($color: $brand-color, $amount: 5%) 20px
            );
          z-index: -1;
          animation: loading 1s infinite linear;
        }
      }

      i {
        font-size: 1.5rem;
      }
    }
  }

  .login-container {
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

@keyframes loading {
  0% {
    transform: translateX(-25px);
  }
  100% {
    transform: translateX(20px);
  }
}
</style>