import {RouteName} from "./RouteName.js";
import RecipeListPage from "../pages/RecipeListPage/RecipeListPage.vue";
import RecipeAddPage from "../pages/RecipeAddPage/RecipeAddPage.vue";

export const routes = [
    {
        path: "/",
        name: RouteName.RECIPE_LIST_PAGE,
        component: RecipeListPage,
        meta: {
            associatedMenuItem: RouteName.RECIPE_LIST_PAGE
        },
    },
    {
        path: "/add",
        name: RouteName.RECIPE_ADD_PAGE,
        component: RecipeAddPage,
        meta: {
            associatedMenuItem: RouteName.RECIPE_ADD_PAGE
        },
    },
]
