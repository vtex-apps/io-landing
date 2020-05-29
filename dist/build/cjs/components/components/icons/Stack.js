"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));

var _utils=require("./utils");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}

const Stack=({colorToken})=>/*#__PURE__*/
_react.default.createElement("svg",{
className:`${(0,_utils.baseClassname)("stack")} ${colorToken||""}`,
width:"64",
height:"64",
viewBox:"0 0 64 64",
fill:"none",
xmlns:"http://www.w3.org/2000/svg"},/*#__PURE__*/

_react.default.createElement("path",{
d:"M54.749 28.999L60 32L32 48L4 32L9.25 29",
stroke:"#F71963",
strokeWidth:"2",
strokeMiterlimit:"10",
strokeLinecap:"square"}),/*#__PURE__*/

_react.default.createElement("path",{
d:"M54.745 41.9971L60 45.0001L32 61.0001L4 45.0001L9.25 42.0001",
stroke:"#F71963",
strokeWidth:"2",
strokeMiterlimit:"10",
strokeLinecap:"square"}),/*#__PURE__*/

_react.default.createElement("path",{
d:"M4 19L32 3L60 19L32 35L4 19Z",
stroke:"#fff",
strokeWidth:"2",
strokeMiterlimit:"10",
strokeLinecap:"square"}));var _default=




Stack;exports.default=_default;