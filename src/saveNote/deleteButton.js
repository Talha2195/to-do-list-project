function deleteButtonFunction (index, notes) {
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
} 
export{deleteButtonFunction}