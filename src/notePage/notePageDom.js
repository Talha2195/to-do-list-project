import { addNote } from "../saveNote/userInputFunction";
import { makeInputDom } from "../miscModules/typeInputDom";
import { domCreator, makeDom } from "../miscModules/dividantDom";
function invokeTextFieldDom () {
makeDom ('#content', 'div', 'inputMainDiv')
makeDom ('#inputMainDiv', 'div', 'inputSubDiv')
makeInputDom ('#inputSubDiv', 'textarea', '', 'titleInput', '', 'Tile');
makeInputDom ('#inputSubDiv', 'textarea', '', 'descriptionInput', '', 'Description');
makeInputDom ('#inputSubDiv', 'textarea', '', 'noteInput', '', 'Note...');
makeInputDom ('#inputSubDiv', 'button','Save', 'saveButton');
    const buttonSaveFeature = document.getElementById('saveButton');
    buttonSaveFeature.addEventListener('click', addNote);
}
export{invokeTextFieldDom};