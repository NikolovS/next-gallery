"use strict";
(() => {
var exports = {};
exports.id = 5890;
exports.ids = [5890];
exports.modules = {

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 7982:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5616);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);
next_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// import Product from '../../models/Product';
// import User from '../../models/User';
// import db from '../../utils/db';
// import data from '../../utils/data';
const router = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__.createRouter)();
router.get(async (req, res)=>{
    return res.send({
        message: "already seeded"
    });
// await db.connect();
// await User.deleteMany();
// await User.insertMany(data.users);
// await Product.deleteMany();
// await Product.insertMany(data.products);
// await db.disconnect();
// res.send({ message: 'seeded successfully' });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router.handler());

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7982));
module.exports = __webpack_exports__;

})();