<template>
    <a-card hoverable
            :body-style="{padding: '0 24px'}"
            class="recipe-card"
            :tab-list="tabList"
            :active-tab-key="key"
            @tabChange="key => onTabChange(key, 'key')">

        <template v-if="key === 'tab1'"
                  #cover>
            <div class="card-image">
                <img class="resized-image" :src="recipeContent[key].image"/>
            </div>
        </template>

        <a-card-meta>
            <template #description v-if="key === 'tab1'">
                <div class="icon-wrapper">
                    <icon-next-to-text icon="ph-chart-bar" :content="recipeContent[key].difficulty"/>
                    <icon-next-to-text icon="ph-gear" :content="recipeContent[key].preparationTime"/>
                    <icon-next-to-text icon="ph-cooking-pot" :content="recipeContent[key].cookingTime"/>
                </div>
                <h2 class="card-title">{{ recipeContent[key].title }}</h2>
                <ul>
                    <li v-for="ingredient in recipe.ingredients">
                        {{ ingredient }}
                    </li>
                </ul>
            </template>

            <template #description v-if="key === 'tab2'">
                <ul class="preparation-wrapper">
                    <li v-for="preparation in recipe.preparation">
                        {{ preparation }}
                    </li>
                </ul>
            </template>
        </a-card-meta>
    </a-card>
</template>

<script>

    import IconNextToText from "../../../components/IconNextToText.vue";

    export default {
        name: "RecipeCard",
        components: {IconNextToText},
        data() {
            return {
                tabList: [
                    {
                        key: 'tab1',
                        tab: 'Overview',
                    },
                    {
                        key: 'tab2',
                        tab: 'Preparation',
                    },
                ],
                recipeContent: {
                    tab1: {
                        image: this.recipe.image,
                        title: this.recipe.title,
                        preparationTime: this.recipe.preparationTime,
                        difficulty: this.recipe.difficulty,
                        cookingTime: this.recipe.cookingTime,
                        ingredients: this.recipe.ingredients
                    },
                    tab2: {
                        preparation: this.recipe.preparation
                    }
                },
                key: "tab1",
            }
        },
        props: {
            recipe: {}
        },
        methods: {
            onTabChange(value, type) {
                if (type === 'key') {
                    this.key = value;
                }
            }
        },
    }
</script>

<style scoped>

    .recipe-card {
        height: 600px;
        width: 400px;
        border-radius: 18px;
        overflow: scroll;
    }

    .card-image {
        text-align: center;
        padding: 24px;
        object-fit: cover;
    }

    .resized-image {
        height: 260px;
        width: 100%;
        border-radius: 18px;
    }

    .icon-wrapper {
        padding: 0 24px;
        display: flex;
        justify-content: space-around;
    }

    .card-title {
        margin: 0;
        padding: 12px 0;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 1px;
        font-family: Rubik;
        color: #393939;
    }

    .preparation-wrapper {
        margin-top: 24px;
        font-size: 16px;
        color: #393939;
    }

    .preparation-wrapper > * {
        margin-bottom: 12px;
        list-style-type: decimal;
    }

</style>