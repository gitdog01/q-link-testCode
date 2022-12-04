const nextJest = require('next/jest');
const createJestConfig = nextJest({
  dir: './',
});
const customJestConfig = {
  displayName: 'client',
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['<rootDir>/pages/**/*.test.tsx'],
};
module.exports = createJestConfig(customJestConfig);
