// no file path and the module is not available globally so node looks to see if it exists in the node-modules folder.
var cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "I'm an open source moooodule"
  })
);
