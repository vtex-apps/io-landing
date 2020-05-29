import"../../assets/brands.svg";

import{FormattedMessage}from"@vtex/micro-react-intl";
import{Button}from"@vtex/styleguide";
import React from"react";

const Hero=()=>{
const brand="/assets/brands.svg";

return/*#__PURE__*/(
React.createElement("section",{
className:"mb5 pt6 pb8 bg-base--inverted c-on-base--inverted flex flex-column items-center justify-center",
style:{backgroundImage:`url(${brand})`}},/*#__PURE__*/

React.createElement("p",{
className:"tc w-40-ns mb0 mt10 t-heading-1",
style:{fontSize:"5rem"}},/*#__PURE__*/

React.createElement(FormattedMessage,{id:"io.hero.globalbrands"})),/*#__PURE__*/

React.createElement("p",{className:"w-40 t-body tc mv6"},/*#__PURE__*/
React.createElement(FormattedMessage,{id:"io.hero.resources"})),/*#__PURE__*/

React.createElement("div",{className:"mt5"},/*#__PURE__*/
React.createElement("a",{href:"https://vtex.io/docs/getting-started/build-stores-with-store-framework/1"},/*#__PURE__*/
React.createElement(Button,{variation:"primary"},/*#__PURE__*/
React.createElement("p",{className:"ttu"},/*#__PURE__*/
React.createElement(FormattedMessage,{id:"io.hero.cta"}))))),/*#__PURE__*/




React.createElement("a",{
className:"tc c-on-base--inverted mt5 t-small",
href:"https://www.vtex.com/partner/program/"},/*#__PURE__*/

React.createElement(FormattedMessage,{id:"io.hero.partners"}))));



};

export default Hero;