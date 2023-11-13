//define all functions for login here
const pg = require('pg');
const bcrypt = require("bcryptjs");
const { createJWTToken } = require('../helper/createjwtToken');
require('dotenv').config();

const conString = process.env.DATABASE;

async function checkUsernameAndPasswordMatch(userData) {
  const client = new pg.Client(conString);
  try {
    await client.connect();

    // Query to retrieve user data including the password
    const checkQuery = 'SELECT username, password FROM users WHERE username = $1';

    const checkResult = await client.query(checkQuery, [userData.username]);
    const matchingRowCount = parseInt(checkResult.rows.length);
    // console.log(checkResult);


    if (matchingRowCount === 1) {
      const encryptedPassword = checkResult.rows[0]['password'];

      //compare encrypted password with the password user has enter
      const passwordMatch = await bcrypt.compare(userData.password, encryptedPassword);

      if (passwordMatch) {
        console.log('Username and password match in one row.');

        //create jwt token
        return createJWTToken(userData.username);

      }else{
        throw new Error('Username and password do not exists');
      }

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

module.exports = { checkUsernameAndPasswordMatch };