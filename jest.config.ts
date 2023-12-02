import type { Config } from "jest";

const config: Config = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "node",
  rootDir: "src",
  coverageDirectory: "../coverage",
};

export default config;
