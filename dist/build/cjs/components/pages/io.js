"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(require("react"));
var _component=_interopRequireDefault(require("@loadable/component"));

var _CardGrid=_interopRequireDefault(require("../components/CardGrid"));
var _Footer=_interopRequireDefault(require("../components/Footer"));
var _Hero=_interopRequireDefault(require("../components/Hero"));
var _Navbar=_interopRequireDefault(require("../components/Navbar"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap;_getRequireWildcardCache=function(){return cache};return cache}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj}}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj)}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}newObj.default=obj;if(cache){cache.set(obj,newObj)}return newObj}

const BelowTheFold=(0,_component.default)({resolved:{},chunkName(){return"ioBelow"},isReady(props){const key=this.resolve(props);if(this.resolved[key]===false){return false}if(typeof __webpack_modules__!=="undefined"){return!!__webpack_modules__[key]}return false},importAsync:()=>Promise.resolve().then(()=>_interopRequireWildcard(require(


"../ioBelow"))),requireAsync(props){const key=this.resolve(props);this.resolved[key]=false;return this.importAsync(props).then(resolved=>{this.resolved[key]=true;return resolved})},requireSync(props){const id=this.resolve(props);if(typeof __webpack_require__!=="undefined"){return __webpack_require__(id)}return eval("module.require")(id)},resolve(){if(require.resolveWeak){return require.resolveWeak("../ioBelow")}return eval("require.resolve")("../ioBelow")}},
{
ssr:false});


const Landing=()=>/*#__PURE__*/
_react.default.createElement(_react.Fragment,null,/*#__PURE__*/
_react.default.createElement(_Navbar.default,null),/*#__PURE__*/
_react.default.createElement("main",{className:"w-100 bg-base--inverted"},/*#__PURE__*/
_react.default.createElement(_Hero.default,null),/*#__PURE__*/
_react.default.createElement(_CardGrid.default,null),/*#__PURE__*/
_react.default.createElement(BelowTheFold,null)),/*#__PURE__*/

_react.default.createElement(_Footer.default,null));var _default=



Landing;exports.default=_default;