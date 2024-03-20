import client from "./db/connection";

const address = async () => {
  await client.connect();
  try {
    await client.query(`BEGIN`);
    const query = `CREATE TABLE address (id SERIAL PRIMARY KEY, users_id INTEGER NOT NULL, street VARCHAR(50) NOT NULL, city VARCHAR(50) NOT NULL, FOREIGN KEY (users_id) REFERENCES users(id))`;
    await client.query(query);
    await client.query(`COMMIT`);
  } catch (e) {
    console.log(`Error Creating Table : ${e}`);
  } finally {
    await client.end();
  }
};

// address();
