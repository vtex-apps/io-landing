"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(require("react"));

var _Evolution=_interopRequireDefault(require("./components/Evolution"));
var _HowItWorks=_interopRequireDefault(require("./components/HowItWorks"));
var _KeyFeatures=_interopRequireDefault(require("./components/KeyFeatures"));
var _Product=_interopRequireDefault(require("./components/Product"));
var _StartBuilding=_interopRequireDefault(require("./components/StartBuilding"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap;_getRequireWildcardCache=function(){return cache};return cache}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj}}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}newObj.default=obj;if(cache){cache.set(obj,newObj)}return newObj}

const LandingBelowTheFold=()=>/*#__PURE__*/
_react.default.createElement(_react.Fragment,null,/*#__PURE__*/
_react.default.createElement(_Product.default,null),/*#__PURE__*/
_react.default.createElement(_HowItWorks.default,null),/*#__PURE__*/
_react.default.createElement(_Evolution.default,null),/*#__PURE__*/
_react.default.createElement(_KeyFeatures.default,null),/*#__PURE__*/
_react.default.createElement(_StartBuilding.default,null));var _default=



LandingBelowTheFold;exports.default=_default;