import React from"react";

import Card from"./Card";
import DesignDev from"./icons/DesignDev";
import FlowerGround from"./icons/FlowerGround";
import RunningShoes from"./icons/RunnigShoes";
import Video from"./icons/Video";

const CardGrid=()=>{
const cardsConfig=[
{
icon:/*#__PURE__*/React.createElement(FlowerGround,null),
titleId:"io.cards.first.title",
textId:"io.cards.first.text",
link:"/docs/getting-started/what-is-vtex-io/1"},

{
icon:/*#__PURE__*/React.createElement(Video,null),
titleId:"io.cards.second.title",
textId:"io.cards.second.text",
link:"#",
soon:true},

{
icon:/*#__PURE__*/React.createElement(DesignDev,null),
titleId:"io.cards.third.title",
textId:"io.cards.third.text",
link:"/docs/components/all"},

{
icon:/*#__PURE__*/React.createElement(RunningShoes,null),
titleId:"io.cards.fourth.title",
textId:"io.cards.fourth.text",
link:"/faq"}];



return/*#__PURE__*/(
React.createElement("section",{className:"w-90 center flex justify-center flex-wrap mv7"},
cardsConfig.map((card,index)=>/*#__PURE__*/
React.createElement(Card,{
icon:card.icon,
title:card.titleId,
text:card.textId,
index:index,
key:card.titleId,
link:card.link,
soon:card.soon}))));




};

export default CardGrid;