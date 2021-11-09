<template>
  <header>
    <div class="brand-logo">
      <h2 class="header">
        <router-link class="logo" :to="{ name: 'home' }"
          >Spe<span>ak</span>up</router-link
        >
      </h2>
    </div>

    <nav class="nav">
      <ul>
        <li><router-link :to="{ name: 'dashboard' }">Home</router-link></li>
        <li><router-link :to="{ name: 'home' }">Feeds</router-link></li>
        <li><router-link :to="{ name: 'home' }">Profile</router-link></li>
      </ul>
    </nav>

    <div class="user-pill">
      <img src="@/assets/logo.png" alt="" />
      <i class="bx bx-caret-down"></i>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
header {
  position: relative;
  width: 100%;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 5px solid #f52653;
  background: #b5b5b5;

  .brand-logo {
    position: relative;

    h2 {
      position: relative;

      a {
        color: #333;

        span {
          color: #f52653;
        }
      }
    }
  }

  .nav {
    position: relative;

    ul {
      display: flex;
      list-style-type: none;
      align-items: center;

      li {
        margin: 0 25px;

        a {
          color: rgb(119, 119, 119);
          font-size: 0.88rem;

          &.router-link-active {
              color: #333;
            font-weight: 700;
          }

          &:hover{
              border-bottom: 2px solid #f52653;
          }
        }
      }
    }
  }

  .user-pill {
    display: flex;
    align-items: center;

    img {
      display: inline-block;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      margin-right: 5px;
    }
  }
}
</style>