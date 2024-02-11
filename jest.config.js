/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    globals: {
      'ts-jest': {
        isolatedModules: true,
      },
    },
    setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
  };
  