(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-send-funds-send-funds-module"],{

/***/ "./node_modules/qr-scanner/qr-scanner.min.js":
/*!***************************************************!*\
  !*** ./node_modules/qr-scanner/qr-scanner.min.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class e{static hasCamera(){return navigator.mediaDevices.enumerateDevices().then((a)=>a.some((a)=>"videoinput"===a.kind)).catch(()=>!1)}constructor(a,c,b=e.DEFAULT_CANVAS_SIZE){this.$video=a;this.$canvas=document.createElement("canvas");this._onDecode=c;this._paused=this._active=!1;this.$canvas.width=b;this.$canvas.height=b;this._sourceRect={x:0,y:0,width:b,height:b};this._onCanPlay=this._onCanPlay.bind(this);this._onPlay=this._onPlay.bind(this);this._onVisibilityChange=this._onVisibilityChange.bind(this);
this.$video.addEventListener("canplay",this._onCanPlay);this.$video.addEventListener("play",this._onPlay);document.addEventListener("visibilitychange",this._onVisibilityChange);this._qrWorker=new Worker(e.WORKER_PATH)}destroy(){this.$video.removeEventListener("canplay",this._onCanPlay);this.$video.removeEventListener("play",this._onPlay);document.removeEventListener("visibilitychange",this._onVisibilityChange);this.stop();this._qrWorker.postMessage({type:"close"})}start(){if(this._active&&!this._paused)return Promise.resolve();
"https:"!==window.location.protocol&&console.warn("The camera stream is only accessible if the page is transferred via https.");this._active=!0;this._paused=!1;if(document.hidden)return Promise.resolve();clearTimeout(this._offTimeout);this._offTimeout=null;if(this.$video.srcObject)return this.$video.play(),Promise.resolve();let a="environment";return this._getCameraStream("environment",!0).catch(()=>{a="user";return this._getCameraStream()}).then((c)=>{this.$video.srcObject=c;this._setVideoMirror(a)}).catch((a)=>
{this._active=!1;throw a;})}stop(){this.pause();this._active=!1}pause(){this._paused=!0;this._active&&(this.$video.pause(),this._offTimeout||(this._offTimeout=setTimeout(()=>{let a=this.$video.srcObject&&this.$video.srcObject.getTracks()[0];a&&(a.stop(),this._offTimeout=this.$video.srcObject=null)},300)))}static scanImage(a,c=null,b=null,d=null,f=!1,g=!1){let h=!1,l=new Promise((l,g)=>{b||(b=new Worker(e.WORKER_PATH),h=!0,b.postMessage({type:"inversionMode",data:"both"}));let n,m,k;m=(a)=>{"qrResult"===
a.data.type&&(b.removeEventListener("message",m),b.removeEventListener("error",k),clearTimeout(n),null!==a.data.data?l(a.data.data):g("QR code not found."))};k=(a)=>{b.removeEventListener("message",m);b.removeEventListener("error",k);clearTimeout(n);g("Scanner error: "+(a?a.message||a:"Unknown Error"))};b.addEventListener("message",m);b.addEventListener("error",k);n=setTimeout(()=>k("timeout"),3E3);e._loadImage(a).then((a)=>{a=e._getImageData(a,c,d,f);b.postMessage({type:"decode",data:a},[a.data.buffer])}).catch(k)});
c&&g&&(l=l.catch(()=>e.scanImage(a,null,b,d,f)));return l=l.finally(()=>{h&&b.postMessage({type:"close"})})}setGrayscaleWeights(a,c,b,d=!0){this._qrWorker.postMessage({type:"grayscaleWeights",data:{red:a,green:c,blue:b,useIntegerApproximation:d}})}setInversionMode(a){this._qrWorker.postMessage({type:"inversionMode",data:a})}_onCanPlay(){this._updateSourceRect();this.$video.play()}_onPlay(){this._updateSourceRect();this._scanFrame()}_onVisibilityChange(){document.hidden?this.pause():this._active&&
this.start()}_updateSourceRect(){let a=Math.round(2/3*Math.min(this.$video.videoWidth,this.$video.videoHeight));this._sourceRect.width=this._sourceRect.height=a;this._sourceRect.x=(this.$video.videoWidth-a)/2;this._sourceRect.y=(this.$video.videoHeight-a)/2}_scanFrame(){if(!this._active||this.$video.paused||this.$video.ended)return!1;requestAnimationFrame(()=>{e.scanImage(this.$video,this._sourceRect,this._qrWorker,this.$canvas,!0).then(this._onDecode,(a)=>{this._active&&"QR code not found."!==a&&
console.error(a)}).then(()=>this._scanFrame())})}_getCameraStream(a,c=!1){let b=[{width:{min:1024}},{width:{min:768}},{}];a&&(c&&(a={exact:a}),b.forEach((b)=>b.facingMode=a));return this._getMatchingCameraStream(b)}_getMatchingCameraStream(a){return 0===a.length?Promise.reject("Camera not found."):navigator.mediaDevices.getUserMedia({video:a.shift()}).catch(()=>this._getMatchingCameraStream(a))}_setVideoMirror(a){this.$video.style.transform="scaleX("+("user"===a?-1:1)+")"}static _getImageData(a,c=
null,b=null,d=!1){b=b||document.createElement("canvas");let f=c&&c.x?c.x:0,g=c&&c.y?c.y:0,h=c&&c.width?c.width:a.width||a.videoWidth;c=c&&c.height?c.height:a.height||a.videoHeight;d||b.width===h&&b.height===c||(b.width=h,b.height=c);d=b.getContext("2d",{alpha:!1});d.imageSmoothingEnabled=!1;d.drawImage(a,f,g,h,c,0,0,b.width,b.height);return d.getImageData(0,0,b.width,b.height)}static _loadImage(a){if(a instanceof HTMLCanvasElement||a instanceof HTMLVideoElement||window.ImageBitmap&&a instanceof window.ImageBitmap||
window.OffscreenCanvas&&a instanceof window.OffscreenCanvas)return Promise.resolve(a);if(a instanceof Image)return e._awaitImageLoad(a).then(()=>a);if(a instanceof File||a instanceof URL||"string"===typeof a){let c=new Image;c.src=a instanceof File?URL.createObjectURL(a):a;return e._awaitImageLoad(c).then(()=>{a instanceof File&&URL.revokeObjectURL(c.src);return c})}return Promise.reject("Unsupported image type.")}static _awaitImageLoad(a){return new Promise((c,b)=>{if(a.complete&&0!==a.naturalWidth)c();
else{let d,f;d=()=>{a.removeEventListener("load",d);a.removeEventListener("error",f);c()};f=()=>{a.removeEventListener("load",d);a.removeEventListener("error",f);b("Image load error")};a.addEventListener("load",d);a.addEventListener("error",f)}})}}e.DEFAULT_CANVAS_SIZE=400;e.WORKER_PATH="qr-scanner-worker.min.js";/* harmony default export */ __webpack_exports__["default"] = (e);
//# sourceMappingURL=qr-scanner.min.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/send-funds/send-funds.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/send-funds/send-funds.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"menu-icon\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"large-text\">\n      Send\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" *ngIf=\"isCameraOpen==false\">\n\n  <ion-card class=\"webscan-canvas\" *ngIf=\"!checkPlatform() && isWebCameraOpen\">\n    <ion-card-header class=\"medium-text\">\n\n    Scan Your Minima QR address now...\n    <ion-progress-bar type=\"indeterminate\" reversed=\"true\"></ion-progress-bar>\n    </ion-card-header>\n\n    <video height=\"240\" #videoElem></video>\n    <hr>\n    <ion-button block=\"full\" (click)=\"stopWebScanQR()\">Stop Scanning</ion-button>\n    <hr>\n  </ion-card>\n\n  <ion-card *ngIf=\"!isWebCameraOpen\">\n    <ion-card-header>\n      Post a transaction\n      <ion-card-title>\n          <ion-icon style=\" font-size:2.0rem;\" slot=\"start\" name=\"send\" class=\"icon-head medium-text\" ></ion-icon>\n      </ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n        <ion-item>\n          <ion-label class=\"medium-text\" position=\"floating\">Tokens</ion-label>\n          <ion-select\n              interface = 'alert'\n              class=\"medium-text input\"\n              [(ngModel)]=\"itemSelected\"\n              (ionChange)=\"onItemSelection($event)\"> \n          <ion-select-option *ngFor=\"let token of tokenArr;\" [value]=\"token\" class=\"token-option\">\n          \n            <ion-text class=\"medium-text\" *ngIf=\"token.tokenid === '0x00'\">\n            {{ token.token +\" - \"+  token.tokenid + \"\" }} \n\n            </ion-text>\n\n            <ion-text class=\"medium-text\" *ngIf=\"token.tokenid !== '0x00'\">\n            {{ token.token + \" - \" + token.tokenid.substring(0, 60)  }} \n            </ion-text>\n          </ion-select-option>\n\n        </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label class=\"medium-text\" position=\"floating\">Address</ion-label>\n          <ion-input #address class=\"input\" name=\"address\" [(ngModel)]=\"data.address\" clearInput=\"true\"></ion-input>\n          \n        </ion-item>\n        <ion-item lines=\"none\" slot=\"end\" [hidden]=\"checkPlatform()\">\n          <ion-button type=\"button\" class=\"util-btns\" size=\"small\" (click)=\"webScanQR()\">\n            <ion-label class=\"small-text\" slot=\"start\" style=\"padding:2px\">SCAN QR</ion-label>\n            <ion-icon  name=\"qr-scanner\" ></ion-icon>\n          </ion-button>\n        </ion-item>\n        <ion-item lines=\"none\" slot=\"end\" [hidden]=\"!checkPlatform()\">\n          <ion-button type=\"button\" class=\"util-btns\" size=\"small\" (click)=\"scanQR()\">\n            <ion-label class=\"small-text\" slot=\"start\" style=\"padding:2px\">SCAN QR</ion-label>\n            <ion-icon  size=\"small\" name=\"qr-scanner\" ></ion-icon>\n          </ion-button>\n          <ion-button type=\"button\" size=\"small\" class=\"util-btns\" (click)=\"pasteFromClipboard()\">\n            <ion-label class=\"small-text\" slot=\"start\" style=\"padding:5px\">CLIPBOARD</ion-label>\n            <ion-icon size=\"small\" name=\"clipboard\" ></ion-icon>\n          </ion-button>\n        </ion-item>\n        <ion-item>\n          <ion-label class=\"medium-text\" position=\"floating\">Amount</ion-label>\n          <ion-input #amount type=\"number\" name=\"amount\" class=\"input\" [(ngModel)]=\"data.amount\"></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\">\n        <!-- Disabled Checkbox -->\n        <ion-checkbox [(ngModel)]=\"messageEntry.isChecked\" (ionChange)=\"checkboxValue($event, messageEntry.isChecked)\"></ion-checkbox>\n        <ion-label class=\"medium-text\" [hidden]=\"messageEntry.isChecked\" style=\"padding-left: 10px;\">Message</ion-label>\n        <ion-label class=\"medium-text\" [hidden]=\"!messageEntry.isChecked\" style=\"padding-left: 10px;\">This message is public</ion-label>\n        </ion-item>\n        <ion-item [hidden]=\"!messageEntry.isChecked\">\n            <ion-textarea \n            class=\"medium-text input\"\n            auto-grow=\"true\"\n            #message \n            [(ngModel)]=\"data.message\" \n            placeholder=\"type your message...\"\n            maxlength=\"255\">\n            </ion-textarea>\n          <span *ngIf=\"data.message\" class=\"length smaller-text\">{{ data.message.length +\"/255\"}}</span>\n        </ion-item>\n        \n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons> \n      <ion-button class=\"action-btn medium-text\" expand=\"block\" (click)=\"stopCamera()\"  *ngIf=\"isCameraOpen==true\">\n        Stop scanning\n       </ion-button>\n      <ion-button class=\"action-btn medium-text\" expand=\"block\" (click)=\"sendFunds()\" *ngIf=\"isCameraOpen==false\">\n        <ion-icon name=\"send\" slot=\"start\"></ion-icon> Send\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n</ion-app>\n\n"

/***/ }),

/***/ "./src/app/pages/send-funds/send-funds.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/send-funds/send-funds.module.ts ***!
  \*******************************************************/
/*! exports provided: SendFundsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendFundsPageModule", function() { return SendFundsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _send_funds_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./send-funds.page */ "./src/app/pages/send-funds/send-funds.page.ts");







var routes = [
    {
        path: '',
        component: _send_funds_page__WEBPACK_IMPORTED_MODULE_6__["SendFundsPage"]
    }
];
var SendFundsPageModule = /** @class */ (function () {
    function SendFundsPageModule() {
    }
    SendFundsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_send_funds_page__WEBPACK_IMPORTED_MODULE_6__["SendFundsPage"]]
        })
    ], SendFundsPageModule);
    return SendFundsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/send-funds/send-funds.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/send-funds/send-funds.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card-content {\n  background: var(--ion-card-color);\n}\n\nion-card-header {\n  background: var(--ion-card-header);\n}\n\nion-footer ion-toolbar ion-buttons ion-button {\n  width: 100%;\n}\n\n.icon-head {\n  color: #1FB4CD;\n}\n\n.util-btns {\n  padding: 3px;\n  text-align: center;\n  margin: 2px;\n}\n\n.action-btn {\n  height: 72px;\n}\n\n.action-btn:hover {\n  height: 72px !important;\n}\n\n.action-btn:hover ion-icon {\n  font-size: large;\n}\n\n.transparentBody {\n  background: none transparent !important;\n  --background: none transparent !important;\n}\n\n.webscan-canvas {\n  text-align: center;\n  --background: none transparent !important;\n}\n\nion-toolbar {\n  --background: var(--card-header-color);\n}\n\n.input {\n  opacity: 0.75 !important;\n}\n\n.length {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV0FMTEVUL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL3NlbmQtZnVuZHMvc2VuZC1mdW5kcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NlbmQtZnVuZHMvc2VuZC1mdW5kcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBQTtBQ0NGOztBRENBO0VBQ0Usa0NBQUE7QUNFRjs7QURBQTtFQUNFLFdBQUE7QUNHRjs7QURBQTtFQUNFLGNBQUE7QUNHRjs7QUREQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7QUNHRjs7QUREQTtFQUNFLFlBQUE7QUNJRjs7QURGQTtFQUNFLHVCQUFBO0FDS0Y7O0FESEk7RUFDRSxnQkFBQTtBQ0tOOztBREZBO0VBQ0MsdUNBQUE7RUFDQSx5Q0FBQTtBQ0tEOztBREZBO0VBQ0Msa0JBQUE7RUFDQyx5Q0FBQTtBQ0tGOztBREhBO0VBQ0Usc0NBQUE7QUNNRjs7QURKQTtFQUNFLHdCQUFBO0FDT0Y7O0FETEE7RUFDRSxZQUFBO0FDUUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZW5kLWZ1bmRzL3NlbmQtZnVuZHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jYXJkLWNvbG9yKTtcbn1cbmlvbi1jYXJkLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jYXJkLWhlYWRlcik7XG59XG5pb24tZm9vdGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b257XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaWNvbi1oZWFke1xuICBjb2xvcjogIzFGQjRDRDtcbn1cbi51dGlsLWJ0bnMge1xuICBwYWRkaW5nOiAzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLy8gcGFkZGluZzogMXB4O1xuICBtYXJnaW46IDJweDtcbn1cbi5hY3Rpb24tYnRuIHtcbiAgaGVpZ2h0OiA3MnB4O1xufVxuLmFjdGlvbi1idG46aG92ZXIge1xuICBoZWlnaHQ6IDcycHggIWltcG9ydGFudDsgXG5cbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIH1cbn1cbi50cmFuc3BhcmVudEJvZHkge1xuXHRiYWNrZ3JvdW5kOiBub25lIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cdC0tYmFja2dyb3VuZDogbm9uZSB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4ud2Vic2Nhbi1jYW52YXMge1xuIHRleHQtYWxpZ246IGNlbnRlcjtcbiBcdC0tYmFja2dyb3VuZDogbm9uZSB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWNhcmQtaGVhZGVyLWNvbG9yKTtcbn1cbi5pbnB1dCB7XG4gIG9wYWNpdHk6IDAuNzUgIWltcG9ydGFudDtcbn1cbi5sZW5ndGgge1xuICBvcGFjaXR5OiAwLjU7XG59IiwiaW9uLWNhcmQtY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jYXJkLWNvbG9yKTtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNhcmQtaGVhZGVyKTtcbn1cblxuaW9uLWZvb3RlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pY29uLWhlYWQge1xuICBjb2xvcjogIzFGQjRDRDtcbn1cblxuLnV0aWwtYnRucyB7XG4gIHBhZGRpbmc6IDNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDJweDtcbn1cblxuLmFjdGlvbi1idG4ge1xuICBoZWlnaHQ6IDcycHg7XG59XG5cbi5hY3Rpb24tYnRuOmhvdmVyIHtcbiAgaGVpZ2h0OiA3MnB4ICFpbXBvcnRhbnQ7XG59XG4uYWN0aW9uLWJ0bjpob3ZlciBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbi50cmFuc3BhcmVudEJvZHkge1xuICBiYWNrZ3JvdW5kOiBub25lIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogbm9uZSB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4ud2Vic2Nhbi1jYW52YXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC0tYmFja2dyb3VuZDogbm9uZSB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tY2FyZC1oZWFkZXItY29sb3IpO1xufVxuXG4uaW5wdXQge1xuICBvcGFjaXR5OiAwLjc1ICFpbXBvcnRhbnQ7XG59XG5cbi5sZW5ndGgge1xuICBvcGFjaXR5OiAwLjU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/send-funds/send-funds.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/send-funds/send-funds.page.ts ***!
  \*****************************************************/
/*! exports provided: SendFundsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendFundsPage", function() { return SendFundsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_balance_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/balance.service */ "./src/app/service/balance.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "./node_modules/@ionic-native/qr-scanner/ngx/index.js");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var qr_scanner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! qr-scanner */ "./node_modules/qr-scanner/qr-scanner.min.js");










var SendFundsPage = /** @class */ (function () {
    function SendFundsPage(qrScanner, clipboard, alertController, toastController, zone, api, balanceService, platform, route, router) {
        this.qrScanner = qrScanner;
        this.clipboard = clipboard;
        this.alertController = alertController;
        this.toastController = toastController;
        this.zone = zone;
        this.api = api;
        this.balanceService = balanceService;
        this.platform = platform;
        this.route = route;
        this.router = router;
        this.isCameraOpen = false;
        this.isWebCameraOpen = false;
        this.data = {};
        // checkboxValue
        this.messageEntry = { isChecked: false };
        // Token Array Type
        this.tokenArr = [];
        this.MINIMA_TOKEN_ID = '0x00';
        this.lastJSON = '';
        this.scanSub = null;
        this.data.message = '';
        this.pullInTokens();
    }
    SendFundsPage.prototype.ngOnInit = function () { };
    SendFundsPage.prototype.ionViewWillEnter = function () { this.isCameraOpen = false; };
    SendFundsPage.prototype.ionViewWillLeave = function () {
        this.balanceSubscription.unsubscribe(); // unsubscribe
        this.stopCamera();
    };
    // get token selected or set Minima as default
    SendFundsPage.prototype.getTokenSelected = function () {
        var _this = this;
        // check url snapshot
        var empty = undefined;
        var param = this.route.snapshot.params['id'];
        // check param
        if (param === empty || param === this.MINIMA_TOKEN_ID) {
            this.itemSelected = this.tokenArr[0];
            this.updateTokenId('0x00');
        }
        else if (param !== empty && param !== this.MINIMA_TOKEN_ID) {
            this.tokenArr.forEach(function (element) {
                if (param === element.tokenid) {
                    _this.itemSelected = element;
                    _this.updateTokenId(element.tokenid);
                }
            });
        }
    };
    // listen to selection change
    SendFundsPage.prototype.onItemSelection = function ($event) {
        var _this = this;
        var param = this.route.snapshot.params['id'];
        this.tokenArr.forEach(function (element) {
            if (_this.itemSelected === element && param !== element.tokenid) {
                _this.itemSelected = element;
                _this.router.navigate(['/send-funds', { id: element.tokenid }]);
                // update tokenid
                _this.updateTokenId(element.tokenid);
            }
        });
    };
    // fn to update tokenid
    SendFundsPage.prototype.updateTokenId = function (id) {
        this.data.tokenid = id;
    };
    /** ScanQR: Native */
    SendFundsPage.prototype.scanQR = function () {
        var _this = this;
        if (this.platform.is('ios') || this.platform.is('android')) {
            this.qrScanner.prepare()
                .then(function (status) {
                if (status.authorized) {
                    // Which class adding should I use?
                    _this.identifyPlatformToScan_Add();
                    _this.qrScanner.show();
                    _this.isCameraOpen = true;
                    _this.scanSub = _this.qrScanner.scan().subscribe(function (text) {
                        _this.zone.run(function () {
                            _this.data.address = text;
                            _this.stopCamera();
                            _this.identifyPlatformToScan_Remove();
                            _this.isCameraOpen = false;
                        });
                    }, function (err) {
                        console.log('Scanned failed', err);
                    });
                }
                else if (status.denied) {
                    // camera permission was permanently denied
                    // you must use QRScanner.openSettings() method to guide the user to the settings page
                    // then they can grant the permission from there
                    _this.presentAlert('Please check camera permission', 'Error');
                }
                else {
                    // permission was denied, but not permanently. You can ask for permission again at a later time.
                    _this.presentAlert('Please check camera permission', 'Error');
                }
            })
                .catch(function (e) { return console.log('Error is', e); });
        }
    };
    SendFundsPage.prototype.stopCamera = function () {
        if (this.scanSub !== null) {
            this.qrScanner.hide();
            this.scanSub.unsubscribe();
        }
        this.scanSub = null;
        this.identifyPlatformToScan_Remove();
        this.isCameraOpen = false;
        if (this.platform.is['mobile']
            || this.platform.is['capacitor']
            || this.platform.is['cordova']
            || this.platform.is['mobileweb']
            || this.platform.is['iphone']
            || this.platform.is['ipad']
            || this.platform.is['hybrid']
            || this.platform.is['android']
            || this.platform.is['tablet']) {
            this.qrScanner.destroy();
        }
    };
    /** ALERTS */
    SendFundsPage.prototype.presentAlert = function (msg, hdr) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: hdr,
                            message: msg,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SendFundsPage.prototype.presentToast = function (msg, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 4000,
                            buttons: [{
                                    text: 'Close',
                                    role: 'cancel'
                                }],
                            color: type,
                            keyboardClose: true,
                            translucent: true,
                            position: 'top'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    // API CALLS
    SendFundsPage.prototype.pullInTokens = function () {
        var _this = this;
        this.balanceSubscription = this.balanceService.updatedBalance
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (responseData) {
            var tokenArr = [];
            for (var key in Minima.balance) {
                if (Minima.balance.hasOwnProperty(key)) {
                    var element = Minima.balance[key];
                    // round up confirmed && unconfirmed
                    var tempConfirmed = (Math.round(element.confirmed * 100) / 100);
                    var tempUnconfirmed = (Math.round(element.unconfirmed * 100) / 100);
                    if (_this.MINIMA_TOKEN_ID === element.tokenid) {
                        _this.minimaToken = element.tokenid;
                    }
                    tokenArr.push({
                        tokenid: element.tokenid,
                        token: element.token,
                        description: element.description,
                        icon: element.icon,
                        proof: element.proof,
                        total: element.total,
                        script: element.script,
                        coinid: element.coinid,
                        totalamount: element.totalamount,
                        scale: element.scale,
                        confirmed: tempConfirmed,
                        unconfirmed: tempUnconfirmed,
                        mempool: element.mempool,
                        sendable: element.sendable
                    });
                    // add Minima always to the top
                    if (element.tokenid === _this.MINIMA_TOKEN_ID) {
                        tokenArr.pop(); // pop it
                        _this.balanceService.update(tokenArr, {
                            tokenid: element.tokenid,
                            token: element.token,
                            total: element.total,
                            confirmed: tempConfirmed,
                            unconfirmed: tempUnconfirmed,
                            mempool: element.mempool,
                            sendable: element.sendable
                        });
                    }
                }
            }
            return tokenArr;
        })).subscribe(function (responseData) {
            // check if changed
            if (_this.lastJSON !== JSON.stringify(responseData)) {
                _this.tokenArr = responseData.slice();
                _this.lastJSON = JSON.stringify(responseData);
                // add tokens
                _this.getTokenSelected();
            }
        });
    };
    SendFundsPage.prototype.sendFunds = function () {
        var _this = this;
        if (this.data.address && this.data.address !== '' && this.data.amount && this.data.amount > 0 &&
            this.data.tokenid && this.data.tokenid !== '' && !this.data.message) {
            this.api.sendFunds(this.data).then(function (res) {
                if (res.status === true) {
                    // clear inputs
                    _this.address.value = '';
                    _this.amount.value = '';
                    // success
                    _this.presentToast('Success! Your transaction has been posted!', 'success');
                }
                else {
                    _this.presentToast('Insufficient funds.  Please check your balance.', 'danger');
                }
            });
        }
        else if (this.data.address && this.data.address !== '' && this.data.amount && this.data.amount > 0 &&
            this.data.tokenid && this.data.tokenid !== '' && this.data.message !== undefined && this.data.message.length >= 0) {
            this.api.createTXN(this.data).then(function (res) {
                if (res[5].status === true) {
                    // clear inputs
                    _this.address.value = '';
                    _this.amount.value = '';
                    _this.message.value = '';
                    // success
                    _this.presentToast('Success! Your transaction has been posted!', 'success');
                }
                else if (res[4].status === false) {
                    _this.presentToast('Insufficient funds.  Please check your balance.', 'danger');
                }
            });
        }
        else {
            this.presentAlert('Please check the input fields', 'Error');
        }
    };
    /** MISC FUNCS */
    SendFundsPage.prototype.identifyPlatformToScan_Add = function () {
        document.addEventListener('DOMContentLoaded', function (event) {
            // Do work
            if (this.platform.is('ios')) {
                setTimeout(function () {
                    window.document.querySelectorAll('ion-content')
                        .forEach(function (element) {
                        var element1 = element.shadowRoot.querySelector('style');
                        element1.innerHTML = element1.innerHTML
                            .replace('--background:var(--ion-background-color,#fff);', '--background: transparent');
                    });
                }, 300);
            }
            else if (this.platform.is('android')) {
                // window.document.querySelector('ion-content').classList.add('transparentBody');
                setTimeout(function () {
                    window.document.querySelectorAll('ion-content')
                        .forEach(function (element) {
                        var element1 = element.shadowRoot.querySelector('style');
                        element1.innerHTML = element1.innerHTML
                            .replace('--background:var(--ion-background-color,#fff);', '--background: transparent');
                    });
                }, 300);
            }
        });
    };
    SendFundsPage.prototype.identifyPlatformToScan_Remove = function () {
        document.addEventListener('DOMContentLoaded', function (event) {
            if (this.platform.is('ios')) {
                setTimeout(function () {
                    window.document.querySelectorAll('ion-content')
                        .forEach(function (element) {
                        var element1 = element.shadowRoot.querySelector('style');
                        element1.innerHTML = element1.innerHTML
                            .replace('--background: transparent', '--background:var(--ion-background-color,#fff);');
                    });
                }, 300);
            }
            else if (this.platform.is('android')) {
                // window.document.querySelector('ion-content').classList.remove('transparentBody');
                setTimeout(function () {
                    window.document.querySelectorAll('ion-content')
                        .forEach(function (element) {
                        var element1 = element.shadowRoot.querySelector('style');
                        element1.innerHTML = element1.innerHTML
                            .replace('--background: transparent', '--background:var(--ion-background-color,#fff);');
                    });
                }, 300);
            }
        });
    };
    // work around for weird ion-textarea height: 0 + auto-grow='true'
    SendFundsPage.prototype.checkTextarea = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.message.getInputElement().then(function (element) {
                        if (element.style.height == '0px') {
                            return element.style.height = 'auto';
                        }
                        else {
                            setTimeout(function () { return _this.checkTextarea(); }, 100);
                        }
                    })];
            });
        });
    };
    SendFundsPage.prototype.checkboxValue = function (ev, messageEntry) {
        this.checkTextarea();
        if (messageEntry === false) {
            this.data.message = undefined;
        }
    };
    // Display/hide mobile buttons with this..
    SendFundsPage.prototype.checkPlatform = function () {
        if (this.platform.is('desktop')) {
            return false;
        }
        else {
            return true;
        }
    };
    SendFundsPage.prototype.pasteFromClipboard = function () {
        var _this = this;
        if (this.platform.is('desktop')) {
            this.pasteFromPWA();
        }
        else {
            this.clipboard.paste().then(function (resolve) {
                _this.data.address = resolve;
            }, function (reject) {
                console.log('Error: ' + reject);
            });
        }
    };
    SendFundsPage.prototype.pasteFromPWA = function () {
        var _this = this;
        document.addEventListener('paste', function (e) {
            _this.data.address = e.clipboardData.getData('text');
            e.preventDefault();
            document.removeEventListener('paste', null);
        });
        document.execCommand('paste');
    };
    SendFundsPage.prototype.webScanQR = function () {
        var _this = this;
        this.isWebCameraOpen = true;
        qr_scanner__WEBPACK_IMPORTED_MODULE_9__["default"].WORKER_PATH = 'assets/JS/qr-scanner-worker.min.js';
        setTimeout(function () {
            _this.webQrScanner = new qr_scanner__WEBPACK_IMPORTED_MODULE_9__["default"](_this.videoElem.nativeElement, function (result) {
                _this.data.address = result;
                _this.isWebCameraOpen = false;
            });
            _this.webQrScanner.start();
        }, 500);
    };
    SendFundsPage.prototype.stopWebScanQR = function () {
        this.webQrScanner.destroy();
        this.webQrScanner = null;
        this.isWebCameraOpen = false;
    };
    SendFundsPage.ctorParameters = function () { return [
        { type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["QRScanner"] },
        { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Clipboard"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
        { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_6__["MinimaApiService"] },
        { type: _service_balance_service__WEBPACK_IMPORTED_MODULE_1__["BalanceService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('address', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInput"])
    ], SendFundsPage.prototype, "address", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('amount', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInput"])
    ], SendFundsPage.prototype, "amount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('message', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTextarea"])
    ], SendFundsPage.prototype, "message", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('videoElem', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], SendFundsPage.prototype, "videoElem", void 0);
    SendFundsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-send-funds',
            template: __webpack_require__(/*! raw-loader!./send-funds.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/send-funds/send-funds.page.html"),
            styles: [__webpack_require__(/*! ./send-funds.page.scss */ "./src/app/pages/send-funds/send-funds.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["QRScanner"],
            _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Clipboard"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
            _service_minima_api_service__WEBPACK_IMPORTED_MODULE_6__["MinimaApiService"],
            _service_balance_service__WEBPACK_IMPORTED_MODULE_1__["BalanceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], SendFundsPage);
    return SendFundsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-send-funds-send-funds-module-es5.js.map