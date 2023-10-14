import axios from 'axios';

export const getSpecificRecipeInfo = async (recipeID) => {
    const options = {
        method: 'GET',
        url: `https://api.edamam.com/api/recipes/v2/${recipeID}`,
        params: {
            id:recipeID,
            type: 'public',
            beta: 'true',
            app_id:import.meta.env.VITE_EDAMAM_APP_ID,
            app_key:import.meta.env.VITE_EDAMAM_APP_KEY,
        },
        headers: {
            'Accept-Language': 'en',
        }
    };

    return await axios.request(options);
}