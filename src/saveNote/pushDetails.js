import { errorDiv } from "./errorDiv";
import { errorRemove } from "./errorRemove";
function pushDetails () {
const noteDetails = {
        noteTitle:document.getElementById("titleInput").value,
        noteDescription:document.getElementById("descriptionInput").value,
        noteNotes:document.getElementById("noteInput").value,
        noteDate:document.getElementById('dateInput').value,
    };
    if (noteDetails.noteTitle == ''){
        errorDiv();
    }
    else{
        if (localStorage.getItem('notes') == null) {
            const noteList = JSON.stringify([noteDetails]);
            localStorage.setItem('notes', noteList);
            errorRemove();
        }
        else {
            const newNote = JSON.parse(localStorage.getItem('notes'));
            const newNoteList = [...newNote, noteDetails];
            localStorage.setItem('notes', JSON.stringify(newNoteList));
            console.log(JSON.parse(localStorage.getItem('notes')))
            errorRemove();
        }
}
}
export {pushDetails}