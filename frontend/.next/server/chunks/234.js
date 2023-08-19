"use strict";
exports.id = 234;
exports.ids = [234];
exports.modules = {

/***/ 8234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ UserContextWrapper),
/* harmony export */   a: () => (/* binding */ useUser)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes_routes_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(464);
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9440);





// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});
const UserContextWrapper = ({ children  })=>{
    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const isLoggedIn = !isLoading && !!user?._id;
    const clearUser = ()=>{
        setUser(undefined);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!user) {
            push(_routes_routes_enum__WEBPACK_IMPORTED_MODULE_3__/* .ERoutes */ .C.AUTH);
        }
    }, [
        user
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setIsLoading(true);
        const token = (0,_services_auth__WEBPACK_IMPORTED_MODULE_4__/* .getAuthToken */ .bW)();
        if (token) {
            const user = (0,_services_auth__WEBPACK_IMPORTED_MODULE_4__/* .decodeToken */ .TD)(token);
            setUser(user);
        }
        setIsLoading(false);
    }, [
        setUser
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserContext.Provider, {
        value: {
            user,
            setUser,
            clearUser,
            isLoggedIn,
            isLoading
        },
        children: children
    });
};
const useUser = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(UserContext);
};


/***/ }),

/***/ 464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ ERoutes)
/* harmony export */ });
var ERoutes;
(function(ERoutes) {
    ERoutes["HOME"] = "/";
    ERoutes["AUTH"] = "/auth";
    ERoutes["PARKINGS"] = "/dashboard/parkings";
})(ERoutes || (ERoutes = {}));


/***/ }),

/***/ 9440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TD: () => (/* binding */ decodeToken),
/* harmony export */   bW: () => (/* binding */ getAuthToken),
/* harmony export */   uB: () => (/* binding */ setAuthToken)
/* harmony export */ });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5567);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_0__);

function getAuthToken() {
    return localStorage.getItem("token") ?? "";
}
function setAuthToken(token) {
    localStorage.setItem("token", token);
}
function decodeToken(token) {
    return jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(token);
}


/***/ })

};
;