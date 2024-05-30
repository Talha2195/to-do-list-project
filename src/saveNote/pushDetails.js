import { localStore } from "./storeLocalSotrage";
function pushDetails () {
const noteDetails = {
        noteTitle:document.getElementById("titleInput").value,
        noteDescription:document.getElementById("descriptionInput").value,
        noteNotes:document.getElementById("noteInput").value,
        noteDate:document.getElementById('dateInput').value,
    };
     const errorDiv = document.getElementById('errorMessage'); 
    if (noteDetails.noteTitle.trim() === '') {
        errorDiv.style.display = 'block';
    }
    else {
        errorDiv.style.display = 'none';
        localStore(noteDetails);
    }
}
export {pushDetails}