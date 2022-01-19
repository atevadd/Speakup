<template>
  <div class="input">
     <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: ["id", "label", "inputtype", "placeholder", 'complete','imgtype', 'inputValue'],
  emits:['update:inputValue'],
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
  },
};
</script>

<style lang="scss" scoped>
.input {
  position: relative;
  width: 100%;
  margin-bottom: 20px;

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
}
</style>