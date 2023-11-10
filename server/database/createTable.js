//create any new table here
// const pg = require('pg');
// require('dotenv').config();
// const conString = process.env.DATABASE;

// const client = new pg.Client(conString);
// client.connect(function (err) {
//     if (err) {
//         return console.error('could not connect to postgres', err);
//     }
//     // Create user_data table
//     const createUserDataTableQuery = `
//   CREATE TABLE IF NOT EXISTS bookmarks_and_favourites (
//     id SERIAL PRIMARY KEY,
//     username VARCHAR(255) UNIQUE,
//     bookmarks TEXT[] DEFAULT ARRAY[]::TEXT[],
//     favourites TEXT[] DEFAULT ARRAY[]::TEXT[]
//   );
// `;

//     // Execute query to create the table
//     client.query(createUserDataTableQuery, async(err, res) => {
//         if (err) {
//             console.error(err);
//         } else {
//             console.log('User Data table created successfully');
//         }

//         // Close the database connection
//         await client.end();
//     });
// });