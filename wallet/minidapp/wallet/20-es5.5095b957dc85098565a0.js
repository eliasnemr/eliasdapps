function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var l=e[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(n,l.key,l)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"Ix+L":function(n,e,t){"use strict";t.r(e);var l=t("8Y7J"),o=t("mrSG"),i=t("TOdT"),r=t("J9yG"),a=t("a7y9"),u=t("iGhG"),s=t("Kmpd"),c=function(){function n(e,t,l,o,i,r,a,u){_classCallCheck(this,n),this.menu=e,this.loadingController=t,this.navCtrl=l,this.popoverController=o,this.userTerminal=i,this.myTools=r,this.api=a,this.renderer=u,this.host="",this.lastLine=""}return _createClass(n,[{key:"keyEvent",value:function(n){"ArrowDown"!=n.key&&"ArrowLeft"!=n.key&&"ArrowRight"!=n.key&&"ArrowUp"!=n.key||n.preventDefault()}},{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){this.initTerminal()}},{key:"ionViewWillLeave",value:function(){this.$fontSubscription.unsubscribe(),this.updateFontSizeSubject(this.fontSize),window.removeEventListener("keydown",(function(n){[37,38,39,40].indexOf(n.keyCode)>-1&&n.preventDefault()}),!0)}},{key:"openMenu",value:function(){this.menu.open()}},{key:"initTerminal",value:function(){var n=this,e=parseInt(localStorage.getItem("userdefaultfontsize"),10);this.fontSize=localStorage.getItem("userdefaultfontsize")?e:14,this.updateFontSizeSubject(this.fontSize),this.$fontSubscription=this.userTerminal.fontSizeEmitter.subscribe((function(e){n.fontSize=e.size}))}},{key:"updateFontSizeSubject",value:function(n){this.userTerminal.fontSizeEmitter.next({size:n}),localStorage.setItem("userdefaultfontsize",JSON.stringify(n))}},{key:"ngAfterViewInit",value:function(){var n=this;this.terminal.nativeElement.value+="**********************************************\n",this.terminal.nativeElement.value+="*  __  __  ____  _  _  ____  __  __    __    *\n",this.terminal.nativeElement.value+="* (  \\/  )(_  _)( \\( )(_  _)(  \\/  )  /__\\   *\n",this.terminal.nativeElement.value+="*  )    (  _)(_  )  (  _)(_  )    (  /(__)\\  *\n",this.terminal.nativeElement.value+="* (_/\\/\\_)(____)(_)\\_)(____)(_/\\/\\_)(__)(__) *\n",this.terminal.nativeElement.value+="*                                            *\n",this.terminal.nativeElement.value+="**********************************************\n",this.terminal.nativeElement.value+="Welcome to Minima. For assistance type help. Then press enter.\n",this.globalInstance=this.renderer.listen(this.terminal.nativeElement,"keydown",(function(e){if([13].indexOf(e.keyCode)>-1){var t=n.terminal.nativeElement.value;n.lastLine=t.substr(t.lastIndexOf("\n")+1),n.lastLine.length>1&&n.request(n.lastLine)}}))}},{key:"scrollToBottomOnInit",value:function(){try{this.ionContent.scrollToBottom(300)}catch(n){throw new Error("ionContent not found.")}}},{key:"request",value:function(n){var e=this;if("printchain"!==n)return new Promise("tutorial"===n||"Tutorial"===n?function(n,t){s.Minima.cmd("tutorial",(function(t){var l=JSON.stringify(t,void 0,2).replace("\\\\n","\n");e.terminal.nativeElement.value+=l,e.terminal.nativeElement.scrollTop=e.terminal.nativeElement.scrollHeight,n(t)}))}:function(t,l){s.Minima.cmd(n,(function(n){e.terminal.nativeElement.value+=JSON.stringify(n,void 0,2)+"\n",e.terminal.nativeElement.scrollTop=e.terminal.nativeElement.scrollHeight,t(n)}))})}},{key:"presentPopover",value:function(n){return o.a(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.popoverController.create({component:a.a,cssClass:"terminal-pop",event:n,translucent:!1,showBackdrop:!1});case 2:return t=e.sent,e.next=5,t.present();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})))}},{key:"giveMe50",value:function(){var n=this;this.api.giveMe50().then((function(e){n.myTools.presentAlert("Gimme50",!0===e.status?"Successful":e.message,"Status")}))}}]),n}(),b=function n(){_classCallCheck(this,n)},m=t("pMnS"),p=t("MKJQ"),f=t("sZkV"),v=t("SVse"),h=t("6jz6"),d=t("LmEr"),_=l.nb({encapsulation:0,styles:[["[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.terminal[_ngcontent-%COMP%]{-moz-user-select:text;user-select:text;padding:0;margin-top:7px;width:100%;background-color:var(--ion-background-color,#fff);color:var(--ion-color-tertiary);font-family:monospace;height:100vh;border:none!important}.resize-tool-btn[_ngcontent-%COMP%]{position:absolute;right:0;font-family:manrope-bold;font-size:1rem;cursor:pointer;color:var(--ion-color-tertiary);text-transform:none}.no-scroll[_ngcontent-%COMP%]{--overflow:hidden}ion-content[_ngcontent-%COMP%]{--overflow:hidden;height:100%!important;max-height:100%!important}.btn.active[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:active, button[_ngcontent-%COMP%]:active, button[_ngcontent-%COMP%]:focus, button[_ngcontent-%COMP%]:hover, input[_ngcontent-%COMP%]:active, input[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:hover, label[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:active, textarea[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:hover{outline:0!important;-webkit-appearance:none;box-shadow:none!important}@media only screen and (min-width:990px){.terminal[_ngcontent-%COMP%]{font-size:1rem;border:0}}ion-toolbar[_ngcontent-%COMP%]{--background:var(--ion-m-background)}"]],data:{}});function g(n){return l.Lb(0,[l.Hb(671088640,1,{ionContent:0}),l.Hb(671088640,2,{terminal:0}),(n()(),l.pb(2,0,null,null,26,"ion-app",[],null,null,null,p.E,p.a)),l.ob(3,49152,null,0,f.e,[l.h,l.k,l.x],null,null),(n()(),l.pb(4,0,null,0,16,"ion-header",[["class","page-header ion-no-border"],["mode","md"]],null,null,null,p.M,p.i)),l.ob(5,49152,null,0,f.A,[l.h,l.k,l.x],{mode:[0,"mode"]},null),(n()(),l.pb(6,0,null,0,14,"ion-toolbar",[],null,null,null,p.hb,p.D)),l.ob(7,49152,null,0,f.yb,[l.h,l.k,l.x],null,null),(n()(),l.pb(8,0,null,0,12,"ion-title",[],null,null,null,p.gb,p.C)),l.ob(9,49152,null,0,f.wb,[l.h,l.k,l.x],null,null),(n()(),l.pb(10,0,null,0,7,"ion-item",[["class","ion-no-padding"],["id","title"],["lines","none"]],null,null,null,p.S,p.l)),l.ob(11,49152,null,0,f.G,[l.h,l.k,l.x],{lines:[0,"lines"]},null),(n()(),l.pb(12,0,null,0,1,"ion-icon",[["class","menu-btn"],["src","assets/menuIcon.svg"]],null,[[null,"click"]],(function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.openMenu()&&l),l}),p.N,p.j)),l.ob(13,49152,null,0,f.B,[l.h,l.k,l.x],{src:[0,"src"]},null),(n()(),l.Jb(-1,0,[" Terminal "])),(n()(),l.pb(15,0,null,0,2,"ion-label",[["class","resize-tool-btn"],["fill","clear"],["lines","none"],["slot","end"]],null,[[null,"click"]],(function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.presentPopover(t)&&l),l}),p.T,p.p)),l.ob(16,49152,null,0,f.M,[l.h,l.k,l.x],null,null),(n()(),l.Jb(-1,0,["aA"])),(n()(),l.pb(18,0,null,0,2,"ion-item",[["class","breadcrumb ion-no-padding"],["id","subtitle"],["lines","none"]],null,null,null,p.S,p.l)),l.ob(19,49152,null,0,f.G,[l.h,l.k,l.x],{lines:[0,"lines"]},null),(n()(),l.Jb(-1,0,[" Minima terminal "])),(n()(),l.pb(21,0,null,0,5,"ion-content",[["class","page-content"]],null,null,null,p.J,p.f)),l.ob(22,49152,[[1,4],["ionContent",4]],0,f.t,[l.h,l.k,l.x],null,null),(n()(),l.pb(23,0,[[2,0],["terminal",1]],0,3,"textarea",[["autocapitalize","false"],["autocorrect","off"],["background","transparent"],["class","terminal"],["spellcheck","false"]],null,null,null,null,null)),l.Gb(512,null,v.s,v.t,[l.k,l.r,l.B]),l.ob(25,278528,null,0,v.m,[v.s],{ngStyle:[0,"ngStyle"]},null),l.Eb(26,{"font-size":0}),(n()(),l.pb(27,0,null,0,1,"app-footer",[],null,null,null,h.b,h.a)),l.ob(28,245760,null,0,d.a,[r.a,i.a],null,null)],(function(n,e){var t=e.component;n(e,5,0,"md"),n(e,11,0,"none"),n(e,13,0,"assets/menuIcon.svg"),n(e,19,0,"none");var l=n(e,26,0,t.fontSize+"px");n(e,25,0,l),n(e,28,0)}),null)}var k=l.lb("app-mini-term",c,(function(n){return l.Lb(0,[(n()(),l.pb(0,0,null,null,1,"app-mini-term",[],null,[["window","keydown"]],(function(n,e,t){var o=!0;return"window:keydown"===e&&(o=!1!==l.Bb(n,1).keyEvent(t)&&o),o}),g,_)),l.ob(1,4308992,null,0,c,[f.Db,f.Cb,f.Fb,f.Ib,u.a,i.a,r.a,l.B],null,null)],(function(n,e){n(e,1,0)}),null)}),{},{},[]),y=t("s7LF"),w=t("iInd"),C=t("IA6j");t.d(e,"MiniTermPageModuleNgFactory",(function(){return z}));var z=l.mb(b,[],(function(n){return l.yb([l.zb(512,l.j,l.X,[[8,[m.a,k]],[3,l.j],l.v]),l.zb(4608,v.l,v.k,[l.s,[2,v.v]]),l.zb(4608,y.p,y.p,[]),l.zb(4608,f.b,f.b,[l.x,l.g]),l.zb(4608,f.Eb,f.Eb,[f.b,l.j,l.p]),l.zb(4608,f.Ib,f.Ib,[f.b,l.j,l.p]),l.zb(1073742336,v.c,v.c,[]),l.zb(1073742336,y.o,y.o,[]),l.zb(1073742336,y.e,y.e,[]),l.zb(1073742336,f.Ab,f.Ab,[]),l.zb(1073742336,w.q,w.q,[[2,w.v],[2,w.m]]),l.zb(1073742336,C.a,C.a,[]),l.zb(1073742336,b,b,[]),l.zb(1024,w.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);