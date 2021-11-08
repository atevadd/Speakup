<template>
  <div class="input">
    <label :for="id">{{ label }}</label>
    <input :type="inputtype" :id="id" :placeholder="placeholder" autocomplete="off"/>
    <span
      @click="togglePassword"
      class="toggle-password"
      v-if="inputtype == 'password'"
      ><i class="bx bxs-show"></i
    ></span>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: ["id", "label", "inputtype", "placeholder"],
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
    font-size: 0.85rem;
    color: #5a5a5a;
    margin-bottom: 5px;
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
      border: 1px solid #f52653;
    }
  }
  .toggle-password {
    position: absolute;
    top: 53%;
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