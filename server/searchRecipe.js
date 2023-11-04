const axios = require('axios');
require('dotenv').config();

BASE_URL = 'https://api.edamam.com/api/recipes/v2';
base_params = { 
        type: 'public',
        beta: true,
        'app_id': process.env.EDAMAM_APP_ID,
        'app_key': process.env.EDAMAM_APP_KEY
    }

async function searchRecipe(params){
    const updatedParams= {
        ...params, 
        ...base_params,
    }
    
    const options = {
        method: 'GET',
        url: BASE_URL,
        params: updatedParams,
    }
    
    try{
        const response = await axios.request(options)
        return response.data;
        } catch(e){
            console.log('error', e);
        }
}

async function getRandomRecipe(){
    const updatedParams= {
        diet: 'balanced',
        random: true, 
        ...base_params,
    }
    
    const options = {
        method: 'GET',
        url: BASE_URL,
        params: updatedParams,
    }
    
    try{
        const response = await axios.request(options)
        return response.data;
        } catch(e){
            console.log('error', e);
        }
}

module.exports = { searchRecipe, getRandomRecipe };
