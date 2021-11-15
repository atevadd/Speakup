<template>
  <Navbar />
  <main class="profile">
    <!-- <div class="profile-banner"></div> -->
    <div class="profile-container">
      <div class="img">
        <img src="@/assets/logo.png" alt="" />
      </div>
      <div class="profile-info">
        <div class="details">
          <h3>First name</h3>
          <p>Tofunmi</p>
        </div>
        <div class="details">
          <h3>Last name</h3>
          <p>Tofunmi</p>
        </div>
        <div class="details">
          <h3>Email</h3>
          <p>Tofunmi@gmail.com</p>
        </div>
        <div class="details">
          <h3>Job Title</h3>
          <p>Tofunmi</p>
        </div>
        <div class="details">
          <h3>First name</h3>
          <p>Tofunmi</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Profile",
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
.profile {
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
    width: 60%;
    margin: 7% auto;
    display: grid;
    grid-template-columns: 1fr 2fr;
    // border: 1px solid;

    @include mobile {
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 30px auto;
    }
    @include tablet {
      width: 100%;

    }

    .img {
      width: 200px;
      height: 200px;
      // border: 2px solid red;

      @include mobile {
        width: 100px;
        height: 100px;
      }

      img {
        width: 100%;
        height: 100%;
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
          font-size: 0.82rem;
          font-weight: 400;
          color: #aaa;
          text-transform: capitalize;
        }
        p {
          font-weight: 600;
          font-size: 1.1rem;
          color: #333;
        }
      }
    }
  }
}
</style>