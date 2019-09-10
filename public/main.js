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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\" id=\"app-container\">\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".swal2-popup.swal2-toast.toast-overflow.swal2-show {\n  overflow: hidden !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2VicmljL2NvZGUvbWVkaWEtZmFuLW1lYW4vY2xpZW50L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QudG9hc3Qtb3ZlcmZsb3cuc3dhbDItc2hvd1xue1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG59Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'client';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/post/post.component */ "./src/app/components/post/post.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _guards_guest_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./guards/guest.guard */ "./src/app/guards/guest.guard.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/posts/posts.component */ "./src/app/components/posts/posts.component.ts");
/* harmony import */ var _components_post_creator_post_creator_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/post-creator/post-creator.component */ "./src/app/components/post-creator/post-creator.component.ts");






















var appRoutes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        pathMatch: 'full',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]],
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        canActivate: [_guards_guest_guard__WEBPACK_IMPORTED_MODULE_18__["GuestGuard"]],
    },
    {
        path: 'signup',
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
        canActivate: [_guards_guest_guard__WEBPACK_IMPORTED_MODULE_18__["GuestGuard"]],
    },
    {
        path: ':username',
        component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _components_post_post_component__WEBPACK_IMPORTED_MODULE_10__["PostComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_20__["PostsComponent"],
                _components_post_creator_post_creator_component__WEBPACK_IMPORTED_MODULE_21__["PostCreatorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_5__["ValidateService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"], _services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"], _guards_guest_guard__WEBPACK_IMPORTED_MODULE_18__["GuestGuard"], _services_user_service__WEBPACK_IMPORTED_MODULE_19__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <footer class=\"footer\">\n    <div class=\"container\">\n      <span class=\"text-muted\">Place sticky footer content here.</span>\n    </div>\n  </footer> -->"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-container\" id=\"home\">\n  <div class=\"post post-creator col-6 my-3\">\n    <app-post-creator></app-post-creator>\n  </div>\n  <app-posts [posts]=\"posts\" [user]=\"user\"></app-posts>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_lib_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/lib/toast */ "./src/app/lib/toast.ts");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(postService, auth) {
        this.postService = postService;
        this.auth = auth;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    HomeComponent.prototype.getPosts = function () {
        var _this = this;
        this.user = this.auth.getUserData();
        this.postService.getFeed(localStorage.getItem('id_token'))
            .subscribe(function (data) {
            return _this.posts = data.posts;
        }, function (err) { return src_app_lib_toast__WEBPACK_IMPORTED_MODULE_4__["default"].fire('There was an error fetching the posts', err, 'error'); });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center \">\n  <form class=\"form-signin mx-auto\" (submit)=\"onSubmit()\">\n    <h1 class=\"h3 mb-3 font-weight-normal\">Sign in</h1>\n    <input [(ngModel)]=\"username\" type=\"email\" id=\"inputEmail\" name=\"inputEmail\" class=\"form-control\" placeholder=\"Email or Username\" required autofocus standalone>\n    <input [(ngModel)]=\"password\" type=\"password\" id=\"inputPassword\" name=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required standalone>\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n    <p class=\"mt-5 mb-3 text-muted\">&copy; 2019</p>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  width: 100%;\n  height: 100%;\n  padding-top: 10rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2VicmljL2NvZGUvbWVkaWEtZmFuLW1lYW4vY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxMHJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_lib_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/lib/toast */ "./src/app/lib/toast.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(validate, auth, router) {
        this.validate = validate;
        this.auth = auth;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = { username: this.username, password: this.password };
        this.auth.loginUser(user).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['/']);
                _this.auth.storeUserData(data.token, JSON.stringify(data.user));
                src_app_lib_toast__WEBPACK_IMPORTED_MODULE_5__["default"].fire("Welcome back " + data.user.username, 'You are logged in', 'success');
            }
            else
                src_app_lib_toast__WEBPACK_IMPORTED_MODULE_5__["default"].fire('There was an error trying to log you in', data.msg, 'error');
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\" id=\"navbar\">\n  <form class=\"form-inline\">\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\">@</span>\n      </div>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\n    </div>\n  </form>\n  <a id=\"branding\" class=\"navbar-brand\" [routerLink]=\"['/']\">Mediafan</a>\n  <div class=\"nav\" id=\"nav-links\">\n    <a class=\"btn btn-light\" *ngIf=\"!auth.loggedIn()\" [routerLink]=\"['/login']\" routerLinkActive=\"active\">Log in</a>\n    <a class=\"btn btn-light\" *ngIf=\"!auth.loggedIn()\" [routerLink]=\"['/signup']\" routerLinkActive=\"active\">Sign up</a>\n    \n    <a class=\"btn btn-light\" *ngIf=\"auth.loggedIn()\" [routerLink]=\"['/', userData().username]\" routerLinkActive=\"active\">{{userData().username}}</a>\n    <a class=\"btn btn-light\" *ngIf=\"auth.loggedIn()\" (click)=\"logout()\" routerLinkActive=\"active\">Logout</a>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#branding {\n  position: absolute;\n  right: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2VicmljL2NvZGUvbWVkaWEtZmFuLW1lYW4vY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNicmFuZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDUwJTtcbn0iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_lib_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/lib/toast */ "./src/app/lib/toast.ts");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.userData = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        return user;
    };
    NavbarComponent.prototype.logout = function () {
        this.auth.logout();
        this.router.navigate(['/login']);
        src_app_lib_toast__WEBPACK_IMPORTED_MODULE_4__["default"].fire('Log out', 'You have beed logged out successfully', 'success');
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/post-creator/post-creator.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/post-creator/post-creator.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <div class=\"card-title\">\n      Create Post\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <div id=\"post-creator\"></div>\n  </div>\n  <div class=\"card-footer\">\n    <button class=\"btn btn-primary\" (click)=\"save()\">Post</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/post-creator/post-creator.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/post-creator/post-creator.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .codex-editor__redactor {\n  padding-bottom: 0 !important;\n  min-height: 100px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2VicmljL2NvZGUvbWVkaWEtZmFuLW1lYW4vY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9wb3N0LWNyZWF0b3IvcG9zdC1jcmVhdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCO0VBQzVCLDRCQUE0QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3N0LWNyZWF0b3IvcG9zdC1jcmVhdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5jb2RleC1lZGl0b3JfX3JlZGFjdG9yIHtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/post-creator/post-creator.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/post-creator/post-creator.component.ts ***!
  \*******************************************************************/
/*! exports provided: PostCreatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCreatorComponent", function() { return PostCreatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @editorjs/editorjs */ "./node_modules/@editorjs/editorjs/dist/editor.js");
/* harmony import */ var _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_editorjs_editorjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editorjs_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @editorjs/image */ "./node_modules/@editorjs/image/dist/bundle.js");
/* harmony import */ var _editorjs_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_editorjs_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editorjs_quote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @editorjs/quote */ "./node_modules/@editorjs/quote/dist/bundle.js");
/* harmony import */ var _editorjs_quote__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_editorjs_quote__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _editorjs_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @editorjs/header */ "./node_modules/@editorjs/header/dist/bundle.js");
/* harmony import */ var _editorjs_header__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_editorjs_header__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_lib_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/lib/toast */ "./src/app/lib/toast.ts");








var token = localStorage.getItem('id_token');
var PostCreatorComponent = /** @class */ (function () {
    function PostCreatorComponent(postService) {
        this.postService = postService;
        this.posted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PostCreatorComponent.prototype.ngOnInit = function () {
        this.editor = new _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_3___default.a({
            autofocus: true,
            holder: 'post-creator',
            placeholder: 'Write your post',
            tools: {
                image: {
                    class: _editorjs_image__WEBPACK_IMPORTED_MODULE_4___default.a,
                    config: {
                        endpoints: {
                            byFile: 'http://localhost:3000/posts/uploadImage',
                            byUrl: 'http://localhost:3000/posts/uploadImageUrl',
                        },
                        additionalRequestHeaders: {
                            'authorization': token,
                        }
                    },
                },
                quote: {
                    class: _editorjs_quote__WEBPACK_IMPORTED_MODULE_5___default.a,
                    inlineToolbar: true,
                    config: {
                        quotePlaceholder: 'Enter a quote',
                    },
                },
                header: {
                    class: _editorjs_header__WEBPACK_IMPORTED_MODULE_6___default.a,
                    inlineToolbar: true,
                    config: {
                        plachelder: 'Enter a headers',
                    },
                },
            },
        });
    };
    PostCreatorComponent.prototype.save = function () {
        var _this = this;
        this.editor.save()
            .then(function (data) {
            _this.postService.createPost(data, token)
                .subscribe(function (res) {
                src_app_lib_toast__WEBPACK_IMPORTED_MODULE_7__["default"].fire('Post created', 'You can watch it in your profile', 'success');
                _this.editor.blocks.clear();
                _this.posted.emit();
            });
        })
            .catch(function (err) { return src_app_lib_toast__WEBPACK_IMPORTED_MODULE_7__["default"].fire('Error creating post', 'There was an error trying to save the post', 'error'); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PostCreatorComponent.prototype, "posted", void 0);
    PostCreatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-creator',
            template: __webpack_require__(/*! ./post-creator.component.html */ "./src/app/components/post-creator/post-creator.component.html"),
            styles: [__webpack_require__(/*! ./post-creator.component.scss */ "./src/app/components/post-creator/post-creator.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]])
    ], PostCreatorComponent);
    return PostCreatorComponent;
}());



/***/ }),

/***/ "./src/app/components/post/post.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/post/post.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"post card\">\n  <!-- <button class=\"btn btn-danger delete-post\" *ngIf=\"user.username == post.author\" (click)=\"deletePost()\">\n    x\n  </button> -->\n  <div class=\"card-body\">\n    <ng-container *ngFor=\"let block of post.content.blocks\" [ngSwitch]=\"block.type\">\n\n      <div *ngSwitchCase=\"'header'\" class=\"card-title text-level-{{block.data.level}}\">\n        {{ block.data.text }}\n      </div>\n\n      <p *ngSwitchCase=\"'paragraph'\" [innerHTML]=\"block.data.text\"></p>\n\n      <img class=\"image\" *ngSwitchCase=\"'image'\" src=\"{{ block.data.file.url}}\" alt=\"{{ block.data.caption}}\">\n      <p *ngSwitchCase=\"'image'\" class=\"image-caption\">{{ block.data.caption }}</p>\n      \n      <blockquote *ngSwitchCase=\"'quote'\" class=\"blockquote text-center my-5\">\n        <p class=\"mb-0\">{{ block.data.text }}</p>\n        <footer class=\"blockquote-footer\"><cite title=\"{{ block.data.caption }}\">{{ block.data.caption }}</cite></footer>\n      </blockquote>\n\n    </ng-container>\n  </div>\n  <div class=\"card-footer\">\n      <span (click)=\"addStar()\" class=\"float-left\">{{ nStars }}<svg [ngStyle]=\"{fill: starred ? '#f0ed4f' : 'gray'}\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z\"/></svg>\n      </span>\n      <span class=\"text-muted float-right\">{{post.author.username}}</span>\n      <!-- <p (click)=\"watchComments()\" class=\"text-muted clear-both\">Watch comments</p> -->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/post/post.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/post/post.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post .text-level- {\n  font-weight: bold; }\n  .post .text-level-1 {\n    font-size: 2.5rem; }\n  .post .text-level-2 {\n    font-size: 2rem; }\n  .post .text-level-3 {\n    font-size: 1.75rem; }\n  .post .text-level-4 {\n    font-size: 1.5rem; }\n  .post .text-level-5 {\n    font-size: 1.25rem; }\n  .post .text-level-6 {\n    font-size: 1rem; }\n  .post .image {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2VicmljL2NvZGUvbWVkaWEtZmFuLW1lYW4vY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9wb3N0L3Bvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxpQkFBaUIsRUFBQTtFQUZyQjtJQUlNLGlCQUFpQixFQUFBO0VBSnZCO0lBT00sZUFBZSxFQUFBO0VBUHJCO0lBVU0sa0JBQWtCLEVBQUE7RUFWeEI7SUFhTSxpQkFBaUIsRUFBQTtFQWJ2QjtJQWdCTSxrQkFBa0IsRUFBQTtFQWhCeEI7SUFtQk0sZUFBZSxFQUFBO0VBbkJyQjtFQXdCSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bvc3QvcG9zdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0IHtcbiAgLnRleHQtbGV2ZWwte1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICYxIHtcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIH1cbiAgICAmMiB7XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxuICAgICYzIHtcbiAgICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICB9XG4gICAgJjQge1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgfVxuICAgICY1IHtcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICB9XG4gICAgJjYge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgfVxuICBcbiAgLmltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/post/post.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/post/post.component.ts ***!
  \***************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");



var PostComponent = /** @class */ (function () {
    function PostComponent(postService) {
        this.postService = postService;
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.user) {
            var starred = this.post.stars.find(function (_a) {
                var username = _a.username;
                return username == _this.user.username;
            });
            this.starred = starred ? true : false;
        }
        this.nStars = this.post.stars.length;
    };
    // deletePost() {
    // }
    PostComponent.prototype.addStar = function () {
        var _this = this;
        this.postService.starPost(this.post._id, localStorage.getItem('id_token')).subscribe(function (res) {
            if (res.success) {
                _this.starred = !_this.starred;
                _this.nStars += _this.starred ? 1 : -1;
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PostComponent.prototype, "post", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PostComponent.prototype, "user", void 0);
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/components/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.scss */ "./src/app/components/post/post.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/components/posts/posts.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/posts/posts.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"posts\" id=\"posts\">\n  <div class=\"post col-6 mb-3\" *ngFor=\"let post of posts\">\n      <app-post [user]=\"user\" [post]=\"post\"></app-post>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/posts/posts.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/posts/posts.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdHMvcG9zdHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/posts/posts.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/posts/posts.component.ts ***!
  \*****************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PostsComponent = /** @class */ (function () {
    function PostsComponent() {
    }
    PostsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PostsComponent.prototype, "posts", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PostsComponent.prototype, "user", void 0);
    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/components/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.scss */ "./src/app/components/posts/posts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"profile\">\n  <section class=\"bio\">\n    <div class=\"info\">\n      <h1>{{user?.username}}</h1>\n      <img src=\"{{ user?.profile_photo }}\" alt=\"profile_photo\">\n    </div>\n    <div (click)=\"switchFollow()\" class=\"switch-follow\" *ngIf=\"!ownProfile\">\n      <button *ngIf=\"following\" class=\"btn btn-dark unfollow\">\n        Unfollow\n      </button>\n      <button *ngIf=\"!following\" class=\"btn btn-dark follow\">\n        Follow\n      </button>\n    </div>\n  </section>\n  <section>\n    <div *ngIf=\"ownProfile\" class=\"post post-creator col-6 my-3\">\n      <app-post-creator (posted)=\"postCreated()\"></app-post-creator>\n    </div>\n    <app-posts [posts]=\"posts\" [user]=\"loggedInUser\"></app-posts>\n  </section>\n</div>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_lib_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/lib/toast */ "./src/app/lib/toast.ts");







var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(postService, route, userService, auth) {
        this.postService = postService;
        this.route = route;
        this.userService = userService;
        this.auth = auth;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loggedIn = this.auth.loggedIn();
                        return [4 /*yield*/, this.getUserData()];
                    case 1:
                        _a.sent();
                        this.getPosts(this.username);
                        if (this.loggedIn) {
                            this.loggedInUser = this.auth.getUserData();
                            this.checkIfOwnProfile();
                            this.checkIfFollowing();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileComponent.prototype.getPosts = function (username) {
        var _this = this;
        this.postService.profilePosts(username).subscribe(function (_a) {
            var posts = _a.posts;
            return _this.posts = posts;
        });
    };
    ProfileComponent.prototype.getUserData = function () {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.route.params.subscribe(function (params) {
                _this.username = params.username;
                _this.userService.getProfile(_this.username).subscribe(function (_a) {
                    var user = _a.user;
                    _this.user = user;
                    res(_this.user);
                }, function (err) { return rej(err); });
            }, function (err) { return rej(err); });
        });
    };
    ProfileComponent.prototype.checkIfOwnProfile = function () {
        this.ownProfile = this.loggedInUser.username == this.username;
    };
    ProfileComponent.prototype.checkIfFollowing = function () {
        var _this = this;
        this.userService.checkFollow(this.loggedInUser.username, this.username).subscribe(function (_a) {
            var following = _a.following;
            _this.following = following;
        });
    };
    ProfileComponent.prototype.postCreated = function () {
        this.getUserData();
    };
    ProfileComponent.prototype.switchFollow = function () {
        var _this = this;
        var token = localStorage.getItem('id_token');
        this.userService.switchFollow(this.username, token).subscribe(function (data) {
            if (data.success) {
                _this.following = data.following;
                src_app_lib_toast__WEBPACK_IMPORTED_MODULE_6__["default"].fire('', '', 'success');
            }
        });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/components/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center \">\n  <form class=\"form-signin mx-auto\" (submit)=\"submitted()\">\n    <h1 class=\"h3 mb-3 font-weight-normal\">Sign up</h1>\n    <input name=\"email\" [(ngModel)]=\"email\" (onKeyup)=\"typingEmail()\" type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email\" required autofocus>\n    <input name=\"username\" [(ngModel)]=\"username\" (onKeyup)=\"typingUsername()\" type=\"text\" id=\"inputUsername\" class=\"form-control\" placeholder=\"Username\" required>\n    <input name=\"password\" [(ngModel)]=\"password\" (onKeyup)=\"typingPassword()\" type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\n    <input name=\"repeatPassword\" [(ngModel)]=\"repeatPassword\"(onKeyup)=\"typingRepeatedPassword()\" type=\"password\" id=\"inputRepeatedPassword\" class=\"form-control\" placeholder=\"Repeat Password\" required>\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign up</button>\n    <p class=\"mt-5 mb-3 text-muted\">&copy; 2019</p>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  width: 100%;\n  height: 100%;\n  padding-top: 10rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2VicmljL2NvZGUvbWVkaWEtZmFuLW1lYW4vY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxMHJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_lib_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/lib/toast */ "./src/app/lib/toast.ts");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validate, auth, router) {
        this.validate = validate;
        this.auth = auth;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.typingEmail = function (e) {
    };
    RegisterComponent.prototype.typingUsername = function (e) {
        if (this.username.length <= 4) {
        }
        this.validate.validateUsername(this.username).subscribe(function (data) {
            console.log(data);
        });
    };
    RegisterComponent.prototype.typingPassword = function (e) {
    };
    RegisterComponent.prototype.typingRepeatedPassword = function (e) {
    };
    RegisterComponent.prototype.submitted = function () {
        var _this = this;
        var user = {
            email: this.email,
            username: this.username,
            password: this.password,
        };
        this.auth.registerUser(user).subscribe(function () {
            src_app_lib_toast__WEBPACK_IMPORTED_MODULE_5__["default"].fire("You've successfully created your acount", 'Now you can log in', 'success');
            _this.router.navigate(['/']);
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/components/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn())
            return true;
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/guest.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guards/guest.guard.ts ***!
  \***************************************/
/*! exports provided: GuestGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestGuard", function() { return GuestGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var GuestGuard = /** @class */ (function () {
    function GuestGuard(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    GuestGuard.prototype.canActivate = function () {
        if (!this.auth.loggedIn())
            return true;
        this.router.navigate(['../']);
        return false;
    };
    GuestGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], GuestGuard);
    return GuestGuard;
}());



/***/ }),

/***/ "./src/app/lib/toast.ts":
/*!******************************!*\
  !*** ./src/app/lib/toast.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);

var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    customClass: 'toast-overflow',
});
/* harmony default export */ __webpack_exports__["default"] = (Toast);


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");




var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
    'Content-Type': 'application/json',
});
var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.baseRoute = 'http://localhost:3000/users/';
        this.id_token = '';
        this.user = '';
    }
    AuthService.prototype.loginUser = function (user) {
        return this.http.post(this.baseRoute + "login", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, user), { headers: headers });
    };
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.baseRoute + "signup", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, user), { headers: headers });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', user);
        this.id_token = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.id_token = '';
        this.user = '';
        localStorage.clear();
    };
    AuthService.prototype.loggedIn = function () {
        this.id_token = localStorage.getItem('id_token');
        return !helper.isTokenExpired(this.id_token);
    };
    AuthService.prototype.getUserData = function () {
        return JSON.parse(localStorage.getItem('user'));
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
    'Content-Type': 'application/json',
});
var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
        this.base_url = 'http://localhost:3000/posts/';
    }
    PostService.prototype.getFeed = function (token) {
        return this.http.get(this.base_url + "feed", { headers: headers.append('Authorization', token) });
    };
    PostService.prototype.profilePosts = function (username) {
        return this.http.get(this.base_url + "profile/" + username);
    };
    PostService.prototype.createPost = function (content, token) {
        var config = {
            headers: headers.append('Authorization', token)
        };
        return this.http.post("" + this.base_url, { content: content }, config);
    };
    PostService.prototype.starPost = function (postId, token) {
        var config = {
            headers: headers.append('Authorization', token)
        };
        return this.http.put(this.base_url + "star/" + postId, {}, config);
    };
    PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
    'Content-Type': 'application/json',
});
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.base_url = 'http://localhost:3000/users/';
    }
    UserService.prototype.getProfile = function (username) {
        return this.http.get(this.base_url + "profile/" + username, { headers: headers });
    };
    UserService.prototype.switchFollow = function (username, token) {
        return this.http.put(this.base_url + "switchFollow/" + username, {}, { headers: headers.append('Authorization', token) });
    };
    UserService.prototype.checkFollow = function (active, passive) {
        return this.http.get(this.base_url + "checkFollow/" + active + "/" + passive);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
    'Content-Type': 'application/json',
});
var ValidateService = /** @class */ (function () {
    function ValidateService(http) {
        this.http = http;
        this.baseRoute = 'http://localhost:3000/';
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.email == undefined || user.username == undefined || user.password == undefined)
            return false;
        return true;
    };
    ValidateService.prototype.validateEmail = function (email) {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };
    ValidateService.prototype.validateUsername = function (username) {
        return this.http.post(this.baseRoute + "users/validateUsername", { username: username }, { headers: headers });
    };
    ValidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ValidateService);
    return ValidateService;
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

module.exports = __webpack_require__(/*! /home/josebric/code/media-fan-mean/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map