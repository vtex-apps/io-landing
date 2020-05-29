"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _micro=require("@vtex/micro");
var _microCss=require("@vtex/micro-css");
var _webpackBlocks=require("webpack-blocks");function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}






class OnAssemble extends _micro.OnAssemblePlugin{constructor(...args){super(...args);_defineProperty(this,"getConfig",
async config=>{
const block=[
(0,_microCss.purgeCSS)({
whitelist:()=>_microCss.htmlTags}),

(0,_webpackBlocks.defineConstants)({
global:{}})];



return(0,_webpackBlocks.group)([
config,
...block]);

})}}exports.default=OnAssemble;