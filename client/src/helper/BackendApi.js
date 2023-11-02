import axios from 'axios';

const BASE_URL =  "http://localhost:3000";

class BackendAPI{
    static async searchRecipe(term){
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