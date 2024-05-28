import { makeInputDom } from "../miscModules/typeInputDom";
function errorDiv () {
    makeInputDom ('#inputMainDiv', 'div', 'Can not save note without a title!', 'errorMessage', '', '' );
}
export {errorDiv};