/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index/index.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index/index.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body{\n    margin: 0;\n    background-color: white;\n}\n/*///////////////////////////////////////////////////////////////////////////*/ \n#mainDiv {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    column-gap: 30px;\n}\n/*///////////////////////////////////////////////////////////////////////////*/ \n#topBar {\n    grid-column: span 3;\n    background-color: lightcoral;\n    border-bottom: 1px solid #ddd;\n    padding-bottom: 10px;\n}\n#topBar > div > button{\n    border: none;\n    outline: none;\n    position: relative;\n    cursor:pointer;\n    margin: 0;\n    padding: 0;\n    text-align: inherit;\n    font: inherit;\n    background-color: inherit;\n    border-radius: 0;\n    --border-size:2px;\n    --accent-color: white;\n}\n#topBarButtonDiv > button::before{\n    content: '';\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    height: var(--border-size);\n    background-color: var(--accent-color);\n    transform: scaleX(0);\n    transition: transform 300ms ease-in-out;\n}\n#topBarButtonDiv > button:hover::before,\n#topBarButtonDiv > button:focus::before{\n    transform: scaleX(1);\n}\n#topBarButtonDiv{\n    display: flex;\n    padding-top: 10px;\n    padding-left: 30px;\n    justify-content: space-around;\n    width: 20%;\n}\n/*///////////////////////////////////////////////////////////////////////////*/ \n#leftBar{\n    background-color: #cccccc;\n    padding-left: 30px;\n    padding-top: 50px;\n    border-right: 1px solid #ddd;\n    height: 760px;\n}\n#leftBarContentDiv, \n#existingProjects{\n    display:flex;\n    flex-direction: column;\n    height: 80%;\n    padding-left: 20px;\n}\n#leftBarContentDiv > button, \n#existingProjects > button {\n  border: none;\n  outline: none;\n  position: relative;\n  cursor:pointer;\n  margin: 0;\n  padding: 0;\n  text-align: inherit;\n  font: inherit;\n  background-color: inherit;\n  border-radius: 0;\n  --border-size:2px;\n  --accent-color: lightcoral;\n  padding: 2%;\n}\n#leftBarContentDiv > button::before, \n#existingProjects >  button::before{\n    content: '';\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    height: var(--border-size);\n    background-color: var(--accent-color);\n    transform: scaleX(0);\n    transition: transform 300ms ease-in-out;\n}\n#leftBarContentDiv > button:hover::before,\n#leftBarContentDiv > button:focus::before, \n#existingProjects > button:hover::before, \n#existingProjects > button:focus::before{\n    transform: scaleX(1);\n}\n\n#existingProjects > button {\n    width: 100%;\n}\n#existingProjects{\n    padding-top: 5px;\n    padding-left: 8px;\n}\n/* #nameTag {\n    padding: 10px 10px 10px 40px;\n  background: url(./accordianArrow) no-repeat 14px 50%;\n  background-size: 18px;\n  font-weight: bold;\n} */\n#existingProjects > #nameTag {\n    list-style-type: '⋁ ';\n}\n#existingProjects[open] > #nameTag{\n    list-style-type: '⋀ ';\n}\n#existingProjects[open] > #nameTag::after{\n    transform: rotate(180deg);\n}\n/*///////////////////////////////////////////////////////////////////////////*/ \n#content {\n    background-color: white;\n    height: 780px;\n}\n#contentHeadingOne{\n    text-align: center;\n}\n/*///////////////////////////////////////////////////////////////////////////*/ \n#footer{\n    background-color: blue;\n    grid-column: span 3;\n    padding: 30px;\n}\n/*//////////////////////////////////////////////////////////////////////////////*/\n#inputMainDiv {\n    padding-top: 100px;\n    border: 1px solid red;\n    height: 70%;\n}\n#inputSubDiv {\n    display:flex;\n    flex-direction: column;\n    border: 1px solid black;\n}\n\n/* #titleInput {\n    grid-column-start: 2;\n}\n#descriptionLabel, #descriptionInput{\n    grid-row-start: 2;\n}\n#noteLabel, #noteInput{\n    grid-row-start: 3;\n} */\n/* #saveButton {\n    height: 5%;\n    width: 100%;\n} */\n\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list-project/./src/index/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index/index.css":
/*!*****************************!*\
  !*** ./src/index/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list-project/./src/index/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index/TopBar/topBarButton.js":
/*!******************************************!*\
  !*** ./src/index/TopBar/topBarButton.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   invokeTopBarButton: () => (/* binding */ invokeTopBarButton)\n/* harmony export */ });\n/* harmony import */ var _miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../miscModules/typeInputDom */ \"./src/miscModules/typeInputDom.js\");\n\nfunction invokeTopBarButton() {\n    (0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_0__.makeInputDom) ('#topBarButtonDiv', 'button', 'Home', 'home');\n    (0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_0__.makeInputDom) ('#topBarButtonDiv', 'button', 'Search', 'search');\n    (0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_0__.makeInputDom) ('#topBarButtonDiv', 'button', 'New note', 'newNote');\n}\n\n\n//# sourceURL=webpack://to-do-list-project/./src/index/TopBar/topBarButton.js?");

/***/ }),

/***/ "./src/index/homePageContent/attributesHomePage.js":
/*!*********************************************************!*\
  !*** ./src/index/homePageContent/attributesHomePage.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contentPage: () => (/* binding */ contentPage)\n/* harmony export */ });\n/* harmony import */ var _miscModules_dividantDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../miscModules/dividantDom */ \"./src/miscModules/dividantDom.js\");\n\nfunction contentPage() {\n(0,_miscModules_dividantDom__WEBPACK_IMPORTED_MODULE_0__.makeDom) ('#content', 'h1', 'contentHeadingOne', 'The Note');\n}\n\n\n//# sourceURL=webpack://to-do-list-project/./src/index/homePageContent/attributesHomePage.js?");

/***/ }),

/***/ "./src/index/index.js":
/*!****************************!*\
  !*** ./src/index/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _indexDomContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indexDomContent */ \"./src/index/indexDomContent.js\");\n/* harmony import */ var _sideBar_sideBarButtonContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sideBar/sideBarButtonContent */ \"./src/sideBar/sideBarButtonContent.js\");\n/* harmony import */ var _notePage_notePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notePage/notePage */ \"./src/notePage/notePage.js\");\n/* harmony import */ var _TopBar_topBarButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TopBar/topBarButton */ \"./src/index/TopBar/topBarButton.js\");\n/* harmony import */ var _homePageContent_attributesHomePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homePageContent/attributesHomePage */ \"./src/index/homePageContent/attributesHomePage.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.css */ \"./src/index/index.css\");\n\n\n\n\n\n\n(0,_indexDomContent__WEBPACK_IMPORTED_MODULE_0__.invokeDomContent)();\n(0,_sideBar_sideBarButtonContent__WEBPACK_IMPORTED_MODULE_1__.invokeSideBarButton)();\n(0,_TopBar_topBarButton__WEBPACK_IMPORTED_MODULE_3__.invokeTopBarButton)();\n(0,_homePageContent_attributesHomePage__WEBPACK_IMPORTED_MODULE_4__.contentPage)();\nconst noteButton = document.getElementById('newNote');\nnoteButton.addEventListener('click',_notePage_notePage__WEBPACK_IMPORTED_MODULE_2__.loadNotePage);\n\n//# sourceURL=webpack://to-do-list-project/./src/index/index.js?");

/***/ }),

/***/ "./src/index/indexDomContent.js":
/*!**************************************!*\
  !*** ./src/index/indexDomContent.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   invokeDomContent: () => (/* binding */ invokeDomContent)\n/* harmony export */ });\n/* harmony import */ var _miscModules_dividantDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../miscModules/dividantDom */ \"./src/miscModules/dividantDom.js\");\n\nfunction invokeDomContent (){ \n(0,_miscModules_dividantDom__WEBPACK_IMPORTED_MODULE_0__.makeDom) ('body', 'div', 'mainDiv');\n(0,_miscModules_dividantDom__WEBPACK_IMPORTED_MODULE_0__.makeDom) ('#mainDiv', 'div', 'topBar');\n(0,_miscModules_dividantDom__WEBPACK_IMPORTED_MODULE_0__.makeDom) ('#topBar', 'div', 'topBarButtonDiv');\n(0,_miscModules_dividantDom__WEBPACK_IMPORTED_MODULE_0__.makeDom) ('#mainDiv', 'div', 'leftBar');\n(0,_miscModules_dividantDom__WEBPACK_IMPORTED_MODULE_0__.makeDom) ('#leftBar', 'div', 'leftBarContentDiv');\n(0,_miscModules_dividantDom__WEBPACK_IMPORTED_MODULE_0__.makeDom) ('#mainDiv', 'div', 'content',);\n(0,_miscModules_dividantDom__WEBPACK_IMPORTED_MODULE_0__.makeDom) ('#mainDiv', 'div', 'footer', 'footer');\n}\n\n\n//# sourceURL=webpack://to-do-list-project/./src/index/indexDomContent.js?");

/***/ }),

/***/ "./src/miscModules/clearPage.js":
/*!**************************************!*\
  !*** ./src/miscModules/clearPage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearContentPage: () => (/* binding */ clearContentPage)\n/* harmony export */ });\nfunction clearContentPage () {\n    const content = document.querySelector('#content');\n    content.innerHTML = ' ';\n}\n\n\n//# sourceURL=webpack://to-do-list-project/./src/miscModules/clearPage.js?");

/***/ }),

/***/ "./src/miscModules/dividantDom.js":
/*!****************************************!*\
  !*** ./src/miscModules/dividantDom.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeDom: () => (/* binding */ makeDom)\n/* harmony export */ });\nfunction makeDom (container, type, id, text) {\n        const dividant = document.querySelector(container);\n        const content = document.createElement(type);\n        content.setAttribute('id', id);\n        content.textContent = text;\n        dividant.appendChild(content);\n    }\n\n\n//# sourceURL=webpack://to-do-list-project/./src/miscModules/dividantDom.js?");

/***/ }),

/***/ "./src/miscModules/typeInputDom.js":
/*!*****************************************!*\
  !*** ./src/miscModules/typeInputDom.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeInputDom: () => (/* binding */ makeInputDom)\n/* harmony export */ });\nfunction makeInputDom (body, element, text, id){\n        const container = document.querySelector(body)\n        const content = document.createElement(element);\n        content.textContent = text;\n        content.setAttribute('id', id);\n        container.appendChild(content);\n    }\n\n\n//# sourceURL=webpack://to-do-list-project/./src/miscModules/typeInputDom.js?");

/***/ }),

/***/ "./src/notePage/notePage.js":
/*!**********************************!*\
  !*** ./src/notePage/notePage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadNotePage: () => (/* binding */ loadNotePage)\n/* harmony export */ });\n/* harmony import */ var _miscModules_clearPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../miscModules/clearPage */ \"./src/miscModules/clearPage.js\");\n/* harmony import */ var _notePageDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notePageDom */ \"./src/notePage/notePageDom.js\");\n\n\nfunction loadNotePage () {\n    (0,_miscModules_clearPage__WEBPACK_IMPORTED_MODULE_0__.clearContentPage)();\n    (0,_notePageDom__WEBPACK_IMPORTED_MODULE_1__.invokeTextFieldDom)();\n}\n\n\n//# sourceURL=webpack://to-do-list-project/./src/notePage/notePage.js?");

/***/ }),

/***/ "./src/notePage/notePageDom.js":
/*!*************************************!*\
  !*** ./src/notePage/notePageDom.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   invokeTextFieldDom: () => (/* binding */ invokeTextFieldDom)\n/* harmony export */ });\n/* harmony import */ var _saveNote_userInputFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../saveNote/userInputFunction */ \"./src/saveNote/userInputFunction.js\");\n/* harmony import */ var _miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../miscModules/typeInputDom */ \"./src/miscModules/typeInputDom.js\");\n/* harmony import */ var _miscModules_dividantDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../miscModules/dividantDom */ \"./src/miscModules/dividantDom.js\");\n\n\n\nfunction invokeTextFieldDom () {\n(0,_miscModules_dividantDom__WEBPACK_IMPORTED_MODULE_2__.makeDom) ('#content', 'div', 'inputMainDiv')\n;(0,_miscModules_dividantDom__WEBPACK_IMPORTED_MODULE_2__.makeDom) ('#inputMainDiv', 'div', 'inputSubDiv')\n;(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_1__.makeInputDom) ('#inputSubDiv', 'label', 'Title', 'titleLabel');\n(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_1__.makeInputDom) ('#inputSubDiv', 'input', '', 'titleInput');\n(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_1__.makeInputDom) ('#inputSubDiv', 'label', 'Description', 'descriptionLabel');\n(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_1__.makeInputDom) ('#inputSubDiv', 'input', '', 'descriptionInput');\n(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_1__.makeInputDom)('#inputSubDiv', 'label', 'Notes', 'noteLabel');\n(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_1__.makeInputDom) ('#inputSubDiv', 'input', '', 'noteInput');\n(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_1__.makeInputDom) ('#inputSubDiv', 'button','save', 'saveButton');\n    const buttonSaveFeature = document.getElementById('saveButton');\n    buttonSaveFeature.addEventListener('click', _saveNote_userInputFunction__WEBPACK_IMPORTED_MODULE_0__.addNote);\n}\n\n\n//# sourceURL=webpack://to-do-list-project/./src/notePage/notePageDom.js?");

/***/ }),

/***/ "./src/saveNote/userInputFunction.js":
/*!*******************************************!*\
  !*** ./src/saveNote/userInputFunction.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNote: () => (/* binding */ addNote)\n/* harmony export */ });\nfunction addNote (){\n    let noteStorage = [];\n    let noteTitle = document.getElementById(\"titleInput\").value;\n    let noteDescription = document.getElementById(\"descriptionInput\").value;\n    let noteNotes = document.getElementById(\"noteInput\").value;\n    const noteDetails = {\n        title:noteTitle,\n        description:noteDescription,\n        note:noteNotes,\n    }\n    noteStorage.push(noteDetails);\n    console.log(noteStorage);\n    }\n    \n\n//# sourceURL=webpack://to-do-list-project/./src/saveNote/userInputFunction.js?");

/***/ }),

/***/ "./src/sideBar/sideBarButtonContent.js":
/*!*********************************************!*\
  !*** ./src/sideBar/sideBarButtonContent.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   invokeSideBarButton: () => (/* binding */ invokeSideBarButton)\n/* harmony export */ });\n/* harmony import */ var _miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../miscModules/typeInputDom */ \"./src/miscModules/typeInputDom.js\");\n\nfunction invokeSideBarButton () {\n(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_0__.makeInputDom) ('#leftBarContentDiv', 'button', 'Today', 'today');\n(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_0__.makeInputDom) ('#leftBarContentDiv', 'button', 'Upcoming', 'upcoming');\n(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_0__.makeInputDom) ('#leftBarContentDiv', 'button', 'New Project', 'newProject');\n(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_0__.makeInputDom) ('#leftBarContentDiv', 'details', '', 'existingProjects');\n(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_0__.makeInputDom) ('#existingProjects', 'summary', 'Projects', 'nameTag');\n(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_0__.makeInputDom) ('#existingProjects', 'button', 'genericButton', 'genericButtonOne');\n(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_0__.makeInputDom) ('#existingProjects', 'button', 'genericButton', 'genericButtonTwo');\n(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_0__.makeInputDom) ('#existingProjects', 'button', 'genericButton', 'genericButtonThree');\n(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_0__.makeInputDom) ('#existingProjects', 'button', 'genericButton', 'genericButtonFour');\n(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_0__.makeInputDom) ('#existingProjects', 'button', 'genericButton', 'genericButtonFive');\n(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_0__.makeInputDom) ('#existingProjects', 'button', 'genericButton', 'genericButtonSix');\n(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_0__.makeInputDom) ('#existingProjects', 'button', 'genericButton', 'genericButtonSeven');\n}\n\n\n\n//# sourceURL=webpack://to-do-list-project/./src/sideBar/sideBarButtonContent.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index/index.js");
/******/ 	
/******/ })()
;