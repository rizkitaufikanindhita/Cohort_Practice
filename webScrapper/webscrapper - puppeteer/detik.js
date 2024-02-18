import puppeteer from "puppeteer";
import fs from "fs-extra";

const url = "https://www.detik.com/";

const main = async () => {
  const filepath =
    "E:/Harkirat Singh Cohort/Cohort 2 MERN, Devops, System Design (from 0 to 100)/Practice/webScrapper/webscrapper - puppeteer/resultscrape.txt";

  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto(url);

  const bookData = await page.evaluate((url) => {
    let globalid = 0;
    let result = [];
    const books = document.querySelectorAll(".media__title");

    Array.from(books).map((book) => {
      let title = book.querySelector("a").innerText;
      let urlNews = book.querySelector("a").href;

      result.push({
        id: globalid++,
        title: title,
        url: urlNews,
      });
    });

    return result;
  }, url);

  // Write the data to the file
  await fs.writeFile(filepath, JSON.stringify(bookData, null, 2));
  await fs.writeFile("bookscrape.json", JSON.stringify(bookData, null, 2));

  // Log the result to the console
  console.log("Data berhasil didapat");

  // Close the browser when done
  await browser.close();
};

main();
