module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testTimeout: 70000,
    coveragePathIgnorePatterns: ['<rootDir>/dist/'],
    testMatch: ["**/tests/*.test.ts"]
  };