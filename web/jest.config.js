const customJestConfig = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^next/router$': require.resolve('next-router-mock'),
  },
  testMatch: ['<rootDir>/src/__test__/unit/**/*.(test|spec).(js|jsx|ts|tsx)'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest'],
  },
};

module.exports = customJestConfig;
