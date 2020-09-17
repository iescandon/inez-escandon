(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/resume/resume.component */ "./src/app/components/resume/resume.component.ts");
/* harmony import */ var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/portfolio/portfolio.component */ "./src/app/components/portfolio/portfolio.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









const routes = [
    { path: '', component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'portfolio', component: _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioComponent"] },
    { path: 'resume', component: _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_1__["ResumeComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_0__["ContactComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/toast/toast.component */ "./src/app/components/toast/toast.component.ts");




class AppComponent {
    constructor() {
        this.title = 'client';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [["aria-live", "polite", "aria-atomic", "true"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-toast", 0);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_2__["ToastComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _scroll_spy_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll-spy.directive */ "./src/app/scroll-spy.directive.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var _components_jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/jumbotron/jumbotron.component */ "./src/app/components/jumbotron/jumbotron.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/portfolio/portfolio.component */ "./src/app/components/portfolio/portfolio.component.ts");
/* harmony import */ var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/resume/resume.component */ "./src/app/components/resume/resume.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_about_img_about_img_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/about-img/about-img.component */ "./src/app/components/about-img/about-img.component.ts");
/* harmony import */ var _components_about_info_about_info_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/about-info/about-info.component */ "./src/app/components/about-info/about-info.component.ts");
/* harmony import */ var _components_about_extra_about_extra_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/about-extra/about-extra.component */ "./src/app/components/about-extra/about-extra.component.ts");
/* harmony import */ var _components_portfolio_title_portfolio_title_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/portfolio-title/portfolio-title.component */ "./src/app/components/portfolio-title/portfolio-title.component.ts");
/* harmony import */ var _components_portfolio_items_portfolio_items_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/portfolio-items/portfolio-items.component */ "./src/app/components/portfolio-items/portfolio-items.component.ts");
/* harmony import */ var _components_resume_title_resume_title_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/resume-title/resume-title.component */ "./src/app/components/resume-title/resume-title.component.ts");
/* harmony import */ var _components_resume_info_resume_info_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/resume-info/resume-info.component */ "./src/app/components/resume-info/resume-info.component.ts");
/* harmony import */ var _components_navbar_light_navbar_light_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/navbar-light/navbar-light.component */ "./src/app/components/navbar-light/navbar-light.component.ts");
/* harmony import */ var _components_contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/contact-info/contact-info.component */ "./src/app/components/contact-info/contact-info.component.ts");
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/contact-form/contact-form.component */ "./src/app/components/contact-form/contact-form.component.ts");
/* harmony import */ var _components_contact_title_contact_title_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/contact-title/contact-title.component */ "./src/app/components/contact-title/contact-title.component.ts");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/toast/toast.component */ "./src/app/components/toast/toast.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_contact_service__WEBPACK_IMPORTED_MODULE_26__["ContactService"], _services_toast_service__WEBPACK_IMPORTED_MODULE_0__["ToastService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
        _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__["HomepageComponent"],
        _components_jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_10__["JumbotronComponent"],
        _components_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
        _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_12__["PortfolioComponent"],
        _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_13__["ResumeComponent"],
        _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"],
        _components_about_img_about_img_component__WEBPACK_IMPORTED_MODULE_15__["AboutImgComponent"],
        _components_about_info_about_info_component__WEBPACK_IMPORTED_MODULE_16__["AboutInfoComponent"],
        _components_about_extra_about_extra_component__WEBPACK_IMPORTED_MODULE_17__["AboutExtraComponent"],
        _components_portfolio_title_portfolio_title_component__WEBPACK_IMPORTED_MODULE_18__["PortfolioTitleComponent"],
        _components_portfolio_items_portfolio_items_component__WEBPACK_IMPORTED_MODULE_19__["PortfolioItemsComponent"],
        _components_resume_title_resume_title_component__WEBPACK_IMPORTED_MODULE_20__["ResumeTitleComponent"],
        _components_resume_info_resume_info_component__WEBPACK_IMPORTED_MODULE_21__["ResumeInfoComponent"],
        _components_navbar_light_navbar_light_component__WEBPACK_IMPORTED_MODULE_22__["NavbarLightComponent"],
        _components_contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_23__["ContactInfoComponent"],
        _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_24__["ContactFormComponent"],
        _components_contact_title_contact_title_component__WEBPACK_IMPORTED_MODULE_25__["ContactTitleComponent"],
        _scroll_spy_directive__WEBPACK_IMPORTED_MODULE_1__["ScrollSpyDirective"],
        _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_27__["ToastComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                    _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__["HomepageComponent"],
                    _components_jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_10__["JumbotronComponent"],
                    _components_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                    _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_12__["PortfolioComponent"],
                    _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_13__["ResumeComponent"],
                    _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"],
                    _components_about_img_about_img_component__WEBPACK_IMPORTED_MODULE_15__["AboutImgComponent"],
                    _components_about_info_about_info_component__WEBPACK_IMPORTED_MODULE_16__["AboutInfoComponent"],
                    _components_about_extra_about_extra_component__WEBPACK_IMPORTED_MODULE_17__["AboutExtraComponent"],
                    _components_portfolio_title_portfolio_title_component__WEBPACK_IMPORTED_MODULE_18__["PortfolioTitleComponent"],
                    _components_portfolio_items_portfolio_items_component__WEBPACK_IMPORTED_MODULE_19__["PortfolioItemsComponent"],
                    _components_resume_title_resume_title_component__WEBPACK_IMPORTED_MODULE_20__["ResumeTitleComponent"],
                    _components_resume_info_resume_info_component__WEBPACK_IMPORTED_MODULE_21__["ResumeInfoComponent"],
                    _components_navbar_light_navbar_light_component__WEBPACK_IMPORTED_MODULE_22__["NavbarLightComponent"],
                    _components_contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_23__["ContactInfoComponent"],
                    _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_24__["ContactFormComponent"],
                    _components_contact_title_contact_title_component__WEBPACK_IMPORTED_MODULE_25__["ContactTitleComponent"],
                    _scroll_spy_directive__WEBPACK_IMPORTED_MODULE_1__["ScrollSpyDirective"],
                    _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_27__["ToastComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ],
                providers: [_services_contact_service__WEBPACK_IMPORTED_MODULE_26__["ContactService"], _services_toast_service__WEBPACK_IMPORTED_MODULE_0__["ToastService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/about-extra/about-extra.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/about-extra/about-extra.component.ts ***!
  \*****************************************************************/
/*! exports provided: AboutExtraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutExtraComponent", function() { return AboutExtraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutExtraComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutExtraComponent.ɵfac = function AboutExtraComponent_Factory(t) { return new (t || AboutExtraComponent)(); };
AboutExtraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutExtraComponent, selectors: [["app-about-extra"]], decls: 1, vars: 0, consts: [[1, "about-extra"]], template: function AboutExtraComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: [".about-extra[_ngcontent-%COMP%] {\n  height: 25vh;\n  width: 100vw;\n  background-color: white;\n}\n\n.quote[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC1leHRyYS9hYm91dC1leHRyYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC1leHRyYS9hYm91dC1leHRyYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0LWV4dHJhIHtcbiAgaGVpZ2h0OiAyNXZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ucXVvdGUge1xuICBmb250LXNpemU6IDMwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutExtraComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-extra',
                templateUrl: './about-extra.component.html',
                styleUrls: ['./about-extra.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/about-img/about-img.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/about-img/about-img.component.ts ***!
  \*************************************************************/
/*! exports provided: AboutImgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutImgComponent", function() { return AboutImgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutImgComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutImgComponent.ɵfac = function AboutImgComponent_Factory(t) { return new (t || AboutImgComponent)(); };
AboutImgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutImgComponent, selectors: [["app-about-img"]], decls: 1, vars: 0, consts: [[1, "about-img"]], template: function AboutImgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: [".about-img[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-image: url(/assets/close-up.jpg);\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC1pbWcvYWJvdXQtaW1nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsMkNBQTJDO0VBQzNDLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQtaW1nL2Fib3V0LWltZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0LWltZyB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2Nsb3NlLXVwLmpwZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutImgComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-img',
                templateUrl: './about-img.component.html',
                styleUrls: ['./about-img.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/about-info/about-info.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/about-info/about-info.component.ts ***!
  \***************************************************************/
/*! exports provided: AboutInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutInfoComponent", function() { return AboutInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutInfoComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutInfoComponent.ɵfac = function AboutInfoComponent_Factory(t) { return new (t || AboutInfoComponent)(); };
AboutInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutInfoComponent, selectors: [["app-about-info"]], decls: 11, vars: 0, consts: [[1, "about-info"], [1, "text"], [1, "header", "mb-5"]], template: function AboutInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "About Inez");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " My name is Inez Escandon and I am currently attending The Houston Coding Bootcamp provided by UT Austin. I am looking to change careers into web development and I am excited about the challenge.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " I am currently working as an elementary teacher and have worked as one for 10 years. In addition to my bachelors degree in Bilingual Education, I have a masters degree in Instructional Technology. It was during my masters degree where I was first introduced to programming and coding. I fell in love with it and have been working to transition into it ever since.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " After finding The Houston Coding Bootcamp, I decided to make the leap and am currently building up the skills necessary to be able to work full time in the industry. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".about-info[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-color: rgb(11, 45, 85);\n  padding: 0;\n}\n\n.text[_ngcontent-%COMP%] {\n  color: white;\n  padding: 30px;\n  padding-top: 10vh;\n  font-size: 14px;\n}\n\n.header[_ngcontent-%COMP%] {\n  font-family: \"Satisfy\", cursive;\n  font-size: 56px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC1pbmZvL2Fib3V0LWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixlQUFlO0FBQ2pCOztBQUNBOzs7O0dBSUciLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0LWluZm8vYWJvdXQtaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0LWluZm8ge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEsIDQ1LCA4NSk7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi50ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAzMHB4O1xuICBwYWRkaW5nLXRvcDogMTB2aDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiU2F0aXNmeVwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDU2cHg7XG59XG4vKiBcbi5hYm91dCB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA0MnB4O1xufSAqL1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-info',
                templateUrl: './about-info.component.html',
                styleUrls: ['./about-info.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _about_img_about_img_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../about-img/about-img.component */ "./src/app/components/about-img/about-img.component.ts");
/* harmony import */ var _about_info_about_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../about-info/about-info.component */ "./src/app/components/about-info/about-info.component.ts");





class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 7, vars: 0, consts: [[1, "container-fluid", "overflow-auto"], [1, "row", "top-row"], [1, "col"], [1, "col", "my-auto"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-about-img");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-about-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _about_img_about_img_component__WEBPACK_IMPORTED_MODULE_2__["AboutImgComponent"], _about_info_about_info_component__WEBPACK_IMPORTED_MODULE_3__["AboutInfoComponent"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow: hidden;\n  background-position-y: center;\n  position: absolute;\n  top: 0;\n  z-index: -100;\n}\n\n.col[_ngcontent-%COMP%] {\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsMkJBQTJCO0FBQzdCOztBQUVBOzs7Ozs7R0FNRyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IC0xMDA7XG59XG5cbi5jb2wge1xuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG4vKiAudG9wLXJvdyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgei1pbmRleDogLTEwMDtcbn0gKi9cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/contact-form/contact-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/contact-form/contact-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function() { return ContactFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/toast.service */ "./src/app/services/toast.service.ts");





const _c0 = ["myForm"];
class ContactFormComponent {
    constructor(fb, contactService, toastService) {
        this.fb = fb;
        this.contactService = contactService;
        this.toastService = toastService;
        this.contactForm = this.fb.group({
            name: [''],
            email: [''],
            subject: [''],
            message: [''],
        });
    }
    ngOnInit() { }
    onSubmit() {
        this.contactService.postMessage(this.contactForm.value);
        this.formValues.resetForm();
        this.toastService.show('Successfully submitted form!');
        // this.toastService.show('I am a success toast', {
        //   classname: 'bg-success text-light',
        //   delay: 10000,
        // });
    }
}
ContactFormComponent.ɵfac = function ContactFormComponent_Factory(t) { return new (t || ContactFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"])); };
ContactFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactFormComponent, selectors: [["app-contact-form"]], viewQuery: function ContactFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formValues = _t.first);
    } }, decls: 29, vars: 1, consts: [[1, "justify-content-center", "ml-5", "mr-5"], [3, "formGroup", "ngSubmit"], ["myForm", "ngForm"], [1, "row"], [1, "col-md-6"], ["for", "name"], ["type", "text", "formControlName", "name", 1, "form-control"], ["for", "email"], ["type", "text", "formControlName", "email", 1, "form-control"], [1, "col-md-12"], [1, "md-form", "mb-0", "mt-2"], ["for", "subject"], ["type", "text", "formControlName", "subject", 1, "form-control"], [1, "md-form", "mt-2"], ["for", "message"], ["type", "text", "formControlName", "message", 1, "form-control"], [1, "col", "mt-4", "mb-5"], ["type", "submit", 1, "btn"], [1, "status"]], template: function ContactFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactFormComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "EMAIL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "SUBJECT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "MESSAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "SUBMIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["label[_ngcontent-%COMP%] {\n  margin-bottom: 0rem;\n  color: white;\n  opacity: 75%;\n  text-shadow: 2px 2px 20px black;\n}\n\n.btn[_ngcontent-%COMP%] {\n  background-color: lightgrey;\n  outline: none;\n  border: none;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0LWZvcm0vY29udGFjdC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC1mb3JtL2NvbnRhY3QtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiAwcmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDc1JTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMjBweCBibGFjaztcbn1cblxuLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-form',
                templateUrl: './contact-form.component.html',
                styleUrls: ['./contact-form.component.css'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"] }, { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] }]; }, { formValues: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['myForm']
        }] }); })();


/***/ }),

/***/ "./src/app/components/contact-info/contact-info.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/contact-info/contact-info.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContactInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactInfoComponent", function() { return ContactInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ContactInfoComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactInfoComponent.ɵfac = function ContactInfoComponent_Factory(t) { return new (t || ContactInfoComponent)(); };
ContactInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactInfoComponent, selectors: [["app-contact-info"]], decls: 18, vars: 0, consts: [[1, "text-center"], ["href", "https://www.google.com/maps/place/Houston,+TX+77054/@29.681496,-95.4433694,13z/data=!3m1!4b1!4m5!3m4!1s0x8640c01d4be3966f:0xe4d769ccefee11df!8m2!3d29.6849782!4d-95.3991907", "target", "blank", 1, "fa-icons"], [1, "fa", "fa-map-marker", "fa-2x"], ["href", "tel:1-281-330-8004", 1, "fa-icons"], [1, "fa", "fa-phone", "mt-4", "fa-2x"], ["href", "mailto:iescan4@gmail.com", 1, "fa-icons"], [1, "fa", "fa-envelope", "mt-4", "fa-2x"]], template: function ContactInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "HOUSTON, TX 77054, USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "830-352-7507");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "IESCAN4@GMAIL.COM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["ul[_ngcontent-%COMP%] {\n  padding: 0;\n  list-style-type: none;\n  color: white;\n}\n\np[_ngcontent-%COMP%] {\n  opacity: 75%;\n  text-shadow: 2px 2px 20px black;\n}\n\n.fa[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.fa[_ngcontent-%COMP%]:hover {\n  color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0LWluZm8vY29udGFjdC1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QtaW5mby9jb250YWN0LWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbnAge1xuICBvcGFjaXR5OiA3NSU7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDIwcHggYmxhY2s7XG59XG5cbi5mYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZhOmhvdmVyIHtcbiAgY29sb3I6IGdyZXk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-info',
                templateUrl: './contact-info.component.html',
                styleUrls: ['./contact-info.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/contact-title/contact-title.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/contact-title/contact-title.component.ts ***!
  \*********************************************************************/
/*! exports provided: ContactTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactTitleComponent", function() { return ContactTitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ContactTitleComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactTitleComponent.ɵfac = function ContactTitleComponent_Factory(t) { return new (t || ContactTitleComponent)(); };
ContactTitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactTitleComponent, selectors: [["app-contact-title"]], decls: 3, vars: 0, consts: [[1, "title"], [1, "h1title", "text-center"]], template: function ContactTitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".title[_ngcontent-%COMP%] {\n  \n  \n  width: 100vw;\n  \n  \n}\n\n.h1title[_ngcontent-%COMP%] {\n  color: white;\n  padding-top: 80px;\n  padding-bottom: 35px;\n  font-size: 80px;\n  font-family: \"Satisfy\", cursive;\n  text-shadow: 4px 4px 55px black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0LXRpdGxlL2NvbnRhY3QtdGl0bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsK0JBQStCO0VBQy9CLCtCQUErQjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC10aXRsZS9jb250YWN0LXRpdGxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICAvKiBoZWlnaHQ6IDM0dmg7ICovXG4gIC8qIGhlaWdodDogMjV2aDsgKi9cbiAgd2lkdGg6IDEwMHZ3O1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgKi9cbiAgLyogYmFja2dyb3VuZDogbm9uZTsgKi9cbn1cblxuLmgxdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiA4MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzVweDtcbiAgZm9udC1zaXplOiA4MHB4O1xuICBmb250LWZhbWlseTogXCJTYXRpc2Z5XCIsIGN1cnNpdmU7XG4gIHRleHQtc2hhZG93OiA0cHggNHB4IDU1cHggYmxhY2s7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactTitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-title',
                templateUrl: './contact-title.component.html',
                styleUrls: ['./contact-title.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _contact_title_contact_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact-title/contact-title.component */ "./src/app/components/contact-title/contact-title.component.ts");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contact-form/contact-form.component */ "./src/app/components/contact-form/contact-form.component.ts");
/* harmony import */ var _contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contact-info/contact-info.component */ "./src/app/components/contact-info/contact-info.component.ts");






class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 9, vars: 0, consts: [[1, "container-fluid", "pt-5"], [1, "row"], [1, "col-9"], [1, "col-3"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-contact-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-contact-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-contact-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _contact_title_contact_title_component__WEBPACK_IMPORTED_MODULE_2__["ContactTitleComponent"], _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_3__["ContactFormComponent"], _contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_4__["ContactInfoComponent"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n  \n  height: 100vh;\n  overflow: hidden;\n  background-position-y: center;\n  position: absolute;\n  top: 0;\n  z-index: -100;\n  background-image: url('contact.jpg');\n  background-size: cover;\n}\n\n.col[_ngcontent-%COMP%] {\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n}\n\n.vertical-center[_ngcontent-%COMP%] {\n  \n  min-height: 80vh;\n\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLGFBQWE7RUFDYixvQ0FBa0Q7RUFDbEQsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7O0VBRWhCLGFBQWE7RUFDYixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XG4gIC8qIGJhY2tncm91bmQ6IHdoaXRlOyAqL1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IC0xMDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvY29udGFjdC5qcGcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uY29sIHtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxuLnZlcnRpY2FsLWNlbnRlciB7XG4gIC8qIG1pbi1oZWlnaHQ6IDEwMCU7ICovXG4gIG1pbi1oZWlnaHQ6IDgwdmg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/homepage/homepage.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jumbotron/jumbotron.component */ "./src/app/components/jumbotron/jumbotron.component.ts");




class HomepageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 3, vars: 0, consts: [[1, "container-fluid"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-jumbotron");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_2__["JumbotronComponent"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n  \n  height: 100vh;\n  overflow: hidden;\n  background-position-y: center;\n  position: absolute;\n  top: 0;\n  z-index: -100;\n  background: url('inez.jpg') no-repeat center center fixed;\n  \n  \n  background-size: cover;\n  \n  \n  background-repeat: no-repeat;\n  font-family: \"Montserrat\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sYUFBYTtFQUNiLHlEQUF1RTtFQUN2RSw0QkFBNEI7RUFDNUIsb0VBQW9FO0VBSXBFLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixxQ0FBcUM7QUFDdkMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcbiAgLyogYmFja2dyb3VuZDogd2hpdGU7ICovXG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgei1pbmRleDogLTEwMDtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbmV6LmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4gIC8qIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICovXG4gIC8qIGJhY2tncm91bmQ6IHVybChhc3NldHMvaW5lei5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyAqL1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLyogYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgKi9cbiAgLyogaGVpZ2h0OiAxMDAlOyAqL1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/jumbotron/jumbotron.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/jumbotron/jumbotron.component.ts ***!
  \*************************************************************/
/*! exports provided: JumbotronComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JumbotronComponent", function() { return JumbotronComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class JumbotronComponent {
    constructor() { }
    ngOnInit() {
    }
}
JumbotronComponent.ɵfac = function JumbotronComponent_Factory(t) { return new (t || JumbotronComponent)(); };
JumbotronComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JumbotronComponent, selectors: [["app-jumbotron"]], decls: 6, vars: 0, consts: [[1, "jumbotron", "vertical-center"], [1, "container", "my-auto"], [1, "display-4"], [1, "lead"]], template: function JumbotronComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Inez Escandon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ELEMENTARY TEACHER TURNED WEB DEVELOPER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".jumbotron[_ngcontent-%COMP%] {\n  background: none;\n  \n  \n  width: 100%;\n  \n  \n  \n  padding-top: 0;\n}\n\n.display-4[_ngcontent-%COMP%] {\n  \n  color: white;\n  \n  font-size: 100px;\n  text-align: center;\n  font-family: \"Satisfy\", cursive;\n  text-shadow: 5px 5px 75px black;\n}\n.lead[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n  \n  opacity: 75%;\n  text-shadow: 2px 2px 20px black;\n}\n\n.vertical-center[_ngcontent-%COMP%] {\n  \n  min-height: 100vh;\n\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9qdW1ib3Ryb24vanVtYm90cm9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0Qjs7O2tCQUdnQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0E7O0dBRUc7QUFFSDtFQUNFLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLCtCQUErQjtBQUNqQztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLCtCQUErQjtBQUNqQztBQUVBOztHQUVHO0FBRUg7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCOztFQUVqQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9qdW1ib3Ryb24vanVtYm90cm9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgLyogYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgKi9cbiAgLyogYmFja2dyb3VuZDogd2hpdGU7ICovXG4gIHdpZHRoOiAxMDAlO1xuICAvKiBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7ICovXG4gIC8qIG92ZXJmbG93OiBoaWRkZW47ICovXG4gIC8qIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgei1pbmRleDogLTEwMDsgKi9cbiAgcGFkZGluZy10b3A6IDA7XG59XG4vKiAuY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn0gKi9cblxuLmRpc3BsYXktNCB7XG4gIC8qIHBhZGRpbmctdG9wOiAxNzVweDsgKi9cbiAgY29sb3I6IHdoaXRlO1xuICAvKiBjb2xvcjogYmxhY2s7ICovXG4gIGZvbnQtc2l6ZTogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiU2F0aXNmeVwiLCBjdXJzaXZlO1xuICB0ZXh0LXNoYWRvdzogNXB4IDVweCA3NXB4IGJsYWNrO1xufVxuXG4ubGVhZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICAvKiBjb2xvcjogYmxhY2s7ICovXG4gIG9wYWNpdHk6IDc1JTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMjBweCBibGFjaztcbn1cblxuLyogLmNvbCB7XG4gIGhlaWdodDogMTAwdmg7XG59ICovXG5cbi52ZXJ0aWNhbC1jZW50ZXIge1xuICAvKiBtaW4taGVpZ2h0OiAxMDAlOyAqL1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JumbotronComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-jumbotron',
                templateUrl: './jumbotron.component.html',
                styleUrls: ['./jumbotron.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/navbar-light/navbar-light.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/navbar-light/navbar-light.component.ts ***!
  \*******************************************************************/
/*! exports provided: NavbarLightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarLightComponent", function() { return NavbarLightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class NavbarLightComponent {
    constructor() { }
    ngOnInit() { }
    openNav() {
        document.getElementById('mySidenav').style.width = '250px';
    }
    closeNav() {
        document.getElementById('mySidenav').style.width = '0';
    }
}
NavbarLightComponent.ɵfac = function NavbarLightComponent_Factory(t) { return new (t || NavbarLightComponent)(); };
NavbarLightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarLightComponent, selectors: [["app-navbar-light"]], decls: 23, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark"], ["id", "mySidenav", 1, "sidenav", "mr-auto"], ["href", "javascript:void(0)", 1, "closebtn", 3, "click"], ["href", "#", 1, "logo"], ["src", "../../../assets/apple.png", "id", "sidenav-placeholder", 1, "my-2", "mx-auto", "d-block", "logo"], ["routerLink", "/about", 3, "click"], ["routerLink", "/portfolio", 3, "click"], ["routerLink", "/resume", 3, "click"], ["routerLink", "/contact", 3, "click"], [1, "navbar-nav", "hamburger-icon", "mr-auto", 3, "click"], [1, "navbar-brand", "menu", "pt-4"], ["href", "https://www.linkedin.com/in/iescandon/", "target", "_blank", 1, "fa", "fa-linkedin"], ["href", "https://github.com/iescandon", "target", "_blank", 1, "fa", "fa-github"], ["href", "https://www.instagram.com/inescandon/?hl=en", "target", "_blank", 1, "fa", "fa-instagram"]], template: function NavbarLightComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarLightComponent_Template_a_click_2_listener() { return ctx.closeNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarLightComponent_Template_a_click_6_listener() { return ctx.closeNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarLightComponent_Template_a_click_8_listener() { return ctx.closeNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "PORTFOLIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarLightComponent_Template_a_click_10_listener() { return ctx.closeNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "RESUME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarLightComponent_Template_a_click_12_listener() { return ctx.closeNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarLightComponent_Template_span_click_14_listener() { return ctx.openNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u2630");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".navbar-brand[_ngcontent-%COMP%] {\n  list-style: none;\n  display: inline-block;\n  padding-left: 0;\n}\n\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n.fa-linkedin[_ngcontent-%COMP%], .fa-github[_ngcontent-%COMP%], .fa-instagram[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 41.5px;\n  font-size: 20px;\n  text-align: center;\n  text-decoration: none;\n  color: black;\n  border-radius: 50%;\n}\n\n.fa-linkedin[_ngcontent-%COMP%]:hover, .fa-github[_ngcontent-%COMP%]:hover, .fa-instagram[_ngcontent-%COMP%]:hover, .hamburger-icon[_ngcontent-%COMP%]:hover {\n  color: darkgray;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #f2f2f2;\n  overflow-x: hidden;\n  transition: 0.5s;\n  padding-top: 60px;\n}\n\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 8px 8px 8px 32px;\n  text-decoration: none;\n  font-size: 18px;\n  color: black;\n  display: block;\n  transition: 0.3s;\n}\n\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: rgb(30, 105, 190);\n}\n\n.sidenav[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 25px;\n  font-size: 36px;\n  margin-left: 50px;\n}\n\n.hamburger-icon[_ngcontent-%COMP%] {\n  padding-left: 24px;\n  font-size: 30px;\n  cursor: pointer;\n  color: black;\n}\n\n@media screen and (max-height: 450px) {\n  .sidenav[_ngcontent-%COMP%] {\n    padding-top: 15px;\n  }\n  .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n\nnav[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n#sidenav-placeholder[_ngcontent-%COMP%] {\n  width: 35%;\n  \n  \n}\n\na.logo[_ngcontent-%COMP%] {\n  padding-left: 0 !important;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXItbGlnaHQvbmF2YmFyLWxpZ2h0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBOzs7RUFHRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7Ozs7RUFJRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFFBQVE7RUFDUixlQUFlO0VBQ2YsVUFBVTtFQUNWLE1BQU07RUFDTixPQUFPO0VBQ1AseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakI7MkJBQ3lCO0FBQzNCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyLWxpZ2h0L25hdmJhci1saWdodC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1icmFuZCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4ubWVudSBsaSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLmZhLWxpbmtlZGluLFxuLmZhLWdpdGh1Yixcbi5mYS1pbnN0YWdyYW0ge1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogNDEuNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmZhLWxpbmtlZGluOmhvdmVyLFxuLmZhLWdpdGh1Yjpob3Zlcixcbi5mYS1pbnN0YWdyYW06aG92ZXIsXG4uaGFtYnVyZ2VyLWljb246aG92ZXIge1xuICBjb2xvcjogZGFya2dyYXk7XG59XG5cbi5zaWRlbmF2IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgcGFkZGluZy10b3A6IDYwcHg7XG59XG5cbi5zaWRlbmF2IGEge1xuICBwYWRkaW5nOiA4cHggOHB4IDhweCAzMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IGJsYWNrO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLnNpZGVuYXYgYTpob3ZlciB7XG4gIGNvbG9yOiByZ2IoMzAsIDEwNSwgMTkwKTtcbn1cblxuLnNpZGVuYXYgLmNsb3NlYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDM2cHg7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4uaGFtYnVyZ2VyLWljb24ge1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xuICAuc2lkZW5hdiB7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gIH1cbiAgLnNpZGVuYXYgYSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59XG5cbm5hdiB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbiNzaWRlbmF2LXBsYWNlaG9sZGVyIHtcbiAgd2lkdGg6IDM1JTtcbiAgLyogaGVpZ2h0OiAyNSU7ICovXG4gIC8qIGNsaXAtcGF0aDogY2lyY2xlKDQwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7ICovXG59XG5cbmEubG9nbyB7XG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICAvKiBtYXJnaW4tdG9wOiAxMnB4OyAqL1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarLightComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar-light',
                templateUrl: './navbar-light.component.html',
                styleUrls: ['./navbar-light.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class NavbarComponent {
    constructor() { }
    ngOnInit() { }
    openNav() {
        document.getElementById('mySidenav').style.width = '250px';
    }
    closeNav() {
        document.getElementById('mySidenav').style.width = '0';
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 23, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark"], ["id", "mySidenav", 1, "sidenav", "mr-auto"], ["href", "javascript:void(0)", 1, "closebtn", 3, "click"], ["href", "#", 1, "logo"], ["src", "../../../assets/apple.png", "id", "sidenav-placeholder", 1, "my-2", "mx-auto", "d-block", "logo"], ["routerLink", "/about", 3, "click"], ["routerLink", "/portfolio", 3, "click"], ["routerLink", "/resume", 3, "click"], ["routerLink", "/contact", 3, "click"], [1, "navbar-nav", "hamburger-icon", "mr-auto", 3, "click"], [1, "navbar-brand", "menu", "pt-4"], ["href", "https://www.linkedin.com/in/iescandon/", "target", "_blank", 1, "fa", "fa-linkedin"], ["href", "https://github.com/iescandon", "target", "_blank", 1, "fa", "fa-github"], ["href", "https://www.instagram.com/inescandon/?hl=en", "target", "_blank", 1, "fa", "fa-instagram"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_2_listener() { return ctx.closeNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_6_listener() { return ctx.closeNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_8_listener() { return ctx.closeNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "PORTFOLIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_10_listener() { return ctx.closeNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "RESUME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_12_listener() { return ctx.closeNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_span_click_14_listener() { return ctx.openNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u2630");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".navbar-brand[_ngcontent-%COMP%] {\n  list-style: none;\n  display: inline-block;\n  padding-left: 0;\n  \n  \n  \n  \n  \n  \n}\n\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n.fa-linkedin[_ngcontent-%COMP%], .fa-github[_ngcontent-%COMP%], .fa-instagram[_ngcontent-%COMP%] {\n  padding: 10px;\n  \n  \n  width: 41.5px;\n  font-size: 20px;\n  text-align: center;\n  text-decoration: none;\n  color: white;\n  \n  border-radius: 50%;\n  \n}\n\n.fa-linkedin[_ngcontent-%COMP%]:hover, .fa-github[_ngcontent-%COMP%]:hover, .fa-instagram[_ngcontent-%COMP%]:hover, .hamburger-icon[_ngcontent-%COMP%]:hover {\n  color: #ffffff80;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #f2f2f2;\n  overflow-x: hidden;\n  transition: 0.5s;\n  padding-top: 60px;\n}\n\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 8px 8px 8px 32px;\n  text-decoration: none;\n  font-size: 18px;\n  color: black;\n  display: block;\n  transition: 0.3s;\n}\n\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: rgb(30, 105, 190);\n}\n\n.sidenav[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 25px;\n  font-size: 36px;\n  margin-left: 50px;\n}\n\n.hamburger-icon[_ngcontent-%COMP%] {\n  padding-left: 24px;\n  font-size: 30px;\n  cursor: pointer;\n  color: white;\n}\n\n@media screen and (max-height: 450px) {\n  .sidenav[_ngcontent-%COMP%] {\n    padding-top: 15px;\n  }\n  .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n\nnav[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n#sidenav-placeholder[_ngcontent-%COMP%] {\n  width: 35%;\n  \n  \n}\n\na.logo[_ngcontent-%COMP%] {\n  padding-left: 0 !important;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZjs7dUJBRXFCO0VBQ3JCLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLHFDQUFxQztFQUNyQyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBOzs7RUFHRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsNkJBQTZCO0FBQy9COztBQUVBOzs7O0VBSUUsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFFBQVE7RUFDUixlQUFlO0VBQ2YsVUFBVTtFQUNWLE1BQU07RUFDTixPQUFPO0VBQ1AseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakI7MkJBQ3lCO0FBQzNCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1icmFuZCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICAvKiBwYWRkaW5nLXRvcDogMC4zMTI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC4zMTI1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07ICovXG4gIC8qIGZvbnQtc2l6ZTogMS4yNXJlbTsgKi9cbiAgLyogbGluZS1oZWlnaHQ6IGluaGVyaXQ7ICovXG4gIC8qIHdoaXRlLXNwYWNlOiBub3dyYXA7ICovXG4gIC8qIGZvbnQtZmFtaWx5OiBcIlNhdGlzZnlcIiwgY3Vyc2l2ZTsgKi9cbiAgLyogZm9udC1zaXplOiA3MnB4OyAqL1xufVxuXG4ubWVudSBsaSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLmZhLWxpbmtlZGluLFxuLmZhLWdpdGh1Yixcbi5mYS1pbnN0YWdyYW0ge1xuICBwYWRkaW5nOiAxMHB4O1xuICAvKiBwYWRkaW5nLXRvcDogMjBweDsgKi9cbiAgLyogbWFyZ2luLXRvcDogMThweDsgKi9cbiAgd2lkdGg6IDQxLjVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICAvKiBjb2xvcjogI2ZmZmZmZjgwOyAqL1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xufVxuXG4uZmEtbGlua2VkaW46aG92ZXIsXG4uZmEtZ2l0aHViOmhvdmVyLFxuLmZhLWluc3RhZ3JhbTpob3Zlcixcbi5oYW1idXJnZXItaWNvbjpob3ZlciB7XG4gIGNvbG9yOiAjZmZmZmZmODA7XG59XG5cbi5zaWRlbmF2IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgcGFkZGluZy10b3A6IDYwcHg7XG59XG5cbi5zaWRlbmF2IGEge1xuICBwYWRkaW5nOiA4cHggOHB4IDhweCAzMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IGJsYWNrO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLnNpZGVuYXYgYTpob3ZlciB7XG4gIGNvbG9yOiByZ2IoMzAsIDEwNSwgMTkwKTtcbn1cblxuLnNpZGVuYXYgLmNsb3NlYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDM2cHg7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4uaGFtYnVyZ2VyLWljb24ge1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xuICAuc2lkZW5hdiB7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gIH1cbiAgLnNpZGVuYXYgYSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59XG5cbm5hdiB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbiNzaWRlbmF2LXBsYWNlaG9sZGVyIHtcbiAgd2lkdGg6IDM1JTtcbiAgLyogaGVpZ2h0OiAyNSU7ICovXG4gIC8qIGNsaXAtcGF0aDogY2lyY2xlKDQwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7ICovXG59XG5cbmEubG9nbyB7XG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICAvKiBtYXJnaW4tdG9wOiAxMnB4OyAqL1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/portfolio-items/portfolio-items.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/portfolio-items/portfolio-items.component.ts ***!
  \*************************************************************************/
/*! exports provided: PortfolioItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioItemsComponent", function() { return PortfolioItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PortfolioItemsComponent {
    constructor() { }
    ngOnInit() {
    }
}
PortfolioItemsComponent.ɵfac = function PortfolioItemsComponent_Factory(t) { return new (t || PortfolioItemsComponent)(); };
PortfolioItemsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioItemsComponent, selectors: [["app-portfolio-items"]], decls: 57, vars: 0, consts: [[1, "items"], [1, "row", "pics", "pt-5"], [1, "col", "my-auto"], ["src", "../../../assets/salud.png", "alt", "", 1, "image", "img-fluid"], ["href", "https://salud-cocktails.herokuapp.com/home", "target", "_blank"], [1, "overlay"], [1, "text"], [1, "col"], ["src", "../../../assets/burger-app.png", "alt", "", 1, "image", "img-fluid"], ["href", "https://obscure-lowlands-97631.herokuapp.com/", "target", "_blank"], ["src", "../../../assets/ask-winston.png", "alt", "", 1, "image", "img-fluid"], ["href", "https://on-your-marc-go.github.io/Ask-Winston-Music-Rec-Engine/", "target", "_blank"], [1, "row", "pics", "pb-5"], ["src", "../../../assets/note-taker.png", "alt", "", 1, "image", "img-fluid"], ["href", "https://sleepy-crag-82469.herokuapp.com/", "target", "_blank"], ["src", "../../../assets/code-quiz.png", "alt", "", 1, "image", "img-fluid"], ["href", "https://iescandon.github.io/code-quiz/", "target", "_blank"], ["src", "../../../assets/weather-dashboard.png", "alt", "", 1, "image", "img-fluid"], ["href", "https://iescandon.github.io/weather-dashboard/", "target", "_blank"]], template: function PortfolioItemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "SALUD!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Salud! was a labor of love for its creators. In the week and a half we had to build Salud!, we learned and implemented both Angular and JSON Web Tokens. We built our database from scratch using MySQL and Sequelize, and used ngBootstrap for front-end styling. The idea grew from a desire to have a lightweight, unintrusive way to find and save our favorite cocktail recipes. We hope this app makes the good times better for anyone who uses it! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "EAT DA BURGER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " This application is a full-stack application designed as a burger logger that utilizes MySQL, Express, Handlebars and a homemade ORM. The user can view burgers, create burgers, and eat burgers all of which are rendered immediately based on the up-to-date database. MVC design pattern was followed, Node and MySQL were used to query and route data in the app, while Handlebars was used to generate the HTML. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "ASK WINSTON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Ask Winston is a music recommendation search engine created by Marc Arguijo, Ramon Garza III, and Inez Escand\u00F3n. This application allows the user to search by artist or song to get similar artists or songs respectively. Top songs, artists, and albums are also available for those who would just like popular music recommendation of the month. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "NOTE TAKER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " This application is designed to function as a note taker. The user can create notes, save notes, view notes, and even delete notes with ease. These notes get pushed to the server allowing for these notes to be stored and not lost. Notes get written to a db.json file. HTML and CSS are simple and minimalistic to make the application aesthetically appealing and user friendly. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "CODE QUIZ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Code Quiz is an application that tests your knowledge of coding. The user is being timed throughout the quiz and is provided with immediate feedback on whether their answer was correct/incorrect and which answer was the correct choice if their answer was incorrect. The user is allowed to save their highscore into local storage allowing them to view it at anytime. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "WEATHER DASHBOARD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Weather Dashboard is an application that displays current weather information as well as a 5 day forecast. User utilizes the search bar to search for the city of their choice. Previously searched cities get saved as buttons under search bar. Current weather provides you with temperature, humidity, wind speed, UV Index, and an icon representing the weather. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".items[_ngcontent-%COMP%] {\n  \n  background-color: #f2f2f2;\n  height: 75vh;\n}\n\n.col[_ngcontent-%COMP%] {\n  \n  \n  margin: 10px;\n  padding: 0;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.pics[_ngcontent-%COMP%] {\n  padding-left: 80px;\n  padding-right: 80px;\n}\n\n\n\n.col[_ngcontent-%COMP%] {\n  position: relative;\n  width: 50%;\n}\n\n.image[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  transition: 0.5s ease;\n  background-color: black;\n}\n\n.col[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  opacity: 85%;\n  cursor: pointer;\n}\n\n.text[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 11px;\n  margin: 15px;\n  vertical-align: middle;\n  \n  \n  \n  \n}\n\nh6[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3J0Zm9saW8taXRlbXMvcG9ydGZvbGlvLWl0ZW1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtpQkFDZTtFQUNmLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7O0dBRUc7O0FBRUg7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qjs7Y0FFWTtFQUNaO3lDQUN1QztFQUN2QyxzQ0FBc0M7RUFDdEMsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3J0Zm9saW8taXRlbXMvcG9ydGZvbGlvLWl0ZW1zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbXMge1xuICAvKiBoZWlnaHQ6IDgwdmg7XG4gIHdpZHRoOiAxMDB2dzsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgaGVpZ2h0OiA3NXZoO1xufVxuXG4uY29sIHtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xuICAvKiBoZWlnaHQ6IDIydmg7ICovXG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogMDtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4ucGljcyB7XG4gIHBhZGRpbmctbGVmdDogODBweDtcbiAgcGFkZGluZy1yaWdodDogODBweDtcbn1cblxuLyogaW1nOmhvdmVyIHtcbiAgb3BhY2l0eTogNTAlO1xufSAqL1xuXG4uY29sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNTAlO1xufVxuXG4uaW1hZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLmNvbDpob3ZlciAub3ZlcmxheSB7XG4gIG9wYWNpdHk6IDg1JTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW46IDE1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTsgKi9cbiAgLyogLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAqL1xuICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgKi9cbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xufVxuXG5oNiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioItemsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portfolio-items',
                templateUrl: './portfolio-items.component.html',
                styleUrls: ['./portfolio-items.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/portfolio-title/portfolio-title.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/portfolio-title/portfolio-title.component.ts ***!
  \*************************************************************************/
/*! exports provided: PortfolioTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioTitleComponent", function() { return PortfolioTitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PortfolioTitleComponent {
    constructor() { }
    ngOnInit() {
    }
}
PortfolioTitleComponent.ɵfac = function PortfolioTitleComponent_Factory(t) { return new (t || PortfolioTitleComponent)(); };
PortfolioTitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioTitleComponent, selectors: [["app-portfolio-title"]], decls: 3, vars: 0, consts: [[1, "title"], [1, "h1title", "text-center"]], template: function PortfolioTitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".title[_ngcontent-%COMP%] {\n  \n  \n  width: 100vw;\n  background-color: white;\n  \n}\n\n.h1title[_ngcontent-%COMP%] {\n  color: black;\n  padding-top: 50px;\n  padding-bottom: 35px;\n  font-size: 66px;\n  font-family: \"Satisfy\", cursive;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3J0Zm9saW8tdGl0bGUvcG9ydGZvbGlvLXRpdGxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLCtCQUErQjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9ydGZvbGlvLXRpdGxlL3BvcnRmb2xpby10aXRsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgLyogaGVpZ2h0OiAzNHZoOyAqL1xuICAvKiBoZWlnaHQ6IDI1dmg7ICovXG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC8qIGJhY2tncm91bmQ6IG5vbmU7ICovXG59XG5cbi5oMXRpdGxlIHtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDM1cHg7XG4gIGZvbnQtc2l6ZTogNjZweDtcbiAgZm9udC1mYW1pbHk6IFwiU2F0aXNmeVwiLCBjdXJzaXZlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioTitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portfolio-title',
                templateUrl: './portfolio-title.component.html',
                styleUrls: ['./portfolio-title.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.ts ***!
  \*************************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_light_navbar_light_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar-light/navbar-light.component */ "./src/app/components/navbar-light/navbar-light.component.ts");
/* harmony import */ var _portfolio_title_portfolio_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../portfolio-title/portfolio-title.component */ "./src/app/components/portfolio-title/portfolio-title.component.ts");
/* harmony import */ var _portfolio_items_portfolio_items_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../portfolio-items/portfolio-items.component */ "./src/app/components/portfolio-items/portfolio-items.component.ts");





class PortfolioComponent {
    constructor() { }
    ngOnInit() {
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(); };
PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["app-portfolio"]], decls: 6, vars: 0, consts: [[1, "container-fluid", "overflow-auto"], [1, "row"]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar-light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-portfolio-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-portfolio-items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_light_navbar_light_component__WEBPACK_IMPORTED_MODULE_1__["NavbarLightComponent"], _portfolio_title_portfolio_title_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioTitleComponent"], _portfolio_items_portfolio_items_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioItemsComponent"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n  background-color: white;\n  height: 100vh;\n  overflow: hidden;\n  background-position-y: center;\n  position: absolute;\n  top: 0;\n  z-index: -100;\n}\n\n.col-5[_ngcontent-%COMP%], .col-7[_ngcontent-%COMP%] {\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgei1pbmRleDogLTEwMDtcbn1cblxuLmNvbC01LFxuLmNvbC03IHtcbiAgcGFkZGluZzogMDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portfolio',
                templateUrl: './portfolio.component.html',
                styleUrls: ['./portfolio.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/resume-info/resume-info.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/resume-info/resume-info.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResumeInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeInfoComponent", function() { return ResumeInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _resume_title_resume_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resume-title/resume-title.component */ "./src/app/components/resume-title/resume-title.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _scroll_spy_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../scroll-spy.directive */ "./src/app/scroll-spy.directive.ts");





const _c0 = function (a0) { return { "current-section": a0 }; };
const _c1 = function () { return ["DIV"]; };
class ResumeInfoComponent {
    constructor() {
        this.currentSection = 'section1';
    }
    ngOnInit() { }
    onSectionChange(sectionId) {
        this.currentSection = sectionId;
    }
    scrollTo(section) {
        document.querySelector('#' + section).scrollIntoView();
    }
}
ResumeInfoComponent.ɵfac = function ResumeInfoComponent_Factory(t) { return new (t || ResumeInfoComponent)(); };
ResumeInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResumeInfoComponent, selectors: [["app-resume-info"]], decls: 164, vars: 17, consts: [[1, "container-fluid"], [1, "row", "under-hero"], [1, "col-3", "left-col", "bd-toc", "vertical-center", "justify-content-center"], [1, ""], [1, "mb-4", "text-center"], ["href", "./assets/InezEscandonCoding.pdf", "download", ""], ["id", "list-example", 1, "list-group", "list-group-flush"], [1, "list-group-item", "list-group-item-action", "text-center", "item1", 3, "ngClass", "click"], [1, "list-group-item", "list-group-item-action", "text-center", "item2", 3, "ngClass", "click"], [1, "list-group-item", "list-group-item-action", "text-center", "item3", 3, "ngClass", "click"], [1, "list-group-item", "list-group-item-action", "text-center", "item4", 3, "ngClass", "click"], [1, "list-group-item", "list-group-item-action", "text-center", "item5", 3, "ngClass", "click"], ["id", "parentDiv", "scrollSpy", "", 1, "col-9", "pl-5", "right-col", 2, "height", "100vh", "overflow-y", "scroll", 3, "spiedTags", "sectionChange"], ["id", "section1"], ["data-name", "education"], ["id", "section2"], ["data-name", "experience"], ["id", "section3"], ["data-name", "skills"], [1, "row"], [1, "col"], ["id", "section4"], ["src", "../../../assets/longhorn.png", "alt", "", "height", "72px"], ["src", "../../../assets/rowdy.png", "alt", "", "height", "72px"], ["id", "section5"], ["data-name", "hobbies"]], template: function ResumeInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-resume-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "DOWNLOAD RESUME PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResumeInfoComponent_Template_div_click_9_listener() { return ctx.scrollTo("section1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Objective ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResumeInfoComponent_Template_div_click_11_listener() { return ctx.scrollTo("section2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Experience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResumeInfoComponent_Template_div_click_13_listener() { return ctx.scrollTo("section3"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Skills ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResumeInfoComponent_Template_div_click_15_listener() { return ctx.scrollTo("section4"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Education ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResumeInfoComponent_Template_div_click_17_listener() { return ctx.scrollTo("section5"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Hobbies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sectionChange", function ResumeInfoComponent_Template_div_sectionChange_19_listener($event) { return ctx.onSectionChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "OBJECTIVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Looking to leverage ten years experience as an educator to quickly learn and grow in a web development career. Because of her professionalism and strong work ethic, she has been put into leadership roles and been asked to mentor other teachers. As an educator, she has proved her strong organizational/communication skills and ability to effectively multitask/manage challenging tasks all while achieving the goals in a fast-paced work environment. A highly motivated self-starter who is fully committed to proving herself in a new career, she would be a great asset to any company. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "EXPERIENCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Physical Education Teacher, Deer Park ISD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Pasadena, TX (Aug 2017 - Aug 2020)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Bilingual Teacher, Deer Park ISD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Pasadena, TX (Aug 2014 - Aug 2017)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Instructional Technology Specialist, Sheldon ISD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Sheldon, TX (Aug 2013 - Aug 2014)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Dual Language Teacher, North East ISD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " San Antonio, TX (Aug 2010 - Aug 2013)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "SKILLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Technical Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "- HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "- CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "- Bootstrap CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "- Materialize CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "- Javascript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "- JSON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "- jQuery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "- AJAX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "- Web APIs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "- Node.js");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "- ExpressJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "- Express Handlebars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "- MySQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "- Sequelize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "- Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "- UI/UX Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Additional Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "- Bilingual (English & Spanish)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "- Leadership/Takes Initiative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "- Strong Problem Solving Abilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "- Ability to Work in a Team/Adaptable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "- High Attention to Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "- Effective Communication");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "- Energetic Work Attitude");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "- Creative and Innovative Thinking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "- Quick Learner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "EDUCATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "University of Texas at Austin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " Austin, TX (May 2010)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " Bachelors in Bilingual Education ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "University of Texas at San Antonio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " San Antonio, TX (May 2013)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " Masters in Instructional Technology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "h4", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "HOBBIES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " Fitness, Dance, Music, Mountain Biking, Brazilian Jiu Jitsu, & Mixology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.currentSection === "section1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.currentSection === "section2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.currentSection === "section3"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.currentSection === "section4"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.currentSection === "section5"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("spiedTags", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c1));
    } }, directives: [_resume_title_resume_title_component__WEBPACK_IMPORTED_MODULE_1__["ResumeTitleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _scroll_spy_directive__WEBPACK_IMPORTED_MODULE_3__["ScrollSpyDirective"]], styles: [".left-col[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 35vw;\n  \n  \n}\n\n.right-col[_ngcontent-%COMP%] {\n  width: 65vw;\n  background-color: #f2f2f2;\n  \n  \n  padding-top: 90px;\n}\n\n.bd-toc[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 4rem;\n  height: calc(100vh - 4rem);\n  overflow-y: auto;\n  -webkit-box-ordinal-group: 3;\n  -ms-flex-order: 2;\n  padding-bottom: 1.5rem;\n  font-size: 0.875rem;\n}\n\nh4[_ngcontent-%COMP%], i[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n\n\n.vertical-center[_ngcontent-%COMP%] {\n  \n  min-height: 80vh;\n  display: flex;\n  align-items: center;\n}\n\n.current-section[_ngcontent-%COMP%] {\n  background-color: rgb(245, 220, 0);\n}\n\n.current-section[_ngcontent-%COMP%]::after {\n  \n  \n  \n  \n}\n\n.list-group-item[_ngcontent-%COMP%]:hover {\n  cursor: pointer !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bWUtaW5mby9yZXN1bWUtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRzs7QUFFSDtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7Ozs7R0FJRzs7QUFFSDtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUI7O3NCQUVvQjtFQUNwQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jlc3VtZS1pbmZvL3Jlc3VtZS1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuY29udGFpbmVyLWZsdWlkIHtcbiAgcGFkZGluZzogODBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbn0gKi9cblxuLmxlZnQtY29sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAzNXZ3O1xuICAvKiBoZWlnaHQ6IDYwMHB4OyAqL1xuICAvKiBwYWRkaW5nLXRvcDogODBweDsgKi9cbn1cblxuLnJpZ2h0LWNvbCB7XG4gIHdpZHRoOiA2NXZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAvKiBvdmVyZmxvdzogc2Nyb2xsOyAqL1xuICAvKiBjb2xvcjogd2hpdGU7ICovXG4gIHBhZGRpbmctdG9wOiA5MHB4O1xufVxuXG4uYmQtdG9jIHtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDRyZW07XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDRyZW0pO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAzO1xuICAtbXMtZmxleC1vcmRlcjogMjtcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cblxuaDQsXG5pIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLyogXG5oNCxcbnAge1xuICBjb2xvcjogYmxhY2s7XG59ICovXG5cbi52ZXJ0aWNhbC1jZW50ZXIge1xuICAvKiBtaW4taGVpZ2h0OiAxMDAlOyAqL1xuICBtaW4taGVpZ2h0OiA4MHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY3VycmVudC1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjIwLCAwKTtcbn1cbi5jdXJyZW50LXNlY3Rpb246OmFmdGVyIHtcbiAgLyogY29udGVudDogXCJcXDAzOWVcIjsgKi9cbiAgLyogYmFja2dyb3VuZC1jb2xvcjogeWVsbG93OyAqL1xuICAvKiBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjVyZW07ICovXG4gIC8qIG1hcmdpbi1sZWZ0OiAwLjVyZW07ICovXG59XG5cbi5saXN0LWdyb3VwLWl0ZW06aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resume-info',
                templateUrl: './resume-info.component.html',
                styleUrls: ['./resume-info.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/resume-title/resume-title.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/resume-title/resume-title.component.ts ***!
  \*******************************************************************/
/*! exports provided: ResumeTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeTitleComponent", function() { return ResumeTitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ResumeTitleComponent {
    constructor() { }
    ngOnInit() {
    }
}
ResumeTitleComponent.ɵfac = function ResumeTitleComponent_Factory(t) { return new (t || ResumeTitleComponent)(); };
ResumeTitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResumeTitleComponent, selectors: [["app-resume-title"]], decls: 3, vars: 0, consts: [[1, "title"], [1, "h1title", "text-center", "mb-5"]], template: function ResumeTitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".title[_ngcontent-%COMP%] {\n  \n  \n  \n  \n}\n\n.h1title[_ngcontent-%COMP%] {\n  color: black;\n  \n  font-size: 66px;\n  font-family: \"Satisfy\", cursive;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bWUtdGl0bGUvcmVzdW1lLXRpdGxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHVDQUF1QztFQUN2QyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZiwrQkFBK0I7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jlc3VtZS10aXRsZS9yZXN1bWUtdGl0bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG4gIC8qIGhlaWdodDogMzR2aDsgKi9cbiAgLyogd2lkdGg6IDEwMHZ3OyAqL1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEsIDU5LCAxMSk7ICovXG4gIC8qIGJhY2tncm91bmQ6IG5vbmU7ICovXG59XG5cbi5oMXRpdGxlIHtcbiAgY29sb3I6IGJsYWNrO1xuICAvKiBwYWRkaW5nLXRvcDogNTBweDsgKi9cbiAgZm9udC1zaXplOiA2NnB4O1xuICBmb250LWZhbWlseTogXCJTYXRpc2Z5XCIsIGN1cnNpdmU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeTitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resume-title',
                templateUrl: './resume-title.component.html',
                styleUrls: ['./resume-title.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/resume/resume.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/resume/resume.component.ts ***!
  \*******************************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_light_navbar_light_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar-light/navbar-light.component */ "./src/app/components/navbar-light/navbar-light.component.ts");
/* harmony import */ var _resume_info_resume_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resume-info/resume-info.component */ "./src/app/components/resume-info/resume-info.component.ts");




class ResumeComponent {
    constructor() { }
    ngOnInit() {
    }
}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(); };
ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["app-resume"]], decls: 4, vars: 0, consts: [[1, "container-fluid", "overflow-auto"], [1, "row"]], template: function ResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar-light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-resume-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_light_navbar_light_component__WEBPACK_IMPORTED_MODULE_1__["NavbarLightComponent"], _resume_info_resume_info_component__WEBPACK_IMPORTED_MODULE_2__["ResumeInfoComponent"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n  background-color: white;\n  height: 100vh;\n  overflow: hidden;\n  background-position-y: center;\n  position: absolute;\n  top: 0;\n  z-index: -100;\n}\n\n.col[_ngcontent-%COMP%] {\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsMkJBQTJCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgei1pbmRleDogLTEwMDtcbn1cblxuLmNvbCB7XG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resume',
                templateUrl: './resume.component.html',
                styleUrls: ['./resume.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/toast/toast.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/toast/toast.component.ts ***!
  \*****************************************************/
/*! exports provided: ToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return ToastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");





function ToastComponent_ngb_toast_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-toast", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hide", function ToastComponent_ngb_toast_0_Template_ngb_toast_hide_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const toast_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.toastService.remove(toast_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const toast_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autohide", true)("delay", toast_r1.delay || 5000);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](toast_r1.body);
} }
class ToastComponent {
    constructor(toastService) {
        this.toastService = toastService;
    }
    ngOnInit() { }
}
ToastComponent.ɵfac = function ToastComponent_Factory(t) { return new (t || ToastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"])); };
ToastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToastComponent, selectors: [["app-toast"]], decls: 1, vars: 1, consts: [[3, "autohide", "delay", "hide", 4, "ngFor", "ngForOf"], [3, "autohide", "delay", "hide"]], template: function ToastComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ToastComponent_ngb_toast_0_Template, 2, 3, "ngb-toast", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toastService.toasts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbToast"]], styles: ["[_nghost-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  margin: 0.5em;\n  z-index: 1200;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2FzdC90b2FzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxRQUFRO0VBQ1IsYUFBYTtFQUNiLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9hc3QvdG9hc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDAuNWVtO1xuICB6LWluZGV4OiAxMjAwO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-toast',
                templateUrl: './toast.component.html',
                styleUrls: ['./toast.component.css'],
            }]
    }], function () { return [{ type: _services_toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/scroll-spy.directive.ts":
/*!*****************************************!*\
  !*** ./src/app/scroll-spy.directive.ts ***!
  \*****************************************/
/*! exports provided: ScrollSpyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollSpyDirective", function() { return ScrollSpyDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ScrollSpyDirective {
    constructor(_el) {
        this._el = _el;
        this.spiedTags = [];
        this.sectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onScroll(event) {
        let currentSection;
        const children = this._el.nativeElement.children;
        const scrollTop = event.target.scrollTop;
        const parentOffset = event.target.offsetTop;
        for (let i = 0; i < children.length; i++) {
            const element = children[i];
            if (this.spiedTags.some((spiedTag) => spiedTag === element.tagName)) {
                if (element.offsetTop - parentOffset <= scrollTop) {
                    currentSection = element.id;
                }
            }
        }
        if (currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.sectionChange.emit(this.currentSection);
        }
    }
}
ScrollSpyDirective.ɵfac = function ScrollSpyDirective_Factory(t) { return new (t || ScrollSpyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ScrollSpyDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ScrollSpyDirective, selectors: [["", "scrollSpy", ""]], hostBindings: function ScrollSpyDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollSpyDirective_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
    } }, inputs: { spiedTags: "spiedTags" }, outputs: { sectionChange: "sectionChange" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollSpyDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[scrollSpy]',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { spiedTags: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/services/contact.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/contact.service.ts ***!
  \*********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class ContactService {
    constructor(http) {
        this.http = http;
        // postURL = 'http://localhost:3000/api/response';
        this.postURL = '/api/response';
    }
    postMessage(data) {
        this.http.post(this.postURL, data).subscribe((res) => {
            console.log(res);
        });
    }
}
ContactService.ɵfac = function ContactService_Factory(t) { return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ContactService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContactService, factory: ContactService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/toast.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ToastService {
    constructor() {
        this.toasts = [];
    }
    show(body) {
        this.toasts.push({ body });
    }
    remove(toast) {
        this.toasts = this.toasts.filter((t) => t != toast);
    }
}
ToastService.ɵfac = function ToastService_Factory(t) { return new (t || ToastService)(); };
ToastService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToastService, factory: ToastService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/inezescandon/inez-escandon/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map