<template>
  <div>
    <div class="modal-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseModal",
};
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba($color: #000000, $alpha: 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 1s ease;

  &-container {
    position: relative;
    background: #fff;
    border-radius: 10px;
    padding: 40px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @include mobile {
      width: 80%;
    }
    @include tablet {
      width: 80%;
    }
    @include laptop {
      width: 80%;
    }

    h1 {
      font-size: 1.3rem;
      color: #333;
      padding: 0 20px;
      text-align: center;

      @include mobile{
        padding: 0 ;
        font-size: 1.2rem;
      }
    }
    .btns {
      margin-top: 20px;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0 20px;

      @include mobile{
          flex-direction: column;
        //   border: 1px solid red;
      }

      button {
        padding: 12px 25px;
        outline: none;
        border: none;
        border-radius: 5px;
        cursor: pointer;

        @include mobile{
          margin-top: 10px;
      }

        &.no {
          background: transparent;

          &:hover {
            font-weight: 500;
          }
        }
        &.yes {
          color: #c11515;
          font-weight: 500;

          &:hover {
            background: #c115153c;
          }
        }
      }
    }
  }
}
</style>
