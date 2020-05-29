"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _microReactIntl=require("@vtex/micro-react-intl");
var _react=_interopRequireDefault(require("react"));

var _Lightbulb=_interopRequireDefault(require("./icons/Lightbulb"));
var _Serverless=_interopRequireDefault(require("./icons/Serverless"));
var _Sync=_interopRequireDefault(require("./icons/Sync"));
var _Workspaces=_interopRequireDefault(require("./icons/Workspaces"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}

const KeyFeatures=()=>/*#__PURE__*/
_react.default.createElement("section",{className:"mv9 mt5-l vh-75-l bg-base--inverted c-on-base--inverted center w-90"},/*#__PURE__*/
_react.default.createElement("p",{className:"mb0"},/*#__PURE__*/
_react.default.createElement(_microReactIntl.FormattedMessage,{id:"io.features.title.small"})),/*#__PURE__*/

_react.default.createElement("p",{className:"t-heading-1 w-50-ns mt3"},/*#__PURE__*/
_react.default.createElement(_microReactIntl.FormattedMessage,{id:"io.features.title"})),/*#__PURE__*/

_react.default.createElement("div",{className:"flex flex-column flex-row-l items-center justify-between"},/*#__PURE__*/
_react.default.createElement("article",{className:"mh7-l mv5 mv0-l"},/*#__PURE__*/
_react.default.createElement(_Sync.default,null),/*#__PURE__*/
_react.default.createElement("p",{className:"f4"},/*#__PURE__*/
_react.default.createElement(_microReactIntl.FormattedMessage,{id:"io.features.cloud"})),/*#__PURE__*/

_react.default.createElement("p",{className:"t-body lh-copy"},/*#__PURE__*/
_react.default.createElement(_microReactIntl.FormattedMessage,{id:"io.features.cloud.description"}))),/*#__PURE__*/


_react.default.createElement("article",{className:"mh7-l mv5 mv0-l"},/*#__PURE__*/
_react.default.createElement(_Lightbulb.default,null),/*#__PURE__*/
_react.default.createElement("p",{className:"f4"},/*#__PURE__*/
_react.default.createElement(_microReactIntl.FormattedMessage,{id:"io.features.setupless"})),/*#__PURE__*/

_react.default.createElement("p",{className:"t-body lh-copy"},/*#__PURE__*/
_react.default.createElement(_microReactIntl.FormattedMessage,{id:"io.features.setupless.description"}))),/*#__PURE__*/


_react.default.createElement("article",{className:"mh7-l mv5 mv0-l"},/*#__PURE__*/
_react.default.createElement(_Workspaces.default,null),/*#__PURE__*/
_react.default.createElement("p",{className:"f4"},/*#__PURE__*/
_react.default.createElement(_microReactIntl.FormattedMessage,{id:"io.features.workspaces"})),/*#__PURE__*/

_react.default.createElement("p",{className:"t-body lh-copy"},/*#__PURE__*/
_react.default.createElement(_microReactIntl.FormattedMessage,{id:"io.features.workspaces.description"}))),/*#__PURE__*/


_react.default.createElement("article",{className:"mh7-l mv5 mv0-l"},/*#__PURE__*/
_react.default.createElement(_Serverless.default,null),/*#__PURE__*/
_react.default.createElement("p",{className:"f4"},/*#__PURE__*/
_react.default.createElement(_microReactIntl.FormattedMessage,{id:"io.features.serverless"})),/*#__PURE__*/

_react.default.createElement("p",{className:"t-body lh-copy"},/*#__PURE__*/
_react.default.createElement(_microReactIntl.FormattedMessage,{id:"io.features.serverless.description"})))));var _default=






KeyFeatures;exports.default=_default;