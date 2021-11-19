<template>
  <transition name="router">
    <router-view />
  </transition>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

a {
  text-decoration: none;
}

::selection {
  color: $white;
  background-color: $brand-color;
}

body {
  overflow-x: hidden;
}

.router-enter-active{
  animation: comingIn .05s linear .1s;
  opacity: 0;
}
.router-leave-active{
  animation: leaving .1s linear;
}

@keyframes comingIn {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}

@keyframes leaving {
  from{
    opacity: 1;
  }
  to{
    opacity: 0;
  }
}
</style>
