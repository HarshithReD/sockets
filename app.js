const fs=require('fs');
fs.appendFile('message.txt','This is an example',function(err){
	if (err) throw err;
	console.log('data has been appended!');
})