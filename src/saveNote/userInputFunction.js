function addNote (){
    let noteStorage = [];
    let noteTitle = document.getElementById("titleInput").value;
    let noteDescription = document.getElementById("descriptionInput").value;
    let noteNotes = document.getElementById("noteInput").value;
    let noteDate = document.getElementById('dateInput').value;
    const noteDetails = {
        title:noteTitle,
        description:noteDescription,
        note:noteNotes,
        date:noteDate,
    }
    noteStorage.push(noteDetails);
    console.log(noteStorage);
    }
    export{addNote};