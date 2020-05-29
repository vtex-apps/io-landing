"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));

var _utils=require("./utils");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}

const AppStore=({
colorToken})=>/*#__PURE__*/

_react.default.createElement("svg",{
className:`${(0,_utils.baseClassname)("app-store")} ${colorToken||""}`,
width:"64",
height:"64",
viewBox:"0 0 64 64",
fill:"none",
xmlns:"http://www.w3.org/2000/svg"},/*#__PURE__*/

_react.default.createElement("path",{
d:"M26 5H5V26H26V5Z",
stroke:"#fff",
strokeWidth:"2",
strokeMiterlimit:"10",
strokeLinecap:"square"}),/*#__PURE__*/

_react.default.createElement("path",{
d:"M61.2826 15.4999L48.4995 2.7168L35.7164 15.4999L48.4995 28.283L61.2826 15.4999Z",
stroke:"#F71963",
strokeWidth:"2",
strokeMiterlimit:"10",
strokeLinecap:"square"}),/*#__PURE__*/

_react.default.createElement("path",{
d:"M59 38H38V59H59V38Z",
stroke:"#fff",
strokeWidth:"2",
strokeMiterlimit:"10",
strokeLinecap:"square"}),/*#__PURE__*/

_react.default.createElement("path",{
d:"M26 38H5V59H26V38Z",
stroke:"#fff",
strokeWidth:"2",
strokeMiterlimit:"10",
strokeLinecap:"square"}));var _default=




AppStore;exports.default=_default;