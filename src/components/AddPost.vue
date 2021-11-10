<template>
  <div class="add-post">
    <div class="add-post-container">
      <span @click="closeModal"><i class="bx bx-x"></i></span>

      <form class="add-post-form">
        <Input id="title" label="title" inputtype="text" />
        <Textarea label="Content" id="content" />

        <Button width="100%" buttonText ="Add post" />
      </form>
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input.vue";
import Textarea from "@/components/Textarea.vue";
import Button from "@/components/Button.vue";

export default {
  name: "AddPost",
  components: {
    Input,
    Textarea,
    Button
  },
  methods:{
      closeModal(){
          this.$emit('close-modal')
      }
  }
};
</script>

<style lang="scss" scoped>
.add-post {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3s ease;
  z-index: 10;

  

  &-container {
    position: relative;
    width: 35%;
    padding: 20px;
    border-radius: 10px;
    background-color: $white;

    @include mobile{
        width: 90%;
    }
    @include tablet{
        width: 70%;
    }
    @include laptop{
        width: 50%;
    }

    span {
      background: $white;
      width: 30px;
      height: 30px;
      position: absolute;
      right: 0;
      top: -40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: .15s ease;
      cursor: pointer;

      &:hover{
          background-color: darken($color: $white, $amount: 15%);
      }

      i{
          font-size: 1.4rem;
      }
    }
  }
}
</style>