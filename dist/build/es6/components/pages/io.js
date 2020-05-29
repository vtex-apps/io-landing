import React,{Fragment}from"react";
import loadable from"@loadable/component";

import CardGrid from"../components/CardGrid";
import Footer from"../components/Footer";
import Hero from"../components/Hero";
import Navbar from"../components/Navbar";

const BelowTheFold=loadable(()=>import(
/* webpackChunkName: "ioBelow" */
/* webpackPreload: true */
"../ioBelow"),
{
ssr:false});


const Landing=()=>/*#__PURE__*/
React.createElement(Fragment,null,/*#__PURE__*/
React.createElement(Navbar,null),/*#__PURE__*/
React.createElement("main",{className:"w-100 bg-base--inverted"},/*#__PURE__*/
React.createElement(Hero,null),/*#__PURE__*/
React.createElement(CardGrid,null),/*#__PURE__*/
React.createElement(BelowTheFold,null)),/*#__PURE__*/

React.createElement(Footer,null));



export default Landing;