<template>
  <!-- <transition name="router"> -->
  <router-view />
  <!-- </transition> -->
</template>

<script>
// import axios from "axios";

export default {
  name: "App",
  // created() {
  //   if (sessionStorage.getItem("access_token")) {
  //     axios.defaults.headers.common[
  //       "Authorization"
  //     ] = `Bearer ${sessionStorage.getItem("access_token")}`;
  //   }
  // },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  overflow-wrap: break-word;
}

a {
  text-decoration: none;
}

::selection {
  color: $white;
  background-color: $brand-color;
}

// Custom scrollbar

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: $brand-color;
  border-radius: 50px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: darken($color: $brand-color, $amount: 15%);
}

body {
  overflow-x: hidden;
}

.router-enter-active {
  animation: comingIn 0.05s linear 0.1s;
  opacity: 0;
}
.router-leave-active {
  animation: leaving 0.1s linear;
}

@keyframes comingIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes leaving {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
