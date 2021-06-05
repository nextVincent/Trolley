module.exports = {
  roots: ['<rootDir>/src/'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'json'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  testMatch: [
    '<rootDir>/src/__test__/*.spec.(js|jsx|ts|tsx)',
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
