(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contacts-contacts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/contacts/contacts.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/contacts/contacts.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Contacts</ion-title>\r\n    <ion-icon (click)=\"presentAddContactForm()\" id=\"addButton\" slot=\"end\" name=\"add\"></ion-icon>\r\n    <ion-icon [ngStyle]=\"{'color': !editMode ? 'var(--ion-color-tertiary)' : '#EE5C5C'}\" (click)=\"toggleDeleteMode()\" id=\"deleteButton\" slot=\"end\" name=\"trash-outline\"></ion-icon>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-toolbar>\r\n    <ion-badge *ngIf=\"user && user.tips && !user.tips.contacts && contacts.length > 0\" id=\"tip\">\r\n    <ion-row>\r\n      <ion-col class=\"center\" size=\"1\">\r\n        <ion-icon id=\"info\" name=\"information-circle-outline\"></ion-icon> \r\n      </ion-col>\r\n      <ion-col class=\"center\">\r\n        <ion-label>\r\n          Swipe <span style=\"font-family: manrope-bold\">left</span> on a contact to copy their address to your clipboard.\r\n        </ion-label>\r\n      </ion-col>\r\n      <ion-col class=\"center\" size=\"1\">\r\n        <span (click)=\"hideTip()\" id=\"dismiss\">&times;</span>\r\n      </ion-col>\r\n    </ion-row>\r\n    </ion-badge>\r\n    <ion-searchbar (ionChange)=\"queryContacts($event.target.value)\" placeholder=\"Search for your contact...\"></ion-searchbar>\r\n  </ion-toolbar>\r\n\r\n  <ion-grid *ngIf=\"contacts && contacts.length == 0\">\r\n    <ion-row>\r\n      <ion-col style=\"display: flex; align-items:center; justify-content:center\" size=\"12\">\r\n        <ion-label>No contact(s) to display...</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-list #contactList class=\"ion-no-padding\" *ngFor=\"let contact of contacts\">\r\n    <ion-item-sliding>\r\n    <ion-item class=\"contactItem\" lines=\"half\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"{{contact.AVATAR}}\">\r\n      </ion-avatar>\r\n      <ion-label> \r\n        <h3>{{ contact.NAME }}</h3>\r\n        <p>{{ contact.ADDRESS }}</p>\r\n      </ion-label>\r\n      <ion-icon *ngIf=\"editMode\" class=\"trashIcon\" (click)=\"removeContact(contact.ADDRESS)\" name=\"trash-outline\" slot=\"end\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item-options side=\"end\">\r\n      <ion-item-option (click)=\"copyAddress(contact.ADDRESS)\" color=\"primary\" expandable>\r\n        <div class=\"block\"> \r\n        <ion-icon name=\"copy\"></ion-icon>\r\n        <br>\r\n        Copy Address        \r\n      </div>  \r\n      </ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/contacts/contacts.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/contacts/contacts.module.ts ***!
  \***************************************************/
/*! exports provided: ContactsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPageModule", function() { return ContactsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _contacts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contacts.page */ "./src/app/pages/contacts/contacts.page.ts");







const routes = [
    {
        path: '',
        component: _contacts_page__WEBPACK_IMPORTED_MODULE_6__["ContactsPage"]
    }
];
let ContactsPageModule = class ContactsPageModule {
};
ContactsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_contacts_page__WEBPACK_IMPORTED_MODULE_6__["ContactsPage"]]
    })
], ContactsPageModule);



/***/ }),

/***/ "./src/app/pages/contacts/contacts.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/contacts/contacts.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header ion-toolbar ion-title {\n  font-family: manrope-bold;\n  font-size: 1.2rem;\n  padding-top: 5%;\n}\n\n#deleteButton {\n  padding-right: 4%;\n  font-size: 1.2rem;\n  cursor: pointer;\n}\n\n#addButton {\n  padding-right: 5%;\n  font-size: 1.2rem;\n  cursor: pointer;\n}\n\nion-item.contactItem {\n  --border-color: var(--ion-color-line);\n}\n\nion-item.contactItem:hover {\n  -webkit-transform: scale(1.001);\n          transform: scale(1.001);\n  --border-color: var(--ion-color-primary);\n}\n\nion-searchbar {\n  --box-shadow: 0;\n  --icon-color: var(--ion-color-primary);\n}\n\nion-item-option div.block {\n  width: 100%;\n  text-transform: none;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  font-size: 0.85rem;\n}\n\nion-item-option div.block ion-icon {\n  font-size: 1.2rem;\n}\n\nion-icon.trashIcon {\n  cursor: pointer;\n}\n\nion-icon.trashIcon:hover {\n  color: var(--ion-color-secondary);\n}\n\nion-badge#tip {\n  white-space: normal;\n  align-self: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n  font-size: 0.8rem;\n  width: 90%;\n  margin-left: 5%;\n  margin-right: 2%;\n}\n\nion-badge#tip ion-icon#info {\n  font-size: 1.5rem;\n}\n\nion-badge#tip ion-col span#dismiss {\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: #a63f44;\n}\n\n.center {\n  right: 2%;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n  display: -webkit-inline-box !important;\n  display: inline-flex !important;\n  text-align: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV0FMTEVUL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvYXBwL3BhZ2VzL2NvbnRhY3RzL2NvbnRhY3RzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29udGFjdHMvY29udGFjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURDQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDRUY7O0FEQUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0dGOztBRERBO0VBQ0UscUNBQUE7QUNJRjs7QURGQTtFQUNFLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSx3Q0FBQTtBQ0tGOztBREZBO0VBQ0UsZUFBQTtFQUNBLHNDQUFBO0FDS0Y7O0FESEE7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ01GOztBREpBO0VBQ0UsaUJBQUE7QUNPRjs7QURMQTtFQUNFLGVBQUE7QUNRRjs7QUROQTtFQUNFLGlDQUFBO0FDU0Y7O0FEUEE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNVRjs7QURSQTtFQUNFLGlCQUFBO0FDV0Y7O0FEVEE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDWUY7O0FEVkE7RUFDRSxTQUFBO0VBQ0Esb0NBQUE7VUFBQSw4QkFBQTtFQUNBLG1DQUFBO1VBQUEsa0NBQUE7RUFDQSxzQ0FBQTtFQUFBLCtCQUFBO0VBQ0EsNkJBQUE7QUNhRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3RzL2NvbnRhY3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcclxuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIHBhZGRpbmctdG9wOiA1JTtcclxufVxyXG4jZGVsZXRlQnV0dG9uIHtcclxuICBwYWRkaW5nLXJpZ2h0OiA0JTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI2FkZEJ1dHRvbiB7XHJcbiAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmlvbi1pdGVtLmNvbnRhY3RJdGVtIHtcclxuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpbmUpO1xyXG59XHJcbmlvbi1pdGVtLmNvbnRhY3RJdGVtOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDAxKTtcclxuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG5pb24tc2VhcmNoYmFyIHtcclxuICAtLWJveC1zaGFkb3c6IDA7XHJcbiAgLS1pY29uLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuaW9uLWl0ZW0tb3B0aW9uIGRpdi5ibG9jayB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcclxufVxyXG5pb24taXRlbS1vcHRpb24gZGl2LmJsb2NrIGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5pb24taWNvbi50cmFzaEljb24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5pb24taWNvbi50cmFzaEljb246aG92ZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxufVxyXG5pb24tYmFkZ2UjdGlwIHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG59XHJcbmlvbi1iYWRnZSN0aXAgaW9uLWljb24jaW5mbyB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuaW9uLWJhZGdlI3RpcCBpb24tY29sIHNwYW4jZGlzbWlzcyB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjYTYzZjQ0O1xyXG59XHJcbi5jZW50ZXIge1xyXG4gIHJpZ2h0OiAyJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcbiIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHBhZGRpbmctdG9wOiA1JTtcbn1cblxuI2RlbGV0ZUJ1dHRvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDQlO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jYWRkQnV0dG9uIHtcbiAgcGFkZGluZy1yaWdodDogNSU7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlvbi1pdGVtLmNvbnRhY3RJdGVtIHtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saW5lKTtcbn1cblxuaW9uLWl0ZW0uY29udGFjdEl0ZW06aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDAxKTtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gIC0tYm94LXNoYWRvdzogMDtcbiAgLS1pY29uLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1pdGVtLW9wdGlvbiBkaXYuYmxvY2sge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuODVyZW07XG59XG5cbmlvbi1pdGVtLW9wdGlvbiBkaXYuYmxvY2sgaW9uLWljb24ge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuaW9uLWljb24udHJhc2hJY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pb24taWNvbi50cmFzaEljb246aG92ZXIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbmlvbi1iYWRnZSN0aXAge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcbn1cblxuaW9uLWJhZGdlI3RpcCBpb24taWNvbiNpbmZvIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbmlvbi1iYWRnZSN0aXAgaW9uLWNvbCBzcGFuI2Rpc21pc3Mge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2E2M2Y0NDtcbn1cblxuLmNlbnRlciB7XG4gIHJpZ2h0OiAyJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/contacts/contacts.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/contacts/contacts.page.ts ***!
  \*************************************************/
/*! exports provided: ContactsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPage", function() { return ContactsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_userconfig_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/userconfig.service */ "./src/app/service/userconfig.service.ts");
/* harmony import */ var _components_contacts_modal_contacts_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/contacts-modal/contacts-modal.page */ "./src/app/components/contacts-modal/contacts-modal.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_contacts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/contacts.service */ "./src/app/service/contacts.service.ts");






let ContactsPage = class ContactsPage {
    constructor(toastController, userConfigService, alertController, contactService, modalController) {
        this.toastController = toastController;
        this.userConfigService = userConfigService;
        this.alertController = alertController;
        this.contactService = contactService;
        this.modalController = modalController;
        this.editMode = false;
        this.contacts = [];
        this.user = {
            tokenDisplayMode: 1,
            tips: {
                balance: false,
                contacts: false,
                address: false
            }
        };
    }
    ngOnInit() {
        this.contactService.data.subscribe((res) => {
            // set the list
            this.contacts = res;
        });
        this.userConfigService.userConfig.subscribe((res) => {
            this.user = res;
        });
    }
    queryContacts(qy) {
        qy = qy.toUpperCase();
        if (qy.length > 0) {
            this.contacts = this.contacts.filter(ele => {
                return ele.NAME.toUpperCase().includes(qy) || ele.ADDRESS.toUpperCase().includes(qy);
            });
        }
        else {
            this.contactService.data.subscribe((res) => {
                this.contacts = res;
            });
        }
    }
    toggleDeleteMode() {
        if (this.editMode) {
            this.editMode = false;
        }
        else {
            this.editMode = true;
        }
    }
    removeContact(addr) {
        this.presentAlert(addr);
    }
    hideTip() {
        this.user.tips.contacts = true;
        this.userConfigService.userConfig.next(this.user);
        this.userConfigService.saveUserConfig(this.user);
    }
    presentAlert(addr) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Delete Contact',
                subHeader: 'Once this contact is deleted, you can\'t revert!',
                message: 'Are you sure?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    },
                    {
                        text: 'Ok',
                        handler: () => {
                            this.contactService.removeContact(addr);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentToast(msg, clr, posn) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                color: clr,
                position: posn,
                buttons: ['cancel']
            });
            yield toast.present();
        });
    }
    copyAddress(addr) {
        document.addEventListener('copy', (e) => {
            e.clipboardData.setData('text/plain', addr);
            this.presentToast('Copied To Clipboard', 'primary', 'bottom');
            this.ContactList.closeSlidingItems();
            e.preventDefault();
            document.removeEventListener('copy', null);
        });
        document.execCommand('copy');
    }
    presentAddContactForm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_contacts_modal_contacts_modal_page__WEBPACK_IMPORTED_MODULE_2__["ContactsModalPage"],
                cssClass: 'contactsModal'
            });
            return yield modal.present();
        });
    }
};
ContactsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _service_userconfig_service__WEBPACK_IMPORTED_MODULE_1__["UserConfigService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_service_contacts_service__WEBPACK_IMPORTED_MODULE_5__["ContactService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('contactList', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"])
], ContactsPage.prototype, "ContactList", void 0);
ContactsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-contacts',
        template: __webpack_require__(/*! raw-loader!./contacts.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/contacts/contacts.page.html"),
        styles: [__webpack_require__(/*! ./contacts.page.scss */ "./src/app/pages/contacts/contacts.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _service_userconfig_service__WEBPACK_IMPORTED_MODULE_1__["UserConfigService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        src_app_service_contacts_service__WEBPACK_IMPORTED_MODULE_5__["ContactService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], ContactsPage);



/***/ })

}]);
//# sourceMappingURL=pages-contacts-contacts-module-es2015.js.map