exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  // seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  specs: ['test/e2e/*.spec.js'],
  baseUrl: 'http://localhost:3000', //default test port with Yeoman
  capabilities: {
    browserName: 'chrome'
  }
};
