const path = require('path');

module.exports = {
    onDemandEntries: {
        maxInactiveAge: 1000 * 60 * 1000,
        pagesBufferLength: 1000,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },    
};