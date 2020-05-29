import"../../assets/vtexColdGray.svg";

import{useIntl}from"@vtex/micro-react-intl";
import{Link}from"@vtex/micro-react-router";
import{IconBars,IconCaretDown,IconCaretUp}from"@vtex/styleguide";
import React,{useState}from"react";

import{locales}from"../locales";





const supportedLangs=Array.from(locales);

const Navbar=({enableLocaleSelector})=>{
const intl=useIntl();
const[openLocaleSelector,setOpenLocaleSelector]=useState(false);
const[openNav,setOpenNav]=useState(false);
const[selectedLocale,setSelectedLocale]=useState(
findLocale(intl.locale));

const logo="/assets/vtexColdGray.svg";

const handleLocaleClick=({target:{id}})=>{
setOpenLocaleSelector(false);
setSelectedLocale(findLocale(id));
};

return/*#__PURE__*/(
React.createElement("nav",{className:"flex"},/*#__PURE__*/
React.createElement("div",{
className:"fixed bg-base--inverted c-on-base--inverted w-100 flex flex-column flex-row-l justify-between z-5",
style:{
boxShadow:"0px 3px 20px rgba(0, 0, 0, 0.3)"}},/*#__PURE__*/


React.createElement("div",{className:"flex"},/*#__PURE__*/
React.createElement("button",{
className:"dn-l bg-base--inverted c-on-base--inverted w-33 w-50-l bn",
onClick:()=>setOpenNav(!openNav)},/*#__PURE__*/

React.createElement(IconBars,null)),/*#__PURE__*/

React.createElement("div",{className:"w-40 w-50-l"},/*#__PURE__*/
React.createElement(Link,{to:"/",className:"c-on-base--inverted self-center flex items-center link"},/*#__PURE__*/
React.createElement("img",{src:logo,className:"h3",alt:"VTEX"}),/*#__PURE__*/
React.createElement("p",{className:"dn-s flex-l"},"|"),/*#__PURE__*/
React.createElement("p",{className:"dn-s flex-l ml3"},"Developer")))),/*#__PURE__*/



React.createElement("div",{className:"flex-l",hidden:!openNav},/*#__PURE__*/
React.createElement("ul",{className:"flex flex-column flex-row-l justify-center list mt0 items-center mb0 relative"},/*#__PURE__*/
React.createElement("li",{className:"mh5 mv5 mv0-l"},/*#__PURE__*/
React.createElement("a",{className:"link c-on-base--inverted",href:"https://vtex.io/docs"},
intl.formatMessage({id:"io.navbar.learn"}))),/*#__PURE__*/


React.createElement("li",{className:"mh5 mv5 mv0-l"},/*#__PURE__*/
React.createElement("a",{href:"https://vtex.io/docs/components/all",className:"link c-on-base--inverted"},
intl.formatMessage({id:"io.navbar.feature-list"}))),


enableLocaleSelector&&/*#__PURE__*/
React.createElement("li",{className:"flex items-center"},/*#__PURE__*/
React.createElement("div",{className:"h-100 relative w3"},/*#__PURE__*/
React.createElement("button",{
onClick:()=>setOpenLocaleSelector(!openLocaleSelector),
className:"c-on-base--inverted bg-base--inverted bn flex items-center pointer"},/*#__PURE__*/

React.createElement("p",{className:"ttu mr4"},splitLocale(selectedLocale)),
openLocaleSelector?/*#__PURE__*/React.createElement(IconCaretUp,null):/*#__PURE__*/React.createElement(IconCaretDown,null)),/*#__PURE__*/

React.createElement("div",{
hidden:!openLocaleSelector,
className:"z-4 bg-base--inverted pa3 absolute"},

supportedLangs.map((lang)=>/*#__PURE__*/
React.createElement("button",{
className:"tc ttu c-on-base--inverted pointer bn bg-base--inverted",
onClick:handleLocaleClick,
id:lang,
key:lang},

splitLocale(lang)))))))))));











};

function splitLocale(locale){
return locale.split("-")[0];
}

function findLocale(locale){
const localeObj=supportedLangs.find(
lang=>splitLocale(lang)===splitLocale(locale));

return localeObj||supportedLangs[0];
}

export default Navbar;