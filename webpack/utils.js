const path = require('path')

module.exports = {
    resolve: function (dir) {
        return path.join(__dirname, '..', dir)
    },
    readEnv: (file)=> {
      const { parsed} = require('dotenv').config({ path: file})
      Object.keys(parsed).forEach(key=>parsed[key] = JSON.stringify(parsed[key]))
      return parsed;
    }
}
