const path = require('path');
let cdn = require("../dependencies.cdn");

module.exports = {
  resolve: function(dir) {
    return path.join(__dirname, '..', dir);
  },
  readEnv: (file) => {
    let {parsed} = require('dotenv').config({path: file});
    Object.keys(parsed).forEach(key => parsed[key] = JSON.stringify(parsed[key]));
    return parsed;
  },
  getExternals: () => {
    let externals = {};
    if (process.env.APP_CDN === "ON") {
      cdn.forEach(config => {
        externals[config.name] = config.library;
      });
    }

    return externals;
  },
  getCdnConfig: () => {
    let cdnConfig = {
      js: [],
      css: []
    };
    if (process.env.APP_CDN === "ON") {
      cdn.forEach(config => {
        if (config.js) cdnConfig.js.push(config.js);
        if (config.css) cdnConfig.css.push(config.css);
      });
    }
    return cdnConfig;
  }
};
