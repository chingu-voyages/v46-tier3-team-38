// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const { DATABASE_URL = "postgres://pivhhgtx:FHxpgZ4AE0CYZxpsgBgLydX2KX-D5xLv@bubble.db.elephantsql.com/pivhhgtx" } = process.env;
export default {

  development: {
    client: 'postgresql',
    connection: DATABASE_URL,
    migrations: {
            directory: path.join(__dirname, "src", "db", "migrations"),
          },
    seeds: {
                  directory: path.join(__dirname, "src", "db", "seeds"),
                },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
