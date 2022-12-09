<template>
    <div class="wrapper">
        <i :class="icon" style="font-size: 24px"></i>
        <span class="content-spacing">{{ content }}</span>
    </div>
</template>

<script>
    export default {
        name: "IconNextToText",
        props: {
            icon: String,
            content: String
        }
    }
</script>

<style scoped>

    .wrapper {
        display: flex;
        align-items: center;
        margin: 6px 0;
    }

    .content-spacing {
        margin-left: 6px;
        font-size: 12px;
        font-weight: bold;
    }

</style>