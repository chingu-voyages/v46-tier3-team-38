import axios from 'axios';
// import dotenv from 'dotenv'; 
// dotenv.config()

const ENVIRONMENT = import.meta.env.VITE_ENVIRONMENT;
const BASE_URL = ENVIRONMENT ==='development' ? "http://localhost:3000": import.meta.env.VITE_BASE_URL;


class BackendAPI{
    static async searchRecipe(term){
        console.log(process.env.BASE_URL)
        let response = await axios.get(`${BASE_URL}/search/?q=${term}`);
        return response.data
    }
    
    static async getRandomRecipe(){
      let response = await axios.get(`${BASE_URL}/random`);
      return response.data
    } 
    static async getRecipeDetail(recipeID) {
        const recipeDetail = await axios.get(`http://localhost:3000/recipeInfo/${recipeID}`, { 'Origin': 'http://localhost:5173/' });
        const recipe = recipeDetail.data.recipe;
        // console.log(recipe);
        return recipe;
    }
}


export default BackendAPI;