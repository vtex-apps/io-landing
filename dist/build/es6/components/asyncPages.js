import loadable from"@loadable/component";


export const AsyncPages=loadable(
({name})=>import(`./pages/${name}`),
{ssr:false});


export const AsyncImport=/* #__LOADABLE__ */({name})=>import(`./pages/${name}`);