"use strict";
(() => {
var exports = {};
exports.id = 8873;
exports.ids = [8873];
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

/***/ 6816:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5616);
/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6423);
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4323);
/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6183);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9407);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_1__]);
next_connect__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// /api/products/:id/reviews






const router = (0,next_connect__WEBPACK_IMPORTED_MODULE_1__.createRouter)();
router.get(async (req, res)=>{
    _utils_db__WEBPACK_IMPORTED_MODULE_3__/* ["default"].connect */ .Z.connect();
    const product = await _models_Product__WEBPACK_IMPORTED_MODULE_4__/* ["default"].findById */ .Z.findById({
        _id: req.query.id
    });
    _utils_db__WEBPACK_IMPORTED_MODULE_3__/* ["default"].disconnect */ .Z.disconnect();
    if (product) {
        res.send(product.reviews);
    } else {
        res.status(404).send({
            message: "Product not found"
        });
    }
});
router.use(_utils_auth__WEBPACK_IMPORTED_MODULE_5__/* .isAuth */ .$D).post(async (req, res)=>{
    await _utils_db__WEBPACK_IMPORTED_MODULE_3__/* ["default"].connect */ .Z.connect();
    const product = await _models_Product__WEBPACK_IMPORTED_MODULE_4__/* ["default"].findById */ .Z.findById({
        _id: req.query.id
    });
    if (product) {
        const existReview = product.reviews.find((x)=>x.user == req.user._id);
        if (existReview) {
            await _models_Product__WEBPACK_IMPORTED_MODULE_4__/* ["default"].updateOne */ .Z.updateOne({
                _id: req.query.id,
                "reviews._id": existReview._id
            }, {
                $set: {
                    "reviews.$.comment": req.body.comment,
                    "reviews.$.rating": Number(req.body.rating)
                }
            });
            const updatedProduct = await _models_Product__WEBPACK_IMPORTED_MODULE_4__/* ["default"].findById */ .Z.findById({
                _id: req.query.id
            });
            updatedProduct.numReviews = updatedProduct.reviews.length;
            updatedProduct.rating = updatedProduct.reviews.reduce((a, c)=>c.rating + a, 0) / updatedProduct.reviews.length;
            await updatedProduct.save();
            await _utils_db__WEBPACK_IMPORTED_MODULE_3__/* ["default"].disconnect */ .Z.disconnect();
            return res.send({
                message: "Review updated"
            });
        } else {
            const review = {
                user: mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types.ObjectId(req.user._id),
                name: req.user.name,
                rating: Number(req.body.rating),
                comment: req.body.comment
            };
            product.reviews.push(review);
            product.numReviews = product.reviews.length;
            product.rating = product.reviews.reduce((a, c)=>c.rating + a, 0) / product.reviews.length;
            await product.save();
            await _utils_db__WEBPACK_IMPORTED_MODULE_3__/* ["default"].disconnect */ .Z.disconnect();
            res.status(201).send({
                message: "Review submitted"
            });
        }
    } else {
        await _utils_db__WEBPACK_IMPORTED_MODULE_3__/* ["default"].disconnect */ .Z.disconnect();
        res.status(404).send({
            message: "Product Not Found"
        });
    }
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
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4323,9407,6183], () => (__webpack_exec__(6816)));
module.exports = __webpack_exports__;

})();