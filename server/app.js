const express = require("express");
const cors = require('cors');
const axios = require('axios');
const { getSpecificRecipeInfo } = require('./getSpecificRecipeInfo');
const { searchRecipe } = require('./searchRecipe');
const signUpRoute=require('./database/SignUp/route');
const loginRoute=require('./database/Login/route');
const forgetPasswordRoute=require('./database/ForgetPassword/route');
const app = express();
const port = 3000;


/** == 
 * Murali sorry, for some reason I couldn't access from my frontend to backend without commenting out   this option 
  my localhost was open localhost:5173 tho... 
*/

// const allowedOrigins = ['http://localhost:5173'];

// const corsOptions = {
//     origin: function (origin, callback) {
//         if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//             callback(null, true);
//         } else {
//             callback(new Error('Not allowed by CORS'));
//         }
//     },
// };

// app.use(cors(corsOptions));
app.use(cors());
app.use(express.json());
app.use('/',loginRoute);
app.use('/',signUpRoute);
app.use('/',forgetPasswordRoute);

app.get('/search', async (req, res)=>{
    let params = req.query;
    console.log("🚀 ~ file: app.js:28 ~ app.get ~ params:", params)
    try{
        const response = await searchRecipe(params);
        res.send(response.hits);
    } catch(e){
        console.log('error', e);
    }
});

app.get('/recipeInfo/:recipeID', async (req, res) => {

    getSpecificRecipeInfo(req.params.recipeID).then((recipeInfo) => {
        res.status(200).send(recipeInfo);
    }).catch((error) => {
        res.status(400).send(error);
    })

});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
