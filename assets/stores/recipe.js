import {defineStore} from 'pinia'
import axios from "axios";

export const useStore = defineStore('recipe', {
    state: () => {
        return {
            recipeList: {}
        }
    },
    actions: {
        async loadRecipeList() {
            try {
                const recipeList = (await axios.get('/recipe/get_all')).data
                this.recipeList = recipeList
                return recipeList
            } catch (error) {
                return error
            }
        },
    }
})
