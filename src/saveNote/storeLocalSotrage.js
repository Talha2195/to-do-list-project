function localStore(userData) {
    if (localStorage.getItem('notes') == null) {
        const noteList = JSON.stringify([userData]);
        localStorage.setItem('notes', noteList);
        }
    else {
        const newNote = JSON.parse(localStorage.getItem('notes'));
        const newNoteList = [...newNote, userData];
        localStorage.setItem('notes', JSON.stringify(newNoteList));
        console.log(JSON.parse(localStorage.getItem('notes')))
            }
}
export {localStore};