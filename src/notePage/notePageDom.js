import { inputDom } from "../miscModules/typeInputDom";
import { domCreator } from "../miscModules/dividantDom";
function invokeTextFieldDom () {
    const inputPutFields = new domCreator ('#content', 'div', 'inputFieldsDiv')
    const labelFieldOne = new inputDom ('#inputFieldsDiv', 'label', 'Title', 'titleLabel');
    const textFieldOne = new inputDom ('#inputFieldsDiv', 'input', '', 'titleInput');
    const labelFieldTwo = new inputDom ('#inputFieldsDiv', 'label', 'Description', 'descriptionLabel');
    const textFieldTwo = new inputDom ('#inputFieldsDiv', 'input', '', 'descriptionInput');
    const labelFieldThree = new inputDom ('#inputFieldsDiv', 'label', 'Notes', 'noteLabel');
    const textFieldThree = new inputDom ('#inputFieldsDiv', 'input', '', 'noteInput');
    const saveButton = new inputDom('#inputFieldsDiv', 'button','save', 'saveButton');
    inputPutFields.makeDom();
    labelFieldOne.makeInputDom();
    textFieldOne.makeInputDom();
    labelFieldTwo.makeInputDom();
    textFieldTwo.makeInputDom();
    labelFieldThree.makeInputDom();
    textFieldThree.makeInputDom();
    saveButton.makeInputDom();
}
export{invokeTextFieldDom};