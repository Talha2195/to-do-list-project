import { addNote } from "../saveNote/userInputFunction";
import { makeInputDom } from "../miscModules/typeInputDom";
import { domCreator, makeDom } from "../miscModules/dividantDom";
function invokeTextFieldDom () {
makeDom ('#content', 'div', 'inputMainDiv')
makeDom ('#inputMainDiv', 'div', 'inputSubDiv')
makeInputDom ('#inputSubDiv', 'label', 'Title', 'titleLabel');
makeInputDom ('#inputSubDiv', 'input', '', 'titleInput');
makeInputDom ('#inputSubDiv', 'label', 'Description', 'descriptionLabel');
makeInputDom ('#inputSubDiv', 'input', '', 'descriptionInput');
makeInputDom('#inputSubDiv', 'label', 'Notes', 'noteLabel');
makeInputDom ('#inputSubDiv', 'input', '', 'noteInput');
makeInputDom ('#inputSubDiv', 'button','save', 'saveButton');
    const buttonSaveFeature = document.getElementById('saveButton');
    buttonSaveFeature.addEventListener('click', addNote);
}
export{invokeTextFieldDom};