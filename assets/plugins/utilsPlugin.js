import {useStore as useRecipeStore} from "../stores/recipe.js";

export default {
    install(app, options) {
        app.config.globalProperties.$recipe = useRecipeStore()
    }
}
