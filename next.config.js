const webpack = require("webpack");

module.exports = {
  webpack: function (config, options) {
    config.experiments = {};
    return config;
  },
};