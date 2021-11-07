<template>
<button :type="type">{{ buttonText }}</button>
</template>

<script>
export default {
    name: "Button",
    props:{
        type:{
            type: String,
            required: false,
        },
        buttonText:{
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
button{
    width: 100%;
    display: inline-block;
    padding: 12px 30px;
    background: #f52653;
    border: none;
    outline: none;
    border-radius: 5px;
    color: $white;
    transition: .2s ease;
    cursor: pointer;

    &:hover{
        background: darken($color: #f52653, $amount: 10%);
    }
}
</style>