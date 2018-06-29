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
		var e = new Error('Cannot find module "' + req + '".');
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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_new_new_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/new/new.component */ "./src/app/home/new/new.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    },
    { path: 'new', component: _home_new_new_component__WEBPACK_IMPORTED_MODULE_3__["NewComponent"] },
    { path: 'products', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] } // not products bc it hides the cart
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

module.exports = "body{\n  background-color: rgba(42, 90, 221, 0.454);\n}\n.headerDiv{\n  display: inline;\n\n}\n/* ========== nav bar =========== */\n.image{\n  background-image: url(data:image/jpeg;base64,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);\n  width: 29%;\n  height: 100%;\n  display: inline-block;\n}\n.image2{\n  background-image: url(space.jpg);\n  width: 71%;\n  height: 100%;\n  display: inline-block;\n}\nh1 {\nwidth: 400px;\nheight: 100px;\ncolor: whitesmoke;\ndisplay: inline-block;\n}\n.headerDiv ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333;\n}\n.headerDiv li {\n  float: left;\n}\n.headerDiv li a {\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n/* Change the link color to #111 (black) on hover */\n.headerDiv li a:hover {\n  background-color: rgb(15, 40, 151);\n}\n.dojos {\n  width: 100%;\n  height: 800px;\n  margin: auto;\n  margin-top: -10px;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class = \"headerDiv\" style=\"text-align:center\">\n  <div class=\"image\">\n    <h1></h1>\n  </div>\n  <div class=\"image2\">\n      <h1></h1>\n  </div>\n\n\n\n\n  <ul>\n    <li><a [routerLink]=\"['/products']\">Home</a></li>\n    <li><a [routerLink]=\"['/new']\">Add Product</a></li>\n    <li><a [routerLink]=\"['/sanjose']\">Shopping Cart</a></li>\n    <li><a [routerLink]=\"['/sanjose']\">Sign In</a></li>\n  </ul>\n </div>\n\n<div class=\"dojos\">\n  <router-outlet></router-outlet>\n</div>\n\n\n\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.service */ "./src/app/product.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/cart/cart.component */ "./src/app/home/cart/cart.component.ts");
/* harmony import */ var _home_products_promotion_promotion_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/products/promotion/promotion.component */ "./src/app/home/products/promotion/promotion.component.ts");
/* harmony import */ var _home_products_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/products/inventory/inventory.component */ "./src/app/home/products/inventory/inventory.component.ts");
/* harmony import */ var _home_products_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/products/products.component */ "./src/app/home/products/products.component.ts");
/* harmony import */ var _home_new_new_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/new/new.component */ "./src/app/home/new/new.component.ts");
/* harmony import */ var _home_cart_chat_chat_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/cart/chat/chat.component */ "./src/app/home/cart/chat/chat.component.ts");
/* harmony import */ var _home_cart_show_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/cart/show.directive */ "./src/app/home/cart/show.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _home_cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"],
                _home_products_promotion_promotion_component__WEBPACK_IMPORTED_MODULE_9__["PromotionComponent"],
                _home_products_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_10__["InventoryComponent"],
                _home_products_products_component__WEBPACK_IMPORTED_MODULE_11__["ProductsComponent"],
                _home_new_new_component__WEBPACK_IMPORTED_MODULE_12__["NewComponent"],
                _home_cart_chat_chat_component__WEBPACK_IMPORTED_MODULE_13__["ChatComponent"],
                _home_cart_show_directive__WEBPACK_IMPORTED_MODULE_14__["ShowDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [_product_service__WEBPACK_IMPORTED_MODULE_0__["ProductService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/cart/cart.component.css":
/*!**********************************************!*\
  !*** ./src/app/home/cart/cart.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  width: 99%;\n  height: 100%;\n  background-color: rgba(185, 210, 223, 0.214);\n  vertical-align: top;\n  border-radius: 5px;\n}\n\n.helperPanda {\n  background-image: url(helpful_panda.png);\n  height: 30%;\n  width: 100%;\n  margin-top: 235%;\n  align-content: center;\n}\n\nh4 {\ntext-align: center;\n}\n\nh3 {\n  text-align: center;\n}\n\nul {\n  border-bottom: 1px solid black;\n}\n\n.animate-show-hide.ng-hide {\n  opacity: 0;\n}\n\n.animate-show-hide.ng-hide-add,\n.animate-show-hide.ng-hide-remove {\n  transition: all linear 0.5s;\n}\n\n.check-element {\n  border: 1px solid black;\n  opacity: 1;\n  padding: 10px;\n}\n\n"

/***/ }),

/***/ "./src/app/home/cart/cart.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/cart/cart.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <h3>Shopping Cart</h3>\n\n  <div class=\"product\" *ngFor=\"let product of cart\">\n\n    <!-- <div class=\"img_div\">\n      <img src=\"{{ product.imgurl }}\" alt=\"\">\n    </div> -->\n\n    <div class='product_name_desc'>\n      <span class=\"product_title\"> {{ product.name }}</span><br><hr>\n    </div>\n\n    <div class=\"price\">\n      <span class='font_price'>{{ product.price }}</span><br>\n    </div>\n\n    <div class=\"price\">\n      <span class='font_price'>{{ product.qty}}</span><br>\n    </div>\n\n\n  </div>\n  <h5>Total: $299.99</h5>\n  <button>Buy Now</button>\n\n  <div class=\"helperPanda\" (click)=\"showDiv()\" *ngIf=\"panda\">\n    <h4>Need Help?</h4>\n    </div>\n    <app-chat *ngIf=\"show\" class=\"question_form\"></app-chat>\n  </div>\n"

/***/ }),

/***/ "./src/app/home/cart/cart.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/cart/cart.component.ts ***!
  \*********************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartComponent = /** @class */ (function () {
    function CartComponent(_productService) {
        var _this = this;
        this._productService = _productService;
        this._productService.cart.subscribe(function (cart) {
            _this.cart = cart;
        }, function (err) { }, function () { });
    }
    CartComponent.prototype.ngOnInit = function () {
        this.show = false;
        this.panda = true;
    };
    CartComponent.prototype.showDiv = function () {
        this.show = true;
        this.panda = false;
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/home/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/home/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_0__["ProductService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/home/cart/chat/chat.component.css":
/*!***************************************************!*\
  !*** ./src/app/home/cart/chat/chat.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper{\n    height: auto;\n    width: 100%;\n    background-color: white;\n    margin-top: 235%;\n    height: 30%;\n    width: 100%;\n  }\n  \n  .formwrapper form input{\n    width: 300px;\n    height: 30px;\n    margin: 5px;\n    background-color: lightcyan;\n    border-radius: 5px;\n    display: inline;\n  }\n  \n  form input{\n    display: inline;\n    align-content: center;\n  }\n  \n  form textarea{\n      margin-top: 10px;\n      width: 80%;\n      display: block;\n      height: 30%;\n      align-content: center;\n  }"

/***/ }),

/***/ "./src/app/home/cart/chat/chat.component.html":
/*!****************************************************!*\
  !*** ./src/app/home/cart/chat/chat.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <h1>Contact Us</h1>\n    <form (submit)=\"onSubmit()\">\n        <input type=\"text\" name=\"product.name\" placeholder=\"Name\" required minlength=\"3\">\n        <textarea name=\"question2\" placeholder=\"Question\"></textarea>\n        <input type=\"submit\" value=\"Contact Us\" />\n      </form>\n</div>"

/***/ }),

/***/ "./src/app/home/cart/chat/chat.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home/cart/chat/chat.component.ts ***!
  \**************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
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

var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/home/cart/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/home/cart/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/home/cart/show.directive.ts":
/*!*********************************************!*\
  !*** ./src/app/home/cart/show.directive.ts ***!
  \*********************************************/
/*! exports provided: ShowDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowDirective", function() { return ShowDirective; });
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

var ShowDirective = /** @class */ (function () {
    function ShowDirective(el) {
        this.el = el;
    }
    ShowDirective.prototype.onMouseEnter = function () {
        this.show('yellow');
    };
    ShowDirective.prototype.onMouseLeave = function () {
        this.show(null);
    };
    ShowDirective.prototype.show = function (color) {
        this.el.nativeElement.style.display = color;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ShowDirective.prototype, "onMouseEnter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ShowDirective.prototype, "onMouseLeave", null);
    ShowDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appShow]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ShowDirective);
    return ShowDirective;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper{\n  height: 100%;\n  width: 100%;\n  padding: 5px;\n}\n\n.products{\n  width: 80%;\n  height: 100%;\n  -ms-grid-row-align: left;\n      align-self: left;\n  display: inline-block;\n}\n\n.cart{\n  width: 20%;\n  height: 100%;\n  -ms-grid-row-align: right;\n      align-self: right;\n  display: inline-block;\n  vertical-align: top;\n  /* margin-left: 10px; */\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <app-products class=\"products\"></app-products>\n  <app-cart class=\"cart\"></app-cart>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/new/new.component.css":
/*!********************************************!*\
  !*** ./src/app/home/new/new.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/new/new.component.html":
/*!*********************************************!*\
  !*** ./src/app/home/new/new.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>add new product</h2>\n<hr>\n<span class=\"red\" *ngIf=\"msg\">{{ msg.message }}</span><br>\n\n  <form (submit)=\"create(myform)\" #myform=\"ngForm\">\n    Name: <br>\n    <input type=\"text\" ngModel name=\"name\"> <br>\n    IMG_url: <br>\n    <input type=\"text\" ngModel name=\"imgurl\"> <br>\n    Description: <br>\n    <textarea ngModel name=\"description\"></textarea><br>\n    Qty:<br>\n    <input type=\"number\" ngModel name=\"qty\"> <br>\n    Price: <br>\n    <input type=\"number\" ngModel name=\"price\"> <br><br>\n    <input type=\"submit\" value=\"CREATE\"> | <a [routerLink]=\"['/']\">cancel</a>\n  </form>\n  \n  "

/***/ }),

/***/ "./src/app/home/new/new.component.ts":
/*!*******************************************!*\
  !*** ./src/app/home/new/new.component.ts ***!
  \*******************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



console.log('NEW.COMPONENT.TS>');
var NewComponent = /** @class */ (function () {
    function NewComponent(_productService, _router) {
        this._productService = _productService;
        this._router = _router;
    }
    NewComponent.prototype.ngOnInit = function () {
        this.newProduct = null;
        this.msg = '';
    };
    NewComponent.prototype.goHome = function () {
        console.log('> new.component.ts > goHome() ');
        this._router.navigate(['/']);
    };
    NewComponent.prototype.create = function (myform) {
        var _this = this;
        console.log('> new.component.ts > create()');
        this.newProduct = myform.value;
        this._productService.create(this.newProduct)
            .subscribe(function (response) {
            console.log('> new.component.ts > create() > response =>', response);
            if (response['error']) {
                console.log('response.error =>', response['error']);
                _this.msg = response['error'];
            }
            else {
                _this.msg = '';
                _this.goHome();
            }
        });
    };
    NewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new',
            template: __webpack_require__(/*! ./new.component.html */ "./src/app/home/new/new.component.html"),
            styles: [__webpack_require__(/*! ./new.component.css */ "./src/app/home/new/new.component.css")]
        }),
        __metadata("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_0__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "./src/app/home/products/inventory/inventory.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/home/products/inventory/inventory.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n}\n.wrapper{\n  width: 99%;\n  height: 90%;\n  background-color: rgb(141, 142, 139);\n}\n.search_wrapper{\n  width: 100%;\n  height: 10%;\n  background-color: rgb(32, 63, 63);\n}\n.wrapper input[type=text] {\n  float: left;\n  padding: 6px;\n  width: 80%;\n  height: 15%;\n  border-radius: 5px;\n  margin-top: 15px;\n  margin-right: 16px;\n  margin-left: 10px;\n  font-size: 17px;\n}\n/* ==== products div ====== */\ndiv.product{\n  outline: 2px dotted rebeccapurple;\n  width: 96%;\n  height: 146px;\n  background-color: lightcyan;\n  margin: 20px auto;\n  padding: 10px;\n}\n/* ===== product img div ====== */\ndiv.img_div{\n    display: inline-block;\n    vertical-align: top;\n    background-color: blueviolet;\n    margin-right: 20px;\n  }\nimg {\n      -o-object-fit: cover;\n         object-fit: cover;\n      width: 150px;\n      height: 150px;\n    }\n/* ===== product name descr div ====== */\ndiv.product_name_desc{\n    display: inline-block;\n    vertical-align: top;\n    height: 99%;\n    width: 50%;\n    background-color: darkseagreen;\n  }\n/* ====== product price div ===== */\ndiv.price{\n    display: inline-block;\n    vertical-align: top;\n    margin-left: 20px;\n    width: 20%;\n    background-color: aquamarine;\n  }\nspan.font_price{\n      font-size: 14pt;\n      font-weight: 800;\n      text-align: center;\n    }\n/* img {    \n  min-width: 100%;\n  min-height: 100%;\n  width: auto;\n  height: auto;\n  } */"

/***/ }),

/***/ "./src/app/home/products/inventory/inventory.component.html":
/*!******************************************************************!*\
  !*** ./src/app/home/products/inventory/inventory.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"search_wrapper\">\n    <input type=\"text\" placeholder=\"Search Component\">\n  </div>\n\n\n  <!-- products -->\n<h2>Featured Products:</h2>\n  <div class=\"product\">\n\n    <div class=\"img_div\">\n      <img src=\"data:image/jpeg;base64,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\">\n    </div>\n\n    <div class='product_name_desc'>\n      <span class=\"product_title\"> Sippy Cup</span>\n      <br>\n      <hr> Sriracha Sippy Cup \n    </div>\n\n    <div class=\"price\">\n      <span class='font_price'> $12.99 </span>\n      <br>\n      <button class='add_to_cart_btn' (click)=\"addToCart(product)\">ADD TO CART</button>\n    </div>\n</div>\n\n<div class=\"product\">\n\n    <div class=\"img_div\">\n      <img src=\"data:image/jpeg;base64,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\">\n    </div>\n\n    <div class='product_name_desc'>\n      <span class=\"product_title\"> Sippy Cup</span>\n      <br>\n      <hr> Sriracha Sippy Cup \n    </div>\n\n    <div class=\"price\">\n      <span class='font_price'> $12.99 </span>\n      <br>\n      <button class='add_to_cart_btn' (click)=\"addToCart(product)\">ADD TO CART</button>\n    </div>\n</div>\n\n\n\n\n    <!-- <div class=\"product\" *ngFor=\"let product of products_arr\">\n\n    <div class=\"img_div\">\n      <img src=\"{{ product.imgurl }}\" alt=\"\">\n    </div>\n\n    <div class='product_name_desc'>\n      <span class=\"product_title\"> {{ product.name }}</span><br><hr>\n      {{ product.description }}\n    </div>\n\n    <div class=\"price\">\n      <span class='font_price'>{{ product.price }}</span><br>\n      <button class='add_to_cart_btn' (click)=\"addToCart(product)\">ADD TO CART</button>\n    </div> -->\n\n  <!-- </div> -->\n\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/home/products/inventory/inventory.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/home/products/inventory/inventory.component.ts ***!
  \****************************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../product.service */ "./src/app/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InventoryComponent = /** @class */ (function () {
    function InventoryComponent(_productService) {
        var _this = this;
        this._productService = _productService;
        this.productToAdd = { "product_id": 0, "qty": 0 };
        this.products_arr = [];
        this._productService.cart.subscribe(function (cart) {
            _this.cart = cart;
        });
    }
    InventoryComponent.prototype.ngOnInit = function () {
        console.log('>products.component.ts > ngOnInit >');
        this.getAll();
    };
    InventoryComponent.prototype.getAll = function () {
        var _this = this;
        console.log('>pets.component.ts > getAll() >');
        this._productService.readAll().subscribe(function (server_response) {
            _this.products_arr = server_response['data'];
        });
    };
    InventoryComponent.prototype.addToCart = function (product) {
        console.log("in add to cart");
        for (var idx = 0; idx < this.cart.length; idx++) {
            if (this.cart[idx]._id === product._id) {
                this.cart[idx].qty++;
                this.cart[idx].price += product.price;
                return;
            }
        }
        // this.productToAdd["product_id"] = product_id;
        // this.productToAdd["qty"] = 1;
        // this.productToAdd["name"] = product.name
        console.log("product in add", this.productToAdd);
        this.cart.push(product);
        this._productService.cart.next(this.cart);
    };
    InventoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inventory',
            template: __webpack_require__(/*! ./inventory.component.html */ "./src/app/home/products/inventory/inventory.component.html"),
            styles: [__webpack_require__(/*! ./inventory.component.css */ "./src/app/home/products/inventory/inventory.component.css")]
        }),
        __metadata("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], InventoryComponent);
    return InventoryComponent;
}());



/***/ }),

/***/ "./src/app/home/products/products.component.css":
/*!******************************************************!*\
  !*** ./src/app/home/products/products.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper{\n  width: 95%;\n  height: 100%;\n}\n\n.promotion{\n  width: 99%;\n  height: 25%;\n}\n\n.search{\n  width: 100%;\n  height: 10%;\n}\n\n.inventory {\n  width: 99%;\n  height: 64%;\n}\n"

/***/ }),

/***/ "./src/app/home/products/products.component.html":
/*!*******************************************************!*\
  !*** ./src/app/home/products/products.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <app-promotion class=\"promotion\"></app-promotion>\n    <app-inventory class=\"inventory\"></app-inventory>\n</div>\n"

/***/ }),

/***/ "./src/app/home/products/products.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/products/products.component.ts ***!
  \*****************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
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

var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/home/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/home/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/home/products/promotion/promotion.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/home/products/promotion/promotion.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper{\n  width: 99%;\n  height: 37%;\n  margin-top: 20px;\n}\n\n.wrapper_video{\n  width: 99%;\n  height: 100%;\n  margin-top: 20px;\n}\n\n#video-background{\n  background: #000;\n  position: fixed;\n  top: 0; right: 0; bottom: 0; left: 0;\n  z-index: -99;\n}\n\n.wrapper1{\n  width: 99%;\n  height: 100%;\n  margin-top: 20px;\n  background-image: url(background.jpg);\n  background-repeat: no-repeat;\n}\n\n.wrapper2{\n  width: 99%;\n  height: 100%;\n  margin-top: 20px;\n  background-image: url(background2.jpg);\n  background-repeat: no-repeat;\n\n}\n\n.button_left {\n  background-color: transparent;\n  background-repeat:no-repeat;\n  height: 50px;\n  width: 50px;\n  font-size: 20px;\n  color: darkslategray;\n  border: .5px solid rgb(35, 58, 58);\n  cursor:pointer;\n  overflow: hidden;\n  outline:none;\n  display: inline-block;\n  margin-top: 15%;\n  border-radius: 10px;\n}\n\n.button_right {\n  background-color: Transparent;\n  background-repeat:no-repeat;\n  height: 50px;\n  width: 50px;\n  font-size: 20px;\n  color: darkslategray;\n  border: .5px solid darkslategray;\n  cursor:pointer;\n  overflow: hidden;\n  outline:none;\n  display: inline-block;\n  margin-top: 15%;\n  margin-left: 86%;\n  border-radius: 10px;\n}"

/***/ }),

/***/ "./src/app/home/products/promotion/promotion.component.html":
/*!******************************************************************!*\
  !*** ./src/app/home/products/promotion/promotion.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n  <div *ngIf=\"promo1\" class=\"wrapper1\">\n    <button (click)=\"leftDiv()\" class=\"button_left\"> &#x2190; </button>\n    <button (click)=\"rightDiv()\" class=\"button_right\"> &#x2192; </button>\n  </div>\n\n  <div *ngIf=\"promo2\" class=\"wrapper2\">\n    <button (click)=\"leftDiv()\" class=\"button_left\"> &#x2190; </button>\n    <button (click)=\"rightDiv()\" class=\"button_right\"> &#x2192; </button>\n\n  </div>"

/***/ }),

/***/ "./src/app/home/products/promotion/promotion.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/home/products/promotion/promotion.component.ts ***!
  \****************************************************************/
/*! exports provided: PromotionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionComponent", function() { return PromotionComponent; });
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

var PromotionComponent = /** @class */ (function () {
    function PromotionComponent() {
    }
    PromotionComponent.prototype.ngOnInit = function () {
        this.promo1 = true;
        this.promo2 = false;
    };
    PromotionComponent.prototype.rightDiv = function () {
        this.promo1 = false;
        this.promo2 = true;
    };
    PromotionComponent.prototype.leftDiv = function () {
        this.promo1 = true;
        this.promo2 = false;
    };
    PromotionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-promotion',
            template: __webpack_require__(/*! ./promotion.component.html */ "./src/app/home/products/promotion/promotion.component.html"),
            styles: [__webpack_require__(/*! ./promotion.component.css */ "./src/app/home/products/promotion/promotion.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PromotionComponent);
    return PromotionComponent;
}());



/***/ }),

/***/ "./src/app/product.service.ts":
/*!************************************!*\
  !*** ./src/app/product.service.ts ***!
  \************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



console.log('PRODUCT.SERVICE.TS>');
var ProductService = /** @class */ (function () {
    function ProductService(_http) {
        this._http = _http;
        this.cart = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    ProductService.prototype.create = function (newProduct) {
        return this._http.post('/create', newProduct);
    };
    ProductService.prototype.readAll = function () {
        return this._http.get('/readall');
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductService);
    return ProductService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chris/Documents/CodingDojo/Mean/Angular/space_pandas_2-master/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map