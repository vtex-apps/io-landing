"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;


var _microReactIntl=require("@vtex/micro-react-intl");
var _react=_interopRequireDefault(require("react"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}

const EvolutionSection=()=>{
const codeSample="/assets/code.png";
const backgroundEffects="/assets/backgroundEffects.svg";

return/*#__PURE__*/(
_react.default.createElement("section",{className:"flex flex-column flex-row-l items-center vh-100-l"},/*#__PURE__*/
_react.default.createElement("div",{
className:"c-on-base--inverted w-50-l w-100 h-75 bg-base-inverted flex justify-center items-center order-1 order-0-l",
style:{backgroundImage:`url(${backgroundEffects})`}},/*#__PURE__*/

_react.default.createElement("img",{src:codeSample,className:"z-4",alt:"code-sample"})),/*#__PURE__*/

_react.default.createElement("div",{className:"w-90-s center w-50-l w-100-s pl10-l flex flex-column justify-center"},/*#__PURE__*/
_react.default.createElement("div",{className:"order-0 order-1-l w-90 center mh7"},/*#__PURE__*/
_react.default.createElement("p",{className:"c-on-base--inverted t-small w-90"},/*#__PURE__*/
_react.default.createElement(_microReactIntl.FormattedMessage,{id:"io.evolution.focus"})),/*#__PURE__*/

_react.default.createElement("p",{className:"c-on-base--inverted f1 mt1 mb1 w-75"},/*#__PURE__*/
_react.default.createElement(_microReactIntl.FormattedMessage,{id:"io.evolution.evolution"})),/*#__PURE__*/

_react.default.createElement("p",{className:"c-on-base--inverted t-body w-90 lh-copy mb7"},/*#__PURE__*/
_react.default.createElement(_microReactIntl.FormattedMessage,{id:"io.evolution.perspective"}))),/*#__PURE__*/


_react.default.createElement("div",{className:"order-2-s w-90 center mh7"},/*#__PURE__*/
_react.default.createElement("p",{className:"c-on-base--inverted t-body w-90 mt7 mb2"},/*#__PURE__*/
_react.default.createElement(_microReactIntl.FormattedMessage,{id:"io.evolution.vtexio"})),/*#__PURE__*/

_react.default.createElement("p",{className:"c-on-base--inverted t-body w-90 lh-copy"},/*#__PURE__*/
_react.default.createElement(_microReactIntl.FormattedMessage,{id:"io.evolution.vtexio.description"}))))));





};var _default=

EvolutionSection;exports.default=_default;