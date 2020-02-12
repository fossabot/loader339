const { dirname } = require('path');
const parentDirname = dirname(__dirname);

/** @type {string} */
const projectRoot = parentDirname;

exports = {
  projectRoot,
  default: {
    projectRoot,
  },
};
