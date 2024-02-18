const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const port = 3000;
const fs = require("fs-extra");

const filepath =
  "E:/Harkirat Singh Cohort/Cohort 2 MERN, Devops, System Design (from 0 to 100)/Practice/webScrapper - Shopee/shopee.txt";

const app = express();

const url = "https://shopee.co.id/";

let globalId = 0;

axios
  .get(url)
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    const articles = [];

    $(".A0AMX9 Zs22Ks", html).each((index, element) => {
      // const title = $(element).text();
      // const titleTrim = title.trim();
      const url = $(element).find("img").attr("src");
      articles.push({
        id: globalId++,
        // title: titleTrim,
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
