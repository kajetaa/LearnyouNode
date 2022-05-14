
let mymodule = require('./mymodule.js');
let dir = process.argv[2];
let extName = process.argv[3];

mymodule(dir,extName,function(err,data){
	if(err){
		console.log(err);
	}
	data.forEach(function(file){
		console.log(file);
	})
});   