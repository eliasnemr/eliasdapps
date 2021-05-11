function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,l){for(var e=0;e<l.length;e++){var o=l[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,l,e){return l&&_defineProperties(n.prototype,l),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{yaoq:function(n,l,e){"use strict";e.r(l);var o=e("8Y7J"),t=e("mrSG"),u=e("TOdT"),i=e("J9yG"),a=e("s7LF"),r=function(){function n(l,e,o,t){_classCallCheck(this,n),this.menu=l,this.api=e,this.formBuilder=o,this.myTools=t,this.status="",this.isNft=!1,this.loading=!1,this.success=!1,this.descrEntry={isChecked:!1},this.iconEntry={isChecked:!1},this.proofEntry={isChecked:!1},this.nft={isNonFungible:!1},this.customToken={name:"",amount:0,icon:"",proof:"",script:"",description:""},this.advancedFormInputsChecked={description:!1,icon:!1,proof:!1,nft:!1}}return _createClass(n,[{key:"ionViewDidEnter",value:function(){}},{key:"ngOnInit",value:function(){this.formInit()}},{key:"openMenu",value:function(){this.menu.open()}},{key:"giveMe50",value:function(){var n=this;this.api.giveMe50().then((function(l){n.myTools.presentAlert("Gimme50",!0===l.status?"Successful":l.message,"Status")}))}},{key:"createTokenAdvanced",value:function(){this.loading=!0;var n=this.tokenCreationForm.value;try{this.status="Creating token...",this.create(n)}catch(l){console.log(l)}}},{key:"create",value:function(n){return t.a(this,void 0,void 0,regeneratorRuntime.mark((function l(){var e,o,t=this;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:if(this.myTools.scrollToBottom(this.pageContent),!n.nft){l.next=8;break}return this.submitBtn.disabled=!0,l.next=4,this.api.createToken(n);case 4:(e=l.sent).status?(this.status="Token created!",this.myTools.presentAlert("Success","Token "+this.customToken.name+" has been created.","Token Creation Status"),this.resetForm()):(setTimeout((function(){t.submitBtn.disabled=!1}),500),this.status="Token creation failed!",this.myTools.presentAlert("Error",e.message,"Token Creation Status")),l.next=13;break;case 8:return this.submitBtn.disabled=!0,l.next=11,this.api.createToken(n);case 11:(o=l.sent).status?(this.status=n.name+" has been created!",this.myTools.presentAlert("Success","Token "+this.customToken.name+" has been created.","Token Creation Status"),this.resetForm()):(setTimeout((function(){t.submitBtn.disabled=!1}),500),this.status=n.name+" failed to create!",this.myTools.presentAlert("Error",o.message,"Token Creation Status"));case 13:case"end":return l.stop()}}),l,this)})))}},{key:"formInit",value:function(){this.tokenCreationForm=this.formBuilder.group({name:["",[a.n.required,a.n.maxLength(255)]],amount:["",[a.n.required,a.n.maxLength(255)]],description:"",script:"",icon:["",[a.n.pattern("(http(s?):)([\\/|\\.|\\w|\\s|\\-])*.(?:jpg|png|gif|svg)$"),a.n.maxLength(255)]],proof:["",[a.n.pattern("(http(s?):)([\\/|\\.|\\w|\\s|\\-])*.(?:txt)$"),a.n.maxLength(255)]],nft:!1})}},{key:"resetForm",value:function(){var n=this;setTimeout((function(){n.status=""}),6e3),this.submitBtn.disabled=!1,this.tokenCreationForm.reset(),this.formInit()}},{key:"name",get:function(){return this.tokenCreationForm.get("name")}},{key:"descr",get:function(){return this.tokenCreationForm.get("description")}},{key:"icon",get:function(){return this.tokenCreationForm.get("icon")}},{key:"proof",get:function(){return this.tokenCreationForm.get("proof")}},{key:"amount",get:function(){return this.tokenCreationForm.get("amount")}},{key:"myNft",get:function(){return this.tokenCreationForm.get("nft")}}]),n}(),s=function n(){_classCallCheck(this,n)},c=e("pMnS"),b=e("MKJQ"),p=e("sZkV"),g=e("SVse"),d=o.nb({encapsulation:0,styles:[["ion-input[_ngcontent-%COMP%]{color:#000;font-size:12px;background-color:var(--ion-color-inputs);border:1px solid #f0f0fa;padding-left:2%!important}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--inner-padding-end:0}ion-list[_ngcontent-%COMP%]:first-child{padding-top:0}ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:var(--ion-color-color);font-size:20px;font-family:manrope-bold;white-space:normal;margin-bottom:10px}ion-checkbox.checkbox[_ngcontent-%COMP%]{padding-left:5px;padding-top:5px}ion-item#nft[_ngcontent-%COMP%]{display:inline;vertical-align:middle}ion-item#nft[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{margin-top:12px}ion-item#nft[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]:last-child{margin-top:7px}ion-icon.nftIcon[_ngcontent-%COMP%]{margin-right:7px;font-size:30px}ion-label.nft[_ngcontent-%COMP%]{font-size:16px!important}ion-checkbox[_ngcontent-%COMP%]{--size:30px}ion-textarea[_ngcontent-%COMP%]{padding-left:2%;font-size:12px;color:#000!important;background:var(--ion-color-inputs)}ion-title.cardHeader[_ngcontent-%COMP%]{padding-top:2%;font-size:.9rem;display:inline-block}ion-title.cardHeader[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{cursor:pointer}ion-card-content[_ngcontent-%COMP%]{background:var(--ion-card-color)}ion-card-header[_ngcontent-%COMP%]{--color:var(--ion-text-color,#000);font-family:manrope-bold}.input[_ngcontent-%COMP%]{font-family:manrope-light}.length[_ngcontent-%COMP%]{display:flex;align-items:baseline;justify-content:baseline;margin-left:20px;font-family:manrope-light;font-size:12px}.length[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{font-family:manrope-light!important;color:var(--ion-color-tertiary)!important}ion-item.createtoken-wrapper[_ngcontent-%COMP%]{display:flex;float:right;justify-content:right;align-items:flex-end}ion-button.create-token[_ngcontent-%COMP%]{height:35px;width:164px;float:right;background-color:var(--ion-color-primary);color:#fff;text-transform:none;font-family:manrope-bold}ion-button.create-token[_ngcontent-%COMP%]:hover{--background:#346EE5}"]],data:{}});function m(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,1,"ion-icon",[["class","input-error-icon"],["name","alert-circle"]],null,null,null,b.V,b.m)),o.ob(1,49152,null,0,p.B,[o.h,o.k,o.x],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"alert-circle")}),null)}function h(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,5,"ion-note",[["class","error-message"]],null,null,null,b.gb,b.x)),o.ob(1,49152,null,0,p.U,[o.h,o.k,o.x],null,null),(n()(),o.pb(2,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),o.Hb(-1,null,[" Token name required!"])),(n()(),o.pb(4,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),o.Hb(-1,null,[" Token name must be a maximum length of 255 characters."]))],null,null)}function f(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,1,"ion-icon",[["class","input-error-icon"],["name","alert-circle"]],null,null,null,b.V,b.m)),o.ob(1,49152,null,0,p.B,[o.h,o.k,o.x],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"alert-circle")}),null)}function k(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,5,"ion-note",[["class","error-message"]],null,null,null,b.gb,b.x)),o.ob(1,49152,null,0,p.U,[o.h,o.k,o.x],null,null),(n()(),o.pb(2,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),o.Hb(-1,null,[" Token amount required!"])),(n()(),o.pb(4,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),o.Hb(-1,null,[" Token amount must be numeric and greater than 0."]))],null,null)}function C(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,1,"ion-icon",[["class","input-error-icon"],["name","alert-circle"]],null,null,null,b.V,b.m)),o.ob(1,49152,null,0,p.B,[o.h,o.k,o.x],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"alert-circle")}),null)}function v(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,5,"ion-note",[["class","error-message"]],null,null,null,b.gb,b.x)),o.ob(1,49152,null,0,p.U,[o.h,o.k,o.x],null,null),(n()(),o.pb(2,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),o.Hb(-1,null,[" Invalid icon URL!"])),(n()(),o.pb(4,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),o.Hb(-1,null,[' An icon URL must consist of maximum 255 characters with either ".jpg", ".png" , ".gif" or ".svg" to be valid.']))],null,null)}function x(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,1,"ion-icon",[["class","input-error-icon"],["name","alert-circle"]],null,null,null,b.V,b.m)),o.ob(1,49152,null,0,p.B,[o.h,o.k,o.x],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"alert-circle")}),null)}function B(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,5,"ion-note",[["class","error-message"]],null,null,null,b.gb,b.x)),o.ob(1,49152,null,0,p.U,[o.h,o.k,o.x],null,null),(n()(),o.pb(2,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),o.Hb(-1,null,[" Invalid proof URL!"])),(n()(),o.pb(4,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),o.Hb(-1,null,[' A proof URL must consist of maximum 255 characters with a ".txt" file in the URL.']))],null,null)}function y(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,2,"ion-label",[["class","length"],["style","margin-left:0"]],null,null,null,b.bb,b.s)),o.ob(1,49152,null,0,p.M,[o.h,o.k,o.x],null,null),(n()(),o.Hb(2,0,["",""]))],null,(function(n,l){n(l,2,0,l.component.customToken.description.length+"/255")}))}function M(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,2,"ion-note",[],null,null,null,b.gb,b.x)),o.ob(1,49152,null,0,p.U,[o.h,o.k,o.x],null,null),(n()(),o.Hb(2,0,["",""]))],null,(function(n,l){n(l,2,0,l.component.status)}))}function I(n){return o.Jb(0,[o.Fb(671088640,1,{submitBtn:0}),o.Fb(671088640,2,{pageContent:0}),(n()(),o.pb(2,0,null,null,138,"ion-app",[],null,null,null,b.J,b.a)),o.ob(3,49152,null,0,p.e,[o.h,o.k,o.x],null,null),(n()(),o.pb(4,0,null,0,13,"ion-header",[["class","page-header ion-no-border"]],null,null,null,b.U,b.l)),o.ob(5,49152,null,0,p.A,[o.h,o.k,o.x],null,null),(n()(),o.pb(6,0,null,0,11,"ion-toolbar",[],null,null,null,b.rb,b.I)),o.ob(7,49152,null,0,p.yb,[o.h,o.k,o.x],null,null),(n()(),o.pb(8,0,null,0,9,"ion-title",[],null,null,null,b.pb,b.G)),o.ob(9,49152,null,0,p.wb,[o.h,o.k,o.x],null,null),(n()(),o.pb(10,0,null,0,4,"ion-item",[["class","ion-no-padding"],["id","title"],["lines","none"]],null,null,null,b.ab,b.o)),o.ob(11,49152,null,0,p.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(n()(),o.pb(12,0,null,0,1,"ion-icon",[["class","menu-btn"],["src","assets/menuIcon.svg"]],null,[[null,"click"]],(function(n,l,e){var o=!0;return"click"===l&&(o=!1!==n.component.openMenu()&&o),o}),b.V,b.m)),o.ob(13,49152,null,0,p.B,[o.h,o.k,o.x],{src:[0,"src"]},null),(n()(),o.Hb(-1,0,[" Token "])),(n()(),o.pb(15,0,null,0,2,"ion-item",[["class","breadcrumb ion-no-padding"],["id","subtitle"],["lines","none"]],null,null,null,b.ab,b.o)),o.ob(16,49152,null,0,p.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(n()(),o.Hb(-1,0,[" Create a custom token "])),(n()(),o.pb(18,0,null,0,117,"ion-content",[["class","page-content"]],null,null,null,b.R,b.i)),o.ob(19,49152,[[2,4],["pageContent",4]],0,p.t,[o.h,o.k,o.x],null,null),(n()(),o.pb(20,0,null,0,115,"form",[["id","tokenCreationForm"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,l,e){var t=!0,u=n.component;return"submit"===l&&(t=!1!==o.Bb(n,22).onSubmit(e)&&t),"reset"===l&&(t=!1!==o.Bb(n,22).onReset()&&t),"ngSubmit"===l&&(t=!1!==u.createTokenAdvanced()&&t),t}),null,null)),o.ob(21,16384,null,0,a.r,[],null,null),o.ob(22,540672,null,0,a.d,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),o.Eb(2048,null,a.a,null,[a.d]),o.ob(24,16384,null,0,a.k,[[4,a.a]],null,null),(n()(),o.pb(25,0,null,null,110,"ion-list",[["lines","none"]],null,null,null,b.db,b.t)),o.ob(26,49152,null,0,p.N,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(n()(),o.pb(27,0,null,0,13,"ion-item",[["class","no-ripple ion-no-padding"],["lines","none"]],null,null,null,b.ab,b.o)),o.ob(28,49152,null,0,p.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(n()(),o.pb(29,0,null,0,4,"ion-label",[["position","stacked"]],null,null,null,b.bb,b.s)),o.ob(30,49152,null,0,p.M,[o.h,o.k,o.x],{position:[0,"position"]},null),(n()(),o.eb(16777216,null,0,1,null,m)),o.ob(32,16384,null,0,g.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.Hb(-1,0,[" Name"])),(n()(),o.pb(34,0,null,0,6,"ion-input",[["class","medium-text input"],["formControlName","name"],["name","name"],["placeholder","Enter a token name"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var t=!0;return"ionBlur"===l&&(t=!1!==o.Bb(n,35)._handleBlurEvent(e.target)&&t),"ionChange"===l&&(t=!1!==o.Bb(n,35)._handleInputEvent(e.target)&&t),t}),b.W,b.n)),o.ob(35,4341760,null,0,p.Kb,[o.p,o.k],null,null),o.Eb(1024,null,a.h,(function(n){return[n]}),[p.Kb]),o.ob(37,671744,null,0,a.c,[[3,a.a],[8,null],[8,null],[6,a.h],[2,a.q]],{name:[0,"name"]},null),o.Eb(2048,null,a.i,null,[a.c]),o.ob(39,16384,null,0,a.j,[[4,a.i]],null,null),o.ob(40,49152,[["nameTextArea",4]],0,p.F,[o.h,o.k,o.x],{name:[0,"name"],placeholder:[1,"placeholder"]},null),(n()(),o.eb(16777216,null,0,1,null,h)),o.ob(42,16384,null,0,g.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.pb(43,0,null,0,13,"ion-item",[["class","no-ripple ion-no-padding"],["lines","none"]],null,null,null,b.ab,b.o)),o.ob(44,49152,null,0,p.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(n()(),o.pb(45,0,null,0,4,"ion-label",[["position","stacked"]],null,null,null,b.bb,b.s)),o.ob(46,49152,null,0,p.M,[o.h,o.k,o.x],{position:[0,"position"]},null),(n()(),o.eb(16777216,null,0,1,null,f)),o.ob(48,16384,null,0,g.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.Hb(-1,0,[" Amount"])),(n()(),o.pb(50,0,null,0,6,"ion-input",[["class","medium-text input"],["formControlName","amount"],["name","amount"],["placeholder","Enter token amount"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var t=!0;return"ionBlur"===l&&(t=!1!==o.Bb(n,51)._handleBlurEvent(e.target)&&t),"ionChange"===l&&(t=!1!==o.Bb(n,51)._handleIonChange(e.target)&&t),t}),b.W,b.n)),o.ob(51,4341760,null,0,p.Gb,[o.p,o.k],null,null),o.Eb(1024,null,a.h,(function(n){return[n]}),[p.Gb]),o.ob(53,671744,null,0,a.c,[[3,a.a],[8,null],[8,null],[6,a.h],[2,a.q]],{name:[0,"name"]},null),o.Eb(2048,null,a.i,null,[a.c]),o.ob(55,16384,null,0,a.j,[[4,a.i]],null,null),o.ob(56,49152,[["amountRef",4]],0,p.F,[o.h,o.k,o.x],{name:[0,"name"],placeholder:[1,"placeholder"],type:[2,"type"]},null),(n()(),o.eb(16777216,null,0,1,null,k)),o.ob(58,16384,null,0,g.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.pb(59,0,null,0,15,"ion-item",[["class","no-ripple ion-no-padding"],["lines","none"]],null,null,null,b.ab,b.o)),o.ob(60,49152,null,0,p.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(n()(),o.pb(61,0,null,0,6,"ion-label",[["position","stacked"]],null,null,null,b.bb,b.s)),o.ob(62,49152,null,0,p.M,[o.h,o.k,o.x],{position:[0,"position"]},null),(n()(),o.eb(16777216,null,0,1,null,C)),o.ob(64,16384,null,0,g.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.Hb(-1,0,[" Icon "])),(n()(),o.pb(66,0,null,0,1,"span",[["style","font-family: manrope-light; color:var(--ion-color-optional)"]],null,null,null,null,null)),(n()(),o.Hb(-1,null,["(optional)"])),(n()(),o.pb(68,0,null,0,6,"ion-input",[["class","medium-text input"],["formControlName","icon"],["name","icon"],["placeholder","Enter a valid icon URL"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var t=!0;return"ionBlur"===l&&(t=!1!==o.Bb(n,69)._handleBlurEvent(e.target)&&t),"ionChange"===l&&(t=!1!==o.Bb(n,69)._handleInputEvent(e.target)&&t),t}),b.W,b.n)),o.ob(69,4341760,null,0,p.Kb,[o.p,o.k],null,null),o.Eb(1024,null,a.h,(function(n){return[n]}),[p.Kb]),o.ob(71,671744,null,0,a.c,[[3,a.a],[8,null],[8,null],[6,a.h],[2,a.q]],{name:[0,"name"]},null),o.Eb(2048,null,a.i,null,[a.c]),o.ob(73,16384,null,0,a.j,[[4,a.i]],null,null),o.ob(74,49152,[["iconURL",4]],0,p.F,[o.h,o.k,o.x],{name:[0,"name"],placeholder:[1,"placeholder"]},null),(n()(),o.eb(16777216,null,0,1,null,v)),o.ob(76,16384,null,0,g.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.pb(77,0,null,0,15,"ion-item",[["class","no-ripple ion-no-padding"],["lines","none"]],null,null,null,b.ab,b.o)),o.ob(78,49152,null,0,p.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(n()(),o.pb(79,0,null,0,6,"ion-label",[["position","stacked"]],null,null,null,b.bb,b.s)),o.ob(80,49152,null,0,p.M,[o.h,o.k,o.x],{position:[0,"position"]},null),(n()(),o.eb(16777216,null,0,1,null,x)),o.ob(82,16384,null,0,g.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.Hb(-1,0,[" Proof "])),(n()(),o.pb(84,0,null,0,1,"span",[["style","font-family: manrope-light; color:var(--ion-color-optional)"]],null,null,null,null,null)),(n()(),o.Hb(-1,null,["(optional)"])),(n()(),o.pb(86,0,null,0,6,"ion-input",[["class","medium-text input"],["formControlName","proof"],["name","proof"],["placeholder","Enter URL of website hosting token ID text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var t=!0;return"ionBlur"===l&&(t=!1!==o.Bb(n,87)._handleBlurEvent(e.target)&&t),"ionChange"===l&&(t=!1!==o.Bb(n,87)._handleInputEvent(e.target)&&t),t}),b.W,b.n)),o.ob(87,4341760,null,0,p.Kb,[o.p,o.k],null,null),o.Eb(1024,null,a.h,(function(n){return[n]}),[p.Kb]),o.ob(89,671744,null,0,a.c,[[3,a.a],[8,null],[8,null],[6,a.h],[2,a.q]],{name:[0,"name"]},null),o.Eb(2048,null,a.i,null,[a.c]),o.ob(91,16384,null,0,a.j,[[4,a.i]],null,null),o.ob(92,49152,[["proofURL",4]],0,p.F,[o.h,o.k,o.x],{name:[0,"name"],placeholder:[1,"placeholder"]},null),(n()(),o.eb(16777216,null,0,1,null,B)),o.ob(94,16384,null,0,g.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.pb(95,0,null,0,15,"ion-item",[["class","no-ripple ion-no-padding"],["lines","none"]],null,null,null,b.ab,b.o)),o.ob(96,49152,null,0,p.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(n()(),o.pb(97,0,null,0,4,"ion-label",[["position","stacked"]],null,null,null,b.bb,b.s)),o.ob(98,49152,null,0,p.M,[o.h,o.k,o.x],{position:[0,"position"]},null),(n()(),o.Hb(-1,0,["Description "])),(n()(),o.pb(100,0,null,0,1,"span",[["style","font-family: manrope-light; color:var(--ion-color-optional)"]],null,null,null,null,null)),(n()(),o.Hb(-1,null,["(optional)"])),(n()(),o.pb(102,0,null,0,8,"ion-textarea",[["class","medium-text input"],["formControlName","description"],["maxlength","255"],["name","description"],["placeholder","Enter a description"]],[[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var t=!0,u=n.component;return"ionBlur"===l&&(t=!1!==o.Bb(n,105)._handleBlurEvent(e.target)&&t),"ionChange"===l&&(t=!1!==o.Bb(n,105)._handleInputEvent(e.target)&&t),"ngModelChange"===l&&(t=!1!==(u.customToken.description=e)&&t),t}),b.ob,b.F)),o.ob(103,540672,null,0,a.f,[],{maxlength:[0,"maxlength"]},null),o.Eb(1024,null,a.g,(function(n){return[n]}),[a.f]),o.ob(105,4341760,null,0,p.Kb,[o.p,o.k],null,null),o.Eb(1024,null,a.h,(function(n){return[n]}),[p.Kb]),o.ob(107,671744,null,0,a.c,[[3,a.a],[6,a.g],[8,null],[6,a.h],[2,a.q]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Eb(2048,null,a.i,null,[a.c]),o.ob(109,16384,null,0,a.j,[[4,a.i]],null,null),o.ob(110,49152,[["description",4]],0,p.ub,[o.h,o.k,o.x],{maxlength:[0,"maxlength"],name:[1,"name"],placeholder:[2,"placeholder"]},null),(n()(),o.eb(16777216,null,0,1,null,y)),o.ob(112,16384,null,0,g.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.pb(113,0,null,0,14,"ion-item",[["class","no-ripple ion-no-padding"],["id","nft"]],null,null,null,b.ab,b.o)),o.ob(114,49152,null,0,p.G,[o.h,o.k,o.x],null,null),(n()(),o.pb(115,0,null,0,5,"ion-label",[],null,null,null,b.bb,b.s)),o.ob(116,49152,null,0,p.M,[o.h,o.k,o.x],null,null),(n()(),o.pb(117,0,null,0,1,"ion-icon",[["class","nftIcon"],["src","assets/nft2.svg"]],null,null,null,b.V,b.m)),o.ob(118,49152,null,0,p.B,[o.h,o.k,o.x],{src:[0,"src"]},null),(n()(),o.pb(119,0,null,0,1,"span",[["style","font-size:16px;font-family: manrope-light; color:var(--ion-color-optional); margin-right: 7px"]],null,null,null,null,null)),(n()(),o.Hb(-1,null,["(optional) "])),(n()(),o.pb(121,0,null,0,6,"ion-checkbox",[["formControlName","nft"],["slot","end"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var t=!0;return"ionBlur"===l&&(t=!1!==o.Bb(n,122)._handleBlurEvent(e.target)&&t),"ionChange"===l&&(t=!1!==o.Bb(n,122)._handleIonChange(e.target)&&t),t}),b.P,b.g)),o.ob(122,4341760,null,0,p.c,[o.p,o.k],null,null),o.Eb(1024,null,a.h,(function(n){return[n]}),[p.c]),o.ob(124,671744,null,0,a.c,[[3,a.a],[8,null],[8,null],[6,a.h],[2,a.q]],{name:[0,"name"]},null),o.Eb(2048,null,a.i,null,[a.c]),o.ob(126,16384,null,0,a.j,[[4,a.i]],null,null),o.ob(127,49152,null,0,p.q,[o.h,o.k,o.x],null,null),(n()(),o.pb(128,0,null,0,7,"ion-item",[["class","createtoken-wrapper ion-no-padding"],["lines","none"]],null,null,null,b.ab,b.o)),o.ob(129,49152,null,0,p.G,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(n()(),o.pb(130,0,null,0,5,"div",[["style","display: flex; flex-direction:column; justify-content:right; align-items:flex-end"]],null,null,null,null,null)),(n()(),o.pb(131,0,null,null,2,"ion-button",[["class","create-token"],["fill","clear"],["slot","end"],["type","submit"]],null,null,null,b.L,b.c)),o.ob(132,49152,[[1,4],["submitBtn",4]],0,p.j,[o.h,o.k,o.x],{disabled:[0,"disabled"],fill:[1,"fill"],type:[2,"type"]},null),(n()(),o.Hb(-1,0,[" Create Token "])),(n()(),o.eb(16777216,null,null,1,null,M)),o.ob(135,16384,null,0,g.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.pb(136,0,null,0,4,"ion-footer",[["class","border-t"]],null,null,null,b.S,b.j)),o.ob(137,49152,null,0,p.y,[o.h,o.k,o.x],null,null),(n()(),o.pb(138,0,null,0,2,"ion-button",[["class","gimme50 no-ripple"],["fill","none"]],null,[[null,"click"]],(function(n,l,e){var o=!0;return"click"===l&&(o=!1!==n.component.giveMe50()&&o),o}),b.L,b.c)),o.ob(139,49152,null,0,p.j,[o.h,o.k,o.x],{fill:[0,"fill"]},null),(n()(),o.Hb(-1,0,[" Gimme 50 "]))],(function(n,l){var e=l.component;n(l,11,0,"none"),n(l,13,0,"assets/menuIcon.svg"),n(l,16,0,"none"),n(l,22,0,e.tokenCreationForm),n(l,26,0,"none"),n(l,28,0,"none"),n(l,30,0,"stacked"),n(l,32,0,e.name.invalid&&e.name.touched),n(l,37,0,"name"),n(l,40,0,"name","Enter a token name"),n(l,42,0,e.name.invalid&&e.name.touched),n(l,44,0,"none"),n(l,46,0,"stacked"),n(l,48,0,e.amount.invalid&&e.amount.touched),n(l,53,0,"amount"),n(l,56,0,"amount","Enter token amount","number"),n(l,58,0,e.amount.invalid&&e.amount.touched),n(l,60,0,"none"),n(l,62,0,"stacked"),n(l,64,0,e.icon.invalid&&e.icon.touched),n(l,71,0,"icon"),n(l,74,0,"icon","Enter a valid icon URL"),n(l,76,0,e.icon.invalid&&e.icon.touched),n(l,78,0,"none"),n(l,80,0,"stacked"),n(l,82,0,e.proof.invalid&&e.proof.touched),n(l,89,0,"proof"),n(l,92,0,"proof","Enter URL of website hosting token ID text"),n(l,94,0,e.proof.invalid&&e.proof.touched),n(l,96,0,"none"),n(l,98,0,"stacked"),n(l,103,0,"255"),n(l,107,0,"description",e.customToken.description),n(l,110,0,"255","description","Enter a description"),n(l,112,0,e.customToken.description&&e.customToken.description.length>0),n(l,118,0,"assets/nft2.svg"),n(l,124,0,"nft"),n(l,129,0,"none"),n(l,132,0,e.tokenCreationForm.invalid,"clear","submit"),n(l,135,0,e.status.length>0),n(l,139,0,"none")}),(function(n,l){n(l,20,0,o.Bb(l,24).ngClassUntouched,o.Bb(l,24).ngClassTouched,o.Bb(l,24).ngClassPristine,o.Bb(l,24).ngClassDirty,o.Bb(l,24).ngClassValid,o.Bb(l,24).ngClassInvalid,o.Bb(l,24).ngClassPending),n(l,34,0,o.Bb(l,39).ngClassUntouched,o.Bb(l,39).ngClassTouched,o.Bb(l,39).ngClassPristine,o.Bb(l,39).ngClassDirty,o.Bb(l,39).ngClassValid,o.Bb(l,39).ngClassInvalid,o.Bb(l,39).ngClassPending),n(l,50,0,o.Bb(l,55).ngClassUntouched,o.Bb(l,55).ngClassTouched,o.Bb(l,55).ngClassPristine,o.Bb(l,55).ngClassDirty,o.Bb(l,55).ngClassValid,o.Bb(l,55).ngClassInvalid,o.Bb(l,55).ngClassPending),n(l,68,0,o.Bb(l,73).ngClassUntouched,o.Bb(l,73).ngClassTouched,o.Bb(l,73).ngClassPristine,o.Bb(l,73).ngClassDirty,o.Bb(l,73).ngClassValid,o.Bb(l,73).ngClassInvalid,o.Bb(l,73).ngClassPending),n(l,86,0,o.Bb(l,91).ngClassUntouched,o.Bb(l,91).ngClassTouched,o.Bb(l,91).ngClassPristine,o.Bb(l,91).ngClassDirty,o.Bb(l,91).ngClassValid,o.Bb(l,91).ngClassInvalid,o.Bb(l,91).ngClassPending),n(l,102,0,o.Bb(l,103).maxlength?o.Bb(l,103).maxlength:null,o.Bb(l,109).ngClassUntouched,o.Bb(l,109).ngClassTouched,o.Bb(l,109).ngClassPristine,o.Bb(l,109).ngClassDirty,o.Bb(l,109).ngClassValid,o.Bb(l,109).ngClassInvalid,o.Bb(l,109).ngClassPending),n(l,121,0,o.Bb(l,126).ngClassUntouched,o.Bb(l,126).ngClassTouched,o.Bb(l,126).ngClassPristine,o.Bb(l,126).ngClassDirty,o.Bb(l,126).ngClassValid,o.Bb(l,126).ngClassInvalid,o.Bb(l,126).ngClassPending)}))}var P=o.lb("app-create-token",r,(function(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,1,"app-create-token",[],null,null,null,I,d)),o.ob(1,114688,null,0,r,[p.Db,i.a,a.b,u.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),T=e("iInd");e.d(l,"CreateTokenPageModuleNgFactory",(function(){return _}));var _=o.mb(s,[],(function(n){return o.yb([o.zb(512,o.j,o.X,[[8,[c.a,P]],[3,o.j],o.v]),o.zb(4608,a.b,a.b,[]),o.zb(4608,a.p,a.p,[]),o.zb(4608,g.l,g.k,[o.s,[2,g.u]]),o.zb(4608,p.b,p.b,[o.x,o.g]),o.zb(4608,p.Eb,p.Eb,[p.b,o.j,o.p]),o.zb(4608,p.Hb,p.Hb,[p.b,o.j,o.p]),o.zb(1073742336,a.o,a.o,[]),o.zb(1073742336,a.m,a.m,[]),o.zb(1073742336,g.c,g.c,[]),o.zb(1073742336,a.e,a.e,[]),o.zb(1073742336,p.Ab,p.Ab,[]),o.zb(1073742336,T.q,T.q,[[2,T.v],[2,T.m]]),o.zb(1073742336,s,s,[]),o.zb(1024,T.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);