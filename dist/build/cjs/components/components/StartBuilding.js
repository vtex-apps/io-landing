"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;

var _microReactIntl=require("@vtex/micro-react-intl");
var _styleguide=require("@vtex/styleguide");
var _react=_interopRequireDefault(require("react"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}

const StartBuilding=()=>{
const image="/assets/illustrationBlue.png";

return/*#__PURE__*/(
_react.default.createElement("section",{className:"flex flex-row-m flex-column vh-100-l c-on-base bg-base"},/*#__PURE__*/
_react.default.createElement("div",{className:"w-50-l flex-l dn-s"},/*#__PURE__*/
_react.default.createElement("img",{src:image,alt:"",className:"h-100 w-100"})),/*#__PURE__*/

_react.default.createElement("div",{className:"w-50-l h-100 flex flex-column justify-around items-center"},/*#__PURE__*/
_react.default.createElement("p",{className:"w-90 center t-heading-1 w-50-l"},/*#__PURE__*/
_react.default.createElement(_microReactIntl.FormattedMessage,{id:"io.startbuilding.title"})),/*#__PURE__*/

_react.default.createElement("div",{className:"w-50-ns w-90-s flex flex-column justify-center pb4"},/*#__PURE__*/
_react.default.createElement("p",{className:"t-body mb7 w-100-s"},/*#__PURE__*/
_react.default.createElement(_microReactIntl.FormattedMessage,{id:"io.startbuilding.text"})),/*#__PURE__*/

_react.default.createElement("div",{className:"w-75 mb5"},/*#__PURE__*/
_react.default.createElement("a",{href:"https://www.vtex.com/partner/"},/*#__PURE__*/
_react.default.createElement(_styleguide.Button,{variation:"primary"},/*#__PURE__*/
_react.default.createElement("p",{className:"action-secondary"},/*#__PURE__*/
_react.default.createElement(_microReactIntl.FormattedMessage,{id:"io.startbuilding.cta"})))))))));








};var _default=

StartBuilding;exports.default=_default;