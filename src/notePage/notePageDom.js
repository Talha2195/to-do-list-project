import { pushDetails } from "../saveNote/pushDetails";
import { makeInputDom } from "../miscModules/typeInputDom";
import { makeDom } from "../miscModules/dividantDom";
function invokeTextFieldDom () {
makeDom ('#content', 'div', 'inputMainDiv')
makeDom ('#inputMainDiv', 'div', 'inputSubDiv')
makeInputDom ('#inputSubDiv', 'textarea', '', 'titleInput', '', 'Tile');
makeInputDom ('#inputSubDiv', 'textarea', '', 'descriptionInput', '', 'Description');
makeInputDom ('#inputSubDiv', 'textarea', '', 'noteInput', '', 'Note...');
makeInputDom ('#inputSubDiv', 'div', ' ', 'bottomNoteDiv', '', '');
makeInputDom ('#bottomNoteDiv', 'label','Due Date:', 'dueDate', '', '' );
makeInputDom ('#bottomNoteDiv', 'input', '', 'dateInput', 'date', '');
makeInputDom ('#bottomNoteDiv', 'button','Save', 'saveButton');
const buttonSaveFeature = document.getElementById('saveButton');
buttonSaveFeature.addEventListener('click', pushDetails); 
}
export{invokeTextFieldDom};