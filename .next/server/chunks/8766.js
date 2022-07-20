"use strict";
exports.id = 8766;
exports.ids = [8766];
exports.modules = {

/***/ 8766:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ StoreProvider),
/* harmony export */   "y": () => (/* binding */ Store)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_1__]);
js_cookie__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Store = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();
const initialState = {
    darkMode: js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("darkMode") === "ON" ? true : false,
    cart: {
        cartItems: js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("cartItems") ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("cartItems")) : [],
        shippingAddress: js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("shippingAddress") ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("shippingAddress")) : {
            location: {}
        },
        paymentMethod: js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("paymentMethod") ? js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("paymentMethod") : ""
    },
    userInfo: js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("userInfo") ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("userInfo")) : null
};
function reducer(state, action) {
    switch(action.type){
        case "DARK_MODE_ON":
            return {
                ...state,
                darkMode: true
            };
        case "DARK_MODE_OFF":
            return {
                ...state,
                darkMode: false
            };
        case "CART_ADD_ITEM":
            {
                const newItem = action.payload;
                const existItem = state.cart.cartItems.find((item)=>item._id === newItem._id);
                const cartItems = existItem ? state.cart.cartItems.map((item)=>item.name === existItem.name ? newItem : item) : [
                    ...state.cart.cartItems,
                    newItem
                ];
                js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].set("cartItems", JSON.stringify(cartItems));
                return {
                    ...state,
                    cart: {
                        ...state.cart,
                        cartItems
                    }
                };
            }
        case "CART_REMOVE_ITEM":
            {
                const cartItems1 = state.cart.cartItems.filter((item)=>item._id !== action.payload._id);
                js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].set("cartItems", JSON.stringify(cartItems1));
                return {
                    ...state,
                    cart: {
                        ...state.cart,
                        cartItems: cartItems1
                    }
                };
            }
        case "SAVE_SHIPPING_ADDRESS":
            return {
                ...state,
                cart: {
                    ...state.cart,
                    shippingAddress: {
                        ...state.cart.shippingAddress,
                        ...action.payload
                    }
                }
            };
        case "SAVE_SHIPPING_ADDRESS_MAP_LOCATION":
            return {
                ...state,
                cart: {
                    ...state.cart,
                    shippingAddress: {
                        ...state.cart.shippingAddress,
                        location: action.payload
                    }
                }
            };
        case "SAVE_PAYMENT_METHOD":
            return {
                ...state,
                cart: {
                    cartItems: [],
                    shippingAddress: {
                        location: {}
                    },
                    paymentMethod: ""
                }
            };
        case "CART_CLEAR":
            return {
                ...state,
                cart: {
                    ...state.cart,
                    cartItems: []
                }
            };
        case "USER_LOGIN":
            {
                return {
                    ...state,
                    userInfo: action.payload
                };
            }
        case "USER_LOGOUT":
            {
                return {
                    ...state,
                    userInfo: null,
                    cart: {
                        cartItems: [],
                        shippingAddress: {},
                        paymentMethod: ""
                    }
                };
            }
        default:
            return state;
    }
}
function StoreProvider(props) {
    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(reducer, initialState);
    const value = {
        state,
        dispatch
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Store.Provider, {
        value: value,
        children: props.children
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;