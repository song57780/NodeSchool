
var mymodule = require('./learnyounode_6_module');

mymodule(process.argv[2], process.argv[3], callback);


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