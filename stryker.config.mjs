// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  _comment:
    "This config was generated using 'stryker init'. Please see the guide for more information: https://stryker-mutator.io/docs/stryker-js/guides/react",
  testRunner: "jest",
  // "projectType": "custom",
  reporters: ["progress", "clear-text", "html"],
  // coverageAnalysis: "all",
  // configFile: "jest.config.js",
  "jest": {
    "projectType": "custom",
    "configFile": "jest.config.js",
    // "config": {
    //   "testEnvironment": "jest-environment-jsdom-sixteen"
    // },
    "enableFindRelatedTests": true
  }
};
export default config;
