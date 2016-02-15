var fs = require('fs');

var sourceFile = process.argv[2];

var notesText = fs.readFileSync(sourceFile, 'utf-8');

console.log(notesText);

var copyFile = process.argv[3];

fs.writeFileSync('desitnation.txt', notesText);