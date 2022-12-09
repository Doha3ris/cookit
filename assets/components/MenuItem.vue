<template>
    <div class="menu-item">
        <i :class="icon"></i>
        <span class="content-spacing">{{ content }}</span>
    </div>
</template>

<script>
    export default {
        name: "MenuItem",
        props: {
            icon: String,
            content: String
        }
    }
</script>

<style scoped>

    .menu-item {
        display: flex;
        align-items: center;
    }

    .content-spacing {
        margin-left: 6px;
    }

</style>