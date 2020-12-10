module.exports = {
  preset: "ts-jest",
  verbose: true,
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  testEnvironment: "node",
  testMatch: ["**/*.(test|spec).(js|ts|tsx)"],
  testPathIgnorePatterns: ["/node_modules/"],

  collectCoverage: false,
  collectCoverageFrom: ["src/**/*.ts*"],
  coverageDirectory: "tests/coverage",
  coveragePathIgnorePatterns: ["/node_modules/"],
  coverageReporters: ["json", "lcov", "text", "text-summary"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
