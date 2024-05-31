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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/arrowIcon.png */ \"./src/images/arrowIcon.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body{\n    margin: 0;\n    background-color: white;\n}\n/*///////////////////////////////////////////////////////////////////////////*/ \n#mainDiv {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    column-gap: 30px;\n    height: 100%;\n}\n/*///////////////////////////////////////////////////////////////////////////*/ \n#topBar {\n    grid-column: span 3;\n    background-color: #f08080;\n    border-bottom: 1px solid #ddd;\n    padding-bottom: 10px;\n    border-bottom: 2px solid black;\n}\n#topBar > div > button{\n    border: none;\n    outline: none;\n    position: relative;\n    cursor:pointer;\n    margin: 0;\n    padding: 0;\n    text-align: inherit;\n    font: inherit;\n    background-color: inherit;\n    border-radius: 0;\n    height: 60%;\n}\n#topBarButtonDiv{\n    display: flex;\n    padding-top: 10px;\n    justify-content: space-around;\n    width: 50%;\n    height: 90%;\n}\n#searchBar {\n    --padding: 14px;\n    padding: var(--padding);\n    align-items: center;\n    display:flex;\n    width: max-content;\n    height: 10px;\n    width: 500px;\n    background-color: #de7474;\n    border-radius: 6px;\n    transition: background 0.25s;\n    border: 2px solid black;\n}\n#searchBar:focus-within{\n    background: #f1f1f1\n}\n#searchInput {\n    font-size: 16px;\n    font: 'Lexend', sans-serif;\n    width: 500px;\n    height: 200px;\n    color: #333;\n    margin-left: var(--padding);\n    outline: none;\n    border: none;\n    background: transparent;\n}\n#searchInput::placeholder {\n    color: rgba (0, 0, 0, 0.25);\n}\n#searchIcon {\n    mix-blend-mode: multiply;\n    height: 30px;\n    width: 30px;\n    float: left;\n}\n#homeIcon {\n    padding-top: 2px;\n    mix-blend-mode: multiply;\n    height: 35px;\n    width: 35px;\n    margin-left: 10px;\n}\n/*///////////////////////////////////////////////////////////////////////////*/ \n#leftBar{\n    background-color: rgb(255, 255, 255);\n    padding-top: 50px;\n    height: 760px;\n}\n#leftBarContentDiv, \n#existingProjects{\n    display:flex;\n    flex-direction: column;\n    height: 80%;\n}\n#leftBarContentDiv > button{\n    background-color: white;\n    padding:20px;\n    color:#222;\n    border: none;\n    outline: none;\n    position: relative;\n    cursor: pointer;\n    border-top-right-radius: 25px;\n    border-bottom-right-radius: 25px;\n    --accent-color: #F0F0F0;\n    z-index: 1;\n    display: flex;\n}\n#leftBarContentDiv > button::before{\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: -1;\n    transform: scaleX(0);\n    border-top-right-radius: 25px;\n    border-bottom-right-radius: 25px;\n}\n#leftBarContentDiv > button:focus{\n    background-color: #f08080;\n    border: solid black;\n}\n#leftBarContentDiv > button:hover:not(:focus){\n    transform: scaleX(1);\n    background-color: var(--accent-color);\n}\n#existingProjects{\n    padding-top: 5px;\n}\n#nameTag {\n    list-style: none;\n    display: flex;\n    align-items: center;\n}\n#existingProjects[open] > #nameTag::before{\n    transform: rotate(180deg);\n  }\ndetails #nameTag::-webkit--#existingProjects-marker {\n    display: none;\n}\n#plusicon, #upcomingIcon{\n    mix-blend-mode: multiply;\n}\n#plusicon{\n    margin-right: 10px;\n    margin-left: 16px;\n    height: 30px;\n    width: 30px;\n}\n#newNote {\n    height: 15%;\n    width: 100%;\n    align-items: center;\n}\n#upcoming {\n    align-items: center;\n}\n#upcomingIcon {\n    padding-left: 15px;\n    height: 40px;\n    width: 30px;\n    margin-right: 10px;\n} \n#newNote, #upcoming{\n    flex-direction: row-reverse;\n    justify-content: flex-end;\n}\n#nameTag {\n    background-color: white;\n    padding:20px;\n    color:#222;\n    border: none;\n    outline: none;\n    position: relative;\n    cursor: pointer;\n    border-top-right-radius: 25px;\n    border-bottom-right-radius: 25px;\n    --accent-color: #F0F0F0;\n    z-index: 1;\n    display: flex;\n    height: 8%;\n    width: 88%;\n}\n#nameTag::before {\n    content: '';\n    width: 30px;\n    height: 30px;\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat;\n    mix-blend-mode: multiply;\n    background-size: cover;\n    margin-right: 0.5em;\n    transition: 0.2s;\n    margin-left: 15px;\n}\n#nameTag:focus {\n    background-color: #f08080;\n    border: solid black;\n}\n#nameTag:hover:not(:focus){\n    transform: scaleX(1);\n    background-color: var(--accent-color);\n}\n#existingProjects > button {\n    background-color: white;\n    border:none;\n    outline: none;\n    position: relative;\n    cursor: pointer;\n    width: 100%;\n    height: 15%;\n    align-items: center;\n    --border-size: 2px;\n    --underline-hover-color: black;\n    --underline-focus-color:  #f08080;\n}\n#existingProjects > button:before {\n    content: '';\n    position: absolute;\n    left:0;\n    right:0;\n    bottom:0;\n    height: var(--border-size);\n    background-color: var(--underline-hover-color);\n    transform: scaleX(0);\n    transition: transform ease-in-out 500ms;\n    transform-origin: left;\n} \n#existingProjects > button:after{\n    content: '';\n    position: absolute;\n    left:0;\n    right:0;\n    bottom:0;\n    height: var(--border-size);\n    background-color: var(--underline-focus-color);\n    transform: scaleX(0);\n}\n#existingProjects > button:focus:after{\n    transform: scaleX(1);\n}\n#existingProjects > button:hover:before{\n    transform: scaleX(1);\n}\n/*///////////////////////////////////////////////////////////////////////////*/ \n#content {\n    background-color: white;\n    height: 780px;\n}\n#contentHeadingOne{\n    text-align: center;\n}\n/*///////////////////////////////////////////////////////////////////////////*/ \n#footer{\n    grid-column: span 3;\n    padding: 30px;\n}\n/*//////////////////////////////////////////////////////////////////////////////*/\n#inputMainDiv {\n    display: flex;\n    justify-content: center;\n    padding-top: 5%;\n    height: 70%;\n    flex-direction: column;\n}\n#inputSubDiv {\n    background-color: #f08080;\n    display:flex;\n    flex-direction: column;\n    width: 70%;\n    height: 70%;\n    border: 2px solid black;\n    border-radius: 20px;\n    align-self: center;\n    margin-bottom: 14%;\n}\n#inputSubDiv > textarea {\n    padding: 20px;\n    border: none;\n    outline: none;\n    font-size: 16px;\n    background: none;\n    resize: none;\n    transition: background 0.25s;\n}\n#inputSubDiv > textarea:focus-within {\n    background-color: white;\n    border: 1px solid black;\n    border-radius: 18px;\n}\n#titleInput {\n    height: 10%;\n}\n#titleInput:invalid {\n    background-color: black;\n}\n#descriptionInput {\n    height: 10%;\n}\n#noteInput {\n    height: 60%;\n}\n#bottomNoteDiv {\n    height: 20%;\n    width: 80%;\n    align-self: center;\n}\n#saveButton{\n    background: none;\n    outline: none;\n    border: none;\n    height: 80%;\n    width: 20%;\n    font-size: 16px;\n    float:right;\n}\n#saveButton:hover{\n    border: 1px solid black;\n    border-radius: 5px;\n    background-color: #ddd;\n}\n#saveButton:active{\n    background-color: #909090;\n}\n#dateInput {\n    border: 1px solid black;\n    border-radius: 5px;\n    outline: none;\n    height: 80%;\n}\n#dueDate {\n    padding-right: 5px;\n}\n#errorMessage {\n    font-size: 20px;\n    align-self: center;\n    border: 1px solid black;\n    height:5%;\n    width: 26%;\n    border-radius: 5px;\n    background-color: #f08080;\n}\n/*//////////////////////////////////////////////////////////////////////////////*/\n#allProjectsMainDiv {\n    height: 100%;\n}\n#allProjectsSubDiv {\n    display:flex;\n    margin-top: 8%;\n    height: 80%;\n    flex-wrap: wrap;\n    row-gap: 50px;\n}\n#allProjectsSubDiv > div{\n    background-color: #f08080;\n    height: 30%;\n    width: 20%;\n    border: 2px solid black;\n    margin-top: 10px;\n    border-radius: 10px;\n    margin-left: 10px;\n    text-align: center;\n}\n#allProjectsSubDiv > div > button {\n    border: none;\n    outline: none;\n    background-color: #f08080;\n}\n#allProjectsSubDiv > div > button:hover{\n    background:#909090;\n    border: 1px solid black;\n    border-radius: 5px;\n}\n#allProjectsSubDiv > div > button:active{\n    background-color: #333;\n}\n#editButton{\n    background: none;\n    outline: none;\n    border: none;\n    height: 80%;\n    width: 20%;\n    font-size: 16px;\n    float:right;\n}\n#editButton:hover{\n    border: 1px solid black;\n    border-radius: 5px;\n    background-color: #ddd;\n}\n#editButton:active{\n    background-color: #909090;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list-project/./src/index/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://to-do-list-project/./node_modules/css-loader/dist/runtime/getUrl.js?");

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

/***/ "./src/allProjects/allProjectsDom.js":
/*!*******************************************!*\
  !*** ./src/allProjects/allProjectsDom.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   invokeAllProjecgsDom: () => (/* binding */ invokeAllProjecgsDom)\n/* harmony export */ });\n/* harmony import */ var _miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../miscModules/typeInputDom */ \"./src/miscModules/typeInputDom.js\");\n\nfunction invokeAllProjecgsDom () {\n    (0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_0__.makeInputDom) ('#content', 'div', '', 'allProjectsMainDiv');\n    (0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_0__.makeInputDom) ('#allProjectsMainDiv', 'div', '', 'allProjectsSubDiv');\n}\n\n\n//# sourceURL=webpack://to-do-list-project/./src/allProjects/allProjectsDom.js?");

/***/ }),

/***/ "./src/allProjects/displayNotes.js":
/*!*****************************************!*\
  !*** ./src/allProjects/displayNotes.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayNotes: () => (/* binding */ displayNotes)\n/* harmony export */ });\n/* harmony import */ var _miscModules_clearPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../miscModules/clearPage */ \"./src/miscModules/clearPage.js\");\n/* harmony import */ var _allProjectsDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allProjectsDom */ \"./src/allProjects/allProjectsDom.js\");\n/* harmony import */ var _saveNote_deleteButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../saveNote/deleteButton */ \"./src/saveNote/deleteButton.js\");\n/* harmony import */ var _saveNote_editButtonFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../saveNote/editButtonFunction */ \"./src/saveNote/editButtonFunction.js\");\n\n\n\n\nfunction displayNotes () {\n    (0,_miscModules_clearPage__WEBPACK_IMPORTED_MODULE_0__.clearContentPage)();\n    (0,_allProjectsDom__WEBPACK_IMPORTED_MODULE_1__.invokeAllProjecgsDom)();\n    const notes = JSON.parse(localStorage.getItem('notes'));\n    if  (notes && notes.length > 0) {\n        const noteContainer = document.getElementById('allProjectsSubDiv');\n        notes.forEach(function(note, index){\n            const noteDiv = document.createElement('div');\n            noteDiv.classList.add('note');\n            const titleElement = document.createElement('h2');\n            titleElement.textContent = note.noteTitle;\n            const dateElement = document.createElement('p');\n            dateElement.textContent = note.noteDate;\n            const deleteButton = document.createElement('button');\n            deleteButton.textContent = 'Delete';\n            deleteButton.addEventListener('click', function(){\n                (0,_saveNote_deleteButton__WEBPACK_IMPORTED_MODULE_2__.deleteButtonFunction)(index,notes);\n                noteDiv.remove();\n            });\n            const editButton = document.createElement('button');\n            editButton.textContent = 'Edit'; \n            editButton.addEventListener('click', function(){\n                (0,_saveNote_editButtonFunction__WEBPACK_IMPORTED_MODULE_3__.editNote)(index,note);\n        });\n        noteDiv.appendChild(titleElement);\n        noteDiv.appendChild(dateElement);\n        noteDiv.appendChild(deleteButton);\n        noteDiv.appendChild(editButton);\n        noteContainer.appendChild(noteDiv);\n        \n        });\n    }\n    else{\n        console.log('no notes');\n    }\n}\n\n\n//# sourceURL=webpack://to-do-list-project/./src/allProjects/displayNotes.js?");

/***/ }),

/***/ "./src/images/invokeImages/invokeImages.js":
/*!*************************************************!*\
  !*** ./src/images/invokeImages/invokeImages.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   invokeImages: () => (/* binding */ invokeImages)\n/* harmony export */ });\n/* harmony import */ var _invokeImagesMod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invokeImagesMod */ \"./src/images/invokeImages/invokeImagesMod.js\");\n/* harmony import */ var _plusIcon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plusIcon.png */ \"./src/images/plusIcon.png\");\n/* harmony import */ var _upcomingIcon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../upcomingIcon.png */ \"./src/images/upcomingIcon.png\");\n/* harmony import */ var _homeIcon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../homeIcon.png */ \"./src/images/homeIcon.png\");\n/* harmony import */ var _searchIcon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../searchIcon.png */ \"./src/images/searchIcon.png\");\n\n\n\n\n\nfunction invokeImages () {\n    let images = [['plusicon', _plusIcon_png__WEBPACK_IMPORTED_MODULE_1__], \n    ['upcomingIcon', _upcomingIcon_png__WEBPACK_IMPORTED_MODULE_2__], \n    ['homeIcon', _homeIcon_png__WEBPACK_IMPORTED_MODULE_3__],\n    ['searchIcon', _searchIcon_png__WEBPACK_IMPORTED_MODULE_4__]\n];\n    images.forEach(_invokeImagesMod__WEBPACK_IMPORTED_MODULE_0__.invokeImage);\n}\n\n\n//# sourceURL=webpack://to-do-list-project/./src/images/invokeImages/invokeImages.js?");

/***/ }),

/***/ "./src/images/invokeImages/invokeImagesMod.js":
/*!****************************************************!*\
  !*** ./src/images/invokeImages/invokeImagesMod.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   invokeImage: () => (/* binding */ invokeImage)\n/* harmony export */ });\nfunction invokeImage ([id, imgSrc]) {\n    const plusIcon = document.getElementById(id);\n    plusIcon.src = imgSrc;\n}\n\n\n//# sourceURL=webpack://to-do-list-project/./src/images/invokeImages/invokeImagesMod.js?");

/***/ }),

/***/ "./src/index/TopBar/topBarButton.js":
/*!******************************************!*\
  !*** ./src/index/TopBar/topBarButton.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   invokeTopBarButton: () => (/* binding */ invokeTopBarButton)\n/* harmony export */ });\n/* harmony import */ var _miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../miscModules/typeInputDom */ \"./src/miscModules/typeInputDom.js\");\n/* harmony import */ var _miscModules_imagesDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../miscModules/imagesDom */ \"./src/miscModules/imagesDom.js\");\n/* harmony import */ var _miscModules_dividantDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../miscModules/dividantDom */ \"./src/miscModules/dividantDom.js\");\n\n\n\nfunction invokeTopBarButton() {\n(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_0__.makeInputDom) ('#topBarButtonDiv', 'button', '', 'home');\n(0,_miscModules_imagesDom__WEBPACK_IMPORTED_MODULE_1__.createImage) ('#home', 'img', 'homeIcon', 'home icon image');\n(0,_miscModules_dividantDom__WEBPACK_IMPORTED_MODULE_2__.makeDom) ('#topBarButtonDiv', 'div', 'searchBar');\n(0,_miscModules_imagesDom__WEBPACK_IMPORTED_MODULE_1__.createImage) ('#searchBar', 'img', 'searchIcon', 'search icon image');\n(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_0__.makeInputDom) ('#searchBar', 'input', '', 'searchInput', 'search', 'Search');\n}\n\n\n//# sourceURL=webpack://to-do-list-project/./src/index/TopBar/topBarButton.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _indexDomContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indexDomContent */ \"./src/index/indexDomContent.js\");\n/* harmony import */ var _sideBar_sideBarButtonContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sideBar/sideBarButtonContent */ \"./src/sideBar/sideBarButtonContent.js\");\n/* harmony import */ var _notePage_notePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notePage/notePage */ \"./src/notePage/notePage.js\");\n/* harmony import */ var _TopBar_topBarButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TopBar/topBarButton */ \"./src/index/TopBar/topBarButton.js\");\n/* harmony import */ var _homePageContent_attributesHomePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homePageContent/attributesHomePage */ \"./src/index/homePageContent/attributesHomePage.js\");\n/* harmony import */ var _images_invokeImages_invokeImages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/invokeImages/invokeImages */ \"./src/images/invokeImages/invokeImages.js\");\n/* harmony import */ var _allProjects_displayNotes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../allProjects/displayNotes */ \"./src/allProjects/displayNotes.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.css */ \"./src/index/index.css\");\n\n\n\n\n\n\n\n// import { upcomingProjectsDom } from \"../sideBar/upComingDom.Js\";\n\n(0,_indexDomContent__WEBPACK_IMPORTED_MODULE_0__.invokeDomContent)();\n(0,_sideBar_sideBarButtonContent__WEBPACK_IMPORTED_MODULE_1__.invokeSideBarButton)();\n(0,_TopBar_topBarButton__WEBPACK_IMPORTED_MODULE_3__.invokeTopBarButton)();\n(0,_homePageContent_attributesHomePage__WEBPACK_IMPORTED_MODULE_4__.contentPage)();\n(0,_images_invokeImages_invokeImages__WEBPACK_IMPORTED_MODULE_5__.invokeImages)();\n// upcomingProjectsDom();\nconst noteButton = document.getElementById('newNote');\nnoteButton.addEventListener('click',_notePage_notePage__WEBPACK_IMPORTED_MODULE_2__.loadNotePage);\nconst upcomingButton = document.getElementById ('upcoming');\nupcomingButton.addEventListener('click', _allProjects_displayNotes__WEBPACK_IMPORTED_MODULE_6__.displayNotes);\n\n//# sourceURL=webpack://to-do-list-project/./src/index/index.js?");

/***/ }),

/***/ "./src/index/indexDomContent.js":
/*!**************************************!*\
  !*** ./src/index/indexDomContent.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   invokeDomContent: () => (/* binding */ invokeDomContent)\n/* harmony export */ });\n/* harmony import */ var _miscModules_dividantDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../miscModules/dividantDom */ \"./src/miscModules/dividantDom.js\");\n\nfunction invokeDomContent (){ \n(0,_miscModules_dividantDom__WEBPACK_IMPORTED_MODULE_0__.makeDom) ('body', 'div', 'mainDiv');\n(0,_miscModules_dividantDom__WEBPACK_IMPORTED_MODULE_0__.makeDom) ('#mainDiv', 'div', 'topBar');\n(0,_miscModules_dividantDom__WEBPACK_IMPORTED_MODULE_0__.makeDom) ('#topBar', 'div', 'topBarButtonDiv');\n(0,_miscModules_dividantDom__WEBPACK_IMPORTED_MODULE_0__.makeDom) ('#mainDiv', 'div', 'leftBar');\n(0,_miscModules_dividantDom__WEBPACK_IMPORTED_MODULE_0__.makeDom) ('#leftBar', 'div', 'leftBarContentDiv');\n(0,_miscModules_dividantDom__WEBPACK_IMPORTED_MODULE_0__.makeDom) ('#mainDiv', 'div', 'content',);\n(0,_miscModules_dividantDom__WEBPACK_IMPORTED_MODULE_0__.makeDom) ('#mainDiv', 'div', 'footer', 'footer');\n}\n\n\n//# sourceURL=webpack://to-do-list-project/./src/index/indexDomContent.js?");

/***/ }),

/***/ "./src/miscModules/clearInputField.js":
/*!********************************************!*\
  !*** ./src/miscModules/clearInputField.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearInputFields: () => (/* binding */ clearInputFields)\n/* harmony export */ });\nfunction clearInputFields () {\n    document.getElementById('titleInput').value = '';\n    document.getElementById('descriptionInput').value = '';\n    document.getElementById('noteInput').value = '';\n    document.getElementById('dateInput').value = '';\n}\n\n\n//# sourceURL=webpack://to-do-list-project/./src/miscModules/clearInputField.js?");

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

/***/ "./src/miscModules/imagesDom.js":
/*!**************************************!*\
  !*** ./src/miscModules/imagesDom.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createImage: () => (/* binding */ createImage)\n/* harmony export */ });\nfunction createImage(body, element, id, altText){\n    const container = document.querySelector(body);\n        const content = document.createElement(element)\n        content.setAttribute('id', id);\n        content.setAttribute('alt', altText);\n        container.appendChild(content);\n}\n\n\n//# sourceURL=webpack://to-do-list-project/./src/miscModules/imagesDom.js?");

/***/ }),

/***/ "./src/miscModules/typeInputDom.js":
/*!*****************************************!*\
  !*** ./src/miscModules/typeInputDom.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeInputDom: () => (/* binding */ makeInputDom)\n/* harmony export */ });\nfunction makeInputDom (body, element, text, id, type, placeholder,style, color){\n        const container = document.querySelector(body)\n        const content = document.createElement(element);\n        content.textContent = text;\n        content.setAttribute('id', id);\n        content.setAttribute('type', type);\n        content.setAttribute('placeholder', placeholder);\n        content.setAttribute('style', style);\n        container.appendChild(content);\n    }\n\n\n//# sourceURL=webpack://to-do-list-project/./src/miscModules/typeInputDom.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   invokeTextFieldDom: () => (/* binding */ invokeTextFieldDom)\n/* harmony export */ });\n/* harmony import */ var _saveNote_pushDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../saveNote/pushDetails */ \"./src/saveNote/pushDetails.js\");\n/* harmony import */ var _miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../miscModules/typeInputDom */ \"./src/miscModules/typeInputDom.js\");\n\n\nfunction invokeTextFieldDom () {\n(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_1__.makeInputDom)('#content', 'div', '', 'inputMainDiv')\n;(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_1__.makeInputDom)('#inputMainDiv', 'div', '', 'inputSubDiv')\n;(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_1__.makeInputDom) ('#inputSubDiv', 'textarea', '', 'titleInput', '', 'Tile')\n;(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_1__.makeInputDom) ('#inputSubDiv', 'textarea', '', 'descriptionInput', '', 'Description');\n(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_1__.makeInputDom) ('#inputSubDiv', 'textarea', '', 'noteInput', '', 'Note...');\n(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_1__.makeInputDom) ('#inputSubDiv', 'div', ' ', 'bottomNoteDiv', '', '');\n(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_1__.makeInputDom) ('#bottomNoteDiv', 'label','Due Date:', 'dueDate', '', '' );\n(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_1__.makeInputDom) ('#bottomNoteDiv', 'input', '', 'dateInput', 'date', '');\n(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_1__.makeInputDom) ('#bottomNoteDiv', 'button','Save', 'saveButton');\n(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_1__.makeInputDom) ('#inputMainDiv', 'div', 'Can not save note without a title!', 'errorMessage', '', '', 'display: none;');\nconst buttonSaveFeature = document.getElementById('saveButton');\nbuttonSaveFeature.addEventListener('click', _saveNote_pushDetails__WEBPACK_IMPORTED_MODULE_0__.pushDetails); \n}\n\n\n//# sourceURL=webpack://to-do-list-project/./src/notePage/notePageDom.js?");

/***/ }),

/***/ "./src/saveNote/deleteButton.js":
/*!**************************************!*\
  !*** ./src/saveNote/deleteButton.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteButtonFunction: () => (/* binding */ deleteButtonFunction)\n/* harmony export */ });\nfunction deleteButtonFunction (index, notes) {\n    notes.splice(index, 1);\n    localStorage.setItem('notes', JSON.stringify(notes));\n} \n\n\n//# sourceURL=webpack://to-do-list-project/./src/saveNote/deleteButton.js?");

/***/ }),

/***/ "./src/saveNote/editButtonDom.js":
/*!***************************************!*\
  !*** ./src/saveNote/editButtonDom.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   invokeEditButtonDom: () => (/* binding */ invokeEditButtonDom)\n/* harmony export */ });\n/* harmony import */ var _miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../miscModules/typeInputDom */ \"./src/miscModules/typeInputDom.js\");\n\nfunction invokeEditButtonDom () {\n(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_0__.makeInputDom)('#content', 'div', '', 'inputMainDiv')\n;(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_0__.makeInputDom)('#inputMainDiv', 'div', '', 'inputSubDiv')\n;(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_0__.makeInputDom) ('#inputSubDiv', 'textarea', '', 'titleInput', '', 'Tile')\n;(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_0__.makeInputDom) ('#inputSubDiv', 'textarea', '', 'descriptionInput', '', 'Description');\n(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_0__.makeInputDom) ('#inputSubDiv', 'textarea', '', 'noteInput', '', 'Note...');\n(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_0__.makeInputDom) ('#inputSubDiv', 'div', ' ', 'bottomNoteDiv', '', '');\n(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_0__.makeInputDom) ('#bottomNoteDiv', 'label','Due Date:', 'dueDate', '', '' );\n(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_0__.makeInputDom) ('#bottomNoteDiv', 'input', '', 'dateInput', 'date', '');\n(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_0__.makeInputDom) ('#bottomNoteDiv', 'button','Save', 'editButton');\n(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_0__.makeInputDom) ('#inputMainDiv', 'div', 'Can not save note without a title!', 'errorMessage', '', '', 'display: none;');\n}\n \n\n//# sourceURL=webpack://to-do-list-project/./src/saveNote/editButtonDom.js?");

/***/ }),

/***/ "./src/saveNote/editButtonFunction.js":
/*!********************************************!*\
  !*** ./src/saveNote/editButtonFunction.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   editNote: () => (/* binding */ editNote)\n/* harmony export */ });\n/* harmony import */ var _saveNote_editButtonDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../saveNote/editButtonDom */ \"./src/saveNote/editButtonDom.js\");\n/* harmony import */ var _miscModules_clearPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../miscModules/clearPage */ \"./src/miscModules/clearPage.js\");\n/* harmony import */ var _allProjects_displayNotes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../allProjects/displayNotes */ \"./src/allProjects/displayNotes.js\");\n\n\n\nfunction editNote (index,note) {\n    (0,_miscModules_clearPage__WEBPACK_IMPORTED_MODULE_1__.clearContentPage)();\n    (0,_saveNote_editButtonDom__WEBPACK_IMPORTED_MODULE_0__.invokeEditButtonDom)();\n    document.getElementById('titleInput').value = note.noteTitle;\n    document.getElementById('descriptionInput').value = note.noteDescription;\n    document.getElementById('noteInput').value = note.noteNotes;\n    document.getElementById('dateInput').value = note.noteDate;\n    document.getElementById('editButton').addEventListener('click',function(){\n        const notes = JSON.parse(localStorage.getItem('notes')) || [];\n        notes [index].noteTitle = document.getElementById('titleInput').value;\n        notes [index].noteDescription = document.getElementById('descriptionInput').value;\n        notes [index].noteNotes = document.getElementById('noteInput').value;\n        notes [index].noteDate = document.getElementById('dateInput').value;\n        localStorage.setItem('notes', JSON.stringify(notes));\n        (0,_allProjects_displayNotes__WEBPACK_IMPORTED_MODULE_2__.displayNotes)();\n});\n}\n\n\n//# sourceURL=webpack://to-do-list-project/./src/saveNote/editButtonFunction.js?");

/***/ }),

/***/ "./src/saveNote/pushDetails.js":
/*!*************************************!*\
  !*** ./src/saveNote/pushDetails.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pushDetails: () => (/* binding */ pushDetails)\n/* harmony export */ });\n/* harmony import */ var _storeLocalSotrage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storeLocalSotrage */ \"./src/saveNote/storeLocalSotrage.js\");\n/* harmony import */ var _miscModules_clearInputField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../miscModules/clearInputField */ \"./src/miscModules/clearInputField.js\");\n/* harmony import */ var _userInputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userInputs */ \"./src/saveNote/userInputs.js\");\n\n\n\nfunction pushDetails () {\n    let userFields = (0,_userInputs__WEBPACK_IMPORTED_MODULE_2__.userInput)();\n     const errorDiv = document.getElementById('errorMessage'); \n    if (userFields.noteTitle.trim() === '') {\n        errorDiv.style.display = 'block';\n    }\n    else {\n        errorDiv.style.display = 'none';\n        (0,_storeLocalSotrage__WEBPACK_IMPORTED_MODULE_0__.localStore)(userFields);\n        (0,_miscModules_clearInputField__WEBPACK_IMPORTED_MODULE_1__.clearInputFields)();\n    }\n}\n\n\n//# sourceURL=webpack://to-do-list-project/./src/saveNote/pushDetails.js?");

/***/ }),

/***/ "./src/saveNote/storeLocalSotrage.js":
/*!*******************************************!*\
  !*** ./src/saveNote/storeLocalSotrage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   localStore: () => (/* binding */ localStore)\n/* harmony export */ });\nfunction localStore(userData) {\n    if (localStorage.getItem('notes') == null) {\n        const noteList = JSON.stringify([userData]);\n        localStorage.setItem('notes', noteList);\n        }\n    else {\n        const newNote = JSON.parse(localStorage.getItem('notes'));\n        const newNoteList = [...newNote, userData];\n        localStorage.setItem('notes', JSON.stringify(newNoteList));\n        console.log(JSON.parse(localStorage.getItem('notes')))\n            }\n}\n\n\n//# sourceURL=webpack://to-do-list-project/./src/saveNote/storeLocalSotrage.js?");

/***/ }),

/***/ "./src/saveNote/userInputs.js":
/*!************************************!*\
  !*** ./src/saveNote/userInputs.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   userInput: () => (/* binding */ userInput)\n/* harmony export */ });\nfunction userInput () {\n    const noteDetails = {\n        noteTitle:document.getElementById(\"titleInput\").value,\n        noteDescription:document.getElementById(\"descriptionInput\").value,\n        noteNotes:document.getElementById(\"noteInput\").value,\n        noteDate:document.getElementById('dateInput').value,\n    };\n    return noteDetails;\n}\n\n\n//# sourceURL=webpack://to-do-list-project/./src/saveNote/userInputs.js?");

/***/ }),

/***/ "./src/sideBar/sideBarButtonContent.js":
/*!*********************************************!*\
  !*** ./src/sideBar/sideBarButtonContent.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   invokeSideBarButton: () => (/* binding */ invokeSideBarButton)\n/* harmony export */ });\n/* harmony import */ var _miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../miscModules/typeInputDom */ \"./src/miscModules/typeInputDom.js\");\n/* harmony import */ var _miscModules_imagesDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../miscModules/imagesDom */ \"./src/miscModules/imagesDom.js\");\n\n\nfunction invokeSideBarButton () {\n(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_0__.makeInputDom) ('#leftBarContentDiv', 'button', 'New Note', 'newNote');\n(0,_miscModules_imagesDom__WEBPACK_IMPORTED_MODULE_1__.createImage)('#newNote', 'img', 'plusicon', 'plus icon');\n(0,_miscModules_typeInputDom__WEBPACK_IMPORTED_MODULE_0__.makeInputDom) ('#leftBarContentDiv', 'button', 'All Projects', 'upcoming');\n(0,_miscModules_imagesDom__WEBPACK_IMPORTED_MODULE_1__.createImage) ('#upcoming', 'img', 'upcomingIcon', 'calender icon');\n}\n\n\n\n//# sourceURL=webpack://to-do-list-project/./src/sideBar/sideBarButtonContent.js?");

/***/ }),

/***/ "./src/images/arrowIcon.png":
/*!**********************************!*\
  !*** ./src/images/arrowIcon.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"arrowIcon .png\";\n\n//# sourceURL=webpack://to-do-list-project/./src/images/arrowIcon.png?");

/***/ }),

/***/ "./src/images/homeIcon.png":
/*!*********************************!*\
  !*** ./src/images/homeIcon.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"homeIcon .png\";\n\n//# sourceURL=webpack://to-do-list-project/./src/images/homeIcon.png?");

/***/ }),

/***/ "./src/images/plusIcon.png":
/*!*********************************!*\
  !*** ./src/images/plusIcon.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"plusIcon .png\";\n\n//# sourceURL=webpack://to-do-list-project/./src/images/plusIcon.png?");

/***/ }),

/***/ "./src/images/searchIcon.png":
/*!***********************************!*\
  !*** ./src/images/searchIcon.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"searchIcon .png\";\n\n//# sourceURL=webpack://to-do-list-project/./src/images/searchIcon.png?");

/***/ }),

/***/ "./src/images/upcomingIcon.png":
/*!*************************************!*\
  !*** ./src/images/upcomingIcon.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"upcomingIcon .png\";\n\n//# sourceURL=webpack://to-do-list-project/./src/images/upcomingIcon.png?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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