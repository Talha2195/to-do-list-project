import { localStore } from "./storeLocalSotrage";
import { clearInputFields } from "../miscModules/clearInputField";
import { userInput } from "./userInputs";
function pushDetails () {
    let userFields = userInput();
     const errorDiv = document.getElementById('errorMessage'); 
    if (userFields.noteTitle.trim() === '') {
        errorDiv.style.display = 'block';
    }
    else {
        errorDiv.style.display = 'none';
        localStore(userFields);
        clearInputFields();
    }
}
export {pushDetails}