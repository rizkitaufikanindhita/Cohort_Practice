const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const response = require("./response");

app.use(express.json());

let users = [
  {
    name: "rizki",
    kidneys: [
      {
        healthy: true,
      },
    ],
  },
  {
    name: "jojo",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
  {
    name: "anindhita",
    kidneys: [
      {
        healthy: true,
      },
    ],
  },
  {
    name: "Reysa",
    kidneys: [
      {
        healthy: true,
      },
    ],
  },
];

try {
  app.get("/", (req, res) => {
    let jumlahKidneysSehat = 0;
    let jumlahKidneysSakit = 0;
    let jumlahKidneys = users.length;
    users.filter((e) => {
      if (e["kidneys"][0]["healthy"] == true) {
        jumlahKidneysSehat += 1;
      } else {
        jumlahKidneysSakit += 1;
      }
    });
    response(
      200,
      { jumlahKidneys, jumlahKidneysSehat, jumlahKidneysSakit },
      res
    );
  });

  app.post("/", (req, res) => {
    const { name, kidneys } = req.body;
    users.push({ name, kidneys });
    response(200, "data berhasil ditambah", res);
  });

  app.put("/", (req, res) => {
    const { name, kidneys } = req.body;
    for (let i = 0; i < users.length; i++) {
      if (users[i]["name"] === name) {
        users[i]["kidneys"].pop();
        users[i]["kidneys"].push(kidneys[0]);
      }
    }
    response(200, "data berhasil diubah", res);
  });

  app.delete("/", (req, res) => {
    const { name } = req.body;

    let listNama = [];
    for (let i = 0; i < users.length; i++) {
      listNama.push(users[i]["name"]);
    }
    let ada = listNama.includes(name);
    if (!ada) {
      response(411, "tidak ada data", res);
    }

    users.filter((e) => {
      if (e["name"] === name) {
        const index = users.indexOf(e);
        users.splice(index, 1);
      }
    });

    response(200, "data berhasil dihapus", res);
  });

  app.listen(port, () => {
    console.log(`Server up in port = ${port}`);
  });
} catch (err) {
  response(404, err, res);
}

// query => http://localhost:3000/?role=admin
// params => http://localhost:3000/:name => const userName = req.params.name;
