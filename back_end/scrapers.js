// const puppeteer = require("puppeteer");

// exports.scrapeProduct = async (url) => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     page.goto(url);

//     const [el] = await page.$x('//*[@id="priceblock_saleprice"]');
//     const txt = await el.getProperty("textContent");
//     const price = await txt.jsonValue();

//     return price;

//     browser.close();
// };
