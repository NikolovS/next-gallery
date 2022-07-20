"use strict";
(() => {
var exports = {};
exports.id = 4097;
exports.ids = [4097];
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

/***/ 678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
});
const User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("User", userSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);


/***/ }),

/***/ 2067:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5616);
/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6125);
/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6183);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(678);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9407);
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4323);
/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6423);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);
next_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const router = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__.createRouter)();
router.use(_utils_auth__WEBPACK_IMPORTED_MODULE_4__/* .isAuth */ .$D, _utils_auth__WEBPACK_IMPORTED_MODULE_4__/* .isAdmin */ .GJ).get(async (req, res)=>{
    await _utils_db__WEBPACK_IMPORTED_MODULE_5__/* ["default"].connect */ .Z.connect();
    const ordersCount = await _models_Order__WEBPACK_IMPORTED_MODULE_1__/* ["default"].countDocuments */ .Z.countDocuments();
    const productsCount = await _models_Product__WEBPACK_IMPORTED_MODULE_2__/* ["default"].countDocuments */ .Z.countDocuments();
    const usersCount = await _models_User__WEBPACK_IMPORTED_MODULE_3__/* ["default"].countDocuments */ .Z.countDocuments();
    const ordersPriceGroup = await _models_Order__WEBPACK_IMPORTED_MODULE_1__/* ["default"].aggregate */ .Z.aggregate([
        {
            $group: {
                _id: null,
                sales: {
                    $sum: "$totalPrice"
                }
            }
        }, 
    ]);
    const ordersPrice = ordersPriceGroup.length > 0 ? ordersPriceGroup[0].sales : 0;
    const salesData = await _models_Order__WEBPACK_IMPORTED_MODULE_1__/* ["default"].aggregate */ .Z.aggregate([
        {
            $group: {
                _id: {
                    $dateToString: {
                        format: "%Y-%m",
                        date: "$createdAt"
                    }
                },
                totalSales: {
                    $sum: "$totalPrice"
                }
            }
        }, 
    ]);
    await _utils_db__WEBPACK_IMPORTED_MODULE_5__/* ["default"].disconnect */ .Z.disconnect();
    res.send({
        ordersCount,
        productsCount,
        usersCount,
        ordersPrice,
        salesData
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router.handler({
    onError: _utils_error__WEBPACK_IMPORTED_MODULE_6__/* .onError */ .q
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
var __webpack_exports__ = __webpack_require__.X(0, [4323,9407,6125,6183], () => (__webpack_exec__(2067)));
module.exports = __webpack_exports__;

})();