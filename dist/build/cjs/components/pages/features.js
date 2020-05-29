"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;

var _react=_interopRequireWildcard(require("react"));

var _Footer=_interopRequireDefault(require("../components/Footer"));
var _Navbar=_interopRequireDefault(require("../components/Navbar"));
var _FeaturesData=require("../FeaturesData");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap;_getRequireWildcardCache=function(){return cache};return cache}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj}}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}newObj.default=obj;if(cache){cache.set(obj,newObj)}return newObj}

const FeaturesDisplay=()=>{
return/*#__PURE__*/(
_react.default.createElement(_react.Fragment,null,/*#__PURE__*/
_react.default.createElement(_Navbar.default,null),/*#__PURE__*/
_react.default.createElement("main",{className:"w-100 pv10"},/*#__PURE__*/
_react.default.createElement("div",{className:"flex-ns items-baseline w-90 w-80-ns center mb8"},/*#__PURE__*/
_react.default.createElement("h1",{className:"c-base t-heading-1 pr7"},"Store Features"),/*#__PURE__*/
_react.default.createElement("nav",null,/*#__PURE__*/
_react.default.createElement("ul",{className:"flex-ns list t-heading-5 pl0"},/*#__PURE__*/
_react.default.createElement("li",{className:"pr6 pb4 pb0-ns"},/*#__PURE__*/
_react.default.createElement("a",{
href:"/store-features#store-component-apps",
className:"no-underline c-emphasis dim"},"Store Component Apps")),/*#__PURE__*/




_react.default.createElement("li",null,/*#__PURE__*/
_react.default.createElement("a",{
href:"/store-features#store-pixel-apps",
className:"no-underline c-emphasis dim"},"Store Pixel Apps"))))),/*#__PURE__*/







_react.default.createElement("section",{
id:"store-component-apps",
className:"flex flex-column w-90 w-80-ns center pt8"},/*#__PURE__*/

_react.default.createElement("h2",{className:"c-base t-heading-3 fw3 mb0 mt4"},"Store Component Apps"),/*#__PURE__*/


_react.default.createElement("ul",{className:"t-body list pl0 mt0"},
_FeaturesData.storeComponents.map((component)=>/*#__PURE__*/
_react.default.createElement("li",{className:"mv7 bb b--muted-2",key:component.name},/*#__PURE__*/
_react.default.createElement("p",null,
component.name," ",
component.construction&&"[Under Construction] \uD83D\uDEA7"),/*#__PURE__*/

_react.default.createElement("p",null,/*#__PURE__*/
_react.default.createElement("a",{className:"link",href:component.docs},
component.docs)))))),/*#__PURE__*/






_react.default.createElement("section",{
id:"store-pixel-apps",
className:"flex flex-column w-90 w-80-ns center pt8"},/*#__PURE__*/

_react.default.createElement("h2",{className:"c-base t-heading-3 fw3 mb0 mt4"},"Store Pixel Apps"),/*#__PURE__*/
_react.default.createElement("ul",{className:"t-body list pl0 mt0"},
_FeaturesData.storePixel.map((app)=>/*#__PURE__*/
_react.default.createElement("li",{className:"mv7 bb b--muted-2",key:app.name},/*#__PURE__*/
_react.default.createElement("p",null,app.name),/*#__PURE__*/
_react.default.createElement("p",null,/*#__PURE__*/
_react.default.createElement("a",{className:"link",href:app.docs},
app.docs))))))),/*#__PURE__*/







_react.default.createElement(_Footer.default,null)));


};var _default=

FeaturesDisplay;exports.default=_default;