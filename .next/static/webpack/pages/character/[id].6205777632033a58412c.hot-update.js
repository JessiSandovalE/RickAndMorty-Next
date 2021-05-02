/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/character/[id]",{

/***/ "./pages/character/[id].js":
/*!*********************************!*\
  !*** ./pages/character/[id].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jessicasandoval_Documents_Cursos_exampleApolloAndNext_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Container */ \"./components/Container.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/jessicasandoval/Documents/Cursos/exampleApolloAndNext/pages/character/[id].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = (0,_Users_jessicasandoval_Documents_Cursos_exampleApolloAndNext_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\n  query getCharacter($id : ID!){\\n    character(id: $id){\\n      name\\n      status\\n      species\\n      type\\n      gender\\n      image\\n      created\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar GET_CHARACTER = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql)(_templateObject());\n\nvar Character = function Character() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  var id = router.query.id;\n  console.log(id + \"hi\");\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(GET_CHARACTER, {\n    variables: {\n      id: id\n    }\n  }),\n      data = _useQuery.data,\n      loading = _useQuery.loading,\n      error = _useQuery.error;\n\n  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n    children: \"Cargando...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 24\n  }, _this);\n  console.log(data.character.name);\n  console.log(error);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_3__.Container, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"card\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"row g-0\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"col-md-4\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: data.character.image,\n            alt: data.character.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"co-md-8\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card-body\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n              className: \"card-title\",\n              children: data.character.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 40,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n              className: \"card-text\",\n              children: [\"Estatus: \", data.character.status]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              className: \"card-text\",\n              children: [\"Gender: \", data.character.gender]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 44,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Character, \"iceLXWjNxjNDYEEqU/kIP9QHhY0=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery];\n});\n\n_c = Character;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Character);\n\nvar _c;\n\n$RefreshReg$(_c, \"Character\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcmFjdGVyL1tpZF0uanM/ODc0ZCJdLCJuYW1lcyI6WyJHRVRfQ0hBUkFDVEVSIiwiZ3FsIiwiQ2hhcmFjdGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJjaGFyYWN0ZXIiLCJuYW1lIiwiaW1hZ2UiLCJzdGF0dXMiLCJnZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHQyxtREFBSCxtQkFBbkI7O0FBY0EsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUN0QixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRHNCLE1BRU5DLEVBRk0sR0FFRUYsTUFGRixDQUVkRyxLQUZjLENBRU5ELEVBRk07QUFHdEJFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxFQUFFLEdBQUcsSUFBakI7O0FBSHNCLGtCQUlXSSx3REFBUSxDQUFDVCxhQUFELEVBQWdCO0FBQ3ZEVSxhQUFTLEVBQUU7QUFBQ0wsUUFBRSxFQUFGQTtBQUFEO0FBRDRDLEdBQWhCLENBSm5CO0FBQUEsTUFJZE0sSUFKYyxhQUlkQSxJQUpjO0FBQUEsTUFJUkMsT0FKUSxhQUlSQSxPQUpRO0FBQUEsTUFJQ0MsS0FKRCxhQUlDQSxLQUpEOztBQVFwQixNQUFHRCxPQUFILEVBQVksb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNWTCxTQUFPLENBQUNDLEdBQVIsQ0FBWUcsSUFBSSxDQUFDRyxTQUFMLENBQWVDLElBQTNCO0FBQ0FSLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSyxLQUFaO0FBRUosc0JBQ0UsOERBQUMsNERBQUQ7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsVUFBZjtBQUFBLGlDQUNFO0FBQUssZUFBRyxFQUFFRixJQUFJLENBQUNHLFNBQUwsQ0FBZUUsS0FBekI7QUFBZ0MsZUFBRyxFQUFFTCxJQUFJLENBQUNHLFNBQUwsQ0FBZUM7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUFLLG1CQUFTLEVBQUMsU0FBZjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQyxXQUFmO0FBQUEsb0NBQ0U7QUFBSSx1QkFBUyxFQUFDLFlBQWQ7QUFBQSx3QkFBNEJKLElBQUksQ0FBQ0csU0FBTCxDQUFlQztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBSSx1QkFBUyxFQUFDLFdBQWQ7QUFBQSxzQ0FDWUosSUFBSSxDQUFDRyxTQUFMLENBQWVHLE1BRDNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQUtFO0FBQUcsdUJBQVMsRUFBQyxXQUFiO0FBQUEscUNBQ1dOLElBQUksQ0FBQ0csU0FBTCxDQUFlSSxNQUQxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0JELENBbENEOztHQUFNaEIsUztVQUNXRSxrRCxFQUdrQkssb0Q7OztLQUo3QlAsUztBQW9DTiwrREFBZUEsU0FBZiIsImZpbGUiOiIuL3BhZ2VzL2NoYXJhY3Rlci9baWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUXVlcnksIGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xuaW1wb3J0ICB7Q29udGFpbmVyfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnRhaW5lcidcblxuY29uc3QgR0VUX0NIQVJBQ1RFUiA9IGdxbGBcbiAgcXVlcnkgZ2V0Q2hhcmFjdGVyKCRpZCA6IElEISl7XG4gICAgY2hhcmFjdGVyKGlkOiAkaWQpe1xuICAgICAgbmFtZVxuICAgICAgc3RhdHVzXG4gICAgICBzcGVjaWVzXG4gICAgICB0eXBlXG4gICAgICBnZW5kZXJcbiAgICAgIGltYWdlXG4gICAgICBjcmVhdGVkXG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBDaGFyYWN0ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHF1ZXJ5OiB7aWR9IH0gPSByb3V0ZXJcbiAgY29uc29sZS5sb2coaWQgKyBcImhpXCIpXG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1ZXJ5KEdFVF9DSEFSQUNURVIsIHtcbiAgICB2YXJpYWJsZXM6IHtpZH1cbiAgICB9KTtcblxuICAgIGlmKGxvYWRpbmcpIHJldHVybiA8aDI+Q2FyZ2FuZG8uLi48L2gyPlxuICAgICAgY29uc29sZS5sb2coZGF0YS5jaGFyYWN0ZXIubmFtZSlcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBnLTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5jaGFyYWN0ZXIuaW1hZ2V9IGFsdD17ZGF0YS5jaGFyYWN0ZXIubmFtZX0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY28tbWQtOFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57ZGF0YS5jaGFyYWN0ZXIubmFtZX08L2gxPlxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgRXN0YXR1czoge2RhdGEuY2hhcmFjdGVyLnN0YXR1c31cbiAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgR2VuZGVyOiB7ZGF0YS5jaGFyYWN0ZXIuZ2VuZGVyfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/character/[id].js\n");

/***/ })

});