module.exports = {
  launch: {
    headless: true,
    product: 'chrome',
  },
  server: {
    command: 'npm run dev',
    port: 3000,
    launchTimeout: 30000,
    debug: true,
  },
};
