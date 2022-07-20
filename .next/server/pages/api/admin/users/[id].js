"use strict";
(() => {
var exports = {};
exports.id = 2846;
exports.ids = [2846];
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

/***/ 7888:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5616);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9407);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(678);
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4323);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);
next_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const router = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__.createRouter)();
router.use(_utils_auth__WEBPACK_IMPORTED_MODULE_1__/* .isAuth */ .$D, _utils_auth__WEBPACK_IMPORTED_MODULE_1__/* .isAdmin */ .GJ).get(async (req, res)=>{
    await _utils_db__WEBPACK_IMPORTED_MODULE_3__/* ["default"].connect */ .Z.connect();
    const user = await _models_User__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findById */ .Z.findById({
        _id: req.query.id
    });
    await _utils_db__WEBPACK_IMPORTED_MODULE_3__/* ["default"].disconnect */ .Z.disconnect();
    res.send(user);
});
router.use(_utils_auth__WEBPACK_IMPORTED_MODULE_1__/* .isAuth */ .$D, _utils_auth__WEBPACK_IMPORTED_MODULE_1__/* .isAdmin */ .GJ).put(async (req, res)=>{
    await _utils_db__WEBPACK_IMPORTED_MODULE_3__/* ["default"].connect */ .Z.connect();
    const user = await _models_User__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findById */ .Z.findById({
        _id: req.query.id
    });
    if (user) {
        user.name = req.body.name;
        user.isAdmin = Boolean(req.body.isAdmin);
        await user.save();
        await _utils_db__WEBPACK_IMPORTED_MODULE_3__/* ["default"].disconnect */ .Z.disconnect();
        res.send({
            message: "User Updated Successfully"
        });
    } else {
        await _utils_db__WEBPACK_IMPORTED_MODULE_3__/* ["default"].disconnect */ .Z.disconnect();
        res.status(404).send({
            message: "User Not Found"
        });
    }
});
router.use(_utils_auth__WEBPACK_IMPORTED_MODULE_1__/* .isAuth */ .$D, _utils_auth__WEBPACK_IMPORTED_MODULE_1__/* .isAdmin */ .GJ).delete(async (req, res)=>{
    await _utils_db__WEBPACK_IMPORTED_MODULE_3__/* ["default"].connect */ .Z.connect();
    const user = await _models_User__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findById */ .Z.findById({
        _id: req.query.id
    });
    if (user) {
        await user.remove();
        await _utils_db__WEBPACK_IMPORTED_MODULE_3__/* ["default"].disconnect */ .Z.disconnect();
        res.send({
            message: "User Deleted"
        });
    } else {
        await _utils_db__WEBPACK_IMPORTED_MODULE_3__/* ["default"].disconnect */ .Z.disconnect();
        res.status(404).send({
            message: "User Not Found"
        });
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router.handler());

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4323,9407], () => (__webpack_exec__(7888)));
module.exports = __webpack_exports__;

})();