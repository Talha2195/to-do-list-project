// import { editNote } from "../saveNote/editButtonFunction";

// function upcomingProjectsDom() {
//     const upcoming = JSON.parse(localStorage.getItem('notes')) || [];
//     upcoming.sort((a, b) => new Date(a.noteDate) - new Date(b.noteDate));
    
//     const existingProjects = document.getElementById('existingProjects');
    
//     upcoming.forEach(function(note,index) {
//         const button = document.createElement('button');
//         button.textContent = note.noteDate + ' - ' + note.noteTitle;
//         button.addEventListener('click', function() {
//             editNote(note,index);
//         });

//         existingProjects.appendChild(button);
//     });
// }

// export { upcomingProjectsDom };