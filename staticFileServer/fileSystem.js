//set up file system
var fs = require('fs');

// changing to asynchronous -->
// var fileContents = fs.readFileSync('data.txt', 'utf-8');


var fileContents = fs.readFile('data.txt', function(err, data){
    if (err){
       return console.error(err); 
    } else {
        console.log("Asynch data: " + data.toString());
    } 
});



// console.log(fileContents);

// module.exports = {
//     fileContents: fileContents
// }