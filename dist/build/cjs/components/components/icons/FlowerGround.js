"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));

var _utils=require("./utils");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}

const FlowerGround=({
colorToken})=>/*#__PURE__*/

_react.default.createElement("svg",{
className:`${(0,_utils.baseClassname)("flower")} ${colorToken||""}`,
width:"62",
height:"57",
viewBox:"0 0 62 57",
fill:"none",
xmlns:"http://www.w3.org/2000/svg"},/*#__PURE__*/

_react.default.createElement("path",{
d:"M43 21H41C35.4771 21 31 25.4771 31 31V35H33C38.5229 35 43 30.5229 43 25V21Z",
stroke:"#F71963",
strokeWidth:"2",
strokeMiterlimit:"10",
strokeLinecap:"square"}),/*#__PURE__*/

_react.default.createElement("path",{
d:"M19 11H21C26.5229 11 31 15.4771 31 21V25H29C23.4771 25 19 20.5229 19 15V11Z",
stroke:"#F71963",
strokeWidth:"2",
strokeMiterlimit:"10",
strokeLinecap:"square"}),/*#__PURE__*/

_react.default.createElement("path",{
d:"M31 48.25V0.258789",
stroke:"#F71963",
strokeWidth:"2",
strokeMiterlimit:"10"}),/*#__PURE__*/

_react.default.createElement("path",{
d:"M1 56H19C19 53.7908 20.7909 52 23 52C23.9974 52 24.8983 52.3782 25.5989 52.9821C26.791 50.0618 29.6509 48 33 48C37.4183 48 41 51.5817 41 56H61",
stroke:"#142032",
strokeWidth:"2",
strokeMiterlimit:"10",
strokeLinecap:"square"}));var _default=




FlowerGround;exports.default=_default;