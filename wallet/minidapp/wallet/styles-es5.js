(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@ionic/angular/css/core.css":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/@ionic/angular/css/core.css ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "html.ios {\n  --ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\n}\n\nhtml.md {\n  --ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif;\n}\n\nhtml {\n  --ion-font-family: var(--ion-default-font);\n}\n\nbody {\n  background: var(--ion-background-color);\n}\n\nbody.backdrop-no-scroll {\n  overflow: hidden;\n}\n\nhtml.ios ion-modal.modal-card .ion-page > ion-header > ion-toolbar:first-of-type {\n  padding-top: 0px;\n}\n\nhtml.ios ion-modal .ion-page {\n  border-radius: inherit;\n}\n\n.ion-color-primary {\n  --ion-color-base: var(--ion-color-primary, #3880ff) !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\n}\n\n.ion-color-secondary {\n  --ion-color-base: var(--ion-color-secondary, #3dc2ff) !important;\n  --ion-color-base-rgb: var(--ion-color-secondary-rgb, 61, 194, 255) !important;\n  --ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-secondary-shade, #36abe0) !important;\n  --ion-color-tint: var(--ion-color-secondary-tint, #50c8ff) !important;\n}\n\n.ion-color-tertiary {\n  --ion-color-base: var(--ion-color-tertiary, #5260ff) !important;\n  --ion-color-base-rgb: var(--ion-color-tertiary-rgb, 82, 96, 255) !important;\n  --ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-tertiary-shade, #4854e0) !important;\n  --ion-color-tint: var(--ion-color-tertiary-tint, #6370ff) !important;\n}\n\n.ion-color-success {\n  --ion-color-base: var(--ion-color-success, #2dd36f) !important;\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-success-shade, #28ba62) !important;\n  --ion-color-tint: var(--ion-color-success-tint, #42d77d) !important;\n}\n\n.ion-color-warning {\n  --ion-color-base: var(--ion-color-warning, #ffc409) !important;\n  --ion-color-base-rgb: var(--ion-color-warning-rgb, 255, 196, 9) !important;\n  --ion-color-contrast: var(--ion-color-warning-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-warning-shade, #e0ac08) !important;\n  --ion-color-tint: var(--ion-color-warning-tint, #ffca22) !important;\n}\n\n.ion-color-danger {\n  --ion-color-base: var(--ion-color-danger, #eb445a) !important;\n  --ion-color-base-rgb: var(--ion-color-danger-rgb, 235, 68, 90) !important;\n  --ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-danger-shade, #cf3c4f) !important;\n  --ion-color-tint: var(--ion-color-danger-tint, #ed576b) !important;\n}\n\n.ion-color-light {\n  --ion-color-base: var(--ion-color-light, #f4f5f8) !important;\n  --ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;\n  --ion-color-contrast: var(--ion-color-light-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;\n  --ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important;\n}\n\n.ion-color-medium {\n  --ion-color-base: var(--ion-color-medium, #92949c) !important;\n  --ion-color-base-rgb: var(--ion-color-medium-rgb, 146, 148, 156) !important;\n  --ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-medium-shade, #808289) !important;\n  --ion-color-tint: var(--ion-color-medium-tint, #9d9fa6) !important;\n}\n\n.ion-color-dark {\n  --ion-color-base: var(--ion-color-dark, #222428) !important;\n  --ion-color-base-rgb: var(--ion-color-dark-rgb, 34, 36, 40) !important;\n  --ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;\n  --ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important;\n}\n\n.ion-page {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: flex;\n  position: absolute;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  contain: layout size style;\n  overflow: hidden;\n  z-index: 0;\n}\n\n.split-pane-visible > .ion-page.split-pane-main {\n  position: relative;\n}\n\nion-route,\nion-route-redirect,\nion-router,\nion-select-option,\nion-nav-controller,\nion-menu-controller,\nion-action-sheet-controller,\nion-alert-controller,\nion-loading-controller,\nion-modal-controller,\nion-picker-controller,\nion-popover-controller,\nion-toast-controller,\n.ion-page-hidden,\n[hidden] {\n  /* stylelint-disable-next-line declaration-no-important */\n  display: none !important;\n}\n\n.ion-page-invisible {\n  opacity: 0;\n}\n\n.can-go-back > ion-header ion-back-button {\n  display: block;\n}\n\nhtml.plt-ios.plt-hybrid, html.plt-ios.plt-pwa {\n  --ion-statusbar-padding: 20px;\n}\n\n@supports (padding-top: 20px) {\n  html {\n    --ion-safe-area-top: var(--ion-statusbar-padding);\n  }\n}\n\n@supports (padding-top: constant(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: constant(safe-area-inset-top);\n    --ion-safe-area-bottom: constant(safe-area-inset-bottom);\n    --ion-safe-area-left: constant(safe-area-inset-left);\n    --ion-safe-area-right: constant(safe-area-inset-right);\n  }\n}\n\n@supports (padding-top: env(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: env(safe-area-inset-top);\n    --ion-safe-area-bottom: env(safe-area-inset-bottom);\n    --ion-safe-area-left: env(safe-area-inset-left);\n    --ion-safe-area-right: env(safe-area-inset-right);\n  }\n}\n\nion-card.ion-color .ion-inherit-color,\nion-card-header.ion-color .ion-inherit-color {\n  color: inherit;\n}\n\n.menu-content {\n  -webkit-transform: translate3d(0,  0,  0);\n          transform: translate3d(0,  0,  0);\n}\n\n.menu-content-open {\n  cursor: pointer;\n  touch-action: manipulation;\n  pointer-events: none;\n}\n\n.ios .menu-content-reveal {\n  box-shadow: -8px 0 42px rgba(0, 0, 0, 0.08);\n}\n\n[dir=rtl].ios .menu-content-reveal {\n  box-shadow: 8px 0 42px rgba(0, 0, 0, 0.08);\n}\n\n.md .menu-content-reveal {\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\n}\n\n.md .menu-content-push {\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\n}\n\n/*# sourceMappingURL=core.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL2NvcmUuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvY29yZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL3RoZW1lcy9pb25pYy5taXhpbnMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvdGhlbWVzL2lvbmljLmdsb2JhbHMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY29tcG9uZW50cy9tZW51L21lbnUuaW9zLnZhcnMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY29tcG9uZW50cy9tZW51L21lbnUubWQudmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0UsNkZBQUE7QUNQRjs7QURTQTtFQUNFLDBEQUFBO0FDTkY7O0FEU0E7RUFDRSwwQ0FBQTtBQ05GOztBRFNBO0VBQ0UsdUNBQUE7QUNORjs7QURTQTtFQUNFLGdCQUFBO0FDTkY7O0FEbUJBO0VBQ0UsZ0JBQUE7QUNoQkY7O0FEc0JBO0VBQ0Usc0JBQUE7QUNuQkY7O0FENENFO0VBVEEsOERBQUE7RUFDQSwyRUFBQTtFQUNBLHdFQUFBO0VBQ0EseUZBQUE7RUFDQSxxRUFBQTtFQUNBLG1FQUFBO0FDL0JGOztBRG1DRTtFQVRBLGdFQUFBO0VBQ0EsNkVBQUE7RUFDQSwwRUFBQTtFQUNBLDJGQUFBO0VBQ0EsdUVBQUE7RUFDQSxxRUFBQTtBQ3RCRjs7QUQwQkU7RUFUQSwrREFBQTtFQUNBLDJFQUFBO0VBQ0EseUVBQUE7RUFDQSwwRkFBQTtFQUNBLHNFQUFBO0VBQ0Esb0VBQUE7QUNiRjs7QURpQkU7RUFUQSw4REFBQTtFQUNBLDJFQUFBO0VBQ0Esd0VBQUE7RUFDQSx5RkFBQTtFQUNBLHFFQUFBO0VBQ0EsbUVBQUE7QUNKRjs7QURRRTtFQVRBLDhEQUFBO0VBQ0EsMEVBQUE7RUFDQSx3RUFBQTtFQUNBLG1GQUFBO0VBQ0EscUVBQUE7RUFDQSxtRUFBQTtBQ0tGOztBRERFO0VBVEEsNkRBQUE7RUFDQSx5RUFBQTtFQUNBLHVFQUFBO0VBQ0Esd0ZBQUE7RUFDQSxvRUFBQTtFQUNBLGtFQUFBO0FDY0Y7O0FEVkU7RUFUQSw0REFBQTtFQUNBLDBFQUFBO0VBQ0Esc0VBQUE7RUFDQSxpRkFBQTtFQUNBLG1FQUFBO0VBQ0EsaUVBQUE7QUN1QkY7O0FEbkJFO0VBVEEsNkRBQUE7RUFDQSwyRUFBQTtFQUNBLHVFQUFBO0VBQ0Esd0ZBQUE7RUFDQSxvRUFBQTtFQUNBLGtFQUFBO0FDZ0NGOztBRDVCRTtFQVRBLDJEQUFBO0VBQ0Esc0VBQUE7RUFDQSxxRUFBQTtFQUNBLHNGQUFBO0VBQ0Esa0VBQUE7RUFDQSxnRUFBQTtBQ3lDRjs7QUQ1QkE7RUV1UE0sT0Z0UHVCO0VFdVB2QixRRnZQaUI7RUVnUnJCLE1GaFJrQjtFRWlSbEIsU0ZqUndCO0VBRXhCLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGtCQUFBO0VBRUEsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUVBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVR3hDK0I7QUZ1RWpDOztBRDVCQTtFQUNFLGtCQUFBO0FDK0JGOztBRDVCQTs7Ozs7Ozs7Ozs7Ozs7O0VBZUUseURBQUE7RUFDQSx3QkFBQTtBQytCRjs7QUQ1QkE7RUFDRSxVQUFBO0FDK0JGOztBRDVCQTtFQUNFLGNBQUE7QUMrQkY7O0FEeEJBO0VBQ0UsNkJBQUE7QUMyQkY7O0FEeEJBO0VBQ0U7SUFDRSxpREFBQTtFQzJCRjtBQUNGOztBRHZCQTtFQUNFO0lBQ0Usa0RBQUE7SUFDQSx3REFBQTtJQUNBLG9EQUFBO0lBQ0Esc0RBQUE7RUN5QkY7QUFDRjs7QUR0QkE7RUFDRTtJQUNFLDZDQUFBO0lBQ0EsbURBQUE7SUFDQSwrQ0FBQTtJQUNBLGlEQUFBO0VDd0JGO0FBQ0Y7O0FEakJBOztFQUVFLGNBQUE7QUNtQkY7O0FEWEE7RUVrV00seUNBQUE7VUFBQSxpQ0FBQTtBRG5WTjs7QURYQTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUlBLG9CQUFBO0FDV0Y7O0FEUkE7RUFDRSwyQ0k3SytCO0FId0xqQzs7QURSQTtFQUNFLDBDSTlLK0I7QUh5TGpDOztBREpBO0VBQ0UsNENLNUw4QjtBSm1NaEM7O0FESkE7RUFDRSw0Q0toTThCO0FKdU1oQzs7QUFFQSxtQ0FBbUMiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9jb3JlLmNzcyJ9 */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@ionic/angular/css/flex-utils.css":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/@ionic/angular/css/flex-utils.css ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".ion-align-self-start {\n  align-self: flex-start !important;\n}\n\n.ion-align-self-end {\n  align-self: flex-end !important;\n}\n\n.ion-align-self-center {\n  align-self: center !important;\n}\n\n.ion-align-self-stretch {\n  align-self: stretch !important;\n}\n\n.ion-align-self-baseline {\n  align-self: baseline !important;\n}\n\n.ion-align-self-auto {\n  align-self: auto !important;\n}\n\n.ion-wrap {\n  flex-wrap: wrap !important;\n}\n\n.ion-nowrap {\n  flex-wrap: nowrap !important;\n}\n\n.ion-wrap-reverse {\n  flex-wrap: wrap-reverse !important;\n}\n\n.ion-justify-content-start {\n  -webkit-box-pack: start !important;\n          justify-content: flex-start !important;\n}\n\n.ion-justify-content-center {\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n}\n\n.ion-justify-content-end {\n  -webkit-box-pack: end !important;\n          justify-content: flex-end !important;\n}\n\n.ion-justify-content-around {\n  justify-content: space-around !important;\n}\n\n.ion-justify-content-between {\n  -webkit-box-pack: justify !important;\n          justify-content: space-between !important;\n}\n\n.ion-justify-content-evenly {\n  -webkit-box-pack: space-evenly !important;\n          justify-content: space-evenly !important;\n}\n\n.ion-align-items-start {\n  -webkit-box-align: start !important;\n          align-items: flex-start !important;\n}\n\n.ion-align-items-center {\n  -webkit-box-align: center !important;\n          align-items: center !important;\n}\n\n.ion-align-items-end {\n  -webkit-box-align: end !important;\n          align-items: flex-end !important;\n}\n\n.ion-align-items-stretch {\n  -webkit-box-align: stretch !important;\n          align-items: stretch !important;\n}\n\n.ion-align-items-baseline {\n  -webkit-box-align: baseline !important;\n          align-items: baseline !important;\n}\n\n/*# sourceMappingURL=flex-utils.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL2ZsZXgtdXRpbHMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvZmxleC11dGlscy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7RUFDRSxpQ0FBQTtBQ1BGOztBRFVBO0VBQ0UsK0JBQUE7QUNQRjs7QURVQTtFQUNFLDZCQUFBO0FDUEY7O0FEVUE7RUFDRSw4QkFBQTtBQ1BGOztBRFVBO0VBQ0UsK0JBQUE7QUNQRjs7QURVQTtFQUNFLDJCQUFBO0FDUEY7O0FEY0E7RUFDRSwwQkFBQTtBQ1hGOztBRGNBO0VBQ0UsNEJBQUE7QUNYRjs7QURjQTtFQUNFLGtDQUFBO0FDWEY7O0FEa0JBO0VBQ0Usa0NBQUE7VUFBQSxzQ0FBQTtBQ2ZGOztBRGtCQTtFQUNFLG1DQUFBO1VBQUEsa0NBQUE7QUNmRjs7QURrQkE7RUFDRSxnQ0FBQTtVQUFBLG9DQUFBO0FDZkY7O0FEa0JBO0VBQ0Usd0NBQUE7QUNmRjs7QURrQkE7RUFDRSxvQ0FBQTtVQUFBLHlDQUFBO0FDZkY7O0FEa0JBO0VBQ0UseUNBQUE7VUFBQSx3Q0FBQTtBQ2ZGOztBRHNCQTtFQUNFLG1DQUFBO1VBQUEsa0NBQUE7QUNuQkY7O0FEc0JBO0VBQ0Usb0NBQUE7VUFBQSw4QkFBQTtBQ25CRjs7QURzQkE7RUFDRSxpQ0FBQTtVQUFBLGdDQUFBO0FDbkJGOztBRHNCQTtFQUNFLHFDQUFBO1VBQUEsK0JBQUE7QUNuQkY7O0FEc0JBO0VBQ0Usc0NBQUE7VUFBQSxnQ0FBQTtBQ25CRjs7QUFFQSx5Q0FBeUMiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9mbGV4LXV0aWxzLmNzcyJ9 */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@ionic/angular/css/float-elements.css":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/@ionic/angular/css/float-elements.css ***!
  \*****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".ion-float-left {\n  float: left !important;\n}\n\n.ion-float-right {\n  float: right !important;\n}\n\n.ion-float-start {\n  float: left !important;\n}\n\n[dir=rtl] .ion-float-start, :host-context([dir=rtl]) .ion-float-start {\n  float: right !important;\n}\n\n.ion-float-end {\n  float: right !important;\n}\n\n[dir=rtl] .ion-float-end, :host-context([dir=rtl]) .ion-float-end {\n  float: left !important;\n}\n\n@media (min-width: 576px) {\n  .ion-float-sm-left {\n    float: left !important;\n  }\n\n  .ion-float-sm-right {\n    float: right !important;\n  }\n\n  .ion-float-sm-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-sm-start, :host-context([dir=rtl]) .ion-float-sm-start {\n    float: right !important;\n  }\n\n  .ion-float-sm-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-sm-end, :host-context([dir=rtl]) .ion-float-sm-end {\n    float: left !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .ion-float-md-left {\n    float: left !important;\n  }\n\n  .ion-float-md-right {\n    float: right !important;\n  }\n\n  .ion-float-md-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-md-start, :host-context([dir=rtl]) .ion-float-md-start {\n    float: right !important;\n  }\n\n  .ion-float-md-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-md-end, :host-context([dir=rtl]) .ion-float-md-end {\n    float: left !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .ion-float-lg-left {\n    float: left !important;\n  }\n\n  .ion-float-lg-right {\n    float: right !important;\n  }\n\n  .ion-float-lg-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-lg-start, :host-context([dir=rtl]) .ion-float-lg-start {\n    float: right !important;\n  }\n\n  .ion-float-lg-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-lg-end, :host-context([dir=rtl]) .ion-float-lg-end {\n    float: left !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .ion-float-xl-left {\n    float: left !important;\n  }\n\n  .ion-float-xl-right {\n    float: right !important;\n  }\n\n  .ion-float-xl-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-xl-start, :host-context([dir=rtl]) .ion-float-xl-start {\n    float: right !important;\n  }\n\n  .ion-float-xl-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-xl-end, :host-context([dir=rtl]) .ion-float-xl-end {\n    float: left !important;\n  }\n}\n\n/*# sourceMappingURL=float-elements.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL2Zsb2F0LWVsZW1lbnRzLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL3RoZW1lcy9pb25pYy5taXhpbnMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvZmxvYXQtZWxlbWVudHMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNJO0VDbWFFLHNCQUFBO0FDL2FOOztBRmdCSTtFQytaRSx1QkFBQTtBQzNhTjs7QUZnQkk7RUM2WUUsc0JBQUE7QUN6Wk47O0FENExXO0VBZ09MLHVCQUFBO0FDelpOOztBRmFJO0VDZ1pFLHVCQUFBO0FDelpOOztBRHFMVztFQXVPTCxzQkFBQTtBQ3paTjs7QUQ0R0k7RURsSEE7SUNtYUUsc0JBQUE7RUN4Wko7O0VGUEU7SUMrWkUsdUJBQUE7RUNwWko7O0VGUEU7SUM2WUUsc0JBQUE7RUNsWUo7RURxS1M7SUFnT0wsdUJBQUE7RUNsWUo7O0VGVkU7SUNnWkUsdUJBQUE7RUNsWUo7RUQ4SlM7SUF1T0wsc0JBQUE7RUNsWUo7QUFDRjs7QURvRkk7RURsSEE7SUNtYUUsc0JBQUE7RUNqWUo7O0VGOUJFO0lDK1pFLHVCQUFBO0VDN1hKOztFRjlCRTtJQzZZRSxzQkFBQTtFQzNXSjtFRDhJUztJQWdPTCx1QkFBQTtFQzNXSjs7RUZqQ0U7SUNnWkUsdUJBQUE7RUMzV0o7RUR1SVM7SUF1T0wsc0JBQUE7RUMzV0o7QUFDRjs7QUQ2REk7RURsSEE7SUNtYUUsc0JBQUE7RUMxV0o7O0VGckRFO0lDK1pFLHVCQUFBO0VDdFdKOztFRnJERTtJQzZZRSxzQkFBQTtFQ3BWSjtFRHVIUztJQWdPTCx1QkFBQTtFQ3BWSjs7RUZ4REU7SUNnWkUsdUJBQUE7RUNwVko7RURnSFM7SUF1T0wsc0JBQUE7RUNwVko7QUFDRjs7QURzQ0k7RURsSEE7SUNtYUUsc0JBQUE7RUNuVko7O0VGNUVFO0lDK1pFLHVCQUFBO0VDL1VKOztFRjVFRTtJQzZZRSxzQkFBQTtFQzdUSjtFRGdHUztJQWdPTCx1QkFBQTtFQzdUSjs7RUYvRUU7SUNnWkUsdUJBQUE7RUM3VEo7RUR5RlM7SUF1T0wsc0JBQUE7RUM3VEo7QUFDRjs7QUFFQSw2Q0FBNkMiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9mbG9hdC1lbGVtZW50cy5jc3MifQ== */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@ionic/angular/css/normalize.css":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/@ionic/angular/css/normalize.css ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "audio,\ncanvas,\nprogress,\nvideo {\n  vertical-align: baseline;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\nb,\nstrong {\n  font-weight: bold;\n}\n\nimg {\n  max-width: 100%;\n  border: 0;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\nfigure {\n  margin: 1em 40px;\n}\n\nhr {\n  height: 1px;\n  border-width: 0;\n  box-sizing: content-box;\n}\n\npre {\n  overflow: auto;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\nlabel,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  line-height: normal;\n}\n\ntextarea {\n  overflow: auto;\n  height: auto;\n  font: inherit;\n  color: inherit;\n}\n\ntextarea::-webkit-input-placeholder {\n  padding-left: 2px;\n}\n\ntextarea::-moz-placeholder {\n  padding-left: 2px;\n}\n\ntextarea::-ms-input-placeholder {\n  padding-left: 2px;\n}\n\ntextarea::placeholder {\n  padding-left: 2px;\n}\n\nform,\ninput,\noptgroup,\nselect {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n}\n\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n\na,\na div,\na span,\na ion-icon,\na ion-label,\nbutton,\nbutton div,\nbutton span,\nbutton ion-icon,\nbutton ion-label,\n.ion-tappable,\n[tappable],\n[tappable] div,\n[tappable] span,\n[tappable] ion-icon,\n[tappable] ion-label,\ninput,\ntextarea {\n  touch-action: manipulation;\n}\n\na ion-label,\nbutton ion-label {\n  pointer-events: none;\n}\n\nbutton {\n  border: 0;\n  border-radius: 0;\n  font-family: inherit;\n  font-style: inherit;\n  font-variant: inherit;\n  line-height: 1;\n  text-transform: none;\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n\n[tappable] {\n  cursor: pointer;\n}\n\na[disabled],\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\ninput[type=checkbox],\ninput[type=radio] {\n  padding: 0;\n  box-sizing: border-box;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n\n/*# sourceMappingURL=normalize.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL25vcm1hbGl6ZS5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9ub3JtYWxpemUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BOzs7O0VBSUUsd0JBQUE7QUNORjs7QURXQTtFQUNFLGFBQUE7RUFFQSxTQUFBO0FDVEY7O0FEaUJBOztFQUVFLGlCQUFBO0FDZEY7O0FEc0JBO0VBQ0UsZUFBQTtFQUVBLFNBQUE7QUNwQkY7O0FEd0JBO0VBQ0UsZ0JBQUE7QUNyQkY7O0FENkJBO0VBQ0UsZ0JBQUE7QUMxQkY7O0FENkJBO0VBQ0UsV0FBQTtFQUVBLGVBQUE7RUFFQSx1QkFBQTtBQzVCRjs7QURnQ0E7RUFDRSxjQUFBO0FDN0JGOztBRGlDQTs7OztFQUlFLGlDQUFBO0VBQ0EsY0FBQTtBQzlCRjs7QUQ4Q0E7Ozs7RUFJRSxvQkFBQTtFQUNBLG1CQUFBO0FDM0NGOztBRDhDQTtFQUNFLGNBQUE7RUFFQSxZQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7QUM3Q0Y7O0FEZ0RBO0VBQ0UsaUJBQUE7QUM3Q0Y7O0FENENBO0VBQ0UsaUJBQUE7QUM3Q0Y7O0FENENBO0VBQ0UsaUJBQUE7QUM3Q0Y7O0FENENBO0VBQ0UsaUJBQUE7QUM3Q0Y7O0FEZ0RBOzs7O0VBSUUsU0FBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0FDOUNGOztBRHNEQTs7O0VBR0UsZUFBQTtFQUVBLDBCQUFBO0FDcERGOztBRHdEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0JFLDBCQUFBO0FDckRGOztBRHdEQTs7RUFFRSxvQkFBQTtBQ3JERjs7QUR3REE7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBRUEsMEJBQUE7QUN0REY7O0FEeURBO0VBQ0UsZUFBQTtBQ3RERjs7QUQwREE7OztFQUdFLGVBQUE7QUN2REY7O0FEMkRBOztFQUVFLFVBQUE7RUFFQSxTQUFBO0FDekRGOztBRCtEQTs7RUFFRSxVQUFBO0VBRUEsc0JBQUE7QUM3REY7O0FEbUVBOztFQUVFLFlBQUE7QUNoRUY7O0FEc0VBOztFQUVFLHdCQUFBO0FDbkVGOztBRDJFQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUN4RUY7O0FEMkVBOztFQUVFLFVBQUE7QUN4RUY7O0FBRUEsd0NBQXdDIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3Mvbm9ybWFsaXplLmNzcyJ9 */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@ionic/angular/css/padding.css":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/@ionic/angular/css/padding.css ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".ion-no-padding {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.ion-padding {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n\n.ion-padding-top {\n  --padding-top: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n}\n\n.ion-padding-start {\n  --padding-start: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding-start {\n    padding-left: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n  }\n}\n\n.ion-padding-end {\n  --padding-end: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding-end {\n    padding-right: unset;\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n\n.ion-padding-bottom {\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n\n.ion-padding-vertical {\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n\n.ion-padding-horizontal {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding-horizontal {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n\n.ion-no-margin {\n  --margin-start: 0;\n  --margin-end: 0;\n  --margin-top: 0;\n  --margin-bottom: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.ion-margin {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n\n.ion-margin-top {\n  --margin-top: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n}\n\n.ion-margin-start {\n  --margin-start: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin-start {\n    margin-left: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n  }\n}\n\n.ion-margin-end {\n  --margin-end: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin-end {\n    margin-right: unset;\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n\n.ion-margin-bottom {\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n\n.ion-margin-vertical {\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n\n.ion-margin-horizontal {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin-horizontal {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n\n/*# sourceMappingURL=padding.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3BhZGRpbmcuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvdGhlbWVzL2lvbmljLm1peGlucy5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9wYWRkaW5nLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQzhORSxlRDVOZTtFQzZOZixnQkQ3TmU7RUNpUWpCLGNEalFpQjtFQ2tRakIsaUJEbFFpQjtBRWJuQjs7QUZnQkE7RUFDRSx5Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQ0FBQTtFQ3lORSxzQ0Q1T007RUM2T04sdUNEN09NO0VDNlFSLHFDRDdRUTtFQzhRUix3Q0Q5UVE7QUVVVjs7QURzT007RUFDRTtJQUVJLG1CQUFBO0lBR0Esb0JBQUE7SUFHRiwrQ0R6UEE7SUMwUEEsOENEMVBBO0lDMlBBLDZDRDNQQTtJQzRQQSw0Q0Q1UEE7RUVtQlI7QUFDRjs7QUZJQTtFQUNFLHVDQUFBO0VDb1BBLHFDRDdRUTtBRXlCVjs7QUZLQTtFQUNFLHlDQUFBO0VDNk1FLHNDRDVPTTtBRTZCVjs7QURtTk07RUFDRTtJQUVJLG1CQUFBO0lBTUYsK0NEelBBO0lDMFBBLDhDRDFQQTtFRW1DUjtBQUNGOztBRkFBO0VBQ0UsdUNBQUE7RUN3TUUsdUNEN09NO0FFeUNWOztBRHVNTTtFQUNFO0lBS0ksb0JBQUE7SUFLRiw2Q0QzUEE7SUM0UEEsNENENVBBO0VFK0NSO0FBQ0Y7O0FGTkE7RUFDRSwwQ0FBQTtFQ21PQSx3Q0Q5UVE7QUVxRFY7O0FGTEE7RUFDRSx1Q0FBQTtFQUNBLDBDQUFBO0VDMk5BLHFDRDdRUTtFQzhRUix3Q0Q5UVE7QUUyRFY7O0FGSkE7RUFDRSx5Q0FBQTtFQUNBLHVDQUFBO0VDbUxFLHNDRDVPTTtFQzZPTix1Q0Q3T007QUVpRVY7O0FEK0tNO0VBQ0U7SUFFSSxtQkFBQTtJQUdBLG9CQUFBO0lBR0YsK0NEelBBO0lDMFBBLDhDRDFQQTtJQzJQQSw2Q0QzUEE7SUM0UEEsNENENVBBO0VFMEVSO0FBQ0Y7O0FGVEE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUNrS0UsY0RoS2M7RUNpS2QsZURqS2M7RUNxTWhCLGFEck1nQjtFQ3NNaEIsZ0JEdE1nQjtBRWNsQjs7QUZYQTtFQUNFLHVDQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHdDQUFBO0VDNkpFLG9DRDNPSztFQzRPTCxxQ0Q1T0s7RUM0UVAsbUNENVFPO0VDNlFQLHNDRDdRTztBRWdHVDs7QUQrSU07RUFDRTtJQUVJLGtCQUFBO0lBR0EsbUJBQUE7SUFHRiw2Q0R4UEQ7SUN5UEMsNENEelBEO0lDMFBDLDJDRDFQRDtJQzJQQywwQ0QzUEQ7RUV5R1A7QUFDRjs7QUZ2QkE7RUFDRSxxQ0FBQTtFQ3dMQSxtQ0Q1UU87QUUrR1Q7O0FGdEJBO0VBQ0UsdUNBQUE7RUNpSkUsb0NEM09LO0FFbUhUOztBRDRITTtFQUNFO0lBRUksa0JBQUE7SUFNRiw2Q0R4UEQ7SUN5UEMsNENEelBEO0VFeUhQO0FBQ0Y7O0FGM0JBO0VBQ0UscUNBQUE7RUM0SUUscUNENU9LO0FFK0hUOztBRGdITTtFQUNFO0lBS0ksbUJBQUE7SUFLRiwyQ0QxUEQ7SUMyUEMsMENEM1BEO0VFcUlQO0FBQ0Y7O0FGakNBO0VBQ0Usd0NBQUE7RUN1S0Esc0NEN1FPO0FFMklUOztBRmhDQTtFQUNFLHFDQUFBO0VBQ0Esd0NBQUE7RUMrSkEsbUNENVFPO0VDNlFQLHNDRDdRTztBRWlKVDs7QUYvQkE7RUFDRSx1Q0FBQTtFQUNBLHFDQUFBO0VDdUhFLG9DRDNPSztFQzRPTCxxQ0Q1T0s7QUV1SlQ7O0FEd0ZNO0VBQ0U7SUFFSSxrQkFBQTtJQUdBLG1CQUFBO0lBR0YsNkNEeFBEO0lDeVBDLDRDRHpQRDtJQzBQQywyQ0QxUEQ7SUMyUEMsMENEM1BEO0VFZ0tQO0FBQ0Y7O0FBRUEsc0NBQXNDIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvcGFkZGluZy5jc3MifQ== */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@ionic/angular/css/structure.css":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/@ionic/angular/css/structure.css ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n\nhtml {\n  width: 100%;\n  height: 100%;\n  -webkit-text-size-adjust: 100%;\n     -moz-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n}\n\nhtml:not(.hydrated) body {\n  display: none;\n}\n\nhtml.plt-pwa {\n  height: 100vh;\n}\n\nbody {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  position: fixed;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  max-height: 100%;\n  text-rendering: optimizeLegibility;\n  overflow: hidden;\n  touch-action: manipulation;\n  -webkit-user-drag: none;\n  -ms-content-zooming: none;\n  word-wrap: break-word;\n  overscroll-behavior-y: none;\n  -webkit-text-size-adjust: none;\n     -moz-text-size-adjust: none;\n      -ms-text-size-adjust: none;\n          text-size-adjust: none;\n}\n\n/*# sourceMappingURL=structure.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3N0cnVjdHVyZS5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9zdHJ1Y3R1cmUuY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy90aGVtZXMvaW9uaWMubWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7RUFDRSxzQkFBQTtFQUVBLDZDQUFBO0VBQ0Esd0NBQUE7RUFDQSwyQkFBQTtBQ1RGOztBRFlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFFQSw4QkFBQTtLQUFBLDJCQUFBO01BQUEsMEJBQUE7VUFBQSxzQkFBQTtBQ1ZGOztBRGFBO0VBQ0UsYUFBQTtBQ1ZGOztBRGFBO0VBQ0UsYUFBQTtBQ1ZGOztBRGFBO0VFNkNFLGtDQUFBO0VBQ0EsbUNBQUE7RUFvS0UsY0ZoTmM7RUVpTmQsZUZqTmM7RUVxUGhCLGFGclBnQjtFRXNQaEIsZ0JGdFBnQjtFRWdOZCxlRi9NZTtFRWdOZixnQkZoTmU7RUVvUGpCLGNGcFBpQjtFRXFQakIsaUJGclBpQjtFQUVqQixlQUFBO0VBRUEsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQ0FBQTtFQUVBLGdCQUFBO0VBRUEsMEJBQUE7RUFFQSx1QkFBQTtFQUVBLHlCQUFBO0VBRUEscUJBQUE7RUFFQSwyQkFBQTtFQUVBLDhCQUFBO0tBQUEsMkJBQUE7TUFBQSwwQkFBQTtVQUFBLHNCQUFBO0FDYkY7O0FBRUEsd0NBQXdDIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3Mvc3RydWN0dXJlLmNzcyJ9 */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@ionic/angular/css/text-alignment.css":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/@ionic/angular/css/text-alignment.css ***!
  \*****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".ion-text-center {\n  text-align: center !important;\n}\n\n.ion-text-justify {\n  text-align: justify !important;\n}\n\n.ion-text-start {\n  text-align: start !important;\n}\n\n.ion-text-end {\n  text-align: end !important;\n}\n\n.ion-text-left {\n  text-align: left !important;\n}\n\n.ion-text-right {\n  text-align: right !important;\n}\n\n.ion-text-nowrap {\n  white-space: nowrap !important;\n}\n\n.ion-text-wrap {\n  white-space: normal !important;\n}\n\n@media (min-width: 576px) {\n  .ion-text-sm-center {\n    text-align: center !important;\n  }\n\n  .ion-text-sm-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-sm-start {\n    text-align: start !important;\n  }\n\n  .ion-text-sm-end {\n    text-align: end !important;\n  }\n\n  .ion-text-sm-left {\n    text-align: left !important;\n  }\n\n  .ion-text-sm-right {\n    text-align: right !important;\n  }\n\n  .ion-text-sm-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-sm-wrap {\n    white-space: normal !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .ion-text-md-center {\n    text-align: center !important;\n  }\n\n  .ion-text-md-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-md-start {\n    text-align: start !important;\n  }\n\n  .ion-text-md-end {\n    text-align: end !important;\n  }\n\n  .ion-text-md-left {\n    text-align: left !important;\n  }\n\n  .ion-text-md-right {\n    text-align: right !important;\n  }\n\n  .ion-text-md-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-md-wrap {\n    white-space: normal !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .ion-text-lg-center {\n    text-align: center !important;\n  }\n\n  .ion-text-lg-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-lg-start {\n    text-align: start !important;\n  }\n\n  .ion-text-lg-end {\n    text-align: end !important;\n  }\n\n  .ion-text-lg-left {\n    text-align: left !important;\n  }\n\n  .ion-text-lg-right {\n    text-align: right !important;\n  }\n\n  .ion-text-lg-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-lg-wrap {\n    white-space: normal !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .ion-text-xl-center {\n    text-align: center !important;\n  }\n\n  .ion-text-xl-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-xl-start {\n    text-align: start !important;\n  }\n\n  .ion-text-xl-end {\n    text-align: end !important;\n  }\n\n  .ion-text-xl-left {\n    text-align: left !important;\n  }\n\n  .ion-text-xl-right {\n    text-align: right !important;\n  }\n\n  .ion-text-xl-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-xl-wrap {\n    white-space: normal !important;\n  }\n}\n\n/*# sourceMappingURL=text-alignment.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3RleHQtYWxpZ25tZW50LnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtYWxpZ25tZW50LmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvdGhlbWVzL2lvbmljLm1peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNJO0VBQ0UsNkJBQUE7QUNiTjs7QURnQkk7RUFDRSw4QkFBQTtBQ2JOOztBRGdCSTtFQUNFLDRCQUFBO0FDYk47O0FEZ0JJO0VBQ0UsMEJBQUE7QUNiTjs7QURnQkk7RUFDRSwyQkFBQTtBQ2JOOztBRGdCSTtFQUNFLDRCQUFBO0FDYk47O0FEZ0JJO0VBQ0UsOEJBQUE7QUNiTjs7QURnQkk7RUFDRSw4QkFBQTtBQ2JOOztBQ2tHSTtFRmxIQTtJQUNFLDZCQUFBO0VDb0JKOztFRGpCRTtJQUNFLDhCQUFBO0VDb0JKOztFRGpCRTtJQUNFLDRCQUFBO0VDb0JKOztFRGpCRTtJQUNFLDBCQUFBO0VDb0JKOztFRGpCRTtJQUNFLDJCQUFBO0VDb0JKOztFRGpCRTtJQUNFLDRCQUFBO0VDb0JKOztFRGpCRTtJQUNFLDhCQUFBO0VDb0JKOztFRGpCRTtJQUNFLDhCQUFBO0VDb0JKO0FBQ0Y7O0FDZ0VJO0VGbEhBO0lBQ0UsNkJBQUE7RUNxREo7O0VEbERFO0lBQ0UsOEJBQUE7RUNxREo7O0VEbERFO0lBQ0UsNEJBQUE7RUNxREo7O0VEbERFO0lBQ0UsMEJBQUE7RUNxREo7O0VEbERFO0lBQ0UsMkJBQUE7RUNxREo7O0VEbERFO0lBQ0UsNEJBQUE7RUNxREo7O0VEbERFO0lBQ0UsOEJBQUE7RUNxREo7O0VEbERFO0lBQ0UsOEJBQUE7RUNxREo7QUFDRjs7QUMrQkk7RUZsSEE7SUFDRSw2QkFBQTtFQ3NGSjs7RURuRkU7SUFDRSw4QkFBQTtFQ3NGSjs7RURuRkU7SUFDRSw0QkFBQTtFQ3NGSjs7RURuRkU7SUFDRSwwQkFBQTtFQ3NGSjs7RURuRkU7SUFDRSwyQkFBQTtFQ3NGSjs7RURuRkU7SUFDRSw0QkFBQTtFQ3NGSjs7RURuRkU7SUFDRSw4QkFBQTtFQ3NGSjs7RURuRkU7SUFDRSw4QkFBQTtFQ3NGSjtBQUNGOztBQ0ZJO0VGbEhBO0lBQ0UsNkJBQUE7RUN1SEo7O0VEcEhFO0lBQ0UsOEJBQUE7RUN1SEo7O0VEcEhFO0lBQ0UsNEJBQUE7RUN1SEo7O0VEcEhFO0lBQ0UsMEJBQUE7RUN1SEo7O0VEcEhFO0lBQ0UsMkJBQUE7RUN1SEo7O0VEcEhFO0lBQ0UsNEJBQUE7RUN1SEo7O0VEcEhFO0lBQ0UsOEJBQUE7RUN1SEo7O0VEcEhFO0lBQ0UsOEJBQUE7RUN1SEo7QUFDRjs7QUFFQSw2Q0FBNkMiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy90ZXh0LWFsaWdubWVudC5jc3MifQ== */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@ionic/angular/css/text-transformation.css":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/@ionic/angular/css/text-transformation.css ***!
  \**********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".ion-text-uppercase {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: uppercase !important;\n}\n\n.ion-text-lowercase {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: lowercase !important;\n}\n\n.ion-text-capitalize {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: capitalize !important;\n}\n\n@media (min-width: 576px) {\n  .ion-text-sm-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-sm-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-sm-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .ion-text-md-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-md-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-md-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .ion-text-lg-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-lg-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-lg-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .ion-text-xl-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-xl-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-xl-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n\n/*# sourceMappingURL=text-transformation.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3RleHQtdHJhbnNmb3JtYXRpb24uc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvdGV4dC10cmFuc2Zvcm1hdGlvbi5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL3RoZW1lcy9pb25pYy5taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjSTtFQUNFLHlEQUFBO0VBQ0Esb0NBQUE7QUNiTjs7QURnQkk7RUFDRSx5REFBQTtFQUNBLG9DQUFBO0FDYk47O0FEZ0JJO0VBQ0UseURBQUE7RUFDQSxxQ0FBQTtBQ2JOOztBQ21ISTtFRmxIQTtJQUNFLHlEQUFBO0lBQ0Esb0NBQUE7RUNHSjs7RURBRTtJQUNFLHlEQUFBO0lBQ0Esb0NBQUE7RUNHSjs7RURBRTtJQUNFLHlEQUFBO0lBQ0EscUNBQUE7RUNHSjtBQUNGOztBQ2tHSTtFRmxIQTtJQUNFLHlEQUFBO0lBQ0Esb0NBQUE7RUNtQko7O0VEaEJFO0lBQ0UseURBQUE7SUFDQSxvQ0FBQTtFQ21CSjs7RURoQkU7SUFDRSx5REFBQTtJQUNBLHFDQUFBO0VDbUJKO0FBQ0Y7O0FDa0ZJO0VGbEhBO0lBQ0UseURBQUE7SUFDQSxvQ0FBQTtFQ21DSjs7RURoQ0U7SUFDRSx5REFBQTtJQUNBLG9DQUFBO0VDbUNKOztFRGhDRTtJQUNFLHlEQUFBO0lBQ0EscUNBQUE7RUNtQ0o7QUFDRjs7QUNrRUk7RUZsSEE7SUFDRSx5REFBQTtJQUNBLG9DQUFBO0VDbURKOztFRGhERTtJQUNFLHlEQUFBO0lBQ0Esb0NBQUE7RUNtREo7O0VEaERFO0lBQ0UseURBQUE7SUFDQSxxQ0FBQTtFQ21ESjtBQUNGOztBQUVBLGtEQUFrRCIsImZpbGUiOiJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtdHJhbnNmb3JtYXRpb24uY3NzIn0= */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@ionic/angular/css/typography.css":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/@ionic/angular/css/typography.css ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "html {\n  font-family: var(--ion-font-family);\n}\n\na {\n  background-color: transparent;\n  color: var(--ion-color-primary, #3880ff);\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 16px;\n  margin-bottom: 10px;\n  font-weight: 500;\n  line-height: 1.2;\n}\n\nh1 {\n  margin-top: 20px;\n  font-size: 26px;\n}\n\nh2 {\n  margin-top: 18px;\n  font-size: 24px;\n}\n\nh3 {\n  font-size: 22px;\n}\n\nh4 {\n  font-size: 20px;\n}\n\nh5 {\n  font-size: 18px;\n}\n\nh6 {\n  font-size: 16px;\n}\n\nsmall {\n  font-size: 75%;\n}\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/*# sourceMappingURL=typography.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3R5cG9ncmFwaHkuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvdHlwb2dyYXBoeS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL3RoZW1lcy9pb25pYy5taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQkE7RUFDRSxtQ0FBQTtBQzlCRjs7QURpQ0E7RUFDRSw2QkFBQTtFQUNBLHdDQUFBO0FDOUJGOztBRGlDQTs7Ozs7O0VFK09FLGdCRnpPZ0I7RUUwT2hCLG1CRjFPNEI7RUFFNUIsZ0JBeEM2QjtFQTBDN0IsZ0JBdkM2QjtBQ1EvQjs7QURrQ0E7RUVrT0UsZ0JGak9nQjtFQUVoQixlQTFDNkI7QUNTL0I7O0FEb0NBO0VFNE5FLGdCRjNOZ0I7RUFFaEIsZUE3QzZCO0FDVS9COztBRHNDQTtFQUNFLGVBOUM2QjtBQ1UvQjs7QUR1Q0E7RUFDRSxlQS9DNkI7QUNXL0I7O0FEdUNBO0VBQ0UsZUFoRDZCO0FDWS9COztBRHVDQTtFQUNFLGVBakQ2QjtBQ2EvQjs7QUR1Q0E7RUFDRSxjQUFBO0FDcENGOztBRHVDQTs7RUFFRSxrQkFBQTtFQUVBLGNBQUE7RUFFQSxjQUFBO0VBRUEsd0JBQUE7QUN2Q0Y7O0FEMENBO0VBQ0UsV0FBQTtBQ3ZDRjs7QUQwQ0E7RUFDRSxlQUFBO0FDdkNGOztBQUVBLHlDQUF5QyIsImZpbGUiOiJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3R5cG9ncmFwaHkuY3NzIn0= */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/global.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/global.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/*\n * App Global CSS\n * ----------------------------------------------------------------------------\n * Put style rules here that you want to apply globally. These styles are for\n * the entire app and not just one component. Additionally, this file can be\n * used as an entry point to import other CSS/Sass files to be included in the\n * output CSS.\n * For more information on global stylesheets, visit the documentation:\n * https://ionicframework.com/docs/layout/global-stylesheets\n */\n/* Core CSS required for Ionic components to work properly */\nhtml.ios {\n  --ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\n}\nhtml.md {\n  --ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif;\n}\nhtml {\n  --ion-font-family: var(--ion-default-font);\n}\nbody {\n  background: var(--ion-background-color);\n}\nbody.backdrop-no-scroll {\n  overflow: hidden;\n}\nhtml.ios ion-modal.modal-card .ion-page > ion-header > ion-toolbar:first-of-type {\n  padding-top: 0px;\n}\nhtml.ios ion-modal .ion-page {\n  border-radius: inherit;\n}\n.ion-color-primary {\n  --ion-color-base: var(--ion-color-primary, #3880ff) !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\n}\n.ion-color-secondary {\n  --ion-color-base: var(--ion-color-secondary, #3dc2ff) !important;\n  --ion-color-base-rgb: var(--ion-color-secondary-rgb, 61, 194, 255) !important;\n  --ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-secondary-shade, #36abe0) !important;\n  --ion-color-tint: var(--ion-color-secondary-tint, #50c8ff) !important;\n}\n.ion-color-tertiary {\n  --ion-color-base: var(--ion-color-tertiary, #5260ff) !important;\n  --ion-color-base-rgb: var(--ion-color-tertiary-rgb, 82, 96, 255) !important;\n  --ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-tertiary-shade, #4854e0) !important;\n  --ion-color-tint: var(--ion-color-tertiary-tint, #6370ff) !important;\n}\n.ion-color-success {\n  --ion-color-base: var(--ion-color-success, #2dd36f) !important;\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-success-shade, #28ba62) !important;\n  --ion-color-tint: var(--ion-color-success-tint, #42d77d) !important;\n}\n.ion-color-warning {\n  --ion-color-base: var(--ion-color-warning, #ffc409) !important;\n  --ion-color-base-rgb: var(--ion-color-warning-rgb, 255, 196, 9) !important;\n  --ion-color-contrast: var(--ion-color-warning-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-warning-shade, #e0ac08) !important;\n  --ion-color-tint: var(--ion-color-warning-tint, #ffca22) !important;\n}\n.ion-color-danger {\n  --ion-color-base: var(--ion-color-danger, #eb445a) !important;\n  --ion-color-base-rgb: var(--ion-color-danger-rgb, 235, 68, 90) !important;\n  --ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-danger-shade, #cf3c4f) !important;\n  --ion-color-tint: var(--ion-color-danger-tint, #ed576b) !important;\n}\n.ion-color-light {\n  --ion-color-base: var(--ion-color-light, #f4f5f8) !important;\n  --ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;\n  --ion-color-contrast: var(--ion-color-light-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;\n  --ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important;\n}\n.ion-color-medium {\n  --ion-color-base: var(--ion-color-medium, #92949c) !important;\n  --ion-color-base-rgb: var(--ion-color-medium-rgb, 146, 148, 156) !important;\n  --ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-medium-shade, #808289) !important;\n  --ion-color-tint: var(--ion-color-medium-tint, #9d9fa6) !important;\n}\n.ion-color-dark {\n  --ion-color-base: var(--ion-color-dark, #222428) !important;\n  --ion-color-base-rgb: var(--ion-color-dark-rgb, 34, 36, 40) !important;\n  --ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;\n  --ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important;\n}\n.ion-page {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: flex;\n  position: absolute;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  contain: layout size style;\n  overflow: hidden;\n  z-index: 0;\n}\n.split-pane-visible > .ion-page.split-pane-main {\n  position: relative;\n}\nion-route,\nion-route-redirect,\nion-router,\nion-select-option,\nion-nav-controller,\nion-menu-controller,\nion-action-sheet-controller,\nion-alert-controller,\nion-loading-controller,\nion-modal-controller,\nion-picker-controller,\nion-popover-controller,\nion-toast-controller,\n.ion-page-hidden,\n[hidden] {\n  /* stylelint-disable-next-line declaration-no-important */\n  display: none !important;\n}\n.ion-page-invisible {\n  opacity: 0;\n}\n.can-go-back > ion-header ion-back-button {\n  display: block;\n}\nhtml.plt-ios.plt-hybrid, html.plt-ios.plt-pwa {\n  --ion-statusbar-padding: 20px;\n}\n@supports (padding-top: 20px) {\n  html {\n    --ion-safe-area-top: var(--ion-statusbar-padding);\n  }\n}\n@supports (padding-top: constant(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: constant(safe-area-inset-top);\n    --ion-safe-area-bottom: constant(safe-area-inset-bottom);\n    --ion-safe-area-left: constant(safe-area-inset-left);\n    --ion-safe-area-right: constant(safe-area-inset-right);\n  }\n}\n@supports (padding-top: env(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: env(safe-area-inset-top);\n    --ion-safe-area-bottom: env(safe-area-inset-bottom);\n    --ion-safe-area-left: env(safe-area-inset-left);\n    --ion-safe-area-right: env(safe-area-inset-right);\n  }\n}\nion-card.ion-color .ion-inherit-color,\nion-card-header.ion-color .ion-inherit-color {\n  color: inherit;\n}\n.menu-content {\n  -webkit-transform: translate3d(0,  0,  0);\n          transform: translate3d(0,  0,  0);\n}\n.menu-content-open {\n  cursor: pointer;\n  touch-action: manipulation;\n  pointer-events: none;\n}\n.ios .menu-content-reveal {\n  box-shadow: -8px 0 42px rgba(0, 0, 0, 0.08);\n}\n[dir=rtl].ios .menu-content-reveal {\n  box-shadow: 8px 0 42px rgba(0, 0, 0, 0.08);\n}\n.md .menu-content-reveal {\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\n}\n.md .menu-content-push {\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\n}\n/* Basic CSS for apps built with Ionic */\naudio,\ncanvas,\nprogress,\nvideo {\n  vertical-align: baseline;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\nb,\nstrong {\n  font-weight: bold;\n}\nimg {\n  max-width: 100%;\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  height: 1px;\n  border-width: 0;\n  box-sizing: content-box;\n}\npre {\n  overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nlabel,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  line-height: normal;\n}\ntextarea {\n  overflow: auto;\n  height: auto;\n  font: inherit;\n  color: inherit;\n}\ntextarea::-webkit-input-placeholder {\n  padding-left: 2px;\n}\ntextarea::-moz-placeholder {\n  padding-left: 2px;\n}\ntextarea::-ms-input-placeholder {\n  padding-left: 2px;\n}\ntextarea::placeholder {\n  padding-left: 2px;\n}\nform,\ninput,\noptgroup,\nselect {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n}\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  cursor: pointer;\n  -webkit-appearance: button;\n}\na,\na div,\na span,\na ion-icon,\na ion-label,\nbutton,\nbutton div,\nbutton span,\nbutton ion-icon,\nbutton ion-label,\n.ion-tappable,\n[tappable],\n[tappable] div,\n[tappable] span,\n[tappable] ion-icon,\n[tappable] ion-label,\ninput,\ntextarea {\n  touch-action: manipulation;\n}\na ion-label,\nbutton ion-label {\n  pointer-events: none;\n}\nbutton {\n  border: 0;\n  border-radius: 0;\n  font-family: inherit;\n  font-style: inherit;\n  font-variant: inherit;\n  line-height: 1;\n  text-transform: none;\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n[tappable] {\n  cursor: pointer;\n}\na[disabled],\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\ninput[type=checkbox],\ninput[type=radio] {\n  padding: 0;\n  box-sizing: border-box;\n}\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\n* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\nhtml {\n  width: 100%;\n  height: 100%;\n  -webkit-text-size-adjust: 100%;\n     -moz-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n}\nhtml:not(.hydrated) body {\n  display: none;\n}\nhtml.plt-pwa {\n  height: 100vh;\n}\nbody {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  position: fixed;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  max-height: 100%;\n  text-rendering: optimizeLegibility;\n  overflow: hidden;\n  touch-action: manipulation;\n  -webkit-user-drag: none;\n  -ms-content-zooming: none;\n  word-wrap: break-word;\n  overscroll-behavior-y: none;\n  -webkit-text-size-adjust: none;\n     -moz-text-size-adjust: none;\n      -ms-text-size-adjust: none;\n          text-size-adjust: none;\n}\nhtml {\n  font-family: var(--ion-font-family);\n}\na {\n  background-color: transparent;\n  color: var(--ion-color-primary, #3880ff);\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 16px;\n  margin-bottom: 10px;\n  font-weight: 500;\n  line-height: 1.2;\n}\nh1 {\n  margin-top: 20px;\n  font-size: 26px;\n}\nh2 {\n  margin-top: 18px;\n  font-size: 24px;\n}\nh3 {\n  font-size: 22px;\n}\nh4 {\n  font-size: 20px;\n}\nh5 {\n  font-size: 18px;\n}\nh6 {\n  font-size: 16px;\n}\nsmall {\n  font-size: 75%;\n}\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\n.ion-hide {\n  display: none !important;\n}\n.ion-hide-up {\n  display: none !important;\n}\n.ion-hide-down {\n  display: none !important;\n}\n@media (min-width: 576px) {\n  .ion-hide-sm-up {\n    display: none !important;\n  }\n}\n@media (max-width: 575.98px) {\n  .ion-hide-sm-down {\n    display: none !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-hide-md-up {\n    display: none !important;\n  }\n}\n@media (max-width: 767.98px) {\n  .ion-hide-md-down {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-hide-lg-up {\n    display: none !important;\n  }\n}\n@media (max-width: 991.98px) {\n  .ion-hide-lg-down {\n    display: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-hide-xl-up {\n    display: none !important;\n  }\n}\n@media (max-width: 1199.98px) {\n  .ion-hide-xl-down {\n    display: none !important;\n  }\n}\n/* Optional CSS utils that can be commented out */\n.ion-no-padding {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.ion-padding {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n.ion-padding-top {\n  --padding-top: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n}\n.ion-padding-start {\n  --padding-start: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding-start {\n    padding-left: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n  }\n}\n.ion-padding-end {\n  --padding-end: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding-end {\n    padding-right: unset;\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n.ion-padding-bottom {\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n.ion-padding-vertical {\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n.ion-padding-horizontal {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding-horizontal {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n.ion-no-margin {\n  --margin-start: 0;\n  --margin-end: 0;\n  --margin-top: 0;\n  --margin-bottom: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.ion-margin {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n.ion-margin-top {\n  --margin-top: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n}\n.ion-margin-start {\n  --margin-start: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin-start {\n    margin-left: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n  }\n}\n.ion-margin-end {\n  --margin-end: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin-end {\n    margin-right: unset;\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n.ion-margin-bottom {\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n.ion-margin-vertical {\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n.ion-margin-horizontal {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin-horizontal {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n.ion-float-left {\n  float: left !important;\n}\n.ion-float-right {\n  float: right !important;\n}\n.ion-float-start {\n  float: left !important;\n}\n[dir=rtl] .ion-float-start, :host-context([dir=rtl]) .ion-float-start {\n  float: right !important;\n}\n.ion-float-end {\n  float: right !important;\n}\n[dir=rtl] .ion-float-end, :host-context([dir=rtl]) .ion-float-end {\n  float: left !important;\n}\n@media (min-width: 576px) {\n  .ion-float-sm-left {\n    float: left !important;\n  }\n\n  .ion-float-sm-right {\n    float: right !important;\n  }\n\n  .ion-float-sm-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-sm-start, :host-context([dir=rtl]) .ion-float-sm-start {\n    float: right !important;\n  }\n\n  .ion-float-sm-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-sm-end, :host-context([dir=rtl]) .ion-float-sm-end {\n    float: left !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-float-md-left {\n    float: left !important;\n  }\n\n  .ion-float-md-right {\n    float: right !important;\n  }\n\n  .ion-float-md-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-md-start, :host-context([dir=rtl]) .ion-float-md-start {\n    float: right !important;\n  }\n\n  .ion-float-md-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-md-end, :host-context([dir=rtl]) .ion-float-md-end {\n    float: left !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-float-lg-left {\n    float: left !important;\n  }\n\n  .ion-float-lg-right {\n    float: right !important;\n  }\n\n  .ion-float-lg-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-lg-start, :host-context([dir=rtl]) .ion-float-lg-start {\n    float: right !important;\n  }\n\n  .ion-float-lg-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-lg-end, :host-context([dir=rtl]) .ion-float-lg-end {\n    float: left !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-float-xl-left {\n    float: left !important;\n  }\n\n  .ion-float-xl-right {\n    float: right !important;\n  }\n\n  .ion-float-xl-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-xl-start, :host-context([dir=rtl]) .ion-float-xl-start {\n    float: right !important;\n  }\n\n  .ion-float-xl-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-xl-end, :host-context([dir=rtl]) .ion-float-xl-end {\n    float: left !important;\n  }\n}\n.ion-text-center {\n  text-align: center !important;\n}\n.ion-text-justify {\n  text-align: justify !important;\n}\n.ion-text-start {\n  text-align: start !important;\n}\n.ion-text-end {\n  text-align: end !important;\n}\n.ion-text-left {\n  text-align: left !important;\n}\n.ion-text-right {\n  text-align: right !important;\n}\n.ion-text-nowrap {\n  white-space: nowrap !important;\n}\n.ion-text-wrap {\n  white-space: normal !important;\n}\n@media (min-width: 576px) {\n  .ion-text-sm-center {\n    text-align: center !important;\n  }\n\n  .ion-text-sm-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-sm-start {\n    text-align: start !important;\n  }\n\n  .ion-text-sm-end {\n    text-align: end !important;\n  }\n\n  .ion-text-sm-left {\n    text-align: left !important;\n  }\n\n  .ion-text-sm-right {\n    text-align: right !important;\n  }\n\n  .ion-text-sm-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-sm-wrap {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-text-md-center {\n    text-align: center !important;\n  }\n\n  .ion-text-md-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-md-start {\n    text-align: start !important;\n  }\n\n  .ion-text-md-end {\n    text-align: end !important;\n  }\n\n  .ion-text-md-left {\n    text-align: left !important;\n  }\n\n  .ion-text-md-right {\n    text-align: right !important;\n  }\n\n  .ion-text-md-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-md-wrap {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-text-lg-center {\n    text-align: center !important;\n  }\n\n  .ion-text-lg-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-lg-start {\n    text-align: start !important;\n  }\n\n  .ion-text-lg-end {\n    text-align: end !important;\n  }\n\n  .ion-text-lg-left {\n    text-align: left !important;\n  }\n\n  .ion-text-lg-right {\n    text-align: right !important;\n  }\n\n  .ion-text-lg-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-lg-wrap {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-text-xl-center {\n    text-align: center !important;\n  }\n\n  .ion-text-xl-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-xl-start {\n    text-align: start !important;\n  }\n\n  .ion-text-xl-end {\n    text-align: end !important;\n  }\n\n  .ion-text-xl-left {\n    text-align: left !important;\n  }\n\n  .ion-text-xl-right {\n    text-align: right !important;\n  }\n\n  .ion-text-xl-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-xl-wrap {\n    white-space: normal !important;\n  }\n}\n.ion-text-uppercase {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: uppercase !important;\n}\n.ion-text-lowercase {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: lowercase !important;\n}\n.ion-text-capitalize {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: capitalize !important;\n}\n@media (min-width: 576px) {\n  .ion-text-sm-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-sm-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-sm-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-text-md-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-md-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-md-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-text-lg-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-lg-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-lg-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-text-xl-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-xl-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-xl-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n.ion-align-self-start {\n  align-self: flex-start !important;\n}\n.ion-align-self-end {\n  align-self: flex-end !important;\n}\n.ion-align-self-center {\n  align-self: center !important;\n}\n.ion-align-self-stretch {\n  align-self: stretch !important;\n}\n.ion-align-self-baseline {\n  align-self: baseline !important;\n}\n.ion-align-self-auto {\n  align-self: auto !important;\n}\n.ion-wrap {\n  flex-wrap: wrap !important;\n}\n.ion-nowrap {\n  flex-wrap: nowrap !important;\n}\n.ion-wrap-reverse {\n  flex-wrap: wrap-reverse !important;\n}\n.ion-justify-content-start {\n  -webkit-box-pack: start !important;\n          justify-content: flex-start !important;\n}\n.ion-justify-content-center {\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n}\n.ion-justify-content-end {\n  -webkit-box-pack: end !important;\n          justify-content: flex-end !important;\n}\n.ion-justify-content-around {\n  justify-content: space-around !important;\n}\n.ion-justify-content-between {\n  -webkit-box-pack: justify !important;\n          justify-content: space-between !important;\n}\n.ion-justify-content-evenly {\n  -webkit-box-pack: space-evenly !important;\n          justify-content: space-evenly !important;\n}\n.ion-align-items-start {\n  -webkit-box-align: start !important;\n          align-items: flex-start !important;\n}\n.ion-align-items-center {\n  -webkit-box-align: center !important;\n          align-items: center !important;\n}\n.ion-align-items-end {\n  -webkit-box-align: end !important;\n          align-items: flex-end !important;\n}\n.ion-align-items-stretch {\n  -webkit-box-align: stretch !important;\n          align-items: stretch !important;\n}\n.ion-align-items-baseline {\n  -webkit-box-align: baseline !important;\n          align-items: baseline !important;\n}\nbody.dark {\n  --ion-item-selected: #223649;\n  --ion-m-background: #001C32;\n  --card-header-color: #111417;\n  --ion-card-color: #001C32;\n  --minima-text: #FAFAFF;\n  --minima-icons: #FAFAFF;\n  /** primary **/\n  --ion-color-primary: #317aff;\n  --ion-color-primary-rgb: 49,122,255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255,255,255;\n  --ion-color-primary-shade: #2b6be0;\n  --ion-color-primary-tint: #4687ff;\n  /** secondary **/\n  --ion-color-secondary: #FF512F;\n  --ion-color-secondary-rgb: 255,81,47;\n  --ion-color-secondary-contrast: #000000;\n  --ion-color-secondary-contrast-rgb: 0,0,0;\n  --ion-color-secondary-shade: #e04729;\n  --ion-color-secondary-tint: #ff6244;\n  /** tertiary **/\n  --ion-color-tertiary: #FAFAFF;\n  --ion-color-tertiary-rgb: 250,250,255;\n  /** icons **/\n  --ion-color-icons: #FF435B;\n  --ion-color-icons-rgb:255, 81, 47;\n  --ion-color-success: #69bb7b;\n  --ion-color-success-rgb: 105,187,123;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0,0,0;\n  --ion-color-success-shade: #5ca56c;\n  --ion-color-success-tint: #78c288;\n  --ion-color-warning: #ffd534;\n  --ion-color-warning-rgb: 255,213,52;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0,0,0;\n  --ion-color-warning-shade: #e0bb2e;\n  --ion-color-warning-tint: #ffd948;\n  --ion-color-danger: #d33939;\n  --ion-color-danger-rgb: 211,57,57;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255,255,255;\n  --ion-color-danger-shade: #ba3232;\n  --ion-color-danger-tint: #d74d4d;\n  --ion-color-dark: #000000;\n  --ion-color-dark-rgb: 244,245,248;\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152,154,162;\n  --ion-color-light: #222428;\n  --ion-color-light-rgb: 34,36,40;\n  /** ion-chip color */\n  --ion-color-chip: #1D3147;\n  /** Token Card Colors */\n  --ion-color-token-cards: #F7F7FE;\n  --ion-color-token-cards-rgb: 247,247,254;\n  --ion-color-token-cards-contrast: #000000;\n  --ion-color-token-cards-contrast-rgb: 0,0,0;\n  --ion-color-token-cards-shade: #d9d9e0;\n  --ion-color-token-cards-tint: #f8f8fe;\n  --ion-color-line: rgba(250,250,255, 0.1);\n}\nbody.dark .borders {\n  border: 1px solid rgba(250, 250, 255, 0.1);\n}\nbody.dark .border-b {\n  border-bottom: 1px solid rgba(250, 250, 255, 0.1);\n}\nbody.dark .border-t {\n  border-top: 1px solid rgba(250, 250, 255, 0.1);\n}\nbody.dark .split-pane-md {\n  --border: 1px solid rgba(250,250,255, 0.1);\n}\n/*\n * iOS Dark Theme\n * -------------------------------------------\n */\n.ios body.dark {\n  --ion-m-background: #001C32;\n  --card-header-color: #111417;\n  --ion-card-color: #001C32;\n  --ion-background-color: #001C32;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255,255,255;\n  --ion-toolbar-background: #001C32;\n  --ion-item-background: #001C32;\n  --ion-item-background-activated: #001C32;\n}\n.md body.dark {\n  --card-header-color: #001C32;\n  --ion-card-color: #001C32;\n  --ion-item-selected: #223649;\n  --minima-text: #FAFAFF;\n  --ion-background-color: #001C32;\n  --ion-background-color-rgb: 18,18,18;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255,255,255;\n  --ion-border-color: #222222;\n  --ion-item-background: #001C32;\n  --ion-color-step-850: #fff;\n}\n/* mini-term.page.ts popover */\n.terminal-pop ion-backdrop {\n  opacity: 0.4 !important;\n}\n.terminal-pop .popover-content {\n  overflow-y: hidden;\n  max-height: 65px !important;\n  max-width: 148px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV0FMTEVUL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvZ2xvYmFsLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9jb3JlLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL2NvcmUuY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy90aGVtZXMvaW9uaWMubWl4aW5zLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL3RoZW1lcy9pb25pYy5nbG9iYWxzLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2NvbXBvbmVudHMvbWVudS9tZW51Lmlvcy52YXJzLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2NvbXBvbmVudHMvbWVudS9tZW51Lm1kLnZhcnMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL25vcm1hbGl6ZS5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9ub3JtYWxpemUuY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3Mvc3RydWN0dXJlLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3N0cnVjdHVyZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy90eXBvZ3JhcGh5LnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3R5cG9ncmFwaHkuY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvZGlzcGxheS5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9kaXNwbGF5LmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3BhZGRpbmcuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvcGFkZGluZy5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9mbG9hdC1lbGVtZW50cy5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9mbG9hdC1lbGVtZW50cy5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy90ZXh0LWFsaWdubWVudC5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy90ZXh0LWFsaWdubWVudC5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy90ZXh0LXRyYW5zZm9ybWF0aW9uLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtdHJhbnNmb3JtYXRpb24uY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvZmxleC11dGlscy5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9mbGV4LXV0aWxzLmNzcyIsInNyYy9nbG9iYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0VBQUE7QUFXQSw0REFBQTtBQ0hBO0VBQ0UsNkZBQUE7QUNQRjtBRFNBO0VBQ0UsMERBQUE7QUNORjtBRFNBO0VBQ0UsMENBQUE7QUNORjtBRFNBO0VBQ0UsdUNBQUE7QUNORjtBRFNBO0VBQ0UsZ0JBQUE7QUNORjtBRG1CQTtFQUNFLGdCQUFBO0FDaEJGO0FEc0JBO0VBQ0Usc0JBQUE7QUNuQkY7QUQ0Q0U7RUFUQSw4REFBQTtFQUNBLDJFQUFBO0VBQ0Esd0VBQUE7RUFDQSx5RkFBQTtFQUNBLHFFQUFBO0VBQ0EsbUVBQUE7QUMvQkY7QURtQ0U7RUFUQSxnRUFBQTtFQUNBLDZFQUFBO0VBQ0EsMEVBQUE7RUFDQSwyRkFBQTtFQUNBLHVFQUFBO0VBQ0EscUVBQUE7QUN0QkY7QUQwQkU7RUFUQSwrREFBQTtFQUNBLDJFQUFBO0VBQ0EseUVBQUE7RUFDQSwwRkFBQTtFQUNBLHNFQUFBO0VBQ0Esb0VBQUE7QUNiRjtBRGlCRTtFQVRBLDhEQUFBO0VBQ0EsMkVBQUE7RUFDQSx3RUFBQTtFQUNBLHlGQUFBO0VBQ0EscUVBQUE7RUFDQSxtRUFBQTtBQ0pGO0FEUUU7RUFUQSw4REFBQTtFQUNBLDBFQUFBO0VBQ0Esd0VBQUE7RUFDQSxtRkFBQTtFQUNBLHFFQUFBO0VBQ0EsbUVBQUE7QUNLRjtBRERFO0VBVEEsNkRBQUE7RUFDQSx5RUFBQTtFQUNBLHVFQUFBO0VBQ0Esd0ZBQUE7RUFDQSxvRUFBQTtFQUNBLGtFQUFBO0FDY0Y7QURWRTtFQVRBLDREQUFBO0VBQ0EsMEVBQUE7RUFDQSxzRUFBQTtFQUNBLGlGQUFBO0VBQ0EsbUVBQUE7RUFDQSxpRUFBQTtBQ3VCRjtBRG5CRTtFQVRBLDZEQUFBO0VBQ0EsMkVBQUE7RUFDQSx1RUFBQTtFQUNBLHdGQUFBO0VBQ0Esb0VBQUE7RUFDQSxrRUFBQTtBQ2dDRjtBRDVCRTtFQVRBLDJEQUFBO0VBQ0Esc0VBQUE7RUFDQSxxRUFBQTtFQUNBLHNGQUFBO0VBQ0Esa0VBQUE7RUFDQSxnRUFBQTtBQ3lDRjtBRDVCQTtFRXVQTSxPRnRQdUI7RUV1UHZCLFFGdlBpQjtFRWdSckIsTUZoUmtCO0VFaVJsQixTRmpSd0I7RUFFeEIsb0JBQUE7RUFBQSxhQUFBO0VBQ0Esa0JBQUE7RUFFQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBRUEsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFVHeEMrQjtBRnVFakM7QUQ1QkE7RUFDRSxrQkFBQTtBQytCRjtBRDVCQTs7Ozs7Ozs7Ozs7Ozs7O0VBZUUseURBQUE7RUFDQSx3QkFBQTtBQytCRjtBRDVCQTtFQUNFLFVBQUE7QUMrQkY7QUQ1QkE7RUFDRSxjQUFBO0FDK0JGO0FEeEJBO0VBQ0UsNkJBQUE7QUMyQkY7QUR4QkE7RUFDRTtJQUNFLGlEQUFBO0VDMkJGO0FBQ0Y7QUR2QkE7RUFDRTtJQUNFLGtEQUFBO0lBQ0Esd0RBQUE7SUFDQSxvREFBQTtJQUNBLHNEQUFBO0VDeUJGO0FBQ0Y7QUR0QkE7RUFDRTtJQUNFLDZDQUFBO0lBQ0EsbURBQUE7SUFDQSwrQ0FBQTtJQUNBLGlEQUFBO0VDd0JGO0FBQ0Y7QURqQkE7O0VBRUUsY0FBQTtBQ21CRjtBRFhBO0VFa1dNLHlDQUFBO1VBQUEsaUNBQUE7QURuVk47QURYQTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUlBLG9CQUFBO0FDV0Y7QURSQTtFQUNFLDJDSTdLK0I7QUh3TGpDO0FEUkE7RUFDRSwwQ0k5SytCO0FIeUxqQztBREpBO0VBQ0UsNENLNUw4QjtBSm1NaEM7QURKQTtFQUNFLDRDS2hNOEI7QUp1TWhDO0FGbE1BLHdDQUFBO0FPUEE7Ozs7RUFJRSx3QkFBQTtBQ05GO0FEV0E7RUFDRSxhQUFBO0VBRUEsU0FBQTtBQ1RGO0FEaUJBOztFQUVFLGlCQUFBO0FDZEY7QURzQkE7RUFDRSxlQUFBO0VBRUEsU0FBQTtBQ3BCRjtBRHdCQTtFQUNFLGdCQUFBO0FDckJGO0FENkJBO0VBQ0UsZ0JBQUE7QUMxQkY7QUQ2QkE7RUFDRSxXQUFBO0VBRUEsZUFBQTtFQUVBLHVCQUFBO0FDNUJGO0FEZ0NBO0VBQ0UsY0FBQTtBQzdCRjtBRGlDQTs7OztFQUlFLGlDQUFBO0VBQ0EsY0FBQTtBQzlCRjtBRDhDQTs7OztFQUlFLG9CQUFBO0VBQ0EsbUJBQUE7QUMzQ0Y7QUQ4Q0E7RUFDRSxjQUFBO0VBRUEsWUFBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0FDN0NGO0FEZ0RBO0VBQ0UsaUJBQUE7QUM3Q0Y7QUQ0Q0E7RUFDRSxpQkFBQTtBQzdDRjtBRDRDQTtFQUNFLGlCQUFBO0FDN0NGO0FENENBO0VBQ0UsaUJBQUE7QUM3Q0Y7QURnREE7Ozs7RUFJRSxTQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7QUM5Q0Y7QURzREE7OztFQUdFLGVBQUE7RUFFQSwwQkFBQTtBQ3BERjtBRHdEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0JFLDBCQUFBO0FDckRGO0FEd0RBOztFQUVFLG9CQUFBO0FDckRGO0FEd0RBO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUVBLDBCQUFBO0FDdERGO0FEeURBO0VBQ0UsZUFBQTtBQ3RERjtBRDBEQTs7O0VBR0UsZUFBQTtBQ3ZERjtBRDJEQTs7RUFFRSxVQUFBO0VBRUEsU0FBQTtBQ3pERjtBRCtEQTs7RUFFRSxVQUFBO0VBRUEsc0JBQUE7QUM3REY7QURtRUE7O0VBRUUsWUFBQTtBQ2hFRjtBRHNFQTs7RUFFRSx3QkFBQTtBQ25FRjtBRDJFQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUN4RUY7QUQyRUE7O0VBRUUsVUFBQTtBQ3hFRjtBQ3hKQTtFQUNFLHNCQUFBO0VBRUEsNkNBQUE7RUFDQSx3Q0FBQTtFQUNBLDJCQUFBO0FDVEY7QURZQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsOEJBQUE7S0FBQSwyQkFBQTtNQUFBLDBCQUFBO1VBQUEsc0JBQUE7QUNWRjtBRGFBO0VBQ0UsYUFBQTtBQ1ZGO0FEYUE7RUFDRSxhQUFBO0FDVkY7QURhQTtFTjZDRSxrQ0FBQTtFQUNBLG1DQUFBO0VBb0tFLGNNaE5jO0VOaU5kLGVNak5jO0VOcVBoQixhTXJQZ0I7RU5zUGhCLGdCTXRQZ0I7RU5nTmQsZU0vTWU7RU5nTmYsZ0JNaE5lO0VOb1BqQixjTXBQaUI7RU5xUGpCLGlCTXJQaUI7RUFFakIsZUFBQTtFQUVBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBRUEsa0NBQUE7RUFFQSxnQkFBQTtFQUVBLDBCQUFBO0VBRUEsdUJBQUE7RUFFQSx5QkFBQTtFQUVBLHFCQUFBO0VBRUEsMkJBQUE7RUFFQSw4QkFBQTtLQUFBLDJCQUFBO01BQUEsMEJBQUE7VUFBQSxzQkFBQTtBQ2JGO0FDZEE7RUFDRSxtQ0FBQTtBQzlCRjtBRGlDQTtFQUNFLDZCQUFBO0VBQ0Esd0NBQUE7QUM5QkY7QURpQ0E7Ozs7OztFUitPRSxnQlF6T2dCO0VSME9oQixtQlExTzRCO0VBRTVCLGdCQXhDNkI7RUEwQzdCLGdCQXZDNkI7QUNRL0I7QURrQ0E7RVJrT0UsZ0JRak9nQjtFQUVoQixlQTFDNkI7QUNTL0I7QURvQ0E7RVI0TkUsZ0JRM05nQjtFQUVoQixlQTdDNkI7QUNVL0I7QURzQ0E7RUFDRSxlQTlDNkI7QUNVL0I7QUR1Q0E7RUFDRSxlQS9DNkI7QUNXL0I7QUR1Q0E7RUFDRSxlQWhENkI7QUNZL0I7QUR1Q0E7RUFDRSxlQWpENkI7QUNhL0I7QUR1Q0E7RUFDRSxjQUFBO0FDcENGO0FEdUNBOztFQUVFLGtCQUFBO0VBRUEsY0FBQTtFQUVBLGNBQUE7RUFFQSx3QkFBQTtBQ3ZDRjtBRDBDQTtFQUNFLFdBQUE7QUN2Q0Y7QUQwQ0E7RUFDRSxlQUFBO0FDdkNGO0FDdERBO0VBQ0Usd0JBQUE7QUNQRjtBRGlCSTtFQUNFLHdCQUFBO0FDZE47QURxQkk7RUFDRSx3QkFBQTtBQ2xCTjtBWHNISTtFVTdHQTtJQUNFLHdCQUFBO0VDTEo7QUFDRjtBWHlKSTtFVTlJQTtJQUNFLHdCQUFBO0VDUko7QUFDRjtBWDJHSTtFVTdHQTtJQUNFLHdCQUFBO0VDS0o7QUFDRjtBWCtJSTtFVTlJQTtJQUNFLHdCQUFBO0VDRUo7QUFDRjtBWGlHSTtFVTdHQTtJQUNFLHdCQUFBO0VDZUo7QUFDRjtBWHFJSTtFVTlJQTtJQUNFLHdCQUFBO0VDWUo7QUFDRjtBWHVGSTtFVTdHQTtJQUNFLHdCQUFBO0VDeUJKO0FBQ0Y7QVgySEk7RVU5SUE7SUFDRSx3QkFBQTtFQ3NCSjtBQUNGO0FkL0JBLGlEQUFBO0FlSkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFWjhORSxlWTVOZTtFWjZOZixnQlk3TmU7RVppUWpCLGNZalFpQjtFWmtRakIsaUJZbFFpQjtBQ2JuQjtBRGdCQTtFQUNFLHlDQUFBO0VBQ0EsdUNBQUE7RUFDQSx1Q0FBQTtFQUNBLDBDQUFBO0VaeU5FLHNDWTVPTTtFWjZPTix1Q1k3T007RVo2UVIscUNZN1FRO0VaOFFSLHdDWTlRUTtBQ1VWO0Fic09NO0VBQ0U7SUFFSSxtQkFBQTtJQUdBLG9CQUFBO0lBR0YsK0NZelBBO0laMFBBLDhDWTFQQTtJWjJQQSw2Q1kzUEE7SVo0UEEsNENZNVBBO0VDbUJSO0FBQ0Y7QURJQTtFQUNFLHVDQUFBO0Vab1BBLHFDWTdRUTtBQ3lCVjtBREtBO0VBQ0UseUNBQUE7RVo2TUUsc0NZNU9NO0FDNkJWO0FibU5NO0VBQ0U7SUFFSSxtQkFBQTtJQU1GLCtDWXpQQTtJWjBQQSw4Q1kxUEE7RUNtQ1I7QUFDRjtBREFBO0VBQ0UsdUNBQUE7RVp3TUUsdUNZN09NO0FDeUNWO0FidU1NO0VBQ0U7SUFLSSxvQkFBQTtJQUtGLDZDWTNQQTtJWjRQQSw0Q1k1UEE7RUMrQ1I7QUFDRjtBRE5BO0VBQ0UsMENBQUE7RVptT0Esd0NZOVFRO0FDcURWO0FETEE7RUFDRSx1Q0FBQTtFQUNBLDBDQUFBO0VaMk5BLHFDWTdRUTtFWjhRUix3Q1k5UVE7QUMyRFY7QURKQTtFQUNFLHlDQUFBO0VBQ0EsdUNBQUE7RVptTEUsc0NZNU9NO0VaNk9OLHVDWTdPTTtBQ2lFVjtBYitLTTtFQUNFO0lBRUksbUJBQUE7SUFHQSxvQkFBQTtJQUdGLCtDWXpQQTtJWjBQQSw4Q1kxUEE7SVoyUEEsNkNZM1BBO0laNFBBLDRDWTVQQTtFQzBFUjtBQUNGO0FEVEE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RVprS0UsY1loS2M7RVppS2QsZVlqS2M7RVpxTWhCLGFZck1nQjtFWnNNaEIsZ0JZdE1nQjtBQ2NsQjtBRFhBO0VBQ0UsdUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esd0NBQUE7RVo2SkUsb0NZM09LO0VaNE9MLHFDWTVPSztFWjRRUCxtQ1k1UU87RVo2UVAsc0NZN1FPO0FDZ0dUO0FiK0lNO0VBQ0U7SUFFSSxrQkFBQTtJQUdBLG1CQUFBO0lBR0YsNkNZeFBEO0laeVBDLDRDWXpQRDtJWjBQQywyQ1kxUEQ7SVoyUEMsMENZM1BEO0VDeUdQO0FBQ0Y7QUR2QkE7RUFDRSxxQ0FBQTtFWndMQSxtQ1k1UU87QUMrR1Q7QUR0QkE7RUFDRSx1Q0FBQTtFWmlKRSxvQ1kzT0s7QUNtSFQ7QWI0SE07RUFDRTtJQUVJLGtCQUFBO0lBTUYsNkNZeFBEO0laeVBDLDRDWXpQRDtFQ3lIUDtBQUNGO0FEM0JBO0VBQ0UscUNBQUE7RVo0SUUscUNZNU9LO0FDK0hUO0FiZ0hNO0VBQ0U7SUFLSSxtQkFBQTtJQUtGLDJDWTFQRDtJWjJQQywwQ1kzUEQ7RUNxSVA7QUFDRjtBRGpDQTtFQUNFLHdDQUFBO0VadUtBLHNDWTdRTztBQzJJVDtBRGhDQTtFQUNFLHFDQUFBO0VBQ0Esd0NBQUE7RVorSkEsbUNZNVFPO0VaNlFQLHNDWTdRTztBQ2lKVDtBRC9CQTtFQUNFLHVDQUFBO0VBQ0EscUNBQUE7RVp1SEUsb0NZM09LO0VaNE9MLHFDWTVPSztBQ3VKVDtBYndGTTtFQUNFO0lBRUksa0JBQUE7SUFHQSxtQkFBQTtJQUdGLDZDWXhQRDtJWnlQQyw0Q1l6UEQ7SVowUEMsMkNZMVBEO0laMlBDLDBDWTNQRDtFQ2dLUDtBQUNGO0FDOUpJO0VkbWFFLHNCQUFBO0FlL2FOO0FEZ0JJO0VkK1pFLHVCQUFBO0FlM2FOO0FEZ0JJO0VkNllFLHNCQUFBO0FlelpOO0FmNExXO0VBZ09MLHVCQUFBO0FlelpOO0FEYUk7RWRnWkUsdUJBQUE7QWV6Wk47QWZxTFc7RUF1T0wsc0JBQUE7QWV6Wk47QWY0R0k7RWNsSEE7SWRtYUUsc0JBQUE7RWV4Wko7O0VEUEU7SWQrWkUsdUJBQUE7RWVwWko7O0VEUEU7SWQ2WUUsc0JBQUE7RWVsWUo7RWZxS1M7SUFnT0wsdUJBQUE7RWVsWUo7O0VEVkU7SWRnWkUsdUJBQUE7RWVsWUo7RWY4SlM7SUF1T0wsc0JBQUE7RWVsWUo7QUFDRjtBZm9GSTtFY2xIQTtJZG1hRSxzQkFBQTtFZWpZSjs7RUQ5QkU7SWQrWkUsdUJBQUE7RWU3WEo7O0VEOUJFO0lkNllFLHNCQUFBO0VlM1dKO0VmOElTO0lBZ09MLHVCQUFBO0VlM1dKOztFRGpDRTtJZGdaRSx1QkFBQTtFZTNXSjtFZnVJUztJQXVPTCxzQkFBQTtFZTNXSjtBQUNGO0FmNkRJO0VjbEhBO0lkbWFFLHNCQUFBO0VlMVdKOztFRHJERTtJZCtaRSx1QkFBQTtFZXRXSjs7RURyREU7SWQ2WUUsc0JBQUE7RWVwVko7RWZ1SFM7SUFnT0wsdUJBQUE7RWVwVko7O0VEeERFO0lkZ1pFLHVCQUFBO0VlcFZKO0VmZ0hTO0lBdU9MLHNCQUFBO0VlcFZKO0FBQ0Y7QWZzQ0k7RWNsSEE7SWRtYUUsc0JBQUE7RWVuVko7O0VENUVFO0lkK1pFLHVCQUFBO0VlL1VKOztFRDVFRTtJZDZZRSxzQkFBQTtFZTdUSjtFZmdHUztJQWdPTCx1QkFBQTtFZTdUSjs7RUQvRUU7SWRnWkUsdUJBQUE7RWU3VEo7RWZ5RlM7SUF1T0wsc0JBQUE7RWU3VEo7QUFDRjtBQ25HSTtFQUNFLDZCQUFBO0FDYk47QURnQkk7RUFDRSw4QkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsNEJBQUE7QUNiTjtBRGdCSTtFQUNFLDBCQUFBO0FDYk47QURnQkk7RUFDRSwyQkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsNEJBQUE7QUNiTjtBRGdCSTtFQUNFLDhCQUFBO0FDYk47QURnQkk7RUFDRSw4QkFBQTtBQ2JOO0FqQmtHSTtFZ0JsSEE7SUFDRSw2QkFBQTtFQ29CSjs7RURqQkU7SUFDRSw4QkFBQTtFQ29CSjs7RURqQkU7SUFDRSw0QkFBQTtFQ29CSjs7RURqQkU7SUFDRSwwQkFBQTtFQ29CSjs7RURqQkU7SUFDRSwyQkFBQTtFQ29CSjs7RURqQkU7SUFDRSw0QkFBQTtFQ29CSjs7RURqQkU7SUFDRSw4QkFBQTtFQ29CSjs7RURqQkU7SUFDRSw4QkFBQTtFQ29CSjtBQUNGO0FqQmdFSTtFZ0JsSEE7SUFDRSw2QkFBQTtFQ3FESjs7RURsREU7SUFDRSw4QkFBQTtFQ3FESjs7RURsREU7SUFDRSw0QkFBQTtFQ3FESjs7RURsREU7SUFDRSwwQkFBQTtFQ3FESjs7RURsREU7SUFDRSwyQkFBQTtFQ3FESjs7RURsREU7SUFDRSw0QkFBQTtFQ3FESjs7RURsREU7SUFDRSw4QkFBQTtFQ3FESjs7RURsREU7SUFDRSw4QkFBQTtFQ3FESjtBQUNGO0FqQitCSTtFZ0JsSEE7SUFDRSw2QkFBQTtFQ3NGSjs7RURuRkU7SUFDRSw4QkFBQTtFQ3NGSjs7RURuRkU7SUFDRSw0QkFBQTtFQ3NGSjs7RURuRkU7SUFDRSwwQkFBQTtFQ3NGSjs7RURuRkU7SUFDRSwyQkFBQTtFQ3NGSjs7RURuRkU7SUFDRSw0QkFBQTtFQ3NGSjs7RURuRkU7SUFDRSw4QkFBQTtFQ3NGSjs7RURuRkU7SUFDRSw4QkFBQTtFQ3NGSjtBQUNGO0FqQkZJO0VnQmxIQTtJQUNFLDZCQUFBO0VDdUhKOztFRHBIRTtJQUNFLDhCQUFBO0VDdUhKOztFRHBIRTtJQUNFLDRCQUFBO0VDdUhKOztFRHBIRTtJQUNFLDBCQUFBO0VDdUhKOztFRHBIRTtJQUNFLDJCQUFBO0VDdUhKOztFRHBIRTtJQUNFLDRCQUFBO0VDdUhKOztFRHBIRTtJQUNFLDhCQUFBO0VDdUhKOztFRHBIRTtJQUNFLDhCQUFBO0VDdUhKO0FBQ0Y7QUNySkk7RUFDRSx5REFBQTtFQUNBLG9DQUFBO0FDYk47QURnQkk7RUFDRSx5REFBQTtFQUNBLG9DQUFBO0FDYk47QURnQkk7RUFDRSx5REFBQTtFQUNBLHFDQUFBO0FDYk47QW5CbUhJO0VrQmxIQTtJQUNFLHlEQUFBO0lBQ0Esb0NBQUE7RUNHSjs7RURBRTtJQUNFLHlEQUFBO0lBQ0Esb0NBQUE7RUNHSjs7RURBRTtJQUNFLHlEQUFBO0lBQ0EscUNBQUE7RUNHSjtBQUNGO0FuQmtHSTtFa0JsSEE7SUFDRSx5REFBQTtJQUNBLG9DQUFBO0VDbUJKOztFRGhCRTtJQUNFLHlEQUFBO0lBQ0Esb0NBQUE7RUNtQko7O0VEaEJFO0lBQ0UseURBQUE7SUFDQSxxQ0FBQTtFQ21CSjtBQUNGO0FuQmtGSTtFa0JsSEE7SUFDRSx5REFBQTtJQUNBLG9DQUFBO0VDbUNKOztFRGhDRTtJQUNFLHlEQUFBO0lBQ0Esb0NBQUE7RUNtQ0o7O0VEaENFO0lBQ0UseURBQUE7SUFDQSxxQ0FBQTtFQ21DSjtBQUNGO0FuQmtFSTtFa0JsSEE7SUFDRSx5REFBQTtJQUNBLG9DQUFBO0VDbURKOztFRGhERTtJQUNFLHlEQUFBO0lBQ0Esb0NBQUE7RUNtREo7O0VEaERFO0lBQ0UseURBQUE7SUFDQSxxQ0FBQTtFQ21ESjtBQUNGO0FDdEVBO0VBQ0UsaUNBQUE7QUNQRjtBRFVBO0VBQ0UsK0JBQUE7QUNQRjtBRFVBO0VBQ0UsNkJBQUE7QUNQRjtBRFVBO0VBQ0UsOEJBQUE7QUNQRjtBRFVBO0VBQ0UsK0JBQUE7QUNQRjtBRFVBO0VBQ0UsMkJBQUE7QUNQRjtBRGNBO0VBQ0UsMEJBQUE7QUNYRjtBRGNBO0VBQ0UsNEJBQUE7QUNYRjtBRGNBO0VBQ0Usa0NBQUE7QUNYRjtBRGtCQTtFQUNFLGtDQUFBO1VBQUEsc0NBQUE7QUNmRjtBRGtCQTtFQUNFLG1DQUFBO1VBQUEsa0NBQUE7QUNmRjtBRGtCQTtFQUNFLGdDQUFBO1VBQUEsb0NBQUE7QUNmRjtBRGtCQTtFQUNFLHdDQUFBO0FDZkY7QURrQkE7RUFDRSxvQ0FBQTtVQUFBLHlDQUFBO0FDZkY7QURrQkE7RUFDRSx5Q0FBQTtVQUFBLHdDQUFBO0FDZkY7QURzQkE7RUFDRSxtQ0FBQTtVQUFBLGtDQUFBO0FDbkJGO0FEc0JBO0VBQ0Usb0NBQUE7VUFBQSw4QkFBQTtBQ25CRjtBRHNCQTtFQUNFLGlDQUFBO1VBQUEsZ0NBQUE7QUNuQkY7QURzQkE7RUFDRSxxQ0FBQTtVQUFBLCtCQUFBO0FDbkJGO0FEc0JBO0VBQ0Usc0NBQUE7VUFBQSxnQ0FBQTtBQ25CRjtBeEJqREE7RUFFRSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUVBLHNCQUFBO0VBQ0EsdUJBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQ0FBQTtFQUVBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGlDQUFBO0VBRUEsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsNENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEseUJBQUE7RUFDQSxpQ0FBQTtFQUVBLDJCQUFBO0VBQ0EsbUNBQUE7RUFFQSwwQkFBQTtFQUNBLCtCQUFBO0VBRUEsb0JBQUE7RUFDQSx5QkFBQTtFQUVBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsMkNBQUE7RUFDQSxzQ0FBQTtFQUNBLHFDQUFBO0VBRUEsd0NBQUE7QXlCbkJGO0F6QnFCRTtFQUNFLDBDQUFBO0F5Qm5CSjtBekJxQkU7RUFDRSxpREFBQTtBeUJuQko7QXpCcUJFO0VBQ0UsOENBQUE7QXlCbkJKO0F6QnFCRTtFQUNFLDBDQUFBO0F5Qm5CSjtBekJ3QkE7OztFQUFBO0FBS0E7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esd0NBQUE7QXlCdEJGO0F6QitCQTtFQUNFLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBRUEsMEJBQUE7QXlCN0JGO0F6QmdDQSw4QkFBQTtBQUNFO0VBQ0UsdUJBQUE7QXlCN0JKO0F6QitCRTtFQUNJLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtBeUI1Qk4iLCJmaWxlIjoic3JjL2dsb2JhbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQXBwIEdsb2JhbCBDU1NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQdXQgc3R5bGUgcnVsZXMgaGVyZSB0aGF0IHlvdSB3YW50IHRvIGFwcGx5IGdsb2JhbGx5LiBUaGVzZSBzdHlsZXMgYXJlIGZvclxyXG4gKiB0aGUgZW50aXJlIGFwcCBhbmQgbm90IGp1c3Qgb25lIGNvbXBvbmVudC4gQWRkaXRpb25hbGx5LCB0aGlzIGZpbGUgY2FuIGJlXHJcbiAqIHVzZWQgYXMgYW4gZW50cnkgcG9pbnQgdG8gaW1wb3J0IG90aGVyIENTUy9TYXNzIGZpbGVzIHRvIGJlIGluY2x1ZGVkIGluIHRoZVxyXG4gKiBvdXRwdXQgQ1NTLlxyXG4gKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBnbG9iYWwgc3R5bGVzaGVldHMsIHZpc2l0IHRoZSBkb2N1bWVudGF0aW9uOlxyXG4gKiBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2xheW91dC9nbG9iYWwtc3R5bGVzaGVldHNcclxuICovXHJcblxyXG4vKiBDb3JlIENTUyByZXF1aXJlZCBmb3IgSW9uaWMgY29tcG9uZW50cyB0byB3b3JrIHByb3Blcmx5ICovXHJcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL2NvcmUuY3NzXCI7XHJcblxyXG4vKiBCYXNpYyBDU1MgZm9yIGFwcHMgYnVpbHQgd2l0aCBJb25pYyAqL1xyXG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9ub3JtYWxpemUuY3NzXCI7XHJcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3N0cnVjdHVyZS5jc3NcIjtcclxuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvdHlwb2dyYXBoeS5jc3NcIjtcclxuQGltcG9ydCAnfkBpb25pYy9hbmd1bGFyL2Nzcy9kaXNwbGF5LmNzcyc7XHJcblxyXG4vKiBPcHRpb25hbCBDU1MgdXRpbHMgdGhhdCBjYW4gYmUgY29tbWVudGVkIG91dCAqL1xyXG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9wYWRkaW5nLmNzc1wiO1xyXG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9mbG9hdC1lbGVtZW50cy5jc3NcIjtcclxuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvdGV4dC1hbGlnbm1lbnQuY3NzXCI7XHJcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtdHJhbnNmb3JtYXRpb24uY3NzXCI7XHJcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL2ZsZXgtdXRpbHMuY3NzXCI7XHJcblxyXG5cclxuLy9DU1MgRmFsbGJhY2sgXHJcbmJvZHkuZGFyayB7XHJcblxyXG4gIC0taW9uLWl0ZW0tc2VsZWN0ZWQ6ICMyMjM2NDk7XHJcbiAgLS1pb24tbS1iYWNrZ3JvdW5kOiAjMDAxQzMyO1xyXG4gIC0tY2FyZC1oZWFkZXItY29sb3I6ICMxMTE0MTc7XHJcbiAgLS1pb24tY2FyZC1jb2xvcjogIzAwMUMzMjtcclxuXHJcbiAgLS1taW5pbWEtdGV4dDogI0ZBRkFGRjtcclxuICAtLW1pbmltYS1pY29uczogI0ZBRkFGRjtcclxuXHJcbiAgLyoqIHByaW1hcnkgKiovXHJcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzMxN2FmZjtcclxuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNDksMTIyLDI1NTtcclxuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xyXG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcclxuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjMmI2YmUwO1xyXG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzQ2ODdmZjtcclxuXHJcbiAgLyoqIHNlY29uZGFyeSAqKi9cclxuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICNGRjUxMkY7XHJcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogMjU1LDgxLDQ3O1xyXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogIzAwMDAwMDtcclxuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAwLDAsMDtcclxuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICNlMDQ3Mjk7XHJcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICNmZjYyNDQ7XHJcbiAgLyoqIHRlcnRpYXJ5ICoqL1xyXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjRkFGQUZGO1xyXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMjUwLDI1MCwyNTU7XHJcblxyXG4gIC8qKiBpY29ucyAqKi9cclxuICAtLWlvbi1jb2xvci1pY29uczogI0ZGNDM1QjtcclxuICAtLWlvbi1jb2xvci1pY29ucy1yZ2I6MjU1LCA4MSwgNDc7XHJcblxyXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICM2OWJiN2I7XHJcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDEwNSwxODcsMTIzO1xyXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICMwMDAwMDA7XHJcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsMCwwO1xyXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICM1Y2E1NmM7XHJcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNzhjMjg4O1xyXG5cclxuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZkNTM0O1xyXG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsMjEzLDUyO1xyXG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XHJcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsMCwwO1xyXG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGJiMmU7XHJcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkOTQ4O1xyXG5cclxuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNkMzM5Mzk7XHJcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjExLDU3LDU3O1xyXG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcclxuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcclxuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNiYTMyMzI7XHJcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNkNzRkNGQ7XHJcblxyXG4gIC0taW9uLWNvbG9yLWRhcms6ICMwMDAwMDA7XHJcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDI0NCwyNDUsMjQ4O1xyXG5cclxuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XHJcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTUyLDE1NCwxNjI7XHJcblxyXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjMjIyNDI4O1xyXG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMzQsMzYsNDA7XHJcblxyXG4gIC8qKiBpb24tY2hpcCBjb2xvciAqL1xyXG4gIC0taW9uLWNvbG9yLWNoaXA6ICMxRDMxNDc7XHJcblxyXG4gIC8qKiBUb2tlbiBDYXJkIENvbG9ycyAqL1xyXG4gIC0taW9uLWNvbG9yLXRva2VuLWNhcmRzOiAjRjdGN0ZFO1xyXG4gIC0taW9uLWNvbG9yLXRva2VuLWNhcmRzLXJnYjogMjQ3LDI0NywyNTQ7XHJcbiAgLS1pb24tY29sb3ItdG9rZW4tY2FyZHMtY29udHJhc3Q6ICMwMDAwMDA7XHJcbiAgLS1pb24tY29sb3ItdG9rZW4tY2FyZHMtY29udHJhc3QtcmdiOiAwLDAsMDtcclxuICAtLWlvbi1jb2xvci10b2tlbi1jYXJkcy1zaGFkZTogI2Q5ZDllMDtcclxuICAtLWlvbi1jb2xvci10b2tlbi1jYXJkcy10aW50OiAjZjhmOGZlO1xyXG5cclxuICAtLWlvbi1jb2xvci1saW5lOiByZ2JhKDI1MCwyNTAsMjU1LCAwLjEpO1xyXG5cclxuICAuYm9yZGVycyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1MCwyNTAsMjU1LCAwLjEpO1xyXG4gIH1cclxuICAuYm9yZGVyLWIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjUwLDI1MCwyNTUsIDAuMSk7XHJcbiAgfVxyXG4gIC5ib3JkZXItdCB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTAsMjUwLDI1NSwgMC4xKTtcclxuICB9XHJcbiAgLnNwbGl0LXBhbmUtbWQge1xyXG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1MCwyNTAsMjU1LCAwLjEpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qXHJcbiAqIGlPUyBEYXJrIFRoZW1lXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcblxyXG4uaW9zIGJvZHkuZGFyayB7XHJcbiAgLS1pb24tbS1iYWNrZ3JvdW5kOiAjMDAxQzMyO1xyXG4gIC0tY2FyZC1oZWFkZXItY29sb3I6ICMxMTE0MTc7XHJcbiAgLS1pb24tY2FyZC1jb2xvcjogIzAwMUMzMjtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAxQzMyO1xyXG4gIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XHJcbiAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwyNTUsMjU1O1xyXG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogIzAwMUMzMjtcclxuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMwMDFDMzI7XHJcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzAwMUMzMjtcclxufVxyXG5cclxuXHJcbi8vIC8qXHJcbi8vICAqIE1hdGVyaWFsIERlc2lnbiBEYXJrIFRoZW1lXHJcbi8vICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gICovXHJcblxyXG4ubWQgYm9keS5kYXJrIHtcclxuICAtLWNhcmQtaGVhZGVyLWNvbG9yOiAjMDAxQzMyO1xyXG4gIC0taW9uLWNhcmQtY29sb3I6ICMwMDFDMzI7XHJcbiAgLS1pb24taXRlbS1zZWxlY3RlZDogIzIyMzY0OTtcclxuICAtLW1pbmltYS10ZXh0OiAjRkFGQUZGO1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDFDMzI7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDE4LDE4LDE4O1xyXG4gIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XHJcbiAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwyNTUsMjU1O1xyXG4gIC0taW9uLWJvcmRlci1jb2xvcjogIzIyMjIyMjtcclxuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMwMDFDMzI7XHJcblxyXG4gIC0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZmZmO1xyXG59XHJcblxyXG4vKiBtaW5pLXRlcm0ucGFnZS50cyBwb3BvdmVyICovXHJcbiAgLnRlcm1pbmFsLXBvcCBpb24tYmFja2Ryb3Age1xyXG4gICAgb3BhY2l0eTogMC40ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC50ZXJtaW5hbC1wb3AgLnBvcG92ZXItY29udGVudCAge1xyXG4gICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICAgIG1heC1oZWlnaHQ6IDY1cHggIWltcG9ydGFudDtcclxuICAgICAgbWF4LXdpZHRoOiAxNDhweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuIixudWxsLCJodG1sLmlvcyB7XG4gIC0taW9uLWRlZmF1bHQtZm9udDogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIkhlbHZldGljYSBOZXVlXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbmh0bWwubWQge1xuICAtLWlvbi1kZWZhdWx0LWZvbnQ6IFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuaHRtbCB7XG4gIC0taW9uLWZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZGVmYXVsdC1mb250KTtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuYm9keS5iYWNrZHJvcC1uby1zY3JvbGwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5odG1sLmlvcyBpb24tbW9kYWwubW9kYWwtY2FyZCAuaW9uLXBhZ2UgPiBpb24taGVhZGVyID4gaW9uLXRvb2xiYXI6Zmlyc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbmh0bWwuaW9zIGlvbi1tb2RhbCAuaW9uLXBhZ2Uge1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xufVxuXG4uaW9uLWNvbG9yLXByaW1hcnkge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiwgNTYsIDEyOCwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUsICMzMTcxZTApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQsICM0YzhkZmYpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3Itc2Vjb25kYXJ5IHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSwgIzNkYzJmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiLCA2MSwgMTk0LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZSwgIzM2YWJlMCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50LCAjNTBjOGZmKSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLXRlcnRpYXJ5IHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LCAjNTI2MGZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYiwgODIsIDk2LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZSwgIzQ4NTRlMCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQsICM2MzcwZmYpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3Itc3VjY2VzcyB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLCAjMmRkMzZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiLCA0NSwgMjExLCAxMTEpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSwgIzI4YmE2MikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludCwgIzQyZDc3ZCkgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci13YXJuaW5nIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcsICNmZmM0MDkpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1yZ2IsIDI1NSwgMTk2LCA5KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QsICMwMDApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGUsICNlMGFjMDgpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQsICNmZmNhMjIpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3ItZGFuZ2VyIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLWRhbmdlciwgI2ViNDQ1YSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItcmdiLCAyMzUsIDY4LCA5MCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlLCAjY2YzYzRmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQsICNlZDU3NmIpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3ItbGlnaHQge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItbGlnaHQsICNmNGY1ZjgpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtcmdiLCAyNDQsIDI0NSwgMjQ4KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LCAjMDAwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2IsIDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUsICNkN2Q4ZGEpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50LCAjZjVmNmY5KSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLW1lZGl1bSB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0sICM5Mjk0OWMpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiwgMTQ2LCAxNDgsIDE1NikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlLCAjODA4Mjg5KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQsICM5ZDlmYTYpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3ItZGFyayB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1kYXJrLCAjMjIyNDI4KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWRhcmstcmdiLCAzNCwgMzYsIDQwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUsICMxZTIwMjMpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQsICMzODNhM2UpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tcGFnZSB7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGNvbnRhaW46IGxheW91dCBzaXplIHN0eWxlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAwO1xufVxuXG4uc3BsaXQtcGFuZS12aXNpYmxlID4gLmlvbi1wYWdlLnNwbGl0LXBhbmUtbWFpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLXJvdXRlLFxuaW9uLXJvdXRlLXJlZGlyZWN0LFxuaW9uLXJvdXRlcixcbmlvbi1zZWxlY3Qtb3B0aW9uLFxuaW9uLW5hdi1jb250cm9sbGVyLFxuaW9uLW1lbnUtY29udHJvbGxlcixcbmlvbi1hY3Rpb24tc2hlZXQtY29udHJvbGxlcixcbmlvbi1hbGVydC1jb250cm9sbGVyLFxuaW9uLWxvYWRpbmctY29udHJvbGxlcixcbmlvbi1tb2RhbC1jb250cm9sbGVyLFxuaW9uLXBpY2tlci1jb250cm9sbGVyLFxuaW9uLXBvcG92ZXItY29udHJvbGxlcixcbmlvbi10b2FzdC1jb250cm9sbGVyLFxuLmlvbi1wYWdlLWhpZGRlbixcbltoaWRkZW5dIHtcbiAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tcGFnZS1pbnZpc2libGUge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2FuLWdvLWJhY2sgPiBpb24taGVhZGVyIGlvbi1iYWNrLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5odG1sLnBsdC1pb3MucGx0LWh5YnJpZCwgaHRtbC5wbHQtaW9zLnBsdC1wd2Ege1xuICAtLWlvbi1zdGF0dXNiYXItcGFkZGluZzogMjBweDtcbn1cblxuQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogMjBweCkge1xuICBodG1sIHtcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiB2YXIoLS1pb24tc3RhdHVzYmFyLXBhZGRpbmcpO1xuICB9XG59XG5Ac3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtdG9wKSkge1xuICBodG1sIHtcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtdG9wKTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtbGVmdDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWxlZnQpO1xuICAgIC0taW9uLXNhZmUtYXJlYS1yaWdodDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KTtcbiAgfVxufVxuQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKSB7XG4gIGh0bWwge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG4gICAgLS1pb24tc2FmZS1hcmVhLWxlZnQ6IGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCk7XG4gICAgLS1pb24tc2FmZS1hcmVhLXJpZ2h0OiBlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KTtcbiAgfVxufVxuaW9uLWNhcmQuaW9uLWNvbG9yIC5pb24taW5oZXJpdC1jb2xvcixcbmlvbi1jYXJkLWhlYWRlci5pb24tY29sb3IgLmlvbi1pbmhlcml0LWNvbG9yIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5tZW51LWNvbnRlbnQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsICAwLCAgMCk7XG59XG5cbi5tZW51LWNvbnRlbnQtb3BlbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uaW9zIC5tZW51LWNvbnRlbnQtcmV2ZWFsIHtcbiAgYm94LXNoYWRvdzogLThweCAwIDQycHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cblxuW2Rpcj1ydGxdLmlvcyAubWVudS1jb250ZW50LXJldmVhbCB7XG4gIGJveC1zaGFkb3c6IDhweCAwIDQycHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cblxuLm1kIC5tZW51LWNvbnRlbnQtcmV2ZWFsIHtcbiAgYm94LXNoYWRvdzogNHB4IDBweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG59XG5cbi5tZCAubWVudS1jb250ZW50LXB1c2gge1xuICBib3gtc2hhZG93OiA0cHggMHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9Y29yZS5jc3MubWFwICovXG4iLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCwiYXVkaW8sXG5jYW52YXMsXG5wcm9ncmVzcyxcbnZpZGVvIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xuICBkaXNwbGF5OiBub25lO1xuICBoZWlnaHQ6IDA7XG59XG5cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG59XG5cbnN2Zzpub3QoOnJvb3QpIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuZmlndXJlIHtcbiAgbWFyZ2luOiAxZW0gNDBweDtcbn1cblxuaHIge1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cblxucHJlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbmNvZGUsXG5rYmQsXG5wcmUsXG5zYW1wIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxubGFiZWwsXG5pbnB1dCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbnRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgZm9udDogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xufVxuXG5mb3JtLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udDogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbmh0bWwgaW5wdXRbdHlwZT1idXR0b25dLFxuaW5wdXRbdHlwZT1yZXNldF0sXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xufVxuXG5hLFxuYSBkaXYsXG5hIHNwYW4sXG5hIGlvbi1pY29uLFxuYSBpb24tbGFiZWwsXG5idXR0b24sXG5idXR0b24gZGl2LFxuYnV0dG9uIHNwYW4sXG5idXR0b24gaW9uLWljb24sXG5idXR0b24gaW9uLWxhYmVsLFxuLmlvbi10YXBwYWJsZSxcblt0YXBwYWJsZV0sXG5bdGFwcGFibGVdIGRpdixcblt0YXBwYWJsZV0gc3Bhbixcblt0YXBwYWJsZV0gaW9uLWljb24sXG5bdGFwcGFibGVdIGlvbi1sYWJlbCxcbmlucHV0LFxudGV4dGFyZWEge1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbn1cblxuYSBpb24tbGFiZWwsXG5idXR0b24gaW9uLWxhYmVsIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc3R5bGU6IGluaGVyaXQ7XG4gIGZvbnQtdmFyaWFudDogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xufVxuXG5bdGFwcGFibGVdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5hW2Rpc2FibGVkXSxcbmJ1dHRvbltkaXNhYmxlZF0sXG5odG1sIGlucHV0W2Rpc2FibGVkXSB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdLFxuaW5wdXRbdHlwZT1yYWRpb10ge1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxudGQsXG50aCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS5jc3MubWFwICovXG4iLG51bGwsIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbn1cblxuaHRtbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG59XG5cbmh0bWw6bm90KC5oeWRyYXRlZCkgYm9keSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmh0bWwucGx0LXB3YSB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbmJvZHkge1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gIC1tcy1jb250ZW50LXpvb21pbmc6IG5vbmU7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgb3ZlcnNjcm9sbC1iZWhhdmlvci15OiBub25lO1xuICB0ZXh0LXNpemUtYWRqdXN0OiBub25lO1xufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHJ1Y3R1cmUuY3NzLm1hcCAqL1xuIixudWxsLCJodG1sIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSk7XG59XG5cbmEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbmgxIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuaDIge1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBmb250LXNpemU6IDI0cHg7XG59XG5oMyB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuaDQge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmg1IHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5oNiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuc21hbGwge1xuICBmb250LXNpemU6IDc1JTtcbn1cblxuc3ViLFxuc3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuc3VwIHtcbiAgdG9wOiAtMC41ZW07XG59XG5cbnN1YiB7XG4gIGJvdHRvbTogLTAuMjVlbTtcbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9dHlwb2dyYXBoeS5jc3MubWFwICovXG4iLG51bGwsIi5pb24taGlkZSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmlvbi1oaWRlLXVwIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWhpZGUtZG93biB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5pb24taGlkZS1zbS11cCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcbiAgLmlvbi1oaWRlLXNtLWRvd24ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5pb24taGlkZS1tZC11cCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgLmlvbi1oaWRlLW1kLWRvd24ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5pb24taGlkZS1sZy11cCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgLmlvbi1oaWRlLWxnLWRvd24ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuaW9uLWhpZGUteGwtdXAge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xuICAuaW9uLWhpZGUteGwtZG93biB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRpc3BsYXkuY3NzLm1hcCAqL1xuIixudWxsLCIuaW9uLW5vLXBhZGRpbmcge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uaW9uLXBhZGRpbmcge1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbn1cbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XG4gIC5pb24tcGFkZGluZyB7XG4gICAgcGFkZGluZy1sZWZ0OiB1bnNldDtcbiAgICBwYWRkaW5nLXJpZ2h0OiB1bnNldDtcbiAgICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgfVxufVxuXG4uaW9uLXBhZGRpbmctdG9wIHtcbiAgLS1wYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xufVxuLmlvbi1wYWRkaW5nLXN0YXJ0IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xufVxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcbiAgLmlvbi1wYWRkaW5nLXN0YXJ0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IHVuc2V0O1xuICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIH1cbn1cblxuLmlvbi1wYWRkaW5nLWVuZCB7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xufVxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcbiAgLmlvbi1wYWRkaW5nLWVuZCB7XG4gICAgcGFkZGluZy1yaWdodDogdW5zZXQ7XG4gICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICB9XG59XG5cbi5pb24tcGFkZGluZy1ib3R0b20ge1xuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG59XG4uaW9uLXBhZGRpbmctdmVydGljYWwge1xuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbn1cbi5pb24tcGFkZGluZy1ob3Jpem9udGFsIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbn1cbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XG4gIC5pb24tcGFkZGluZy1ob3Jpem9udGFsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IHVuc2V0O1xuICAgIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xuICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICB9XG59XG5cbi5pb24tbm8tbWFyZ2luIHtcbiAgLS1tYXJnaW4tc3RhcnQ6IDA7XG4gIC0tbWFyZ2luLWVuZDogMDtcbiAgLS1tYXJnaW4tdG9wOiAwO1xuICAtLW1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5pb24tbWFyZ2luIHtcbiAgLS1tYXJnaW4tc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAtLW1hcmdpbi1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAtLW1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAtLW1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tbGVmdDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1yaWdodDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbn1cbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XG4gIC5pb24tbWFyZ2luIHtcbiAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XG4gICAgbWFyZ2luLXJpZ2h0OiB1bnNldDtcbiAgICAtd2Via2l0LW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gICAgLXdlYmtpdC1tYXJnaW4tZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIH1cbn1cblxuLmlvbi1tYXJnaW4tdG9wIHtcbiAgLS1tYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG59XG4uaW9uLW1hcmdpbi1zdGFydCB7XG4gIC0tbWFyZ2luLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xufVxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcbiAgLmlvbi1tYXJnaW4tc3RhcnQge1xuICAgIG1hcmdpbi1sZWZ0OiB1bnNldDtcbiAgICAtd2Via2l0LW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIH1cbn1cblxuLmlvbi1tYXJnaW4tZW5kIHtcbiAgLS1tYXJnaW4tZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbn1cbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XG4gIC5pb24tbWFyZ2luLWVuZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiB1bnNldDtcbiAgICAtd2Via2l0LW1hcmdpbi1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgfVxufVxuXG4uaW9uLW1hcmdpbi1ib3R0b20ge1xuICAtLW1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbn1cbi5pb24tbWFyZ2luLXZlcnRpY2FsIHtcbiAgLS1tYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgLS1tYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xufVxuLmlvbi1tYXJnaW4taG9yaXpvbnRhbCB7XG4gIC0tbWFyZ2luLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgLS1tYXJnaW4tZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tcmlnaHQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xufVxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcbiAgLmlvbi1tYXJnaW4taG9yaXpvbnRhbCB7XG4gICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xuICAgIG1hcmdpbi1yaWdodDogdW5zZXQ7XG4gICAgLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAgIC13ZWJraXQtbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICB9XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXBhZGRpbmcuY3NzLm1hcCAqL1xuIixudWxsLCIuaW9uLWZsb2F0LWxlZnQge1xuICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWZsb2F0LXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tZmxvYXQtc3RhcnQge1xuICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xufVxuW2Rpcj1ydGxdIC5pb24tZmxvYXQtc3RhcnQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LXN0YXJ0IHtcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tZmxvYXQtZW5kIHtcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5bZGlyPXJ0bF0gLmlvbi1mbG9hdC1lbmQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LWVuZCB7XG4gIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuaW9uLWZsb2F0LXNtLWxlZnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LXNtLXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQtc20tc3RhcnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQtc20tc3RhcnQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LXNtLXN0YXJ0IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQtc20tZW5kIHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC1zbS1lbmQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LXNtLWVuZCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5pb24tZmxvYXQtbWQtbGVmdCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQtbWQtcmlnaHQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC1tZC1zdGFydCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC1tZC1zdGFydCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtbWQtc3RhcnQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC1tZC1lbmQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LW1kLWVuZCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtbWQtZW5kIHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmlvbi1mbG9hdC1sZy1sZWZ0IHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC1sZy1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LWxnLXN0YXJ0IHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LWxnLXN0YXJ0LCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1sZy1zdGFydCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LWxnLWVuZCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQtbGctZW5kLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1sZy1lbmQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmlvbi1mbG9hdC14bC1sZWZ0IHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC14bC1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LXhsLXN0YXJ0IHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LXhsLXN0YXJ0LCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC14bC1zdGFydCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LXhsLWVuZCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQteGwtZW5kLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC14bC1lbmQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZmxvYXQtZWxlbWVudHMuY3NzLm1hcCAqL1xuIixudWxsLCIuaW9uLXRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tdGV4dC1qdXN0aWZ5IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXRleHQtc3RhcnQge1xuICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXRleHQtZW5kIHtcbiAgdGV4dC1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tdGV4dC1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXRleHQtbm93cmFwIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXRleHQtd3JhcCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5pb24tdGV4dC1zbS1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXNtLWp1c3RpZnkge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1zbS1zdGFydCB7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1zbS1lbmQge1xuICAgIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXNtLWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1zbS1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1zbS1ub3dyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1zbS13cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW9uLXRleHQtbWQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1tZC1qdXN0aWZ5IHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbWQtc3RhcnQge1xuICAgIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbWQtZW5kIHtcbiAgICB0ZXh0LWFsaWduOiBlbmQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1tZC1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbWQtcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbWQtbm93cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbWQtd3JhcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmlvbi10ZXh0LWxnLWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbGctanVzdGlmeSB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LWxnLXN0YXJ0IHtcbiAgICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LWxnLWVuZCB7XG4gICAgdGV4dC1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbGctbGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LWxnLXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LWxnLW5vd3JhcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LWxnLXdyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuaW9uLXRleHQteGwtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC14bC1qdXN0aWZ5IHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQteGwtc3RhcnQge1xuICAgIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQteGwtZW5kIHtcbiAgICB0ZXh0LWFsaWduOiBlbmQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC14bC1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQteGwtcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQteGwtbm93cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQteGwtd3JhcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXRleHQtYWxpZ25tZW50LmNzcy5tYXAgKi9cbiIsbnVsbCwiLmlvbi10ZXh0LXVwcGVyY2FzZSB7XG4gIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXRleHQtbG93ZXJjYXNlIHtcbiAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tdGV4dC1jYXBpdGFsaXplIHtcbiAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmlvbi10ZXh0LXNtLXVwcGVyY2FzZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1zbS1sb3dlcmNhc2Uge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtc20tY2FwaXRhbGl6ZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW9uLXRleHQtbWQtdXBwZXJjYXNlIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LW1kLWxvd2VyY2FzZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1tZC1jYXBpdGFsaXplIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5pb24tdGV4dC1sZy11cHBlcmNhc2Uge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbGctbG93ZXJjYXNlIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LWxnLWNhcGl0YWxpemUge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5pb24tdGV4dC14bC11cHBlcmNhc2Uge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQteGwtbG93ZXJjYXNlIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXhsLWNhcGl0YWxpemUge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXRleHQtdHJhbnNmb3JtYXRpb24uY3NzLm1hcCAqL1xuIixudWxsLCIuaW9uLWFsaWduLXNlbGYtc3RhcnQge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24tc2VsZi1lbmQge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLXNlbGYtY2VudGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24tc2VsZi1zdHJldGNoIHtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLXNlbGYtYmFzZWxpbmUge1xuICBhbGlnbi1zZWxmOiBiYXNlbGluZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLXNlbGYtYXV0byB7XG4gIGFsaWduLXNlbGY6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLmlvbi13cmFwIHtcbiAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tbm93cmFwIHtcbiAgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDtcbn1cblxuLmlvbi13cmFwLXJldmVyc2Uge1xuICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWp1c3RpZnktY29udGVudC1zdGFydCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWp1c3RpZnktY29udGVudC1jZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWp1c3RpZnktY29udGVudC1lbmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tanVzdGlmeS1jb250ZW50LWFyb3VuZCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tanVzdGlmeS1jb250ZW50LWJldHdlZW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbn1cblxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtZXZlbmx5IHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHkgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1pdGVtcy1zdGFydCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24taXRlbXMtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLWl0ZW1zLWVuZCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLWl0ZW1zLXN0cmV0Y2gge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLWl0ZW1zLWJhc2VsaW5lIHtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWZsZXgtdXRpbHMuY3NzLm1hcCAqL1xuIiwiLypcbiAqIEFwcCBHbG9iYWwgQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQdXQgc3R5bGUgcnVsZXMgaGVyZSB0aGF0IHlvdSB3YW50IHRvIGFwcGx5IGdsb2JhbGx5LiBUaGVzZSBzdHlsZXMgYXJlIGZvclxuICogdGhlIGVudGlyZSBhcHAgYW5kIG5vdCBqdXN0IG9uZSBjb21wb25lbnQuIEFkZGl0aW9uYWxseSwgdGhpcyBmaWxlIGNhbiBiZVxuICogdXNlZCBhcyBhbiBlbnRyeSBwb2ludCB0byBpbXBvcnQgb3RoZXIgQ1NTL1Nhc3MgZmlsZXMgdG8gYmUgaW5jbHVkZWQgaW4gdGhlXG4gKiBvdXRwdXQgQ1NTLlxuICogRm9yIG1vcmUgaW5mb3JtYXRpb24gb24gZ2xvYmFsIHN0eWxlc2hlZXRzLCB2aXNpdCB0aGUgZG9jdW1lbnRhdGlvbjpcbiAqIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvbGF5b3V0L2dsb2JhbC1zdHlsZXNoZWV0c1xuICovXG4vKiBDb3JlIENTUyByZXF1aXJlZCBmb3IgSW9uaWMgY29tcG9uZW50cyB0byB3b3JrIHByb3Blcmx5ICovXG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9jb3JlLmNzc1wiO1xuLyogQmFzaWMgQ1NTIGZvciBhcHBzIGJ1aWx0IHdpdGggSW9uaWMgKi9cbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL25vcm1hbGl6ZS5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3N0cnVjdHVyZS5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3R5cG9ncmFwaHkuY3NzXCI7XG5AaW1wb3J0ICd+QGlvbmljL2FuZ3VsYXIvY3NzL2Rpc3BsYXkuY3NzJztcbi8qIE9wdGlvbmFsIENTUyB1dGlscyB0aGF0IGNhbiBiZSBjb21tZW50ZWQgb3V0ICovXG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9wYWRkaW5nLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvZmxvYXQtZWxlbWVudHMuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy90ZXh0LWFsaWdubWVudC5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtdHJhbnNmb3JtYXRpb24uY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9mbGV4LXV0aWxzLmNzc1wiO1xuYm9keS5kYXJrIHtcbiAgLS1pb24taXRlbS1zZWxlY3RlZDogIzIyMzY0OTtcbiAgLS1pb24tbS1iYWNrZ3JvdW5kOiAjMDAxQzMyO1xuICAtLWNhcmQtaGVhZGVyLWNvbG9yOiAjMTExNDE3O1xuICAtLWlvbi1jYXJkLWNvbG9yOiAjMDAxQzMyO1xuICAtLW1pbmltYS10ZXh0OiAjRkFGQUZGO1xuICAtLW1pbmltYS1pY29uczogI0ZBRkFGRjtcbiAgLyoqIHByaW1hcnkgKiovXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICMzMTdhZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA0OSwxMjIsMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICMyYjZiZTA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzQ2ODdmZjtcbiAgLyoqIHNlY29uZGFyeSAqKi9cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjRkY1MTJGO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiAyNTUsODEsNDc7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogI2UwNDcyOTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICNmZjYyNDQ7XG4gIC8qKiB0ZXJ0aWFyeSAqKi9cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICNGQUZBRkY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMjUwLDI1MCwyNTU7XG4gIC8qKiBpY29ucyAqKi9cbiAgLS1pb24tY29sb3ItaWNvbnM6ICNGRjQzNUI7XG4gIC0taW9uLWNvbG9yLWljb25zLXJnYjoyNTUsIDgxLCA0NztcbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzY5YmI3YjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDEwNSwxODcsMTIzO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICM1Y2E1NmM7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzc4YzI4ODtcbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmZDUzNDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwyMTMsNTI7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYmIyZTtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkOTQ4O1xuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNkMzM5Mzk7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDIxMSw1Nyw1NztcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjYmEzMjMyO1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2Q3NGQ0ZDtcbiAgLS1pb24tY29sb3ItZGFyazogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDI0NCwyNDUsMjQ4O1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE1MiwxNTQsMTYyO1xuICAtLWlvbi1jb2xvci1saWdodDogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAzNCwzNiw0MDtcbiAgLyoqIGlvbi1jaGlwIGNvbG9yICovXG4gIC0taW9uLWNvbG9yLWNoaXA6ICMxRDMxNDc7XG4gIC8qKiBUb2tlbiBDYXJkIENvbG9ycyAqL1xuICAtLWlvbi1jb2xvci10b2tlbi1jYXJkczogI0Y3RjdGRTtcbiAgLS1pb24tY29sb3ItdG9rZW4tY2FyZHMtcmdiOiAyNDcsMjQ3LDI1NDtcbiAgLS1pb24tY29sb3ItdG9rZW4tY2FyZHMtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXRva2VuLWNhcmRzLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gIC0taW9uLWNvbG9yLXRva2VuLWNhcmRzLXNoYWRlOiAjZDlkOWUwO1xuICAtLWlvbi1jb2xvci10b2tlbi1jYXJkcy10aW50OiAjZjhmOGZlO1xuICAtLWlvbi1jb2xvci1saW5lOiByZ2JhKDI1MCwyNTAsMjU1LCAwLjEpO1xufVxuYm9keS5kYXJrIC5ib3JkZXJzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTAsIDI1MCwgMjU1LCAwLjEpO1xufVxuYm9keS5kYXJrIC5ib3JkZXItYiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1MCwgMjUwLCAyNTUsIDAuMSk7XG59XG5ib2R5LmRhcmsgLmJvcmRlci10IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjUwLCAyNTAsIDI1NSwgMC4xKTtcbn1cbmJvZHkuZGFyayAuc3BsaXQtcGFuZS1tZCB7XG4gIC0tYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTAsMjUwLDI1NSwgMC4xKTtcbn1cblxuLypcbiAqIGlPUyBEYXJrIFRoZW1lXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbi5pb3MgYm9keS5kYXJrIHtcbiAgLS1pb24tbS1iYWNrZ3JvdW5kOiAjMDAxQzMyO1xuICAtLWNhcmQtaGVhZGVyLWNvbG9yOiAjMTExNDE3O1xuICAtLWlvbi1jYXJkLWNvbG9yOiAjMDAxQzMyO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAxQzMyO1xuICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogIzAwMUMzMjtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMDAxQzMyO1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMDAxQzMyO1xufVxuXG4ubWQgYm9keS5kYXJrIHtcbiAgLS1jYXJkLWhlYWRlci1jb2xvcjogIzAwMUMzMjtcbiAgLS1pb24tY2FyZC1jb2xvcjogIzAwMUMzMjtcbiAgLS1pb24taXRlbS1zZWxlY3RlZDogIzIyMzY0OTtcbiAgLS1taW5pbWEtdGV4dDogI0ZBRkFGRjtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwMUMzMjtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDE4LDE4LDE4O1xuICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWJvcmRlci1jb2xvcjogIzIyMjIyMjtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMDAxQzMyO1xuICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2ZmZjtcbn1cblxuLyogbWluaS10ZXJtLnBhZ2UudHMgcG9wb3ZlciAqL1xuLnRlcm1pbmFsLXBvcCBpb24tYmFja2Ryb3Age1xuICBvcGFjaXR5OiAwLjQgIWltcG9ydGFudDtcbn1cblxuLnRlcm1pbmFsLXBvcCAucG9wb3Zlci1jb250ZW50IHtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBtYXgtaGVpZ2h0OiA2NXB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMTQ4cHggIWltcG9ydGFudDtcbn0iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/theme/variables.scss":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/theme/variables.scss ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/** Minima Color Palette **/\n:root {\n  /** font-family **/\n  --ion-font-family: manrope-regular;\n  --ion-font-family-bold: manrope-bold;\n  --ion-font-family-light: manrope-light;\n  /** Light Skin **/\n  --ion-m-background: #FAFAFF;\n  --ion-m-background-rgb: rgb(240, 240, 250);\n  --ion-background-color: #FAFAFF;\n  /** primary **/\n  --ion-color-primary: #317aff;\n  --ion-color-primary-rgb: 49,122,255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255,255,255;\n  --ion-color-primary-shade: #2b6be0;\n  --ion-color-primary-tint: #4687ff;\n  /** secondary **/\n  --ion-color-secondary: #FF512F;\n  --ion-color-secondary-rgb: 255,81,47;\n  --ion-color-secondary-contrast: #000000;\n  --ion-color-secondary-contrast-rgb: 0,0,0;\n  --ion-color-secondary-shade: #e04729;\n  --ion-color-secondary-tint: #ff6244;\n  /** tertiary **/\n  --ion-color-tertiary: #001C32;\n  --ion-color-tertiary-rgb: 0,28,50;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255,255,255;\n  --ion-color-tertiary-shade: #00192c;\n  --ion-color-tertiary-tint: #1a3347;\n  /** success **/\n  --ion-color-success: #69bb7b;\n  --ion-color-success-rgb: 105,187,123;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0,0,0;\n  --ion-color-success-shade: #5ca56c;\n  --ion-color-success-tint: #78c288;\n  /** warning **/\n  --ion-color-warning: #ffce00;\n  --ion-color-warning-rgb: 255,206,0;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0,0,0;\n  --ion-color-warning-shade: #e0b500;\n  --ion-color-warning-tint: #ffd31a;\n  /** danger **/\n  --ion-color-danger: #d33939;\n  --ion-color-danger-rgb: 211,57,57;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255,255,255;\n  --ion-color-danger-shade: #ba3232;\n  --ion-color-danger-tint: #d74d4d;\n  /** icon **/\n  --ion-color-icon: #FF512F;\n  --ion-color-icon-rgb: 255,81,47;\n  --ion-color-icon-contrast: #000000;\n  --ion-color-icon-contrast-rgb: 0,0,0;\n  --ion-color-icon-shade: #e04729;\n  --ion-color-icon-tint: #ff6244;\n  /** gray 1 **/\n  --ion-color-gray-one: #C8C8D4;\n  --ion-color-gray-one-rgb: 200,200,212;\n  --ion-color-gray-one-contrast: #000000;\n  --ion-color-gray-one-contrast-rgb: 0,0,0;\n  --ion-color-gray-one-shade: #b0b0bb;\n  --ion-color-gray-one-tint: #ceced8;\n  /** gray 2 **/\n  --ion-color-gray-two: #FAFAFF;\n  --ion-color-gray-two-rgb: 250,250,255;\n  --ion-color-gray-two-contrast: #000000;\n  --ion-color-gray-two-contrast-rgb: 0,0,0;\n  --ion-color-gray-two-shade: #dcdce0;\n  --ion-color-gray-two-tint: #fbfbff;\n  /** gray 3 **/\n  --ion-color-gray-three: #AAAABE;\n  --ion-color-gray-three-rgb: 170,170,190;\n  --ion-color-gray-three-contrast: #000000;\n  --ion-color-gray-three-contrast-rgb: 0,0,0;\n  --ion-color-gray-three-shade: #9696a7;\n  --ion-color-gray-three-tint: #b3b3c5;\n  /** gray 4 **/\n  --ion-color-gray-four: #91919D;\n  --ion-color-gray-four-rgb: 145,145,157;\n  --ion-color-gray-four-contrast: #000000;\n  --ion-color-gray-four-contrast-rgb: 0,0,0;\n  --ion-color-gray-four-shade: #80808a;\n  --ion-color-gray-four-tint: #9c9ca7;\n  /** ion-chip color */\n  --ion-color-chip: #F7F7FE;\n  /** Token Card Colors */\n  --ion-color-token-cards: #F7F7FE;\n  --ion-color-token-cards-rgb: 247,247,254;\n  --ion-color-token-cards-contrast: #000000;\n  --ion-color-token-cards-contrast-rgb: 0,0,0;\n  --ion-color-token-cards-shade: #d9d9e0;\n  --ion-color-token-cards-tint: #f8f8fe;\n  /** custom Minima css vars **/\n  --minima-terminal-size: 12px;\n  --overflow: hidden;\n  --ion-color-selected: #001C32;\n  --ion-color-line: #fff;\n}\n:root .border-b {\n  border: none;\n}\n:root .border-t {\n  border: none;\n}\n:root .split-pane-md {\n  --border: 1px solid #001C32;\n}\n:root ion-menu-button {\n  width: 50px;\n  font-weight: 600;\n}\n.minima-numeric {\n  font-variant-numeric: tabular-nums;\n  float: right;\n  font-family: manrope-bold;\n}\n.minima-token {\n  font-family: manrope-bold;\n}\nion-content {\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n  background: var(--ion-m-background);\n}\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/** FONT FAMILIES */\n@font-face {\n  font-family: \"Monotype\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('monotype.ttf');\n}\n@font-face {\n  font-family: \"manrope-bold\";\n  src: url('manrope-bold.otf');\n}\n@font-face {\n  font-family: \"manrope-light\";\n  src: url('manrope-light.otf');\n}\n@font-face {\n  font-family: \"manrope-regular\";\n  src: url('manrope-regular.otf');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhc25lbXIvcHJvamVjdHMvV0FMTEVUL21vYmlsZS1hcHAtZnJvbnQtZW5kL2FwcC9zcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsMkJBQUE7QUFDRTtFQUNFLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLDBDQUFBO0VBQ0EsK0JBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOENBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EscUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsNENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUVBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0Esc0NBQUE7RUFDQSx3Q0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQ0FBQTtFQUNBLHNDQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsdUNBQUE7RUFDQSx3Q0FBQTtFQUNBLDBDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHNDQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBRUEsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHdDQUFBO0VBQ0EseUNBQUE7RUFDQSwyQ0FBQTtFQUNBLHNDQUFBO0VBQ0EscUNBQUE7RUFHQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFFQSw2QkFBQTtFQUNBLHNCQUFBO0FDYko7QURrQkk7RUFDQyxZQUFBO0FDaEJMO0FEa0JJO0VBQ0UsWUFBQTtBQ2hCTjtBRGtCSTtFQUNFLDJCQUFBO0FDaEJOO0FEbUJJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDakJOO0FEc0JBO0VBQ0Usa0NBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNuQkY7QURxQkE7RUFDRSx5QkFBQTtBQ2xCRjtBRHFCQTtFQUVFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBSUEsbUNBQUE7QUN0QkY7QURtQkU7RUFDRSxhQUFBO0FDakJKO0FEc0JBLG1CQUFBO0FBQ0E7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQ25CRjtBRHNCQTtFQUNFLDJCQUFBO0VBQ0EsNEJBQUE7QUNwQkY7QURzQkE7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0FDcEJGO0FEc0JBO0VBQ0UsOEJBQUE7RUFDQSwrQkFBQTtBQ3BCRiIsImZpbGUiOiJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmcuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6XHJcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL1xyXG4vKiogTWluaW1hIENvbG9yIFBhbGV0dGUgKiovXHJcbiAgOnJvb3Qge1xyXG4gICAgLyoqIGZvbnQtZmFtaWx5ICoqL1xyXG4gICAgLS1pb24tZm9udC1mYW1pbHk6IG1hbnJvcGUtcmVndWxhcjtcclxuICAgIC0taW9uLWZvbnQtZmFtaWx5LWJvbGQ6IG1hbnJvcGUtYm9sZDtcclxuICAgIC0taW9uLWZvbnQtZmFtaWx5LWxpZ2h0OiBtYW5yb3BlLWxpZ2h0O1xyXG4gICAgLyoqIExpZ2h0IFNraW4gKiovXHJcbiAgICAtLWlvbi1tLWJhY2tncm91bmQ6ICNGQUZBRkY7XHJcbiAgICAtLWlvbi1tLWJhY2tncm91bmQtcmdiOiByZ2IoMjQwLCAyNDAsIDI1MCk7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZGO1xyXG5cclxuICAgIC8qKiBwcmltYXJ5ICoqL1xyXG4gICAgLS1pb24tY29sb3ItcHJpbWFyeTogIzMxN2FmZjtcclxuICAgIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA0OSwxMjIsMjU1O1xyXG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcclxuICAgIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcclxuICAgIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICMyYjZiZTA7XHJcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM0Njg3ZmY7XHJcblxyXG4gICAgLyoqIHNlY29uZGFyeSAqKi9cclxuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeTogI0ZGNTEyRjtcclxuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDI1NSw4MSw0NztcclxuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogIzAwMDAwMDtcclxuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDAsMCwwO1xyXG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjZTA0NzI5O1xyXG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICNmZjYyNDQ7XHJcblxyXG4gICAgLyoqIHRlcnRpYXJ5ICoqL1xyXG4gICAgLS1pb24tY29sb3ItdGVydGlhcnk6ICMwMDFDMzI7XHJcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDAsMjgsNTA7XHJcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcclxuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XHJcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzAwMTkyYztcclxuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICMxYTMzNDc7XHJcblxyXG4gICAgLyoqIHN1Y2Nlc3MgKiovXHJcbiAgICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjNjliYjdiO1xyXG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDEwNSwxODcsMTIzO1xyXG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcclxuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAwLDAsMDtcclxuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICM1Y2E1NmM7XHJcbiAgICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM3OGMyODg7XHJcblxyXG4gICAgLyoqIHdhcm5pbmcgKiovXHJcbiAgICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZjZTAwO1xyXG4gICAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwyMDYsMDtcclxuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XHJcbiAgICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwwLDA7XHJcbiAgICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBiNTAwO1xyXG4gICAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkMzFhO1xyXG5cclxuICAgIC8qKiBkYW5nZXIgKiovXHJcbiAgICAtLWlvbi1jb2xvci1kYW5nZXI6ICNkMzM5Mzk7XHJcbiAgICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyMTEsNTcsNTc7XHJcbiAgICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XHJcbiAgICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcclxuICAgIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2JhMzIzMjtcclxuICAgIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZDc0ZDRkO1xyXG5cclxuICAgIC8qKiBpY29uICoqL1xyXG4gICAgLS1pb24tY29sb3ItaWNvbjogI0ZGNTEyRjtcclxuICAgIC0taW9uLWNvbG9yLWljb24tcmdiOiAyNTUsODEsNDc7XHJcbiAgICAtLWlvbi1jb2xvci1pY29uLWNvbnRyYXN0OiAjMDAwMDAwO1xyXG4gICAgLS1pb24tY29sb3ItaWNvbi1jb250cmFzdC1yZ2I6IDAsMCwwO1xyXG4gICAgLS1pb24tY29sb3ItaWNvbi1zaGFkZTogI2UwNDcyOTtcclxuICAgIC0taW9uLWNvbG9yLWljb24tdGludDogI2ZmNjI0NDtcclxuXHJcbiAgICAvKiogZ3JheSAxICoqL1xyXG4gICAgLS1pb24tY29sb3ItZ3JheS1vbmU6ICNDOEM4RDQ7XHJcbiAgICAtLWlvbi1jb2xvci1ncmF5LW9uZS1yZ2I6IDIwMCwyMDAsMjEyO1xyXG4gICAgLS1pb24tY29sb3ItZ3JheS1vbmUtY29udHJhc3Q6ICMwMDAwMDA7XHJcbiAgICAtLWlvbi1jb2xvci1ncmF5LW9uZS1jb250cmFzdC1yZ2I6IDAsMCwwO1xyXG4gICAgLS1pb24tY29sb3ItZ3JheS1vbmUtc2hhZGU6ICNiMGIwYmI7XHJcbiAgICAtLWlvbi1jb2xvci1ncmF5LW9uZS10aW50OiAjY2VjZWQ4O1xyXG4gICAgLyoqIGdyYXkgMiAqKi9cclxuICAgIC0taW9uLWNvbG9yLWdyYXktdHdvOiAjRkFGQUZGO1xyXG4gICAgLS1pb24tY29sb3ItZ3JheS10d28tcmdiOiAyNTAsMjUwLDI1NTtcclxuICAgIC0taW9uLWNvbG9yLWdyYXktdHdvLWNvbnRyYXN0OiAjMDAwMDAwO1xyXG4gICAgLS1pb24tY29sb3ItZ3JheS10d28tY29udHJhc3QtcmdiOiAwLDAsMDtcclxuICAgIC0taW9uLWNvbG9yLWdyYXktdHdvLXNoYWRlOiAjZGNkY2UwO1xyXG4gICAgLS1pb24tY29sb3ItZ3JheS10d28tdGludDogI2ZiZmJmZjtcclxuICAgIC8qKiBncmF5IDMgKiovXHJcbiAgICAtLWlvbi1jb2xvci1ncmF5LXRocmVlOiAjQUFBQUJFO1xyXG4gICAgLS1pb24tY29sb3ItZ3JheS10aHJlZS1yZ2I6IDE3MCwxNzAsMTkwO1xyXG4gICAgLS1pb24tY29sb3ItZ3JheS10aHJlZS1jb250cmFzdDogIzAwMDAwMDtcclxuICAgIC0taW9uLWNvbG9yLWdyYXktdGhyZWUtY29udHJhc3QtcmdiOiAwLDAsMDtcclxuICAgIC0taW9uLWNvbG9yLWdyYXktdGhyZWUtc2hhZGU6ICM5Njk2YTc7XHJcbiAgICAtLWlvbi1jb2xvci1ncmF5LXRocmVlLXRpbnQ6ICNiM2IzYzU7XHJcbiAgICAvKiogZ3JheSA0ICoqL1xyXG4gICAgLS1pb24tY29sb3ItZ3JheS1mb3VyOiAjOTE5MTlEO1xyXG4gICAgLS1pb24tY29sb3ItZ3JheS1mb3VyLXJnYjogMTQ1LDE0NSwxNTc7XHJcbiAgICAtLWlvbi1jb2xvci1ncmF5LWZvdXItY29udHJhc3Q6ICMwMDAwMDA7XHJcbiAgICAtLWlvbi1jb2xvci1ncmF5LWZvdXItY29udHJhc3QtcmdiOiAwLDAsMDtcclxuICAgIC0taW9uLWNvbG9yLWdyYXktZm91ci1zaGFkZTogIzgwODA4YTtcclxuICAgIC0taW9uLWNvbG9yLWdyYXktZm91ci10aW50OiAjOWM5Y2E3OyAgIFxyXG4gICAgLyoqIGlvbi1jaGlwIGNvbG9yICovXHJcbiAgICAtLWlvbi1jb2xvci1jaGlwOiAjRjdGN0ZFO1xyXG5cclxuICAgIC8qKiBUb2tlbiBDYXJkIENvbG9ycyAqL1xyXG4gICAgLS1pb24tY29sb3ItdG9rZW4tY2FyZHM6ICNGN0Y3RkU7XHJcbiAgICAtLWlvbi1jb2xvci10b2tlbi1jYXJkcy1yZ2I6IDI0NywyNDcsMjU0O1xyXG4gICAgLS1pb24tY29sb3ItdG9rZW4tY2FyZHMtY29udHJhc3Q6ICMwMDAwMDA7XHJcbiAgICAtLWlvbi1jb2xvci10b2tlbi1jYXJkcy1jb250cmFzdC1yZ2I6IDAsMCwwO1xyXG4gICAgLS1pb24tY29sb3ItdG9rZW4tY2FyZHMtc2hhZGU6ICNkOWQ5ZTA7XHJcbiAgICAtLWlvbi1jb2xvci10b2tlbi1jYXJkcy10aW50OiAjZjhmOGZlO1xyXG5cclxuXHJcbiAgICAvKiogY3VzdG9tIE1pbmltYSBjc3MgdmFycyAqKi9cclxuICAgIC0tbWluaW1hLXRlcm1pbmFsLXNpemU6IDEycHg7XHJcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgLS1pb24tY29sb3Itc2VsZWN0ZWQ6ICMwMDFDMzI7XHJcbiAgICAtLWlvbi1jb2xvci1saW5lOiAjZmZmO1xyXG5cclxuICAgICRhbGVydC1pb3MtY29udGVudC1tYXgtaGVpZ2h0OjcwMHB4ICFkZWZhdWx0O1xyXG4gICAgJGFsZXJ0LW1kLWNvbnRlbnQtbWF4LWhlaWdodDo0MDBweCAhZGVmYXVsdDtcclxuXHJcbiAgICAuYm9yZGVyLWIge1xyXG4gICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxuICAgIC5ib3JkZXItdCB7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxuICAgIC5zcGxpdC1wYW5lLW1kIHtcclxuICAgICAgLS1ib3JkZXI6IDFweCBzb2xpZCAjMDAxQzMyO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbi8vIEdsb2JhbFxyXG4ubWluaW1hLW51bWVyaWMge1xyXG4gIGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XHJcbn1cclxuLm1pbmltYS10b2tlbiB7XHJcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtYm9sZDtcclxufVxyXG4vLyBSZW1vdmUgc2Nyb2xsLWJhclxyXG5pb24tY29udGVudCB7XHJcbiAgLy8gb3ZlcndyaXRlIGlubGluZSBzdHlsZXNcclxuICAtLW9mZnNldC1ib3R0b206IGF1dG8haW1wb3J0YW50O1xyXG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tbS1iYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuLyoqIEZPTlQgRkFNSUxJRVMgKi9cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdNb25vdHlwZSc7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL21vbm90eXBlLnR0ZicpO1xyXG59XHJcbi8vIGFwcCBmb250cyBcclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdtYW5yb3BlLWJvbGQnO1xyXG4gIHNyYzogdXJsKCcuLi8vZm9udHMvbWFucm9wZS1ib2xkLm90ZicpO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnbWFucm9wZS1saWdodCc7XHJcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL21hbnJvcGUtbGlnaHQub3RmJyk7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdtYW5yb3BlLXJlZ3VsYXInO1xyXG4gIHNyYzogdXJsKCcuLi9mb250cy9tYW5yb3BlLXJlZ3VsYXIub3RmJyk7XHJcbn1cclxuXHJcblxyXG4iLCIvKiogTWluaW1hIENvbG9yIFBhbGV0dGUgKiovXG46cm9vdCB7XG4gIC8qKiBmb250LWZhbWlseSAqKi9cbiAgLS1pb24tZm9udC1mYW1pbHk6IG1hbnJvcGUtcmVndWxhcjtcbiAgLS1pb24tZm9udC1mYW1pbHktYm9sZDogbWFucm9wZS1ib2xkO1xuICAtLWlvbi1mb250LWZhbWlseS1saWdodDogbWFucm9wZS1saWdodDtcbiAgLyoqIExpZ2h0IFNraW4gKiovXG4gIC0taW9uLW0tYmFja2dyb3VuZDogI0ZBRkFGRjtcbiAgLS1pb24tbS1iYWNrZ3JvdW5kLXJnYjogcmdiKDI0MCwgMjQwLCAyNTApO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZGO1xuICAvKiogcHJpbWFyeSAqKi9cbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzMxN2FmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDQ5LDEyMiwyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzJiNmJlMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNDY4N2ZmO1xuICAvKiogc2Vjb25kYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICNGRjUxMkY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDI1NSw4MSw0NztcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjZTA0NzI5O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogI2ZmNjI0NDtcbiAgLyoqIHRlcnRpYXJ5ICoqL1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzAwMUMzMjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAwLDI4LDUwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICMwMDE5MmM7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICMxYTMzNDc7XG4gIC8qKiBzdWNjZXNzICoqL1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjNjliYjdiO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogMTA1LDE4NywxMjM7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzVjYTU2YztcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNzhjMjg4O1xuICAvKiogd2FybmluZyAqKi9cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmY2UwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwyMDYsMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBiNTAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmQzMWE7XG4gIC8qKiBkYW5nZXIgKiovXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2QzMzkzOTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjExLDU3LDU3O1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNiYTMyMzI7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZDc0ZDRkO1xuICAvKiogaWNvbiAqKi9cbiAgLS1pb24tY29sb3ItaWNvbjogI0ZGNTEyRjtcbiAgLS1pb24tY29sb3ItaWNvbi1yZ2I6IDI1NSw4MSw0NztcbiAgLS1pb24tY29sb3ItaWNvbi1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItaWNvbi1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAtLWlvbi1jb2xvci1pY29uLXNoYWRlOiAjZTA0NzI5O1xuICAtLWlvbi1jb2xvci1pY29uLXRpbnQ6ICNmZjYyNDQ7XG4gIC8qKiBncmF5IDEgKiovXG4gIC0taW9uLWNvbG9yLWdyYXktb25lOiAjQzhDOEQ0O1xuICAtLWlvbi1jb2xvci1ncmF5LW9uZS1yZ2I6IDIwMCwyMDAsMjEyO1xuICAtLWlvbi1jb2xvci1ncmF5LW9uZS1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItZ3JheS1vbmUtY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgLS1pb24tY29sb3ItZ3JheS1vbmUtc2hhZGU6ICNiMGIwYmI7XG4gIC0taW9uLWNvbG9yLWdyYXktb25lLXRpbnQ6ICNjZWNlZDg7XG4gIC8qKiBncmF5IDIgKiovXG4gIC0taW9uLWNvbG9yLWdyYXktdHdvOiAjRkFGQUZGO1xuICAtLWlvbi1jb2xvci1ncmF5LXR3by1yZ2I6IDI1MCwyNTAsMjU1O1xuICAtLWlvbi1jb2xvci1ncmF5LXR3by1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItZ3JheS10d28tY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgLS1pb24tY29sb3ItZ3JheS10d28tc2hhZGU6ICNkY2RjZTA7XG4gIC0taW9uLWNvbG9yLWdyYXktdHdvLXRpbnQ6ICNmYmZiZmY7XG4gIC8qKiBncmF5IDMgKiovXG4gIC0taW9uLWNvbG9yLWdyYXktdGhyZWU6ICNBQUFBQkU7XG4gIC0taW9uLWNvbG9yLWdyYXktdGhyZWUtcmdiOiAxNzAsMTcwLDE5MDtcbiAgLS1pb24tY29sb3ItZ3JheS10aHJlZS1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItZ3JheS10aHJlZS1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAtLWlvbi1jb2xvci1ncmF5LXRocmVlLXNoYWRlOiAjOTY5NmE3O1xuICAtLWlvbi1jb2xvci1ncmF5LXRocmVlLXRpbnQ6ICNiM2IzYzU7XG4gIC8qKiBncmF5IDQgKiovXG4gIC0taW9uLWNvbG9yLWdyYXktZm91cjogIzkxOTE5RDtcbiAgLS1pb24tY29sb3ItZ3JheS1mb3VyLXJnYjogMTQ1LDE0NSwxNTc7XG4gIC0taW9uLWNvbG9yLWdyYXktZm91ci1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItZ3JheS1mb3VyLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gIC0taW9uLWNvbG9yLWdyYXktZm91ci1zaGFkZTogIzgwODA4YTtcbiAgLS1pb24tY29sb3ItZ3JheS1mb3VyLXRpbnQ6ICM5YzljYTc7XG4gIC8qKiBpb24tY2hpcCBjb2xvciAqL1xuICAtLWlvbi1jb2xvci1jaGlwOiAjRjdGN0ZFO1xuICAvKiogVG9rZW4gQ2FyZCBDb2xvcnMgKi9cbiAgLS1pb24tY29sb3ItdG9rZW4tY2FyZHM6ICNGN0Y3RkU7XG4gIC0taW9uLWNvbG9yLXRva2VuLWNhcmRzLXJnYjogMjQ3LDI0NywyNTQ7XG4gIC0taW9uLWNvbG9yLXRva2VuLWNhcmRzLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci10b2tlbi1jYXJkcy1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAtLWlvbi1jb2xvci10b2tlbi1jYXJkcy1zaGFkZTogI2Q5ZDllMDtcbiAgLS1pb24tY29sb3ItdG9rZW4tY2FyZHMtdGludDogI2Y4ZjhmZTtcbiAgLyoqIGN1c3RvbSBNaW5pbWEgY3NzIHZhcnMgKiovXG4gIC0tbWluaW1hLXRlcm1pbmFsLXNpemU6IDEycHg7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLS1pb24tY29sb3Itc2VsZWN0ZWQ6ICMwMDFDMzI7XG4gIC0taW9uLWNvbG9yLWxpbmU6ICNmZmY7XG59XG46cm9vdCAuYm9yZGVyLWIge1xuICBib3JkZXI6IG5vbmU7XG59XG46cm9vdCAuYm9yZGVyLXQge1xuICBib3JkZXI6IG5vbmU7XG59XG46cm9vdCAuc3BsaXQtcGFuZS1tZCB7XG4gIC0tYm9yZGVyOiAxcHggc29saWQgIzAwMUMzMjtcbn1cbjpyb290IGlvbi1tZW51LWJ1dHRvbiB7XG4gIHdpZHRoOiA1MHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubWluaW1hLW51bWVyaWMge1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLWJvbGQ7XG59XG5cbi5taW5pbWEtdG9rZW4ge1xuICBmb250LWZhbWlseTogbWFucm9wZS1ib2xkO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tb2Zmc2V0LWJvdHRvbTogYXV0byFpbXBvcnRhbnQ7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1tLWJhY2tncm91bmQpO1xufVxuaW9uLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyoqIEZPTlQgRkFNSUxJRVMgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJNb25vdHlwZVwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogdXJsKFwiLi4vZm9udHMvbW9ub3R5cGUudHRmXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIm1hbnJvcGUtYm9sZFwiO1xuICBzcmM6IHVybChcIi4uLy9mb250cy9tYW5yb3BlLWJvbGQub3RmXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIm1hbnJvcGUtbGlnaHRcIjtcbiAgc3JjOiB1cmwoXCIuLi9mb250cy9tYW5yb3BlLWxpZ2h0Lm90ZlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJtYW5yb3BlLXJlZ3VsYXJcIjtcbiAgc3JjOiB1cmwoXCIuLi9mb250cy9tYW5yb3BlLXJlZ3VsYXIub3RmXCIpO1xufSJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/@ionic/angular/css/core.css":
/*!**************************************************!*\
  !*** ./node_modules/@ionic/angular/css/core.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../postcss-loader/src??embedded!./core.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@ionic/angular/css/core.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@ionic/angular/css/flex-utils.css":
/*!********************************************************!*\
  !*** ./node_modules/@ionic/angular/css/flex-utils.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../postcss-loader/src??embedded!./flex-utils.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@ionic/angular/css/flex-utils.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@ionic/angular/css/float-elements.css":
/*!************************************************************!*\
  !*** ./node_modules/@ionic/angular/css/float-elements.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../postcss-loader/src??embedded!./float-elements.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@ionic/angular/css/float-elements.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@ionic/angular/css/normalize.css":
/*!*******************************************************!*\
  !*** ./node_modules/@ionic/angular/css/normalize.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../postcss-loader/src??embedded!./normalize.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@ionic/angular/css/normalize.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@ionic/angular/css/padding.css":
/*!*****************************************************!*\
  !*** ./node_modules/@ionic/angular/css/padding.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../postcss-loader/src??embedded!./padding.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@ionic/angular/css/padding.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@ionic/angular/css/structure.css":
/*!*******************************************************!*\
  !*** ./node_modules/@ionic/angular/css/structure.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../postcss-loader/src??embedded!./structure.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@ionic/angular/css/structure.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@ionic/angular/css/text-alignment.css":
/*!************************************************************!*\
  !*** ./node_modules/@ionic/angular/css/text-alignment.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../postcss-loader/src??embedded!./text-alignment.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@ionic/angular/css/text-alignment.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@ionic/angular/css/text-transformation.css":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/angular/css/text-transformation.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../postcss-loader/src??embedded!./text-transformation.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@ionic/angular/css/text-transformation.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@ionic/angular/css/typography.css":
/*!********************************************************!*\
  !*** ./node_modules/@ionic/angular/css/typography.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../postcss-loader/src??embedded!./typography.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/@ionic/angular/css/typography.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/global.scss":
/*!*************************!*\
  !*** ./src/global.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./global.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/global.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/theme/variables.scss":
/*!**********************************!*\
  !*** ./src/theme/variables.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src??embedded!../../node_modules/sass-loader/lib/loader.js??ref--15-3!./variables.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/theme/variables.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/theme/variables.scss ./src/global.scss ./node_modules/@ionic/angular/css/normalize.css ./node_modules/@ionic/angular/css/structure.css ./node_modules/@ionic/angular/css/typography.css ./node_modules/@ionic/angular/css/core.css ./node_modules/@ionic/angular/css/padding.css ./node_modules/@ionic/angular/css/float-elements.css ./node_modules/@ionic/angular/css/text-alignment.css ./node_modules/@ionic/angular/css/text-transformation.css ./node_modules/@ionic/angular/css/flex-utils.css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/eliasnemr/projects/WALLET/mobile-app-front-end/app/src/theme/variables.scss */"./src/theme/variables.scss");
__webpack_require__(/*! /Users/eliasnemr/projects/WALLET/mobile-app-front-end/app/src/global.scss */"./src/global.scss");
__webpack_require__(/*! /Users/eliasnemr/projects/WALLET/mobile-app-front-end/app/node_modules/@ionic/angular/css/normalize.css */"./node_modules/@ionic/angular/css/normalize.css");
__webpack_require__(/*! /Users/eliasnemr/projects/WALLET/mobile-app-front-end/app/node_modules/@ionic/angular/css/structure.css */"./node_modules/@ionic/angular/css/structure.css");
__webpack_require__(/*! /Users/eliasnemr/projects/WALLET/mobile-app-front-end/app/node_modules/@ionic/angular/css/typography.css */"./node_modules/@ionic/angular/css/typography.css");
__webpack_require__(/*! /Users/eliasnemr/projects/WALLET/mobile-app-front-end/app/node_modules/@ionic/angular/css/core.css */"./node_modules/@ionic/angular/css/core.css");
__webpack_require__(/*! /Users/eliasnemr/projects/WALLET/mobile-app-front-end/app/node_modules/@ionic/angular/css/padding.css */"./node_modules/@ionic/angular/css/padding.css");
__webpack_require__(/*! /Users/eliasnemr/projects/WALLET/mobile-app-front-end/app/node_modules/@ionic/angular/css/float-elements.css */"./node_modules/@ionic/angular/css/float-elements.css");
__webpack_require__(/*! /Users/eliasnemr/projects/WALLET/mobile-app-front-end/app/node_modules/@ionic/angular/css/text-alignment.css */"./node_modules/@ionic/angular/css/text-alignment.css");
__webpack_require__(/*! /Users/eliasnemr/projects/WALLET/mobile-app-front-end/app/node_modules/@ionic/angular/css/text-transformation.css */"./node_modules/@ionic/angular/css/text-transformation.css");
module.exports = __webpack_require__(/*! /Users/eliasnemr/projects/WALLET/mobile-app-front-end/app/node_modules/@ionic/angular/css/flex-utils.css */"./node_modules/@ionic/angular/css/flex-utils.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles-es5.js.map