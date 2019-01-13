var fs = require('fs');

var path = process.argv[2];
var file_list;
var path_ext = require('path');
var EXTENSION = '.md';

fs.readdir(path, function callback(err, list) {
	if (err) {
		return console.error(err); 
	} else {
		file_list = list;
	}
	var targetFiles = file_list.filter(function(file) {
    if (path_ext.extname(file).toLowerCase() === EXTENSION) {
    console.log(file);
	}
	});
}); 

/*
   var fs = require('fs')
    var path = require('path')

    var folder = process.argv[2]
    var ext = '.' + process.argv[3]

    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    }) */

