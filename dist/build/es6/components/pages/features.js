import"../../styles/tachyons.css";

import React,{Fragment}from"react";

import Footer from"../components/Footer";
import Navbar from"../components/Navbar";
import{storeComponents,storePixel}from"../FeaturesData";

const FeaturesDisplay=()=>{
return/*#__PURE__*/(
React.createElement(Fragment,null,/*#__PURE__*/
React.createElement(Navbar,null),/*#__PURE__*/
React.createElement("main",{className:"w-100 pv10"},/*#__PURE__*/
React.createElement("div",{className:"flex-ns items-baseline w-90 w-80-ns center mb8"},/*#__PURE__*/
React.createElement("h1",{className:"c-base t-heading-1 pr7"},"Store Features"),/*#__PURE__*/
React.createElement("nav",null,/*#__PURE__*/
React.createElement("ul",{className:"flex-ns list t-heading-5 pl0"},/*#__PURE__*/
React.createElement("li",{className:"pr6 pb4 pb0-ns"},/*#__PURE__*/
React.createElement("a",{
href:"/store-features#store-component-apps",
className:"no-underline c-emphasis dim"},"Store Component Apps")),/*#__PURE__*/




React.createElement("li",null,/*#__PURE__*/
React.createElement("a",{
href:"/store-features#store-pixel-apps",
className:"no-underline c-emphasis dim"},"Store Pixel Apps"))))),/*#__PURE__*/







React.createElement("section",{
id:"store-component-apps",
className:"flex flex-column w-90 w-80-ns center pt8"},/*#__PURE__*/

React.createElement("h2",{className:"c-base t-heading-3 fw3 mb0 mt4"},"Store Component Apps"),/*#__PURE__*/


React.createElement("ul",{className:"t-body list pl0 mt0"},
storeComponents.map((component)=>/*#__PURE__*/
React.createElement("li",{className:"mv7 bb b--muted-2",key:component.name},/*#__PURE__*/
React.createElement("p",null,
component.name," ",
component.construction&&"[Under Construction] \uD83D\uDEA7"),/*#__PURE__*/

React.createElement("p",null,/*#__PURE__*/
React.createElement("a",{className:"link",href:component.docs},
component.docs)))))),/*#__PURE__*/






React.createElement("section",{
id:"store-pixel-apps",
className:"flex flex-column w-90 w-80-ns center pt8"},/*#__PURE__*/

React.createElement("h2",{className:"c-base t-heading-3 fw3 mb0 mt4"},"Store Pixel Apps"),/*#__PURE__*/
React.createElement("ul",{className:"t-body list pl0 mt0"},
storePixel.map((app)=>/*#__PURE__*/
React.createElement("li",{className:"mv7 bb b--muted-2",key:app.name},/*#__PURE__*/
React.createElement("p",null,app.name),/*#__PURE__*/
React.createElement("p",null,/*#__PURE__*/
React.createElement("a",{className:"link",href:app.docs},
app.docs))))))),/*#__PURE__*/







React.createElement(Footer,null)));


};

export default FeaturesDisplay;