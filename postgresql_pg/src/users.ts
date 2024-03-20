import client from "./db/connection";

const createTableUser = async () => {
  await client.connect();
  try {
    await client.query("BEGIN");
    const query = `CREATE TABLE users (id SERIAL PRIMARY KEY, username VARCHAR(50) UNIQUE NOT NULL, fullname VARCHAR(50) NOT NULL, age INTEGER NOT NULL, created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP)`;
    await client.query(query);
    await client.query("COMMIT");
  } catch (e) {
    console.log(`Error Creating Table : ${e}`);
  } finally {
    await client.end();
  }
};

// createTableUser();
