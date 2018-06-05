const fs=require('fs');
const os=require('os');
var a=10;
const variables=require('./variables.js');
var command=process.argv[2];
var para1=process.argv[3];
var para2=process.argv[4];

if(command==='read'){
	if(!para1){
		process.exit(0);
	}
	fs.readFile(para1,'utf8',function(err,data){
		if(err) throw err;
		console.log(data);
	});

}else if(command === 'write'){
	if(!para1 || !para2){
		process.exit(0);
	}
	fs.writeFile(para1,para2,function(err){
		if(err) throw err;
		console.log('data has been writen');
	});
}
else if (command === 'append'){
	if(!para1 || !para2){
		process.exit(0);
	}
	fs.appendFile(para1,para2,function(err){
		if(err) throw err;
		console.log('data has been modified');
	});
}

