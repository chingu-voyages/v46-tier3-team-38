const axios=require('axios');
require('dotenv').config();
const getSpecificRecipeInfo = async (recipeID) => {
    const options = {
        method: 'GET',
        url: `https://api.edamam.com/api/recipes/v2/${recipeID}`,
        params: {
            id: recipeID,
            type: 'public',
            beta: 'true',
            app_id: process.env.EDAMAM_APP_ID,
            app_key: process.env.EDAMAM_APP_KEY,
        },
        headers: {
            'Accept-Language': 'en',
        }
    };

    const recipeInfo = await axios.request(options).then((response) => {
        return response.data;
    }).catch((error) => {
        throw error;
    });

    return recipeInfo;

}

module.exports=getSpecificRecipeInfo;
