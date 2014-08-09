var fs = require('fs');

fs.readdir(process.argv[2], callback);

var strPattern = ".+" + process.argv[3] + "$";

var pattern = new RegExp(strPattern);

function callback (err, list)
{
	if(err)	throw err;

	for(var s in list)
	{
 		if(list[s].match(pattern))
		{
			console.log(list[s]);
		}
	}
}


