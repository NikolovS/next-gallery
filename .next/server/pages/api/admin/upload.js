"use strict";
(() => {
var exports = {};
exports.id = 430;
exports.ids = [430];
exports.modules = {

/***/ 3518:
/***/ ((module) => {

module.exports = require("cloudinary");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 1738:
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ 4708:
/***/ ((module) => {

module.exports = require("streamifier");

/***/ }),

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 3163:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5616);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9407);
/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6423);
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1738);
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3518);
/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var streamifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4708);
/* harmony import */ var streamifier__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(streamifier__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);
next_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






cloudinary__WEBPACK_IMPORTED_MODULE_4__.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
const config = {
    api: {
        bodyParser: false
    }
};
const router = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__.createRouter)();
const upload = multer__WEBPACK_IMPORTED_MODULE_3___default()();
router.use(_utils_auth__WEBPACK_IMPORTED_MODULE_1__/* .isAuth */ .$D, _utils_auth__WEBPACK_IMPORTED_MODULE_1__/* .isAdmin */ .GJ, upload.single("file")).post(async (req, res)=>{
    const streamUpload = (req)=>{
        return new Promise((resolve, reject)=>{
            const stream = cloudinary__WEBPACK_IMPORTED_MODULE_4__.v2.uploader.upload_stream((error, result)=>{
                if (result) {
                    resolve(result);
                } else {
                    reject(error);
                }
            });
            streamifier__WEBPACK_IMPORTED_MODULE_5___default().createReadStream(req.file.buffer).pipe(stream);
        });
    };
    const result = await streamUpload(req);
    res.send(result);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router.handler({
    onError: _utils_error__WEBPACK_IMPORTED_MODULE_2__/* .onError */ .q
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
var __webpack_exports__ = __webpack_require__.X(0, [4323,9407], () => (__webpack_exec__(3163)));
module.exports = __webpack_exports__;

})();