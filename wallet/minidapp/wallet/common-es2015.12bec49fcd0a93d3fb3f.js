(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6jz6":function(n,t,i){"use strict";var e=i("8Y7J"),s=i("MKJQ"),l=i("sZkV"),o=i("SVse");i("LmEr"),i("J9yG"),i("TOdT"),i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return d}));var r=e.nb({encapsulation:0,styles:[[".miningSpinner[_ngcontent-%COMP%]{animation:.5s infinite spin-animation;display:inline-block}@keyframes spin-animation{0%{transform:rotate(0)}100%{transform:rotate(359deg)}}div.stack[_ngcontent-%COMP%]{position:absolute;right:27px;align-items:center;display:flex;justify-content:center;flex-direction:row}div.stack[_ngcontent-%COMP%]   ion-icon.miningFinished[_ngcontent-%COMP%], div.stack[_ngcontent-%COMP%]   ion-icon.miningStarted[_ngcontent-%COMP%]{width:24px;height:24px}div.stack[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{padding-right:5px;color:#f0f0fa;opacity:.7}"]],data:{}});function c(n){return e.Lb(0,[(n()(),e.pb(0,0,null,null,1,"ion-spinner",[["color","gray-one"],["name","dots"]],null,null,null,s.db,s.z)),e.ob(1,49152,null,0,l.ob,[e.h,e.k,e.x],{color:[0,"color"],name:[1,"name"]},null)],(function(n,t){n(t,1,0,"gray-one","dots")}),null)}function u(n){return e.Lb(0,[(n()(),e.pb(0,0,null,null,2,"ion-label",[],null,null,null,s.T,s.p)),e.ob(1,49152,null,0,l.M,[e.h,e.k,e.x],null,null),(n()(),e.Jb(-1,0,["Mining"]))],null,null)}function a(n){return e.Lb(0,[(n()(),e.pb(0,0,null,null,1,"ion-icon",[["class","miningStarted miningSpinner"],["slot","end"],["src","assets/cog.svg"]],null,[[null,"click"]],(function(n,t,i){var e=!0;return"click"===t&&(e=!1!==n.component.showMiningText()&&e),e}),s.N,s.j)),e.ob(1,49152,null,0,l.B,[e.h,e.k,e.x],{src:[0,"src"]},null)],(function(n,t){n(t,1,0,"assets/cog.svg")}),null)}function m(n){return e.Lb(0,[(n()(),e.pb(0,0,null,null,2,"ion-label",[],null,null,null,s.T,s.p)),e.ob(1,49152,null,0,l.M,[e.h,e.k,e.x],null,null),(n()(),e.Jb(-1,0,["Done"]))],null,null)}function g(n){return e.Lb(0,[(n()(),e.pb(0,0,null,null,1,"ion-icon",[["class","miningFinished"],["slot","end"],["src","assets/tickGreenCircle.svg"]],null,[[null,"click"]],(function(n,t,i){var e=!0;return"click"===t&&(e=!1!==n.component.showDoneText()&&e),e}),s.N,s.j)),e.ob(1,49152,null,0,l.B,[e.h,e.k,e.x],{src:[0,"src"]},null)],(function(n,t){n(t,1,0,"assets/tickGreenCircle.svg")}),null)}function d(n){return e.Lb(0,[e.Hb(671088640,1,{gimme50Btn:0}),(n()(),e.pb(1,0,null,null,15,"ion-footer",[],null,null,null,s.K,s.g)),e.ob(2,49152,null,0,l.y,[e.h,e.k,e.x],null,null),(n()(),e.pb(3,0,null,0,4,"ion-button",[["class","gimme50 no-ripple"],["fill","none"]],null,[[null,"click"]],(function(n,t,i){var e=!0;return"click"===t&&(e=!1!==n.component.gimme50()&&e),e}),s.G,s.c)),e.ob(4,49152,[[1,4],["gimme50Btn",4]],0,l.j,[e.h,e.k,e.x],{fill:[0,"fill"]},null),(n()(),e.Jb(5,0,[" "," "])),(n()(),e.eb(16777216,null,0,1,null,c)),e.ob(7,16384,null,0,o.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(8,0,null,0,8,"div",[["class","stack"]],null,null,null,null,null)),(n()(),e.eb(16777216,null,null,1,null,u)),e.ob(10,16384,null,0,o.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.eb(16777216,null,null,1,null,a)),e.ob(12,16384,null,0,o.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.eb(16777216,null,null,1,null,m)),e.ob(14,16384,null,0,o.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.eb(16777216,null,null,1,null,g)),e.ob(16,16384,null,0,o.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(n,t){var i=t.component;n(t,4,0,"none"),n(t,7,0,""===i.status),n(t,10,0,i.miningStarted&&i.showMining),n(t,12,0,i.miningStarted),n(t,14,0,i.miningFinished&&i.showDone),n(t,16,0,i.miningFinished)}),(function(n,t){n(t,5,0,t.component.status)}))}},"74mu":function(n,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return l})),i.d(t,"c",(function(){return e})),i.d(t,"d",(function(){return r}));const e=(n,t)=>null!==t.closest(n),s=(n,t)=>"string"==typeof n&&n.length>0?Object.assign({"ion-color":!0,["ion-color-"+n]:!0},t):t,l=n=>{const t={};return(n=>void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(n=>null!=n).map(n=>n.trim()).filter(n=>""!==n):[])(n).forEach(n=>t[n]=!0),t},o=/^[a-z][a-z0-9+\-.]*:/,r=async(n,t,i,e)=>{if(null!=n&&"#"!==n[0]&&!o.test(n)){const s=document.querySelector("ion-router");if(s)return null!=t&&t.preventDefault(),s.push(n,i,e)}return!1}},IA6j:function(n,t,i){"use strict";i.d(t,"a",(function(){return e}));class e{}},JbSX:function(n,t,i){"use strict";i.d(t,"a",(function(){return o}));var e=i("wEJo"),s=i("qULd"),l=i("iWo5");const o=(n,t)=>{let i,o;const r=(n,e,s)=>{if("undefined"==typeof document)return;const l=document.elementFromPoint(n,e);l&&t(l)?l!==i&&(u(),c(l,s)):u()},c=(n,t)=>{i=n,o||(o=i);const s=i;Object(e.f)(()=>s.classList.add("ion-activated")),t()},u=(n=!1)=>{if(!i)return;const t=i;Object(e.f)(()=>t.classList.remove("ion-activated")),n&&o!==i&&i.click(),i=void 0};return Object(l.createGesture)({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:n=>r(n.currentX,n.currentY,s.a),onMove:n=>r(n.currentX,n.currentY,s.b),onEnd:()=>{u(!0),Object(s.e)(),o=void 0}})}},LmEr:function(n,t,i){"use strict";i.d(t,"a",(function(){return e})),i("TOdT"),i("J9yG");class e{constructor(n,t){this.minimaApiService=n,this.tools=t,this.status="Gimme 50",this.miningStarted=!1,this.miningFinished=!1,this.showDone=!1,this.showMining=!1}ngOnInit(){this.$mining=this.minimaApiService.$miningStatus.subscribe(n=>{n.started?(this.miningStarted=!0,this.miningFinished=!1):n.finished?(this.miningStarted=!1,this.miningFinished=!0):(this.miningStarted=!1,this.miningFinished=!1)})}ngOnDestroy(){this.$mining.unsubscribe()}ionViewWillEnter(){this.$mining=this.minimaApiService.$miningStatus.subscribe(n=>{console.log("Mining Status changed!"),n.started?(this.miningStarted=!0,this.miningFinished=!1):n.finished&&(this.miningFinished=!0,this.miningStarted=!1)})}ionViewWillLeave(){this.$mining&&this.$mining.unsubscribe()}gimme50(){this.status="",this.gimme50Btn.disabled=!0,this.minimaApiService.giveMe50().then(n=>{n.status?(this.status="Gimme 50",this.gimme50Btn.disabled=!1):(this.tools.presentAlert("Gimme50",n.message,"Status"),this.status="Unavailable",setTimeout(()=>{this.gimme50Btn.disabled=!1,this.status="Gimme 50"},4e3))})}showMiningText(){this.showMining=!this.showMining,setTimeout(()=>{this.showMining&&(this.showMining=!1)},2e3)}showDoneText(){this.showDone=!this.showDone,setTimeout(()=>{this.showDone&&(this.showDone=!1)},2e3)}}},acej:function(n,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return l}));var e=i("1vRN");const s=async(n,t,i,s,l)=>{if(n)return n.attachViewToDom(t,i,l,s);if("string"!=typeof i&&!(i instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof i?t.ownerDocument&&t.ownerDocument.createElement(i):i;return s&&s.forEach(n=>o.classList.add(n)),l&&Object.assign(o,l),t.appendChild(o),await new Promise(n=>Object(e.c)(o,n)),o},l=(n,t)=>{if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},h3R7:function(n,t,i){"use strict";i.d(t,"a",(function(){return e}));const e={bubbles:{dur:1e3,circles:9,fn:(n,t,i)=>{const e=n*t/i-n+"ms",s=2*Math.PI*t/i;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":e}}}},circles:{dur:1e3,circles:8,fn:(n,t,i)=>{const e=t/i,s=n*e-n+"ms",l=2*Math.PI*e;return{r:5,style:{top:9*Math.sin(l)+"px",left:9*Math.cos(l)+"px","animation-delay":s}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(n,t)=>({r:6,style:{left:9-9*t+"px","animation-delay":-110*t+"ms"}})},lines:{dur:1e3,lines:12,fn:(n,t,i)=>({y1:17,y2:29,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":n*t/i-n+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(n,t,i)=>({y1:12,y2:20,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":n*t/i-n+"ms"}})}}},qULd:function(n,t,i){"use strict";i.d(t,"a",(function(){return l})),i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return s})),i.d(t,"d",(function(){return c})),i.d(t,"e",(function(){return r}));const e={getEngine(){const n=window;return n.TapticEngine||n.Capacitor&&n.Capacitor.isPluginAvailable("Haptics")&&n.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(n){const t=this.getEngine();if(!t)return;const i=this.isCapacitor()?n.style.toUpperCase():n.style;t.impact({style:i})},notification(n){const t=this.getEngine();if(!t)return;const i=this.isCapacitor()?n.style.toUpperCase():n.style;t.notification({style:i})},selection(){this.impact({style:"light"})},selectionStart(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionStart():n.gestureSelectionStart())},selectionChanged(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionChanged():n.gestureSelectionChanged())},selectionEnd(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionEnd():n.gestureSelectionEnd())}},s=()=>{e.selection()},l=()=>{e.selectionStart()},o=()=>{e.selectionChanged()},r=()=>{e.selectionEnd()},c=n=>{e.impact(n)}}}]);