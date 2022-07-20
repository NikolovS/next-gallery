"use strict";
(() => {
var exports = {};
exports.id = 7215;
exports.ids = [7215];
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

/***/ 6525:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5616);
/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6125);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9407);
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4323);
/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6423);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);
next_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const router = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__.createRouter)();
router.use(_utils_auth__WEBPACK_IMPORTED_MODULE_2__/* .isAuth */ .$D, _utils_auth__WEBPACK_IMPORTED_MODULE_2__/* .isAdmin */ .GJ).get(async (req, res)=>{
    await _utils_db__WEBPACK_IMPORTED_MODULE_3__/* ["default"].connect */ .Z.connect();
    const orders = await _models_Order__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find({}).populate("user", "name");
    await _utils_db__WEBPACK_IMPORTED_MODULE_3__/* ["default"].disconnect */ .Z.disconnect();
    res.send(orders);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router.handler({
    onError: _utils_error__WEBPACK_IMPORTED_MODULE_4__/* .onError */ .q
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ onError)
/* harmony export */ });
/* unused harmony export getError */
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4323);

const getError = (err)=>err.response && err.response.data && err.response.data.message ? err.response.data.message : err.message;
const onError = async (err, req, res, next)=>{
    await _db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].disconnect */ .Z.disconnect();
    res.status(500).send({
        message: err.toString()
    });
};



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4323,9407,6125], () => (__webpack_exec__(6525)));
module.exports = __webpack_exports__;

})();