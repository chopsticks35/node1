//args passes at command line
var r = process.argv[2];
var g = process.argv[3];
var b = process.argv[4];

//calc
var luminosity = 0.2126*r + 0.7152*g + 0.0722*b

// if stmnt for logic to print light and dark
if (luminosity > 155) {
    console.log('light');
}
else {
    console.log('dark');
}

// var isLight = luminosity > 155;

// console.log(isLight ? 'light' : 'dark');

