function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,l){for(var t=0;t<l.length;t++){var e=l[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,l,t){return l&&_defineProperties(n.prototype,l),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{hlMj:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J"),i=t("TOdT"),o=t("J9yG"),u=t("aaBP"),a=function(){function n(l,t,e,i,o){_classCallCheck(this,n),this.menu=l,this.minimaApiService=t,this.myTools=e,this.route=i,this.popoverController=o,this.tokenArr=[],this.tokenSpoof=[]}return _createClass(n,[{key:"ionViewWillEnter",value:function(){var n=this;this.$balanceSubscription=this.minimaApiService.$balance.subscribe((function(l){n.$balance=n.minimaApiService.$balance}))}},{key:"ionViewWillLeave",value:function(){this.$balanceSubscription.unsubscribe()}},{key:"ngOnInit",value:function(){}},{key:"giveMe50",value:function(){var n=this;this.minimaApiService.giveMe50().then((function(l){n.myTools.presentAlert("Gimme50",!0===l.status?"Successful":l.message,"Status")}))}},{key:"loadData",value:function(n){var l=this;setTimeout((function(){console.log("Done"),n.target.complete(),5===l.tokenArr.length&&(n.target.disabled=!0)}),500)}},{key:"closeSliding",value:function(n){n.close()}},{key:"createIdenticon",value:function(n){return this.avatar="https://www.gravatar.com/avatar/"+u.hash(n)+"?d=identicon"}},{key:"sendTokenOver",value:function(n,l){n.close(),this.route.navigate(["/send-funds/"+l])}},{key:"instanceOfToken",value:function(n){return"script"in n}}]),n}(),r=function(){return t.e(15).then(t.bind(null,"6gQK")).then((function(n){return n.ViewTokensPageModuleNgFactory}))},c=function n(){_classCallCheck(this,n)},s=t("pMnS"),b=t("MKJQ"),p=t("sZkV"),m=t("SVse"),f=t("iInd"),d=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"createIcon",value:function(n){return this.avatar="https://www.gravatar.com/avatar/"+u.hash(n)+"?d=identicon"}}]),n}(),k=e.nb({encapsulation:0,styles:[["[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.custom-icon[_ngcontent-%COMP%], .minima-icon[_ngcontent-%COMP%]{width:38px;height:35px}.item-avatar[_ngcontent-%COMP%]{width:100%!important;height:100%!important;max-width:75px!important;max-height:75px!important}span.confirmed-amount[_ngcontent-%COMP%]{font-family:manrope-regular;color:#9898a3;white-space:nowrap;max-width:30vw;text-overflow:ellipsis;overflow:hidden}ion-avatar[_ngcontent-%COMP%]{margin-top:2%;height:36px;width:36px}#token-name[_ngcontent-%COMP%]{margin:0;display:inline-block;white-space:nowrap;font-size:1rem!important;max-width:inherit;text-overflow:ellipsis;overflow:hidden;font-family:manrope-bold;color:var(--ion-color-tertiary)}ion-item[_ngcontent-%COMP%]:first-child{margin-top:1%}ion-item[_ngcontent-%COMP%]{opacity:1;--background:var(--ion-color-token);--background-activated:var(--ion-color-token);--background-activated-opacity:0.2;--background-hover:var(--ion-color-item-hover);--background-hover-opacity:1;background:var(--ion-color-token);border:1px solid var(--ion-color-item-border);border-radius:10px;margin-bottom:2%}ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin:0}ion-item[_ngcontent-%COMP%]   ion-label#token-name[_ngcontent-%COMP%]{text-overflow:ellipsis;font-family:manrope-medium}ion-list[_ngcontent-%COMP%]{overflow:scroll}div.token-wrapper[_ngcontent-%COMP%]{color:var(--ion-color-tertiary);display:flex;flex-direction:column;max-width:100%}.blink_me[_ngcontent-%COMP%]{-webkit-animation:1s linear infinite blinker;animation:1s linear infinite blinker}@-webkit-keyframes blinker{50%{opacity:0}}@keyframes blinker{50%{opacity:0}}"]],data:{}});function h(n){return e.Kb(0,[(n()(),e.pb(0,0,null,null,0,"img",[["class","custom-icon"]],[[8,"src",4]],null,null,null,null))],null,(function(n,l){n(l,0,0,l.component.createIcon(l.parent.parent.context.$implicit.tokenid))}))}function g(n){return e.Kb(0,[(n()(),e.pb(0,0,null,null,0,"img",[["class","custom-icon"]],[[8,"src",4]],null,null,null,null))],null,(function(n,l){n(l,0,0,l.parent.parent.context.$implicit.icon)}))}function v(n){return e.Kb(0,[(n()(),e.pb(0,0,null,null,0,"img",[["alt","minima"],["class","minima-icon"],["src","assets/minimaIcon.svg"]],null,null,null,null,null))],null,null)}function x(n){return e.Kb(0,[(n()(),e.pb(0,0,null,null,1,"span",[["class","blink_me confirmed-amount medium-text minima-numeric"]],null,null,null,null,null)),(n()(),e.Ib(1,null,[" "," "]))],null,(function(n,l){n(l,1,0,l.parent.parent.context.$implicit.sendable)}))}function w(n){return e.Kb(0,[(n()(),e.pb(0,0,null,null,1,"span",[["class","confirmed-amount medium-text minima-numeric"]],null,null,null,null,null)),(n()(),e.Ib(1,null,["",""]))],null,(function(n,l){n(l,1,0,l.parent.parent.context.$implicit.sendable+"/"+l.parent.parent.context.$implicit.unconfirmed)}))}function y(n){return e.Kb(0,[(n()(),e.pb(0,0,null,null,1,"span",[["class","confirmed-amount medium-text minima-numeric"]],null,null,null,null,null)),(n()(),e.Ib(1,null,[""," "]))],null,(function(n,l){n(l,1,0,l.parent.parent.context.$implicit.sendable)}))}function C(n){return e.Kb(0,[(n()(),e.pb(0,0,null,null,18,null,null,null,null,null,null,null)),(n()(),e.pb(1,0,null,null,7,"ion-avatar",[["slot","start"]],null,null,null,b.F,b.b)),e.ob(2,49152,null,0,p.f,[e.h,e.k,e.x],null,null),(n()(),e.eb(16777216,null,0,1,null,h)),e.ob(4,16384,null,0,m.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.eb(16777216,null,0,1,null,g)),e.ob(6,16384,null,0,m.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.eb(16777216,null,0,1,null,v)),e.ob(8,16384,null,0,m.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(9,0,null,null,9,"div",[["class","token-wrapper"]],null,null,null,null,null)),(n()(),e.pb(10,0,null,null,2,"ion-label",[["id","token-name"]],null,null,null,b.T,b.p)),e.ob(11,49152,null,0,p.M,[e.h,e.k,e.x],null,null),(n()(),e.Ib(12,0,["",""])),(n()(),e.eb(16777216,null,null,1,null,x)),e.ob(14,16384,null,0,m.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.eb(16777216,null,null,1,null,w)),e.ob(16,16384,null,0,m.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.eb(16777216,null,null,1,null,y)),e.ob(18,16384,null,0,m.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,4,0,"0x00"!==l.parent.context.$implicit.tokenid&&0==l.parent.context.$implicit.icon.length),n(l,6,0,"0x00"!==l.parent.context.$implicit.tokenid&&l.parent.context.$implicit.icon.length>0),n(l,8,0,"0x00"===l.parent.context.$implicit.tokenid),n(l,14,0,"0"==l.parent.context.$implicit.unconfirmed&&"0"!==l.parent.context.$implicit.mempool),n(l,16,0,"0"!=l.parent.context.$implicit.unconfirmed),n(l,18,0,"0"==l.parent.context.$implicit.unconfirmed&&"0"==l.parent.context.$implicit.mempool)}),(function(n,l){n(l,12,0,l.parent.context.$implicit.token)}))}function M(n){return e.Kb(0,[(n()(),e.pb(0,0,null,null,6,"ion-item",[["lines","none"]],null,[[null,"click"]],(function(n,l,t){var i=!0;return"click"===l&&(i=!1!==e.Bb(n,2).onClick()&&i),"click"===l&&(i=!1!==e.Bb(n,4).onClick(t)&&i),i}),b.S,b.l)),e.ob(1,49152,null,0,p.G,[e.h,e.k,e.x],{lines:[0,"lines"]},null),e.ob(2,16384,null,0,f.n,[f.m,f.a,[8,null],e.B,e.k],{routerLink:[0,"routerLink"]},null),e.Cb(3,1),e.ob(4,737280,null,0,p.Ib,[m.h,p.Fb,e.k,f.m,[2,f.n]],null,null),(n()(),e.eb(16777216,null,0,1,null,C)),e.ob(6,16384,null,0,m.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,1,0,"none");var t=n(l,3,0,"view-tokens/"+l.context.$implicit.tokenid);n(l,2,0,t),n(l,4,0),n(l,6,0,"ERROR_UNKNOWN_TOKEN"!==l.context.$implicit.token)}),null)}function I(n){return e.Kb(0,[(n()(),e.pb(0,0,null,null,4,"ion-list",[],null,null,null,b.V,b.q)),e.ob(1,49152,null,0,p.N,[e.h,e.k,e.x],null,null),(n()(),e.eb(16777216,null,0,2,null,M)),e.ob(3,278528,null,0,m.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),e.Db(131072,m.b,[e.h])],(function(n,l){var t=l.component;n(l,3,0,e.Jb(l,3,0,e.Bb(l,4).transform(t.tokenArr)))}),null)}var _=t("6jz6"),O=t("LmEr"),$=e.nb({encapsulation:0,styles:[[""]],data:{}});function P(n){return e.Kb(0,[e.Gb(671088640,1,{gimme50Btn:0}),(n()(),e.pb(1,0,null,null,22,"ion-app",[],null,null,null,b.E,b.a)),e.ob(2,49152,null,0,p.e,[e.h,e.k,e.x],null,null),(n()(),e.pb(3,0,null,0,13,"ion-header",[["class","page-header ion-no-border"]],null,null,null,b.M,b.i)),e.ob(4,49152,null,0,p.A,[e.h,e.k,e.x],null,null),(n()(),e.pb(5,0,null,0,11,"ion-toolbar",[],null,null,null,b.hb,b.D)),e.ob(6,49152,null,0,p.yb,[e.h,e.k,e.x],null,null),(n()(),e.pb(7,0,null,0,9,"ion-title",[],null,null,null,b.gb,b.C)),e.ob(8,49152,null,0,p.wb,[e.h,e.k,e.x],null,null),(n()(),e.pb(9,0,null,0,4,"ion-item",[["class","ion-no-padding"],["id","title"],["lines","none"]],null,null,null,b.S,b.l)),e.ob(10,49152,null,0,p.G,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(n()(),e.pb(11,0,null,0,1,"ion-icon",[["class","menu-btn"],["src","assets/menuIcon.svg"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.menu.open()&&e),e}),b.N,b.j)),e.ob(12,49152,null,0,p.B,[e.h,e.k,e.x],{src:[0,"src"]},null),(n()(),e.Ib(-1,0,[" Balance "])),(n()(),e.pb(14,0,null,0,2,"ion-item",[["class","breadcrumb ion-no-padding"],["id","subtitle"],["lines","none"]],null,null,null,b.S,b.l)),e.ob(15,49152,null,0,p.G,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(n()(),e.Ib(-1,0,[" All tokens "])),(n()(),e.pb(17,0,null,0,4,"ion-content",[["class","page-content"]],null,null,null,b.J,b.f)),e.ob(18,49152,null,0,p.t,[e.h,e.k,e.x],null,null),(n()(),e.pb(19,0,null,0,2,"div",[["class","body"]],null,null,null,null,null)),(n()(),e.pb(20,0,null,null,1,"app-list-view",[],null,null,null,I,k)),e.ob(21,114688,null,0,d,[],{tokenArr:[0,"tokenArr"]},null),(n()(),e.pb(22,0,null,0,1,"app-footer",[],null,null,null,_.b,_.a)),e.ob(23,245760,null,0,O.a,[o.a,i.a],null,null)],(function(n,l){var t=l.component;n(l,10,0,"none"),n(l,12,0,"assets/menuIcon.svg"),n(l,15,0,"none"),n(l,21,0,t.$balance),n(l,23,0)}),null)}var j=e.lb("app-balance",a,(function(n){return e.Kb(0,[(n()(),e.pb(0,0,null,null,1,"app-balance",[],null,null,null,P,$)),e.ob(1,114688,null,0,a,[p.Db,o.a,i.a,f.m,p.Hb],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),z=t("s7LF"),A=t("IA6j");t.d(l,"BalancePageModuleNgFactory",(function(){return J}));var J=e.mb(c,[],(function(n){return e.yb([e.zb(512,e.j,e.X,[[8,[s.a,j]],[3,e.j],e.v]),e.zb(4608,m.l,m.k,[e.s,[2,m.u]]),e.zb(4608,p.b,p.b,[e.x,e.g]),e.zb(4608,p.Eb,p.Eb,[p.b,e.j,e.p]),e.zb(4608,p.Hb,p.Hb,[p.b,e.j,e.p]),e.zb(4608,z.o,z.o,[]),e.zb(1073742336,m.c,m.c,[]),e.zb(1073742336,p.Ab,p.Ab,[]),e.zb(1073742336,A.a,A.a,[]),e.zb(1073742336,z.n,z.n,[]),e.zb(1073742336,z.e,z.e,[]),e.zb(1073742336,f.q,f.q,[[2,f.v],[2,f.m]]),e.zb(1073742336,c,c,[]),e.zb(1024,f.k,(function(){return[[{path:"",component:a,pathMatch:"full"},{path:"view-tokens/:id",loadChildren:r}]]}),[])])}))}}]);