const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const port = 3000;
const fs = require("fs-extra");

const filepath = "D:/webScapper/detik.txt";

const app = express();

const url = "https://www.detik.com/";

let globalId = 0;

axios
  .get(url)
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    const articles = [];

    $(".media__title", html).each((index, element) => {
      const title = $(element).text();
      const titleTrim = title.trim();
      const url = $(element).find("a").attr("href");
      articles.push({
        id: globalId++,
        title: titleTrim,
        url,
      });
    });
    return fs.writeFile(filepath, JSON.stringify(articles, null, 2));
  })
  .then(() => {
    console.log("data berhasil didapat");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(port, () => {
  console.log(`server up at ${port}`);
});
