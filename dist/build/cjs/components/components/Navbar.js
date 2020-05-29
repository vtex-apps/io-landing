"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;

var _microReactIntl=require("@vtex/micro-react-intl");
var _microReactRouter=require("@vtex/micro-react-router");
var _styleguide=require("@vtex/styleguide");
var _react=_interopRequireWildcard(require("react"));

var _locales=require("../locales");function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap;_getRequireWildcardCache=function(){return cache};return cache}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj}}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}newObj.default=obj;if(cache){cache.set(obj,newObj)}return newObj}





const supportedLangs=Array.from(_locales.locales);

const Navbar=({enableLocaleSelector})=>{
const intl=(0,_microReactIntl.useIntl)();
const[openLocaleSelector,setOpenLocaleSelector]=(0,_react.useState)(false);
const[openNav,setOpenNav]=(0,_react.useState)(false);
const[selectedLocale,setSelectedLocale]=(0,_react.useState)(
findLocale(intl.locale));

const logo="/assets/vtexColdGray.svg";

const handleLocaleClick=({target:{id}})=>{
setOpenLocaleSelector(false);
setSelectedLocale(findLocale(id));
};

return/*#__PURE__*/(
_react.default.createElement("nav",{className:"flex"},/*#__PURE__*/
_react.default.createElement("div",{
className:"fixed bg-base--inverted c-on-base--inverted w-100 flex flex-column flex-row-l justify-between z-5",
style:{
boxShadow:"0px 3px 20px rgba(0, 0, 0, 0.3)"}},/*#__PURE__*/


_react.default.createElement("div",{className:"flex"},/*#__PURE__*/
_react.default.createElement("button",{
className:"dn-l bg-base--inverted c-on-base--inverted w-33 w-50-l bn",
onClick:()=>setOpenNav(!openNav)},/*#__PURE__*/

_react.default.createElement(_styleguide.IconBars,null)),/*#__PURE__*/

_react.default.createElement("div",{className:"w-40 w-50-l"},/*#__PURE__*/
_react.default.createElement(_microReactRouter.Link,{to:"/",className:"c-on-base--inverted self-center flex items-center link"},/*#__PURE__*/
_react.default.createElement("img",{src:logo,className:"h3",alt:"VTEX"}),/*#__PURE__*/
_react.default.createElement("p",{className:"dn-s flex-l"},"|"),/*#__PURE__*/
_react.default.createElement("p",{className:"dn-s flex-l ml3"},"Developer")))),/*#__PURE__*/



_react.default.createElement("div",{className:"flex-l",hidden:!openNav},/*#__PURE__*/
_react.default.createElement("ul",{className:"flex flex-column flex-row-l justify-center list mt0 items-center mb0 relative"},/*#__PURE__*/
_react.default.createElement("li",{className:"mh5 mv5 mv0-l"},/*#__PURE__*/
_react.default.createElement("a",{className:"link c-on-base--inverted",href:"https://vtex.io/docs"},
intl.formatMessage({id:"io.navbar.learn"}))),/*#__PURE__*/


_react.default.createElement("li",{className:"mh5 mv5 mv0-l"},/*#__PURE__*/
_react.default.createElement("a",{href:"https://vtex.io/docs/components/all",className:"link c-on-base--inverted"},
intl.formatMessage({id:"io.navbar.feature-list"}))),


enableLocaleSelector&&/*#__PURE__*/
_react.default.createElement("li",{className:"flex items-center"},/*#__PURE__*/
_react.default.createElement("div",{className:"h-100 relative w3"},/*#__PURE__*/
_react.default.createElement("button",{
onClick:()=>setOpenLocaleSelector(!openLocaleSelector),
className:"c-on-base--inverted bg-base--inverted bn flex items-center pointer"},/*#__PURE__*/

_react.default.createElement("p",{className:"ttu mr4"},splitLocale(selectedLocale)),
openLocaleSelector?/*#__PURE__*/_react.default.createElement(_styleguide.IconCaretUp,null):/*#__PURE__*/_react.default.createElement(_styleguide.IconCaretDown,null)),/*#__PURE__*/

_react.default.createElement("div",{
hidden:!openLocaleSelector,
className:"z-4 bg-base--inverted pa3 absolute"},

supportedLangs.map((lang)=>/*#__PURE__*/
_react.default.createElement("button",{
className:"tc ttu c-on-base--inverted pointer bn bg-base--inverted",
onClick:handleLocaleClick,
id:lang,
key:lang},

splitLocale(lang)))))))))));











};

function splitLocale(locale){
return locale.split("-")[0];
}

function findLocale(locale){
const localeObj=supportedLangs.find(
lang=>splitLocale(lang)===splitLocale(locale));

return localeObj||supportedLangs[0];
}var _default=

Navbar;exports.default=_default;