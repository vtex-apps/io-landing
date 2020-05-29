"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));

var _Card=_interopRequireDefault(require("./Card"));
var _DesignDev=_interopRequireDefault(require("./icons/DesignDev"));
var _FlowerGround=_interopRequireDefault(require("./icons/FlowerGround"));
var _RunnigShoes=_interopRequireDefault(require("./icons/RunnigShoes"));
var _Video=_interopRequireDefault(require("./icons/Video"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}

const CardGrid=()=>{
const cardsConfig=[
{
icon:/*#__PURE__*/_react.default.createElement(_FlowerGround.default,null),
titleId:"io.cards.first.title",
textId:"io.cards.first.text",
link:"/docs/getting-started/what-is-vtex-io/1"},

{
icon:/*#__PURE__*/_react.default.createElement(_Video.default,null),
titleId:"io.cards.second.title",
textId:"io.cards.second.text",
link:"#",
soon:true},

{
icon:/*#__PURE__*/_react.default.createElement(_DesignDev.default,null),
titleId:"io.cards.third.title",
textId:"io.cards.third.text",
link:"/docs/components/all"},

{
icon:/*#__PURE__*/_react.default.createElement(_RunnigShoes.default,null),
titleId:"io.cards.fourth.title",
textId:"io.cards.fourth.text",
link:"/faq"}];



return/*#__PURE__*/(
_react.default.createElement("section",{className:"w-90 center flex justify-center flex-wrap mv7"},
cardsConfig.map((card,index)=>/*#__PURE__*/
_react.default.createElement(_Card.default,{
icon:card.icon,
title:card.titleId,
text:card.textId,
index:index,
key:card.titleId,
link:card.link,
soon:card.soon}))));




};var _default=

CardGrid;exports.default=_default;