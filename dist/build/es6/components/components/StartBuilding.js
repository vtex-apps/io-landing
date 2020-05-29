import"../../assets/illustrationBlue.png";

import{FormattedMessage}from"@vtex/micro-react-intl";
import{Button}from"@vtex/styleguide";
import React from"react";

const StartBuilding=()=>{
const image="/assets/illustrationBlue.png";

return/*#__PURE__*/(
React.createElement("section",{className:"flex flex-row-m flex-column vh-100-l c-on-base bg-base"},/*#__PURE__*/
React.createElement("div",{className:"w-50-l flex-l dn-s"},/*#__PURE__*/
React.createElement("img",{src:image,alt:"",className:"h-100 w-100"})),/*#__PURE__*/

React.createElement("div",{className:"w-50-l h-100 flex flex-column justify-around items-center"},/*#__PURE__*/
React.createElement("p",{className:"w-90 center t-heading-1 w-50-l"},/*#__PURE__*/
React.createElement(FormattedMessage,{id:"io.startbuilding.title"})),/*#__PURE__*/

React.createElement("div",{className:"w-50-ns w-90-s flex flex-column justify-center pb4"},/*#__PURE__*/
React.createElement("p",{className:"t-body mb7 w-100-s"},/*#__PURE__*/
React.createElement(FormattedMessage,{id:"io.startbuilding.text"})),/*#__PURE__*/

React.createElement("div",{className:"w-75 mb5"},/*#__PURE__*/
React.createElement("a",{href:"https://www.vtex.com/partner/"},/*#__PURE__*/
React.createElement(Button,{variation:"primary"},/*#__PURE__*/
React.createElement("p",{className:"action-secondary"},/*#__PURE__*/
React.createElement(FormattedMessage,{id:"io.startbuilding.cta"})))))))));








};

export default StartBuilding;