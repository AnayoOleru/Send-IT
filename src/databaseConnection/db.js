// creating tables in ElephantSQL
const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('connected to the database');
});

// export default (text, params) => pool.query(text, params);

/**
 * Creating Tables
 */
const createParcelTable = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
      parcel_table(
        user_id SERIAL PRIMARY KEY,
        parcel_id SERIAL PRIMARY KEY,
        name_of_item VARCHAR(128) NOT NULL,
        destination VARCHAR(128) NOT NULL,
        sendee_name VARCHAR(128) NOT NULL,
        sendee_phone_number REAL NOT NULL,
        city_or_town VARCHAR(128) NOT NULL,
        lga VARCHAR(128) NOT NULL,
        pickup_location VARCHAR(128) NOT NULL,
        security_question VARCHAR(128) NOT NULL,
        parcel_weight  REAL NOT NULL,
        answer VARCHAR(300) NOT NULL,
        status VARCHAR(40) NOT NULL,
      )`;
// pool query method with argument returns promised
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
 * deleting Tables
 */
const dropParcelTable = () => {
  const queryText = 'DROP TABLE IF EXISTS parcel_table returning *';
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
 * Creating All Tables
 * @returns 
 */
const createAllTables = () => {
  createParcelTable();
};
/**
 * delete all Tables
 * @returns
 */
const dropAllTables = () => {
  dropParcelTable();
};

pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});


module.exports = {
  createParcelTable,
  createAllTables,
  dropParcelTable,
  dropAllTables,
};

require('make-runnable');
