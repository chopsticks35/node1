console.log('hello world!');
console.log(process.argv.slice(2));



var foo = 10;
var secret = 'this is a secret';
var bar = function(){
    console.log(secret);
}

module.exports = {
    foo : foo;
    bar : bar;
}
