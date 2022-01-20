<template>
  <Navbar />
  <main class="profile">
    <!-- <div class="profile-banner"></div> -->
    <div class="profile-container">
      <div class="img">
        <img :src="profileDetails.avatar" alt="profile picture" />
      </div>
      <div class="profile-info">
        <div class="details">
          <h3>First name</h3>
          <p>{{ profileDetails.first_name }}</p>
        </div>
        <div class="details">
          <h3>Last name</h3>
          <p>{{ profileDetails.last_name }}</p>
        </div>
        <div class="details">
          <h3>Email</h3>
          <p>{{ profileDetails.email }}</p>
        </div>
        <div class="details">
          <h3>Phone number</h3>
          <p>{{ profileDetails.phone }}</p>
        </div>
        <!-- <div class="details">
          <h3>User code</h3>
          <p>{{ profileDetails.user_code }}</p>
        </div> -->
      </div>
    </div>
    <!-- profile Buttons -->
    <div class="profile-cta">
      <button class="edit" aria-label="edit profile" @click="toggleEditModal(true)">Edit profile</button>
      <button
        class="del"
        aria-label="delete profile"
        @click="showDeleteModal = true"
      >
        Delete profile
      </button>
    </div>

    <!-- The confirm delete modal -->
    <BaseModal class="modal" v-if="showDeleteModal">
      <div class="modal-container">
        <h1>Do you want to delete your account?</h1>
        <div class="btns">
          <button class="no" @click="showDeleteModal = false">
            No, cancel
          </button>
          <button class="yes" @click="deleteProfile">
            Yes, delete account
          </button>
        </div>
      </div>
    </BaseModal>

    <!-- edit profile modal -->
    <BaseModal class="edit-modal" v-if="showEditModal">
      <form @submit.prevent="editProfile">
        <div class="close-modal" @click="toggleEditModal(false)">
          <i class="bx bx-x"></i>
        </div>
        <div class="input-box">
          <label for="picture">Change profile picture</label>
          <input type="file" id="picture" accept="image/*"  @change="displayFileName"/>
          <span class="filename">{{ fileName }}</span>
        </div>

        <div class="group">
          <div class="input-box">
            <label for="fname">First name</label>
            <input type="text" id="fname" v-model="editProfileDetails.firstName"/>
          </div>
          <div class="input-box">
            <label for="lname">Last name</label>
            <input type="text" id="lname" v-model="editProfileDetails.lastName"/>
          </div>
        </div>

        <div class="group">
          <div class="input-box">
            <label for="email">Email</label>
            <input type="email" id="email"  v-model="editProfileDetails.email"/>
          </div>
          <div class="input-box">
            <label for="phone">Phone number</label>
            <input type="tel" id="phone"  v-model="editProfileDetails.phone"/>
          </div>
        </div>

        <button type="submit">Edit profile</button>
      </form>
    </BaseModal>
  </main>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import BaseModal from "@/components/BaseModal.vue";
import axios from "axios";

export default {
  name: "Profile",
  components: {
    Navbar,
    BaseModal,
  },
  data() {
    return {
      baseUrl: "https://tofumi-universal-api.herokuapp.com/api/v1/users/",
      profileDetails: "",
      editProfileDetails:{
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      },
      showDeleteModal: false,
      showEditModal: false,
      fileName: '',
    };
  },
  created() {
    // loading the user profile
    this.loadProfile();
  },
  methods: {
    //  function to toggle the edit modal
    toggleEditModal(value){
      this.showEditModal = value
    },
    // this function displays the image name after selection
    displayFileName(e){
      const [files] = e.target.files;

      // displaying the file name
      this.fileName = files.name;
    },
    // Load profile function
    loadProfile() {
      let userToken = localStorage.getItem("access_token");

      const config = {
        method: "GET",
        url: "https://tofumi-universal-api.herokuapp.com/api/v1/users/logged-in",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      };

      axios(config)
        .then((response) => {
          //storing the API response in the profileDetails data
          this.profileDetails = response.data.data;

          // desctructuring with an alias
          const {first_name: firstName, last_name: lastName, email, phone} = response.data.data;

          //setting the value of editprofile data to the destructured variables
          this.editProfileDetails = {firstName, lastName, email, phone}
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    // delete profile function
    deleteProfile() {
      let userId = this.profileDetails.id;
      let userToken = localStorage.getItem("access_token");

      // delete request config
      const config = {
        method: "DELETE",
        url: `https://tofumi-universal-api.herokuapp.com/api/v1/users/${userId}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      };

      axios(config)
        .then((response) => {
          if (response.data.status === "success" || response.status === 200) {
            localStorage.setItem("speakup-isLoggedIn", "false");

            localStorage.setItem("access_token", "");

            // redirecting user after account has been deleted
            this.$router.push({
              name: "signup",
              params: {
                msg: "Account deleted successfully",
              },
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // edit profile function
    editProfile(){
      console.log(this.editProfileDetails)
    },
  },
};
</script>

<style lang="scss" scoped>
.profile {
  position: relative;
  width: 100%;
  padding: 0 40px;

  @include mobile {
    padding: 0;
  }
  @include tablet {
    padding: 0;
  }

  &-banner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 35vh;
    background-color: lighten($color: $brand-color, $amount: 2%);
    z-index: -1;
  }
  &-container {
    position: relative;
    width: 70%;
    margin: 7% auto 2%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    border: 1px solid;
    align-items: flex-start;

    @include mobile {
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 30px auto 10px;
    }
    @include tablet {
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 30px auto 10px;
    }

    .img {
      width: 200px;
      height: 200px;
      // border: 2px solid red;
      overflow: hidden;

      @include mobile {
        width: 100px;
        height: 100px;
      }

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        // border: 2px solid greenyellow;
      }
    }

    .profile-info {
      width: 100%;
      // border: 2px solid;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 40px 0;

      @include mobile {
        width: 100%;
        display: block;
      }
      @include tablet {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 40px 40px;
      }

      .details {
        display: block;

        @include mobile {
          margin-bottom: 30px;
        }

        h3 {
          font-size: 0.7rem;
          font-weight: 400;
          color: #707070;
          text-transform: uppercase;
        }
        p {
          font-weight: 600;
          font-size: 1.3rem;
          color: #333;
          text-transform: capitalize;
        }
      }
    }
  }

  &-cta {
    // border: 1px solid;
    width: 70%;
    margin: 0 auto;
    // padding: 15px 0;
    display: flex;
    align-items: center;
    gap: 0 20px;
    transition: 0.2s ease;

    @include mobile {
      width: 90%;
    }
    @include tablet {
      width: 90%;
    }

    button {
      outline: none;
      border: none;
      padding: 15px 25px;
      font-weight: 600;
      border-radius: 5px;
      cursor: pointer;

      &.edit {
        color: #2323f5;

        &:hover {
          background: #2323f53c;
        }
      }
      &.del {
        color: #c11515;

        &:hover {
          background: #c115153c;
        }
      }
    }
  }

  .modal {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba($color: #000000, $alpha: 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 1s ease;
    z-index: 10;
    animation: reveal .2s ease;

    &-container {
      position: relative;
      background: #fff;
      border-radius: 10px;
      padding: 40px 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      @include mobile {
        width: 80%;
      }
      @include tablet {
        width: 80%;
      }
      @include laptop {
        width: 80%;
      }

      h1 {
        font-size: 1.3rem;
        color: #333;
        padding: 0 20px;
        text-align: center;

        @include mobile {
          padding: 0;
          font-size: 1.2rem;
        }
      }
      .btns {
        margin-top: 20px;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0 20px;

        @include mobile {
          flex-direction: column;
          //   border: 1px solid red;
        }

        button {
          padding: 12px 25px;
          outline: none;
          border: none;
          border-radius: 5px;
          cursor: pointer;

          @include mobile {
            margin-top: 10px;
          }

          &.no {
            background: transparent;

            &:hover {
              font-weight: 500;
            }
          }
          &.yes {
            color: #c11515;
            font-weight: 500;

            &:hover {
              background: #c115153c;
            }
          }
        }
      }
    }
  }

  .edit-modal {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    z-index: 10;
    background-color: rgba($color: #000000, $alpha: 0.6);

    form {
      position: relative;
      background-color: #fff;
      margin: auto;
      padding: 20px;
      border-radius: 10px;
      display: block;
      animation: slidedown .5s ease;

      @include mobile{
          width: 90%;
      }
      @include tablet{
        width: 80%;
      }
      @include laptop{
        width: 45%;
      }

      .close-modal {
        background: #fff;
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

        &:hover{
            background-color: #d9d9d9;
          }

        i{
          font-size: 1.4rem;
        
        }
      }

      .input-box{
        @include mobile{
          margin-bottom: 15px;
        }
      }

      & > .input-box{
        display: block;
        margin-bottom: 20px;

        & > label{
          display: inline-block;
          font-size: .75rem;
          padding: 10px 20px;
          background-color: lighten($color: $brand-color, $amount: 30%);
          border-radius: 5px;
          color: #141414;
          font-weight: 500;
          cursor: pointer;
          margin-right: 10px;
        }

        input{
          display: none;
        }
        span{
          color: #777777;
          font-size: .8rem;
        }
      }

      .group {
        width: 100%;
        // border: 1px solid ;
        margin-bottom: 25px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0 30px;

        @include mobile{
          display: block;
          margin-bottom: 0;
        }

        &:last-child {
          margin-bottom: 0;
        }

        .input-box {
          width: 100%;

          label,
          input {
            display: block;
          }
          input {
            display: block;
            width: 100%;
            height: 35px;
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 0 7px;

            &:focus {
              border: 1px solid $brand-color;
              outline: none;
            }
          }
          label {
            font-weight: 400;
            color: #141414;
            font-size: 0.8rem;
            line-height: 1.5;
          }
        }
      }

      button{
        display: block;
        width: 100%;
        padding: 15px 0;
        cursor:pointer;
        outline: none;
        border: none;
        background-color: $brand-color;
        color: #fff;
        font-weight: 600;
        border-radius: 5px;
        transition: .15s ease;

        &:hover{
          background-color: darken($color: $brand-color, $amount: 10%);
        }

        &:focus{
          outline: 1px solid #141414;
          outline-offset: 5px;
        }
      }
    }
  }
}


@keyframes slidedown {
  0%{
     opacity: 0; 
     transform: translateY(100px);
  }
  100%{
     opacity: 1; 
     transform: translateY(0);  
  }
}
@keyframes reveal {
  0%{
     opacity: 0; 
  }
  100%{
     opacity: 1; 
  }
}
</style>