const { defaults } = require("jest-config");

module.exports = {
  testEnvironment: "jsdom",
  moduleFileExtensions: [
    ...defaults.moduleFileExtensions,
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
  ],
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "identity-obj-proxy",
  },
  reporters: [
    "default",
    ["./node_modules/jest-html-reporter", { pageTitle: "Hello Build Report" }],
  ],
  verbose: true,
  globals: {
    window: {
      BASE_URL: "",
      API_URL: "https://localhost:44358/api",
    },
  },
};
