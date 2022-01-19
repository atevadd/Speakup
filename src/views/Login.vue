<template>
  <div class="login">
    <div class="brand-logo">
      <h2>
        Sign in to
        <router-link class="logo" :to="{ name: 'home' }">
          Spe
          <span>ak</span>up
        </router-link>
      </h2>
    </div>

    <form class="login-form" @submit.prevent="loginUser">
      <p class="success" v-show="msg">{{ msg }}</p>
      <p class="error" v-show="loginMessage">{{ loginMessage }}</p>
      <BaseInput>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="loginData.email" />
      </BaseInput>
      <BaseInput>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="loginData.password" />
        <span @click="togglePassword" class="toggle-password">
          <i class="bx bxs-show"></i>
        </span>
      </BaseInput>

      <Button
        type="submit"
        buttonText="Sign in"
        width="100%"
        :class="[sendingRequest ? 'loading' : '']"
      />
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
import BaseInput from "@/components/BaseInput.vue";
import Button from "@/components/Button.vue";
import axios from "axios";

export default {
  name: "Signup",
  components: {
    BaseInput,
    Button
  },
  props: {
    msg: {
      type: String,
      required: false,
      default: null
    }
  },
  data() {
    return {
      loginData: {
        email: "",
        password: ""
      },
      sendingRequest: false,
      loginMessage: null
    };
  },
  methods: {
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
    },
    loginUser() {
      this.sendingRequest = true;

      const config = {
        method: "POST",
        url: "https://tofumi-universal-api.herokuapp.com/api/v1/login",
        header: {
          "Content-Type": "application/json"
        },
        data: this.loginData
      };

      axios(config)
        .then(response => {
          // stores the user token in the session storage the user logs in
          localStorage.setItem(
            "access_token",
            response.data.data.access_token
          );

          this.sendingRequest = false;

          if (response.status === 200 || response.data.status === "success") {
            localStorage.setItem("speakup-isLoggedIn", "true");
            this.$router.push({
              name: "dashboard"
            });
          }
        })
        .catch(err => {
          console.log(err.response);
          this.loginMessage = err.response.data.message;
          this.sendingRequest = false;

          // removing the login message after 4s
          setTimeout(() => {
            this.loginMessage = null;
          }, 4000);
        });
    },
    removeSignupResponse() {
      document.querySelector(".success").remove();
    }
  },
  mounted() {
    if (this.msg !== null) {
      setTimeout(() => {
        this.removeSignupResponse();
      }, 4000);
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  width: 30%;
  margin: 2% auto;

  @include mobile {
    width: 90%;
    margin: 8% auto;
  }
  @include tablet {
    width: 60%;
  }
  @include laptop {
    width: 40%;
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

    .signup-response {
      display: block;
      text-align: center;
      background-color: rgb(24, 146, 61);
      color: $white;
      padding: 10px;
      border-radius: 5px;
      margin-bottom: 20px;
      font-size: 0.85rem;

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
    .success,
    .error {
      display: block;
      text-align: center;
      color: $white;
      padding: 10px;
      border-radius: 5px;
      margin-bottom: 20px;
      font-size: 0.85rem;
      font-weight: 500;

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

    .success {
      background-color: rgb(23, 139, 58);
    }
    .error {
      background-color: #cc3636;
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
      transition-property: background;
      transition-duration: 0.35s;
      transition-timing-function: ease;
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
              lighten($color: $brand-color, $amount: 10%) 10px,
              lighten($color: $brand-color, $amount: 10%) 20px
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

@keyframes loading {
  0% {
    transform: translateX(-25px);
  }
  100% {
    transform: translateX(20px);
  }
}
</style>