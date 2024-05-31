import { invokeEditButtonDom } from "../saveNote/editButtonDom";
import { clearContentPage } from "../miscModules/clearPage";
import { displayNotes } from "../allProjects/displayNotes";
function editNote (index,note) {
    clearContentPage();
    invokeEditButtonDom();
    document.getElementById('titleInput').value = note.noteTitle;
    document.getElementById('descriptionInput').value = note.noteDescription;
    document.getElementById('noteInput').value = note.noteNotes;
    document.getElementById('dateInput').value = note.noteDate;
    document.getElementById('editButton').addEventListener('click',function(){
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes [index].noteTitle = document.getElementById('titleInput').value;
        notes [index].noteDescription = document.getElementById('descriptionInput').value;
        notes [index].noteNotes = document.getElementById('noteInput').value;
        notes [index].noteDate = document.getElementById('dateInput').value;
        localStorage.setItem('notes', JSON.stringify(notes));
        displayNotes();
});
}
export {editNote};