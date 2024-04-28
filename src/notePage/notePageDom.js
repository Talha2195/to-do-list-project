import { addNote } from "../saveNote/userInputFunction";
import { makeInputDom } from "../miscModules/typeInputDom";
import { domCreator, makeDom } from "../miscModules/dividantDom";
function invokeTextFieldDom () {
    const inputPutFields = makeDom('#content', 'div', 'inputFieldsDiv')
    const labelFieldOne = makeInputDom ('#inputFieldsDiv', 'label', 'Title', 'titleLabel');
    const textFieldOne = makeInputDom ('#inputFieldsDiv', 'input', '', 'titleInput');
    const labelFieldTwo = makeInputDom ('#inputFieldsDiv', 'label', 'Description', 'descriptionLabel');
    const textFieldTwo = makeInputDom ('#inputFieldsDiv', 'input', '', 'descriptionInput');
    const labelFieldThree = makeInputDom('#inputFieldsDiv', 'label', 'Notes', 'noteLabel');
    const textFieldThree = makeInputDom ('#inputFieldsDiv', 'input', '', 'noteInput');
    const saveButton = makeInputDom ('#inputFieldsDiv', 'button','save', 'saveButton');
    const buttonSaveFeature = document.getElementById('saveButton');
    buttonSaveFeature.addEventListener('click', addNote);
}
export{invokeTextFieldDom};