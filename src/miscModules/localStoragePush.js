
function pushNote(newNote) {
    const noteList = straingified(newNote);
    localStorage.setItem('notes', noteList);
}
export {pushNote};