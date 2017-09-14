webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__todo__ = __webpack_require__("../../../../../src/app/todo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var API_URL = __WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].apiUrl;
var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.signIn = function (username, password) {
        return this.http
            .post(API_URL + '/sign-in', {
            username: username,
            password: password
        })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ApiService.prototype.getAllTodos = function () {
        var options = this.getRequestOptions();
        return this.http
            .get(API_URL + '/todos', options)
            .map(function (response) {
            var todos = response.json();
            return todos.map(function (todo) { return new __WEBPACK_IMPORTED_MODULE_3__todo__["a" /* Todo */](todo); });
        })
            .catch(this.handleError);
    };
    ApiService.prototype.createTodo = function (todo) {
        var options = this.getRequestOptions();
        return this.http
            .post(API_URL + '/todos', todo, options)
            .map(function (response) {
            return new __WEBPACK_IMPORTED_MODULE_3__todo__["a" /* Todo */](response.json());
        })
            .catch(this.handleError);
    };
    ApiService.prototype.getTodoById = function (todoId) {
        var options = this.getRequestOptions();
        return this.http
            .get(API_URL + '/todos/' + todoId, options)
            .map(function (response) {
            return new __WEBPACK_IMPORTED_MODULE_3__todo__["a" /* Todo */](response.json());
        })
            .catch(this.handleError);
    };
    ApiService.prototype.updateTodo = function (todo) {
        var options = this.getRequestOptions();
        return this.http
            .put(API_URL + '/todos/' + todo.id, todo, options)
            .map(function (response) {
            return new __WEBPACK_IMPORTED_MODULE_3__todo__["a" /* Todo */](response.json());
        })
            .catch(this.handleError);
    };
    ApiService.prototype.deleteTodoById = function (todoId) {
        var options = this.getRequestOptions();
        return this.http
            .delete(API_URL + '/todos/' + todoId, options)
            .map(function (response) { return null; })
            .catch(this.handleError);
    };
    ApiService.prototype.handleError = function (error) {
        console.error('ApiService::handleError', error);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error);
    };
    ApiService.prototype.getRequestOptions = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
                'eyJuYW1lIjoiU2l0ZVBvaW50IFJlYWRlciJ9.sS4aPcmnYfm3PQlTtH14az9CGjWkjnsDyG_1ats4yYg'
        });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
    };
    return ApiService;
}());
ApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ApiService);

var _a;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_in_sign_in_component__ = __webpack_require__("../../../../../src/app/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__can_activate_todos_guard__ = __webpack_require__("../../../../../src/app/can-activate-todos.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__todos_resolver__ = __webpack_require__("../../../../../src/app/todos.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__todos_page_todos_page_component__ = __webpack_require__("../../../../../src/app/todos-page/todos-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full'
    },
    {
        path: 'sign-in',
        component: __WEBPACK_IMPORTED_MODULE_2__sign_in_sign_in_component__["a" /* SignInComponent */]
    },
    {
        path: 'todos',
        component: __WEBPACK_IMPORTED_MODULE_5__todos_page_todos_page_component__["a" /* TodosPageComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_3__can_activate_todos_guard__["a" /* CanActivateTodosGuard */]
        ],
        resolve: {
            todos: __WEBPACK_IMPORTED_MODULE_4__todos_resolver__["a" /* TodosResolver */]
        }
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__can_activate_todos_guard__["a" /* CanActivateTodosGuard */],
            __WEBPACK_IMPORTED_MODULE_4__todos_resolver__["a" /* TodosResolver */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_data_service__ = __webpack_require__("../../../../../src/app/todo-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__todo_data_service__["a" /* TodoDataService */]]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__todo_list_todo_list_component__ = __webpack_require__("../../../../../src/app/todo-list/todo-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__todo_list_footer_todo_list_footer_component__ = __webpack_require__("../../../../../src/app/todo-list-footer/todo-list-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__todo_list_header_todo_list_header_component__ = __webpack_require__("../../../../../src/app/todo-list-header/todo-list-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__todo_data_service__ = __webpack_require__("../../../../../src/app/todo-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__todo_list_item_todo_list_item_component__ = __webpack_require__("../../../../../src/app/todo-list-item/todo-list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sign_in_sign_in_component__ = __webpack_require__("../../../../../src/app/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__todos_todos_component__ = __webpack_require__("../../../../../src/app/todos/todos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__session_service__ = __webpack_require__("../../../../../src/app/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__todos_page_todos_page_component__ = __webpack_require__("../../../../../src/app/todos-page/todos-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__todo_list_todo_list_component__["a" /* TodoListComponent */],
            __WEBPACK_IMPORTED_MODULE_7__todo_list_footer_todo_list_footer_component__["a" /* TodoListFooterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__todo_list_header_todo_list_header_component__["a" /* TodoListHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_10__todo_list_item_todo_list_item_component__["a" /* TodoListItemComponent */],
            __WEBPACK_IMPORTED_MODULE_12__sign_in_sign_in_component__["a" /* SignInComponent */],
            __WEBPACK_IMPORTED_MODULE_13__todos_todos_component__["a" /* TodosComponent */],
            __WEBPACK_IMPORTED_MODULE_16__todos_page_todos_page_component__["a" /* TodosPageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_14__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_15__session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_9__todo_data_service__["a" /* TodoDataService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_service__ = __webpack_require__("../../../../../src/app/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService(session) {
        this.session = session;
    }
    AuthService.prototype.isSignedIn = function () {
        return !!this.session.accessToken;
    };
    AuthService.prototype.doSignOut = function () {
        this.session.destroy();
    };
    AuthService.prototype.doSignIn = function (accessToken, name) {
        if ((!accessToken) || (!name)) {
            return;
        }
        this.session.accessToken = accessToken;
        this.session.name = name;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/can-activate-todos.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanActivateTodosGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CanActivateTodosGuard = (function () {
    function CanActivateTodosGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    CanActivateTodosGuard.prototype.canActivate = function (route, state) {
        if (!this.auth.isSignedIn()) {
            console.error('Access denied - Redirect to sign-in page');
            this.router.navigate(['/sign-in']);
            return false;
        }
        return true;
    };
    return CanActivateTodosGuard;
}());
CanActivateTodosGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], CanActivateTodosGuard);

var _a, _b;
//# sourceMappingURL=can-activate-todos.guard.js.map

/***/ }),

/***/ "../../../../../src/app/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SessionService = (function () {
    function SessionService() {
    }
    SessionService.prototype.destroy = function () {
        this.accessToken = null;
        this.name = null;
    };
    return SessionService;
}());
SessionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SessionService);

//# sourceMappingURL=session.service.js.map

/***/ }),

/***/ "../../../../../src/app/sign-in/sign-in.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  box-sizing: border-box;\n}\n\n.sign-in-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 100vh;\n}\n\nh1{\n  font-size: 100px;\n  font-weight: 100;\n  text-align: center;\n  color: rgba(175, 47, 47, 0.15);\n  -webkit-text-rendering: optimizeLegibility;\n  -moz-text-rendering: optimizeLegibility;\n  text-rendering: optimizeLegibility;\n}\n\n.tip {\n  margin-bottom: 16px;\n  text-align: center;\n}\n\nform {\n  width: 350px;\n}\n\ninput {\n  display: block;\n  width: 100%;\n  padding: 16px;\n  border: none;\n  background: rgba(0, 0, 0, 0.003);\n  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);\n  margin: 0 0 16px 0;\n  font-size: 20px;\n  border-left: 2px solid transparent;\n}\n\ninput::-webkit-input-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: rgba(0, 0, 0, 0.5);\n}\n\ninput::-moz-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: rgba(0, 0, 0, 0.5);\n}\n\ninput::input-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: rgba(0, 0, 0, 0.5);\n}\n\ninput.ng-invalid.ng-touched {\n  border-left: 2px solid red;\n}\n\n.input-errors {\n  color: red;\n  margin: 0 0 16px 0;\n  padding: 0 0 0 16px;\n  font-size: 20px;\n}\n\nbutton {\n  display: block;\n  background-color: rgba(175, 47, 47, 0.15);\n  width: 100%;\n  padding: 16px;\n  font-size: 20px;\n  cursor: pointer;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\n  margin-bottom: 64px;\n}\n\n.sign-in-error {\n  color: red;\n  padding: 16px 0;\n  font-size: 20px;\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sign-in/sign-in.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sign-in-wrapper\">\n  <form [formGroup]=\"frm\">\n    <h1>Todos</h1>\n    <input type=\"text\" formControlName=\"username\" placeholder=\"Your username\">\n    <div\n      class=\"input-errors\"\n      *ngIf=\"(frm.get('username').invalid && frm.get('username').touched) || showInputErrors\"\n    >\n      <div *ngIf=\"frm.get('username').hasError('required')\">\n        Please enter your username\n      </div>\n    </div>\n    <input type=\"password\" formControlName=\"password\" placeholder=\"Your password\">\n    <div\n      class=\"input-errors\"\n      *ngIf=\"(frm.get('password').invalid && frm.get('password').touched) || showInputErrors\"\n    >\n      <div *ngIf=\"frm.get('password').hasError('required')\">\n        Please enter your password\n      </div>\n    </div>\n    <div class=\"sign-in-error\" *ngIf=\"hasFailed\">\n      Invalid username and password.\n    </div>\n    <button (click)=\"doSignIn()\" [disabled]=\"isBusy\">\n      <ng-template [ngIf]=\"!isBusy\">Sign in</ng-template>\n      <ng-template [ngIf]=\"isBusy\">Signing in, please wait...</ng-template>\n    </button>\n    <p class=\"tip\">You can sign in with username \"demo\" and password \"demo\".</p>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/sign-in/sign-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignInComponent = (function () {
    function SignInComponent(api, auth, fb, router) {
        this.api = api;
        this.auth = auth;
        this.fb = fb;
        this.router = router;
        this.isBusy = false;
        this.hasFailed = false;
        this.showInputErrors = false;
        this.frm = fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
        });
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.prototype.doSignIn = function () {
        var _this = this;
        // Make sure form values are valid
        if (this.frm.invalid) {
            this.showInputErrors = true;
            return;
        }
        // Reset status
        this.isBusy = true;
        this.hasFailed = false;
        // Grab values from form
        var username = this.frm.get('username').value;
        var password = this.frm.get('password').value;
        // Submit request to API
        this.api
            .signIn(username, password)
            .subscribe(function (response) {
            _this.auth.doSignIn(response.token, response.name);
            _this.router.navigate(['todos']);
        }, function (error) {
            _this.isBusy = false;
            _this.hasFailed = true;
        });
    };
    return SignInComponent;
}());
SignInComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sign-in',
        template: __webpack_require__("../../../../../src/app/sign-in/sign-in.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sign-in/sign-in.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], SignInComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=sign-in.component.js.map

/***/ }),

/***/ "../../../../../src/app/todo-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoDataService = (function () {
    function TodoDataService(api) {
        this.api = api;
    }
    // Simulate POST /todos
    TodoDataService.prototype.addTodo = function (todo) {
        return this.api.createTodo(todo);
    };
    // Simulate DELETE /todos/:id
    TodoDataService.prototype.deleteTodoById = function (todoId) {
        return this.api.deleteTodoById(todoId);
    };
    // Simulate PUT /todos/:id
    TodoDataService.prototype.updateTodo = function (todo) {
        return this.api.updateTodo(todo);
    };
    // Simulate GET /todos
    TodoDataService.prototype.getAllTodos = function () {
        return this.api.getAllTodos();
    };
    // Simulate GET /todos/:id
    TodoDataService.prototype.getTodoById = function (todoId) {
        return this.api.getTodoById(todoId);
    };
    // Toggle complete
    TodoDataService.prototype.toggleTodoComplete = function (todo) {
        todo.complete = !todo.complete;
        return this.api.updateTodo(todo);
    };
    return TodoDataService;
}());
TodoDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], TodoDataService);

var _a;
//# sourceMappingURL=todo-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/todo-list-footer/todo-list-footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo-list-footer/todo-list-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\" *ngIf=\"todos.length > 0\">\n  <span class=\"todo-count\"><strong>{{todos.length}}</strong> {{todos.length == 1 ? 'item' : 'items'}} left</span>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/todo-list-footer/todo-list-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoListFooterComponent = (function () {
    function TodoListFooterComponent() {
    }
    return TodoListFooterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], TodoListFooterComponent.prototype, "todos", void 0);
TodoListFooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-todo-list-footer',
        template: __webpack_require__("../../../../../src/app/todo-list-footer/todo-list-footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todo-list-footer/todo-list-footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TodoListFooterComponent);

//# sourceMappingURL=todo-list-footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/todo-list-header/todo-list-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo-list-header/todo-list-header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <h1>Todos</h1>\n  <input\n    class=\"new-todo\"\n    placeholder=\"What needs to be done?\"\n    autofocus\n    [(ngModel)]=\"newTodo.title\"\n    (keyup.enter)=\"addTodo()\"\n  >\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/todo-list-header/todo-list-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo__ = __webpack_require__("../../../../../src/app/todo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoListHeaderComponent = (function () {
    function TodoListHeaderComponent() {
        this.newTodo = new __WEBPACK_IMPORTED_MODULE_1__todo__["a" /* Todo */]();
        this.add = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    TodoListHeaderComponent.prototype.addTodo = function () {
        this.add.emit(this.newTodo);
        this.newTodo = new __WEBPACK_IMPORTED_MODULE_1__todo__["a" /* Todo */]();
    };
    return TodoListHeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], TodoListHeaderComponent.prototype, "add", void 0);
TodoListHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-todo-list-header',
        template: __webpack_require__("../../../../../src/app/todo-list-header/todo-list-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todo-list-header/todo-list-header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TodoListHeaderComponent);

var _a;
//# sourceMappingURL=todo-list-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/todo-list-item/todo-list-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo-list-item/todo-list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"view\">\n  <input class=\"toggle\" type=\"checkbox\" (click)=\"toggleTodoComplete(todo)\" [checked]=\"todo.complete\">\n  <label>{{todo.title}}</label>\n  <button class=\"destroy\" (click)=\"removeTodo(todo)\"></button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/todo-list-item/todo-list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo__ = __webpack_require__("../../../../../src/app/todo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoListItemComponent = (function () {
    function TodoListItemComponent() {
        this.remove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.toggleComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    TodoListItemComponent.prototype.toggleTodoComplete = function (todo) {
        this.toggleComplete.emit(todo);
    };
    TodoListItemComponent.prototype.removeTodo = function (todo) {
        this.remove.emit(todo);
    };
    return TodoListItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__todo__["a" /* Todo */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__todo__["a" /* Todo */]) === "function" && _a || Object)
], TodoListItemComponent.prototype, "todo", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], TodoListItemComponent.prototype, "remove", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _c || Object)
], TodoListItemComponent.prototype, "toggleComplete", void 0);
TodoListItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-todo-list-item',
        template: __webpack_require__("../../../../../src/app/todo-list-item/todo-list-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todo-list-item/todo-list-item.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TodoListItemComponent);

var _a, _b, _c;
//# sourceMappingURL=todo-list-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/todo-list/todo-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo-list/todo-list.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"main\" *ngIf=\"todos.length > 0\">\n  <ul class=\"todo-list\">\n    <li *ngFor=\"let todo of todos\" [class.completed]=\"todo.complete\">\n      <app-todo-list-item\n        [todo]=\"todo\"\n        (toggleComplete)=\"onToggleTodoComplete($event)\"\n        (remove)=\"onRemoveTodo($event)\"></app-todo-list-item>\n    </li>\n  </ul>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/todo-list/todo-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoListComponent = (function () {
    function TodoListComponent() {
        this.remove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.toggleComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    TodoListComponent.prototype.onToggleTodoComplete = function (todo) {
        this.toggleComplete.emit(todo);
    };
    TodoListComponent.prototype.onRemoveTodo = function (todo) {
        this.remove.emit(todo);
    };
    return TodoListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], TodoListComponent.prototype, "todos", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], TodoListComponent.prototype, "remove", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], TodoListComponent.prototype, "toggleComplete", void 0);
TodoListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-todo-list',
        template: __webpack_require__("../../../../../src/app/todo-list/todo-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todo-list/todo-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TodoListComponent);

var _a, _b;
//# sourceMappingURL=todo-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/todo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Todo; });
var Todo = (function () {
    function Todo(values) {
        if (values === void 0) { values = {}; }
        this.title = '';
        this.complete = false;
        Object.assign(this, values);
    }
    return Todo;
}());

//# sourceMappingURL=todo.js.map

/***/ }),

/***/ "../../../../../src/app/todos-page/todos-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todos-page/todos-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-todos\n  [todos]=\"todos$ | async\"\n></app-todos>\n"

/***/ }),

/***/ "../../../../../src/app/todos-page/todos-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodosPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodosPageComponent = (function () {
    function TodosPageComponent(route) {
        this.route = route;
    }
    TodosPageComponent.prototype.ngOnInit = function () {
        this.todos$ = this.route.data
            .map(function (data) { return data['todos']; });
    };
    return TodosPageComponent;
}());
TodosPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-todos-page',
        template: __webpack_require__("../../../../../src/app/todos-page/todos-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todos-page/todos-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], TodosPageComponent);

var _a;
//# sourceMappingURL=todos-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/todos.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodosResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_data_service__ = __webpack_require__("../../../../../src/app/todo-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodosResolver = (function () {
    function TodosResolver(todoDataService) {
        this.todoDataService = todoDataService;
    }
    TodosResolver.prototype.resolve = function (route, state) {
        return this.todoDataService.getAllTodos();
    };
    return TodosResolver;
}());
TodosResolver = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__todo_data_service__["a" /* TodoDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__todo_data_service__["a" /* TodoDataService */]) === "function" && _a || Object])
], TodosResolver);

var _a;
//# sourceMappingURL=todos.resolver.js.map

/***/ }),

/***/ "../../../../../src/app/todos/todos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\n  display: block;\n  background-color: rgba(175, 47, 47, 0.15);\n  width: 100%;\n  padding: 16px;\n  font-size: 20px;\n  cursor: pointer;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todos/todos.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"todoapp\">\n  <app-todo-list-header\n    (add)=\"onAddTodo($event)\"\n  ></app-todo-list-header>\n  <app-todo-list\n    [todos]=\"todos\"\n    (toggleComplete)=\"onToggleTodoComplete($event)\"\n    (remove)=\"onRemoveTodo($event)\"\n  ></app-todo-list>\n  <app-todo-list-footer\n    [todos]=\"todos\"\n  ></app-todo-list-footer>\n</section>\n<button (click)=\"doSignOut()\">Sign out</button>\n"

/***/ }),

/***/ "../../../../../src/app/todos/todos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_data_service__ = __webpack_require__("../../../../../src/app/todo-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodosComponent = (function () {
    function TodosComponent(todoDataService, auth, router) {
        this.todoDataService = todoDataService;
        this.auth = auth;
        this.router = router;
        this.todos = [];
    }
    TodosComponent.prototype.ngOnInit = function () {
    };
    TodosComponent.prototype.onAddTodo = function (todo) {
        var _this = this;
        if (!todo.title) {
            return;
        }
        this.todoDataService
            .addTodo(todo)
            .subscribe(function (newTodo) {
            _this.todos = _this.todos.concat(newTodo);
        });
    };
    TodosComponent.prototype.onToggleTodoComplete = function (todo) {
        this.todoDataService
            .toggleTodoComplete(todo)
            .subscribe(function (updatedTodo) {
            todo = updatedTodo;
        });
    };
    TodosComponent.prototype.onRemoveTodo = function (todo) {
        var _this = this;
        this.todoDataService
            .deleteTodoById(todo.id)
            .subscribe(function (_) {
            _this.todos = _this.todos.filter(function (t) { return t.id !== todo.id; });
        });
    };
    TodosComponent.prototype.doSignOut = function () {
        this.auth.doSignOut();
        this.router.navigate(['/sign-in']);
    };
    return TodosComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], TodosComponent.prototype, "todos", void 0);
TodosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-todos',
        template: __webpack_require__("../../../../../src/app/todos/todos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todos/todos.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__todo_data_service__["a" /* TodoDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__todo_data_service__["a" /* TodoDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], TodosComponent);

var _a, _b, _c;
//# sourceMappingURL=todos.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    apiUrl: 'http://localhost:3000'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map