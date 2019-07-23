(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/admin/actions/admin.actions.ts":
/*!************************************************!*\
  !*** ./src/app/admin/actions/admin.actions.ts ***!
  \************************************************/
/*! exports provided: AdminActionTypes, CreateBook, CreateBookSuccess, UpdateBook, UpdateBookSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminActionTypes", function() { return AdminActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBook", function() { return CreateBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBookSuccess", function() { return CreateBookSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBook", function() { return UpdateBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBookSuccess", function() { return UpdateBookSuccess; });
var AdminActionTypes;
(function (AdminActionTypes) {
    AdminActionTypes["CreateBook"] = "[Admin] Create Book";
    AdminActionTypes["CreateBookSuccess"] = "[Admin] Create Book Success";
    AdminActionTypes["UpdateBook"] = "[Admin] Update Book";
    AdminActionTypes["UpdateBookSuccess"] = "[Admin] Update Book Success";
})(AdminActionTypes || (AdminActionTypes = {}));
var CreateBook = /** @class */ (function () {
    function CreateBook(payload) {
        this.payload = payload;
        this.type = AdminActionTypes.CreateBook;
    }
    return CreateBook;
}());

var CreateBookSuccess = /** @class */ (function () {
    function CreateBookSuccess(payload) {
        this.payload = payload;
        this.type = AdminActionTypes.CreateBookSuccess;
    }
    return CreateBookSuccess;
}());

var UpdateBook = /** @class */ (function () {
    function UpdateBook(payload) {
        this.payload = payload;
        this.type = AdminActionTypes.UpdateBook;
    }
    return UpdateBook;
}());

var UpdateBookSuccess = /** @class */ (function () {
    function UpdateBookSuccess(payload) {
        this.payload = payload;
        this.type = AdminActionTypes.UpdateBookSuccess;
    }
    return UpdateBookSuccess;
}());



/***/ }),

/***/ "./src/app/books/actions/book.actions.ts":
/*!***********************************************!*\
  !*** ./src/app/books/actions/book.actions.ts ***!
  \***********************************************/
/*! exports provided: BookActionTypes, LoadBooks, LoadBooksSuccess, LoadBooksFailure, LoadBook, LoadBookSuccess, LoadBookFailure, DeleteBook, DeleteBookSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookActionTypes", function() { return BookActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadBooks", function() { return LoadBooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadBooksSuccess", function() { return LoadBooksSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadBooksFailure", function() { return LoadBooksFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadBook", function() { return LoadBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadBookSuccess", function() { return LoadBookSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadBookFailure", function() { return LoadBookFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteBook", function() { return DeleteBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteBookSuccess", function() { return DeleteBookSuccess; });
var BookActionTypes;
(function (BookActionTypes) {
    BookActionTypes["LoadBooks"] = "[Book] Load Books";
    BookActionTypes["LoadBooksSuccess"] = "[Book] Load Books Success";
    BookActionTypes["LoadBooksFailure"] = "[Book] Load Books Failure";
    BookActionTypes["LoadBook"] = "[Book] Load Book";
    BookActionTypes["LoadBookSuccess"] = "[Book] Load Book Success";
    BookActionTypes["LoadBookFailure"] = "[Book] Load Book Failure";
    BookActionTypes["DeleteBook"] = "[Book] Delete Book";
    BookActionTypes["DeleteBookSuccess"] = "[Book] Delete Book Success";
})(BookActionTypes || (BookActionTypes = {}));
var LoadBooks = /** @class */ (function () {
    function LoadBooks() {
        this.type = BookActionTypes.LoadBooks;
    }
    return LoadBooks;
}());

var LoadBooksSuccess = /** @class */ (function () {
    function LoadBooksSuccess(payload) {
        this.payload = payload;
        this.type = BookActionTypes.LoadBooksSuccess;
    }
    return LoadBooksSuccess;
}());

var LoadBooksFailure = /** @class */ (function () {
    function LoadBooksFailure(payload) {
        this.payload = payload;
        this.type = BookActionTypes.LoadBooksFailure;
    }
    return LoadBooksFailure;
}());

var LoadBook = /** @class */ (function () {
    function LoadBook(payload) {
        this.payload = payload;
        this.type = BookActionTypes.LoadBook;
    }
    return LoadBook;
}());

var LoadBookSuccess = /** @class */ (function () {
    function LoadBookSuccess(payload) {
        this.payload = payload;
        this.type = BookActionTypes.LoadBookSuccess;
    }
    return LoadBookSuccess;
}());

var LoadBookFailure = /** @class */ (function () {
    function LoadBookFailure(payload) {
        this.payload = payload;
        this.type = BookActionTypes.LoadBookFailure;
    }
    return LoadBookFailure;
}());

var DeleteBook = /** @class */ (function () {
    function DeleteBook(payload) {
        this.payload = payload;
        this.type = BookActionTypes.DeleteBook;
    }
    return DeleteBook;
}());

var DeleteBookSuccess = /** @class */ (function () {
    function DeleteBookSuccess(payload) {
        this.payload = payload;
        this.type = BookActionTypes.DeleteBookSuccess;
    }
    return DeleteBookSuccess;
}());



/***/ }),

/***/ "./src/app/books/selectors/book.selectors.ts":
/*!***************************************************!*\
  !*** ./src/app/books/selectors/book.selectors.ts ***!
  \***************************************************/
/*! exports provided: getBookState, getBooksLoading, getAllBooks, getBookByIsbn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBookState", function() { return getBookState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBooksLoading", function() { return getBooksLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllBooks", function() { return getAllBooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBookByIsbn", function() { return getBookByIsbn; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var getBookState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('book');
var getBooksLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBookState, function (state) { return state.loading; });
var getAllBooks = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getBookState, function (state) { return state.books; });
var getBookByIsbn = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAllBooks, function (books, props) { return books.find(function (b) { return b.isbn === props.isbn; }); });


/***/ })

}]);
//# sourceMappingURL=common-es5.js.map