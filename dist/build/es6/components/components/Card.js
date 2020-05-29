import React from"react";
import{FormattedMessage}from"@vtex/micro-react-intl";










const Card=({
icon,
title,
text,
index,
link,
soon})=>
{
return/*#__PURE__*/(
React.createElement("article",{
className:`bg-base mv3 ${
index%2===0?"mr3-l":"ml3-l"
} ph6 pv5 w-40-l w-90 br3`},/*#__PURE__*/

React.createElement("a",{href:link,className:"flex items-center link"},/*#__PURE__*/
React.createElement("div",{className:"mr7"},icon),/*#__PURE__*/
React.createElement("div",null,/*#__PURE__*/
React.createElement("p",{className:"t-heading-4 c-muted-1"},/*#__PURE__*/
React.createElement(FormattedMessage,{id:title}),
soon&&/*#__PURE__*/React.createElement("span",{className:"c-muted-2"}," [SOON]")),/*#__PURE__*/

React.createElement("p",{className:"t-body c-muted-1"},/*#__PURE__*/
React.createElement(FormattedMessage,{id:text}))))));





};

export default Card;