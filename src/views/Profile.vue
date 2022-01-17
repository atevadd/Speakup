<template>
  <Navbar />
  <main class="profile">
    <!-- <div class="profile-banner"></div> -->
    <div class="profile-container">
      <div class="img">
        <img :src="baseUrl + profileDetails.avatar" alt="" />
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
        <div class="details">
          <h3>User code</h3>
          <p>{{ profileDetails.user_code }}</p>
        </div>
      </div>
    </div>
    <!-- profile Buttons -->
    <div class="profile-cta">
      <button class="edit" aria-label="edit profile">Edit profile</button>
      <button class="del" aria-label="delete profile">Delete profile</button>
    </div>

    <!-- The confirm delete modal
    <BaseModal class="modal">
      <h1>Do you want to delete your account?</h1>
      <div class="btns">
        <button class="no">No, cancel</button>
        <button class="yes">Yes, delete account</button>
      </div>
    </BaseModal> -->
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
      baseUrl:
        "https://tofumi-universal-api.herokuapp.com/api/v1/users/logged-in/",
      profileDetails: null,
    };
  },
  created() {
    // loading the user profile
    this.loadProfile();
  },
  methods: {
    // Load profile function
    loadProfile() {
      let userToken = sessionStorage.getItem("access_token");

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
          console.log(response.data.data);
          this.profileDetails = response.data.data;
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    // delete profile
    deleteProfile() {
      let userId = this.profileDetails.id;

      // delete request config
      const config = {
        method: "DELETE",
        url: `https://tofumi-universal-api.herokuapp.com/api/v1/users/${userId}`,
      };

      axios(config)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
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
      grid-template-columns: 1fr 2fr;
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

  
}
</style>