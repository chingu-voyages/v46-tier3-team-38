//define all functions for signUp here
const pg = require('pg');
const conString = "postgres://pivhhgtx:FHxpgZ4AE0CYZxpsgBgLydX2KX-D5xLv@bubble.db.elephantsql.com/pivhhgtx";

// const client = new pg.Client(conString);
// client.connect(function (err) {
 
//   if (err) {
//     return console.error('could not connect to postgres', err);
//   }
//   // Query to create the "users" table if it doesn't exist
//   const createTableQuery = `
//   SELECT column_name, column_default
//   FROM information_schema.columns
//   WHERE table_name = 'your_table_name' AND column_name IN (
//       SELECT column_name
//       FROM information_schema.table_constraints AS tc
//       JOIN information_schema.key_column_usage AS kcu
//       ON tc.constraint_name = kcu.constraint_name
//       WHERE tc.constraint_type = 'PRIMARY KEY'
//       AND tc.table_name = 'users'
//   );
//     `;
//   client.query(createTableQuery, function (err, result) {
//     if (err) {
//       console.error('Error creating the table:', err);
//     } else {
//       console.log('Table "users" has been created or already exists.');
//       console.log(result.rows);
//     }
//     // Close the database connection
//     // await client.end();
//   });

  // Query to select all rows from the "users" table
//   const query = 'SELECT * FROM users';
//   client.query(query, async function (err, result) {
//     if (err) {
//       console.error('Error:', err);
//     } else {
//       console.log(result.rows.length,result.rowCount);
//     }
//     console.log(result.rows)
//     console.log(result.rows[result.rowCount-1].user_id);
//     // Close the database connection
//    await client.end();
//   });
// });




async function insertUserData(userData) {
  const client = new pg.Client(conString);
  try {
    await client.connect();
    
    // Check if the username already exists
    const usernameCheckQuery = 'SELECT COUNT(*) FROM users WHERE username = $1';
    const usernameCheckResult = await client.query(usernameCheckQuery, [userData.username]);

    const existingUserCount = parseInt(usernameCheckResult.rows[0].count);

    if (existingUserCount > 0) {
      throw new Error('Username already exists');
    }

    // INSERT query to add data to the "users" table
    const insertQuery = `
      INSERT INTO users (username, password, created_at, updated_at)
      VALUES ($1, $2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
      RETURNING user_id
    `;

    // Execute the query with user data as parameters
    const result = await client.query(insertQuery, [
      userData.username,
      userData.password,
    ]);

    // console.log(result);

    const insertedUserId = result.rows[0].user_id;
    console.log(`Data has been inserted with user_id: ${insertedUserId}`);
  } catch (error) {
    console.error('Error inserting data:', error);
    throw error;
  } finally {
    await client.end();
  }
}

module.exports = { insertUserData };