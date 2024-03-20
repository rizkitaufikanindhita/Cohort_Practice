import client from "./db/connection";

const addUsers = async (username: string, fullname: string, age: number) => {
  await client.connect();
  try {
    await client.query(`BEGIN`);
    const query = `INSERT INTO users (username, fullname, age) VALUES ($1, $2, $3)`;
    const values: any = [username, fullname, age];
    await client.query(query, values);
    await client.query(`COMMIT`);
  } catch (e) {
    console.log(`failed to add : ${e}`);
  } finally {
    await client.end();
  }
};

// addUsers("reysa@gmail.com", "reysa ayuningtyas wardani", 28);
