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

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\" id=\"app-container\">\n  <router-outlet></router-outlet>\n</div>\n<div class=\"modal fade\" id=\"modalId\" tabindex=\"-1\" aria-hidden=\"true\" role=\"dialog\">\n  <div class=\"modal-dialog modal-dialog-centered\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">\n          Modal Title\n        </h5>\n        <span class=\"close\" data-dismiss=\"modal\">&times;</span>\n      </div>\n      <div class=\"modal-body\">\n        Hello\n      </div>\n      <div class=\"modal-footer\">\n        <button>Save</button>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n"

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
/* harmony import */ var _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/edit-profile/edit-profile.component */ "./src/app/components/edit-profile/edit-profile.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_followers_modal_followers_modal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/followers-modal/followers-modal.component */ "./src/app/components/followers-modal/followers-modal.component.ts");
/* harmony import */ var _components_user_profile_item_user_profile_item_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/user-profile-item/user-profile-item.component */ "./src/app/components/user-profile-item/user-profile-item.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/chat/chat.component */ "./src/app/components/chat/chat.component.ts");




























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
    {
        path: 'edit/:username',
        component: _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_22__["EditProfileComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]],
    },
    {
        path: 'chat/:username',
        component: _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_27__["ChatComponent"],
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
                _components_post_creator_post_creator_component__WEBPACK_IMPORTED_MODULE_21__["PostCreatorComponent"],
                _components_followers_modal_followers_modal_component__WEBPACK_IMPORTED_MODULE_24__["FollowersModalComponent"],
                _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_22__["EditProfileComponent"],
                _components_user_profile_item_user_profile_item_component__WEBPACK_IMPORTED_MODULE_25__["UserProfileItemComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_26__["SearchComponent"],
                _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_27__["ChatComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"],
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_5__["ValidateService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"], _services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"], _guards_guest_guard__WEBPACK_IMPORTED_MODULE_18__["GuestGuard"], _services_user_service__WEBPACK_IMPORTED_MODULE_19__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/chat/chat.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/chat/chat.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"chat\">\n  <section class=\"contacts\">\n    <ng-container *ngIf=\"chats\">\n      <div class=\"contact\" *ngFor=\"let contact of contacts\">\n        <a [routerLink]=\"['/chat/' + contact]\">{{contact}}</a>\n      </div>\n    </ng-container>\n  </section>\n  <section class=\"messages\">\n    <ng-container *ngIf=\"messages\">\n      <div class=\"message\" *ngFor=\"let message of messages\">\n        <div class=\"my-3\" [ngClass]=\"message.from == loggedInUser.username ? 'message-sent' : 'message-received'\">\n          <p class=\"my-0\">{{ message.msg }}</p>\n          <span class=\"text-muted my-0\">{{ message.from }}</span>\n        </div>\n      </div>\n      <input type=\"text\" id=\"message-input\" class=\"form-control\" [(ngModel)]=\"messageInput\" (keyup)=\"onKeyPressed($event)\" (input)=\"writing($event)\" autofocus>\n      <button class=\"btn btn-primary\" (click)=\"submitMessage()\">Send</button>  \n    </ng-container>\n  </section>\n</div>"

/***/ }),

/***/ "./src/app/components/chat/chat.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/chat/chat.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/chat/chat.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/chat/chat.component.ts ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_lib_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/lib/toast */ "./src/app/lib/toast.ts");







var ChatComponent = /** @class */ (function () {
    function ChatComponent(activeRoute, userService, chatService) {
        this.activeRoute = activeRoute;
        this.userService = userService;
        this.chatService = chatService;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        var loggedInUser = this.getLoggedInUser();
        this.token = localStorage.getItem('id_token');
        this.activeRoute.params.subscribe(function (_a) {
            var username = _a.username;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.getCurrentUserData(username)];
                        case 1:
                            _b.sent();
                            return [4 /*yield*/, this.getChats(loggedInUser.username, this.token)];
                        case 2:
                            _b.sent();
                            this.handleSockets();
                            this.getMessages();
                            return [2 /*return*/];
                    }
                });
            });
        });
    };
    ChatComponent.prototype.handleSockets = function () {
        var _this = this;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5___default.a.connect('http://192.168.0.2:3000/chat');
        this.socket.on('connect', function () {
            _this.socket.emit('user-connected', _this.loggedInUser.username);
            _this.socket.on('message', _this.messageReceived.bind(_this));
        });
    };
    ChatComponent.prototype.messageReceived = function (msg, from) {
        if (!this.contacts.includes(from))
            this.contacts.push(from);
        if (from != this.currentUser.username)
            src_app_lib_toast__WEBPACK_IMPORTED_MODULE_6__["default"].fire({
                title: 'New Message',
                type: 'info',
                html: "You've received a new message from <a href=\"/chat/" + from + "\">" + from + "<a>"
            });
        else
            this.messages.push({ msg: msg, from: from });
    };
    ChatComponent.prototype.getMessages = function () {
        var _this = this;
        this.chatService.getMessages(this.currentUser.username, this.token).subscribe(function (messages) {
            _this.messages = messages;
        });
    };
    ChatComponent.prototype.getLoggedInUser = function () {
        this.loggedInUser = JSON.parse(localStorage.getItem('user'));
        return this.loggedInUser;
    };
    ChatComponent.prototype.getCurrentUserData = function (username) {
        var _this = this;
        return new Promise(function (res) {
            _this.userService.getProfile(username).subscribe(function (_a) {
                var user = _a.user;
                _this.currentUser = user;
                res();
            });
        });
    };
    ChatComponent.prototype.getChats = function (username, token) {
        var _this = this;
        return new Promise(function (res) {
            _this.chatService.getChats(username, token).subscribe(function (chats) {
                _this.chats = chats;
                _this.contacts = chats.map(function (chat) { return chat.members.filter(function (member) { return member != username; })[0]; });
                res();
            });
        });
    };
    ChatComponent.prototype.memberUsername = function (chat) {
        var _this = this;
        return chat.members.find(function (username) { return username != _this.loggedInUser.username; });
    };
    ChatComponent.prototype.onKeyPressed = function (e) {
        if (e.keyCode == 13) {
            this.submitMessage();
        }
    };
    ChatComponent.prototype.submitMessage = function () {
        this.sendMessage(this.messageInput, this.currentUser.username, this.token);
        this.messageInput = '';
    };
    ChatComponent.prototype.writing = function () {
        console.log('writing...');
    };
    ChatComponent.prototype.sendMessage = function (msg, receiver, token) {
        var _this = this;
        this.chatService.sendMessage(msg, receiver, token).subscribe(function (message) {
            _this.messages.push(message);
            _this.socket.emit('reply', msg, receiver, token);
        });
    };
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/components/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/components/chat/chat.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-profile/edit-profile.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/edit-profile/edit-profile.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"edit-profile\">\n  <a *ngIf=\"user\" class=\"btn btn-dark\" [routerLink]=\"['/', user?.username]\">\n    Back\n  </a>\n  <a *ngIf=\"!user\" class=\"btn btn-dark\">\n    Back\n  </a>\n  <h1 class=\"title\">\n    Edit your profile {{ user?.username }}\n  </h1>\n  <div class=\"profile_photo\">\n    <img id=\"profile_photo_image\" src=\"{{ user?.profile_photo }}\" alt=\"\">\n  </div>\n  <form class=\"form\">\n    <div class=\"form-group\">\n      <label for=\"profile_photo\">Profile photo</label>\n      <input type=\"file\"  class=\"form-control\" name=\"profile_photo\" accept=\"image/png, image/jpeg, image/png\" (change)=\"handleFile($event)\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"biography\">Biography</label>\n       <input type=\"text\" class=\"form-control\" name=\"biography\" placeholder=\"Write your biography\" [(ngModel)]=\"biography\" (change)=\"handleBiography()\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"email\" (change)=\"handleEmail()\">\n    </div>\n\n    <button class=\"btn btn-dark\" (click)=\"submitForm()\">\n      Save\n    </button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/edit-profile/edit-profile.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/edit-profile/edit-profile.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile_photo {\n  width: 300px;\n  height: 300px; }\n\n#profile_photo_image {\n  max-width: 100%;\n  max-height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2VicmljL2NvZGUvbWVkaWEtZmFuLW1lYW4vY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFHZjtFQUVFLGVBQWM7RUFDZCxnQkFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGVfcGhvdG8ge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG59XG5cbiNwcm9maWxlX3Bob3RvX2ltYWdlIHtcblxuICBtYXgtd2lkdGg6MTAwJTtcbiAgbWF4LWhlaWdodDoxMDAlO1xuICBcblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/edit-profile/edit-profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/edit-profile/edit-profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var cropperjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cropperjs */ "./node_modules/cropperjs/dist/cropper.js");
/* harmony import */ var cropperjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cropperjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_lib_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/lib/toast */ "./src/app/lib/toast.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);








var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(route, userService, auth) {
        this.route = route;
        this.userService = userService;
        this.auth = auth;
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.token = this.auth.getToken();
        this.getUserData(function () { return _this.setDefaultValues(); });
    };
    EditProfileComponent.prototype.getUserData = function (cb) {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var username = params.username;
            _this.userService.getProfile(username).subscribe(function (_a) {
                var user = _a.user;
                _this.user = user;
                cb();
            });
        });
    };
    EditProfileComponent.prototype.setDefaultValues = function () {
        this.biography = this.user.biography;
        this.email = this.user.email;
    };
    EditProfileComponent.prototype.handleFile = function (e) {
        var _this = this;
        if (this.cropper != null) {
            this.profile_photo = null;
            this.cropper.destroy();
        }
        this.profile_photo = e.target.files[0];
        var reader = new FileReader();
        reader.onload = function (ev) {
            jquery__WEBPACK_IMPORTED_MODULE_7___default()('#profile_photo_image').attr('src', reader.result);
            _this.cropper = new cropperjs__WEBPACK_IMPORTED_MODULE_2___default.a(document.querySelector('#profile_photo_image'), {
                aspectRatio: 1 / 1,
                background: true,
                movable: false,
                zoomable: false,
                viewMode: 3,
                crop: function (event) {
                    // console.log(event.detail.x);
                    // console.log(event.detail.y);
                    // console.log(event.detail.width);
                    // console.log(event.detail.height);
                    // console.log(event.detail.rotate);
                    // console.log(event.detail.scaleX);
                    // console.log(event.detail.scaleY);
                },
            });
        };
        reader.readAsDataURL(this.profile_photo);
    };
    EditProfileComponent.prototype.handleBiography = function () {
        this.biographyChanged = true;
    };
    EditProfileComponent.prototype.handleEmail = function () {
        this.emailChanged = true;
    };
    EditProfileComponent.prototype.submitForm = function () {
        var _this = this;
        if (this.profile_photo) {
            this.cropper.getCroppedCanvas({
                width: 500,
                height: 500
            }).toBlob(function (blob) {
                _this.userService.updateProfilePhoto(blob, _this.token).subscribe(function (_a) {
                    var success = _a.success, url = _a.url;
                    if (!success) {
                        src_app_lib_toast__WEBPACK_IMPORTED_MODULE_6__["default"].fire('Error uploading profile photo', '', 'error');
                    }
                    _this.profile_photo = null;
                    _this.cropper.destroy();
                    _this.user.profile_photo = url;
                    document.querySelector('#profile_photo_image').setAttribute('src', url);
                });
            });
        }
        if (this.biographyChanged)
            this.userService.updateBiography(this.biography, this.token).subscribe(function (_a) {
                var success = _a.success, biography = _a.biography;
                if (!success) {
                    src_app_lib_toast__WEBPACK_IMPORTED_MODULE_6__["default"].fire('Error updating your biography', '', 'error');
                }
                _this.biography = biography;
            });
        if (this.emailChanged)
            this.userService.updateEmail(this.email, this.token).subscribe(function (_a) {
                var success = _a.success, email = _a.email;
                if (!success) {
                    src_app_lib_toast__WEBPACK_IMPORTED_MODULE_6__["default"].fire('Error updating the email', '', 'error');
                }
                _this.email = email;
            });
        src_app_lib_toast__WEBPACK_IMPORTED_MODULE_6__["default"].fire('Profile updated', '', 'success');
    };
    EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! ./edit-profile.component.html */ "./src/app/components/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile.component.scss */ "./src/app/components/edit-profile/edit-profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/followers-modal/followers-modal.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/followers-modal/followers-modal.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"followersModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title text-capitalize\">{{ title }}</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <ng-container *ngIf=\"title == 'following'\" >\n          <div *ngFor=\"let user of profileFollowing\">\n            <app-user-profile-item [user]=\"user\" [loggedInUser]=\"loggedInUser\" [doesFollow]=\"doesFollow\" (switchFollow)=\"switchFollowUnfollow($event)\"></app-user-profile-item>\n          </div>\n        </ng-container>\n\n        <ng-container *ngIf=\"title == 'followers'\" >\n          <div *ngFor=\"let user of profileFollowers\">\n            <app-user-profile-item [user]=\"user\" [loggedInUser]=\"loggedInUser\" [doesFollow]=\"doesFollow\" (switchFollow)=\"switchFollowUnfollow($event)\"></app-user-profile-item>\n          </div>\n        </ng-container>\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/followers-modal/followers-modal.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/followers-modal/followers-modal.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9sbG93ZXJzLW1vZGFsL2ZvbGxvd2Vycy1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/followers-modal/followers-modal.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/followers-modal/followers-modal.component.ts ***!
  \*************************************************************************/
/*! exports provided: FollowersModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowersModalComponent", function() { return FollowersModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/user */ "./src/app/models/user.ts");



var FollowersModalComponent = /** @class */ (function () {
    function FollowersModalComponent() {
        var _this = this;
        this.switchFollow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.doesFollow = function (user) {
            if (user == undefined || _this.loggedUserFollowing == undefined)
                return;
            return _this.loggedUserFollowing.find(function (usr) { return usr.username == user.username; }) ? true : false;
        };
    }
    FollowersModalComponent.prototype.ngOnInit = function () {
    };
    FollowersModalComponent.prototype.switchFollowUnfollow = function (user) {
        this.switchFollow.emit(user.username);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FollowersModalComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], FollowersModalComponent.prototype, "profileFollowing", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], FollowersModalComponent.prototype, "profileFollowers", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], FollowersModalComponent.prototype, "loggedUserFollowing", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_user__WEBPACK_IMPORTED_MODULE_2__["User"])
    ], FollowersModalComponent.prototype, "loggedInUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FollowersModalComponent.prototype, "switchFollow", void 0);
    FollowersModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-followers-modal',
            template: __webpack_require__(/*! ./followers-modal.component.html */ "./src/app/components/followers-modal/followers-modal.component.html"),
            styles: [__webpack_require__(/*! ./followers-modal.component.scss */ "./src/app/components/followers-modal/followers-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FollowersModalComponent);
    return FollowersModalComponent;
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

module.exports = "<div class=\"home-container\" id=\"home\">\n  <div class=\"post post-creator col-6 my-3\">\n    <app-post-creator></app-post-creator>\n  </div>\n  <app-posts [posts]=\"posts\" [user]=\"user\"></app-posts>\n\n</div>"

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
        this.token = localStorage.getItem('id_token');
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

module.exports = "<nav class=\"navbar navbar-light bg-light\" id=\"navbar\">\n  <app-search></app-search>\n  <a id=\"branding\" class=\"navbar-brand\" [routerLink]=\"['/']\">Mediafan</a>\n  <div class=\"nav\" id=\"nav-links\">\n    <a class=\"btn btn-light\" *ngIf=\"!auth.loggedIn()\" [routerLink]=\"['/login']\" routerLinkActive=\"active\">Log in</a>\n    <a class=\"btn btn-light\" *ngIf=\"!auth.loggedIn()\" [routerLink]=\"['/signup']\" routerLinkActive=\"active\">Sign up</a>\n    \n    <a class=\"btn btn-light\" *ngIf=\"auth.loggedIn() && user\" [routerLink]=\"['/', user?.username]\" routerLinkActive=\"active\"><img src=\"{{ profile_photo || user?.profile_photo }}\" class=\"profile_photo\" alt=\"\">{{user?.username}}</a>\n    <a class=\"btn btn-light\" *ngIf=\"auth.loggedIn()\" (click)=\"logout()\" routerLinkActive=\"active\">Logout</a>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#navbar {\n  height: 60px; }\n  #navbar #branding {\n    position: absolute;\n    right: 50%; }\n  #navbar .profile_photo {\n    height: 30px;\n    width: auto;\n    border-radius: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2VicmljL2NvZGUvbWVkaWEtZmFuLW1lYW4vY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWSxFQUFBO0VBRGQ7SUFJSSxrQkFBa0I7SUFDbEIsVUFBVSxFQUFBO0VBTGQ7SUFTSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hdmJhciB7XG4gIGhlaWdodDogNjBweDtcblxuICAjYnJhbmRpbmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNTAlO1xuICB9XG4gIFxuICAucHJvZmlsZV9waG90byB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxufVxuXG4iXX0= */"

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
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth, userService, router) {
        this.auth = auth;
        this.userService = userService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.userData();
    };
    NavbarComponent.prototype.userData = function () {
        var _this = this;
        var username = JSON.parse(localStorage.getItem('user')).username;
        this.userService.getProfile(username).subscribe(function (_a) {
            var user = _a.user;
            _this.user = user;
            _this.profile_photo = user.profile_photo;
        });
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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
            autofocus: false,
            holder: 'post-creator',
            placeholder: 'Write your post',
            tools: {
                image: {
                    class: _editorjs_image__WEBPACK_IMPORTED_MODULE_4___default.a,
                    config: {
                        endpoints: {
                            byFile: 'http://192.168.0.2:3000/posts/uploadImage',
                            byUrl: 'http://192.168.0.2:3000/posts/uploadImageUrl',
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

module.exports = "<div class=\"post card\">\n  <!-- <button class=\"btn btn-danger delete-post\" *ngIf=\"user.username == post.author\" (click)=\"deletePost()\">\n    x\n  </button> -->\n  <div class=\"card-body\">\n    <a class=\"post-author\" [routerLink]=\"['/', post.author.username]\">\n        <img src=\"{{ post.author.profile_photo }}\" alt=\"authors_photo\" class=\"authors_photo\">\n        <p class=\"authors_name\">{{ post.author.username }}</p>\n    </a>\n    <ng-container *ngFor=\"let block of post.content.blocks\" [ngSwitch]=\"block.type\">\n\n      <div *ngSwitchCase=\"'header'\" class=\"card-title text-level-{{block.data.level}}\">\n        {{ block.data.text }}\n      </div>\n\n      <p *ngSwitchCase=\"'paragraph'\" [innerHTML]=\"block.data.text\"></p>\n\n      <img class=\"image\" *ngSwitchCase=\"'image'\" src=\"{{ post.author.profile_photo }}\" alt=\"{{ block.data.caption}}\">\n      <p *ngSwitchCase=\"'image'\" class=\"image-caption\">{{ block.data.caption }}</p>\n      \n      <blockquote *ngSwitchCase=\"'quote'\" class=\"blockquote text-center my-5\">\n        <p class=\"mb-0\">{{ block.data.text }}</p>\n        <footer class=\"blockquote-footer\"><cite title=\"{{ block.data.caption }}\">{{ block.data.caption }}</cite></footer>\n      </blockquote>\n\n    </ng-container>\n  </div>\n  <div class=\"card-footer\">\n      <span (click)=\"addStar()\" class=\"float-left\">{{ nStars }}<svg [ngStyle]=\"{fill: starred ? '#f0ed4f' : 'gray'}\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z\"/></svg>\n      </span>\n      <span class=\"text-muted float-right\">{{post.author.username}}</span>\n      <!-- <p (click)=\"watchComments()\" class=\"text-muted clear-both\">Watch comments</p> -->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/post/post.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/post/post.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post .text-level- {\n  font-weight: bold; }\n  .post .text-level-1 {\n    font-size: 2.5rem; }\n  .post .text-level-2 {\n    font-size: 2rem; }\n  .post .text-level-3 {\n    font-size: 1.75rem; }\n  .post .text-level-4 {\n    font-size: 1.5rem; }\n  .post .text-level-5 {\n    font-size: 1.25rem; }\n  .post .text-level-6 {\n    font-size: 1rem; }\n  .post .image {\n  width: 100%; }\n  .post .authors_photo {\n  width: 35px;\n  height: auto;\n  border-radius: 50%; }\n  .post .authors_name {\n  display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2VicmljL2NvZGUvbWVkaWEtZmFuLW1lYW4vY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9wb3N0L3Bvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxpQkFBaUIsRUFBQTtFQUZyQjtJQUlNLGlCQUFpQixFQUFBO0VBSnZCO0lBT00sZUFBZSxFQUFBO0VBUHJCO0lBVU0sa0JBQWtCLEVBQUE7RUFWeEI7SUFhTSxpQkFBaUIsRUFBQTtFQWJ2QjtJQWdCTSxrQkFBa0IsRUFBQTtFQWhCeEI7SUFtQk0sZUFBZSxFQUFBO0VBbkJyQjtFQXdCSSxXQUFXLEVBQUE7RUF4QmY7RUE2Qk0sV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0IsRUFBQTtFQS9CeEI7RUFtQ00scUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bvc3QvcG9zdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0IHtcbiAgLnRleHQtbGV2ZWwte1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICYxIHtcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIH1cbiAgICAmMiB7XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxuICAgICYzIHtcbiAgICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICB9XG4gICAgJjQge1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgfVxuICAgICY1IHtcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICB9XG4gICAgJjYge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgfVxuICBcbiAgLmltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5hdXRob3JzIHtcbiAgICAmX3Bob3RvIHtcbiAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgfVxuICAgICZfbmFtZSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ== */"

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
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");




var PostComponent = /** @class */ (function () {
    function PostComponent(postService, userService) {
        this.postService = postService;
        this.userService = userService;
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
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

module.exports = "<div class=\"posts\" id=\"posts\">\n  <div class=\"post col-6 mb-3\" *ngFor=\"let post of posts\">\n    <app-post [user]=\"user\" [post]=\"post\"></app-post>\n  </div>\n</div>"

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
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");



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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["User"])
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

module.exports = "<app-followers-modal *ngIf=\"profileFollowing || profileFollowers\" (switchFollow)=\"switchFollow($event)\" [profileFollowing]=\"profileFollowing\" [profileFollowers]=\"profileFollowers\" [title]=\"modalTitle\" [loggedUserFollowing]=\"loggedUserFollowing\" [loggedInUser]=\"loggedInUser\"></app-followers-modal>\n<div id=\"profile\">\n  <section class=\"bio\">\n    <div class=\"info\">\n      <h1>{{profileUser?.username}}</h1>\n      <img src=\"{{profileUser?.profile_photo}}\" alt=\"profile_photo\">\n      <p id=\"description\">{{ profileUser?.description || 'No description'}}</p>\n      <p class=\"followList\" (click)=\"followingModal()\" data-toggle=\"modal\" data-target=\"#followersModal\">{{ profileFollowing?.length }} Following</p>\n      <p class=\"followList\" (click)=\"followersModal()\" data-toggle=\"modal\" data-target=\"#followersModal\">{{ profileFollowers?.length }} Followers</p>\n      <a class=\"btn btn-dark\" *ngIf=\"ownProfile && profileUser\" [routerLink]=\"['/edit', profileUser?.username]\">Edit Profile</a>\n      <a class=\"btn btn-dark\" *ngIf=\"ownProfile && !profileUser\">Edit Profile</a>\n      <a class=\"message\" *ngIf=\"profileUser && !ownProfile\" [routerLink]=\"['/chat/', profileUser?.username]\" >\n        <i class=\"far fa-envelope\"></i>\n      </a>\n      <a class=\"message\" *ngIf=\"!profileUser && !ownProfile\">\n        <i class=\"far fa-envelope\"></i>\n      </a>\n    </div>\n    <div (click)=\"switchFollow(profileUser.username)\" class=\"switch-follow\" *ngIf=\"!ownProfile && loggedInUser\">\n      <button *ngIf=\"isFollowing\" class=\"btn btn-dark unfollow\">\n        Unfollow\n      </button>\n      <button *ngIf=\"!isFollowing\" class=\"btn btn-dark follow\">\n        Follow\n      </button>\n    </div>\n  </section>\n  <section>\n    <div *ngIf=\"ownProfile\" class=\"post post-creator col-6 my-3\">\n      <app-post-creator (posted)=\"postCreated()\"></app-post-creator>\n    </div>\n    <app-posts [posts]=\"profilePosts\" [user]=\"loggedInUser\"></app-posts>\n  </section>\n  <div id=\"loader\">\n    <p *ngIf=\"hasMore\">\n      Loading...\n    </p>\n    <p *ngIf=\"!hasMore\">\n      There are no more posts\n    </p>\n  </div>\n</div>\n"

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






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(postService, route, userService, auth) {
        this.postService = postService;
        this.route = route;
        this.userService = userService;
        this.auth = auth;
        this.profilePosts = [];
        this.limit = 5;
        this.skip = 0;
        this.hasMore = true;
        this.fetchingPosts = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.skip = 0;
                this.loggedInUser = this.auth.getUserData();
                this.getProfilesUserData(function () {
                    _this.getProfilePosts(_this.profileUsername);
                    if (_this.loggedInUser) {
                        _this.getLoggedUserFollows();
                        _this.isOwnProfile();
                        _this.isUserFollowingProfile();
                    }
                    _this.loader = document.querySelector('#loader');
                    window.onscroll = _this.onScroll.bind(_this);
                });
                return [2 /*return*/];
            });
        });
    };
    ProfileComponent.prototype.onScroll = function (e) {
        if ((document.documentElement.scrollHeight - window.innerHeight) === window.scrollY) {
            if ((this.fetchingPosts && !this.profileUser) || !this.hasMore)
                return;
            this.addMorePosts();
        }
    };
    ProfileComponent.prototype.addMorePosts = function () {
        this.skip += this.limit;
        this.getProfilePosts(this.profileUser.username);
    };
    ProfileComponent.prototype.getProfilesUserData = function (cb) {
        var _this = this;
        if (cb === void 0) { cb = function () { }; }
        this.route.params.subscribe(function (params) {
            _this.profileUsername = params.username;
            _this.userService.getProfile(_this.profileUsername).subscribe(function (_a) {
                var user = _a.user;
                _this.profileUser = user;
                cb();
            });
        });
    };
    ProfileComponent.prototype.getProfilePosts = function (username) {
        var _this = this;
        if (this.fetchingPosts)
            return;
        this.fetchingPosts = true;
        var skip = this.profilePosts == 0 ? 0 : this.skip;
        var limit = this.limit;
        this.postService.profilePosts(username, skip, limit).subscribe(function (_a) {
            var posts = _a.posts, has_more = _a.has_more;
            var _b;
            _this.fetchingPosts = false;
            _this.hasMore = has_more;
            (_b = _this.profilePosts).push.apply(_b, posts);
        });
    };
    ProfileComponent.prototype.isOwnProfile = function () {
        this.ownProfile = this.loggedInUser.username == this.profileUsername;
    };
    ProfileComponent.prototype.isUserFollowingProfile = function () {
        var _this = this;
        this.userService.checkFollow(this.loggedInUser.username, this.profileUser.username).subscribe(function (_a) {
            var following = _a.following;
            _this.isFollowing = following;
        });
    };
    ProfileComponent.prototype.postCreated = function () {
        this.addMorePosts();
    };
    ProfileComponent.prototype.switchFollow = function (username) {
        var _this = this;
        var token = localStorage.getItem('id_token');
        this.userService.switchFollow(username, token).subscribe(function (data) {
            if (data.success) {
                _this.getLoggedUserFollows();
                _this.isUserFollowingProfile();
            }
        });
    };
    ProfileComponent.prototype.followersModal = function () {
        this.modalTitle = 'followers';
    };
    ProfileComponent.prototype.followingModal = function () {
        this.modalTitle = 'following';
    };
    ProfileComponent.prototype.getLoggedUserFollows = function () {
        var _this = this;
        this.userService.getFollows(this.loggedInUser.username).subscribe(function (_a) {
            var following = _a.following, followers = _a.followers;
            _this.loggedUserFollowing = following;
        });
        this.userService.getFollows(this.profileUsername).subscribe(function (_a) {
            var following = _a.following, followers = _a.followers;
            _this.profileFollowing = following;
            _this.profileFollowers = followers;
            if (_this.modalTitle == 'following')
                _this.followingModal();
            else
                _this.followersModal();
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

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"search\">\n  <input class=\"search-input\" type=\"text\" placeholder=\"Search...\" class=\"form-control\" [(ngModel)]=\"query\" (input)=\"searchUsers($event)\"  (focus)=\"focus()\" (blur)=\"unfocus()\"/>\n  <ul class=\"suggestions\" *ngIf=\"focused\">\n    <ng-container *ngIf=\"matches\">\n      <li class=\"user-item\" *ngFor=\"let user of users\">\n        <a class=\"user\" [routerLink]=\"['/' + user.username]\">\n          <span class=\"username\">{{ user.username }}</span> <img class=\"user-photo\" src=\"{{ user.profile_photo }}\" alt=\"profile_photo\">\n        </a>\n      </li>\n    </ng-container>\n    <span *ngIf=\"!matches\" id=\"emptyUsers\">\n      No users found\n    </span>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/components/search/search.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#search {\n  position: relative;\n  top: 0;\n  left: 0; }\n  #search .suggestions {\n    background: #fff;\n    width: 100%;\n    min-height: 30px;\n    padding: 10px 15px;\n    border: 1px solid #ccc;\n    position: absolute;\n    top: 100%;\n    left: 0; }\n  #search .suggestions li.user-item {\n      list-style: none;\n      text-decoration: none; }\n  #search .suggestions li.user-item .user-photo {\n        height: 50px;\n        width: 50px;\n        border-radius: 50%; }\n  #search .suggestions #emptyUsers {\n      color: #807f7f; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2VicmljL2NvZGUvbWVkaWEtZmFuLW1lYW4vY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPLEVBQUE7RUFIVDtJQU1JLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPLEVBQUE7RUFiWDtNQWdCTSxnQkFBZ0I7TUFDaEIscUJBQXFCLEVBQUE7RUFqQjNCO1FBb0JVLFlBQVk7UUFDWixXQUFXO1FBQ1gsa0JBQWtCLEVBQUE7RUF0QjVCO01BaUNNLGNBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2VhcmNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG5cbiAgLnN1Z2dlc3Rpb25zIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuXG4gICAgbGkudXNlci1pdGVtIHtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAudXNlciB7XG4gICAgICAgICYtcGhvdG8ge1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cbiAgXG4gICAgICAgICZuYW1lIHtcbiAgXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cblxuICAgICNlbXB0eVVzZXJzIHtcbiAgICAgIGNvbG9yOiBkYXJrZW4oI2NjYywgMzApXG4gICAgfVxuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");



var SearchComponent = /** @class */ (function () {
    function SearchComponent(userService) {
        this.userService = userService;
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.suggestions();
    };
    SearchComponent.prototype.suggestions = function () {
    };
    SearchComponent.prototype.searchUsers = function (e) {
        var _this = this;
        if (this.query == '')
            return this.matches = false;
        this.userService.searchUser(this.query).subscribe(function (_a) {
            var users = _a.users, matches = _a.matches;
            if (!matches)
                return _this.matches = false;
            _this.matches = true;
            if (JSON.stringify(users) == JSON.stringify(_this.users))
                return;
            _this.users = users;
        });
    };
    SearchComponent.prototype.focus = function () {
        this.focused = true;
    };
    SearchComponent.prototype.unfocus = function () {
        var _this = this;
        setTimeout(function () {
            _this.focused = false;
        }, 200);
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/components/search/search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/user-profile-item/user-profile-item.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/user-profile-item/user-profile-item.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-profile-item\">\n  <img class=\"users_photo\" src=\"{{ user?.profile_photo }}\" alt=\"Profile Photo\">\n  <a class=\"username\" [routerLink]=\"['/', user?.username]\">{{user.username}}</a>\n  <div class=\"followButtons\" *ngIf=\"user?.username != loggedInUser?.username\">\n    <button (click)=\"switchFollowUnfollow(user)\" *ngIf=\"doesFollow(user)\" class=\"unfollow-btn\">\n      Unfollow\n    </button>\n    <button (click)=\"switchFollowUnfollow(user)\" *ngIf=\"!doesFollow(user)\" class=\"follow-btn\">\n      Follow\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/user-profile-item/user-profile-item.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/user-profile-item/user-profile-item.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-profile-item .users_photo {\n  width: 50px;\n  height: auto;\n  border-radius: 50%; }\n\n.user-profile-item .username {\n  display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2VicmljL2NvZGUvbWVkaWEtZmFuLW1lYW4vY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy91c2VyLXByb2ZpbGUtaXRlbS91c2VyLXByb2ZpbGUtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBSnRCO0VBUUkscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXItcHJvZmlsZS1pdGVtL3VzZXItcHJvZmlsZS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItcHJvZmlsZS1pdGVtIHtcbiAgLnVzZXJzX3Bob3RvIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG5cbiAgLnVzZXJuYW1lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/user-profile-item/user-profile-item.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/user-profile-item/user-profile-item.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UserProfileItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileItemComponent", function() { return UserProfileItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");



var UserProfileItemComponent = /** @class */ (function () {
    function UserProfileItemComponent() {
        this.switchFollow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    UserProfileItemComponent.prototype.ngOnInit = function () {
    };
    UserProfileItemComponent.prototype.switchFollowUnfollow = function (user) {
        this.switchFollow.emit(user);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["User"])
    ], UserProfileItemComponent.prototype, "loggedInUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["User"])
    ], UserProfileItemComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], UserProfileItemComponent.prototype, "doesFollow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserProfileItemComponent.prototype, "switchFollow", void 0);
    UserProfileItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile-item',
            template: __webpack_require__(/*! ./user-profile-item.component.html */ "./src/app/components/user-profile-item/user-profile-item.component.html"),
            styles: [__webpack_require__(/*! ./user-profile-item.component.scss */ "./src/app/components/user-profile-item/user-profile-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserProfileItemComponent);
    return UserProfileItemComponent;
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

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



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
        this.baseRoute = 'http://192.168.0.2:3000/users/';
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
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('id_token');
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

/***/ "./src/app/services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ChatService = /** @class */ (function () {
    function ChatService(http) {
        this.http = http;
        this.base_url = 'http://192.168.0.2:3000/chats/';
    }
    ChatService.prototype.getMessages = function (contact, token) {
        return this.http.get(this.base_url + "messages/" + contact, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': token,
            })
        });
    };
    ChatService.prototype.sendMessage = function (msg, receiver, token) {
        return this.http.post("" + this.base_url + receiver, { msg: msg }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': token,
            })
        });
    };
    ChatService.prototype.getContacts = function (username, token) {
    };
    ChatService.prototype.getChats = function (username, token) {
        return this.http.get("" + this.base_url, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': token,
            })
        });
    };
    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ChatService);
    return ChatService;
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
        this.base_url = 'http://192.168.0.2:3000/posts/';
    }
    PostService.prototype.getFeed = function (token) {
        return this.http.get(this.base_url + "feed", { headers: headers.append('Authorization', token) });
    };
    PostService.prototype.profilePosts = function (username, skip, limit) {
        return this.http.get(this.base_url + "profile/" + username + "?skip=" + skip + "&limit=" + limit);
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
        this.base_url = 'http://192.168.0.2:3000/users/';
    }
    UserService.prototype.getProfile = function (username) {
        return this.http.get(this.base_url + "profile/" + username, { headers: headers });
    };
    UserService.prototype.switchFollow = function (username, token) {
        return this.http.put(this.base_url + "switchFollow/" + username, {}, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token,
            })
        });
    };
    UserService.prototype.checkFollow = function (active, passive) {
        return this.http.get(this.base_url + "checkFollow/" + active + "/" + passive);
    };
    UserService.prototype.getProfilePhoto = function (username) {
        return this.http.get(this.base_url + "profile_photo/" + username);
    };
    UserService.prototype.getFollows = function (username) {
        return this.http.get(this.base_url + "getFollows/" + username, { headers: headers });
    };
    UserService.prototype.updateProfilePhoto = function (profile_photo, token) {
        var formData = new FormData();
        formData.append('profile_photo', profile_photo, profile_photo.name);
        var config = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': token,
            })
        };
        return this.http.put(this.base_url + "updateProfilePhoto", formData, config);
    };
    UserService.prototype.updateBiography = function (biography, token) {
        return this.http.put(this.base_url + "updateBiography", { biography: biography }, { headers: headers.append('Authorization', token) });
    };
    UserService.prototype.updateEmail = function (email, token) {
        return this.http.put(this.base_url + "updateEmail", { email: email }, { headers: headers.append('Authorization', token) });
    };
    UserService.prototype.searchUser = function (string) {
        return this.http.get(this.base_url + "search_user/" + string, { headers: headers });
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
        this.baseRoute = 'http://192.168.0.2:3000/';
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


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map