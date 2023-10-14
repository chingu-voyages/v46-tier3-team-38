import express from 'express';
import { getSpecificRecipeInfo } from './getSpecificRecipeInfo';
const app = express();
const port = 3000;

app.get('/recipeInfo/:recipeID', async (req, res) => {
    try {
        const recipeInfo = await getSpecificRecipeInfo(req.params.recipeID);
        res.status(200).send(recipeInfo);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
