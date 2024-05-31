import { clearContentPage } from "../miscModules/clearPage";
import { invokeAllProjecgsDom } from "./allProjectsDom";
import { invokeEditButtonDom } from "../saveNote/editButtonDom";
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
                notes.splice(index, 1);
                localStorage.setItem('notes', JSON.stringify(notes));
                noteDiv.remove();
            });
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit'; 
            editButton.addEventListener('click', function(){
                clearContentPage();
                invokeEditButtonDom();
                document.getElementById('titleInput').value = note.noteTitle;
                document.getElementById('descriptionInput').value = note.noteDescription;
                document.getElementById('noteInput').value = note.noteNotes;
                document.getElementById('dateInput').value = note.noteDate;
        });
        noteDiv.appendChild(titleElement);
        noteDiv.appendChild(dateElement);
        noteDiv.appendChild(deleteButton);
        noteDiv.appendChild(editButton);
        noteContainer.appendChild(noteDiv);
        editButton.addEventListener('click', function() {
        document.getElementById('editButton').addEventListener('click',function(){
            notes [index].noteTitle = document.getElementById('titleInput').value;
            notes [index].noteDescription = document.getElementById('descriptionInput').value;
            notes [index].noteNotes = document.getElementById('noteInput').value;
            notes [index].noteDate = document.getElementById('dateInput').value;
            localStorage.setItem('notes', JSON.stringify(notes));
            displayNotes();
        });
        });
        }
        )
    }
    else{
        console.log('no notes');
    }
}
export{displayNotes};