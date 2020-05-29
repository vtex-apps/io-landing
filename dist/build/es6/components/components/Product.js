import"../../assets/product.svg";

import{FormattedMessage}from"@vtex/micro-react-intl";
import React from"react";

const ProductDisplay=()=>{
const products="/assets/product.svg";

return/*#__PURE__*/(
React.createElement("section",{className:"w-100 flex flex-column flex-row-l justify-between pv10 bg-base--inverted"},/*#__PURE__*/
React.createElement("div",{className:"c-on-base--inverted flex flex-column justify-center w-33-l pl9-l mh0-l"},/*#__PURE__*/
React.createElement("p",{className:"t-small w-90 center left-l"},/*#__PURE__*/
React.createElement(FormattedMessage,{id:"io.product.deliver"})),/*#__PURE__*/

React.createElement("p",{className:"f1 mt1 mb1 w-90 center left-l"},/*#__PURE__*/
React.createElement(FormattedMessage,{id:"io.product.scale"})),/*#__PURE__*/

React.createElement("p",{className:"t-body w-90 center left-l"},/*#__PURE__*/
React.createElement(FormattedMessage,{id:"io.product.cloud"}))),/*#__PURE__*/


React.createElement("img",{src:products,alt:"Store Framework sample"})));


};

export default ProductDisplay;