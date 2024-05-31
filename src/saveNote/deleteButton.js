function deleteButtonFunction () {
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    noteDiv.remove();
} 