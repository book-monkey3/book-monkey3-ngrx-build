(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["books-books-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/books/book-details/book-details.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/books/book-details/book-details.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"book$ | async as book; else loading\">\n  <h1>{{ book.title }}</h1>\n  <h3 *ngIf=\"book.subtitle\">{{ book.subtitle }}</h3>\n  <div class=\"ui divider\"></div>\n  <div class=\"ui grid\">\n    <div class=\"four wide column\">\n      <h4 i18n=\"@@BookDetailsComponent:book authors\">\n        Autoren\n      </h4>\n      <ng-container *ngFor=\"let author of book.authors\">\n        {{ author }}<br>\n      </ng-container>\n    </div>\n    <div class=\"four wide column\">\n      <h4 i18n=\"@@BookDetailsComponent:book isbn\">\n        ISBN\n      </h4>\n      {{ book.isbn | isbn }}\n    </div>\n    <div class=\"four wide column\">\n      <h4 i18n=\"@@BookDetailsComponent:book published date\">\n        Erschienen\n      </h4>\n      {{ book.published | date:'longDate' }}\n    </div>\n    <div class=\"four wide column\">\n      <h4 i18n=\"@@BookDetailsComponent:book rating\">\n        Rating\n      </h4>\n      <ng-container\n        *ngFor=\"let r of getRating(book.rating);\n                index as i\">\n        <i class=\"yellow star icon\"\n          *bmDelay=\"500 + i * 200\"></i>\n      </ng-container>\n    </div>\n  </div>\n  <h4 i18n=\"@@BookDetailsComponent:book description\">\n    Beschreibung\n  </h4>\n  <p>{{ book.description }}</p>\n  <div class=\"ui small images\">\n    <img *ngFor=\"let thumbnail of book.thumbnails\"\n      [src]=\"thumbnail.url\">\n  </div>\n  <button class=\"ui tiny red labeled icon button\"\n          (click)=\"removeBook()\">\n    <i class=\"remove icon\"></i>\n    <ng-container i18n=\"@@BookDetailsComponent:book delete\">\n      Buch löschen\n    </ng-container>\n  </button>\n  <a class=\"ui tiny yellow labeled icon button\"\n    [routerLink]=\"['../../admin/edit', book.isbn]\">\n    <i class=\"write icon\"></i>\n    <ng-container i18n=\"@@BookDetailsComponent:book edit\">\n      Buch bearbeiten\n    </ng-container>\n  </a>\n</div>\n\n<ng-template #loading>\n  <div class=\"ui active centered inline loader\"></div>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/books/book-list-item/book-list-item.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/books/book-list-item/book-list-item.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"ui tiny image\"\n     *ngIf=\"book.thumbnails && book.thumbnails[0] && book.thumbnails[0].url\"\n     [src]=\"book.thumbnails[0].url\"\n     bmZoom>\n<div class=\"content\">\n  <div class=\"header\">{{ book.title }}</div>\n  <div *ngIf=\"book.subtitle\" class=\"description\">{{ book.subtitle }}</div>\n  <div class=\"metadata\">\n    <span *ngFor=\"let author of book.authors; last as l\">\n      {{ author }}<span *ngIf=\"!l\">, </span>\n    </span>\n    <br>\n    ISBN {{ book.isbn | isbn }}\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/books/book-list/book-list.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/books/book-list/book-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui middle aligned selection divided list\">\n\n  <ng-container *ngIf=\"books$ | async as books\">\n    <bm-book-list-item class=\"item\"\n      *ngFor=\"let b of books\"\n      [book]=\"b\"\n      [routerLink]=\"b.isbn\"></bm-book-list-item>\n\n    <p *ngIf=\"!books.length\"\n      i18n=\"@@BookListComponent:no book\">\n      Es wurden noch keine Bücher eingetragen.\n    </p>\n  </ng-container>\n\n  <ng-container *ngIf=\"loading$ | async\">\n    <div class=\"ui active dimmer\">\n      <div class=\"ui large text loader\"\n        i18n=\"@@BookListComponent:loading data\">\n        Daten werden geladen...\n      </div>\n    </div>\n  </ng-container>\n\n</div>\n"

/***/ }),

/***/ "./src/app/books/book-details/book-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/books/book-details/book-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tzL2Jvb2stZGV0YWlscy9ib29rLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/books/book-details/book-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/books/book-details/book-details.component.ts ***!
  \**************************************************************/
/*! exports provided: BookDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailsComponent", function() { return BookDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_book_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/book.actions */ "./src/app/books/actions/book.actions.ts");
/* harmony import */ var _selectors_book_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../selectors/book.selectors */ "./src/app/books/selectors/book.selectors.ts");
/* harmony import */ var _shared_book_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/book-store.service */ "./src/app/shared/book-store.service.ts");







var BookDetailsComponent = /** @class */ (function () {
    function BookDetailsComponent(bs, router, route, store) {
        this.bs = bs;
        this.router = router;
        this.route = route;
        this.store = store;
    }
    BookDetailsComponent.prototype.ngOnInit = function () {
        var isbn = this.getIsbn();
        this.book$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_selectors_book_selectors__WEBPACK_IMPORTED_MODULE_5__["getBookByIsbn"], { isbn: isbn }));
        this.store.dispatch(new _actions_book_actions__WEBPACK_IMPORTED_MODULE_4__["LoadBook"]({ isbn: isbn }));
    };
    BookDetailsComponent.prototype.getRating = function (num) {
        return new Array(num);
    };
    BookDetailsComponent.prototype.removeBook = function () {
        if (confirm('Buch wirklich löschen?')) {
            var isbn = this.getIsbn();
            this.store.dispatch(new _actions_book_actions__WEBPACK_IMPORTED_MODULE_4__["DeleteBook"]({ isbn: isbn }));
        }
    };
    BookDetailsComponent.prototype.getIsbn = function () {
        return this.route.snapshot.paramMap.get('isbn');
    };
    BookDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bm-book-details',
            template: __webpack_require__(/*! raw-loader!./book-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/books/book-details/book-details.component.html"),
            styles: [__webpack_require__(/*! ./book-details.component.css */ "./src/app/books/book-details/book-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_book_store_service__WEBPACK_IMPORTED_MODULE_6__["BookStoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], BookDetailsComponent);
    return BookDetailsComponent;
}());



/***/ }),

/***/ "./src/app/books/book-list-item/book-list-item.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/books/book-list-item/book-list-item.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tzL2Jvb2stbGlzdC1pdGVtL2Jvb2stbGlzdC1pdGVtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/books/book-list-item/book-list-item.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/books/book-list-item/book-list-item.component.ts ***!
  \******************************************************************/
/*! exports provided: BookListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListItemComponent", function() { return BookListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BookListItemComponent = /** @class */ (function () {
    function BookListItemComponent() {
    }
    BookListItemComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BookListItemComponent.prototype, "book", void 0);
    BookListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bm-book-list-item',
            template: __webpack_require__(/*! raw-loader!./book-list-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/books/book-list-item/book-list-item.component.html"),
            styles: [__webpack_require__(/*! ./book-list-item.component.css */ "./src/app/books/book-list-item/book-list-item.component.css")]
        })
    ], BookListItemComponent);
    return BookListItemComponent;
}());



/***/ }),

/***/ "./src/app/books/book-list/book-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/books/book-list/book-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tzL2Jvb2stbGlzdC9ib29rLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/books/book-list/book-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/books/book-list/book-list.component.ts ***!
  \********************************************************/
/*! exports provided: BookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListComponent", function() { return BookListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_book_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/book.actions */ "./src/app/books/actions/book.actions.ts");
/* harmony import */ var _selectors_book_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../selectors/book.selectors */ "./src/app/books/selectors/book.selectors.ts");





var BookListComponent = /** @class */ (function () {
    function BookListComponent(store) {
        this.store = store;
    }
    BookListComponent.prototype.ngOnInit = function () {
        this.books$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_selectors_book_selectors__WEBPACK_IMPORTED_MODULE_4__["getAllBooks"]));
        this.loading$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_selectors_book_selectors__WEBPACK_IMPORTED_MODULE_4__["getBooksLoading"]));
        this.store.dispatch(new _actions_book_actions__WEBPACK_IMPORTED_MODULE_3__["LoadBooks"]());
    };
    BookListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bm-book-list',
            template: __webpack_require__(/*! raw-loader!./book-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/books/book-list/book-list.component.html"),
            styles: [__webpack_require__(/*! ./book-list.component.css */ "./src/app/books/book-list/book-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], BookListComponent);
    return BookListComponent;
}());



/***/ }),

/***/ "./src/app/books/books-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/books/books-routing.module.ts ***!
  \***********************************************/
/*! exports provided: BooksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksRoutingModule", function() { return BooksRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./book-list/book-list.component */ "./src/app/books/book-list/book-list.component.ts");
/* harmony import */ var _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./book-details/book-details.component */ "./src/app/books/book-details/book-details.component.ts");





var routes = [
    {
        path: '',
        component: _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_3__["BookListComponent"]
    },
    {
        path: ':isbn',
        component: _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_4__["BookDetailsComponent"]
    }
];
var BooksRoutingModule = /** @class */ (function () {
    function BooksRoutingModule() {
    }
    BooksRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: []
        })
    ], BooksRoutingModule);
    return BooksRoutingModule;
}());



/***/ }),

/***/ "./src/app/books/books.module.ts":
/*!***************************************!*\
  !*** ./src/app/books/books.module.ts ***!
  \***************************************/
/*! exports provided: BooksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksModule", function() { return BooksModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_delay_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/delay.directive */ "./src/app/books/shared/delay.directive.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _books_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./books-routing.module */ "./src/app/books/books-routing.module.ts");
/* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./book-list/book-list.component */ "./src/app/books/book-list/book-list.component.ts");
/* harmony import */ var _book_list_item_book_list_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book-list-item/book-list-item.component */ "./src/app/books/book-list-item/book-list-item.component.ts");
/* harmony import */ var _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./book-details/book-details.component */ "./src/app/books/book-details/book-details.component.ts");
/* harmony import */ var _shared_isbn_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/isbn.pipe */ "./src/app/books/shared/isbn.pipe.ts");
/* harmony import */ var _shared_zoom_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/zoom.directive */ "./src/app/books/shared/zoom.directive.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers_book_reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reducers/book.reducer */ "./src/app/books/reducers/book.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _effects_book_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./effects/book.effects */ "./src/app/books/effects/book.effects.ts");














var BooksModule = /** @class */ (function () {
    function BooksModule() {
    }
    BooksModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _books_routing_module__WEBPACK_IMPORTED_MODULE_4__["BooksRoutingModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forFeature('book', _reducers_book_reducer__WEBPACK_IMPORTED_MODULE_11__["reducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__["EffectsModule"].forFeature([_effects_book_effects__WEBPACK_IMPORTED_MODULE_13__["BookEffects"]])
            ],
            declarations: [
                _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_5__["BookListComponent"],
                _book_list_item_book_list_item_component__WEBPACK_IMPORTED_MODULE_6__["BookListItemComponent"],
                _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_7__["BookDetailsComponent"],
                _shared_isbn_pipe__WEBPACK_IMPORTED_MODULE_8__["IsbnPipe"],
                _shared_zoom_directive__WEBPACK_IMPORTED_MODULE_9__["ZoomDirective"],
                _shared_delay_directive__WEBPACK_IMPORTED_MODULE_1__["DelayDirective"]
            ]
        })
    ], BooksModule);
    return BooksModule;
}());



/***/ }),

/***/ "./src/app/books/effects/book.effects.ts":
/*!***********************************************!*\
  !*** ./src/app/books/effects/book.effects.ts ***!
  \***********************************************/
/*! exports provided: BookEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookEffects", function() { return BookEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _actions_book_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/book.actions */ "./src/app/books/actions/book.actions.ts");
/* harmony import */ var src_app_shared_book_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/book-store.service */ "./src/app/shared/book-store.service.ts");








var BookEffects = /** @class */ (function () {
    function BookEffects(actions$, bs, router) {
        var _this = this;
        this.actions$ = actions$;
        this.bs = bs;
        this.router = router;
        this.loadBooks$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_book_actions__WEBPACK_IMPORTED_MODULE_6__["BookActionTypes"].LoadBooks), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            return _this.bs.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (books) { return new _actions_book_actions__WEBPACK_IMPORTED_MODULE_6__["LoadBooksSuccess"]({ books: books }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions_book_actions__WEBPACK_IMPORTED_MODULE_6__["LoadBooksFailure"]({ error: error })); }));
        }));
        this.loadBook$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_book_actions__WEBPACK_IMPORTED_MODULE_6__["BookActionTypes"].LoadBook), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload.isbn; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (isbn) { return _this.bs.getSingle(isbn).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (book) { return new _actions_book_actions__WEBPACK_IMPORTED_MODULE_6__["LoadBookSuccess"]({ book: book }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions_book_actions__WEBPACK_IMPORTED_MODULE_6__["LoadBookFailure"]({ error: error })); })); }));
        this.deleteBook$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_book_actions__WEBPACK_IMPORTED_MODULE_6__["BookActionTypes"].DeleteBook), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload.isbn; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (isbn) { return _this.bs.remove(isbn).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () { return new _actions_book_actions__WEBPACK_IMPORTED_MODULE_6__["DeleteBookSuccess"]({ isbn: isbn }); })); }));
        this.deleteBookSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_book_actions__WEBPACK_IMPORTED_MODULE_6__["BookActionTypes"].DeleteBookSuccess), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.router.navigate(['/books']); }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BookEffects.prototype, "loadBooks$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BookEffects.prototype, "loadBook$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BookEffects.prototype, "deleteBook$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BookEffects.prototype, "deleteBookSuccess$", void 0);
    BookEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"],
            src_app_shared_book_store_service__WEBPACK_IMPORTED_MODULE_7__["BookStoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BookEffects);
    return BookEffects;
}());



/***/ }),

/***/ "./src/app/books/reducers/book.reducer.ts":
/*!************************************************!*\
  !*** ./src/app/books/reducers/book.reducer.ts ***!
  \************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_book_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/book.actions */ "./src/app/books/actions/book.actions.ts");
/* harmony import */ var _admin_actions_admin_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../admin/actions/admin.actions */ "./src/app/admin/actions/admin.actions.ts");



var initialState = {
    books: [],
    loading: false
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_book_actions__WEBPACK_IMPORTED_MODULE_1__["BookActionTypes"].LoadBooks: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: true });
        }
        case _actions_book_actions__WEBPACK_IMPORTED_MODULE_1__["BookActionTypes"].LoadBooksSuccess: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { books: action.payload.books, loading: false });
        }
        case _actions_book_actions__WEBPACK_IMPORTED_MODULE_1__["BookActionTypes"].LoadBookSuccess: {
            var book_1 = action.payload.book;
            var books = state.books.filter(function (b) { return b.isbn !== book_1.isbn; }).concat([
                book_1
            ]);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { books: books });
        }
        case _actions_book_actions__WEBPACK_IMPORTED_MODULE_1__["BookActionTypes"].DeleteBookSuccess: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { books: state.books.filter(function (b) { return b.isbn !== action.payload.isbn; }) });
        }
        case _admin_actions_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminActionTypes"].CreateBookSuccess: {
            var book = action.payload.book;
            var books = state.books.concat([book]);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { books: books });
        }
        case _admin_actions_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminActionTypes"].UpdateBookSuccess: {
            var book_2 = action.payload.book;
            var books = state.books.map(function (b) { return b.isbn === book_2.isbn ? book_2 : b; });
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { books: books });
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/books/shared/delay.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/books/shared/delay.directive.ts ***!
  \*************************************************/
/*! exports provided: DelayDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelayDirective", function() { return DelayDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DelayDirective = /** @class */ (function () {
    function DelayDirective(templateRef, viewContainerRef) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
    }
    DelayDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.viewContainerRef.createEmbeddedView(_this.templateRef);
        }, this.bmDelay);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DelayDirective.prototype, "bmDelay", void 0);
    DelayDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[bmDelay]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
    ], DelayDirective);
    return DelayDirective;
}());



/***/ }),

/***/ "./src/app/books/shared/isbn.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/books/shared/isbn.pipe.ts ***!
  \*******************************************/
/*! exports provided: IsbnPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsbnPipe", function() { return IsbnPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IsbnPipe = /** @class */ (function () {
    function IsbnPipe() {
    }
    IsbnPipe.prototype.transform = function (value) {
        if (!value) {
            return null;
        }
        return value.substr(0, 3) + "-" + value.substr(3);
    };
    IsbnPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'isbn'
        })
    ], IsbnPipe);
    return IsbnPipe;
}());



/***/ }),

/***/ "./src/app/books/shared/zoom.directive.ts":
/*!************************************************!*\
  !*** ./src/app/books/shared/zoom.directive.ts ***!
  \************************************************/
/*! exports provided: ZoomDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomDirective", function() { return ZoomDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ZoomDirective = /** @class */ (function () {
    function ZoomDirective() {
    }
    ZoomDirective.prototype.onMouseEnter = function () {
        this.isZoomed = true;
    };
    ZoomDirective.prototype.onMouseLeave = function () {
        this.isZoomed = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.small'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ZoomDirective.prototype, "isZoomed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ZoomDirective.prototype, "onMouseEnter", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ZoomDirective.prototype, "onMouseLeave", null);
    ZoomDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[bmZoom]'
        })
    ], ZoomDirective);
    return ZoomDirective;
}());



/***/ })

}]);
//# sourceMappingURL=books-books-module-es5.js.map