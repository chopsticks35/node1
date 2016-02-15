//set up file system
var fs = require('fs');

var fileContents = fs.readFileSync('data.txt', 'utf-8');

console.log(fileContents);

module.exports = {
    fileContents: fileContents
}