import{FormattedMessage}from"@vtex/micro-react-intl";
import React from"react";

import Lightbulb from"./icons/Lightbulb";
import Serverless from"./icons/Serverless";
import Sync from"./icons/Sync";
import Workspaces from"./icons/Workspaces";

const KeyFeatures=()=>/*#__PURE__*/
React.createElement("section",{className:"mv9 mt5-l vh-75-l bg-base--inverted c-on-base--inverted center w-90"},/*#__PURE__*/
React.createElement("p",{className:"mb0"},/*#__PURE__*/
React.createElement(FormattedMessage,{id:"io.features.title.small"})),/*#__PURE__*/

React.createElement("p",{className:"t-heading-1 w-50-ns mt3"},/*#__PURE__*/
React.createElement(FormattedMessage,{id:"io.features.title"})),/*#__PURE__*/

React.createElement("div",{className:"flex flex-column flex-row-l items-center justify-between"},/*#__PURE__*/
React.createElement("article",{className:"mh7-l mv5 mv0-l"},/*#__PURE__*/
React.createElement(Sync,null),/*#__PURE__*/
React.createElement("p",{className:"f4"},/*#__PURE__*/
React.createElement(FormattedMessage,{id:"io.features.cloud"})),/*#__PURE__*/

React.createElement("p",{className:"t-body lh-copy"},/*#__PURE__*/
React.createElement(FormattedMessage,{id:"io.features.cloud.description"}))),/*#__PURE__*/


React.createElement("article",{className:"mh7-l mv5 mv0-l"},/*#__PURE__*/
React.createElement(Lightbulb,null),/*#__PURE__*/
React.createElement("p",{className:"f4"},/*#__PURE__*/
React.createElement(FormattedMessage,{id:"io.features.setupless"})),/*#__PURE__*/

React.createElement("p",{className:"t-body lh-copy"},/*#__PURE__*/
React.createElement(FormattedMessage,{id:"io.features.setupless.description"}))),/*#__PURE__*/


React.createElement("article",{className:"mh7-l mv5 mv0-l"},/*#__PURE__*/
React.createElement(Workspaces,null),/*#__PURE__*/
React.createElement("p",{className:"f4"},/*#__PURE__*/
React.createElement(FormattedMessage,{id:"io.features.workspaces"})),/*#__PURE__*/

React.createElement("p",{className:"t-body lh-copy"},/*#__PURE__*/
React.createElement(FormattedMessage,{id:"io.features.workspaces.description"}))),/*#__PURE__*/


React.createElement("article",{className:"mh7-l mv5 mv0-l"},/*#__PURE__*/
React.createElement(Serverless,null),/*#__PURE__*/
React.createElement("p",{className:"f4"},/*#__PURE__*/
React.createElement(FormattedMessage,{id:"io.features.serverless"})),/*#__PURE__*/

React.createElement("p",{className:"t-body lh-copy"},/*#__PURE__*/
React.createElement(FormattedMessage,{id:"io.features.serverless.description"})))));






export default KeyFeatures;