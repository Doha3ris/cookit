<template>
    <a-layout class="wrapper">
        <a-layout-sider>
            <a-menu v-model:selectedKeys="selectedKeys"
                    theme="dark"
                    mode="vertical">

                <a-menu-item key="1">
                    <router-link :to="{name: $routes.RECIPE_LIST_PAGE}">
                        <menu-item icon="ph-book" content="Recipe List"/>
                    </router-link>
                </a-menu-item>

                <a-menu-item key="2">
                    <router-link :to="{name: $routes.RECIPE_ADD_PAGE}">
                        <menu-item icon="ph-plus" content="Add Recipe"/>
                    </router-link>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>

        <a-layout>
            <a-layout-content class="content-wrapper">
                <router-view #default="{ Component }">
                    <transition name="route-transition" mode="out-in">
                        <component :is="Component"/>
                    </transition>
                </router-view>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script>

    import IconNextToText from "components/IconNextToText.vue";
    import MenuItem from "components/MenuItem.vue";

    export default {
        name: "App",
        components: {MenuItem, IconNextToText},
        data() {
            return {
                selectedKeys: ["1"]
            }
        },
    }

</script>

<style scoped>

    .wrapper {
        min-height: 100vh;
    }

    .content-wrapper {
        margin: 24px;
        display: flex;
        align-items: center;
        gap: 24px;
    }

</style>
