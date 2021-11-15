<template>
  <button :type="type" :style="'width:' + width">
    <slot></slot>
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      required: false,
    },
    buttonText: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: false,
      default: "max-content",
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  display: inline-block;
  padding: 15px 30px;
  background: $brand-color;
  border: none;
  outline: none;
  border-radius: 5px;
  color: $white;
  transition: 0.2s ease;
  cursor: pointer;
  z-index: 2;

  &:hover {
    background: darken($color: $brand-color, $amount: 10%);
  }
}
</style>