const pg = require('pg');
require('dotenv').config();
const conString = process.env.DATABASE;

async function addRecipeToBookMark(username, newRecipeId) {
    const client = new pg.Client(conString);
    try {
        await client.connect();

        const addRecipeToBookmarksQuery = `
        INSERT INTO bookmarks_and_favourites (username, bookmarks)
        VALUES ($1, ARRAY[$2])
        ON CONFLICT (username)
        DO UPDATE SET bookmarks = array_append(bookmarks_and_favourites.bookmarks, $2);
        `;

        // Execute query to add recipe to bookmarks
        await client.query(addRecipeToBookmarksQuery, [username, newRecipeId]);

        console.log('Recipe added to bookmarks successfully');

    } catch (error) {
        console.error('Error in adding recipe to bookmarks : ', error);
        throw error;
    } finally {
        await client.end();
    }
}

async function removeRecipeFromBookMark(username, recipeIdToRemove) {
    const client = new pg.Client(conString);
    try {
        await client.connect();

        const removeRecipeFromBookmarksQuery = `
        UPDATE bookmarks_and_favourites
        SET bookmarks = array_remove(bookmarks_and_favourites.bookmarks, $1)
        WHERE username = $2;
        `;

        // Execute query to remove recipe from bookmarks
        await client.query(removeRecipeFromBookmarksQuery, [recipeIdToRemove, username]);

        console.log('Recipe removed from bookmarks successfully');

    } catch (error) {
        console.error('Error in removing recipe to bookmarks : ', error);
        throw error;
    } finally {
        await client.end();
    }
}

async function addRecipeToFavourites(username, newRecipeId) {
    const client = new pg.Client(conString);
    try {
        await client.connect();
        const addRecipeToFavoritesQuery = `
        INSERT INTO bookmarks_and_favourites (username, favourites)
        VALUES ($1, ARRAY[$2])
        ON CONFLICT (username)
        DO UPDATE SET favourites = array_append(bookmarks_and_favourites.favourites, $2);
        `;

        // Execute query to add recipe to favourites
        await client.query(addRecipeToFavoritesQuery, [username, newRecipeId]);
        console.log('Recipe added to favorites successfully');

    } catch (error) {
        console.error('Error in adding recipe to favourites : ', error);
        throw error;
    } finally {
        await client.end();
    }
}

async function removeRecipesFromFavourites(username, recipeIdToRemove) {
    const client = new pg.Client(conString);
    try {
        await client.connect();
        const removeRecipeFromFavoritesQuery = `
        UPDATE bookmarks_and_favourites
        SET favourites = array_remove(bookmarks_and_favourites.favourites, $1)
        WHERE username = $2;
        `;

        // Execute query to remove recipe from favourites
        await client.query(removeRecipeFromFavoritesQuery, [recipeIdToRemove, username]);
        console.log('Recipe added to favorites successfully');

    } catch (error) {
        console.error('Error in removing recipe to favourites : ', error);
        throw error;
    } finally {
        await client.end();
    }
}

async function getAllBookmarksAndFavourites(username) {
    const client = new pg.Client(conString);
    try {
        await client.connect();
        const getAllBookmarksAndFavoritesQuery = `
        SELECT bookmarks, favourites FROM bookmarks_and_favourites
        WHERE username = $1;
        `;

        // Execute query to retrieve all bookmarks and favorites
        const result = await client.query(getAllBookmarksAndFavoritesQuery, [username]);

        const userData = result.rows[0];

        const BookmarksAndFavourites = { 
            bookmarks: userData.bookmarks, 
            favourites: userData.favourites 
        }

        return BookmarksAndFavourites;

    } catch (error) {
        console.error('Error in getting all bookmarks and favourites : ', error);
        throw error;
    } finally {
        await client.end();
    }
}

module.exports = { addRecipeToBookMark, removeRecipeFromBookMark, addRecipeToFavourites, removeRecipesFromFavourites, getAllBookmarksAndFavourites }