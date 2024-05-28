import { errorDiv } from "./errorDiv";
import { straingified } from "../miscModules/stringify";
import { parsified } from "../miscModules/parse";
import { pushNote } from "../miscModules/localStoragePush";
function pushDetails () {
const noteDetails = {
        noteTitle:document.getElementById("titleInput").value,
        noteDescription:document.getElementById("descriptionInput").value,
        noteNotes:document.getElementById("noteInput").value,
        noteDate:document.getElementById('dateInput').value,
    };
    if (localStorage.getItem('notes') == null) {
        const noteList = straingified(noteDetails);
        localStorage.setItem('notes', noteList);
        }
    else {
        const newNote = parsified(localStorage.getItem("notes"));
        const newNoteList = [...newNote, noteDetails];
        localStorage.setItem('notes', straingified(newNoteList))
        }
    }
export {pushDetails}