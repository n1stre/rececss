module.exports = {
  preset: "ts-jest",
  verbose: true,
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "^@mocks/(.*)$": "<rootDir>/__tests__/mocks/$1",
    "^@fixtures/(.*)$": "<rootDir>/__tests__/fixtures/$1",
    "^@entities/(.*)$": "<rootDir>/src/1_entities/$1",
    "^@usecases/(.*)$": "<rootDir>/src/2_usecases/$1",
    "^@shared/(.*)$": "<rootDir>/src/shared/$1",
  },

  testEnvironment: "node",
  testMatch: ["**/*.(test|spec).(js|ts|tsx)"],
  testPathIgnorePatterns: ["/node_modules/"],

  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts*"],
  coverageDirectory: "__tests__/coverage",
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
