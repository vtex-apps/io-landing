import React from"react";

import{baseClassname}from"./utils";

const Branches=({
colorToken})=>/*#__PURE__*/

React.createElement("svg",{
className:`${baseClassname("branches")} ${colorToken||""}`,
width:"64",
height:"64",
viewBox:"0 0 64 64",
fill:"none",
xmlns:"http://www.w3.org/2000/svg"},/*#__PURE__*/

React.createElement("path",{
d:"M61 46H34L22 32L34 18H61",
stroke:"#F71963",
strokeWidth:"2",
strokeMiterlimit:"10"}),/*#__PURE__*/

React.createElement("path",{d:"M22 32H2",stroke:"#F71963",strokeWidth:"2",strokeMiterlimit:"10"}),/*#__PURE__*/
React.createElement("path",{
d:"M53 10L61 18L53 26",
stroke:"#fff",
strokeWidth:"2",
strokeMiterlimit:"10",
strokeLinecap:"square"}),/*#__PURE__*/

React.createElement("path",{
d:"M53 38L61 46L53 54",
stroke:"#fff",
strokeWidth:"2",
strokeMiterlimit:"10",
strokeLinecap:"square"}));




export default Branches;