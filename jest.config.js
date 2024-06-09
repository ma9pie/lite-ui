const customJestConfig = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ['<rootDir>/src/**/*.test.(js|jsx|ts|tsx)'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest'],
  },
};

module.exports = customJestConfig;
