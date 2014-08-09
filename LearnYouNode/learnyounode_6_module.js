module.exports = output;

function output(dir, ext, callback)
{
	var fs = require('fs');
	
	var strPattern = ".+" + ext + "$";

	var pattern = new RegExp(strPattern);

	fs.readdir(dir, callback);
 
}


