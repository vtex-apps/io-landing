"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;

var _microReactIntl=require("@vtex/micro-react-intl");
var _react=_interopRequireDefault(require("react"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}const VTEXOffices={Offices:[{short:"Barcelona",address1:"Carrer de Proven\xE7a, 339",address2:"08037",city:"Barcelona, Spain"},{short:"Bogot\xE1",address1:"Carrera 19 # 100-45, Oficina 14w-106",address2:"110121",city:"Bogot\xE1, Colombia"},{short:"Bucharest",address1:"6, Iuliu Maniu Boulevard",address2:"Campus 6 Building 6.1, floor 1",address3:"011886",city:"Bucharest, Romania"},{short:"Buenos Aires",address1:"Av. Chiclana, 3578",address2:"4 andar, Distrito Tecnol\xF3gico",address3:"CABA C1260ACP",city:"Buenos Aires, Argentina"},{short:"Ciudad de M\xE9xico",address1:"Blvd. Miguel De Cervantes Saavedra 169 Granada",address2:"11520, Miguel Hidalgo",city:"Ciudad de M\xE9xico, Mexico"},{short:"Curitiba",address1:"R. Prefeito \xC2ngelo Lopes, 1528",address2:"Hugo Lange",address3:"PR 82590-300",city:"Curitiba, Brazil"},{short:"Fort Lauderdale",address1:"501 East Las Olas Blv",address2:"Suite 300",address3:"FL 33301",city:"Fort Lauderdale, USA"},{short:"Jo\xE3o Pessoa",address1:"R. Ant\xF4nio Rabelo J\xFAnior, 161",address2:"25 andar, Jardim Rosas",address3:"PB 58032-090",city:"Jo\xE3o Pessoa, Brazil"},{short:"London",address1:"Aviation House, 125 Kingsway",address2:"Holborn",address3:"WC2B 6NH",city:"London, United Kingdom"},{short:"Medell\xEDn",address1:"Edificio Ofi7 La Francia",address2:"Carrera 42 #5 Sur-145, Antioquia",city:"Medell\xEDn, Colombia"},{short:"Milan",address1:"Via Copernico, 28A",city:"Milan, Italy"},{short:"New York",address1:"12 E 49th St",address2:"Midtown Manhattan",address3:"NY 10017",city:"New York, USA"},{short:"Rio de Janeiro",address1:"Praia de Botafogo, 300",address2:"2 andar, Botafogo",address3:"RJ 22250-040",city:"Rio de Janeiro, Brazil"},{short:"Santiago de Chile",address1:"Av. Apoquindo 5950",address2:"Piso 3, Oficina 124, Las Condes",address3:"Regi\xF3n Metropolitana 7560949",city:"Santiago de Chile, Chile"},{short:"S\xE3o Paulo",address1:"Av. Brigadeiro Faria Lima, 4440",address2:"10 andar, Itaim Bibi",address3:"SP 04538-132",city:"S\xE3o Paulo, Brazil"},{short:"Teres\xF3polis",address1:"R. Ant\xF4nio Rabelo J\xFAnior, 161",address2:"Sala 604, V\xE1rzea",address3:"RJ 25963-081",city:"Teres\xF3polis, Brazil"}]};



const footerLinks=[
{
id:"pricing",
options:[]},

{
id:"company",
options:["carrers","partnersAWS","dmca","blog"]},

{
id:"resources",
options:[
"devdocs",
"support",
"announcements",
"releases",
"status",
"health",
"vtexio"]},


{
id:"partners",
options:["vtex","find","program","appstore"]}];



const Footer=()=>{
const logo="/assets/vtexFooter.svg";
return/*#__PURE__*/(
_react.default.createElement("footer",{className:"bg-base--inverted pa10-l pv7 c-on-base--inverted"},/*#__PURE__*/
_react.default.createElement("div",{className:"flex flex-wrap justify-between"},/*#__PURE__*/
_react.default.createElement("div",{className:"w-33-l ph4 ph0-l"},/*#__PURE__*/
_react.default.createElement("img",{src:logo,alt:"VTEX"}),/*#__PURE__*/
_react.default.createElement("p",{className:"flex"},/*#__PURE__*/
_react.default.createElement(_microReactIntl.FormattedMessage,{id:"io.footer.vtex"}))),/*#__PURE__*/


_react.default.createElement("div",{className:"flex-l flex-wrap dn-s"},
footerLinks.map(category=>{
const baseMessageId=`io.footer.${category.id}`;
return/*#__PURE__*/(
_react.default.createElement("ul",{key:category.id},/*#__PURE__*/
_react.default.createElement("p",{className:"fw7"},/*#__PURE__*/
_react.default.createElement(_microReactIntl.FormattedMessage,{id:baseMessageId})),

category.options.map((option)=>/*#__PURE__*/
_react.default.createElement("li",{className:"list",key:option},/*#__PURE__*/
_react.default.createElement("p",null,/*#__PURE__*/
_react.default.createElement(_microReactIntl.FormattedMessage,{id:`${baseMessageId}.${option}`}))))));





}))),/*#__PURE__*/


_react.default.createElement("div",{className:"flex flex-wrap center mv7"},
VTEXOffices.Offices.map((office)=>/*#__PURE__*/
_react.default.createElement("div",{key:office.short,className:"ph4 w-20-ns w-50-s mb0"},/*#__PURE__*/
_react.default.createElement("p",{className:"t-heading-3"},office.short),/*#__PURE__*/
_react.default.createElement("p",{className:"mt0 mb3"},office.address1),/*#__PURE__*/
_react.default.createElement("p",{className:"mt0 mb3"},office.address2),
office.address3&&/*#__PURE__*/_react.default.createElement("p",{className:"mt0 mb3"},office.address3),/*#__PURE__*/
_react.default.createElement("p",{className:"mt0"},office.city))))));





};var _default=

Footer;exports.default=_default;