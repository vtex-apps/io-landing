import React from"react";

import{baseClassname}from"./utils";

const Stack=({colorToken})=>/*#__PURE__*/
React.createElement("svg",{
className:`${baseClassname("stack")} ${colorToken||""}`,
width:"64",
height:"64",
viewBox:"0 0 64 64",
fill:"none",
xmlns:"http://www.w3.org/2000/svg"},/*#__PURE__*/

React.createElement("path",{
d:"M54.749 28.999L60 32L32 48L4 32L9.25 29",
stroke:"#F71963",
strokeWidth:"2",
strokeMiterlimit:"10",
strokeLinecap:"square"}),/*#__PURE__*/

React.createElement("path",{
d:"M54.745 41.9971L60 45.0001L32 61.0001L4 45.0001L9.25 42.0001",
stroke:"#F71963",
strokeWidth:"2",
strokeMiterlimit:"10",
strokeLinecap:"square"}),/*#__PURE__*/

React.createElement("path",{
d:"M4 19L32 3L60 19L32 35L4 19Z",
stroke:"#fff",
strokeWidth:"2",
strokeMiterlimit:"10",
strokeLinecap:"square"}));




export default Stack;