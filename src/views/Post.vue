<template>
  <h2>{{ id }}</h2>
  <h2>{{ pagetitles }}</h2>
</template>

<script>
export default {
    name: "Post",
    props:{
        id: Number,
        pagetitles: String
    }
}
</script>

<style>

</style>