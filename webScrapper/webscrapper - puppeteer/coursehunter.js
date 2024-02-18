import puppeteer from "puppeteer";

const url = "https://coursehunter.net/";

const main = async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto(url);

  const allArticles = await page.evaluate(() => {
    const articles = document.querySelectorAll("article");

    return Array.from(articles)
      .slice(0, 10)
      .map((article) => {
        const title = article.querySelector("h3").innerText;
        const url = article.querySelector("a").href;
        const img = article.querySelector("img").src;
        return { title, url, img };
      });
  });

  // Log the result to the console
  console.log(allArticles);

  // Close the browser when done
  await browser.close();
};

main();
