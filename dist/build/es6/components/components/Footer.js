import"../../assets/vtexFooter.svg";

import{FormattedMessage}from"@vtex/micro-react-intl";
import React from"react";

import VTEXOffices from"../../assets/VTEXOffices.json";

const footerLinks=[
{
id:"pricing",
options:[]},

{
id:"company",
options:["carrers","partnersAWS","dmca","blog"]},

{
id:"resources",
options:[
"devdocs",
"support",
"announcements",
"releases",
"status",
"health",
"vtexio"]},


{
id:"partners",
options:["vtex","find","program","appstore"]}];



const Footer=()=>{
const logo="/assets/vtexFooter.svg";
return/*#__PURE__*/(
React.createElement("footer",{className:"bg-base--inverted pa10-l pv7 c-on-base--inverted"},/*#__PURE__*/
React.createElement("div",{className:"flex flex-wrap justify-between"},/*#__PURE__*/
React.createElement("div",{className:"w-33-l ph4 ph0-l"},/*#__PURE__*/
React.createElement("img",{src:logo,alt:"VTEX"}),/*#__PURE__*/
React.createElement("p",{className:"flex"},/*#__PURE__*/
React.createElement(FormattedMessage,{id:"io.footer.vtex"}))),/*#__PURE__*/


React.createElement("div",{className:"flex-l flex-wrap dn-s"},
footerLinks.map(category=>{
const baseMessageId=`io.footer.${category.id}`;
return/*#__PURE__*/(
React.createElement("ul",{key:category.id},/*#__PURE__*/
React.createElement("p",{className:"fw7"},/*#__PURE__*/
React.createElement(FormattedMessage,{id:baseMessageId})),

category.options.map((option)=>/*#__PURE__*/
React.createElement("li",{className:"list",key:option},/*#__PURE__*/
React.createElement("p",null,/*#__PURE__*/
React.createElement(FormattedMessage,{id:`${baseMessageId}.${option}`}))))));





}))),/*#__PURE__*/


React.createElement("div",{className:"flex flex-wrap center mv7"},
VTEXOffices.Offices.map((office)=>/*#__PURE__*/
React.createElement("div",{key:office.short,className:"ph4 w-20-ns w-50-s mb0"},/*#__PURE__*/
React.createElement("p",{className:"t-heading-3"},office.short),/*#__PURE__*/
React.createElement("p",{className:"mt0 mb3"},office.address1),/*#__PURE__*/
React.createElement("p",{className:"mt0 mb3"},office.address2),
office.address3&&/*#__PURE__*/React.createElement("p",{className:"mt0 mb3"},office.address3),/*#__PURE__*/
React.createElement("p",{className:"mt0"},office.city))))));





};

export default Footer;