var fs = require('fs');

var new_line_count = 0;
var argv = process.argv[2].toString();
//var argv = 'C:/Users/Jayashree/ReadFileContents.txt';
function callbackFun(argv) {
	fs.readFile(argv, function callbackRead(err, contents) {
		if (err) { 
			return console.error(err);
		} else {
	 		console.log(new_line_count = contents.toString().split('\n').length - 1);
		}
	});
}
callbackFun(argv);

/* Learnyounode code 
var fs = require('fs')
    var file = process.argv[2]

    fs.readFile(file, function (err, contents) {
      if (err) {
        return console.log(err)
      }
      // fs.readFile(file, 'utf8', callback) can also be used
      var lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })
*/