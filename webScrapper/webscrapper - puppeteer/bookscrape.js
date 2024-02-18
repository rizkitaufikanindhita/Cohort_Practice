import puppeteer from "puppeteer";
import fs from "fs-extra";

const url = "https://books.toscrape.com/";

const main = async () => {
  const filepath =
    "E:/Harkirat Singh Cohort/Cohort 2 MERN, Devops, System Design (from 0 to 100)/Practice/webScrapper/webscrapper - puppeteer/bookscrape.txt";

  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto(url);

  const bookData = await page.evaluate((url) => {
    let globalid = 0;
    let result = [];
    const books = document.querySelectorAll(".product_pod");

    const convertPrice = (price) => {
      return parseFloat(price.replace("£", ""));
    };

    const convertRating = (rating) => {
      switch (rating) {
        case "One":
          return 1;
        case "Two":
          return 2;
        case "Three":
          return 3;
        case "Four":
          return 4;
        case "Five":
          return 5;
        default:
          return 0;
      }
    };

    Array.from(books).map((book) => {
      let title = book.querySelector("h3 a").getAttribute("title");
      let price = convertPrice(book.querySelector(".price_color").innerText);
      let imgurl = url + book.querySelector("img").getAttribute("src");
      let rating = convertRating(
        book.querySelector(".star-rating").classList[1]
      );
      result.push({
        id: globalid++,
        title: title,
        price: price,
        imgurl: imgurl,
        rating: rating,
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
