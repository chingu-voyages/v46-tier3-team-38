const router = require("express").Router();
const { addRecipeToBookMark, removeRecipeFromBookMark, addRecipeToFavourites, removeRecipesFromFavourites,getAllBookmarksAndFavourites } = require("./bookmarksandfavourites");


router.post('/bookmarks', async (req, res) => {
    try {
        const username=req.body.username;
        const recipeID = req.body.recipeID;
        const isAdd = req.body.isAdd;
        if(isAdd){
            await addRecipeToBookMark(username,recipeID);
        }else{
            await removeRecipeFromBookMark(username,recipeID);
        }
        res.sendStatus(200);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post('/favourites', async (req, res) => {
    try {
        const username=req.body.username;
        const recipeID = req.body.recipeID;
        const isAdd = req.body.isAdd;
        if(isAdd){
            await addRecipeToFavourites(username,recipeID);
        }else{
            await removeRecipesFromFavourites(username,recipeID);
        }
        res.sendStatus(200);
    } catch (error) {
        res.status(400).send(error);
    }
});


router.post('/allBookmarksAndFavourites', async (req, res) => {
    try {
        const username=req.body.username;
        const allBookmarksAndFavourites=await getAllBookmarksAndFavourites(username);
        res.status(200).send(allBookmarksAndFavourites);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;