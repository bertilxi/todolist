require = require("esm")(module);
require("ts-node/register/transpile-only");
module.exports = require("./main").start();
