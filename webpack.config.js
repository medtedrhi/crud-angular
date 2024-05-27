const path = require('path');

module.exports = {
  externals: {
    // Mark Bootstrap's SCSS file as external
    bootstrap: '@import "../node_modules/bootstrap/scss/bootstrap.scss";',
  },
};
