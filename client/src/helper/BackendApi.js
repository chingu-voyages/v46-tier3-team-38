import axios from 'axios';

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

class backendAPI{
    static async searchRecipe(term){
        let response = await axios.get(`${BASE_URL}/search/?q=${term}`, {
            headers: {
              'origin' : 'http://localhost:5173'
            }
          });
        return response.data
    }
}


export default backendAPI;