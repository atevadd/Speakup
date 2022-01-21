<template>
    <h2>{{ id }}</h2>
    <h2>{{ pagetitle }}</h2>
</template>

<script>
export default {
    name: "Post",
    props: {
        id: Number,
        pagetitle: String,
    },
};
</script>

<style></style>
