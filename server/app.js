const express = require("express");
const cors = require('cors');
const { getSpecificRecipeInfo } = require('./getSpecificRecipeInfo');

const app = express();
const port = 3000;

const allowedOrigins = ['http://localhost:5173'];

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
