<template>
  <div class="signup">
    <h2 class="header">
      Signup to
      <router-link class="logo" :to="{ name: 'home' }"
        >Spe<span>ak</span>up</router-link
      >
    </h2>

    <form @submit.prevent="submitForm" class="signup-form">
      <div class="error" v-show="formError">{{ formError }}</div>
      <Input>
        <label for="img">Profile picture</label>
        <input type="file" id="img" accept=".png, .jpg, .jpeg, .svg" autocomplete="off" @change="onFileSelected"/>
      </Input>
      <Input>
        <label for="fname">First name</label>
        <input type="text" v-model="userData.fname" id="fname" autocomplete="off"/>
      </Input>
      <Input>
        <label for="lname">last name</label>
        <input type="text" v-model="userData.lname" id="lname" autocomplete="off"/>
      </Input>
      <Input>
        <label for="email">Email</label>
        <input type="email" v-model="userData.email" id="email" autocomplete="off"/>
      </Input>
      <Input>
        <label for="gen">Gender</label>
        <input type="text" v-model="userData.gender"  id="gen" autocomplete="off"/>
      </Input>
      <Input>
        <label for="job">Job role</label>
        <input type="text" v-model="userData.job" id="job" autocomplete="off"/>
      </Input>
      <Input>
        <label for="dept">Dept</label>
        <input type="text" v-model="userData.dept"  id="dept" autocomplete="off"/>
      </Input>
      <Input>
        <label for="addr">Address</label>
        <input type="text" v-model="userData.address" id="addr" autocomplete="off"/>
      </Input>
      <Input>
        <label for="passsword">Password</label>
        <input
          type="password"
          v-model="userData.password"
          name=""
          id="passsword"
        />
        <span @click="togglePassword" class="toggle-password"
          ><i class="bx bxs-show"></i
        ></span>
      </Input>
      <Button
        buttonText="Sign up"
        type="submit"
        width="100%"
        :class="[sendingRequest ? 'loading' : '']"
      />
    </form>

    <div class="login-container">
      <p>
        Already a user? <router-link :to="{ name: 'login' }">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";
import axios from"axios";

export default {
  name: "Signup",
  components: {
    Input,
    Button,
  },
  data() {
    return {
      userData: {
        selectedImage: null,
        fname: "",
        lname: "",
        email: "",
        gender: "",
        job: "",
        dept: "",
        address: "",
        password: "",
      },
      sendingRequest: false,
      formError: null,
    };
  },
  methods: {
    onFileSelected(e){
      this.userData.selectedImage = e.target.files[0]
      console.log(this.userData.selectedImage)
    },
    submitForm() {
      // addding the user selected image as a form data
      const formData = new FormData()
      formData.append('image', this.userData.selectedImage, this.userData.selectedImage.name)

      // adding the user data to the form data object
      formData.append('firstName', this.userData.fname)
      formData.append('lastName', this.userData.lname)
      formData.append('email', this.userData.email)
      formData.append('gender', this.userData.gender)
      formData.append('jobRole', this.userData.job)
      formData.append('dept', this.userData.dept)
      formData.append('address', this.userData.address)
      formData.append('password', this.userData.password)

      // API POST request configuration
      let config = {
        method: 'post',
        url: 'https://myteamworkproject.herokuapp.com/v1/auth/users',
        headers:{
          'Content-Type': 'application/json'
        },
        data: formData
      }

      this.sendingRequest = true;

      axios(config)
      .then(response => {
        let responseData = response.data
        console.log(responseData)

        if(responseData.status === 'success'){
          this.$router.push({name: 'login'})
        }

        this.sendingRequest = false
      })
      .catch(error => {

        if(error.message.includes('400')){
          this.formError = "Email already exist"
        }else{
          this.formError = error.message
        }
        console.log(error)
        this.sendingRequest = false
      })
    },
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
  },
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
    width: 60%;
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
      transition-property: background;
      transition-duration: 0.35s;
      transition-timing-function: ease;
      // background: transparent;
      overflow: hidden;
      z-index: 2;

      &.loading {
        position: relative;
        z-index: 2;


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