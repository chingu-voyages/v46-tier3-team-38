import axios from 'axios';

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

class BackendAPI{
    static async searchRecipe(term){
        let response = await axios.get(`${BASE_URL}/search/?q=${term}`);
        return response.data
    }
    
    static async getRandomRecipe(){
      let response = await axios.get(`${BASE_URL}/random`);
    return response.data
    }
}


export default BackendAPI;