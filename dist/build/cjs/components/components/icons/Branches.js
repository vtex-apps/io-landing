"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));

var _utils=require("./utils");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}

const Branches=({
colorToken})=>/*#__PURE__*/

_react.default.createElement("svg",{
className:`${(0,_utils.baseClassname)("branches")} ${colorToken||""}`,
width:"64",
height:"64",
viewBox:"0 0 64 64",
fill:"none",
xmlns:"http://www.w3.org/2000/svg"},/*#__PURE__*/

_react.default.createElement("path",{
d:"M61 46H34L22 32L34 18H61",
stroke:"#F71963",
strokeWidth:"2",
strokeMiterlimit:"10"}),/*#__PURE__*/

_react.default.createElement("path",{d:"M22 32H2",stroke:"#F71963",strokeWidth:"2",strokeMiterlimit:"10"}),/*#__PURE__*/
_react.default.createElement("path",{
d:"M53 10L61 18L53 26",
stroke:"#fff",
strokeWidth:"2",
strokeMiterlimit:"10",
strokeLinecap:"square"}),/*#__PURE__*/

_react.default.createElement("path",{
d:"M53 38L61 46L53 54",
stroke:"#fff",
strokeWidth:"2",
strokeMiterlimit:"10",
strokeLinecap:"square"}));var _default=




Branches;exports.default=_default;