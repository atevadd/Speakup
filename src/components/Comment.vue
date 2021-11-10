<template>
  <div class="comment">
      <p class="comment-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto voluptatibus quia totam autem, maxime cumque optio accusamus consectetur, sunt reiciendis beatae doloremque ipsum! Officia, molestiae?
      </p>
      <p class="comment-author">John doe</p>
  </div>
</template>

<script>
export default {
    name: "Comment",
}
</script>

<style lang="scss" scoped>
.comment{
    width: 100%;
    position: relative;
    margin-bottom: 25px;
    

    &-text{
        display: block;
        font-size: .88rem;
        color: #333;
        line-height: 1.4;
    }
    &-author{
        display: block;
        text-align: right;
        font-style: italic;
        margin-top: 10px;
        font-size: .75rem;
        color: #aaa;
    }
}
</style>