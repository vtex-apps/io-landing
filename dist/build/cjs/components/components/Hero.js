"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;

var _microReactIntl=require("@vtex/micro-react-intl");
var _styleguide=require("@vtex/styleguide");
var _react=_interopRequireDefault(require("react"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}

const Hero=()=>{
const brand="/assets/brands.svg";

return/*#__PURE__*/(
_react.default.createElement("section",{
className:"mb5 pt6 pb8 bg-base--inverted c-on-base--inverted flex flex-column items-center justify-center",
style:{backgroundImage:`url(${brand})`}},/*#__PURE__*/

_react.default.createElement("p",{
className:"tc w-40-ns mb0 mt10 t-heading-1",
style:{fontSize:"5rem"}},/*#__PURE__*/

_react.default.createElement(_microReactIntl.FormattedMessage,{id:"io.hero.globalbrands"})),/*#__PURE__*/

_react.default.createElement("p",{className:"w-40 t-body tc mv6"},/*#__PURE__*/
_react.default.createElement(_microReactIntl.FormattedMessage,{id:"io.hero.resources"})),/*#__PURE__*/

_react.default.createElement("div",{className:"mt5"},/*#__PURE__*/
_react.default.createElement("a",{href:"https://vtex.io/docs/getting-started/build-stores-with-store-framework/1"},/*#__PURE__*/
_react.default.createElement(_styleguide.Button,{variation:"primary"},/*#__PURE__*/
_react.default.createElement("p",{className:"ttu"},/*#__PURE__*/
_react.default.createElement(_microReactIntl.FormattedMessage,{id:"io.hero.cta"}))))),/*#__PURE__*/




_react.default.createElement("a",{
className:"tc c-on-base--inverted mt5 t-small",
href:"https://www.vtex.com/partner/program/"},/*#__PURE__*/

_react.default.createElement(_microReactIntl.FormattedMessage,{id:"io.hero.partners"}))));



};var _default=

Hero;exports.default=_default;