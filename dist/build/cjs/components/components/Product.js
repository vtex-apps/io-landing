"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;

var _microReactIntl=require("@vtex/micro-react-intl");
var _react=_interopRequireDefault(require("react"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}

const ProductDisplay=()=>{
const products="/assets/product.svg";

return/*#__PURE__*/(
_react.default.createElement("section",{className:"w-100 flex flex-column flex-row-l justify-between pv10 bg-base--inverted"},/*#__PURE__*/
_react.default.createElement("div",{className:"c-on-base--inverted flex flex-column justify-center w-33-l pl9-l mh0-l"},/*#__PURE__*/
_react.default.createElement("p",{className:"t-small w-90 center left-l"},/*#__PURE__*/
_react.default.createElement(_microReactIntl.FormattedMessage,{id:"io.product.deliver"})),/*#__PURE__*/

_react.default.createElement("p",{className:"f1 mt1 mb1 w-90 center left-l"},/*#__PURE__*/
_react.default.createElement(_microReactIntl.FormattedMessage,{id:"io.product.scale"})),/*#__PURE__*/

_react.default.createElement("p",{className:"t-body w-90 center left-l"},/*#__PURE__*/
_react.default.createElement(_microReactIntl.FormattedMessage,{id:"io.product.cloud"}))),/*#__PURE__*/


_react.default.createElement("img",{src:products,alt:"Store Framework sample"})));


};var _default=

ProductDisplay;exports.default=_default;