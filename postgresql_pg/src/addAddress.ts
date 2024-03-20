import client from "./db/connection";

const addAddress = async (users_id: number, street: string, city: string) => {
  await client.connect();
  try {
    await client.query(`BEGIN`);
    const query = `INSERT INTO address (users_id, street, city) VALUES ($1, $2, $3)`;
    const values: any = [users_id, street, city];
    await client.query(query, values);
    await client.query(`COMMIT`);
  } catch (e) {
    console.log(`failed to add : ${e}`);
  } finally {
    await client.end();
  }
};

// addAddress(2, "Dukuh Sukorejo Wedi", "Klaten");
