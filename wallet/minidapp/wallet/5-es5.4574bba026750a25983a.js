function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,l){for(var e=0;e<l.length;e++){var t=l[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,l,e){return l&&_defineProperties(n.prototype,l),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{FYmv:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J"),u=e("mrSG"),o=e("TOdT"),i=e("oWBL"),a=e("Ld/l"),s=e("s7LF"),r=e("J9yG"),c=function(){function n(l,e,t,u,o,i,a){_classCallCheck(this,n),this.menu=l,this.modalController=e,this.myTools=t,this.formBuilder=u,this._minimaApiService=o,this._contactService=i,this.route=a,this.nftScript="ASSERT FLOOR ( @AMOUNT ) EQ @AMOUNT LET checkout = 0 WHILE ( checkout LT @TOTOUT )DO IF GETOUTTOK ( checkout ) EQ @TOKENID THEN LET outamt = GETOUTAMT ( checkout ) ASSERT FLOOR ( outamt )EQ outamt ENDIF LET checkout = INC ( checkout ) ENDWHILE RETURN TRUE",this.status="",this.isWebCameraOpen=!1,this.data={tokenid:"",amount:"",address:"",message:""},this.messageToggle=!1,this.tokenArr=[],this.$balance=this._minimaApiService.$balance}return _createClass(n,[{key:"ionViewWillEnter",value:function(){var n=this;this.$contactSubscription=this._contactService.$selected_address.subscribe((function(l){0===l.address.length||(n.addressFormItem.setValue(l.address),n._contactService.$selected_address.next({address:""}))})),this.getTokenSelected()}},{key:"ionViewWillLeave",value:function(){this.$contactSubscription&&this.$contactSubscription.unsubscribe()}},{key:"ngOnInit",value:function(){this.formInit()}},{key:"tokenFormItem",get:function(){return this.sendForm.get("tokenid")}},{key:"addressFormItem",get:function(){return this.sendForm.get("address")}},{key:"amountFormItem",get:function(){return this.sendForm.get("amount")}},{key:"messageFormItem",get:function(){return this.sendForm.get("message")}},{key:"openMenu",value:function(){this.menu.open()}},{key:"presentContactModal",value:function(){return u.a(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.modalController.create({component:a.a,cssClass:"contacts-view"});case 2:n.sent.present();case 3:case"end":return n.stop()}}),n,this)})))}},{key:"sendFunds",value:function(){this.status="Creating your transaction...",this.myTools.scrollToBottom(this.pageContent),this.sendForm.value.amnt=this.sendForm.value.amount.toString();var n=this.sendForm.value;try{this.post(n)}catch(l){console.log(l)}}},{key:"post",value:function(n){return u.a(this,void 0,void 0,regeneratorRuntime.mark((function l(){var e,t,u=this;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:if(this.submitBtn.disabled=!0,this.status="Posting your transaction...",null===n.message||!(n.message||n.message.length>0)){l.next=7;break}return l.next=3,this._minimaApiService.sendMessageTransaction(n);case 3:(e=l.sent).status?(this.status="Transaction posted!",this.myTools.presentAlert("Transaction Status","Transaction has been posted to the network!","Successful"),this.resetForm()):(setTimeout((function(){u.submitBtn.disabled=!1}),500),this.status="Transaction failed!",this.myTools.presentAlert("Transaction Status",e.message,"Failed")),l.next=11;break;case 7:return l.next=9,this._minimaApiService.sendFunds(n);case 9:(t=l.sent).status?(this.status="Transaction posted!",this.myTools.presentAlert("Transaction Status","Transaction has been posted to the network!","Successful"),this.resetForm()):(setTimeout((function(){u.submitBtn.disabled=!1}),500),this.status="Transaction failed!",this.myTools.presentAlert("Transaction Status",t.message,"Failed"));case 11:case"end":return l.stop()}}),l,this)})))}},{key:"resetForm",value:function(){var n=this;setTimeout((function(){n.status=""}),6e3),this.submitBtn.disabled=!1,this.sendForm.reset(),this.formInit()}},{key:"formInit",value:function(){this.sendForm=this.formBuilder.group({tokenid:"",address:["",[s.n.required,s.n.minLength(2),s.n.maxLength(60),s.n.pattern("[Mx|0x][a-zA-Z0-9]+")]],amount:["",[s.n.required]],message:""})}},{key:"getTokenSelected",value:function(){var n=this;this.route.queryParamMap.subscribe((function(l){n.itemSelected=l.params.id,l.params.id||(n.itemSelected="0x00")}))}},{key:"giveMe50",value:function(){var n=this;this._minimaApiService.giveMe50().then((function(l){n.myTools.presentAlert("Gimme50",!0===l.status?"Successful":l.message,"Status")}))}},{key:"onItemSelection",value:function(n){this.itemSelected=this.sendForm.get("tokenid").value}},{key:"fillAmount",value:function(n){var l=this,e=this.sendForm.get("tokenid").value;this.amountInp.value="",this.tokenArr.forEach((function(t){if(e===t.tokenid||e===t.tokenid&&t.script!==l.nftScript){var u=t.sendable;"max"===n?l.amountInp.value=u:"half"===n?l.amountInp.value=(parseFloat(u)/2).toString():"quarter"===n&&(l.amountInp.value=(parseFloat(u)/4).toString())}else if(t.script===l.nftScript){var o=t.sendable;"max"===n?l.amountInp.value=o:"half"===n?l.amountInp.value=Math.floor(parseFloat(o)/2).toString():"quarter"===n&&(l.amountInp.value=Math.floor(parseFloat(o)/4).toString())}}))}},{key:"scanQR",value:function(){this.isWebCameraOpen=!0,console.log("Camera is now on: "+this.isWebCameraOpen);var n=navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});this.videoElem.nativeElement.src=n,this.videoElem.nativeElement.setAttribute("playsinline",!0),this.videoElem.nativeElement.play()}},{key:"stopScanning",value:function(){this.isWebCameraOpen=!1}},{key:"useMessage",value:function(){this.messageToggle=!this.messageToggle}}]),n}(),b=function n(){_classCallCheck(this,n)},d=e("pMnS"),m=e("MKJQ"),p=e("sZkV"),g=e("SVse"),h=e("iInd"),f=t.nb({encapsulation:0,styles:[["ion-card-content[_ngcontent-%COMP%]{background:var(--ion-card-color)}ion-card-header[_ngcontent-%COMP%]{--color:var(--ion-text-color,#000)}ion-item[_ngcontent-%COMP%]{--inner-padding-end:0}ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{white-space:normal;margin-bottom:2%;font-size:20px;font-family:manrope-bold;color:var(--ion-color-color)}ion-item.wordCountWrapper[_ngcontent-%COMP%]{padding:0;margin:0}ion-select[_ngcontent-%COMP%]{outline:0!important;border:1px solid #f0f0fa;font-family:manrope-regular;background-color:var(--ion-color-inputs);font-size:12px;padding-left:2%!important;--placeholder-opacity:0.7;color:grey}ion-select[_ngcontent-%COMP%]:hover{background:var(--ion-color-inputs)!important;background-color:var(--ion-color-inputs)!important;--background-hover:none!important}ion-select[_ngcontent-%COMP%]::part(icon){top:50%;color:var(--ion-color-primary);opacity:1}ion-select-option[_ngcontent-%COMP%]{font-family:manrope-bold}ion-input[_ngcontent-%COMP%]{font-size:12px;color:#000;background-color:var(--ion-color-inputs);border:1px solid #f0f0fa;padding-left:2%!important}.transparentBody[_ngcontent-%COMP%]{background:none!important;--background:none transparent!important}.webscan-canvas[_ngcontent-%COMP%]{text-align:center;--background:none transparent!important}ion-footer[_ngcontent-%COMP%]{width:100%;height:90px;background-color:#001c32;display:flex;align-items:center;justify-content:center}ion-toolbar[_ngcontent-%COMP%]{--background:var(--ion-m-background)}.input[_ngcontent-%COMP%]{font-family:manrope-light}.length[_ngcontent-%COMP%]{display:flex;align-items:baseline;font-family:manrope-light;margin-left:27px;font-size:12px}ion-textarea[_ngcontent-%COMP%]{color:#000!important;background:var(--ion-color-inputs);border:1px solid #f0f0fa;padding-left:2%!important;font-size:12px;margin-bottom:1%}ion-item.send-wrapper[_ngcontent-%COMP%]{display:flex;float:right;justify-content:right;align-items:flex-end}button.footer[_ngcontent-%COMP%]{width:100%;height:100%;font-size:16px;text-align:center;text-transform:none;font-family:manrope-bold;background:0 0;color:#fff}button.footer[_ngcontent-%COMP%]:focus{background:0 0;--background:transparent}ion-button.send-funds[_ngcontent-%COMP%]{height:35px;width:164px;--background:var(--ion-color-primary);text-transform:none;font-family:manrope-bold;color:#fff;float:right;--border-radius:0}ion-button.send-funds[_ngcontent-%COMP%]:hover{--background:#346EE5}div.has[_ngcontent-%COMP%]{display:flex;width:100%}div.has[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:transparent;border:1px solid #f0f0fa}"]],data:{}});function v(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,12,"ion-grid",[],null,null,null,m.V,m.l)),t.ob(1,49152,null,0,p.z,[t.h,t.k,t.x],null,null),(n()(),t.pb(2,0,null,0,10,"ion-row",[],null,null,null,m.kb,m.A)),t.ob(3,49152,null,0,p.fb,[t.h,t.k,t.x],null,null),(n()(),t.pb(4,0,null,0,4,"ion-col",[["class","center-items"],["size","12"]],null,null,null,m.S,m.i)),t.ob(5,49152,null,0,p.s,[t.h,t.k,t.x],{size:[0,"size"]},null),(n()(),t.pb(6,0,null,0,2,"ion-label",[],null,null,null,m.db,m.t)),t.ob(7,49152,null,0,p.M,[t.h,t.k,t.x],null,null),(n()(),t.Hb(-1,0,["Fetching tokens..."])),(n()(),t.pb(9,0,null,0,3,"ion-col",[["class","center-items"],["size","12"]],null,null,null,m.S,m.i)),t.ob(10,49152,null,0,p.s,[t.h,t.k,t.x],{size:[0,"size"]},null),(n()(),t.pb(11,0,null,0,1,"ion-spinner",[["name","crescent"]],null,null,null,m.ob,m.E)),t.ob(12,49152,null,0,p.ob,[t.h,t.k,t.x],{name:[0,"name"]},null)],(function(n,l){n(l,5,0,"12"),n(l,10,0,"12"),n(l,12,0,"crescent")}),null)}function k(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,12,"ion-card",[["class","webscan-canvas"]],null,null,null,m.P,m.e)),t.ob(1,49152,null,0,p.l,[t.h,t.k,t.x],null,null),(n()(),t.pb(2,0,null,0,4,"ion-card-header",[["class","medium-text"]],null,null,null,m.O,m.f)),t.ob(3,49152,null,0,p.n,[t.h,t.k,t.x],null,null),(n()(),t.Hb(-1,0,[" Scan Your Minima QR address now... "])),(n()(),t.pb(5,0,null,0,1,"ion-progress-bar",[["reversed","true"],["type","indeterminate"]],null,null,null,m.jb,m.z)),t.ob(6,49152,null,0,p.V,[t.h,t.k,t.x],{reversed:[0,"reversed"],type:[1,"type"]},null),(n()(),t.pb(7,0,[[3,0],["videoElem",1]],0,0,"video",[["height","240"]],null,null,null,null,null)),(n()(),t.pb(8,0,null,0,0,"hr",[],null,null,null,null,null)),(n()(),t.pb(9,0,null,0,2,"ion-button",[["block","full"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.scanQR()&&t),t}),m.M,m.c)),t.ob(10,49152,null,0,p.j,[t.h,t.k,t.x],null,null),(n()(),t.Hb(-1,0,["Stop Scanning"])),(n()(),t.pb(12,0,null,0,0,"hr",[],null,null,null,null,null))],(function(n,l){n(l,6,0,"true","indeterminate")}),null)}function C(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,2,"ion-select-option",[["class","token-option"]],null,null,null,m.mb,m.D)),t.ob(1,49152,null,0,p.kb,[t.h,t.k,t.x],{value:[0,"value"]},null),(n()(),t.Hb(2,0,[" "," "]))],(function(n,l){n(l,1,0,l.context.$implicit.tokenid)}),(function(n,l){n(l,2,0,l.context.$implicit.token+"\u2014"+l.context.$implicit.tokenid)}))}function x(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"ion-icon",[["class","input-error-icon"],["name","alert-circle"]],null,null,null,m.X,m.n)),t.ob(1,49152,null,0,p.B,[t.h,t.k,t.x],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"alert-circle")}),null)}function y(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,5,"ion-note",[["class","error-message"]],null,null,null,m.ib,m.y)),t.ob(1,49152,null,0,p.U,[t.h,t.k,t.x],null,null),(n()(),t.pb(2,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),t.Hb(-1,null,[" Invalid address format!"])),(n()(),t.pb(4,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),t.Hb(-1,null,[" An address must begin with 0x or Mx."]))],null,null)}function M(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"ion-icon",[["class","input-error-icon"],["name","alert-circle"]],null,null,null,m.X,m.n)),t.ob(1,49152,null,0,p.B,[t.h,t.k,t.x],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"alert-circle")}),null)}function B(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,5,"ion-note",[["class","error-message"]],null,null,null,m.ib,m.y)),t.ob(1,49152,null,0,p.U,[t.h,t.k,t.x],null,null),(n()(),t.pb(2,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),t.Hb(-1,null,[" Amount required!"])),(n()(),t.pb(4,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),t.Hb(-1,null,[" Amount must be numeric and greater than zero."]))],null,null)}function I(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,2,"ion-label",[["class","length ion-no-margin"]],null,null,null,m.db,m.t)),t.ob(1,49152,null,0,p.M,[t.h,t.k,t.x],null,null),(n()(),t.Hb(2,0,["",""]))],null,(function(n,l){n(l,2,0,l.component.data.message.length+"/255")}))}function T(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,2,"ion-note",[],null,null,null,m.ib,m.y)),t.ob(1,49152,null,0,p.U,[t.h,t.k,t.x],null,null),(n()(),t.Hb(2,0,["",""]))],null,(function(n,l){n(l,2,0,l.component.status)}))}function S(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,83,"form",[["id","sendForm"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,l,e){var u=!0,o=n.component;return"submit"===l&&(u=!1!==t.Bb(n,2).onSubmit(e)&&u),"reset"===l&&(u=!1!==t.Bb(n,2).onReset()&&u),"ngSubmit"===l&&(u=!1!==o.sendFunds()&&u),u}),null,null)),t.ob(1,16384,null,0,s.r,[],null,null),t.ob(2,540672,null,0,s.d,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Eb(2048,null,s.a,null,[s.d]),t.ob(4,16384,null,0,s.k,[[4,s.a]],null,null),(n()(),t.pb(5,0,null,null,70,"ion-list",[["class","ion-no-padding"]],null,null,null,m.fb,m.u)),t.ob(6,49152,null,0,p.N,[t.h,t.k,t.x],null,null),(n()(),t.pb(7,0,null,0,14,"ion-item",[["class","no-hover no-ripple ion-no-padding"],["lines","none"]],null,null,null,m.cb,m.p)),t.ob(8,49152,null,0,p.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.pb(9,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,m.db,m.t)),t.ob(10,49152,null,0,p.M,[t.h,t.k,t.x],{position:[0,"position"]},null),(n()(),t.Hb(-1,0,["Token"])),(n()(),t.pb(12,0,null,0,9,"ion-select",[["class","no-hover no-ripple input"],["formControlName","tokenid"],["interface","ion-action-sheet"],["placeholder","Select A Token"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(n,l,e){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==t.Bb(n,13)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t.Bb(n,13)._handleChangeEvent(e.target)&&u),"ngModelChange"===l&&(u=!1!==(o.itemSelected=e)&&u),"ionChange"===l&&(u=!1!==o.onItemSelection(e)&&u),u}),m.nb,m.C)),t.ob(13,4341760,null,0,p.Jb,[t.p,t.k],null,null),t.Eb(1024,null,s.h,(function(n){return[n]}),[p.Jb]),t.ob(15,671744,null,0,s.c,[[3,s.a],[8,null],[8,null],[6,s.h],[2,s.q]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Eb(2048,null,s.i,null,[s.c]),t.ob(17,16384,null,0,s.j,[[4,s.i]],null,null),t.ob(18,49152,null,0,p.jb,[t.h,t.k,t.x],{interface:[0,"interface"],placeholder:[1,"placeholder"]},null),(n()(),t.eb(16777216,null,0,2,null,C)),t.ob(20,278528,null,0,g.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),t.Cb(131072,g.b,[t.h]),(n()(),t.pb(22,0,null,0,17,"ion-item",[["class","no-hover no-ripple ion-no-padding"],["lines","none"]],null,null,null,m.cb,m.p)),t.ob(23,49152,null,0,p.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.pb(24,0,null,0,4,"ion-label",[["class","medium-text"],["position","stacked"]],null,null,null,m.db,m.t)),t.ob(25,49152,null,0,p.M,[t.h,t.k,t.x],{position:[0,"position"]},null),(n()(),t.eb(16777216,null,0,1,null,x)),t.ob(27,16384,null,0,g.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.Hb(-1,0,[" Address"])),(n()(),t.pb(29,0,null,0,10,"div",[["class","has"]],null,null,null,null,null)),(n()(),t.pb(30,0,null,null,6,"ion-input",[["class","medium-text input"],["clearInput","true"],["formControlName","address"],["placeholder","Enter a valid address"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var u=!0;return"ionBlur"===l&&(u=!1!==t.Bb(n,31)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t.Bb(n,31)._handleInputEvent(e.target)&&u),u}),m.Y,m.o)),t.ob(31,4341760,null,0,p.Kb,[t.p,t.k],null,null),t.Eb(1024,null,s.h,(function(n){return[n]}),[p.Kb]),t.ob(33,671744,null,0,s.c,[[3,s.a],[8,null],[8,null],[6,s.h],[2,s.q]],{name:[0,"name"]},null),t.Eb(2048,null,s.i,null,[s.c]),t.ob(35,16384,null,0,s.j,[[4,s.i]],null,null),t.ob(36,49152,[["address",4]],0,p.F,[t.h,t.k,t.x],{clearInput:[0,"clearInput"],placeholder:[1,"placeholder"]},null),(n()(),t.pb(37,0,null,null,2,"button",[["class","clear"],["type","button"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.presentContactModal()&&t),t}),null,null)),(n()(),t.pb(38,0,null,null,1,"ion-icon",[["name","person-add-outline"],["style","font-size: 16px; color: var(--ion-color-primary)"]],null,null,null,m.X,m.n)),t.ob(39,49152,null,0,p.B,[t.h,t.k,t.x],{name:[0,"name"]},null),(n()(),t.eb(16777216,null,0,1,null,y)),t.ob(41,16384,null,0,g.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(42,0,null,0,13,"ion-item",[["class","no-hover no-ripple ion-no-padding"],["lines","none"]],null,null,null,m.cb,m.p)),t.ob(43,49152,null,0,p.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.pb(44,0,null,0,4,"ion-label",[["class","medium-text"],["position","stacked"]],null,null,null,m.db,m.t)),t.ob(45,49152,null,0,p.M,[t.h,t.k,t.x],{position:[0,"position"]},null),(n()(),t.eb(16777216,null,0,1,null,M)),t.ob(47,16384,null,0,g.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.Hb(-1,0,[" Amount"])),(n()(),t.pb(49,0,null,0,6,"ion-input",[["class","input"],["formControlName","amount"],["placeholder","Enter token amount"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var u=!0;return"ionBlur"===l&&(u=!1!==t.Bb(n,50)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t.Bb(n,50)._handleIonChange(e.target)&&u),u}),m.Y,m.o)),t.ob(50,4341760,null,0,p.Gb,[t.p,t.k],null,null),t.Eb(1024,null,s.h,(function(n){return[n]}),[p.Gb]),t.ob(52,671744,null,0,s.c,[[3,s.a],[8,null],[8,null],[6,s.h],[2,s.q]],{name:[0,"name"]},null),t.Eb(2048,null,s.i,null,[s.c]),t.ob(54,16384,null,0,s.j,[[4,s.i]],null,null),t.ob(55,49152,[[2,4],["amount",4]],0,p.F,[t.h,t.k,t.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),t.eb(16777216,null,0,1,null,B)),t.ob(57,16384,null,0,g.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(58,0,null,0,15,"ion-item",[["class","no-hover no-ripple ion-no-padding"],["lines","none"]],null,null,null,m.cb,m.p)),t.ob(59,49152,null,0,p.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.pb(60,0,null,0,4,"ion-label",[["position","stacked"],["style","margin-bottom: 1%;"]],null,null,null,m.db,m.t)),t.ob(61,49152,null,0,p.M,[t.h,t.k,t.x],{position:[0,"position"]},null),(n()(),t.Hb(-1,0,["Message "])),(n()(),t.pb(63,0,null,0,1,"span",[["style","font-family: manrope-light; color:var(--ion-color-optional); margin-right: 7px"]],null,null,null,null,null)),(n()(),t.Hb(-1,null,["(optional) "])),(n()(),t.pb(65,0,null,0,8,"ion-textarea",[["auto-grow","false"],["class","medium-text input"],["formControlName","message"],["maxlength","255"],["placeholder","This message will be public"]],[[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==t.Bb(n,68)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t.Bb(n,68)._handleInputEvent(e.target)&&u),"ngModelChange"===l&&(u=!1!==(o.data.message=e)&&u),u}),m.qb,m.G)),t.ob(66,540672,null,0,s.f,[],{maxlength:[0,"maxlength"]},null),t.Eb(1024,null,s.g,(function(n){return[n]}),[s.f]),t.ob(68,4341760,null,0,p.Kb,[t.p,t.k],null,null),t.Eb(1024,null,s.h,(function(n){return[n]}),[p.Kb]),t.ob(70,671744,null,0,s.c,[[3,s.a],[6,s.g],[8,null],[6,s.h],[2,s.q]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Eb(2048,null,s.i,null,[s.c]),t.ob(72,16384,null,0,s.j,[[4,s.i]],null,null),t.ob(73,49152,[["message",4]],0,p.ub,[t.h,t.k,t.x],{maxlength:[0,"maxlength"],placeholder:[1,"placeholder"]},null),(n()(),t.eb(16777216,null,0,1,null,I)),t.ob(75,16384,null,0,g.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(76,0,null,null,7,"ion-item",[["class","send-wrapper ion-no-padding"],["lines","none"]],null,null,null,m.cb,m.p)),t.ob(77,49152,null,0,p.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.pb(78,0,null,0,5,"div",[["style","display: flex; flex-direction:column; justify-content:right; align-items:flex-end"]],null,null,null,null,null)),(n()(),t.pb(79,0,null,null,2,"ion-button",[["class","send-funds"],["fill","clear"],["slot","end"],["type","submit"]],null,null,null,m.M,m.c)),t.ob(80,49152,[[1,4],["submitBtn",4]],0,p.j,[t.h,t.k,t.x],{disabled:[0,"disabled"],fill:[1,"fill"],type:[2,"type"]},null),(n()(),t.Hb(-1,0,[" Send Funds "])),(n()(),t.eb(16777216,null,null,1,null,T)),t.ob(83,16384,null,0,g.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,2,0,e.sendForm),n(l,8,0,"none"),n(l,10,0,"floating"),n(l,15,0,"tokenid",e.itemSelected),n(l,18,0,"ion-action-sheet","Select A Token"),n(l,20,0,t.Ib(l,20,0,t.Bb(l,21).transform(e.$balance))),n(l,23,0,"none"),n(l,25,0,"stacked"),n(l,27,0,e.addressFormItem.invalid&&e.addressFormItem.touched),n(l,33,0,"address"),n(l,36,0,"true","Enter a valid address"),n(l,39,0,"person-add-outline"),n(l,41,0,e.addressFormItem.invalid&&e.addressFormItem.touched),n(l,43,0,"none"),n(l,45,0,"stacked"),n(l,47,0,e.amountFormItem.invalid&&e.amountFormItem.touched),n(l,52,0,"amount"),n(l,55,0,"Enter token amount","number"),n(l,57,0,e.amountFormItem.invalid&&e.amountFormItem.touched),n(l,59,0,"none"),n(l,61,0,"stacked"),n(l,66,0,"255"),n(l,70,0,"message",e.data.message),n(l,73,0,"255","This message will be public"),n(l,75,0,e.data.message),n(l,77,0,"none"),n(l,80,0,e.sendForm.invalid,"clear","submit"),n(l,83,0,e.status.length>0)}),(function(n,l){n(l,0,0,t.Bb(l,4).ngClassUntouched,t.Bb(l,4).ngClassTouched,t.Bb(l,4).ngClassPristine,t.Bb(l,4).ngClassDirty,t.Bb(l,4).ngClassValid,t.Bb(l,4).ngClassInvalid,t.Bb(l,4).ngClassPending),n(l,12,0,t.Bb(l,17).ngClassUntouched,t.Bb(l,17).ngClassTouched,t.Bb(l,17).ngClassPristine,t.Bb(l,17).ngClassDirty,t.Bb(l,17).ngClassValid,t.Bb(l,17).ngClassInvalid,t.Bb(l,17).ngClassPending),n(l,30,0,t.Bb(l,35).ngClassUntouched,t.Bb(l,35).ngClassTouched,t.Bb(l,35).ngClassPristine,t.Bb(l,35).ngClassDirty,t.Bb(l,35).ngClassValid,t.Bb(l,35).ngClassInvalid,t.Bb(l,35).ngClassPending),n(l,49,0,t.Bb(l,54).ngClassUntouched,t.Bb(l,54).ngClassTouched,t.Bb(l,54).ngClassPristine,t.Bb(l,54).ngClassDirty,t.Bb(l,54).ngClassValid,t.Bb(l,54).ngClassInvalid,t.Bb(l,54).ngClassPending),n(l,65,0,t.Bb(l,66).maxlength?t.Bb(l,66).maxlength:null,t.Bb(l,72).ngClassUntouched,t.Bb(l,72).ngClassTouched,t.Bb(l,72).ngClassPristine,t.Bb(l,72).ngClassDirty,t.Bb(l,72).ngClassValid,t.Bb(l,72).ngClassInvalid,t.Bb(l,72).ngClassPending)}))}function E(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,7,"ion-content",[["class","page-content"]],null,null,null,m.T,m.j)),t.ob(1,49152,[[4,4],["pageContent",4]],0,p.t,[t.h,t.k,t.x],null,null),(n()(),t.eb(16777216,null,0,1,null,v)),t.ob(3,16384,null,0,g.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.eb(16777216,null,0,1,null,k)),t.ob(5,16384,null,0,g.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.eb(16777216,null,0,1,null,S)),t.ob(7,16384,null,0,g.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,3,0,!e.$balance),n(l,5,0,e.isWebCameraOpen),n(l,7,0,!e.isWebCameraOpen&&e.$balance)}),null)}function F(n){return t.Jb(0,[t.Fb(671088640,1,{submitBtn:0}),t.Fb(671088640,2,{amountInp:0}),t.Fb(671088640,3,{videoElem:0}),t.Fb(671088640,4,{pageContent:0}),(n()(),t.pb(4,0,null,null,22,"ion-app",[],null,null,null,m.K,m.a)),t.ob(5,49152,null,0,p.e,[t.h,t.k,t.x],null,null),(n()(),t.pb(6,0,null,0,13,"ion-header",[["class","page-header ion-no-border"]],null,null,null,m.W,m.m)),t.ob(7,49152,null,0,p.A,[t.h,t.k,t.x],null,null),(n()(),t.pb(8,0,null,0,11,"ion-toolbar",[],null,null,null,m.tb,m.J)),t.ob(9,49152,null,0,p.yb,[t.h,t.k,t.x],null,null),(n()(),t.pb(10,0,null,0,9,"ion-title",[],null,null,null,m.rb,m.H)),t.ob(11,49152,null,0,p.wb,[t.h,t.k,t.x],null,null),(n()(),t.pb(12,0,null,0,4,"ion-item",[["class","ion-no-padding"],["id","title"],["lines","none"]],null,null,null,m.cb,m.p)),t.ob(13,49152,null,0,p.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.pb(14,0,null,0,1,"ion-icon",[["class","menu-btn"],["src","assets/menuIcon.svg"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.openMenu()&&t),t}),m.X,m.n)),t.ob(15,49152,null,0,p.B,[t.h,t.k,t.x],{src:[0,"src"]},null),(n()(),t.Hb(-1,0,[" Send "])),(n()(),t.pb(17,0,null,0,2,"ion-item",[["class","breadcrumb ion-no-padding"],["id","subtitle"],["lines","none"]],null,null,null,m.cb,m.p)),t.ob(18,49152,null,0,p.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.Hb(-1,0,[" Enter transaction details "])),(n()(),t.eb(16777216,null,0,1,null,E)),t.ob(21,16384,null,0,g.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(22,0,null,0,4,"ion-footer",[["class","border-t"]],null,null,null,m.U,m.k)),t.ob(23,49152,null,0,p.y,[t.h,t.k,t.x],null,null),(n()(),t.pb(24,0,null,0,2,"ion-button",[["class","gimme50 no-ripple"],["fill","none"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.giveMe50()&&t),t}),m.M,m.c)),t.ob(25,49152,null,0,p.j,[t.h,t.k,t.x],{fill:[0,"fill"]},null),(n()(),t.Hb(-1,0,[" Gimme 50 "]))],(function(n,l){var e=l.component;n(l,13,0,"none"),n(l,15,0,"assets/menuIcon.svg"),n(l,18,0,"none"),n(l,21,0,!e.isWebCameraOpen),n(l,25,0,"none")}),null)}var O=t.lb("app-send-funds",c,(function(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"app-send-funds",[],null,null,null,F,f)),t.ob(1,114688,null,0,c,[p.Db,p.Eb,o.a,s.b,r.a,i.a,h.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]);e.d(l,"SendFundsPageModuleNgFactory",(function(){return _}));var _=t.mb(b,[],(function(n){return t.yb([t.zb(512,t.j,t.X,[[8,[d.a,O]],[3,t.j],t.v]),t.zb(4608,s.b,s.b,[]),t.zb(4608,s.p,s.p,[]),t.zb(4608,g.l,g.k,[t.s,[2,g.u]]),t.zb(4608,p.b,p.b,[t.x,t.g]),t.zb(4608,p.Eb,p.Eb,[p.b,t.j,t.p]),t.zb(4608,p.Hb,p.Hb,[p.b,t.j,t.p]),t.zb(1073742336,s.o,s.o,[]),t.zb(1073742336,s.m,s.m,[]),t.zb(1073742336,g.c,g.c,[]),t.zb(1073742336,s.e,s.e,[]),t.zb(1073742336,p.Ab,p.Ab,[]),t.zb(1073742336,h.q,h.q,[[2,h.v],[2,h.m]]),t.zb(1073742336,b,b,[]),t.zb(1024,h.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);