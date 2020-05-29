"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));
var _microReactIntl=require("@vtex/micro-react-intl");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}










const Card=({
icon,
title,
text,
index,
link,
soon})=>
{
return/*#__PURE__*/(
_react.default.createElement("article",{
className:`bg-base mv3 ${
index%2===0?"mr3-l":"ml3-l"
} ph6 pv5 w-40-l w-90 br3`},/*#__PURE__*/

_react.default.createElement("a",{href:link,className:"flex items-center link"},/*#__PURE__*/
_react.default.createElement("div",{className:"mr7"},icon),/*#__PURE__*/
_react.default.createElement("div",null,/*#__PURE__*/
_react.default.createElement("p",{className:"t-heading-4 c-muted-1"},/*#__PURE__*/
_react.default.createElement(_microReactIntl.FormattedMessage,{id:title}),
soon&&/*#__PURE__*/_react.default.createElement("span",{className:"c-muted-2"}," [SOON]")),/*#__PURE__*/

_react.default.createElement("p",{className:"t-body c-muted-1"},/*#__PURE__*/
_react.default.createElement(_microReactIntl.FormattedMessage,{id:text}))))));





};var _default=

Card;exports.default=_default;