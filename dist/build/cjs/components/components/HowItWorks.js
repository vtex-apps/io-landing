"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _microReactIntl=require("@vtex/micro-react-intl");
var _react=_interopRequireDefault(require("react"));

var _AppStore=_interopRequireDefault(require("./icons/AppStore"));
var _Branches=_interopRequireDefault(require("./icons/Branches"));
var _Stack=_interopRequireDefault(require("./icons/Stack"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}

const HowItWorks=()=>{
const intl=(0,_microReactIntl.useIntl)();
return/*#__PURE__*/(
_react.default.createElement("section",{className:"flex flex-column flex-row-l items-center justify-between w-90 vh-75-l center c-on-base--inverted mv7"},/*#__PURE__*/
_react.default.createElement("article",{className:"mh7-l mv5 mv0-l"},/*#__PURE__*/
_react.default.createElement(_Stack.default,null),/*#__PURE__*/
_react.default.createElement("p",{className:"t-body mb3"},
intl.formatMessage({id:"io.howitworks.appstore.scale"})),/*#__PURE__*/

_react.default.createElement("p",{className:"f2 mt0"},
intl.formatMessage({id:"io.howitworks.appstore"})),/*#__PURE__*/

_react.default.createElement("p",{className:"t-body lh-copy"},
intl.formatMessage({id:"io.howitworks.appstore.solutions"}))),/*#__PURE__*/


_react.default.createElement("article",{className:"mh7-l mv5 mv0-l"},/*#__PURE__*/
_react.default.createElement(_Branches.default,null),/*#__PURE__*/
_react.default.createElement("p",{className:"t-body mb3"},
intl.formatMessage({id:"io.howitworks.abtesting.decisions"})),/*#__PURE__*/

_react.default.createElement("p",{className:"f2 mt0"},
intl.formatMessage({id:"io.howitworks.abtesting"})),/*#__PURE__*/

_react.default.createElement("p",{className:"t-body lh-copy"},
intl.formatMessage({id:"io.howitworks.abtesting.tests"}))),/*#__PURE__*/


_react.default.createElement("article",{className:"mh7-l mv5 mv0-l"},/*#__PURE__*/
_react.default.createElement(_AppStore.default,null),/*#__PURE__*/
_react.default.createElement("p",{className:"t-body mb3"},
intl.formatMessage({id:"io.howitworks.storeframework.build"})),/*#__PURE__*/

_react.default.createElement("p",{className:"f2 mt0"},
intl.formatMessage({id:"io.howitworks.storeframework"})),/*#__PURE__*/

_react.default.createElement("p",{className:"t-body lh-copy"},
intl.formatMessage({id:"io.howitworks.storeframework.develop"})))));




};var _default=

HowItWorks;exports.default=_default;