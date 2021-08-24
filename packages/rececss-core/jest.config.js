module.exports = {
  preset: "ts-jest",
  verbose: true,
  roots: ["<rootDir>/src/", "<rootDir>/tests/"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  clearMocks: true,
  testEnvironment: "node",
  testMatch: ["**/*.(test|spec).(js|ts|tsx)"],
  testPathIgnorePatterns: ["/node_modules/"],

  collectCoverageFrom: ["src/**/*.ts*"],
  coverageDirectory: "tests/coverage",
  coveragePathIgnorePatterns: ["/node_modules/"],
  // coverageThreshold: {
  //   global: {
  //     branches: 100,
  //     functions: 100,
  //     lines: 100,
  //     statements: 100,
  //   },
  // },
};
