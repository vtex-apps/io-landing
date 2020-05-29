"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;
var _micro=require("@vtex/micro");function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}

class OnBuild extends _micro.OnBuildPlugin{constructor(...args){super(...args);_defineProperty(this,"getConfig",
async(previous,target)=>{
return previous;
})}}exports.default=OnBuild;