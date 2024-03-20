import { Client } from "pg";
require("dotenv").config();

const client = new Client({
  connectionString: process.env.POSTGRESQL_URL,
});

export default client;
