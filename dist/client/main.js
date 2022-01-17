(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/components/index/index.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_dev_process_dev_process_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dev-process/dev-process.component */ "./src/app/components/dev-process/dev-process.component.ts");
/* harmony import */ var _components_career_career_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/career/career.component */ "./src/app/components/career/career.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_training_portal_training_portal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/training-portal/training-portal.component */ "./src/app/components/training-portal/training-portal.component.ts");
/* harmony import */ var _components_training_portal_courses_courses_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/training-portal/courses/courses.component */ "./src/app/components/training-portal/courses/courses.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: "", component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"] },
    { path: "about", component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: "project-list", component: _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_6__["BlogComponent"] },
    // { path:"project/:id", component: BlogComponent},
    { path: "process", component: _components_dev_process_dev_process_component__WEBPACK_IMPORTED_MODULE_4__["DevProcessComponent"] },
    { path: "training", component: _components_training_portal_training_portal_component__WEBPACK_IMPORTED_MODULE_8__["TrainingPortalComponent"] },
    { path: "career", component: _components_career_career_component__WEBPACK_IMPORTED_MODULE_5__["CareerComponent"] },
    { path: "contact", component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"] },
    { path: "training/courses", canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]], component: _components_training_portal_courses_courses_component__WEBPACK_IMPORTED_MODULE_9__["CoursesComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/contact.service */ "./src/app/services/contact.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_authService) {
        this._authService = _authService;
        this.title = 'client';
    }
    AppComponent.prototype.ngOnInit = function () {
        this._authService.autoSiginIn();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_dev_process_dev_process_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dev-process/dev-process.component */ "./src/app/components/dev-process/dev-process.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/components/index/index.component.ts");
/* harmony import */ var _components_career_career_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/career/career.component */ "./src/app/components/career/career.component.ts");
/* harmony import */ var _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/project-details/project-details.component */ "./src/app/components/project-details/project-details.component.ts");
/* harmony import */ var _components_training_portal_training_portal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/training-portal/training-portal.component */ "./src/app/components/training-portal/training-portal.component.ts");
/* harmony import */ var _components_training_portal_courses_courses_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/training-portal/courses/courses.component */ "./src/app/components/training-portal/courses/courses.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















// import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                _components_dev_process_dev_process_component__WEBPACK_IMPORTED_MODULE_10__["DevProcessComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_12__["BlogComponent"],
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_14__["IndexComponent"],
                _components_career_career_component__WEBPACK_IMPORTED_MODULE_15__["CareerComponent"],
                _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_16__["ProjectDetailsComponent"],
                _components_training_portal_training_portal_component__WEBPACK_IMPORTED_MODULE_17__["TrainingPortalComponent"],
                _components_training_portal_courses_courses_component__WEBPACK_IMPORTED_MODULE_18__["CoursesComponent"],
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ],
            providers: [
                _services_contact_service__WEBPACK_IMPORTED_MODULE_13__["ContactService"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_19__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_19__["HashLocationStrategy"] }
                // {
                //   provide: 'SocialAuthServiceConfig',
                //   useValue: {
                //     autoLogin: false,
                //     providers: [
                //       {
                //         id: GoogleLoginProvider.PROVIDER_ID,
                //         provider: new GoogleLoginProvider(
                //           '238090839889-bji6sdtlgho5ik1pvl3c9b909br5tlmp.apps.googleusercontent.com'
                //         )
                //       }
                //     ]
                //   } as SocialAuthServiceConfig,
                // }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/contact.service */ "./src/app/services/contact.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(_authService, router) {
        this._authService = _authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this._authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            if (res) {
                return true;
            }
            else {
                _this.router.navigateByUrl('/training');
            }
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <!-- =====================================\r\n        ==== Start Hero -->\r\n        <section class=\"hero section-padding pb-0\" data-scroll-index=\"1\">\r\n          <div class=\"container\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-lg-10 offset-lg-1\">\r\n                      <div class=\"intro text-center row mb-80\">\r\n                        \r\n                          <div class=\"col-lg-10 offset-lg-1\">\r\n                            \r\n                              <div class=\"mb-20\">\r\n                                  <h6>Who we are?</h6>\r\n                                  <h4>Athenity Care | \r\n                                    एथेनिटी केयर </h4>\r\n                                    <br>\r\n                                   <h6><u> Multi Super Speciality Hospital </u></h6> \r\n                              </div>\r\n                              <p>Finix Technocrates provide custom software solutions and project management support for\r\n                                  business seeking an alternative to high-priced consulting firms. Our focus on\r\n                                  customer service and innovative software solutions has helped us continue to grow at a\r\n                                  rapid pace. With a impressive client roster including both start-ups and large\r\n                                  companies we have proved ourselves. We can provide high-quality, value driven software designs as\r\n                                  a reasonable price-point.</p>\r\n                                  <!-- <img src=\"assets/img/name.jpg\" /> -->\r\n                              <svg class=\"bord-botm\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                                  x=\"0px\" y=\"0px\">\r\n                                  <polyline fill=\"transparent\" stroke=\"#ee3158\" stroke-width=\"2\" stroke-miterlimit=\"10\"\r\n                                      points=\"51.269,6.716 45.685,2.031 39.086,6.716 32.487,2.031 \r\n                                      26.904,6.716 20.812,2.031 14.721,6.716 7.614,2.031 2.538,6.716 \" />\r\n                              </svg>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n  \r\n                  <div class=\"col-lg-4 col-md-6\" *ngFor=\"let proj of projects\" >\r\n                      <div class=\"item text-center mb-50\">\r\n                          <span ><img style=\"height: 200px;\" [src]=\"proj.image\"  /></span>\r\n                          <br>\r\n                          <br>\r\n                          <h5>{{ proj.heading }}</h5>\r\n                          <p>{{proj.content}}</p>\r\n                      </div>\r\n                  </div>\r\n  \r\n                  <!-- <div class=\"col-lg-4 col-md-12\" >\r\n                  <img [src]=\"val\" style=\"width: 60rem; height: 30rem;\"  />\r\n                 </div> -->\r\n\r\n                   <!-- <div class=\"col-lg-4 col-md-6 offset-md-3 offset-lg-0 mb-50\">\r\n                      <div class=\"item text-center\">\r\n                          <span class=\"icon bg-pu shadow\"><i class=\"ti-server\"></i></span>\r\n                          <h5><span></span>Database Services</h5>\r\n                          <p>We know the importance of your data security, so we provide complete data security with our database services.</p>\r\n                      </div>\r\n                  </div> -->\r\n              </div>\r\n          </div>\r\n  \r\n          <div class=\"bg-gray section-padding pb-70 mt-70\">\r\n              <div class=\"container\">\r\n                  <div class=\"row\">\r\n  \r\n                      <div class=\"col-lg-6\">\r\n                          <div class=\"about mb-50\">\r\n                              <h6>Why To Choose Athenity Care? </h6>\r\n                              <h4>We love building meaningful and useful software products.</h4>\r\n                              <p>We’re full service which means we’ve got you covered on design and content right through\r\n                                  to digital. You’ll form a lasting relationship with us, collaboration is central to\r\n                                  everything we do.</p>\r\n                              <ul>\r\n                                  <li><span class=\"icon\"><i class=\"fas fa-arrow-right\"></i></span>Our consulting services\r\n                                      include project management.</li>\r\n                                  <li><span class=\"icon\"><i class=\"fas fa-arrow-right\"></i></span>Manage your workflow\r\n                                      and tasks successfully.</li>\r\n                                  <li><span class=\"icon\"><i class=\"fas fa-arrow-right\"></i></span>We help analyze, shape\r\n                                      and transform business models.</li>\r\n                              </ul>\r\n                          </div>\r\n                      </div>\r\n  \r\n                      <div class=\"col-lg-6\">\r\n                          <div class=\"img mb-50\">\r\n                              <img src=\"assets/img/svg/sss.jpeg\" alt=\"\">\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </section>\r\n  \r\n      <!-- End Hero ====\r\n          ======================================= -->\r\n    "

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.projects = [];
        this.val = 'assets/img/clinical/ventilator.jpg';
        this.val2 = 'assets/img/name.jpg';
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.projects.push({
            id: 1,
            heading: "ECG",
            image: 'assets/img/clinical/ECG.jpg',
            content: "इलेक्ट्रोकार्डियोग्राम(Electrocardiogram/ECG) आपके हार्ट की लय(rhythm) तथा विद्युतीय क्रियाओं को जांचने का एक सामान्य टेस्ट है। त्वचा से जुड़े संवेदकों(Sensors) का प्रयोग आपके हृदय के हर बार धड़कने से उत्पन्न विद्युतीय संकेतों का पता लगाने के लिए किया जाता है।"
        }, {
            id: 1,
            heading: "EEG",
            image: 'assets/img/clinical/EEG.jpg',
            content: "इलेक्ट्रोइन्सेफलोग्राम (EEG) तकनीक की मदद से मस्तिष्क की गतिविधियों के आधार पर मानसिक अवस्था की सामान्य और असामान्य स्थिति का पता लगाया जाता है। इस तकनीक में बहुत ही पतले तारो की छोटी छोटी डिस्क जिनको इलेक्ट्रोड भी कहा जाता है , को खोपड़ी के हर एक भाग पर रखा जाता जाता हैं।"
        }, {
            id: 1,
            heading: "X-RAY",
            image: 'assets/img/clinical/xray.jpg',
            content: "एक्स-रे इमेजिंग आपके शरीर के अंदर की तस्वीरें बनाती है। छवियां आपके शरीर के अंगों को काले और सफेद रंग के विभिन्न रंगों में दिखाती हैं। ... एक्स-रे का सबसे परिचित उपयोग फ्रैक्चर (टूटी हुई हड्डियों) की जांच करना है, लेकिन एक्स-रे का उपयोग अन्य तरीकों से भी किया जाता है।"
        });
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/blog/blog.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/blog/blog.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/blog/blog.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/blog/blog.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- projects Start -->\r\n\r\n    <section class=\"blog section-padding\" data-scroll-index=\"4\">\r\n          <div class=\"container\">\r\n              <div class=\"row\">\r\n                  <div class=\"section-head text-center col-lg-8 col-md-10 offset-md-1 offset-lg-2\">\r\n                      <!-- <h6>Our Projects</h6> -->\r\n                      <h4>Wards</h4>\r\n                      <svg class=\"bord-botm\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                          x=\"0px\" y=\"0px\">\r\n                          <polyline fill=\"transparent\" stroke=\"#ee3158\" stroke-width=\"2\" stroke-miterlimit=\"10\" points=\"51.269,6.716 45.685,2.031 39.086,6.716 32.487,2.031 \r\n                                  26.904,6.716 20.812,2.031 14.721,6.716 7.614,2.031 2.538,6.716 \" />\r\n                      </svg>\r\n                  </div>\r\n  \r\n                  <div class=\"col-lg-4\" style=\"margin-top: 1rem;\" *ngFor=\"let proj of projects\">\r\n                      <div class=\"item mb-md50\">\r\n                          <div class=\"post-img\">\r\n                              <div class=\"img\">\r\n                                  <img [src]=\"proj.image\" alt=\"\">\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"cont\">\r\n                              <h6><a>{{proj.title}}</a></h6>\r\n                              <p>{{proj.sortDesc}}</p>\r\n                              <a routerLink=\"{{proj.id}}\" class=\"more\">Read More <i class=\"fas fa-chevron-right\"></i></a>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n  \r\n                  <!-- <div class=\"col-lg-4\">\r\n                      <div class=\"item mb-md50\">\r\n                          <div class=\"post-img\">\r\n                              <div class=\"img\">\r\n                                  <img src=\"assets/img/blog/2.jpg\" alt=\"\">\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"cont\">\r\n                              <div class=\"info\">\r\n                                  <a href=\"#0\">By : Admin</a>\r\n                                  <a href=\"#0\">06 Aug 2017</a>\r\n                                  <a href=\"#0\" class=\"tag bg-pu\">ThemeForest</a>\r\n                              </div>\r\n                              <h6><a href=\"#0\">Awesome New Skills in February 2019</a></h6>\r\n                              <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum\r\n                                  has been the dummy text ever</p>\r\n                              <a href=\"#0\" class=\"more\">Read More <i class=\"fas fa-chevron-right\"></i></a>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n  \r\n                  <div class=\"col-lg-4\">\r\n                      <div class=\"item\">\r\n                          <div class=\"post-img\">\r\n                              <div class=\"img\">\r\n                                  <img src=\"assets/img/blog/3.jpg\" alt=\"\">\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"cont\">\r\n                              <div class=\"info\">\r\n                                  <a href=\"#0\">By : Admin</a>\r\n                                  <a href=\"#0\">06 Aug 2017</a>\r\n                                  <a href=\"#0\" class=\"tag bg-or\">Envato</a>\r\n                              </div>\r\n                              <h6><a href=\"#0\">What Impact Did Envato Make in 2018?</a></h6>\r\n                              <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum\r\n                                  has been the dummy text ever</p>\r\n                              <a href=\"#0\" class=\"more\">Read More <i class=\"fas fa-chevron-right\"></i></a>\r\n                          </div>\r\n                      </div>\r\n                  </div> -->\r\n  \r\n              </div>\r\n          </div>\r\n    </section> \r\n  \r\n<!-- Project ends -->\r\n\r\n\r\n    <!-- =====================================\r\n        ==== Start Blog -->\r\n\r\n        <!-- <section class=\"blog section-padding\" data-scroll-index=\"4\">\r\n          <div class=\"container\">\r\n              <div class=\"row\">\r\n                  <div class=\"section-head text-center col-lg-8 col-md-10 offset-md-1 offset-lg-2\">\r\n                      <h6>Our Blog</h6>\r\n                      <h4>Latest News</h4>\r\n                      <svg class=\"bord-botm\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                          x=\"0px\" y=\"0px\">\r\n                          <polyline fill=\"transparent\" stroke=\"#ee3158\" stroke-width=\"2\" stroke-miterlimit=\"10\" points=\"51.269,6.716 45.685,2.031 39.086,6.716 32.487,2.031 \r\n                                  26.904,6.716 20.812,2.031 14.721,6.716 7.614,2.031 2.538,6.716 \" />\r\n                      </svg>\r\n                  </div>\r\n  \r\n                  <div class=\"col-lg-4\">\r\n                      <div class=\"item mb-md50\">\r\n                          <div class=\"post-img\">\r\n                              <div class=\"img\">\r\n                                  <img src=\"assets/img/blog/1.jpg\" alt=\"\">\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"cont\">\r\n                              <div class=\"info\">\r\n                                  <a href=\"#0\">By : Admin</a>\r\n                                  <a href=\"#0\">06 Aug 2017</a>\r\n                                  <a href=\"#0\" class=\"tag bg-gr\">WordPress</a>\r\n                              </div>\r\n                              <h6><a href=\"#0\">48 Best WordPress Themes</a></h6>\r\n                              <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum\r\n                                  has been the dummy text ever</p>\r\n                              <a href=\"#0\" class=\"more\">Read More <i class=\"fas fa-chevron-right\"></i></a>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n  \r\n                  <div class=\"col-lg-4\">\r\n                      <div class=\"item mb-md50\">\r\n                          <div class=\"post-img\">\r\n                              <div class=\"img\">\r\n                                  <img src=\"assets/img/blog/2.jpg\" alt=\"\">\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"cont\">\r\n                              <div class=\"info\">\r\n                                  <a href=\"#0\">By : Admin</a>\r\n                                  <a href=\"#0\">06 Aug 2017</a>\r\n                                  <a href=\"#0\" class=\"tag bg-pu\">ThemeForest</a>\r\n                              </div>\r\n                              <h6><a href=\"#0\">Awesome New Skills in February 2019</a></h6>\r\n                              <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum\r\n                                  has been the dummy text ever</p>\r\n                              <a href=\"#0\" class=\"more\">Read More <i class=\"fas fa-chevron-right\"></i></a>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n  \r\n                  <div class=\"col-lg-4\">\r\n                      <div class=\"item\">\r\n                          <div class=\"post-img\">\r\n                              <div class=\"img\">\r\n                                  <img src=\"assets/img/blog/3.jpg\" alt=\"\">\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"cont\">\r\n                              <div class=\"info\">\r\n                                  <a href=\"#0\">By : Admin</a>\r\n                                  <a href=\"#0\">06 Aug 2017</a>\r\n                                  <a href=\"#0\" class=\"tag bg-or\">Envato</a>\r\n                              </div>\r\n                              <h6><a href=\"#0\">What Impact Did Envato Make in 2018?</a></h6>\r\n                              <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum\r\n                                  has been the dummy text ever</p>\r\n                              <a href=\"#0\" class=\"more\">Read More <i class=\"fas fa-chevron-right\"></i></a>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n  \r\n              </div>\r\n          </div>\r\n      </section>  -->\r\n  \r\n      <!-- End Blog ====\r\n              ======================================= -->  \r\n\r\n    "

/***/ }),

/***/ "./src/app/components/blog/blog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/blog/blog.component.ts ***!
  \***************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
        this.projects = [];
    }
    BlogComponent.prototype.ngOnInit = function () {
        this.projects.push({
            id: 1,
            image: 'assets/img/wards/ccu.jpg',
            title: 'CCU Ward ( सीसीयू वार्ड )',
            sortDesc: '',
            url: '' //'project/1'
        }, {
            id: 2,
            image: 'assets/img/wards/nicu.jpg',
            title: 'NICU Ward ( एनआईसीयू वार्ड )',
            sortDesc: '',
            url: '' //'project/2'
        }, {
            id: 3,
            image: 'assets/img/wards/deluxpvt.jpg',
            title: 'Delux PVT Ward ( डीलक्स प्राइवेट वार्ड )',
            sortDesc: '',
            url: '' //'project/3'
        }, {
            id: 4,
            image: 'assets/img/wards/privateward.jpg',
            title: 'Private Ward ( प्राइवेट वार्ड )',
            sortDesc: '',
            url: '' //'project/3'
        }, {
            id: 5,
            image: 'assets/img/wards/download.jpg',
            title: 'General Ward ( सामान्य वार्ड )',
            sortDesc: '',
            url: '' //'project/3'
        }, {
            id: 6,
            image: 'assets/img/wards/ccu.jpg',
            title: 'ICU Ward ( आईसीयू वार्ड )',
            sortDesc: '',
            url: '' //'project/1'
        });
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/components/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/components/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/components/career/career.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/career/career.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZWVyL2NhcmVlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/career/career.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/career/career.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"contact section-padding\" data-scroll-index=\"5\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n            <div class=\"section-head text-center col-lg-8 col-md-10 offset-md-1 offset-lg-2\">\r\n              <h6>We are looking for Talent like you.</h6>\r\n              <h4>Join Us</h4>\r\n              <svg class=\"bord-botm\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                  x=\"0px\" y=\"0px\">\r\n                  <polyline fill=\"transparent\" stroke=\"#ee3158\" stroke-width=\"2\" stroke-miterlimit=\"10\" points=\"51.269,6.716 45.685,2.031 39.086,6.716 32.487,2.031 \r\n                      26.904,6.716 20.812,2.031 14.721,6.716 7.614,2.031 2.538,6.716 \" />\r\n              </svg>\r\n          </div>\r\n\r\n          <div class=\"col-lg-8 col-md-10 offset-md-1 offset-lg-2\">\r\n              <form class=\"form mb-80\" id=\"contact-form\" (submit)=\"onSubmit();\" [formGroup]=\"resumeForm\" enctype=\"multipart/form-data\" >\r\n\r\n                  <h6><div class=\"messages\" *ngIf=\"resumeForm.touched && resumeForm.invalid\" style=\"color: red;\" >please fill all the details correctly.</div></h6>\r\n                  <h6><div class=\"messages\" *ngIf=\"resumeForm.pristine && successSubmision\" style=\"color: green;\" >thank you for your successfully submision !!</div></h6>\r\n                  <br>\r\n                  <div class=\"controls\">\r\n\r\n                      <div class=\"row\">\r\n                          <div class=\"col-lg-12\">\r\n                            <div class=\"form-group\">\r\n                                <input id=\"form_name\" type=\"text\" formControlName=\"name\" placeholder=\"Name*\" required=\"required\">\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-lg-12\">\r\n                            <div class=\"form-group\">\r\n                                <input id=\"form_name\" type=\"text\" formControlName=\"designation\" placeholder=\"current designation*\" required=\"required\">\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-lg-12\">\r\n                            <div class=\"form-group\">\r\n                                <input id=\"form_name\" type=\"text\" formControlName=\"apply\" placeholder=\"Applied For*\" required=\"required\">\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-lg-12\">\r\n                              <div class=\"form-group\">\r\n                                  <input id=\"form_email\" type=\"email\" formControlName=\"email\" placeholder=\"Email*\" required=\"required\">\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"col-md-6\">\r\n                              <div class=\"form-group\">\r\n                                <span>Ready For Relocation ?</span>\r\n                                <span><input _ngcontent-c3=\"\" formControlName=\"relocation\" id=\"form_phone\" placeholder=\"Ready for relocation\" type=\"checkbox\" style=\"\r\n                                    margin-left: 15px;\r\n                                \"></span>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"col-md-12\">\r\n                              <div class=\"form-group\">\r\n                                  <input id=\"form_file\" type=\"file\" formControlName=\"upload\" (change)=\"handleFileInput($event.target.files);\" placeholder=\"Resume File\">\r\n                              </div>\r\n                          </div>\r\n\r\n                          <div class=\"col-md-12 text-center\">\r\n                              <button type=\"submit\" class=\"butn butn-bg\"><span>Submit</span></button>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </form>\r\n          </div>\r\n\r\n      </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/components/career/career.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/career/career.component.ts ***!
  \*******************************************************/
/*! exports provided: CareerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerComponent", function() { return CareerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contact.service */ "./src/app/services/contact.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CareerComponent = /** @class */ (function () {
    function CareerComponent(fb, svc) {
        this.fb = fb;
        this.svc = svc;
        this.successSubmision = false;
        this.resumeForm = this.fb.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            designation: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            apply: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])],
            relocation: [false],
            upload: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    CareerComponent.prototype.ngOnInit = function () {
    };
    CareerComponent.prototype.handleFileInput = function (files) {
        if (files.length > 0) {
            this.files = files;
        }
        else {
            this.files = null;
        }
    };
    CareerComponent.prototype.onSubmit = function () {
        var _this = this;
        // console.log("CHVH")
        if (this.resumeForm.valid) {
            this.svc.newResume(this.resumeForm.value, this.files).then(function (res) {
                _this.successSubmision = true;
                _this.resumeForm.reset();
            }, function (err) { console.error(err); });
        }
    };
    CareerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-career',
            template: __webpack_require__(/*! ./career.component.html */ "./src/app/components/career/career.component.html"),
            styles: [__webpack_require__(/*! ./career.component.css */ "./src/app/components/career/career.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]])
    ], CareerComponent);
    return CareerComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!-- =====================================\r\n        ==== Start Contact -->\r\n\r\n        <section class=\"contact section-padding\" data-scroll-index=\"5\">\r\n          <div class=\"container\">\r\n              <div class=\"row\">\r\n                  <div class=\"section-head text-center col-lg-8 col-md-10 offset-md-1 offset-lg-2\">\r\n                      <h6>Get in touch!</h6>\r\n                      <h4><u>Contact Us</u></h4>\r\n                      <!-- <svg class=\"bord-botm\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                          x=\"0px\" y=\"0px\">\r\n                          <polyline fill=\"transparent\" stroke=\"#ee3158\" stroke-width=\"2\" stroke-miterlimit=\"10\" points=\"51.269,6.716 45.685,2.031 39.086,6.716 32.487,2.031 \r\n                              26.904,6.716 20.812,2.031 14.721,6.716 7.614,2.031 2.538,6.716 \" />\r\n                      </svg> -->\r\n                  </div>\r\n  \r\n                  <div class=\"col-lg-8 col-md-10 offset-md-1 offset-lg-2\"> \r\n                      <form class=\"form mb-80\" id=\"contact-form\" (submit)=\"onSubmit();\" [formGroup]=\"contactForm\" >\r\n  \r\n                          <h6><div class=\"messages\" *ngIf=\"contactForm.touched && contactForm.invalid\" style=\"color: red;\" >please fill all the details correctly.</div></h6>\r\n                        <h6><div class=\"messages\" *ngIf=\"contactForm.pristine && successSubmision\" style=\"color: green;\" >thank you for your successfully submision !!</div></h6>\r\n                          <br>\r\n                          <div class=\"controls\">\r\n  \r\n                              <div class=\"row\">\r\n  \r\n                                  <div class=\"col-lg-6\">\r\n                                      <div class=\"form-group\">\r\n                                          <input id=\"form_name\" type=\"text\" formControlName=\"name\" placeholder=\"Name*\" required=\"required\">\r\n                                      </div>\r\n                                  </div>\r\n                                  <div class=\"col-lg-6\">\r\n                                      <div class=\"form-group\">\r\n                                          <input id=\"form_email\" type=\"email\" formControlName=\"email\" placeholder=\"Email*\" required=\"required\">\r\n                                      </div>\r\n                                  </div>\r\n                                  <div class=\"col-md-6\">\r\n                                      <div class=\"form-group\">\r\n                                          <input id=\"form_phone\" type=\"text\" formControlName=\"mobile\" placeholder=\"Phone*\" required=\"required\">\r\n                                      </div>\r\n                                  </div>\r\n                                  <div class=\"col-md-6\">\r\n                                      <div class=\"form-group\">\r\n                                          <input id=\"form_subject\" formControlName=\"subject\" type=\"text\" placeholder=\"Subject*\" required=\"required\">\r\n                                      </div>\r\n                                  </div>\r\n                                  <div class=\"col-md-12\">\r\n                                      <div class=\"form-group\">\r\n                                          <textarea id=\"form_message\" formControlName=\"message\" placeholder=\"Message*\" required=\"required\"></textarea>\r\n                                      </div>\r\n                                  </div>\r\n  \r\n                                  <div class=\"col-md-12 text-center\">\r\n                                      <button type=\"submit\" class=\"butn butn-bg\"><span>Send Message</span></button>\r\n                                  </div>\r\n\r\n  \r\n                              </div>\r\n                          </div>\r\n                      </form>\r\n                  </div>\r\n                  <div class=\"col-lg-12 contact-info\">\r\n                      <div class=\"row\">\r\n                          <div class=\"col-lg-4 col-md-6\">\r\n                              <div class=\"item mb-sm30\">\r\n                                  <span class=\"icon\"><i class=\"fas fa-phone\"></i></span>\r\n                                  <div class=\"cont\">\r\n                                      <h6>Phone : </h6>\r\n                                      <p>8299801935</p>\r\n                                      <p>7652068358</p>\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"col-lg-4 col-md-6\">\r\n                              <div class=\"item mb-md30\">\r\n                                  <span class=\"icon\"><i class=\"fas fa-envelope\"></i></span>\r\n                                  <div class=\"cont\">\r\n                                      <h6>Email : </h6>\r\n                                     \r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"col-lg-4 col-md-6 offset-md-3 offset-lg-0\">\r\n                              <div class=\"item\">\r\n                                  <span class=\"icon\"><i class=\"fas fa-map-marker-alt\"></i></span>\r\n                                  <div class=\"cont\">\r\n                                      <h6>Address : </h6>\r\n                                    <p>Akhari Chauraha, Near Bypass Road Opposite Police Booth, Varanasi.</p>\r\n                                    <p>अखारी चौराहा ( बाईपास रोड के पास पुलिस बूथ के सामने ), वाराणसी।</p>                                    \r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n  \r\n              </div>\r\n          </div>\r\n      </section>\r\n  \r\n      <!-- End Contact ====\r\n          ======================================= -->  "

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contact.service */ "./src/app/services/contact.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = /** @class */ (function () {
    function ContactComponent(fb, svc) {
        this.fb = fb;
        this.svc = svc;
        this.successSubmision = false;
        this.contactForm = this.fb.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])],
            mobile: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            subject: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            message: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.onSubmit = function () {
        window.open("mailto:" + "D" + "?subject=" + encodeURIComponent("DDDD") + "&body=" + encodeURIComponent("DD") + " (" + encodeURIComponent("DBDH") + "): " + encodeURIComponent("DVDH"));
        // if(this.contactForm.valid){
        //   this.svc.addNewContact(this.contactForm.value).then(res => {
        //     this.successSubmision = true;        
        //     this.contactForm.reset();
        //   }).catch(err => {
        //     this.successSubmision = false;
        //     console.log(err);
        //   })
        // }
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/dev-process/dev-process.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/dev-process/dev-process.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV2LXByb2Nlc3MvZGV2LXByb2Nlc3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/dev-process/dev-process.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/dev-process/dev-process.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <!-- =====================================\r\n        ==== Start Process -->\r\n\r\n        <div class=\"process section-padding text-center bg-gray\" data-scroll-index=\"2\">\r\n          <div class=\"container\">\r\n              <div class=\"row\">\r\n  \r\n                  <div class=\"section-head text-center col-lg-8 col-md-10 offset-md-1 offset-lg-2\">\r\n                    <h4><u>Our Process</u></h4>  \r\n                    <h6 style=\"margin-top: 3px;\">How It's Work?</h6>\r\n                      <!-- <svg class=\"bord-botm\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                          x=\"0px\" y=\"0px\">\r\n                          <polyline fill=\"transparent\" stroke=\"#ee3158\" stroke-width=\"2\" stroke-miterlimit=\"10\" points=\"51.269,6.716 45.685,2.031 39.086,6.716 32.487,2.031 \r\n                              26.904,6.716 20.812,2.031 14.721,6.716 7.614,2.031 2.538,6.716 \" />\r\n                      </svg> -->\r\n                  </div>\r\n  \r\n                  <div class=\"col-lg-3 col-md-6\">\r\n                      <div class=\"item first mb-md50\">\r\n                          <img src=\"assets/img/arrow.png\" class=\"tobotm\" alt=\"\">\r\n                          <span class=\"icon bg-pu ti-light-bulb\"></span>\r\n                          <div class=\"cont\">\r\n                              <h3>01</h3>\r\n                              <h6>Ideas</h6>\r\n                              <p>Our team of designers’ work directly with the client to produce a customer experience that is intuitive and delightful. We have worked with some well-known companies such as Kraft Company and Panera bread Company to produce content that keep their customers coming back for more. </p>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n  \r\n                  <div class=\"col-lg-3 col-md-6\">\r\n                      <div class=\"item odd mb-md50\">\r\n                          <img src=\"assets/img/arrow.png\" alt=\"\">\r\n                          <span class=\"icon bg-or ti-pencil-alt\"></span>\r\n                          <div class=\"cont\">\r\n                              <h3>02</h3>\r\n                              <h6>Planning</h6>\r\n                              <p>Finix Technocrates uses a strategic product planning process of defining how the client will achieve their vision, coupled with an agile process to produce the exact results that the client is looking for. We want your customers to love your new site and your new functionality.</p>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n  \r\n                  <div class=\"col-lg-3 col-md-6\">\r\n                      <div class=\"item mb-sm50\">\r\n                          <img src=\"assets/img/arrow.png\" class=\"tobotm\" alt=\"\">\r\n                          <span class=\"icon bg-gr ti-hummer\"></span>\r\n                          <div class=\"cont\">\r\n                              <h3>03</h3>\r\n                              <h6>Development</h6>\r\n                              <p>The agile development process keeps us and the client on the same page. If there are changes that need to be made, the agile process allows us to make those changes quickly and efficiently in the development stages so that when we are at the publication stages, the product is exactly what the client desires. </p>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n  \r\n                  <div class=\"col-lg-3 col-md-6\">\r\n                      <div class=\"item odd\">\r\n                          <span class=\"icon bg-bl ti-dashboard\"></span>\r\n                          <div class=\"cont\">\r\n                              <h3>04</h3>\r\n                              <h6>Testing</h6>\r\n                              <p>We use a three tear-approach to testing the functionality of our code. Functionality is rigorously tested various methods to ensure the code is solid. Then, we have the design team check the esthetics from a customer’s point of view. We produce quality results. </p>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  \r\n      <!-- End Process ====\r\n          ======================================= -->\r\n  \r\n  \r\n  \r\n      <!-- =====================================\r\n          ==== Start Facts -->\r\n  \r\n      <!-- <div class=\"facts section-padding\" data-scroll-index=\"3\">\r\n          <div class=\"container\">\r\n              <div class=\"row\">\r\n                  <div class=\"section-head text-center col-lg-8 col-md-10 offset-md-1 offset-lg-2\">\r\n                      <h6>What People Say?</h6>\r\n                      <h4>Testimonials</h4>\r\n                      <svg class=\"bord-botm\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                          x=\"0px\" y=\"0px\">\r\n                          <polyline fill=\"transparent\" stroke=\"#ee3158\" stroke-width=\"2\" stroke-miterlimit=\"10\" points=\"51.269,6.716 45.685,2.031 39.086,6.716 32.487,2.031 \r\n                              26.904,6.716 20.812,2.031 14.721,6.716 7.614,2.031 2.538,6.716 \" />\r\n                      </svg>\r\n                  </div>\r\n  \r\n                  <div class=\"col-lg-12\">\r\n                      <div class=\"testimonials\">\r\n                          <div class=\"owl-carousel owl-theme\">\r\n                              <div class=\"item\">\r\n                                  <span class=\"icon\"><i class=\"fas fa-quote-right\"></i></span>\r\n                                  <div class=\"client-area\">\r\n                                      <div class=\"img\">\r\n                                          <div class=\"author\">\r\n                                              <img src=\"assets/img/clients/1.jpg\" alt=\"\">\r\n                                          </div>\r\n                                      </div>\r\n                                      <div class=\"cont\">\r\n                                          <h6>Alex Smith</h6>\r\n                                          <span>Envato Customer</span>\r\n                                      </div>\r\n                                  </div>\r\n                                  <p>\"It was a great experience to work with them, they provided best quality of work,\r\n                                      Thanks Guys!!\"</p>\r\n                              </div>\r\n                              <div class=\"item\">\r\n                                  <span class=\"icon\"><i class=\"fas fa-quote-right\"></i></span>\r\n                                  <div class=\"client-area\">\r\n                                      <div class=\"img\">\r\n                                          <div class=\"author\">\r\n                                              <img src=\"assets/img/clients/2.jpg\" alt=\"\">\r\n                                          </div>\r\n                                      </div>\r\n                                      <div class=\"cont\">\r\n                                          <h6>Sam Martin</h6>\r\n                                          <span>Envato Customer</span>\r\n                                      </div>\r\n                                  </div>\r\n                                  <p>\"It was a great experience to work with them, they provided best quality of work,\r\n                                      Thanks Guys!!\"</p>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>  -->\r\n  \r\n      <!-- End Facts ====\r\n          ======================================= -->\r\n  \r\n  \r\n  \r\n  \r\n      <!-- =====================================\r\n          ==== Start Numbers -->\r\n  \r\n      <!-- <div class=\"numbers text-center section-padding bg-img bg-fixed\" data-overlay-dark=\"7\" data-background=\"assets/img/bg1.jpg\">\r\n          <div class=\"container\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-lg-3 col-md-6\">\r\n                      <div class=\"item text-center mb-md50\">\r\n                          <span class=\"icon ti-user\"></span>\r\n                          <h4><span class=\"count\">168</span> k</h4>\r\n                          <h6>Happy Clients</h6>\r\n                      </div>\r\n                  </div>\r\n  \r\n                  <div class=\"col-lg-3 col-md-6\">\r\n                      <div class=\"item text-center mb-md50\">\r\n                          <span class=\"icon ti-layers\"></span>\r\n                          <h4><span class=\"count\">937</span></h4>\r\n                          <h6>Projects Compleated</h6>\r\n                      </div>\r\n                  </div>\r\n  \r\n                  <div class=\"col-lg-3 col-md-6\">\r\n                      <div class=\"item text-center mb-sm50\">\r\n                          <span class=\"icon ti-import\"></span>\r\n                          <h4><span class=\"count\">438</span>k</h4>\r\n                          <h6>Files Downloaded</h6>\r\n                      </div>\r\n                  </div>\r\n  \r\n                  <div class=\"col-lg-3 col-md-6\">\r\n                      <div class=\"item text-center\">\r\n                          <span class=\"icon ti-crown\"></span>\r\n                          <h4><span class=\"count\">46</span></h4>\r\n                          <h6>Award Win</h6>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div> -->\r\n  \r\n      <!-- End Numbers ====\r\n          ======================================= -->\r\n  \r\n  "

/***/ }),

/***/ "./src/app/components/dev-process/dev-process.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/dev-process/dev-process.component.ts ***!
  \*****************************************************************/
/*! exports provided: DevProcessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevProcessComponent", function() { return DevProcessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DevProcessComponent = /** @class */ (function () {
    function DevProcessComponent() {
    }
    DevProcessComponent.prototype.ngOnInit = function () {
    };
    DevProcessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dev-process',
            template: __webpack_require__(/*! ./dev-process.component.html */ "./src/app/components/dev-process/dev-process.component.html"),
            styles: [__webpack_require__(/*! ./dev-process.component.css */ "./src/app/components/dev-process/dev-process.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DevProcessComponent);
    return DevProcessComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n    <!-- =====================================\r\n        ==== Start Footer -->\r\n\r\n        <footer class=\"dark\">\r\n          <div class=\"container\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-lg-3 col-md-6\">\r\n                      <div class=\"item mb-sm50\">\r\n                          <!-- Logo -->\r\n                          <a [routerLink]=\"['']\">\r\n                            <img src=\"assets/img/logo-dark.png\" class=\"logoimg light-logo\" alt=\"logo\">\r\n                          </a>\r\n                          <a class=\"logo\" [routerLink]=\"['']\">\r\n                            Athenity Care\r\n                          </a>\r\n                          <img src=\"assets/img/name.jpg\" />\r\n                          <!-- <p>We’re full service which means we’ve got you covered on design and content right through\r\n                              to digital.</p> -->\r\n                      </div>\r\n                  </div>\r\n  \r\n                  <div class=\"col-lg-2 col-md-3 col-sm-4\">\r\n                      <!-- <div class=\"item mb-sm50\">\r\n                          <div class=\"ftitle\">\r\n                              <h5>Compnay</h5>\r\n                          </div>\r\n                          <ul>\r\n                              \r\n                              <li><a [routerLink]=\"\">Email Marketing</a></li>\r\n                              <li><a [routerLink]=\"\">Social Media</a></li>\r\n                              <li><a [routerLink]=\"\">Mobile Apps</a></li>\r\n                          </ul>\r\n                      </div> -->\r\n                  </div>\r\n  \r\n                  <div class=\"col-lg-2 col-md-3 col-sm-4\">\r\n                      <div class=\"item mb-md50 mb-sm50\">\r\n                          <div class=\"ftitle\">\r\n                              <h5>Company</h5>\r\n                          </div>\r\n                          <ul style=\"cursor: pointer;\">\r\n                              <!-- <li><a (click)='handleTraining()'>Training Blogs</a></li> -->\r\n                              <li><a [routerLink]=\"['career']\">Career</a></li>\r\n                              <!-- <li><a [routerLink]=\"\">Home</a></li>\r\n                              <li><a [routerLink]=\"['career']\">Career</a></li>\r\n                              <li><a [routerLink]=\"\">Customers</a></li>\r\n                              <li><a [routerLink]=\"\">About Us</a></li> -->\r\n                          </ul>\r\n                      </div>\r\n                  </div>\r\n  \r\n                  <div class=\"col-lg-2 col-md-3 col-sm-4\">\r\n                      <!-- <div class=\"item mb-sm50\">\r\n                          <div class=\"ftitle\">\r\n                              <h5>Support</h5>\r\n                          </div>\r\n                          <ul>\r\n                              <li><a [routerLink]=\"\">Contact Us</a></li>\r\n                              <li><a [routerLink]=\"\">Community</a></li>\r\n                              <li><a [routerLink]=\"\">FAQ</a></li> \r\n                              <li><a [routerLink]=\"\">Login</a></li>\r\n                              <li><a [routerLink]=\"\">Sign Up</a></li>\r\n                          </ul>\r\n                      </div> -->\r\n                  </div>\r\n  \r\n                  <div class=\"col-lg-3 col-md-9\">\r\n                      <div class=\"item\">\r\n                          <div class=\"ftitle\">\r\n                              <h5>Subscribe</h5>\r\n                          </div>\r\n                          <form [formGroup]=\"frmSubscriber\" >\r\n                              <input type=\"Email\" formControlName=\"email\" placeholder=\"Type Your Email\">\r\n                              <a [routerLink]=\"\" class=\"butn butn-bg\" (click)=\"submitSubscriber();\">\r\n                                  <span>Subscribe</span>\r\n                              </a>\r\n                              <p *ngIf=\"frmSubscriber.touched && frmSubscriber.invalid\" style=\"color: red;\">Please enter valid email address</p>\r\n                              <p *ngIf=\"frmSubscriber.pristine && successSubmision\" style=\"color: green;\">your subscription successfully submited !!</p>\r\n                          </form>\r\n                      </div>\r\n                  </div>\r\n  \r\n              </div>\r\n          </div>\r\n          <div class=\"sub-footer\">\r\n              <div class=\"container\">\r\n  \r\n                  <div class=\"social\">\r\n                      <!-- <a [routerLink]=\"\" class=\"icon\">\r\n                          <i class=\"fab fa-facebook-f\"></i>\r\n                      </a>\r\n                      <a [routerLink]=\"\" class=\"icon\">\r\n                          <i class=\"fab fa-twitter\"></i>\r\n                      </a> -->\r\n                      <!-- <a href=\"https://www.linkedin.com/company/finix-technocrates\" target=\"blank\" lass=\"icon\">\r\n                          <i class=\"fab fa-linkedin-in\"></i>\r\n                      </a> -->\r\n                      <!-- <a [routerLink]=\"\" class=\"icon\">\r\n                          <i class=\"fab fa-behance\"></i>\r\n                      </a>\r\n                      <a [routerLink]=\"\" class=\"icon\">\r\n                          <i class=\"fab fa-instagram\"></i>\r\n                      </a> -->\r\n                  </div>\r\n  \r\n                  <p>&copy; 2022  Athenity Care. All Rights Reserved.</p>\r\n  \r\n              </div>\r\n          </div>\r\n      </footer>\r\n  \r\n      <!-- End Footer ====\r\n          ======================================= -->\r\n  "

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contact.service */ "./src/app/services/contact.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = /** @class */ (function () {
    function FooterComponent(fb, svc) {
        this.fb = fb;
        this.svc = svc;
        this.frmSubscriber = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])]
        });
        this.successSubmision = false;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.handleTraining = function () {
        window.open("http://tranning.finixtechnocrates.com/");
    };
    FooterComponent.prototype.submitSubscriber = function () {
        var _this = this;
        if (this.frmSubscriber.valid) {
            this.svc.addNewSubscriber(this.frmSubscriber.value.email).then(function (res) {
                _this.frmSubscriber.reset();
                _this.successSubmision = true;
            }).catch(function (err) {
                alert("Sorry, we are unable to proceed your request ! please retry !!");
            });
        }
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hospital{\r\n    font-size: large;\r\n    color: #FC8A17;\r\n}\r\n\r\n.linecss{\r\n    border: 1px solid #FC8A17;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvc3BpdGFse1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGNvbG9yOiAjRkM4QTE3O1xyXG59XHJcblxyXG4ubGluZWNzc3tcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGQzhBMTc7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \r\n    <!-- =====================================\r\n    \t==== Start Header -->\r\n\r\n      <header class=\"header valign agency bg-img bg-fixed\" data-scroll-index=\"0\" data-overlay-dark=\"7\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-8 offset-lg-2 col-md-10 offset-md-1 text-center caption mt-50\">\r\n                    <h1 style=\"color: #4169E1;\">Athenity Care</h1>\r\n                    <br>\r\n                    <span class=\"hospital\">Multi Super Speciality Hospital</span>\r\n                  \r\n                    <p>Trusted for our expertise. Chosen for our care.\r\n                        Uncompromising Excellence. Commitment to Care.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"curve bg-img\" data-background=\"assets/img/curve.png\"></div>\r\n    </header>\r\n\r\n    <!-- End Header ====\r\n    \t======================================= -->\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/index/index.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/index/index.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/index/index.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/index/index.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<app-about></app-about>\r\n<!-- <app-dev-process></app-dev-process> -->\r\n<!-- <app-blog></app-blog> -->\r\n  <!-- =====================================\r\n        ==== Start Get Ready -->\r\n\r\n    <section class=\"get-ready section-padding bg-img bg-fixed\" data-overlay-dark=\"7\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-8 col-md-10 offset-md-1 offset-lg-2\">\r\n                    <div class=\"text-center\">\r\n                        <h6>Getting Started</h6>\r\n                        <h3>Let's Make Something Great!</h3>\r\n                        <p>We’re full service which means we’ve got you covered on design and content right through\r\n                            to digital.</p>\r\n                        <!-- <a href=\"#0\" class=\"butn butn-bg mt-30\">\r\n                            <span>Getting Started <i class=\"fas fa-chevron-right\"></i></span>\r\n                        </a> -->\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </section>\r\n    \r\n<!-- End Get Ready ====\r\n    ======================================= -->\r\n<app-contact></app-contact>"

/***/ }),

/***/ "./src/app/components/index/index.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/index/index.component.ts ***!
  \*****************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/components/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/nav/nav.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo{\r\n    font-size: 15px !important;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n}\r\n\r\n\r\n.nalink {\r\n    -webkit-animation-duration: 1200ms;\r\n            animation-duration: 1200ms;\r\n    -webkit-animation-name: blink;\r\n            animation-name: blink;\r\n    -webkit-animation-iteration-count: infinite;\r\n            animation-iteration-count: infinite;\r\n    -webkit-animation-direction: alternate;\r\n            animation-direction: alternate;\r\n    -webkit-animation:blink 1200ms infinite; /* Safari and Chrome */\r\n}\r\n\r\n\r\n@keyframes blink {\r\n    from {\r\n        color:red;\r\n    }\r\n    to {\r\n        color:white;\r\n    }\r\n}\r\n\r\n\r\n@-webkit-keyframes blink {\r\n    from {\r\n        color:red;\r\n    }\r\n    to {\r\n        color:white;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLG9CQUFvQjtDQUN2Qjs7O0FBR0Q7SUFDSSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsNENBQW9DO1lBQXBDLG9DQUFvQztJQUNwQyx1Q0FBK0I7WUFBL0IsK0JBQStCO0lBQy9CLHdDQUF3QyxDQUFDLHVCQUF1QjtDQUNuRTs7O0FBQ0Q7SUFDSTtRQUNJLFVBQVU7S0FDYjtJQUNEO1FBQ0ksWUFBWTtLQUNmO0NBQ0o7OztBQUNEO0lBQ0k7UUFDSSxVQUFVO0tBQ2I7SUFDRDtRQUNJLFlBQVk7S0FDZjtDQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3tcclxuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcblxyXG4ubmFsaW5rIHtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTIwMG1zO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGJsaW5rO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjpibGluayAxMjAwbXMgaW5maW5pdGU7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXHJcbn1cclxuQGtleWZyYW1lcyBibGluayB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBjb2xvcjpyZWQ7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICB9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIGNvbG9yOnJlZDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/nav/nav.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ========================================= Start Navbar -->\r\n\r\n      <nav class=\"navbar navbar-top navbar-expand-lg\">\r\n        <div class=\"container\">\r\n\r\n            <!-- Logo -->\r\n            <h1 style=\"display: flex;\">\r\n            <a [routerLink]=\"['/']\">\r\n                <img src=\"assets/img/logo-dark.png\" class=\"logoimg light-logo\" alt=\"logo\">\r\n                <img src=\"assets/img/logo-dark.png\" class=\"logoimg dark-logo\" alt=\"logo\">\r\n            </a>\r\n            <a class=\"logo\" [routerLink]=\"['']\">\r\n                Athenity Care\r\n            </a>\r\n            </h1>\r\n\r\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n                aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span class=\"icon-bar\"><i class=\"fas fa-bars\"></i></span>\r\n            </button>\r\n\r\n            <!-- navbar links -->\r\n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n                <ul class=\"navbar-nav ml-auto\">\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" [routerLink]=\"['']\">Home</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" [routerLink]=\"['about']\" >Clinical Summary</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" [routerLink]=\"['training']\" >Treatment Facility</a>\r\n                    </li>\r\n                    <!-- <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" [routerLink]=\"['process']\">Process</a>\r\n                    </li> -->\r\n                    <!-- <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" [routerLink]=\"\" data-scroll-nav=\"3\">Testimonials</a>\r\n                    </li> -->\r\n                    <!-- <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" [routerLink]=\"\" data-scroll-nav=\"4\">Blog</a>\r\n                    </li> -->\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" [routerLink]=\"['project-list']\" >Ward Facility</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" [routerLink]=\"['contact']\" >Contact</a>\r\n                    </li>\r\n                    \r\n                  \r\n                    <!-- <button type=\"button\" class=\"btn btn-primary\">SignOut</button> -->\r\n                    <!-- <li class=\"nav-item dropdown\">\r\n                        <a class=\"nav-link dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\">  Demo Sites  </a>\r\n                        <ul class=\"dropdown-menu\">\r\n                          <li><a class=\"dropdown-item\" target=\"_blank\" href=\"https://inntechweb.com/myshop\"> MyShop </a></li> -->\r\n                          <!-- <li><a class=\"dropdown-item\" href=\"#\"> Second level 2 &raquo </a>\r\n                             <ul class=\"submenu dropdown-menu\">\r\n                                <li><a class=\"dropdown-item\" href=\"\"> Third level 1</a></li>\r\n                                <li><a class=\"dropdown-item\" href=\"\"> Third level 2</a></li>\r\n                                <li><a class=\"dropdown-item\" href=\"\"> Third level 3 &raquo </a>\r\n                                <ul class=\"submenu dropdown-menu\">\r\n                                    <li><a class=\"dropdown-item\" href=\"\"> Fourth level 1</a></li>\r\n                                    <li><a class=\"dropdown-item\" href=\"\"> Fourth level 2</a></li>\r\n                                </ul>\r\n                                </li>\r\n                                <li><a class=\"dropdown-item\" href=\"\"> Second level  4</a></li>\r\n                                <li><a class=\"dropdown-item\" href=\"\"> Second level  5</a></li>\r\n                             </ul>\r\n                          </li>\r\n                          <li><a class=\"dropdown-item\" href=\"#\"> Dropdown item 3 </a></li>\r\n                          <li><a class=\"dropdown-item\" href=\"#\"> Dropdown item 4 </a> -->\r\n                        <!-- </ul>\r\n                    </li> -->\r\n                </ul>\r\n            </div>\r\n            <span class=\"nav-item\" style=\"cursor: pointer;\">\r\n                <a class=\"nav-link nalink\" > Facility Avaliable (24 X 7)</a>\r\n            </span>\r\n            <!-- <span class=\"nav-item\">\r\n                <a class=\"nav-link\"  ></a>\r\n            </span> -->\r\n        </div>\r\n    </nav>\r\n\r\n    <!-- End Navbar ====\r\n      ======================================= -->\r\n      "

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/contact.service */ "./src/app/services/contact.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = /** @class */ (function () {
    function NavComponent(_authService) {
        this._authService = _authService;
        this.logoutBtn = false;
        // console.log("CONSTRUVTOR     .............")
    }
    NavComponent.prototype.ngOnInit = function () {
        // console.log("CHIGHDBHBH HIT ME")
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/components/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/components/project-details/project-details.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/project-details/project-details.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC1kZXRhaWxzL3Byb2plY3QtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/project-details/project-details.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/project-details/project-details.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  project-details works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/project-details/project-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/project-details/project-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProjectDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailsComponent", function() { return ProjectDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectDetailsComponent = /** @class */ (function () {
    function ProjectDetailsComponent() {
    }
    ProjectDetailsComponent.prototype.ngOnInit = function () {
    };
    ProjectDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-details',
            template: __webpack_require__(/*! ./project-details.component.html */ "./src/app/components/project-details/project-details.component.html"),
            styles: [__webpack_require__(/*! ./project-details.component.css */ "./src/app/components/project-details/project-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectDetailsComponent);
    return ProjectDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/training-portal/courses/courses.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/training-portal/courses/courses.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".zoom {\r\n    transition: transform .2s;\r\n    width: 230px;\r\n    height: 150px;\r\n    margin: 0 auto;\r\n  }\r\n  \r\n  .zoom:hover { /* IE 9 */ /* Safari 3-8 */\r\n    transform: scale(1.5); \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmFpbmluZy1wb3J0YWwvY291cnNlcy9jb3Vyc2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLGNBQWM7SUFDZCxlQUFlO0dBQ2hCOztFQUVELGNBQzZCLFVBQVUsQ0FDTixnQkFBZ0I7SUFDL0Msc0JBQXNCO0dBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90cmFpbmluZy1wb3J0YWwvY291cnNlcy9jb3Vyc2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuem9vbSB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzO1xyXG4gICAgd2lkdGg6IDIzMHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuem9vbTpob3ZlciB7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjUpOyAvKiBJRSA5ICovXHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS41KTsgLyogU2FmYXJpIDMtOCAqL1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpOyBcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/training-portal/courses/courses.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/training-portal/courses/courses.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero section-padding pb-0\" data-scroll-index=\"1\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-md-6\">\r\n        <div class=\"item text-center mb-50\">\r\n         <img alt=\"Avatar\" class=\"zoom\" src=\"https://finixui.s3.us-east-2.amazonaws.com/as.jpg\" />\r\n         <br>\r\n          <h5 style=\"margin-top: 15px;\"><span></span>Angular</h5>\r\n          <p>Angular is an application design framework and development platform for creating\r\n             efficient and sophisticated single-page apps.A component-based framework for building \r\n             scalable web applications. A tool to help you develop, build, test, and update your code.</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-4 col-md-6\">\r\n        <div class=\"item text-center mb-50\">\r\n         <img alt=\"Avatar\" class=\"zoom\" src=\"https://finixui.s3.us-east-2.amazonaws.com/rn.PNG\" />\r\n         <br>\r\n          <h5 style=\"margin-top: 15px;\"><span></span>React Native</h5>\r\n          <p>React Native lets you create truly native apps and doesn't compromise your users'\r\n             experiences. React Native combines the best parts of native development \r\n             with React, using JavaScript library for building user interfaces.</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-4 col-md-6\">\r\n        <div class=\"item text-center mb-50\">\r\n         <img alt=\"Avatar\" class=\"zoom\" src=\"https://finixui.s3.us-east-2.amazonaws.com/r.jpg\" />\r\n         <br>\r\n          <h5 style=\"margin-top: 15px;\"><span></span>React </h5>\r\n          <p>React makes it painless to create interactive UIs. React will efficiently\r\n            update and render just the right components\r\n             when your data changes. Build encapsulated components that manage their own state, then compose them to make complex UIs.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n  <div class=\"row\" style=\"margin-top: 5vh; margin-bottom: 5vh; margin-left: 35%;\">\r\n    <button type=\"button\" class=\"btn btn-warning\"> <a class=\"btn btn-lg btn-google btn-block text-uppercase btn-outline\" href=\"https://pro.learncodeonline.in/learn/account/signin\">Click Here To Start Your Training </a> </button>\r\n  </div>\r\n</div>\r\n\r\n  <div style=\"margin-top: 5vh;\" class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-md-6\">\r\n        <div class=\"item text-center mb-50\">\r\n         <img alt=\"Avatar\" class=\"zoom\" src=\"https://www.cloudsavvyit.com/p/uploads/2019/07/2350564e.png?width=1198&trim=1,1&bg-color=000&pad=1,1\" />\r\n         <br>\r\n          <h5 style=\"margin-top: 15px;\"><span></span>Node Js</h5>\r\n          <p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment\r\n             that runs and executes JavaScript code outside a web browser. Node.js \r\n             lets developers use JavaScript to write command line tools and for server-side \r\n             scripts to produce dynamic web page content before the\r\n              page is sent to the user's web browser.</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-4 col-md-6\">\r\n        <div class=\"item text-center mb-50\">\r\n         <img alt=\"Avatar\" class=\"zoom\" src=\"https://www.tutorialrepublic.com/lib/images/javascript-illustration.png\" />\r\n         <br>\r\n          <h5 style=\"margin-top: 15px;\"><span></span>JavaScript</h5>\r\n          <p>JavaScript is among the most powerful and flexible programming languages of the web.\r\n            It powers the dynamic behavior on most websites, including this one. JavaScript is a powerful,\r\n             flexible, and fast programming language now being used for increasingly complex web development \r\n             and beyond!</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-4 col-md-6\">\r\n        <div class=\"item text-center mb-50\">\r\n         <img alt=\"Avatar\" class=\"zoom\" src=\"https://www.sololearn.com/Uploads/html-css.jpg\" />\r\n         <br>\r\n          <h5 style=\"margin-top: 15px;\"><span></span>HTML & CSS</h5>\r\n          <p>HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two \r\n            of the core technologies for building Web pages. HTML provides the structure of \r\n            the page, CSS the layout, for a variety of devices. Along with \r\n            graphics and scripting, HTML and CSS are the basis of building Web pages and Web Applications.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/components/training-portal/courses/courses.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/training-portal/courses/courses.component.ts ***!
  \*************************************************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CoursesComponent = /** @class */ (function () {
    function CoursesComponent() {
    }
    CoursesComponent.prototype.ngOnInit = function () {
    };
    CoursesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-courses',
            template: __webpack_require__(/*! ./courses.component.html */ "./src/app/components/training-portal/courses/courses.component.html"),
            styles: [__webpack_require__(/*! ./courses.component.css */ "./src/app/components/training-portal/courses/courses.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CoursesComponent);
    return CoursesComponent;
}());



/***/ }),

/***/ "./src/app/components/training-portal/training-portal.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/training-portal/training-portal.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container{\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\r\n}\r\n.login-form-1{\r\n    padding: 5%;\r\n    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n.login-form-1 h3{\r\n    text-align: center;\r\n    color: #333;\r\n}\r\n.login-form-2{\r\n    padding: 5%;\r\n    background: #0062cc;\r\n    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n.login-form-2 h3{\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n.login-container form{\r\n    padding: 10%;\r\n}\r\n.btnSubmit\r\n{\r\n    width: 50%;\r\n    border-radius: 1rem;\r\n    padding: 1.5%;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n.login-form-1 .btnSubmit{\r\n    font-weight: 600;\r\n    color: #fff;\r\n    background-color: #0062cc;\r\n}\r\n.login-form-2 .btnSubmit{\r\n    font-weight: 600;\r\n    color: #0062cc;\r\n    background-color: #fff;\r\n}\r\n.login-form-2 .ForgetPwd{\r\n    color: #fff;\r\n    font-weight: 600;\r\n    text-decoration: none;\r\n}\r\n.login-form-1 .ForgetPwd{\r\n    color: #0062cc;\r\n    font-weight: 600;\r\n    text-decoration: none;\r\n}\r\n.soc{\r\n    width: 40px;\r\n    height: 40px;\r\n    line-height: 40px;\r\n    text-align: center;\r\n    border-radius: 50%;\r\n    border: 1px solid #ccc;\r\n    background: transparent;\r\n    margin: 0 5px;\r\n}\r\n#joinimg{\r\n    height: 375px;\r\n}\r\n@media (max-width:768px) {\r\n    #joinimg{\r\n        height: 323px;\r\n    }\r\n    #photoimg{\r\n        display: block;\r\n    } \r\n    #iconimg{\r\n        margin-left: 122px;\r\n        margin-top: 5px;\r\n        padding: 14px;\r\n    }\r\n    #igphoto{\r\n        width: 200px;\r\n        height: 180px;\r\n        margin-left: 139px;\r\n    }\r\n    \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmFpbmluZy1wb3J0YWwvdHJhaW5pbmctcG9ydGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osNkVBQTZFO0NBQ2hGO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtDQUNmO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLDZFQUE2RTtDQUNoRjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksYUFBYTtDQUNoQjtBQUNEOztJQUVJLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGFBQWE7SUFDYixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osMEJBQTBCO0NBQzdCO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHVCQUF1QjtDQUMxQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixzQkFBc0I7Q0FDekI7QUFDRDtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsc0JBQXNCO0NBQ3pCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsY0FBYztDQUNqQjtBQUVEO0lBQ0ksY0FBYztDQUNqQjtBQUVEO0lBQ0k7UUFDSSxjQUFjO0tBQ2pCO0lBQ0Q7UUFDSSxlQUFlO0tBQ2xCO0lBQ0Q7UUFDSSxtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLGNBQWM7S0FDakI7SUFDRDtRQUNJLGFBQWE7UUFDYixjQUFjO1FBQ2QsbUJBQW1CO0tBQ3RCOztDQUVKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90cmFpbmluZy1wb3J0YWwvdHJhaW5pbmctcG9ydGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGFpbmVye1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG4ubG9naW4tZm9ybS0xe1xyXG4gICAgcGFkZGluZzogNSU7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOXB4IDI2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG59XHJcbi5sb2dpbi1mb3JtLTEgaDN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG4ubG9naW4tZm9ybS0ye1xyXG4gICAgcGFkZGluZzogNSU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA2MmNjO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDlweCAyNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG4ubG9naW4tZm9ybS0yIGgze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmxvZ2luLWNvbnRhaW5lciBmb3Jte1xyXG4gICAgcGFkZGluZzogMTAlO1xyXG59XHJcbi5idG5TdWJtaXRcclxue1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAxLjUlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5sb2dpbi1mb3JtLTEgLmJ0blN1Ym1pdHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDYyY2M7XHJcbn1cclxuLmxvZ2luLWZvcm0tMiAuYnRuU3VibWl0e1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMDA2MmNjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4ubG9naW4tZm9ybS0yIC5Gb3JnZXRQd2R7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmxvZ2luLWZvcm0tMSAuRm9yZ2V0UHdke1xyXG4gICAgY29sb3I6ICMwMDYyY2M7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5zb2N7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxufVxyXG5cclxuI2pvaW5pbWd7XHJcbiAgICBoZWlnaHQ6IDM3NXB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo3NjhweCkge1xyXG4gICAgI2pvaW5pbWd7XHJcbiAgICAgICAgaGVpZ2h0OiAzMjNweDtcclxuICAgIH1cclxuICAgICNwaG90b2ltZ3tcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH0gXHJcbiAgICAjaWNvbmltZ3tcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTIycHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAjaWdwaG90b3tcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTM5cHg7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/training-portal/training-portal.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/training-portal/training-portal.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero section-padding pb-0\" data-scroll-index=\"1\">\r\n</section>"

/***/ }),

/***/ "./src/app/components/training-portal/training-portal.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/training-portal/training-portal.component.ts ***!
  \*************************************************************************/
/*! exports provided: TrainingPortalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingPortalComponent", function() { return TrainingPortalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';


var TrainingPortalComponent = /** @class */ (function () {
    function TrainingPortalComponent(fb, svc, router) {
        this.fb = fb;
        this.svc = svc;
        this.router = router;
        this.successSubmision = false;
        this.forgetPassword = false;
        this.errorHandleMsg = [{ name: "EMAIL_NOT_FOUND", value: "Please Enter Valid Email" }, { name: "INVALID_PASSWORD", value: "Please Enter Valid Password" }];
        this.signInForm = this.fb.group({
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.ResetForm = this.fb.group({
            email: [""],
        });
    }
    TrainingPortalComponent.prototype.ngOnInit = function () {
    };
    TrainingPortalComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.signInForm.valid) {
            this.svc.signIn(this.signInForm.value).subscribe(function (res) {
                if (res.status === 200) {
                    _this.successSubmision = true;
                    _this.router.navigate(['training/courses']);
                    _this.signInForm.reset();
                }
            }, function (err) {
                var error = err.json();
                var indx = _this.errorHandleMsg.findIndex(function (data) { return data.name === error.error.message; });
                if (indx != -1) {
                    _this.errorMessage = _this.errorHandleMsg[indx].value;
                }
                else {
                    _this.errorMessage = "Something Went Wrong";
                }
            });
        }
    };
    TrainingPortalComponent.prototype.passwordForgot = function () {
        this.forgetPassword = !this.forgetPassword;
    };
    TrainingPortalComponent.prototype.resetPassword = function () {
        var _this = this;
        if (this.ResetForm.valid) {
            this.svc.resetPassword(this.ResetForm.value).then(function (res) {
                _this.successSubmision = true;
                _this.successMessage = "Please Check You Mail Id";
                setTimeout(function () {
                    _this.successMessage = '';
                }, 3000);
                _this.ResetForm.reset();
            }).catch(function (err) {
                _this.successSubmision = false;
                _this.errorMessage = "Please Enter Valid Email ID";
                setTimeout(function () {
                    _this.errorMessage = '';
                }, 3000);
                console.log(err);
            });
        }
    };
    TrainingPortalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-training-portal',
            template: __webpack_require__(/*! ./training-portal.component.html */ "./src/app/components/training-portal/training-portal.component.html"),
            styles: [__webpack_require__(/*! ./training-portal.component.css */ "./src/app/components/training-portal/training-portal.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TrainingPortalComponent);
    return TrainingPortalComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _user_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.modal */ "./src/app/user.modal.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactService = /** @class */ (function () {
    function ContactService(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        header.append("Content-Type", "application/json");
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]();
        this.options.headers = header;
    }
    ContactService.prototype.addNewSubscriber = function (email) {
        var body = JSON.stringify({
            "email": email
        });
        // return this.http.post(this.url+"service/api_inntech/incoming_webhook/newSubsc",body,this.options).toPromise();
        return this.http.post(this.url + "/subscribe/newsub", body, this.options).toPromise();
    };
    ContactService.prototype.addNewContact = function (data) {
        var body = JSON.stringify({
            "name": data.name,
            "email": data.email,
            "mobile": data.mobile,
            "subject": data.subject,
            "message": data.message
        });
        return this.http.post(this.url + "/contact/newcontact", body, this.options).toPromise();
        // return this.http.post(this.url+"service/api_inntech/incoming_webhook/createContact",body,this.options).toPromise();
    };
    ContactService.prototype.newResume = function (value, files) {
        var data = new FormData();
        data.append('name', value.name);
        data.append('designation', value.designation);
        data.append('apply', value.apply);
        data.append('email', value.email);
        data.append('relocation', value.relocation);
        data.append('file', files[0]);
        return this.http.post(this.url + "/career/newcareer", data).toPromise();
    };
    ContactService.prototype.signIn = function (data) {
        var _this = this;
        var body = JSON.stringify({
            "email": data.email,
            "password": data.password,
            "returnSecureToken": true
        });
        return this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCA5x6KveaHwz3X3MtKijYPNvMrGSKdQNU", body, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            throw err;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            var data = res.json();
            _this.authenticateUser(data.email, data.localId, data.idToken, data.expiresIn);
        }));
        // return this.http.post(this.url+"service/api_inntech/incoming_webhook/createContact",body,this.options).toPromise();
    };
    // public googleSignIn(data:any):Promise<any>{
    //   return this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=AIzaSyCA5x6KveaHwz3X3MtKijYPNvMrGSKdQNU",{
    //     postBody:`id_token=${data}&providerId=[google.com]`,
    //     requestUri:'http://localhost:4200/training',
    //     returnIdpCredential:true,
    //     returnSecureToken:true}).toPromise();
    //   // return this.http.post(this.url+"service/api_inntech/incoming_webhook/createContact",body,this.options).toPromise();
    // }
    ContactService.prototype.resetPassword = function (data) {
        // var body = JSON.stringify({
        var Email = data.email;
        //   "returnSecureToken":true
        // })
        return this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCA5x6KveaHwz3X3MtKijYPNvMrGSKdQNU", {
            requestType: "PASSWORD_RESET",
            email: Email
        }).toPromise();
        // return this.http.post(this.url+"service/api_inntech/incoming_webhook/createContact",body,this.options).toPromise();
    };
    ContactService.prototype.autoSiginIn = function () {
        var userData = JSON.parse(localStorage.getItem('auth'));
        if (!userData) {
            return;
        }
        var loggedInUser = new _user_modal__WEBPACK_IMPORTED_MODULE_5__["User"](userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
        if (loggedInUser.token) {
            this.user.next(loggedInUser);
        }
    };
    ContactService.prototype.authenticateUser = function (email, userId, token, expiresIn) {
        var expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        var user = new _user_modal__WEBPACK_IMPORTED_MODULE_5__["User"](email, userId, token, expirationDate);
        this.user.next(user);
        localStorage.setItem('auth', JSON.stringify(user));
    };
    ContactService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/user.modal.ts":
/*!*******************************!*\
  !*** ./src/app/user.modal.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(email, id, _token, _tokenExpirationDate) {
        this.email = email;
        this.id = id;
        this._token = _token;
        this._tokenExpirationDate = _tokenExpirationDate;
    }
    Object.defineProperty(User.prototype, "token", {
        get: function () {
            if (this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
                return null;
            }
            return this._token;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());



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
var environment = {
    production: false,
    // apiUrl:"https://webhooks.mongodb-stitch.com/api/client/v2.0/app/inntech-wskxy/"
    apiUrl: "https://hawkenwolf.com"
    // apiUrl:"https://localhost:3000/"
};
/* Mongo db Credentials cloud.mongo
Login Mail: mrc30860@cndps.com
Password: mongo@123
user:dev
pass:dev123
*/
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Finix\Finix-ui\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map