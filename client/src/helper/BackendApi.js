import axios from 'axios';
// import dotenv from 'dotenv'; 
// dotenv.config()

const ENVIRONMENT = import.meta.env.VITE_ENVIRONMENT;
const BASE_URL = ENVIRONMENT ==='development' ? "http://localhost:3000": import.meta.env.VITE_BASE_URL;


class BackendAPI{
    static async searchRecipe(params){
        //console.log(BASE_URL)
        const response = await axios.request({
            url:`${BASE_URL}/search/`,
            method: 'get',
            params: {...params}
        });
        return response.data
    }

    static async signUp(username, pwd) {
        const data = {
            username: username,
            pwd: pwd
        }
        const response = await axios.post(`${BASE_URL}/signUp`, data);
        return response.data;
    }

    static async login(username, pwd) {
        const data = {
            username: username,
            pwd: pwd
        }
        const response = await axios.post(`${BASE_URL}/login`, data);
        return response.data;
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

    static async addRemoveFromFavourites(isAdd,username,recipeID){
        const data={
            isAdd:isAdd,
            username:username,
            recipeID:recipeID
        }
        await axios.post(`${BASE_URL}/favourites`,data)
    }

    static async addRemoveFromBookmarks(isAdd,username,recipeID){
        const data={
            isAdd:isAdd,
            username:username,
            recipeID:recipeID
        }
        await axios.post(`${BASE_URL}/bookmarks`,data)
    }

    static async getAllBookmarksAndFavourites(username){
        const data={
            username:username,
        }
        const response= await axios.post(`${BASE_URL}/allBookmarksAndFavourites`,data);
        return response.data;
    }
}


export default BackendAPI;