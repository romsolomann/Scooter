"use strict";
exports.id = 775;
exports.ids = [775];
exports.modules = {

/***/ 1775:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ getBackendApi)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const BACKEND_API_URL = "http://localhost:3030/api";
const createAxiosInstance = (baseUrl, authRequired, onResponseFail)=>{
    const instance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
        baseURL: baseUrl
    });
    if (authRequired && "undefined" === "object") {}
    instance.interceptors.response.use((response)=>response, async (error)=>{
        const backendError = await onResponseFail(error);
        return await Promise.reject(backendError);
    });
    return instance;
};
function getBackendApi(routeSuffix = "", authRequired = false) {
    return createAxiosInstance(BACKEND_API_URL + routeSuffix, authRequired, async (error)=>{
        return error?.response?.data || {
            message: "Something went wrong",
            errorCode: "UNKNOWN"
        };
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;