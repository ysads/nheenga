(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{172:function(e,t,r){var content=r(177);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(48).default)("c2152dfc",content,!0,{sourceMap:!1})},173:function(e,t,r){var content=r(179);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(48).default)("d995e6ee",content,!0,{sourceMap:!1})},175:function(e,t,r){"use strict";r.r(t);var n={name:"TranslateCard",props:{entry:{type:Object,required:!0}},computed:{alternativesText:function(){return this.entry.alternatives.join(", ")}}},o=(r(176),r(27)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("article",{staticClass:"translate-card"},[r("h3",{staticClass:"translate-card__title"},[e._v("\n    "+e._s(e.entry.word)+"\n  ")]),e._v(" "),e.entry.alternatives?r("p",{staticClass:"translate-card__alt-list"},[e._v("\n    Outras formas: "+e._s(e.alternativesText)+"\n  ")]):e._e(),e._v(" "),r("ol",{staticClass:"translate-card__def-list"},e._l(e.entry.definitions,(function(t){return r("li",{key:t.text,staticClass:"translate-card__def"},[r("span",{staticClass:"translate-card__def-class"},[e._v("\n        "+e._s(t.class)+"\n      ")]),e._v(" "),r("span",{staticClass:"translate-card__def-text"},[e._v("\n        "+e._s(t.text)+"\n      ")])])})),0)])}),[],!1,null,null,null);t.default=component.exports},176:function(e,t,r){"use strict";var n=r(172);r.n(n).a},177:function(e,t,r){(t=r(47)(!1)).push([e.i,'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font-size:100%;margin:0;padding:0;vertical-align:baseline}iframe,img{width:100%}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}html{font-size:16px}a{text-decoration:none}a,a:hover{color:inherit}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}button,input{outline:0;border:0;background:none;padding:0}table{border-collapse:collapse;border-spacing:0}hr{margin:0}*,:after,:before,html{box-sizing:border-box}*,:after,:before{margin:0}::-moz-selection{background:#faefec;color:#fff}::selection{background:#faefec;color:#fff}.translate-card__title,body{font-family:"DM Sans","Helvetica","Arial",sans-serif}body{font-weight:400}.translate-card__def-class,.translate-card__title{font-weight:500}strong{font-weight:700}.translate-card__def-class{font-style:italic}.translate-card__title{font-size:1.5rem;line-height:1.7}body{font-size:1rem;line-height:1.5rem}.translate-card{border-radius:8px;padding:16px;background:#f5f5f5}.translate-card_alternatives{display:inline-block;color:#f5f5f5}.translate-card__def-list{margin-top:8px;list-style:none;counter-reset:def-list-counter}.translate-card__def{counter-increment:def-list-counter}.translate-card__def:before{margin-right:16px;width:10px;display:inline-block;content:counter(def-list-counter) "."}.translate-card__def-class{margin-right:8px;display:inline-block}',""]),e.exports=t},178:function(e,t,r){"use strict";var n=r(173);r.n(n).a},179:function(e,t,r){(t=r(47)(!1)).push([e.i,'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font-size:100%;margin:0;padding:0;vertical-align:baseline}iframe,img{width:100%}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}html{font-size:16px}a{text-decoration:none}a,a:hover{color:inherit}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}button,input{outline:0;border:0;background:none;padding:0}table{border-collapse:collapse;border-spacing:0}hr{margin:0}*,:after,:before,html{box-sizing:border-box}*,:after,:before{margin:0}::-moz-selection{background:#faefec;color:#fff}::selection{background:#faefec;color:#fff}.search__input,.search__title,body{font-family:"DM Sans","Helvetica","Arial",sans-serif}body{font-weight:400}.search__input{font-weight:500}.search__title,strong{font-weight:700}.search__title{font-size:2.5rem;line-height:1.25}@media(min-width:768px){.search__title{font-size:3.125rem}}.search__input{font-size:1.5rem;line-height:1.7}body{font-size:1rem;line-height:1.5rem}.search{padding:40px}.search__input{border-radius:8px;border:0;background:#f5f5f5;color:#5e5e6e;margin-top:16px;padding:16px;width:100%}.search__input::-moz-placeholder{color:rgba(94,94,110,.5)}.search__input:-ms-input-placeholder{color:rgba(94,94,110,.5)}.search__input::-ms-input-placeholder{color:rgba(94,94,110,.5)}.search__input::placeholder{color:rgba(94,94,110,.5)}.search__results-count{margin-top:32px}.search__results-box{margin-top:16px;display:grid;grid-template-columns:100%;grid-template-rows:auto;grid-gap:16px}@media(min-width:768px){.search__results-box{grid-template-columns:50% 50%}}',""]),e.exports=t},186:function(e,t,r){"use strict";r.r(t);r(115),r(23),r(13),r(22);var n=r(3),o={components:{TranslateCard:r(175).default},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$content("tupi").search(e.query).fetch();case 2:e.entries=t.sent;case 3:case"end":return t.stop()}}),t)})))()},data:function(){return{entries:[],query:this.$route.params.term||""}},head:function(){return{title:"Nheenga | ".concat(this.query)}}},l=(r(178),r(27)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",{staticClass:"search"},[r("h1",{staticClass:"search__title"},[e._v("\n    Dicionário de Tupi\n  ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],staticClass:"search__input",attrs:{type:"search",placeholder:"Buscar por..."},domProps:{value:e.query},on:{input:[function(t){t.target.composing||(e.query=t.target.value)},e.$fetch]}}),e._v(" "),r("p",{staticClass:"search__results-count"},[e._v("\n    "+e._s(e.entries.length)+" resultados\n  ")]),e._v(" "),r("section",{staticClass:"search__results-box"},e._l(e.entries,(function(e){return r("translate-card",{key:e.word,staticClass:"search__result",attrs:{entry:e}})})),1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TranslateCard:r(175).default})}}]);