"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.baseClassname=exports.calcIconSize=void 0;const calcIconSize=(
iconBase,
newSize)=>
{
const isHorizontal=iconBase.width>=iconBase.height;

const width=isHorizontal?
newSize:
newSize*iconBase.width/iconBase.height;

const height=!isHorizontal?
newSize:
newSize*iconBase.height/iconBase.width;

return{width,height};
};exports.calcIconSize=calcIconSize;

const baseClassname=(name,variation)=>
`vtex__icon-${name} ${variation?`vtex__icon-${name}--${variation}`:""}`;exports.baseClassname=baseClassname;