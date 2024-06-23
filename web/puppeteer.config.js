const customJestConfig = {
  preset: 'jest-puppeteer',
  testTimeout: 30000,
  testMatch: ['<rootDir>/src/__test__/e2e/**/*.(test|spec).(js|jsx|ts|tsx)'],
  testEnvironmentOptions: {
    url: 'http://localhost:3000',
  },
};

module.exports = customJestConfig;
