"use strict";
exports.id = 5789;
exports.ids = [5789];
exports.modules = {

/***/ 1641:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8130);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4176);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4202);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90);
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9629);
/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8766);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9915);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3142);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3250);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_Store__WEBPACK_IMPORTED_MODULE_9__, js_cookie__WEBPACK_IMPORTED_MODULE_10__]);
([_utils_Store__WEBPACK_IMPORTED_MODULE_9__, js_cookie__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















function Layout({ children , title , description  }) {
    const { state , dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_utils_Store__WEBPACK_IMPORTED_MODULE_9__/* .Store */ .y);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    const { darkMode , cart , userInfo  } = state;
    const theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.createTheme)({
        typography: {
            h1: {
                fontSize: "1.6rem",
                fontWeight: 400,
                margin: "1rem 0"
            },
            h2: {
                fontSize: "1.4rem",
                fontWeight: 400,
                margin: "1rem 0"
            }
        },
        palette: {
            type: darkMode ? "dark" : "light",
            primary: {
                main: "#f0c000"
            },
            secondary: {
                main: "#208080"
            }
        }
    });
    const classes = (0,_utils_styles__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const { 0: sidbarVisible , 1: setSidebarVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const sidebarOpenHandler = ()=>{
        setSidebarVisible(true);
    };
    const sidebarCloseHandler = ()=>{
        setSidebarVisible(false);
    };
    const { 0: categories , 1: setCategories  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { enqueueSnackbar  } = (0,notistack__WEBPACK_IMPORTED_MODULE_12__.useSnackbar)();
    const fetchCategories = async ()=>{
        try {
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_13___default().get(`/api/products/categories`);
            setCategories(data);
        } catch (err) {
            enqueueSnackbar((0,_utils_error__WEBPACK_IMPORTED_MODULE_14__/* .getError */ .b)(err), {
                variant: "error"
            });
        }
    };
    const { 0: query , 1: setQuery  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const queryChangeHandler = (e)=>{
        setQuery(e.target.value);
    };
    const submitHandler = (e)=>{
        e.preventDefault();
        router.push(`/search?query=${query}`);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchCategories();
    }, []);
    const darkModeChangeHandler = ()=>{
        dispatch({
            type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON"
        });
        const newDarkMode = !darkMode;
        js_cookie__WEBPACK_IMPORTED_MODULE_10__["default"].set("darkMode", newDarkMode ? "ON" : "OFF");
    };
    const { 0: anchorEl , 1: setAnchorEl  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const loginClickHandler = (e)=>{
        setAnchorEl(e.currentTarget);
    };
    const loginMenuCloseHandler = (e, redirect)=>{
        setAnchorEl(null);
        if (redirect) {
            router.push(redirect);
        }
    };
    const logoutClickHandler = ()=>{
        setAnchorEl(null);
        dispatch({
            type: "USER_LOGOUT"
        });
        js_cookie__WEBPACK_IMPORTED_MODULE_10__["default"].remove("userInfo");
        js_cookie__WEBPACK_IMPORTED_MODULE_10__["default"].remove("cartItems");
        js_cookie__WEBPACK_IMPORTED_MODULE_10__["default"].remove("shippinhAddress");
        js_cookie__WEBPACK_IMPORTED_MODULE_10__["default"].remove("paymentMethod");
        router.push("/");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: title ? `${title} - Next Yangog` : "Next Yangog"
                    }),
                    description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: description
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {
                theme: theme,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.CssBaseline, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.AppBar, {
                        position: "static",
                        className: classes.navbar,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Toolbar, {
                            className: classes.toolbar,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                    display: "flex",
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
                                            edge: "start",
                                            "aria-label": "open drawer",
                                            onClick: sidebarOpenHandler,
                                            className: classes.menuButton,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                className: classes.navbarButton
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: "/",
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Link, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                                    className: classes.brand,
                                                    children: "amazona"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Drawer, {
                                    anchor: "left",
                                    open: sidbarVisible,
                                    onClose: sidebarCloseHandler,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.List, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.ListItem, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                                            children: "Shopping by category"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
                                                            "aria-label": "close",
                                                            onClick: sidebarCloseHandler,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_7___default()), {})
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Divider, {
                                                light: true
                                            }),
                                            categories.map((category)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: `/search?category=${category}`,
                                                    passHref: true,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.ListItem, {
                                                        button: true,
                                                        component: "a",
                                                        onClick: sidebarCloseHandler,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.ListItemText, {
                                                            primary: category
                                                        })
                                                    })
                                                }, category))
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: classes.grow,
                                    children: " "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: classes.searchSection,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                        onSubmit: submitHandler,
                                        className: classes.searchForm,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.InputBase, {
                                                name: "query",
                                                className: classes.searchInput,
                                                placeholder: "Search products",
                                                onChange: queryChangeHandler
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
                                                type: "submit",
                                                className: classes.iconButton,
                                                "aria-label": "search",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_6___default()), {})
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Switch, {
                                            checked: darkMode,
                                            onChange: darkModeChangeHandler
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: "/cart",
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Link, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                                    component: "span",
                                                    children: cart.cartItems.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Badge, {
                                                        color: "secondary",
                                                        badgeContent: cart.cartItems.length,
                                                        children: "Cart"
                                                    }) : "Cart"
                                                })
                                            })
                                        }),
                                        userInfo ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                                    "aria-controls": "simple-menu",
                                                    "aria-haspopup": "true",
                                                    onClick: loginClickHandler,
                                                    className: classes.navbarButton,
                                                    children: userInfo.name
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Menu, {
                                                    id: "simple-menu",
                                                    anchorEl: anchorEl,
                                                    keepMounted: true,
                                                    open: Boolean(anchorEl),
                                                    onClose: loginMenuCloseHandler,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                                                            onClick: (e)=>loginMenuCloseHandler(e, "/profile"),
                                                            children: "Profile"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                                                            onClick: (e)=>loginMenuCloseHandler(e, "/order-history"),
                                                            children: "Order History"
                                                        }),
                                                        userInfo.isAdmin && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                                                            onClick: (e)=>loginMenuCloseHandler(e, "/admin/dashboard"),
                                                            children: "Admin Dashboard"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                                                            onClick: logoutClickHandler,
                                                            children: "Logout"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: "/login",
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Link, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                                    component: "span",
                                                    children: "Login"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Container, {
                        className: classes.main,
                        children: children
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                        className: classes.footer,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                            children: "All rights reserverd. Next Yangog"
                        })
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

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
        }
    }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyles);


/***/ })

};
;