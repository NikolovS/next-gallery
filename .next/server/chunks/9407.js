"use strict";
exports.id = 9407;
exports.ids = [9407];
exports.modules = {

/***/ 9407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$D": () => (/* binding */ isAuth),
/* harmony export */   "GJ": () => (/* binding */ isAdmin),
/* harmony export */   "fT": () => (/* binding */ signToken)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);

const signToken = (user)=>{
    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
    }, process.env.JWT_SECRET, {
        expiresIn: "30d"
    });
};
const isAuth = async (req, res, next)=>{
    const { authorization  } = req.headers;
    if (authorization) {
        // Bearer xxx => xxx
        const token = authorization.slice(7, authorization.length);
        jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, process.env.JWT_SECRET, (err, decode)=>{
            if (err) {
                res.status(401).send({
                    message: "Token is not valid."
                });
            } else {
                req.user = decode;
                next();
            }
        });
    } else {
        res.status(401).send({
            message: "Token is not supplied"
        });
    }
};
const isAdmin = async (req, res, next)=>{
    if (req.user.isAdmin) {
        next();
    } else {
        res.status(401).send({
            message: "User is not admin"
        });
    }
};



/***/ })

};
;