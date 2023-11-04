const express = require("express");
const cors = require('cors');
const { getSpecificRecipeInfo } = require('./getSpecificRecipeInfo');
const { searchRecipe, getRandomRecipe } = require('./searchRecipe');

const app = express();
const port = 3000;

const allowedOrigins = ['http://localhost:5173', 'http://127.0.0.1:5173', 'https://recipo-frontend.onrender.com'];

const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};

app.use(cors(corsOptions));
// app.use(cors());
app.use(express.json());


app.get('/search', async (req, res)=>{
    const params = req.query;
    console.log("🚀 Search params : ", params);
    try{
        const response = await searchRecipe(params);
        res.status(200).send(response.hits);
    } catch(e){
        console.log('error', e);
    }
});

app.get('/random', async (req, res)=>{
    try{
        const response = await getRandomRecipe();
        data = response.hits.slice(0,6);
        res.status(200).send(data);
    } catch(e){
        console.log('error', e);
    }
});

app.get('/recipeInfo/:recipeID', async (req, res) => {
    try{ 
        const recipeID=req.params.recipeID;
        const recipeInfo = await  getSpecificRecipeInfo(recipeID);
        res.status(200).send(recipeInfo);
    } catch(e){
        res.status(400).send(error);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
