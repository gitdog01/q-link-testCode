/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>', 'C:\\Users\\82105\\Documents\\code\\q-link-testCode'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  setupFiles: ['./jest.env.js'],
};
