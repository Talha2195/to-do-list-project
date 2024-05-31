import { makeInputDom } from "../miscModules/typeInputDom";
function invokeAllProjecgsDom () {
    makeInputDom ('#content', 'div', '', 'allProjectsMainDiv');
    makeInputDom ('#allProjectsMainDiv', 'div', '', 'allProjectsSubDiv');
}
export {invokeAllProjecgsDom};