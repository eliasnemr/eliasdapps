(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{HPYO:function(n,l,o){"use strict";o.r(l);var t=o("8Y7J"),e=o("TOdT"),u=o("J9yG"),i=o("Kmpd");class s{constructor(n,l,o){this.menu=n,this.myTools=l,this.api=o,this.qrCode="",this.copyStatus="Copy Address",this.genStatus="Generate Address",this.isEmpty=!1}ngOnInit(){}ionViewWillEnter(){i.Minima.file.load("lastAddress.txt",n=>{if(n.success){const l=JSON.parse(n.data);0===l.address.length?this.newAddress():(this.qrCode=l.address,this.isEmpty=!0)}else this.newAddress()})}openMenu(){this.menu.open()}generateAddress(){this.genStatus="",this.newAddress(),this.generateAddressBtn.disabled=!0,setTimeout(()=>{this.generateAddressBtn.disabled=!1,this.genStatus="Generate Address"},2e3)}newAddress(){setTimeout(()=>{this.api.newAddress().then(n=>{if(n.status){this.qrCode=n.response.address.miniaddress,this.isEmpty=!0;const l=JSON.stringify({address:this.qrCode});i.Minima.file.save(l,"lastAddress.txt",n=>{})}})},0)}copy(n){this.copyStatus="Copied!",this.copyAddressBtn.disabled=!0,this.myTools.copy(n),setTimeout(()=>{this.copyStatus="Copy Address",this.copyAddressBtn.disabled=!1},2e3)}}class r{}var a=o("pMnS"),c=o("MKJQ"),b=o("sZkV"),d=o("SVse"),p=o("6jz6"),g=o("LmEr"),h=t.nb({encapsulation:0,styles:[["ion-item[_ngcontent-%COMP%]{--inner-padding-end:0}ion-content[_ngcontent-%COMP%]{--overflow:hidden}ion-button.copy-btn[_ngcontent-%COMP%]{font-size:14px;text-transform:none;font-family:manrope-bold;color:#fff;background-color:var(--ion-color-primary);height:35px;width:164px;margin-left:0;margin-right:7px}ion-button.copy-btn[_ngcontent-%COMP%]:hover{--background:#346EE5}ion-button.gen-btn[_ngcontent-%COMP%]{font-size:14px;height:35px;width:164px;text-transform:none;font-family:manrope-bold;color:var(--ion-color-tertiary);border:1px solid var(--ion-color-tertiary);box-shadow:none;margin-left:0}ion-button.gen-btn[_ngcontent-%COMP%]:hover{--background:var(--ion-color-item-hover);color:var(--ion-color-tertiary);--border-radius:0;border-color:var(--ion-color-tertiary)}ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{display:flex;align-items:left;justify-content:left}ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]:first-child{margin-top:5px}input.qrcode-box[_ngcontent-%COMP%]{background-color:var(--ion-color-inputs);color:#000;border:none;width:100%;margin-bottom:0;margin-top:12px;padding:1%;font-size:15px}input.qrcode-box[_ngcontent-%COMP%]:focus{outline-color:var(--ion-color-primary)}.toast[_ngcontent-%COMP%]{--width:50%}p.notes[_ngcontent-%COMP%]{color:var(--ion-color-tertiary);opacity:.5;margin:10px 0 0;font-size:14px}div.qr-box[_ngcontent-%COMP%]{width:226px;height:226px;padding:10%;background-color:var(--ion-color-inputs);display:flex;align-items:center;justify-content:center;outline:#001c32 solid 1px}div.qr-box[_ngcontent-%COMP%]:hover{outline-color:var(--ion-color-primary)}@media only screen and (max-width:600px){ion-button.copy-btn[_ngcontent-%COMP%], ion-button.gen-btn[_ngcontent-%COMP%]{width:175px}}@media only screen and (max-width:411px){ion-button.copy-btn[_ngcontent-%COMP%], ion-button.gen-btn[_ngcontent-%COMP%]{width:175px}}@media only screen and (max-width:401px){ion-button.copy-btn[_ngcontent-%COMP%], ion-button.gen-btn[_ngcontent-%COMP%]{width:165px}}.mt-18[_ngcontent-%COMP%]{margin-top:15px}.prompt[_ngcontent-%COMP%]{color:var(--ion-color-tertiary)}"]],data:{}});function m(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,2,"ion-item",[["class","breadcrumb ion-no-padding"],["id","subtitle"],["lines","none"]],null,null,null,c.S,c.l)),t.ob(1,49152,null,0,b.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.Ib(-1,0,[" Your wallet address "]))],(function(n,l){n(l,1,0,"none")}),null)}function f(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,12,"ion-grid",[],null,null,null,c.L,c.h)),t.ob(1,49152,null,0,b.z,[t.h,t.k,t.x],null,null),(n()(),t.pb(2,0,null,0,10,"ion-row",[],null,null,null,c.Z,c.v)),t.ob(3,49152,null,0,b.fb,[t.h,t.k,t.x],null,null),(n()(),t.pb(4,0,null,0,4,"ion-col",[["size","12"],["style","display: flex; align-items:center; justify-content:center"]],null,null,null,c.I,c.e)),t.ob(5,49152,null,0,b.s,[t.h,t.k,t.x],{size:[0,"size"]},null),(n()(),t.pb(6,0,null,0,2,"ion-label",[["class","prompt"]],null,null,null,c.T,c.p)),t.ob(7,49152,null,0,b.M,[t.h,t.k,t.x],null,null),(n()(),t.Ib(-1,0,["Fetching an address..."])),(n()(),t.pb(9,0,null,0,3,"ion-col",[["size","12"],["style","display: flex; align-items:center; justify-content:center"]],null,null,null,c.I,c.e)),t.ob(10,49152,null,0,b.s,[t.h,t.k,t.x],{size:[0,"size"]},null),(n()(),t.pb(11,0,null,0,1,"ion-spinner",[["name","crescent"]],null,null,null,c.db,c.z)),t.ob(12,49152,null,0,b.ob,[t.h,t.k,t.x],{name:[0,"name"]},null)],(function(n,l){n(l,5,0,"12"),n(l,10,0,"12"),n(l,12,0,"crescent")}),null)}function x(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,1,"ion-spinner",[["color","gray-one"],["name","dots"]],null,null,null,c.db,c.z)),t.ob(1,49152,null,0,b.ob,[t.h,t.k,t.x],{color:[0,"color"],name:[1,"name"]},null)],(function(n,l){n(l,1,0,"gray-one","dots")}),null)}function y(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,26,"ion-grid",[["class","ion-no-padding"]],null,null,null,c.L,c.h)),t.ob(1,49152,null,0,b.z,[t.h,t.k,t.x],null,null),(n()(),t.pb(2,0,null,0,4,"ion-row",[["class","mt-18"]],null,null,null,c.Z,c.v)),t.ob(3,49152,null,0,b.fb,[t.h,t.k,t.x],null,null),(n()(),t.pb(4,0,null,0,2,"ion-col",[["class","ion-no-padding"],["size","12"]],null,null,null,c.I,c.e)),t.ob(5,49152,null,0,b.s,[t.h,t.k,t.x],{size:[0,"size"]},null),(n()(),t.pb(6,0,null,0,0,"input",[["class","qrcode-box"]],[[8,"value",0]],null,null,null,null)),(n()(),t.pb(7,0,null,0,11,"ion-row",[["class","mt-18"]],null,null,null,c.Z,c.v)),t.ob(8,49152,null,0,b.fb,[t.h,t.k,t.x],null,null),(n()(),t.pb(9,0,null,0,9,"ion-col",[["class","ion-no-padding"],["size","12"]],null,null,null,c.I,c.e)),t.ob(10,49152,null,0,b.s,[t.h,t.k,t.x],{size:[0,"size"]},null),(n()(),t.pb(11,0,null,0,2,"ion-button",[["class","copy-btn"],["fill","clear"]],null,[[null,"click"]],(function(n,l,o){var t=!0,e=n.component;return"click"===l&&(t=!1!==e.copy(e.qrCode)&&t),t}),c.G,c.c)),t.ob(12,49152,[[2,4],["copyAddressBtn",4]],0,b.j,[t.h,t.k,t.x],{fill:[0,"fill"]},null),(n()(),t.Ib(13,0,[" "," "])),(n()(),t.pb(14,0,null,0,4,"ion-button",[["class","gen-btn"],["fill","none"]],null,[[null,"click"]],(function(n,l,o){var t=!0;return"click"===l&&(t=!1!==n.component.generateAddress()&&t),t}),c.G,c.c)),t.ob(15,49152,[[1,4],["generateAddressBtn",4]],0,b.j,[t.h,t.k,t.x],{fill:[0,"fill"]},null),(n()(),t.Ib(16,0,[" "," "])),(n()(),t.eb(16777216,null,0,1,null,x)),t.ob(18,16384,null,0,d.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(19,0,null,0,7,"ion-row",[],null,null,null,c.Z,c.v)),t.ob(20,49152,null,0,b.fb,[t.h,t.k,t.x],null,null),(n()(),t.pb(21,0,null,0,1,"p",[["class","notes"]],null,null,null,null,null)),(n()(),t.Ib(-1,null,["You can use this address a thousand times."])),(n()(),t.pb(23,0,null,0,1,"p",[["class","notes"]],null,null,null,null,null)),(n()(),t.Ib(-1,null,["This address can be used for any Minima token or Minima custom token transaction."])),(n()(),t.pb(25,0,null,0,1,"p",[["class","notes"]],null,null,null,null,null)),(n()(),t.Ib(-1,null,["Click 'Generate Address' to create a new address when needed."]))],(function(n,l){var o=l.component;n(l,5,0,"12"),n(l,10,0,"12"),n(l,12,0,"clear"),n(l,15,0,"none"),n(l,18,0,""===o.genStatus)}),(function(n,l){var o=l.component;n(l,6,0,t.tb(1,"",o.qrCode,"")),n(l,13,0,o.copyStatus),n(l,16,0,o.genStatus)}))}function k(n){return t.Kb(0,[t.Gb(671088640,1,{generateAddressBtn:0}),t.Gb(671088640,2,{copyAddressBtn:0}),(n()(),t.pb(2,0,null,null,22,"ion-app",[],null,null,null,c.E,c.a)),t.ob(3,49152,null,0,b.e,[t.h,t.k,t.x],null,null),(n()(),t.pb(4,0,null,0,12,"ion-header",[["class","page-header ion-no-border"]],null,null,null,c.M,c.i)),t.ob(5,49152,null,0,b.A,[t.h,t.k,t.x],null,null),(n()(),t.pb(6,0,null,0,10,"ion-toolbar",[],null,null,null,c.hb,c.D)),t.ob(7,49152,null,0,b.yb,[t.h,t.k,t.x],null,null),(n()(),t.pb(8,0,null,0,8,"ion-title",[],null,null,null,c.gb,c.C)),t.ob(9,49152,null,0,b.wb,[t.h,t.k,t.x],null,null),(n()(),t.pb(10,0,null,0,4,"ion-item",[["class","ion-no-padding"],["id","title"],["lines","none"]],null,null,null,c.S,c.l)),t.ob(11,49152,null,0,b.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.pb(12,0,null,0,1,"ion-icon",[["class","menu-btn"],["src","assets/menuIcon.svg"]],null,[[null,"click"]],(function(n,l,o){var t=!0;return"click"===l&&(t=!1!==n.component.openMenu()&&t),t}),c.N,c.j)),t.ob(13,49152,null,0,b.B,[t.h,t.k,t.x],{src:[0,"src"]},null),(n()(),t.Ib(-1,0,[" Receive "])),(n()(),t.eb(16777216,null,0,1,null,m)),t.ob(16,16384,null,0,d.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(17,0,null,0,5,"ion-content",[["class","page-content"]],null,null,null,c.J,c.f)),t.ob(18,49152,null,0,b.t,[t.h,t.k,t.x],null,null),(n()(),t.eb(16777216,null,0,1,null,f)),t.ob(20,16384,null,0,d.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.eb(16777216,null,0,1,null,y)),t.ob(22,16384,null,0,d.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(23,0,null,0,1,"app-footer",[],null,null,null,p.b,p.a)),t.ob(24,245760,null,0,g.a,[u.a,e.a],null,null)],(function(n,l){var o=l.component;n(l,11,0,"none"),n(l,13,0,"assets/menuIcon.svg"),n(l,16,0,o.qrCode.length>0),n(l,20,0,0==o.qrCode.length),n(l,22,0,o.qrCode.length>0),n(l,24,0)}),null)}function v(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,1,"app-my-address",[],null,null,null,k,h)),t.ob(1,114688,null,0,s,[b.Db,e.a,u.a],null,null)],(function(n,l){n(l,1,0)}),null)}var M=t.lb("app-my-address",s,v,{},{},[]),C=o("s7LF"),w=o("iInd"),z=o("IA6j");o.d(l,"MyAddressPageModuleNgFactory",(function(){return O}));var O=t.mb(r,[],(function(n){return t.yb([t.zb(512,t.j,t.X,[[8,[a.a,M]],[3,t.j],t.v]),t.zb(4608,d.l,d.k,[t.s,[2,d.u]]),t.zb(4608,C.o,C.o,[]),t.zb(4608,b.b,b.b,[t.x,t.g]),t.zb(4608,b.Eb,b.Eb,[b.b,t.j,t.p]),t.zb(4608,b.Hb,b.Hb,[b.b,t.j,t.p]),t.zb(1073742336,d.c,d.c,[]),t.zb(1073742336,C.n,C.n,[]),t.zb(1073742336,C.e,C.e,[]),t.zb(1073742336,b.Ab,b.Ab,[]),t.zb(1073742336,w.q,w.q,[[2,w.v],[2,w.m]]),t.zb(1073742336,z.a,z.a,[]),t.zb(1073742336,r,r,[]),t.zb(1024,w.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);