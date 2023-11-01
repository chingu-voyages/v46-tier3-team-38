import axios from 'axios';

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

class backendAPI{
    static async searchRecipe(term){
        let response = await axios.get(`${BASE_URL}/search/?q=${term}`);
        return response.data
    }

    static async signUp(username,pwd){
        const data={
            username:username,
            pwd:pwd
        }
        const response = await axios.post(`${BASE_URL}/signUp`,data);
        return response.data
    }

    static async login(username,pwd){
        const data={
            username:username,
            pwd:pwd
        }
        const response = await axios.post(`${BASE_URL}/login`,data);
        return response.data
    }
}


export default backendAPI;