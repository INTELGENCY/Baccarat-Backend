/** @type {import('next').NextConfig} */
require("dotenv").config();

module.exports = {
  output: "export",
  webpack: (config) => {
    config.plugins.push(new (require("dotenv-webpack"))());
    return config;
  },
  basePath: "/adminpanel",
  // Other configurations go here
};
