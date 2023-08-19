"use strict";
exports.id = 983;
exports.ids = [983];
exports.modules = {

/***/ 1983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  M: () => (/* binding */ DialogContext),
  T: () => (/* binding */ DialogProvider)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@mui/material/Dialog"
var Dialog_ = __webpack_require__(8611);
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
;// CONCATENATED MODULE: ./hooks/useWindowSize.ts


function useIsMobileScreen(size = "sm") {
    const theme = (0,styles_.useTheme)();
    return useMediaQuery_default()(theme.breakpoints.down(size));
}

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./contexts/dialog.context.tsx





const DialogContext = /*#__PURE__*/ external_react_default().createContext({
    closeDialog: ()=>{},
    openDialog: ()=>{}
});
/**

   * Represents DialogProvider Context + Dialog component.

   * @example Open a dialog. DialogContentComponent is a functional or class component.

   * const {openDialog} = useDialogProvider()

   * if (shouldOpenDialog) {

   * 	openDialog(DialogContentComponent, options)

   * }

   *

   */ function DialogProvider({ children  }) {
    const isMobileScreen = useIsMobileScreen();
    const [currentDialogComponent, setCurrentDialogComponent] = (0,external_react_.useState)();
    const [currentDialogContentProps, setCurrentDialogContentProps] = (0,external_react_.useState)(undefined);
    const [currentDialogProps, setCurrentDialogProps] = (0,external_react_.useState)();
    const [open, setOpen] = (0,external_react_.useState)(false);
    /**

     * Ref to hold actual onDialogExited logic.

     * In case openDialog() from useDialogProvider() is called inside another dialog

     * we close current dialog and open elements dialog inside onExited callback of Dialog's transition.

     */ const onExitedInner = (0,external_react_.useRef)();
    const closeDialog = (0,external_react_.useCallback)((afterClose)=>{
        // eslint-disable-next-line no-extra-boolean-cast
        if (!!afterClose) {
            onExitedInner.current = ()=>{
                // afterClose();
                onExitedInner.current = undefined;
            };
        } else {
            onExitedInner.current = undefined;
        }
        setOpen(false);
    // setCurrentDialogContentProps(undefined);
    // setCurrentDialogProps(undefined);
    }, []);
    const onDialogExited = (0,external_react_.useCallback)(()=>{
        if (onExitedInner.current) {
            onExitedInner.current();
        }
    }, []);
    const openDialog = (0,external_react_.useCallback)((DialogContentComponent, options)=>{
        if (!DialogContentComponent) {
            console.error("Need to pass DialogContentComponent to openDialog callback!");
            return;
        }
        const { DialogProps , DialogContentProps  } = options ?? {};
        function setCurrents() {
            setCurrentDialogComponent(()=>{
                return DialogContentComponent;
            });
            setCurrentDialogProps(DialogProps);
            setCurrentDialogContentProps(DialogContentProps);
        }
        setOpen((open)=>{
            if (!open) {
                setCurrents();
                return true;
            } else {
                onExitedInner.current = ()=>{
                    setOpen(true);
                    setCurrents();
                };
                return false;
            }
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContext.Provider, {
        value: {
            closeDialog,
            openDialog
        },
        children: [
            children,
            /*#__PURE__*/ jsx_runtime.jsx((Dialog_default()), {
                open: open,
                onClose: (ev, reason)=>{
                    if (ev.which === 27) return;
                    if (reason !== "backdropClick") {
                        closeDialog();
                    }
                    closeDialog();
                },
                fullScreen: !!isMobileScreen,
                scroll: isMobileScreen ? "body" : "paper",
                TransitionComponent: material_.Fade,
                transitionDuration: {
                    appear: 700,
                    enter: 700,
                    exit: 700
                },
                // disableBackdropClick
                TransitionProps: {
                    onExited: onDialogExited
                },
                maxWidth: "lg",
                sx: {
                    overflowY: "inherit"
                },
                ...currentDialogProps,
                children: currentDialogComponent !== undefined && /*#__PURE__*/ external_react_default().createElement(currentDialogComponent, currentDialogContentProps)
            })
        ]
    });
}


/***/ })

};
;