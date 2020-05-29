"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _microReact=require("@vtex/micro-react");
var _microReactRouter=require("@vtex/micro-react-router");
var _microReactIntl=require("@vtex/micro-react-intl");

var _asyncPages=require("../components/asyncPages");
var _io=_interopRequireDefault(require("../components/pages/io"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}const messages={"io.page-title":"VTEX IO","io.navbar.learn":"Aprender","io.navbar.feature-list":"Nossos Componentes","io.navbar.keepup":"Manter-Se","io.navbar.build":"Construir com e / s","io.navbar.faq":"Perguntas frequentes","io.hero.globalbrands":"Criar para marcas globais.","io.hero.resources":"Com direito a recursos em m\xE3os, voc\xEA vai ajudar a expandir as possibilidades de neg\xF3cios em todo o mundo.","io.hero.cta":"Construir lojas com e / s","io.hero.partners":"Saiba mais sobre o nosso Programa para Parceiros","io.cards.first.title":"Come\xE7ar com e / s","io.cards.first.text":"Aprender o b\xE1sico e come\xE7ar a constru\xE7\xE3o de aplicativos, extens\xF5es e integra\xE7\xF5es.","io.cards.second.title":"IO Master Class","io.cards.second.text":"Assista v\xEDdeos e tire um mergulho profundo em todas as coisas IO: ferramentas, dicas e possibilidades.","io.cards.third.title":"Explore a nossa Componentes","io.cards.third.text":"Explore os componentes que desenvolvemos e explorar a nossa dispon\xEDveis e de recursos futuros.","io.cards.fourth.title":"Perguntas Frequentes","io.cards.fourth.text":"Encontre as respostas que voc\xEA est\xE1 procurando.","io.product.deliver":"Entregar mais, oferecer melhor","io.product.scale":"Feito sob medida atende escala.","io.product.cloud":"Com um ambiente de nuvem e de um sistema integrado de com\xE9rcio-unidade conjunto de ferramentas, \xE9 muito mais f\xE1cil para os varejistas e os desenvolvedores escala de solu\xE7\xF5es para necessidades espec\xEDficas.","io.howitworks.appstore":"App Store","io.howitworks.appstore.scale":"Solu\xE7\xF5es de escala","io.howitworks.appstore.solutions":"Tornar o seu neg\xF3cio de solu\xE7\xF5es orientadas dispon\xEDvel para 2.500+ lojas em 25 pa\xEDses, atrav\xE9s de nosso exclusivo canal de distribui\xE7\xE3o.","io.howitworks.abtesting":"O Teste A/B","io.howitworks.abtesting.decisions":"Decis\xF5es de neg\xF3cios embasadas","io.howitworks.abtesting.tests":"Realizar testes em todos os aspectos do seu neg\xF3cio para saber o que funciona melhor. Use o Teste isolado espa\xE7os de trabalho para iterar mais r\xE1pido, aumentar as vendas e aumentar as taxas de convers\xE3o.","io.howitworks.storeframework":"Loja De Quadro","io.howitworks.storeframework.build":"Construir mais rapidamente, crescem melhor","io.howitworks.storeframework.develop":"Reduzir o tempo de carregamento, melhorar a usabilidade, e fazer o melhor de SEO. Desenvolvimento escal\xE1vel componentes com uma solu\xE7\xE3o abrangente, f\xE1cil de usar conjunto de ferramentas, voc\xEA pode construir lojas mais r\xE1pido do que nunca.","io.evolution.focus":"Foco no que importa","io.evolution.evolution":"Cont\xEDnua evolu\xE7\xE3o.","io.evolution.perspective":"VTEX IO oferece um novo paradigma para a nuvem de desenvolvimento de software \xE9 fortemente integrado com o ambiente onde o seu c\xF3digo ir\xE1 funcionar. Esta mudan\xE7a de perspectiva desbloqueia novos recursos que eram imposs\xEDveis no tradicional modelo de desenvolvimento local.","io.evolution.vtexio":"VTEX IO","io.evolution.vtexio.description":"\xC9 nosso sem servidor da plataforma de desenvolvimento, projetado para ajudar voc\xEA a criar escal\xE1vel, prontos para produ\xE7\xE3o de aplica\xE7\xF5es web, e nunca mais ter\xE1 que se preocupar com a complexidade da infraestrutura de novo.","io.features.title":"Poderosas ferramentas para melhorar suas solu\xE7\xF5es.","io.features.title.small":"Fazer o a maioria fora de seu trabalho","io.features.cloud":"Funciona na nuvem","io.features.cloud.description":"\xC9 o fim da incompatibilidade entre locais e ambientes de produ\xE7\xE3o. Nenhum c\xF3digo \xE9 executado no seu computador: A fonte fica sincronizado na nuvem, onde \xE9 constru\xEDdo e implantado em tempo real.","io.features.setupless":"Setupless","io.features.setupless.description":"N\xE3o h\xE1 necessidade de oldfashioned desenvolvedor configura\xE7\xE3o de ambiente de mais. Tudo o que voc\xEA precisa para come\xE7ar a criar aplicativos \xE9 um leve aplicativo de console e uma conta de desenvolvedor.","io.features.workspaces":"Espa\xE7os de trabalho","io.features.workspaces.description":"Instant\xE2nea app implantar e revers\xE3o com um \xFAnico comando. Gerenciar diferentes vers\xF5es de seus aplicativos e testar novas funcionalidades no isolamento, com a paz de esp\xEDrito que voc\xEA precisa para experimentar e evoluir rapidamente.","io.features.serverless":"Sem servidor","io.features.serverless.description":"Nossa infra-estrutura \xE9 projetada para a escala de seu c\xF3digo de acordo com o tr\xE1fego. CDN distribui\xE7\xE3o e o SmartCache\u24C7 sistema de garantias de alto desempenho e baixa lat\xEAncia.","io.startbuilding.title":"Comece a construir o futuro do com\xE9rcio.","io.startbuilding.text":"Criar aplicativos com a tecnologia de ponta, atender as necessidades de classe mundial de marcas e expandir as possibilidades de varejo.","io.startbuilding.cta":"TORNE-SE UM PARCEIRO","io.footer.vtex":"Acelerando O Com\xE9rcio De Transforma\xE7\xE3o.","io.footer.pricing":"Pre\xE7os","io.footer.company":"Empresa","io.footer.company.carrers":"Carrers","io.footer.company.partnersAWS":"Parceiros da AWS","io.footer.company.dmca":"Pol\xEDtica de DMCA","io.footer.company.blog":"Blog","io.footer.resources":"Recursos","io.footer.resources.devdocs":"Desenvolvimento Docs","io.footer.resources.support":"Suporte","io.footer.resources.announcements":"An\xFAncios","io.footer.resources.releases":"Lan\xE7amentos","io.footer.resources.status":"Estado","io.footer.resources.health":"Verifica\xE7\xE3o De Sa\xFAde","io.footer.resources.vtexio":"VTEX IO","io.footer.partners":"Parceiros","io.footer.partners.vtex":"VTEX Parceiros","io.footer.partners.find":"Encontrar um parceiro","io.footer.partners.program":"Programa De Parceiros","io.footer.partners.appstore":"VTEX App Store","io.faq.page-title":"FAQ - VTEX IO","io.faq.basic-concepts.vtex-vtexio.summary":"Qual \xE9 a diferen\xE7a entre VTEX e VTEX IO?","io.faq.basic-concepts.vtex-vtexio.ans":"","io.faq.migrate.why-v1-no-more.summary":"Por que foi v1 descontinuado?","io.faq.migrate.why-v1-no-more.ans":"","io.faq.migrate.why-migrate.summary":"Por que eu deveria atualizar para v2?","io.faq.migrate.why-migrate.ans":"Voc\xEA deve atualizar para que voc\xEA tenha acesso a todo o poder e as capacidades da VTEX e / s e Armazenamento de Quadro, o mais recente e maior VTEX tem para oferecer. Al\xE9m disso, manter-se atualizado com todos os novos recursos que desenvolver de uma maneira simples, assim como descrito no https://vtex.io .","io.faq.migrate.advantages-v2.summary":"Quais s\xE3o as vantagens de utilizar arquivo v2?","io.faq.migrate.advantages-v2.ans":"","io.faq.migrate.unavailable-features.summary":"Existem funcionalidades que estavam dispon\xEDveis em v1, mas n\xE3o em v2?","io.faq.migrate.unavailable-features.ans":"Para uma completa funcionalidade de compara\xE7\xE3o entre o nosso novo CMS e o nosso antigo, voc\xEA pode verificar para fora do https://vtex.io/store-features .","io.faq.migrate.how-to.summary":"Como posso come\xE7ar a migra\xE7\xE3o para v2?","io.faq.migrate.how-to.ans":"Atualmente n\xE3o h\xE1 um processo automatizado para migrar de uma loja de v1 para v2. Basicamente, o front-end precisa ser reconstru\xEDdo usando nossa Loja Framework.","io.faq.create-store.components.summary":"Os componentes que j\xE1 existe?","io.faq.create-store.components.ans":"Muito poucos! E os novos est\xE3o chegando. Voc\xEA pode conferir uma lista de https://vtex.io/store-features#store-component-apps .","io.faq.create-store.components-functionality.summary":"Ser\xE1 que vou ser capaz de implementar funcionalidades que eu preciso, usando os componentes j\xE1 fornecida pela VTEX ou devo construir meu pr\xF3prio?","io.faq.create-store.components-functionality.ans":"Recomendamos fortemente que todos os componentes j\xE1 fornecida pela VTEX, como eles j\xE1 oferecem um certo grau de personaliza\xE7\xE3o e s\xE3o totalmente suportados pelo Armazenamento de Quadro de equipe. Se voc\xEA quiser alguma nova funcionalidade que n\xE3o suportam ainda, por favor verifique a nossa contribuindo diretrizes, de modo que talvez possa adicionar esta funcionalidade ao nosso ve\xEDculo e torn\xE1-lo dispon\xEDvel para todos (open-source regras!). ","io.faq.create-store.unsupported.summary":"O que n\xE3o \xE9 suportado pela Loja v2?","io.faq.create-store.unsupported.ans":"N\xF3s n\xE3o suportar totalmente (por agora) caracter\xEDsticas exclusivas de: mercados, B2B, de entrega e de mercearia. Para j\xE1, n\xE3o ser\xE1 de fazer qualquer modifica\xE7\xE3o para nossos componentes para que possam apoiar os casos de uso espec\xEDficos.","io.faq.create-store.supported.summary":"O que \xE9 suportado pela Loja v2?","io.faq.create-store.supported.ans":"N\xF3s oferece suporte a todas as funcionalidades b\xE1sicas de lojas que vendem itens que n\xE3o necessitam de um grande grau de personaliza\xE7\xE3o, tais como: moda, eletrodom\xE9sticos, cosmedics e artigos esportivos.","io.faq.create-store.to-PR-or-not-to-PR.summary":"Como posso saber se devo criar um novo aplicativo, ou enviar um PR para fazer um aplicativo existente melhor?","io.faq.create-store.to-PR-or-not-to-PR.ans":"N\xF3s sempre incentivamos a todos a contribuir para o desenvolvimento de todos os componentes, podemos construir, por isso todos eles s\xE3o open-source! Confira nossa contribuindo com orienta\xE7\xF5es para uma melhor orienta\xE7\xE3o sobre como enviar que o PR ou discutir um novo recurso que voc\xEA deseja implementar, eles vivem em: https://github.com/vtex-apps/awesome-io .","io.faq.create-store.component-docs.summary":"Onde posso encontrar documenta\xE7\xE3o sobre o qual adere\xE7os (ou blocos) podem ser passadas para cada bloco?","io.faq.create-store.component-docs.ans":"Cada bloco \xE9 exportada por um componente constru\xEDdo pela Loja Estrutura da equipe, e sua documenta\xE7\xE3o vive em cada um de seus reposit\xF3rios do GitHub. Voc\xEA pode conferir nossa lista de componentes dispon\xEDveis e os links para cada reposit\xF3rio https://vtex.io/store-features#store-component-apps .","io.faq.extend-store-framework.summary":"Como posso aumentar o previsto funcionalidades de Armazenamento de Quadro?","io.faq.extend-store-framework.ans":"Devido a uma altera\xE7\xE3o recente na forma como o VTEX \xE9 o tratamento de extensibilidade com VTEX IO, a fim de garantir um apoio de qualidade a todos os clientes pela VTEX equipe de apoio, ag\xEAncias que n\xE3o t\xEAm contas da empresa ter\xE3o acesso limitado a recursos de extensibilidade e s\xF3 pode publicar e instalar aplicativos no seu VTEX contas, mas n\xE3o a cria\xE7\xE3o de aplicativos estendendo as funcionalidades fornecidas pelo Armazenamento de Quadro.","io.faq.create-front-end-app.already-exists.summary":"Como posso saber se um aplicativo quero criar j\xE1 existe?","io.faq.create-front-end-app.already-exists.ans":"","io.faq.create-front-end-app.getting-started.summary":"Como posso come\xE7ar a desenvolver o front-end de aplica\xE7\xF5es?","io.faq.create-front-end-app.getting-started.ans":"","io.faq.create-front-end-app.how-to-whitelist.summary":"Qual \xE9 o crit\xE9rio que \xE9 necess\xE1rio cumprir para entrar na lista branca?","io.faq.create-front-end-app.how-to-whitelist.ans":"","io.faq.create-back-end-app.permission.summary":"Posso desenvolver N\xF3 + GraphQL apps?","io.faq.create-back-end-app.permission.ans":"O uso do N\xF3 e GraphQL s\xF3 ser\xE1 permitido contas da empresa que pretende criar novas funcionalidades que suportam a sua loja de desenvolvimento."};var _default=


(0,_microReact.LoadMicroComponent)(
(0,_microReactIntl.withIntlProvider)(
(0,_microReactRouter.withRouter)(_io.default,_asyncPages.AsyncImport),
messages,
"pt"));exports.default=_default;