"use strict";
(() => {
var exports = {};
exports.id = 5151;
exports.ids = [5151];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 2297:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5616);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9407);
/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6183);
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4323);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);
next_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const router = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__.createRouter)();
router.use(_utils_auth__WEBPACK_IMPORTED_MODULE_1__/* .isAuth */ .$D, _utils_auth__WEBPACK_IMPORTED_MODULE_1__/* .isAdmin */ .GJ).get(async (req, res)=>{
    await _utils_db__WEBPACK_IMPORTED_MODULE_3__/* ["default"].connect */ .Z.connect();
    const products = await _models_Product__WEBPACK_IMPORTED_MODULE_2__/* ["default"].find */ .Z.find({});
    await _utils_db__WEBPACK_IMPORTED_MODULE_3__/* ["default"].disconnect */ .Z.disconnect();
    res.send(products);
});
router.use(_utils_auth__WEBPACK_IMPORTED_MODULE_1__/* .isAuth */ .$D, _utils_auth__WEBPACK_IMPORTED_MODULE_1__/* .isAdmin */ .GJ).post(async (req, res)=>{
    await _utils_db__WEBPACK_IMPORTED_MODULE_3__/* ["default"].connect */ .Z.connect();
    const newProduct = new _models_Product__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z({
        name: "sample name",
        slug: "sample-slug-" + Math.random(),
        image: "/images/shirt1.jpg",
        price: 0,
        category: "sample category",
        brand: "sample brand",
        countInStock: 0,
        description: "sample description",
        rating: 0,
        numReviews: 0
    });
    const product = await newProduct.save();
    await _utils_db__WEBPACK_IMPORTED_MODULE_3__/* ["default"].disconnect */ .Z.disconnect();
    res.send({
        message: "Product Created",
        product
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router.handler());

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4323,9407,6183], () => (__webpack_exec__(2297)));
module.exports = __webpack_exports__;

})();