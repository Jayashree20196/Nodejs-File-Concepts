var fs = require('fs');
var argv = process.argv.slice(2);
var contents = fs.readFileSync(argv.toString()); 
var no_buffer = contents.toString();
var new_line_count = no_buffer.split('\n').length;
console.log(new_line_count - 1);


/* Learnyounode Code
    var fs = require('fs')
    var contents = fs.readFileSync(process.argv[2])
    var lines = contents.toString().split('\n').length - 1
    console.log(lines) */