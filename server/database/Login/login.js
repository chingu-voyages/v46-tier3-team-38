//define all functions for login here
const pg = require('pg');
const conString = "postgres://pivhhgtx:FHxpgZ4AE0CYZxpsgBgLydX2KX-D5xLv@bubble.db.elephantsql.com/pivhhgtx";

async function checkUsernameAndPasswordMatch(userData) {
  const client = new pg.Client(conString);
  try {
    await client.connect();

    // Query to check if a row with the given username and password exists
    const checkQuery = 'SELECT COUNT(*) FROM users WHERE username = $1 AND password = $2';
    const checkResult = await client.query(checkQuery, [userData.username, userData.password]);

    const matchingRowCount = parseInt(checkResult.rows[0].count);

    if (matchingRowCount === 1) {
      console.log('Username and password match in one row.');
    } else {
        throw new Error('Username and password do not exists');
    }
  } catch (error) {
    console.error('Error checking username and password:', error);
    throw error;
  } finally {
    await client.end();
  }
}

module.exports={checkUsernameAndPasswordMatch};