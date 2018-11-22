
// connect to postgres
const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('connected to the db');
});

// export default (text, params) => pool.query(text, params);

/**
 * Create Tables
 */
const createParcelTable = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
      parcel_db(
        parcel_id UUID PRIMARY KEY,
        user_id UUID NOT NULL,
        name_of_item VARCHAR(300) NOT NULL,
        destination VARCHAR(300) NOT NULL,
        sendee_name VARCHAR(300) NOT NULL,
        sendee_phone_number VARCHAR(300) NOT NULL,
        city_or_town TIMESTAMP,
        LGA VARCHAR(300) NOT NULL,
        pickup_location VARCHAR(300) NOT NULL,
        security_question VARCHAR(300) NOT NULL,
        parcel_weight REAL NOT NULL,
        answer VARCHAR(300) NOT NULL,
        status VARCHAR(40) NOT NULL,
        FOREIGN KEY (sender_id) REFERENCES users (id) ON DELETE CASCADE
      )`;

  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

/**
 * Drop Tables
 */
const dropParcelTable = () => {
  const queryText = 'DROP TABLE IF EXISTS parcelorders returning *';
  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

/**
 * Create User Table
 */
const createUserTable = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
      user_db(
        id UUID PRIMARY KEY NOT NULL,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(128) UNIQUE NOT NULL,
        password VARCHAR(128) NOT NULL,
        isAdmin BOOLEAN DEFAULT false,
        created_date DATE DEFAULT CURRENT_DATE     
      )`;

  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

/**
 * Drop User Table
 */
const dropUserTable = () => {
  const queryText = 'DROP TABLE IF EXISTS users returning *';
  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

/**
 * Create All Tables
 */
const createAllTables = () => {
  createUserTable();
  createParcelTable();
};
/**
 * Drop All Tables
 */
const dropAllTables = () => {
  dropUserTable();
  dropParcelTable();
};

pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});


module.exports = {
  createParcelTable,
  createUserTable,
  createAllTables,
  dropUserTable,
  dropParcelTable,
  dropAllTables,
};

require('make-runnable');