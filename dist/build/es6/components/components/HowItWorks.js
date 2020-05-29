import{useIntl}from"@vtex/micro-react-intl";
import React from"react";

import AppStore from"./icons/AppStore";
import Branches from"./icons/Branches";
import Stack from"./icons/Stack";

const HowItWorks=()=>{
const intl=useIntl();
return/*#__PURE__*/(
React.createElement("section",{className:"flex flex-column flex-row-l items-center justify-between w-90 vh-75-l center c-on-base--inverted mv7"},/*#__PURE__*/
React.createElement("article",{className:"mh7-l mv5 mv0-l"},/*#__PURE__*/
React.createElement(Stack,null),/*#__PURE__*/
React.createElement("p",{className:"t-body mb3"},
intl.formatMessage({id:"io.howitworks.appstore.scale"})),/*#__PURE__*/

React.createElement("p",{className:"f2 mt0"},
intl.formatMessage({id:"io.howitworks.appstore"})),/*#__PURE__*/

React.createElement("p",{className:"t-body lh-copy"},
intl.formatMessage({id:"io.howitworks.appstore.solutions"}))),/*#__PURE__*/


React.createElement("article",{className:"mh7-l mv5 mv0-l"},/*#__PURE__*/
React.createElement(Branches,null),/*#__PURE__*/
React.createElement("p",{className:"t-body mb3"},
intl.formatMessage({id:"io.howitworks.abtesting.decisions"})),/*#__PURE__*/

React.createElement("p",{className:"f2 mt0"},
intl.formatMessage({id:"io.howitworks.abtesting"})),/*#__PURE__*/

React.createElement("p",{className:"t-body lh-copy"},
intl.formatMessage({id:"io.howitworks.abtesting.tests"}))),/*#__PURE__*/


React.createElement("article",{className:"mh7-l mv5 mv0-l"},/*#__PURE__*/
React.createElement(AppStore,null),/*#__PURE__*/
React.createElement("p",{className:"t-body mb3"},
intl.formatMessage({id:"io.howitworks.storeframework.build"})),/*#__PURE__*/

React.createElement("p",{className:"f2 mt0"},
intl.formatMessage({id:"io.howitworks.storeframework"})),/*#__PURE__*/

React.createElement("p",{className:"t-body lh-copy"},
intl.formatMessage({id:"io.howitworks.storeframework.develop"})))));




};

export default HowItWorks;