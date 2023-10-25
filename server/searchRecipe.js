const axios = require('axios');
require('dotenv').config();

BASE_URL = 'https://api.edamam.com/api/recipes/v2';

async function searchRecipe(params){
    const updatedParams= {
        ...params, 
        type: 'public',
        beta: 'true',
        'app_id': process.env.EDAMAM_APP_ID,
        'app_key': process.env.EDAMAM_APP_KEY
    }
    
    const options = {
        method: 'GET',
        url: BASE_URL,
        params: updatedParams,
    }
    console.log("🚀 ~ file: searchRecipe.js:20 ~ searchRecipe ~ options:", options)
    
    try{
        const response = await axios.request(options)
        return response.data;
        } catch(e){
            console.log('error', e);
        }
}

module.exports = { searchRecipe };
