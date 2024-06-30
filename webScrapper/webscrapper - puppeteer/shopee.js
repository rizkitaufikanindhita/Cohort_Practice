import puppeteer from 'puppeteer';

const scrapeProducts = async (url) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });

  // Increase the timeout duration to 60 seconds
  await page.waitForTimeout(10000); // Wait for 10 seconds to make sure page is fully loaded

  // Use a broader selector initially to confirm elements are being selected
  const products = await page.evaluate(() => {
    let globalid = 0;

    // Use document.querySelectorAll to get all div elements (broader selector)
    const items = document.querySelectorAll('div');

    // Filter items to those containing product details
    const productItems = Array.from(items).filter(item => 
      item.querySelector('[class*="OWkG6oHwAppMn1hIBsC3pQ=="]') &&
      item.querySelector('[class*="_8cR53N0JqdRc+mQCckhS0g=="]')
    );

    // Map over the items to extract details
    return productItems.map(item => {
      const name = item.querySelector('[class*="OWkG6oHwAppMn1hIBsC3pQ=="]')?.innerText || 'No name';
      const price = item.querySelector('[class*="_8cR53N0JqdRc+mQCckhS0g=="]')?.innerText || 'No price';
      const imgSrc = item.querySelector('[class*="css-1c345mg"]')?.getAttribute('src') || 'No image';

      return {
        id: globalid++,
        name: name,
        price: price,
        imgSrc: imgSrc
      };
    });
  });

  await browser.close();
  return products;
};

// Example usage:
scrapeProducts('https://www.tokopedia.com/search?st=&q=nb%20550&srp_component_id=02.01.00.00&srp_page_id=&srp_page_title=&navsource=')
  .then(products => console.log(JSON.stringify(products, null, 2))) // Output result as JSON
  .catch(error => console.error(error));

