import"../styles/tachyons.css";

import loadable from"@loadable/component";
import{LoadMicroComponent}from"@vtex/micro-react";
import{withIntlProvider}from"@vtex/micro-react-intl";
import{withRouter}from"@vtex/micro-react-router";

import{AsyncImport}from"../components/asyncPages";
import messages from"../messages/fr.json";






const Page=loadable(()=>import(
/* webpackChunkName: "ioPage" */
/* webpackPreload: true */
"../components/pages/io"),
{
ssr:true});


export default LoadMicroComponent(
withIntlProvider(
withRouter(Page,AsyncImport),
messages,
"fr"));