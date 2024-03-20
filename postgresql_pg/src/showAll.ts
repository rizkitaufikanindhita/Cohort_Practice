import client from "./db/connection";

const showAll = async (id: number) => {
  await client.connect();

  try {
    await client.query(`BEGIN`);
    const query = `SELECT u.id, u.username, u.fullname, u.age, a.street, a.city FROM users u LEFT JOIN address a ON u.id = a.users_id WHERE u.id = $1`;
    const values: any = [id];
    const result = await client.query(query, values);
    await client.query("COMMIT");
    console.log(result.rows);
  } catch (e) {
    console.log(`failed to show all data : ${e}`);
  } finally {
    await client.end();
  }
};

showAll(1);
