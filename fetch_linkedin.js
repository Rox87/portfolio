const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  try {
    const browser = await chromium.launchPersistentContext(
      'C:\\Users\\rodri\\AppData\\Local\\Google\\Chrome\\User Data',
      {
        headless: false,
        channel: 'chrome',
      }
    );

    const page = await browser.newPage();
    await page.goto('https://www.linkedin.com/in/rodrigoheloani/?_l=pt_BR', { waitUntil: 'domcontentloaded' });
    
    // Scroll a bit to load lazy elements
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(5000);
    
    const html = await page.content();
    fs.writeFileSync('linkedin_profile.html', html);
    
    await browser.close();
    console.log('Successfully saved to linkedin_profile.html');
  } catch (err) {
    console.error('Error:', err);
  }
})();
