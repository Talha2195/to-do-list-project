import { clearContentPage } from "../miscModules/clearPage";
import { invokeAllProjecgsDom } from "./allProjectsDom";
import { deleteButtonFunction } from "../saveNote/deleteButton";
import { editNote } from "../saveNote/editButtonFunction";
function displayNotes () {
    clearContentPage();
    invokeAllProjecgsDom();
    const notes = JSON.parse(localStorage.getItem('notes'));
    if  (notes && notes.length > 0) {
        const noteContainer = document.getElementById('allProjectsSubDiv');
        notes.forEach(function(note, index){
            const noteDiv = document.createElement('div');
            noteDiv.classList.add('note');
            const titleElement = document.createElement('h2');
            titleElement.textContent = note.noteTitle;
            const dateElement = document.createElement('p');
            dateElement.textContent = note.noteDate;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function(){
                deleteButtonFunction(index,notes);
                noteDiv.remove();
            });
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit'; 
            editButton.addEventListener('click', function(){
                editNote(index,note);
        });
        noteDiv.appendChild(titleElement);
        noteDiv.appendChild(dateElement);
        noteDiv.appendChild(deleteButton);
        noteDiv.appendChild(editButton);
        noteContainer.appendChild(noteDiv);
        
        });
    }
    else{
        console.log('no notes');
    }
}
export{displayNotes};