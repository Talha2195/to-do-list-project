import { inputDom } from "../miscModules/typeInputDom";
function invokeTextFieldDom () {
    const labelFieldOne = new inputDom ('#content', 'label', 'Title', 'title');
    const textFieldOne = new inputDom ('#content', 'input', '', 'title');
    const labelFieldTwo = new inputDom ('#content', 'label', 'Description', 'description');
    const textFieldTwo = new inputDom ('#content', 'input', '', 'description');
    const labelFieldThree = new inputDom ('#content', 'label', 'Notes', 'note');
    const textFieldThree = new inputDom ('#content', 'input', '', 'note');
    labelFieldOne.makeInputDom();
    textFieldOne.makeInputDom();
    labelFieldTwo.makeInputDom();
    textFieldTwo.makeInputDom();
    labelFieldThree.makeInputDom();
    textFieldThree.makeInputDom();
}
export{invokeTextFieldDom};