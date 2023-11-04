import axios from 'axios';
// import dotenv from 'dotenv'; 
// dotenv.config()

const ENVIRONMENT = import.meta.env.VITE_ENVIRONMENT;
const BASE_URL = ENVIRONMENT ==='development' ? "http://localhost:3000": import.meta.env.VITE_BASE_URL;


class BackendAPI{
    static async searchRecipe(term){
        //console.log(BASE_URL)
        const response = await axios.get(`${BASE_URL}/search/?q=${term}`);
        return response.data
    }
    
    static async getRandomRecipe(){
        const response = await axios.get(`${BASE_URL}/random`);
        return response.data
    } 
    
    static async getRecipeDetail(recipeID) {
        const recipeDetail = await axios.get(`${BASE_URL}/recipeInfo/${recipeID}`);
        const recipe = recipeDetail.data.recipe;
        // console.log(recipe);
        return recipe;
    }
}


export default BackendAPI;