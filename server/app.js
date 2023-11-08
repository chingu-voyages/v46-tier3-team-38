const express = require("express");
const cors = require('cors');
const { getSpecificRecipeInfo } = require('./functions_api/getSpecificRecipeInfo');
const { searchRecipe, getRandomRecipe } = require('./functions_api/searchRecipe');
const axios = require('axios');
const { getSpecificRecipeInfo } = require('./getSpecificRecipeInfo');

const signUpRoute=require('./database/SignUp/route');
const loginRoute=require('./database/Login/route');
const forgetPasswordRoute=require('./database/ForgetPassword/route');


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
app.use('/',loginRoute);
app.use('/',signUpRoute);
app.use('/',forgetPasswordRoute);

app.get('/search', async (req, res)=>{
    const params = req.query;
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
        res.status(400).send(e);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
