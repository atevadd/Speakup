<template>
    <div class="input-box">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "BaseSelect",
};
</script>

<style lang="scss" scoped>
.input-box {
    width: 100%;
    position: relative;
    margin-bottom: 20px;
}
</style>
