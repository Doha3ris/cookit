<template>
    <div class="recipe-wrapper">
        <span v-for="recipe in $recipe.recipeList">
            <recipe-card :recipe="recipe"/>
        </span>
    </div>
</template>

<script>

    import RecipeCard from "pages/RecipeListPage/RecipeCard/RecipeCard.vue";

    export default {
        name: "RecipeListPage",
        components: {RecipeCard},
        async mounted() {
            await this.$recipe.loadRecipeList()
        }
    }

</script>

<style scoped>

    .recipe-wrapper {
        display: flex;
        gap: 24px;
    }

</style>