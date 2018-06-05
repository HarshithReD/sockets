const variables=require('./variables.js');
// variables.addNote(process.argv[2],process.argv[3]);
var command=process.argv[2];
var par1=process.argv[3];
var par2=process.argv[4];
console.log('1.Add a note, 2.Get all notes ,3.Get a Particular note,4.Remove a particular note');
if(command ==='1'){
	addNote(par1,par2);
	console.log('Note added');
}else if(command ==='2'){
	getAllNotes();
	
}else if(command ==='3'){
	getNote(par1);
	
}else if(command ==='4'){
	removeNote(par1);
	console.log('Note Removed');
}