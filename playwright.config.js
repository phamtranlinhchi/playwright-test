export default {
    use: {
      headless: true,
      ignoreHTTPSErrors: true, 
      baseURL: 'https://10.98.100.180',
    },
    // retries: 2,
    timeout: 30000,
    reporter: [['list'], ['./utils/test-reporter.js']]
  };
  