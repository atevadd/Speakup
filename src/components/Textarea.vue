<template>
    <div class="input">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Textarea",
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
        font-weight: 600;
    }

    textarea {
        display: block;
        position: relative;
        height: 200px;
        width: 100%;
        border-radius: 5px;
        border: 1px solid #aaa;
        padding: 10px;
        outline: none;
        resize: none;

        &:focus {
            border: 1px solid $brand-color;
        }
    }
}
</style>
