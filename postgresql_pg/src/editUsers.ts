import client from "./db/connection";

const editUsers = async (id: number, age: number) => {
  await client.connect();
  try {
    await client.query(`BEGIN`);
    const query = `UPDATE users SET age = $2 WHERE users.id = $1`;
    const values: any = [id, age];
    await client.query(query, values);
    await client.query(`COMMIT`);
  } catch (e) {
    console.log(`failed to add : ${e}`);
  } finally {
    await client.end();
  }
};

// editUsers(1, 29);
