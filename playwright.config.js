// playwright.config.js
module.exports = {
    use: {
      headless: true,
      ignoreHTTPSErrors: true, 
      baseURL: 'https://10.98.100.180',
    },
    timeout: 20000,
  };
  