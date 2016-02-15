//set rgb values as arguments from the command line
var r = process.argv[2];
var g = process.argv[3];
var b = process.argv[4];

//calc luminosity
var luminosity = 0.2126*r + 0.7152*g + 0.0722*b;

//logic for light and dark
var isLight = luminosity > 155;
console.log(isLight ? 'light' : 'dark');