import React from"react";

import{baseClassname}from"./utils";

const AppStore=({
colorToken})=>/*#__PURE__*/

React.createElement("svg",{
className:`${baseClassname("app-store")} ${colorToken||""}`,
width:"64",
height:"64",
viewBox:"0 0 64 64",
fill:"none",
xmlns:"http://www.w3.org/2000/svg"},/*#__PURE__*/

React.createElement("path",{
d:"M26 5H5V26H26V5Z",
stroke:"#fff",
strokeWidth:"2",
strokeMiterlimit:"10",
strokeLinecap:"square"}),/*#__PURE__*/

React.createElement("path",{
d:"M61.2826 15.4999L48.4995 2.7168L35.7164 15.4999L48.4995 28.283L61.2826 15.4999Z",
stroke:"#F71963",
strokeWidth:"2",
strokeMiterlimit:"10",
strokeLinecap:"square"}),/*#__PURE__*/

React.createElement("path",{
d:"M59 38H38V59H59V38Z",
stroke:"#fff",
strokeWidth:"2",
strokeMiterlimit:"10",
strokeLinecap:"square"}),/*#__PURE__*/

React.createElement("path",{
d:"M26 38H5V59H26V38Z",
stroke:"#fff",
strokeWidth:"2",
strokeMiterlimit:"10",
strokeLinecap:"square"}));




export default AppStore;