"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;

var _microReactRouter=require("@vtex/micro-react-router");

var _locales=require("../components/locales");/* eslint-disable quote-props */

const removeEndingSlash=x=>x.length>1&&x.endsWith("/")?x.slice(0,x.length-1):x;

const pages={
"io":"io",
"store-features":"store-features",
"404":"404"};


const paths={
"/":pages.io,
"/store-features":pages["store-features"]};


const router=async request=>{
const{path,query}=request;

const locale=_locales.locales.has(query.locale)?query.locale:"en";

const fixedPath=removeEndingSlash(path);
const name=paths[fixedPath]||"404";

const resolved={
data:null,
name:`${name}.${locale}`,
status:name==="404"?404:200};


return(0,_microReactRouter.pack)(resolved,path);
};var _default=

router;exports.default=_default;