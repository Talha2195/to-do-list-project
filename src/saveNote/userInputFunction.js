let noteStorage = [];
function addNote (){
    let noteTitle = document.getElementById('titleInput').value;
    let noteDescription = document.getElementById('descriptionInput').value;
    let noteNotes = document.getElementById('noteInput').value;
    const noteDetails = {
        title:noteTitle,
        description:noteDescription,
        note:noteNotes,
    }
    noteStorage.push(noteDetails);
    console.log(noteStorage);
    }
    export{addNote};