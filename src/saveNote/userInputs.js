function userInput () {
    const noteDetails = {
        noteTitle:document.getElementById("titleInput").value,
        noteDescription:document.getElementById("descriptionInput").value,
        noteNotes:document.getElementById("noteInput").value,
        noteDate:document.getElementById('dateInput').value,
    };
    return noteDetails;
}
export {userInput};