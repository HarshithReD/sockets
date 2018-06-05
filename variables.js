var fs= require('fs');
var readNotes=()=>{
	try{
		var files=fs.readFileSync('notes_json.json','utf8');
		return JSON.parse(files);
		
	}catch(e){

	}

}
var writeInto = (notes) =>{
		fs.writeFileSync('notes_json.json',JSON.stringify(notes),function(err){
				if (err) throw err;
			});
		return;

}
var addNote = (title,body) => {
	var notes=[];
	var note={
		title,
		body
	}
	notes=readNotes();
	var duplicateNotes=notes.filter((note)=>note.title===title);
	if(duplicateNotes.length>0){
			notes.push(note);
			writeInto(notes)
		}
}
var getAllNotes = () => {
	var notes=[];
	
		notes=readNotes();

	for(var mkey in notes){
		console.log(JSON.stringify(notes[mkey].title)+' has '+JSON.stringify(notes[mkey].body));
	}
}
var getNote = (title) => {
	var notes=[];
		notes=readNotes();

	for(var mkey in notes){
			if (notes[mkey].title===title){
			console.log(JSON.stringify(notes[mkey].title)+' has '+JSON.stringify(notes[mkey].body));
		}
	}
}
var removeNote = (title) => {
	var notes=[];
	notes=readNotes();
	var filteredNotes=notes.filter((note)=>note.title!==title);
	
	writeInto(filteredNotes);
}
module.exports={
	addNote,
	getAllNotes,
	getNote,
	removeNote
}
