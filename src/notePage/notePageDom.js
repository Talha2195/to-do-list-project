import { pushDetails } from "../saveNote/pushDetails";
import { makeInputDom } from "../miscModules/typeInputDom";
function invokeTextFieldDom () {
makeInputDom('#content', 'div', '', 'inputMainDiv')
makeInputDom('#inputMainDiv', 'div', '', 'inputSubDiv')
makeInputDom ('#inputSubDiv', 'textarea', '', 'titleInput', '', 'Tile')
makeInputDom ('#inputSubDiv', 'textarea', '', 'descriptionInput', '', 'Description');
makeInputDom ('#inputSubDiv', 'textarea', '', 'noteInput', '', 'Note...');
makeInputDom ('#inputSubDiv', 'div', ' ', 'bottomNoteDiv', '', '');
makeInputDom ('#bottomNoteDiv', 'label','Due Date:', 'dueDate', '', '' );
makeInputDom ('#bottomNoteDiv', 'input', '', 'dateInput', 'date', '');
makeInputDom ('#bottomNoteDiv', 'button','Save', 'saveButton');
makeInputDom ('#inputMainDiv', 'div', 'Can not save note without a title!', 'errorMessage', '', '', 'display: none;');
const buttonSaveFeature = document.getElementById('saveButton');
buttonSaveFeature.addEventListener('click', pushDetails); 
}
export{invokeTextFieldDom};