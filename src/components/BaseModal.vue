<template>
  <div class="modal" role="modal">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseModal",
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  background-color: rgba($color: #000000, $alpha: 0.85);
}
</style>
