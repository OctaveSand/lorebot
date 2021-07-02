const glob = require("glob");

// recursively include all files in this directory (each of which, is one api-command

let allOfThem = {};
glob.sync(`${__dirname}/*.js`).forEach((file) => {
  allOfThem = { ...allOfThem, ...require(file) };
});

module.exports = allOfThem;
