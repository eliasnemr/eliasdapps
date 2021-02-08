(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-address-my-address-module"],{

/***/ "./node_modules/angularx-qrcode/dist/angularx-qrcode.module.js":
/*!*********************************************************************!*\
  !*** ./node_modules/angularx-qrcode/dist/angularx-qrcode.module.js ***!
  \*********************************************************************/
/*! exports provided: QRCodeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRCodeModule", function() { return QRCodeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./node_modules/angularx-qrcode/dist/components/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var QRCodeModule = /** @class */ (function () {
    function QRCodeModule() {
    }
    QRCodeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [],
            declarations: [
                _components__WEBPACK_IMPORTED_MODULE_1__["QRCodeComponent"],
            ],
            exports: [
                _components__WEBPACK_IMPORTED_MODULE_1__["QRCodeComponent"],
            ]
        })
    ], QRCodeModule);
    return QRCodeModule;
}());

//# sourceMappingURL=angularx-qrcode.module.js.map

/***/ }),

/***/ "./node_modules/angularx-qrcode/dist/components/angularx-qrcode/angularx-qrcode.component.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/angularx-qrcode/dist/components/angularx-qrcode/angularx-qrcode.component.js ***!
  \***************************************************************************************************/
/*! exports provided: QRCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRCodeComponent", function() { return QRCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var QRCode;
var QRCodeComponent = /** @class */ (function () {
    function QRCodeComponent(el, platformId) {
        var _this = this;
        this.el = el;
        this.platformId = platformId;
        /** @internal */
        this.allowEmptyString = false;
        this.colordark = '#000000';
        this.colorlight = '#ffffff';
        this.level = 'M';
        this.hidetitle = false;
        this.qrdata = '';
        this.size = 256;
        this.usesvg = false;
        this.isValidQrCodeText = function (data) {
            if (_this.allowEmptyString === false) {
                return !(typeof data === 'undefined' || data === '');
            }
            return !(typeof data === 'undefined');
        };
    }
    QRCodeComponent.prototype.ngAfterViewInit = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platformId)) {
            return;
        }
        if (!QRCode) {
            QRCode = __webpack_require__(/*! qrcodejs2 */ "./node_modules/qrcodejs2/qrcode.js");
        }
        try {
            if (!this.isValidQrCodeText(this.qrdata)) {
                throw new Error('Empty QR Code data');
            }
            this.qrcode = new QRCode(this.el.nativeElement, {
                colorDark: this.colordark,
                colorLight: this.colorlight,
                correctLevel: QRCode.CorrectLevel[this.level.toString()],
                height: this.size,
                text: this.qrdata || ' ',
                useSVG: this.usesvg,
                width: this.size,
            });
        }
        catch (e) {
            console.error('Error generating QR Code: ' + e.message);
        }
    };
    QRCodeComponent.prototype.ngOnChanges = function (changes) {
        if (!this.qrcode) {
            return;
        }
        var qrData = changes['qrdata'];
        if (qrData && this.isValidQrCodeText(qrData.currentValue)) {
            this.qrcode.clear();
            this.qrcode.makeCode(qrData.currentValue);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], QRCodeComponent.prototype, "allowEmptyString", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], QRCodeComponent.prototype, "colordark", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], QRCodeComponent.prototype, "colorlight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], QRCodeComponent.prototype, "level", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], QRCodeComponent.prototype, "hidetitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], QRCodeComponent.prototype, "qrdata", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], QRCodeComponent.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], QRCodeComponent.prototype, "usesvg", void 0);
    QRCodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'qrcode',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            template: ''
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], Object])
    ], QRCodeComponent);
    return QRCodeComponent;
}());

//# sourceMappingURL=angularx-qrcode.component.js.map

/***/ }),

/***/ "./node_modules/angularx-qrcode/dist/components/angularx-qrcode/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/angularx-qrcode/dist/components/angularx-qrcode/index.js ***!
  \*******************************************************************************/
/*! exports provided: QRCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angularx_qrcode_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angularx-qrcode.component */ "./node_modules/angularx-qrcode/dist/components/angularx-qrcode/angularx-qrcode.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QRCodeComponent", function() { return _angularx_qrcode_component__WEBPACK_IMPORTED_MODULE_0__["QRCodeComponent"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angularx-qrcode/dist/components/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/angularx-qrcode/dist/components/index.js ***!
  \***************************************************************/
/*! exports provided: QRCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angularx_qrcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angularx-qrcode */ "./node_modules/angularx-qrcode/dist/components/angularx-qrcode/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QRCodeComponent", function() { return _angularx_qrcode__WEBPACK_IMPORTED_MODULE_0__["QRCodeComponent"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angularx-qrcode/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/angularx-qrcode/dist/index.js ***!
  \****************************************************/
/*! exports provided: QRCodeComponent, QRCodeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./node_modules/angularx-qrcode/dist/components/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QRCodeComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["QRCodeComponent"]; });

/* harmony import */ var _angularx_qrcode_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./angularx-qrcode.module */ "./node_modules/angularx-qrcode/dist/angularx-qrcode.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QRCodeModule", function() { return _angularx_qrcode_module__WEBPACK_IMPORTED_MODULE_1__["QRCodeModule"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/qrcodejs2/qrcode.js":
/*!******************************************!*\
  !*** ./node_modules/qrcodejs2/qrcode.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * - Using the 'QRCode for Javascript library'
 * - Fixed dataset of 'QRCode for Javascript library' for support full-spec.
 * - this library has no dependencies.
 *
 * @author davidshimjs
 * @see <a href="http://www.d-project.com/" target="_blank">http://www.d-project.com/</a>
 * @see <a href="http://jeromeetienne.github.com/jquery-qrcode/" target="_blank">http://jeromeetienne.github.com/jquery-qrcode/</a>
 */
var QRCode;

(function (root, factory) {

	/* CommonJS */
  if (true) module.exports = factory()

  /* AMD module */
  else {}

}(this, function () {	//---------------------------------------------------------------------
	// QRCode for JavaScript
	//
	// Copyright (c) 2009 Kazuhiko Arase
	//
	// URL: http://www.d-project.com/
	//
	// Licensed under the MIT license:
	//   http://www.opensource.org/licenses/mit-license.php
	//
	// The word "QR Code" is registered trademark of
	// DENSO WAVE INCORPORATED
	//   http://www.denso-wave.com/qrcode/faqpatent-e.html
	//
	//---------------------------------------------------------------------
	function QR8bitByte(data) {
		this.mode = QRMode.MODE_8BIT_BYTE;
		this.data = data;
		this.parsedData = [];

		// Added to support UTF-8 Characters
		for (var i = 0, l = this.data.length; i < l; i++) {
			var byteArray = [];
			var code = this.data.charCodeAt(i);

			if (code > 0x10000) {
				byteArray[0] = 0xF0 | ((code & 0x1C0000) >>> 18);
				byteArray[1] = 0x80 | ((code & 0x3F000) >>> 12);
				byteArray[2] = 0x80 | ((code & 0xFC0) >>> 6);
				byteArray[3] = 0x80 | (code & 0x3F);
			} else if (code > 0x800) {
				byteArray[0] = 0xE0 | ((code & 0xF000) >>> 12);
				byteArray[1] = 0x80 | ((code & 0xFC0) >>> 6);
				byteArray[2] = 0x80 | (code & 0x3F);
			} else if (code > 0x80) {
				byteArray[0] = 0xC0 | ((code & 0x7C0) >>> 6);
				byteArray[1] = 0x80 | (code & 0x3F);
			} else {
				byteArray[0] = code;
			}

			this.parsedData.push(byteArray);
		}

		this.parsedData = Array.prototype.concat.apply([], this.parsedData);

		if (this.parsedData.length != this.data.length) {
			this.parsedData.unshift(191);
			this.parsedData.unshift(187);
			this.parsedData.unshift(239);
		}
	}

	QR8bitByte.prototype = {
		getLength: function (buffer) {
			return this.parsedData.length;
		},
		write: function (buffer) {
			for (var i = 0, l = this.parsedData.length; i < l; i++) {
				buffer.put(this.parsedData[i], 8);
			}
		}
	};

	function QRCodeModel(typeNumber, errorCorrectLevel) {
		this.typeNumber = typeNumber;
		this.errorCorrectLevel = errorCorrectLevel;
		this.modules = null;
		this.moduleCount = 0;
		this.dataCache = null;
		this.dataList = [];
	}

	QRCodeModel.prototype={addData:function(data){var newData=new QR8bitByte(data);this.dataList.push(newData);this.dataCache=null;},isDark:function(row,col){if(row<0||this.moduleCount<=row||col<0||this.moduleCount<=col){throw new Error(row+","+col);}
	return this.modules[row][col];},getModuleCount:function(){return this.moduleCount;},make:function(){this.makeImpl(false,this.getBestMaskPattern());},makeImpl:function(test,maskPattern){this.moduleCount=this.typeNumber*4+17;this.modules=new Array(this.moduleCount);for(var row=0;row<this.moduleCount;row++){this.modules[row]=new Array(this.moduleCount);for(var col=0;col<this.moduleCount;col++){this.modules[row][col]=null;}}
	this.setupPositionProbePattern(0,0);this.setupPositionProbePattern(this.moduleCount-7,0);this.setupPositionProbePattern(0,this.moduleCount-7);this.setupPositionAdjustPattern();this.setupTimingPattern();this.setupTypeInfo(test,maskPattern);if(this.typeNumber>=7){this.setupTypeNumber(test);}
	if(this.dataCache==null){this.dataCache=QRCodeModel.createData(this.typeNumber,this.errorCorrectLevel,this.dataList);}
	this.mapData(this.dataCache,maskPattern);},setupPositionProbePattern:function(row,col){for(var r=-1;r<=7;r++){if(row+r<=-1||this.moduleCount<=row+r)continue;for(var c=-1;c<=7;c++){if(col+c<=-1||this.moduleCount<=col+c)continue;if((0<=r&&r<=6&&(c==0||c==6))||(0<=c&&c<=6&&(r==0||r==6))||(2<=r&&r<=4&&2<=c&&c<=4)){this.modules[row+r][col+c]=true;}else{this.modules[row+r][col+c]=false;}}}},getBestMaskPattern:function(){var minLostPoint=0;var pattern=0;for(var i=0;i<8;i++){this.makeImpl(true,i);var lostPoint=QRUtil.getLostPoint(this);if(i==0||minLostPoint>lostPoint){minLostPoint=lostPoint;pattern=i;}}
	return pattern;},createMovieClip:function(target_mc,instance_name,depth){var qr_mc=target_mc.createEmptyMovieClip(instance_name,depth);var cs=1;this.make();for(var row=0;row<this.modules.length;row++){var y=row*cs;for(var col=0;col<this.modules[row].length;col++){var x=col*cs;var dark=this.modules[row][col];if(dark){qr_mc.beginFill(0,100);qr_mc.moveTo(x,y);qr_mc.lineTo(x+cs,y);qr_mc.lineTo(x+cs,y+cs);qr_mc.lineTo(x,y+cs);qr_mc.endFill();}}}
	return qr_mc;},setupTimingPattern:function(){for(var r=8;r<this.moduleCount-8;r++){if(this.modules[r][6]!=null){continue;}
	this.modules[r][6]=(r%2==0);}
	for(var c=8;c<this.moduleCount-8;c++){if(this.modules[6][c]!=null){continue;}
	this.modules[6][c]=(c%2==0);}},setupPositionAdjustPattern:function(){var pos=QRUtil.getPatternPosition(this.typeNumber);for(var i=0;i<pos.length;i++){for(var j=0;j<pos.length;j++){var row=pos[i];var col=pos[j];if(this.modules[row][col]!=null){continue;}
	for(var r=-2;r<=2;r++){for(var c=-2;c<=2;c++){if(r==-2||r==2||c==-2||c==2||(r==0&&c==0)){this.modules[row+r][col+c]=true;}else{this.modules[row+r][col+c]=false;}}}}}},setupTypeNumber:function(test){var bits=QRUtil.getBCHTypeNumber(this.typeNumber);for(var i=0;i<18;i++){var mod=(!test&&((bits>>i)&1)==1);this.modules[Math.floor(i/3)][i%3+this.moduleCount-8-3]=mod;}
	for(var i=0;i<18;i++){var mod=(!test&&((bits>>i)&1)==1);this.modules[i%3+this.moduleCount-8-3][Math.floor(i/3)]=mod;}},setupTypeInfo:function(test,maskPattern){var data=(this.errorCorrectLevel<<3)|maskPattern;var bits=QRUtil.getBCHTypeInfo(data);for(var i=0;i<15;i++){var mod=(!test&&((bits>>i)&1)==1);if(i<6){this.modules[i][8]=mod;}else if(i<8){this.modules[i+1][8]=mod;}else{this.modules[this.moduleCount-15+i][8]=mod;}}
	for(var i=0;i<15;i++){var mod=(!test&&((bits>>i)&1)==1);if(i<8){this.modules[8][this.moduleCount-i-1]=mod;}else if(i<9){this.modules[8][15-i-1+1]=mod;}else{this.modules[8][15-i-1]=mod;}}
	this.modules[this.moduleCount-8][8]=(!test);},mapData:function(data,maskPattern){var inc=-1;var row=this.moduleCount-1;var bitIndex=7;var byteIndex=0;for(var col=this.moduleCount-1;col>0;col-=2){if(col==6)col--;while(true){for(var c=0;c<2;c++){if(this.modules[row][col-c]==null){var dark=false;if(byteIndex<data.length){dark=(((data[byteIndex]>>>bitIndex)&1)==1);}
	var mask=QRUtil.getMask(maskPattern,row,col-c);if(mask){dark=!dark;}
	this.modules[row][col-c]=dark;bitIndex--;if(bitIndex==-1){byteIndex++;bitIndex=7;}}}
	row+=inc;if(row<0||this.moduleCount<=row){row-=inc;inc=-inc;break;}}}}};QRCodeModel.PAD0=0xEC;QRCodeModel.PAD1=0x11;QRCodeModel.createData=function(typeNumber,errorCorrectLevel,dataList){var rsBlocks=QRRSBlock.getRSBlocks(typeNumber,errorCorrectLevel);var buffer=new QRBitBuffer();for(var i=0;i<dataList.length;i++){var data=dataList[i];buffer.put(data.mode,4);buffer.put(data.getLength(),QRUtil.getLengthInBits(data.mode,typeNumber));data.write(buffer);}
	var totalDataCount=0;for(var i=0;i<rsBlocks.length;i++){totalDataCount+=rsBlocks[i].dataCount;}
	if(buffer.getLengthInBits()>totalDataCount*8){throw new Error("code length overflow. ("
	+buffer.getLengthInBits()
	+">"
	+totalDataCount*8
	+")");}
	if(buffer.getLengthInBits()+4<=totalDataCount*8){buffer.put(0,4);}
	while(buffer.getLengthInBits()%8!=0){buffer.putBit(false);}
	while(true){if(buffer.getLengthInBits()>=totalDataCount*8){break;}
	buffer.put(QRCodeModel.PAD0,8);if(buffer.getLengthInBits()>=totalDataCount*8){break;}
	buffer.put(QRCodeModel.PAD1,8);}
	return QRCodeModel.createBytes(buffer,rsBlocks);};QRCodeModel.createBytes=function(buffer,rsBlocks){var offset=0;var maxDcCount=0;var maxEcCount=0;var dcdata=new Array(rsBlocks.length);var ecdata=new Array(rsBlocks.length);for(var r=0;r<rsBlocks.length;r++){var dcCount=rsBlocks[r].dataCount;var ecCount=rsBlocks[r].totalCount-dcCount;maxDcCount=Math.max(maxDcCount,dcCount);maxEcCount=Math.max(maxEcCount,ecCount);dcdata[r]=new Array(dcCount);for(var i=0;i<dcdata[r].length;i++){dcdata[r][i]=0xff&buffer.buffer[i+offset];}
	offset+=dcCount;var rsPoly=QRUtil.getErrorCorrectPolynomial(ecCount);var rawPoly=new QRPolynomial(dcdata[r],rsPoly.getLength()-1);var modPoly=rawPoly.mod(rsPoly);ecdata[r]=new Array(rsPoly.getLength()-1);for(var i=0;i<ecdata[r].length;i++){var modIndex=i+modPoly.getLength()-ecdata[r].length;ecdata[r][i]=(modIndex>=0)?modPoly.get(modIndex):0;}}
	var totalCodeCount=0;for(var i=0;i<rsBlocks.length;i++){totalCodeCount+=rsBlocks[i].totalCount;}
	var data=new Array(totalCodeCount);var index=0;for(var i=0;i<maxDcCount;i++){for(var r=0;r<rsBlocks.length;r++){if(i<dcdata[r].length){data[index++]=dcdata[r][i];}}}
	for(var i=0;i<maxEcCount;i++){for(var r=0;r<rsBlocks.length;r++){if(i<ecdata[r].length){data[index++]=ecdata[r][i];}}}
	return data;};var QRMode={MODE_NUMBER:1<<0,MODE_ALPHA_NUM:1<<1,MODE_8BIT_BYTE:1<<2,MODE_KANJI:1<<3};var QRErrorCorrectLevel={L:1,M:0,Q:3,H:2};var QRMaskPattern={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var QRUtil={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:(1<<10)|(1<<8)|(1<<5)|(1<<4)|(1<<2)|(1<<1)|(1<<0),G18:(1<<12)|(1<<11)|(1<<10)|(1<<9)|(1<<8)|(1<<5)|(1<<2)|(1<<0),G15_MASK:(1<<14)|(1<<12)|(1<<10)|(1<<4)|(1<<1),getBCHTypeInfo:function(data){var d=data<<10;while(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G15)>=0){d^=(QRUtil.G15<<(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G15)));}
	return((data<<10)|d)^QRUtil.G15_MASK;},getBCHTypeNumber:function(data){var d=data<<12;while(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G18)>=0){d^=(QRUtil.G18<<(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G18)));}
	return(data<<12)|d;},getBCHDigit:function(data){var digit=0;while(data!=0){digit++;data>>>=1;}
	return digit;},getPatternPosition:function(typeNumber){return QRUtil.PATTERN_POSITION_TABLE[typeNumber-1];},getMask:function(maskPattern,i,j){switch(maskPattern){case QRMaskPattern.PATTERN000:return(i+j)%2==0;case QRMaskPattern.PATTERN001:return i%2==0;case QRMaskPattern.PATTERN010:return j%3==0;case QRMaskPattern.PATTERN011:return(i+j)%3==0;case QRMaskPattern.PATTERN100:return(Math.floor(i/2)+Math.floor(j/3))%2==0;case QRMaskPattern.PATTERN101:return(i*j)%2+(i*j)%3==0;case QRMaskPattern.PATTERN110:return((i*j)%2+(i*j)%3)%2==0;case QRMaskPattern.PATTERN111:return((i*j)%3+(i+j)%2)%2==0;default:throw new Error("bad maskPattern:"+maskPattern);}},getErrorCorrectPolynomial:function(errorCorrectLength){var a=new QRPolynomial([1],0);for(var i=0;i<errorCorrectLength;i++){a=a.multiply(new QRPolynomial([1,QRMath.gexp(i)],0));}
	return a;},getLengthInBits:function(mode,type){if(1<=type&&type<10){switch(mode){case QRMode.MODE_NUMBER:return 10;case QRMode.MODE_ALPHA_NUM:return 9;case QRMode.MODE_8BIT_BYTE:return 8;case QRMode.MODE_KANJI:return 8;default:throw new Error("mode:"+mode);}}else if(type<27){switch(mode){case QRMode.MODE_NUMBER:return 12;case QRMode.MODE_ALPHA_NUM:return 11;case QRMode.MODE_8BIT_BYTE:return 16;case QRMode.MODE_KANJI:return 10;default:throw new Error("mode:"+mode);}}else if(type<41){switch(mode){case QRMode.MODE_NUMBER:return 14;case QRMode.MODE_ALPHA_NUM:return 13;case QRMode.MODE_8BIT_BYTE:return 16;case QRMode.MODE_KANJI:return 12;default:throw new Error("mode:"+mode);}}else{throw new Error("type:"+type);}},getLostPoint:function(qrCode){var moduleCount=qrCode.getModuleCount();var lostPoint=0;for(var row=0;row<moduleCount;row++){for(var col=0;col<moduleCount;col++){var sameCount=0;var dark=qrCode.isDark(row,col);for(var r=-1;r<=1;r++){if(row+r<0||moduleCount<=row+r){continue;}
	for(var c=-1;c<=1;c++){if(col+c<0||moduleCount<=col+c){continue;}
	if(r==0&&c==0){continue;}
	if(dark==qrCode.isDark(row+r,col+c)){sameCount++;}}}
	if(sameCount>5){lostPoint+=(3+sameCount-5);}}}
	for(var row=0;row<moduleCount-1;row++){for(var col=0;col<moduleCount-1;col++){var count=0;if(qrCode.isDark(row,col))count++;if(qrCode.isDark(row+1,col))count++;if(qrCode.isDark(row,col+1))count++;if(qrCode.isDark(row+1,col+1))count++;if(count==0||count==4){lostPoint+=3;}}}
	for(var row=0;row<moduleCount;row++){for(var col=0;col<moduleCount-6;col++){if(qrCode.isDark(row,col)&&!qrCode.isDark(row,col+1)&&qrCode.isDark(row,col+2)&&qrCode.isDark(row,col+3)&&qrCode.isDark(row,col+4)&&!qrCode.isDark(row,col+5)&&qrCode.isDark(row,col+6)){lostPoint+=40;}}}
	for(var col=0;col<moduleCount;col++){for(var row=0;row<moduleCount-6;row++){if(qrCode.isDark(row,col)&&!qrCode.isDark(row+1,col)&&qrCode.isDark(row+2,col)&&qrCode.isDark(row+3,col)&&qrCode.isDark(row+4,col)&&!qrCode.isDark(row+5,col)&&qrCode.isDark(row+6,col)){lostPoint+=40;}}}
	var darkCount=0;for(var col=0;col<moduleCount;col++){for(var row=0;row<moduleCount;row++){if(qrCode.isDark(row,col)){darkCount++;}}}
	var ratio=Math.abs(100*darkCount/moduleCount/moduleCount-50)/5;lostPoint+=ratio*10;return lostPoint;}};var QRMath={glog:function(n){if(n<1){throw new Error("glog("+n+")");}
	return QRMath.LOG_TABLE[n];},gexp:function(n){while(n<0){n+=255;}
	while(n>=256){n-=255;}
	return QRMath.EXP_TABLE[n];},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)};for(var i=0;i<8;i++){QRMath.EXP_TABLE[i]=1<<i;}
	for(var i=8;i<256;i++){QRMath.EXP_TABLE[i]=QRMath.EXP_TABLE[i-4]^QRMath.EXP_TABLE[i-5]^QRMath.EXP_TABLE[i-6]^QRMath.EXP_TABLE[i-8];}
	for(var i=0;i<255;i++){QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]]=i;}
	function QRPolynomial(num,shift){if(num.length==undefined){throw new Error(num.length+"/"+shift);}
	var offset=0;while(offset<num.length&&num[offset]==0){offset++;}
	this.num=new Array(num.length-offset+shift);for(var i=0;i<num.length-offset;i++){this.num[i]=num[i+offset];}}
	QRPolynomial.prototype={get:function(index){return this.num[index];},getLength:function(){return this.num.length;},multiply:function(e){var num=new Array(this.getLength()+e.getLength()-1);for(var i=0;i<this.getLength();i++){for(var j=0;j<e.getLength();j++){num[i+j]^=QRMath.gexp(QRMath.glog(this.get(i))+QRMath.glog(e.get(j)));}}
	return new QRPolynomial(num,0);},mod:function(e){if(this.getLength()-e.getLength()<0){return this;}
	var ratio=QRMath.glog(this.get(0))-QRMath.glog(e.get(0));var num=new Array(this.getLength());for(var i=0;i<this.getLength();i++){num[i]=this.get(i);}
	for(var i=0;i<e.getLength();i++){num[i]^=QRMath.gexp(QRMath.glog(e.get(i))+ratio);}
	return new QRPolynomial(num,0).mod(e);}};function QRRSBlock(totalCount,dataCount){this.totalCount=totalCount;this.dataCount=dataCount;}
	QRRSBlock.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];QRRSBlock.getRSBlocks=function(typeNumber,errorCorrectLevel){var rsBlock=QRRSBlock.getRsBlockTable(typeNumber,errorCorrectLevel);if(rsBlock==undefined){throw new Error("bad rs block @ typeNumber:"+typeNumber+"/errorCorrectLevel:"+errorCorrectLevel);}
	var length=rsBlock.length/3;var list=[];for(var i=0;i<length;i++){var count=rsBlock[i*3+0];var totalCount=rsBlock[i*3+1];var dataCount=rsBlock[i*3+2];for(var j=0;j<count;j++){list.push(new QRRSBlock(totalCount,dataCount));}}
	return list;};QRRSBlock.getRsBlockTable=function(typeNumber,errorCorrectLevel){switch(errorCorrectLevel){case QRErrorCorrectLevel.L:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+0];case QRErrorCorrectLevel.M:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+1];case QRErrorCorrectLevel.Q:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+2];case QRErrorCorrectLevel.H:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+3];default:return undefined;}};function QRBitBuffer(){this.buffer=[];this.length=0;}
	QRBitBuffer.prototype={get:function(index){var bufIndex=Math.floor(index/8);return((this.buffer[bufIndex]>>>(7-index%8))&1)==1;},put:function(num,length){for(var i=0;i<length;i++){this.putBit(((num>>>(length-i-1))&1)==1);}},getLengthInBits:function(){return this.length;},putBit:function(bit){var bufIndex=Math.floor(this.length/8);if(this.buffer.length<=bufIndex){this.buffer.push(0);}
	if(bit){this.buffer[bufIndex]|=(0x80>>>(this.length%8));}
	this.length++;}};var QRCodeLimitLength=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];

	function _isSupportCanvas() {
		return typeof CanvasRenderingContext2D != "undefined";
	}

	// android 2.x doesn't support Data-URI spec
	function _getAndroid() {
		var android = false;
		var sAgent = navigator.userAgent;

		if (/android/i.test(sAgent)) { // android
			android = true;
			var aMat = sAgent.toString().match(/android ([0-9]\.[0-9])/i);

			if (aMat && aMat[1]) {
				android = parseFloat(aMat[1]);
			}
		}

		return android;
	}

	var svgDrawer = (function() {

		var Drawing = function (el, htOption) {
			this._el = el;
			this._htOption = htOption;
		};

		Drawing.prototype.draw = function (oQRCode) {
			var _htOption = this._htOption;
			var _el = this._el;
			var nCount = oQRCode.getModuleCount();
			var nWidth = Math.floor(_htOption.width / nCount);
			var nHeight = Math.floor(_htOption.height / nCount);

			this.clear();

			function makeSVG(tag, attrs) {
				var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
				for (var k in attrs)
					if (attrs.hasOwnProperty(k)) el.setAttribute(k, attrs[k]);
				return el;
			}

			var svg = makeSVG("svg" , {'viewBox': '0 0 ' + String(nCount) + " " + String(nCount), 'width': '100%', 'height': '100%', 'fill': _htOption.colorLight});
			svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
			_el.appendChild(svg);

			svg.appendChild(makeSVG("rect", {"fill": _htOption.colorLight, "width": "100%", "height": "100%"}));
			svg.appendChild(makeSVG("rect", {"fill": _htOption.colorDark, "width": "1", "height": "1", "id": "template"}));

			for (var row = 0; row < nCount; row++) {
				for (var col = 0; col < nCount; col++) {
					if (oQRCode.isDark(row, col)) {
						var child = makeSVG("use", {"x": String(col), "y": String(row)});
						child.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template")
						svg.appendChild(child);
					}
				}
			}
		};
		Drawing.prototype.clear = function () {
			while (this._el.hasChildNodes())
				this._el.removeChild(this._el.lastChild);
		};
		return Drawing;
	})();

	var useSVG = document.documentElement.tagName.toLowerCase() === "svg";

	// Drawing in DOM by using Table tag
	var Drawing = useSVG ? svgDrawer : !_isSupportCanvas() ? (function () {
		var Drawing = function (el, htOption) {
			this._el = el;
			this._htOption = htOption;
		};

		/**
		 * Draw the QRCode
		 *
		 * @param {QRCode} oQRCode
		 */
		Drawing.prototype.draw = function (oQRCode) {
            var _htOption = this._htOption;
            var _el = this._el;
			var nCount = oQRCode.getModuleCount();
			var nWidth = Math.floor(_htOption.width / nCount);
			var nHeight = Math.floor(_htOption.height / nCount);
			var aHTML = ['<table style="border:0;border-collapse:collapse;">'];

			for (var row = 0; row < nCount; row++) {
				aHTML.push('<tr>');

				for (var col = 0; col < nCount; col++) {
					aHTML.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + nWidth + 'px;height:' + nHeight + 'px;background-color:' + (oQRCode.isDark(row, col) ? _htOption.colorDark : _htOption.colorLight) + ';"></td>');
				}

				aHTML.push('</tr>');
			}

			aHTML.push('</table>');
			_el.innerHTML = aHTML.join('');

			// Fix the margin values as real size.
			var elTable = _el.childNodes[0];
			var nLeftMarginTable = (_htOption.width - elTable.offsetWidth) / 2;
			var nTopMarginTable = (_htOption.height - elTable.offsetHeight) / 2;

			if (nLeftMarginTable > 0 && nTopMarginTable > 0) {
				elTable.style.margin = nTopMarginTable + "px " + nLeftMarginTable + "px";
			}
		};

		/**
		 * Clear the QRCode
		 */
		Drawing.prototype.clear = function () {
			this._el.innerHTML = '';
		};

		return Drawing;
	})() : (function () { // Drawing in Canvas
		function _onMakeImage() {
			this._elImage.src = this._elCanvas.toDataURL("image/png");
			this._elImage.style.display = "block";
			this._elCanvas.style.display = "none";
		}

		// Android 2.1 bug workaround
		// http://code.google.com/p/android/issues/detail?id=5141
		if (this._android && this._android <= 2.1) {
	    	var factor = 1 / window.devicePixelRatio;
	        var drawImage = CanvasRenderingContext2D.prototype.drawImage;
	    	CanvasRenderingContext2D.prototype.drawImage = function (image, sx, sy, sw, sh, dx, dy, dw, dh) {
	    		if (("nodeName" in image) && /img/i.test(image.nodeName)) {
		        	for (var i = arguments.length - 1; i >= 1; i--) {
		            	arguments[i] = arguments[i] * factor;
		        	}
	    		} else if (typeof dw == "undefined") {
	    			arguments[1] *= factor;
	    			arguments[2] *= factor;
	    			arguments[3] *= factor;
	    			arguments[4] *= factor;
	    		}

	        	drawImage.apply(this, arguments);
	    	};
		}

		/**
		 * Check whether the user's browser supports Data URI or not
		 *
		 * @private
		 * @param {Function} fSuccess Occurs if it supports Data URI
		 * @param {Function} fFail Occurs if it doesn't support Data URI
		 */
		function _safeSetDataURI(fSuccess, fFail) {
            var self = this;
            self._fFail = fFail;
            self._fSuccess = fSuccess;

            // Check it just once
            if (self._bSupportDataURI === null) {
                var el = document.createElement("img");
                var fOnError = function() {
                    self._bSupportDataURI = false;

                    if (self._fFail) {
                        self._fFail.call(self);
                    }
                };
                var fOnSuccess = function() {
                    self._bSupportDataURI = true;

                    if (self._fSuccess) {
                        self._fSuccess.call(self);
                    }
                };

                el.onabort = fOnError;
                el.onerror = fOnError;
                el.onload = fOnSuccess;
                el.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="; // the Image contains 1px data.
                return;
            } else if (self._bSupportDataURI === true && self._fSuccess) {
                self._fSuccess.call(self);
            } else if (self._bSupportDataURI === false && self._fFail) {
                self._fFail.call(self);
            }
		};

		/**
		 * Drawing QRCode by using canvas
		 *
		 * @constructor
		 * @param {HTMLElement} el
		 * @param {Object} htOption QRCode Options
		 */
		var Drawing = function (el, htOption) {
    		this._bIsPainted = false;
    		this._android = _getAndroid();

			this._htOption = htOption;
			this._elCanvas = document.createElement("canvas");
			this._elCanvas.width = htOption.width;
			this._elCanvas.height = htOption.height;
			el.appendChild(this._elCanvas);
			this._el = el;
			this._oContext = this._elCanvas.getContext("2d");
			this._bIsPainted = false;
			this._elImage = document.createElement("img");
			this._elImage.alt = "Scan me!";
			this._elImage.style.display = "none";
			this._el.appendChild(this._elImage);
			this._bSupportDataURI = null;
		};

		/**
		 * Draw the QRCode
		 *
		 * @param {QRCode} oQRCode
		 */
		Drawing.prototype.draw = function (oQRCode) {
            var _elImage = this._elImage;
            var _oContext = this._oContext;
            var _htOption = this._htOption;

			var nCount = oQRCode.getModuleCount();
			var nWidth = _htOption.width / nCount;
			var nHeight = _htOption.height / nCount;
			var nRoundedWidth = Math.round(nWidth);
			var nRoundedHeight = Math.round(nHeight);

			_elImage.style.display = "none";
			this.clear();

			for (var row = 0; row < nCount; row++) {
				for (var col = 0; col < nCount; col++) {
					var bIsDark = oQRCode.isDark(row, col);
					var nLeft = col * nWidth;
					var nTop = row * nHeight;
					_oContext.strokeStyle = bIsDark ? _htOption.colorDark : _htOption.colorLight;
					_oContext.lineWidth = 1;
					_oContext.fillStyle = bIsDark ? _htOption.colorDark : _htOption.colorLight;
					_oContext.fillRect(nLeft, nTop, nWidth, nHeight);

					// 안티 앨리어싱 방지 처리
					_oContext.strokeRect(
						Math.floor(nLeft) + 0.5,
						Math.floor(nTop) + 0.5,
						nRoundedWidth,
						nRoundedHeight
					);

					_oContext.strokeRect(
						Math.ceil(nLeft) - 0.5,
						Math.ceil(nTop) - 0.5,
						nRoundedWidth,
						nRoundedHeight
					);
				}
			}

			this._bIsPainted = true;
		};

		/**
		 * Make the image from Canvas if the browser supports Data URI.
		 */
		Drawing.prototype.makeImage = function () {
			if (this._bIsPainted) {
				_safeSetDataURI.call(this, _onMakeImage);
			}
		};

		/**
		 * Return whether the QRCode is painted or not
		 *
		 * @return {Boolean}
		 */
		Drawing.prototype.isPainted = function () {
			return this._bIsPainted;
		};

		/**
		 * Clear the QRCode
		 */
		Drawing.prototype.clear = function () {
			this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height);
			this._bIsPainted = false;
		};

		/**
		 * @private
		 * @param {Number} nNumber
		 */
		Drawing.prototype.round = function (nNumber) {
			if (!nNumber) {
				return nNumber;
			}

			return Math.floor(nNumber * 1000) / 1000;
		};

		return Drawing;
	})();

	/**
	 * Get the type by string length
	 *
	 * @private
	 * @param {String} sText
	 * @param {Number} nCorrectLevel
	 * @return {Number} type
	 */
	function _getTypeNumber(sText, nCorrectLevel) {
		var nType = 1;
		var length = _getUTF8Length(sText);

		for (var i = 0, len = QRCodeLimitLength.length; i <= len; i++) {
			var nLimit = 0;

			switch (nCorrectLevel) {
				case QRErrorCorrectLevel.L :
					nLimit = QRCodeLimitLength[i][0];
					break;
				case QRErrorCorrectLevel.M :
					nLimit = QRCodeLimitLength[i][1];
					break;
				case QRErrorCorrectLevel.Q :
					nLimit = QRCodeLimitLength[i][2];
					break;
				case QRErrorCorrectLevel.H :
					nLimit = QRCodeLimitLength[i][3];
					break;
			}

			if (length <= nLimit) {
				break;
			} else {
				nType++;
			}
		}

		if (nType > QRCodeLimitLength.length) {
			throw new Error("Too long data");
		}

		return nType;
	}

	function _getUTF8Length(sText) {
		var replacedText = encodeURI(sText).toString().replace(/\%[0-9a-fA-F]{2}/g, 'a');
		return replacedText.length + (replacedText.length != sText ? 3 : 0);
	}

	/**
	 * @class QRCode
	 * @constructor
	 * @example
	 * new QRCode(document.getElementById("test"), "http://jindo.dev.naver.com/collie");
	 *
	 * @example
	 * var oQRCode = new QRCode("test", {
	 *    text : "http://naver.com",
	 *    width : 128,
	 *    height : 128
	 * });
	 *
	 * oQRCode.clear(); // Clear the QRCode.
	 * oQRCode.makeCode("http://map.naver.com"); // Re-create the QRCode.
	 *
	 * @param {HTMLElement|String} el target element or 'id' attribute of element.
	 * @param {Object|String} vOption
	 * @param {String} vOption.text QRCode link data
	 * @param {Number} [vOption.width=256]
	 * @param {Number} [vOption.height=256]
	 * @param {String} [vOption.colorDark="#000000"]
	 * @param {String} [vOption.colorLight="#ffffff"]
	 * @param {QRCode.CorrectLevel} [vOption.correctLevel=QRCode.CorrectLevel.H] [L|M|Q|H]
	 */
	QRCode = function (el, vOption) {
		this._htOption = {
			width : 256,
			height : 256,
			typeNumber : 4,
			colorDark : "#000000",
			colorLight : "#ffffff",
			correctLevel : QRErrorCorrectLevel.H
		};

		if (typeof vOption === 'string') {
			vOption	= {
				text : vOption
			};
		}

		// Overwrites options
		if (vOption) {
			for (var i in vOption) {
				this._htOption[i] = vOption[i];
			}
		}

		if (typeof el == "string") {
			el = document.getElementById(el);
		}

		if (this._htOption.useSVG) {
			Drawing = svgDrawer;
		}

		this._android = _getAndroid();
		this._el = el;
		this._oQRCode = null;
		this._oDrawing = new Drawing(this._el, this._htOption);

		if (this._htOption.text) {
			this.makeCode(this._htOption.text);
		}
	};

	/**
	 * Make the QRCode
	 *
	 * @param {String} sText link data
	 */
	QRCode.prototype.makeCode = function (sText) {
		this._oQRCode = new QRCodeModel(_getTypeNumber(sText, this._htOption.correctLevel), this._htOption.correctLevel);
		this._oQRCode.addData(sText);
		this._oQRCode.make();
		this._el.title = sText;
		this._oDrawing.draw(this._oQRCode);
		this.makeImage();
	};

	/**
	 * Make the Image from Canvas element
	 * - It occurs automatically
	 * - Android below 3 doesn't support Data-URI spec.
	 *
	 * @private
	 */
	QRCode.prototype.makeImage = function () {
		if (typeof this._oDrawing.makeImage == "function" && (!this._android || this._android >= 3)) {
			this._oDrawing.makeImage();
		}
	};

	/**
	 * Clear the QRCode
	 */
	QRCode.prototype.clear = function () {
		this._oDrawing.clear();
	};

	/**
	 * @name QRCode.CorrectLevel
	 */
	QRCode.CorrectLevel = QRErrorCorrectLevel;
	
	return QRCode;
	
}));


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/my-address/my-address.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/my-address/my-address.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n<ion-header class=\"page-header ion-no-border\">\n  <ion-toolbar>\n    <ion-title>\n      <ion-item id=\"title\" lines=\"none\" class=\"ion-no-padding\">\n        <ion-icon class=\"menu-btn\" (click)=\"openMenu()\" src=\"assets/menuIcon.svg\"></ion-icon>\n        Receive\n      </ion-item>\n      <ion-item id=\"subtitle\" class=\"breadcrumb ion-no-padding\" lines=\"none\" *ngIf=\"qrCode.length > 0\">\n        Your wallet address\n      </ion-item>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content class=\"page-content\">\n  \n  <ion-grid *ngIf=\"this.qrCode.length == 0\">\n    <ion-row>\n      <ion-col style=\"display: flex; align-items:center; justify-content:center\" size=\"12\">\n        <ion-label>Fetching an address...</ion-label>\n      </ion-col>\n      <ion-col style=\"display: flex; align-items:center; justify-content:center\" size=\"12\">\n        <ion-spinner name=\"crescent\"></ion-spinner>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"qrCode.length > 0\">\n    <!-- <ion-row>\n      <ion-col size=\"6\">\n        <div class=\"qr-box\">\n          <qrcode [qrdata]=\"qrCode\" [level]=\"'Q'\"></qrcode>\n        </div>\n      </ion-col>\n    </ion-row> -->\n    <ion-row>\n      <ion-col class=\"ion-no-padding\" size=\"12\">\n        <p class=\"qrcode-box\">\n          {{ qrCode }}\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"margin-top: 7px\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-button (click)=\"copyToClipPWA()\" class=\"copy-btn\" fill=\"clear\">\n          Copy Address\n        </ion-button>\n        <ion-button (click)=\"generateAddress(qrCode)\" #generateAddressBtn class=\"gen-btn\" fill=\"none\">\n          Generate Address\n        </ion-button>\n      </ion-col>\n      \n    </ion-row>\n    <ion-row>\n      <p class=\"notes\">You can use this address as many times as you wish.</p>\n      <p class=\"notes\">This address can be used for any Minima token or Minima custom token transaction.</p>\n      <p class=\"notes\">Click 'Generate Address' to create a new address when needed.</p>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n\n\n\n<ion-footer class=\"border-t\">\n  <ion-button (click)=\"giveMe50()\" class=\"gimme50 no-ripple\" fill=\"none\">\n    Gimme 50\n  </ion-button>\n</ion-footer>\n</ion-app>"

/***/ }),

/***/ "./src/app/pages/my-address/my-address.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/my-address/my-address.module.ts ***!
  \*******************************************************/
/*! exports provided: MyAddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAddressPageModule", function() { return MyAddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _my_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-address.page */ "./src/app/pages/my-address/my-address.page.ts");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/dist/index.js");








var routes = [
    {
        path: '',
        component: _my_address_page__WEBPACK_IMPORTED_MODULE_6__["MyAddressPage"]
    }
];
var MyAddressPageModule = /** @class */ (function () {
    function MyAddressPageModule() {
    }
    MyAddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                angularx_qrcode__WEBPACK_IMPORTED_MODULE_7__["QRCodeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_my_address_page__WEBPACK_IMPORTED_MODULE_6__["MyAddressPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], MyAddressPageModule);
    return MyAddressPageModule;
}());



/***/ }),

/***/ "./src/app/pages/my-address/my-address.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/my-address/my-address.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (min-width: 900px) {\n  .skeleton-address {\n    height: auto;\n    width: auto;\n    --background: var(--ion-background-color, #f2f2f2);\n  }\n}\nion-item {\n  --inner-padding-end: 0;\n}\nion-content {\n  --overflow: hidden;\n}\nion-card-content {\n  background: var(--ion-card-color);\n}\nion-card-header {\n  --color: var(--ion-text-color,#000);\n}\n.ios .skeleton-address {\n  height: 280px;\n  width: 100%;\n}\n.qrCanvas {\n  width: 50px;\n  height: auto;\n}\n.addr-title {\n  padding: 10px;\n}\nion-button.copy-btn {\n  text-transform: none;\n  font-family: manrope-bold;\n  color: #fff;\n  background-color: var(--ion-color-primary);\n  height: 35px;\n  width: 164px;\n  margin-left: 0;\n  margin-right: 7px;\n}\nion-button.copy-btn:hover {\n  --background: #346EE5;\n}\nion-button.gen-btn {\n  height: 35px;\n  width: 164px;\n  text-transform: none;\n  font-family: manrope-bold;\n  color: var(--ion-color-color);\n  border: 1px solid var(--ion-color-color);\n  box-shadow: none;\n  margin-left: 0;\n}\nion-button.gen-btn:hover {\n  --background: var(--ion-color-color);\n  color: var(--ion-color-item-hover);\n  --border-radius: 0;\n  border-color: var(--ion-color-color);\n}\nion-badge:hover {\n  -webkit-transform: scale(1.01);\n          transform: scale(1.01);\n}\nion-badge {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  cursor: pointer;\n  --background: #FF512F;\n}\nion-grid ion-row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: left;\n          align-items: left;\n  -webkit-box-pack: left;\n          justify-content: left;\n}\nion-grid ion-row:first-child {\n  margin-top: 5px;\n}\np.qrcode-box {\n  background-color: var(--ion-color-inputs);\n  color: #000;\n  margin-bottom: 0;\n  padding-bottom: 0;\n  margin-top: 7px;\n  padding: 1%;\n  font-size: 15px;\n}\n.toast {\n  --width: 50%;\n}\n.notes {\n  color: var(--ion-color-secondary);\n  margin: 7px;\n  margin-left: 0;\n  font-size: 14px;\n}\n.center {\n  right: 2%;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n  display: -webkit-inline-box !important;\n  display: inline-flex !important;\n  text-align: center !important;\n}\ndiv.qr-box {\n  width: 226px;\n  height: 226px;\n  padding: 10%;\n  background-color: var(--ion-color-inputs);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  outline: 1px solid #001C32;\n}\ndiv.qr-box:hover {\n  outline-color: var(--ion-color-primary);\n}\n@media only screen and (max-width: 600px) {\n  ion-button.copy-btn {\n    width: 175px;\n  }\n\n  ion-button.gen-btn {\n    width: 175px;\n  }\n\n  .notes {\n    color: var(--ion-color-secondary);\n    margin: 7px;\n    margin-left: 0;\n    font-size: 12px;\n  }\n}\n@media only screen and (max-width: 411px) {\n  ion-button.copy-btn {\n    width: 175px;\n  }\n\n  ion-button.gen-btn {\n    width: 175px;\n  }\n}\n@media only screen and (max-width: 401px) {\n  ion-button.copy-btn {\n    width: 165px;\n  }\n\n  ion-button.gen-btn {\n    width: 165px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV2FsbGV0L21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL215LWFkZHJlc3MvbXktYWRkcmVzcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL215LWFkZHJlc3MvbXktYWRkcmVzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLFlBQUE7SUFDQSxXQUFBO0lBQ0Esa0RBQUE7RUNDTjtBQUNGO0FEQ0E7RUFDRSxzQkFBQTtBQ0NGO0FEQ0E7RUFDRSxrQkFBQTtBQ0VGO0FEQ0E7RUFDSSxpQ0FBQTtBQ0VKO0FEQUE7RUFDSSxtQ0FBQTtBQ0dKO0FEQUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQ0dKO0FEREE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0lKO0FERkE7RUFDSSxhQUFBO0FDS0o7QURGQTtFQUNFLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0tGO0FESEE7RUFDRSxxQkFBQTtBQ01GO0FESkE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDT0Y7QURMQTtFQUNFLG9DQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0FDUUY7QUROQTtFQUNJLDhCQUFBO1VBQUEsc0JBQUE7QUNTSjtBRFBBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ1VKO0FEUkE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx1QkFBQTtVQUFBLGlCQUFBO0VBQ0Esc0JBQUE7VUFBQSxxQkFBQTtBQ1dKO0FEVEE7RUFDRSxlQUFBO0FDWUY7QURWQTtFQUNFLHlDQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNhRjtBRFhBO0VBQ0ksWUFBQTtBQ2NKO0FEWkE7RUFDRSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ2VGO0FEYkE7RUFDRSxTQUFBO0VBQ0Esb0NBQUE7VUFBQSw4QkFBQTtFQUNBLG1DQUFBO1VBQUEsa0NBQUE7RUFDQSxzQ0FBQTtFQUFBLCtCQUFBO0VBQ0EsNkJBQUE7QUNnQkY7QURaQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlDQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSwwQkFBQTtBQ2VGO0FEYkE7RUFDRSx1Q0FBQTtBQ2dCRjtBRGJBO0VBQ0k7SUFDRSxZQUFBO0VDZ0JKOztFRGRFO0lBQ0UsWUFBQTtFQ2lCSjs7RURmRTtJQUNFLGlDQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0VDa0JKO0FBQ0Y7QURmQTtFQUNFO0lBQ0UsWUFBQTtFQ2lCRjs7RURmQTtJQUNFLFlBQUE7RUNrQkY7QUFDRjtBRGZBO0VBQ0U7SUFDRSxZQUFBO0VDaUJGOztFRGZBO0lBQ0UsWUFBQTtFQ2tCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbXktYWRkcmVzcy9teS1hZGRyZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KSB7XG4gICAgLnNrZWxldG9uLWFkZHJlc3Mge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjJmMmYyKTtcbiAgICB9XG59XG5pb24taXRlbSB7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG59XG5pb24tY29udGVudCB7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNhcmQtY29sb3IpO1xufVxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwjMDAwKTtcbn1cblxuLmlvcyAuc2tlbGV0b24tYWRkcmVzcyB7XG4gICAgaGVpZ2h0OiAyODBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5xckNhbnZhc3tcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG4uYWRkci10aXRsZSB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuaW9uLWJ1dHRvbi5jb3B5LWJ0biB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAxNjRweDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xufVxuaW9uLWJ1dHRvbi5jb3B5LWJ0bjpob3ZlciB7XG4gIC0tYmFja2dyb3VuZDogIzM0NkVFNTtcbn1cbmlvbi1idXR0b24uZ2VuLWJ0biB7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDE2NHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb2xvcik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1jb2xvcik7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuaW9uLWJ1dHRvbi5nZW4tYnRuOmhvdmVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItY29sb3IpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWl0ZW0taG92ZXIpO1xuICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yKTtcbn1cbmlvbi1iYWRnZTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbn1cbmlvbi1iYWRnZSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRkY1MTJGO1xufVxuaW9uLWdyaWQgaW9uLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogbGVmdDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG59XG5pb24tZ3JpZCBpb24tcm93OmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxucC5xcmNvZGUtYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWlucHV0cyk7XG4gIGNvbG9yOiAjMDAwO1xuICBtYXJnaW4tYm90dG9tOjA7XG4gIHBhZGRpbmctYm90dG9tOjA7XG4gIG1hcmdpbi10b3A6IDdweDtcbiAgcGFkZGluZzogMSU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi50b2FzdCB7XG4gICAgLS13aWR0aDogNTAlO1xufVxuLm5vdGVzIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBtYXJnaW46IDdweDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIGZvbnQtc2l6ZToxNHB4O1xufVxuLmNlbnRlciB7XG4gIHJpZ2h0OiAyJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuXG5kaXYucXItYm94IHtcbiAgd2lkdGg6IDIyNnB4O1xuICBoZWlnaHQ6IDIyNnB4O1xuICBwYWRkaW5nOiAxMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1pbnB1dHMpO1xuICBkaXNwbGF5OmZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdXRsaW5lOiAxcHggc29saWQgIzAwMUMzMjtcbn1cbmRpdi5xci1ib3g6aG92ZXIge1xuICBvdXRsaW5lLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBpb24tYnV0dG9uLmNvcHktYnRuIHtcbiAgICAgIHdpZHRoOiAxNzVweDtcbiAgICB9XG4gICAgaW9uLWJ1dHRvbi5nZW4tYnRuIHtcbiAgICAgIHdpZHRoOiAxNzVweDtcbiAgICB9XG4gICAgLm5vdGVzIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgIG1hcmdpbjogN3B4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICBmb250LXNpemU6MTJweDtcbiAgICB9XG4gIFxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTFweCkge1xuICBpb24tYnV0dG9uLmNvcHktYnRuIHtcbiAgICB3aWR0aDogMTc1cHg7XG4gIH1cbiAgaW9uLWJ1dHRvbi5nZW4tYnRuIHtcbiAgICB3aWR0aDogMTc1cHg7XG4gIH1cbiAgXG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMXB4KSB7XG4gIGlvbi1idXR0b24uY29weS1idG4ge1xuICAgIHdpZHRoOiAxNjVweDtcbiAgfVxuICBpb24tYnV0dG9uLmdlbi1idG4ge1xuICAgIHdpZHRoOiAxNjVweDtcbiAgfVxufVxuXG4iLCJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xuICAuc2tlbGV0b24tYWRkcmVzcyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMmYyZjIpO1xuICB9XG59XG5pb24taXRlbSB7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNhcmQtY29sb3IpO1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwjMDAwKTtcbn1cblxuLmlvcyAuc2tlbGV0b24tYWRkcmVzcyB7XG4gIGhlaWdodDogMjgwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucXJDYW52YXMge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uYWRkci10aXRsZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbmlvbi1idXR0b24uY29weS1idG4ge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMTY0cHg7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbn1cblxuaW9uLWJ1dHRvbi5jb3B5LWJ0bjpob3ZlciB7XG4gIC0tYmFja2dyb3VuZDogIzM0NkVFNTtcbn1cblxuaW9uLWJ1dHRvbi5nZW4tYnRuIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMTY0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWNvbG9yKTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbmlvbi1idXR0b24uZ2VuLWJ0bjpob3ZlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1pdGVtLWhvdmVyKTtcbiAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb2xvcik7XG59XG5cbmlvbi1iYWRnZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XG59XG5cbmlvbi1iYWRnZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC0tYmFja2dyb3VuZDogI0ZGNTEyRjtcbn1cblxuaW9uLWdyaWQgaW9uLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBsZWZ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG59XG5cbmlvbi1ncmlkIGlvbi1yb3c6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbnAucXJjb2RlLWJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1pbnB1dHMpO1xuICBjb2xvcjogIzAwMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIG1hcmdpbi10b3A6IDdweDtcbiAgcGFkZGluZzogMSU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnRvYXN0IHtcbiAgLS13aWR0aDogNTAlO1xufVxuXG4ubm90ZXMge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIG1hcmdpbjogN3B4O1xuICBtYXJnaW4tbGVmdDogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY2VudGVyIHtcbiAgcmlnaHQ6IDIlO1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG5kaXYucXItYm94IHtcbiAgd2lkdGg6IDIyNnB4O1xuICBoZWlnaHQ6IDIyNnB4O1xuICBwYWRkaW5nOiAxMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1pbnB1dHMpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3V0bGluZTogMXB4IHNvbGlkICMwMDFDMzI7XG59XG5cbmRpdi5xci1ib3g6aG92ZXIge1xuICBvdXRsaW5lLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgaW9uLWJ1dHRvbi5jb3B5LWJ0biB7XG4gICAgd2lkdGg6IDE3NXB4O1xuICB9XG5cbiAgaW9uLWJ1dHRvbi5nZW4tYnRuIHtcbiAgICB3aWR0aDogMTc1cHg7XG4gIH1cblxuICAubm90ZXMge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICBtYXJnaW46IDdweDtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDExcHgpIHtcbiAgaW9uLWJ1dHRvbi5jb3B5LWJ0biB7XG4gICAgd2lkdGg6IDE3NXB4O1xuICB9XG5cbiAgaW9uLWJ1dHRvbi5nZW4tYnRuIHtcbiAgICB3aWR0aDogMTc1cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAxcHgpIHtcbiAgaW9uLWJ1dHRvbi5jb3B5LWJ0biB7XG4gICAgd2lkdGg6IDE2NXB4O1xuICB9XG5cbiAgaW9uLWJ1dHRvbi5nZW4tYnRuIHtcbiAgICB3aWR0aDogMTY1cHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/my-address/my-address.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/my-address/my-address.page.ts ***!
  \*****************************************************/
/*! exports provided: MyAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAddressPage", function() { return MyAddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_userconfig_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/userconfig.service */ "./src/app/service/userconfig.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_minima_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/minima-api.service */ "./src/app/service/minima-api.service.ts");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! minima */ "./node_modules/minima/dist/minima.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(minima__WEBPACK_IMPORTED_MODULE_5__);






var MyAddressPage = /** @class */ (function () {
    function MyAddressPage(menu, api, platform, ngZone, userConfigService, alertController, toastController) {
        this.menu = menu;
        this.api = api;
        this.platform = platform;
        this.ngZone = ngZone;
        this.userConfigService = userConfigService;
        this.alertController = alertController;
        this.toastController = toastController;
        this.qrCode = '';
        this.lastCode = '';
        this.user = {
            tokenDisplayMode: 1,
            tips: {
                address: false
            }
        };
    }
    MyAddressPage.prototype.ngOnInit = function () { };
    MyAddressPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        minima__WEBPACK_IMPORTED_MODULE_5__["Minima"].file.load('lastAddress.txt', function (res) {
            if (res.success) {
                var data = JSON.parse(res.data);
                if (data.address.length === 0) {
                    _this.newAddress();
                }
                else {
                    _this.qrCode = data.address;
                    _this.isEmpty = true;
                }
            }
            else {
                //console.log('Already have this file')
                _this.newAddress();
            }
        });
        this.userConfigService.userConfig.subscribe(function (res) {
            // ngZone re-renders onChange
            _this.ngZone.run(function () {
                _this.user = res;
            });
        });
    };
    MyAddressPage.prototype.openMenu = function () {
        this.menu.open();
    };
    MyAddressPage.prototype.generateAddress = function (code) {
        var _this = this;
        this.newAddress();
        this.generateAddressBtn.disabled = true;
        this.presentToast('Generated a new address', 'primary', "bottom");
        setTimeout(function () {
            _this.generateAddressBtn.disabled = false;
        }, 2000);
    };
    MyAddressPage.prototype.newAddress = function () {
        var _this = this;
        setTimeout(function () {
            _this.api.newAddress().then(function (res) {
                if (res.status) {
                    _this.qrCode = res.response.address.miniaddress;
                    _this.isEmpty = true;
                    var data = { address: _this.qrCode };
                    var send = JSON.stringify(data);
                    minima__WEBPACK_IMPORTED_MODULE_5__["Minima"].file.save(send, 'lastAddress.txt', function (res) {
                        if (res.success) { }
                    });
                }
            });
        }, 0);
    };
    MyAddressPage.prototype.hideTip = function () {
        this.user.tips.address = true;
        this.userConfigService.userConfig.next(this.user);
        this.userConfigService.saveUserConfig(this.user);
    };
    MyAddressPage.prototype.presentAlert = function (hdr, msg, sub) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'alert',
                            header: hdr,
                            subHeader: sub,
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
    MyAddressPage.prototype.presentToast = function (msg, type, posn) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 1000,
                            color: type,
                            keyboardClose: true,
                            translucent: true,
                            position: posn,
                            cssClass: 'toast',
                            buttons: [{
                                    text: 'Dismiss',
                                    role: 'cancel',
                                    handler: function () {
                                    }
                                }]
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyAddressPage.prototype.giveMe50 = function () {
        var _this = this;
        this.api.giveMe50().then(function (res) {
            if (res.status === true) {
                _this.presentAlert('Gimme50', 'Successful', 'Status');
            }
            else {
                _this.presentAlert('Gimme50', res.message, 'Status');
            }
        });
    };
    MyAddressPage.prototype.copyToClipboard = function () {
        if (this.platform.is('desktop') || this.platform.is('pwa')) {
            this.copyToClipPWA();
        }
        else {
            //this.clipboard.copy(this.qrCode);
            this.presentToast('Copied to Clipboard', 'primary', 'bottom');
        }
    };
    MyAddressPage.prototype.copyToClipPWA = function () {
        var _this = this;
        document.addEventListener('copy', function (e) {
            e.clipboardData.setData('text/plain', _this.qrCode);
            _this.presentToast('Copied To Clipboard', 'primary', 'bottom');
            e.preventDefault();
            document.removeEventListener('copy', null);
        });
        document.execCommand('copy');
    };
    MyAddressPage.prototype.checkPlatform = function () {
        if (this.platform.is('desktop')) {
            return true;
        }
        else {
            return false;
        }
    };
    MyAddressPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _service_minima_api_service__WEBPACK_IMPORTED_MODULE_4__["MinimaApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
        { type: _service_userconfig_service__WEBPACK_IMPORTED_MODULE_1__["UserConfigService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('generateAddressBtn', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"])
    ], MyAddressPage.prototype, "generateAddressBtn", void 0);
    MyAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-my-address',
            template: __webpack_require__(/*! raw-loader!./my-address.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/my-address/my-address.page.html"),
            styles: [__webpack_require__(/*! ./my-address.page.scss */ "./src/app/pages/my-address/my-address.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _service_minima_api_service__WEBPACK_IMPORTED_MODULE_4__["MinimaApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
            _service_userconfig_service__WEBPACK_IMPORTED_MODULE_1__["UserConfigService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], MyAddressPage);
    return MyAddressPage;
}());



/***/ }),

/***/ "./src/app/service/minima-api.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/minima-api.service.ts ***!
  \***********************************************/
/*! exports provided: MinimaApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinimaApiService", function() { return MinimaApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! minima */ "./node_modules/minima/dist/minima.js");
/* harmony import */ var minima__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(minima__WEBPACK_IMPORTED_MODULE_3__);




var MinimaApiService = /** @class */ (function () {
    function MinimaApiService(loadingController) {
        this.loadingController = loadingController;
        this.loader = null;
    }
    MinimaApiService.prototype.showLoader = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.loader == null)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Loading'
                            })];
                    case 1:
                        _a.loader = _b.sent();
                        this.loader.present();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MinimaApiService.prototype.hideLoader = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.loader !== null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loader.dismiss()];
                    case 1:
                        _a.sent();
                        this.loader = null;
                        return [3 /*break*/, 2];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MinimaApiService.prototype.createToken = function (data) {
        return this.req("tokencreate name:\"" + data.name + "\" amount:" + data.amount + " description:\"" + data.description + "\" script:\"" + data.script + "\" icon:" + data.icon + " proof:" + data.proof);
    };
    MinimaApiService.prototype.validateTokenID = function (tokenid) {
        return this.req("tokenvalidate " + tokenid);
    };
    MinimaApiService.prototype.sendMessageTransaction = function (data) {
        var txnidentifier = Math.floor(Math.random() * 1000000000);
        var port254 = 254;
        var port255 = 255;
        var customTXN = 
        // Custom TXN with an ID
        "txncreate " + txnidentifier + ";" +
            // Add state variable 1
            "txnstate " + txnidentifier + " 254 01000100" + ";" +
            // Add User state variable 2
            "txnstate " + txnidentifier + " 255 \"" + data.message + "\"" + ";" +
            // Auto fill the transaction
            "txnauto " + txnidentifier + " " + data.amount + " " + data.address + " " + data.tokenid + ";" +
            // Post it!
            "txnpost " + txnidentifier + ";" +
            // Clear the txn
            "txndelete " + txnidentifier + ";";
        return this.req(customTXN);
    };
    MinimaApiService.prototype.webLink = function (data) {
        return this.req('weblink+' + data.url);
    };
    MinimaApiService.prototype.setHost = function (newHost) {
        localStorage.setItem('minima_host', newHost);
    };
    MinimaApiService.prototype.newAddress = function () {
        return this.req('newaddress');
    };
    MinimaApiService.prototype.sendFunds = function (data) {
        return this.req('send ' + data.amount + ' ' + data.address + ' ' + data.tokenid);
    };
    MinimaApiService.prototype.giveMe50 = function () {
        return this.req('gimme50');
    };
    MinimaApiService.prototype.getBalance = function () {
        return this.req('balance');
    };
    MinimaApiService.prototype.getHistory = function () {
        return this.req('history');
    };
    MinimaApiService.prototype.clearMyHistory = function () {
        return this.req('history clear');
    };
    MinimaApiService.prototype.getStatus = function () {
        return this.req('status');
    };
    // Use minima.js instead..
    MinimaApiService.prototype.req = function (fnc) {
        var promise = new Promise(function (resolve) {
            minima__WEBPACK_IMPORTED_MODULE_3__["Minima"].cmd(fnc, function (resp) {
                //console.log(resp);
                resolve(resp);
            });
        });
        return promise;
    };
    MinimaApiService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    MinimaApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], MinimaApiService);
    return MinimaApiService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-my-address-my-address-module-es5.js.map