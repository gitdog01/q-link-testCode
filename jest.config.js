/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  displayName: 'server',
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>', '/Users/mono/q-link-testCode'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  setupFiles: ['./jest.env.js'],
  testMatch: ['<rootDir>/server/**/*.test.ts'],
};
