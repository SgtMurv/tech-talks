// not specified a file path so node looks to see if it is a global, built in module
const os = require("os");

const totalMemory = os.totalmem();
const freeMemory = os.freemem();

console.log("Total Memory: " + totalMemory);
console.log("Free Memory:  " + freeMemory);
