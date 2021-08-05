const path = require('path');
const webpack = require("webpack");

module.exports = {
    onDemandEntries: {
        maxInactiveAge: 1000 * 60 * 1000,
        pagesBufferLength: 1000,
    },    
    webpack: (config, { isServer }) => {
        const rules = config.module.rules;
        return config;
    },
    eslint: {
        ignoreDuringBuilds: true,
    },    
};