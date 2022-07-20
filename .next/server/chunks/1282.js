"use strict";
exports.id = 1282;
exports.ids = [1282];
exports.modules = {

/***/ 9972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const connection = {};
async function connect() {
    if (connection.isConnected) {
        console.log("already connected");
        return;
    }
    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections.length) > 0) {
        connection.isConnected = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState);
        if (connection.isConnected === 1) {
            console.log("use previous connection");
            return;
        }
        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().disconnect();
    }
    const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("new connection");
    connection.isConnected = db.connections[0].readyState;
}
async function disconnect() {
    if (connection.isConnected) {
        if (true) {
            await mongoose__WEBPACK_IMPORTED_MODULE_0___default().disconnect();
            connection.isConnected = false;
        } else {}
    }
}
function convertDocToObj(doc) {
    doc._id = doc._id.toString();
    doc.createdAt = doc.createdAt.toString();
    doc.updatedAt = doc.updatedAt.toString();
    return doc;
}
const db = {
    connect,
    disconnect,
    convertDocToObj
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);


/***/ }),

/***/ 3250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ getError)
/* harmony export */ });
/* unused harmony export onError */
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9972);

const getError = (err)=>err.response && err.response.data && err.response.data.message ? err.response.data.message : err.message;
const onError = async (err, req, res, next)=>{
    await db.disconnect();
    res.status(500).send({
        message: err.toString()
    });
};



/***/ }),

/***/ 9629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);

const useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.makeStyles)((theme)=>({
        navbar: {
            backgroundColor: "#203040",
            "& a": {
                color: "#ffffff",
                marginLeft: 10
            }
        },
        brand: {
            fontWeight: "bold",
            fontSize: "1.5rem"
        },
        main: {
            minHeight: "80vh"
        },
        grow: {
            flexGrow: 1
        },
        footer: {
            textAlign: "center",
            marginTop: 10
        },
        section: {
            marginTop: 10,
            marginBottom: 10
        },
        form: {
            width: "100%",
            maxWidth: 800,
            margin: "0 auto"
        },
        navbarButton: {
            color: "#ffffff",
            textTransform: "initial"
        },
        transperantBackground: {
            backgroundColor: "transparent"
        },
        error: {
            color: "#f04040"
        },
        fullWidth: {
            width: "100%"
        },
        reviewForm: {
            maxWidth: 800,
            width: "100%"
        },
        reviewItem: {
            marginRight: "1rem",
            borderRight: "1px #808080 solid",
            paddingRight: "1rem"
        },
        toolbar: {
            justifyContent: "space-between"
        },
        menuButton: {
            padding: 0
        },
        mt1: {
            marginTop: "1rem"
        },
        searchSection: {
            display: "none",
            [theme.breakpoints.up("md")]: {
                display: "flex"
            }
        },
        searchForm: {
            border: "1px solid #ffffff",
            backgroundColor: "#ffffff",
            borderRadius: 5
        },
        searchInput: {
            paddingLeft: 5,
            color: "#000000",
            "& ::placeholder": {
                color: "#606060"
            }
        },
        iconButton: {
            backgroundColor: "#f8c040",
            padding: 5,
            borderRadius: "0 5px 5px 0",
            "& span": {
                color: "#000000"
            }
        },
        sort: {
            marginRight: 5
        },
        fullContainer: {
            height: "100vh"
        },
        mapInputBox: {
            position: "absolute",
            display: "flex",
            left: 0,
            right: 0,
            margin: "10px auto",
            width: 300,
            height: 40,
            "& input": {
                width: 250
            }
        }
    }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyles);


/***/ })

};
;