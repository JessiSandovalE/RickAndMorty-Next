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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jessicasandoval_Documents_Cursos_exampleApolloAndNext_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Container */ \"./components/Container.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/jessicasandoval/Documents/Cursos/exampleApolloAndNext/pages/character/[id].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = (0,_Users_jessicasandoval_Documents_Cursos_exampleApolloAndNext_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\n  query getCharacter($id : ID!){\\n    character(id: $id){\\n      name\\n      status\\n      species\\n      type\\n      gender\\n      image\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar GET_CHARACTER = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql)(_templateObject());\n\nvar Character = function Character() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  var id = router.query.id;\n  console.log(id + \"hi\");\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(GET_CHARACTER, {\n    variables: {\n      id: id\n    }\n  }),\n      data = _useQuery.data,\n      loading = _useQuery.loading,\n      error = _useQuery.error;\n\n  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n    children: \"Cargando...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 24\n  }, _this);\n  console.log(data.character.name);\n  console.log(error);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_3__.Container, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"card mt-5\",\n      style: {\n        maxWidth: '540px'\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"row g-0\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"col-md-4\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: data.character.image,\n            alt: data.character.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"col-md-8\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card-body\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n              className: \"card-title\",\n              children: data.character.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n              className: \"card-text\",\n              children: [\"Estatus: \", data.character.status]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 40,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              className: \"card-text\",\n              children: [\"Gender: \", data.character.gender]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              className: \"card-text\",\n              children: [\"Species: \", data.character.species]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              className: \"card-text\",\n              children: [\"Tipo: \", data.character.type]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Character, \"iceLXWjNxjNDYEEqU/kIP9QHhY0=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery];\n});\n\n_c = Character;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Character);\n\nvar _c;\n\n$RefreshReg$(_c, \"Character\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcmFjdGVyL1tpZF0uanM/ODc0ZCJdLCJuYW1lcyI6WyJHRVRfQ0hBUkFDVEVSIiwiZ3FsIiwiQ2hhcmFjdGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJjaGFyYWN0ZXIiLCJuYW1lIiwibWF4V2lkdGgiLCJpbWFnZSIsInN0YXR1cyIsImdlbmRlciIsInNwZWNpZXMiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBR0MsbURBQUgsbUJBQW5COztBQWFBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDdEIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQURzQixNQUVOQyxFQUZNLEdBRUVGLE1BRkYsQ0FFZEcsS0FGYyxDQUVORCxFQUZNO0FBR3RCRSxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsRUFBRSxHQUFHLElBQWpCOztBQUhzQixrQkFJV0ksd0RBQVEsQ0FBQ1QsYUFBRCxFQUFnQjtBQUN2RFUsYUFBUyxFQUFFO0FBQUNMLFFBQUUsRUFBRkE7QUFBRDtBQUQ0QyxHQUFoQixDQUpuQjtBQUFBLE1BSWRNLElBSmMsYUFJZEEsSUFKYztBQUFBLE1BSVJDLE9BSlEsYUFJUkEsT0FKUTtBQUFBLE1BSUNDLEtBSkQsYUFJQ0EsS0FKRDs7QUFRcEIsTUFBR0QsT0FBSCxFQUFZLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDVkwsU0FBTyxDQUFDQyxHQUFSLENBQVlHLElBQUksQ0FBQ0csU0FBTCxDQUFlQyxJQUEzQjtBQUNBUixTQUFPLENBQUNDLEdBQVIsQ0FBWUssS0FBWjtBQUVKLHNCQUNFLDhEQUFDLDREQUFEO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUEyQixXQUFLLEVBQUU7QUFBRUcsZ0JBQVEsRUFBRTtBQUFaLE9BQWxDO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsVUFBZjtBQUFBLGlDQUNFO0FBQUssZUFBRyxFQUFFTCxJQUFJLENBQUNHLFNBQUwsQ0FBZUcsS0FBekI7QUFBZ0MsZUFBRyxFQUFFTixJQUFJLENBQUNHLFNBQUwsQ0FBZUM7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUFLLG1CQUFTLEVBQUMsVUFBZjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQyxXQUFmO0FBQUEsb0NBQ0U7QUFBSSx1QkFBUyxFQUFDLFlBQWQ7QUFBQSx3QkFBNEJKLElBQUksQ0FBQ0csU0FBTCxDQUFlQztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBSSx1QkFBUyxFQUFDLFdBQWQ7QUFBQSxzQ0FDWUosSUFBSSxDQUFDRyxTQUFMLENBQWVJLE1BRDNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQUtFO0FBQUcsdUJBQVMsRUFBQyxXQUFiO0FBQUEscUNBQ1dQLElBQUksQ0FBQ0csU0FBTCxDQUFlSyxNQUQxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEYsZUFRRTtBQUFHLHVCQUFTLEVBQUMsV0FBYjtBQUFBLHNDQUNZUixJQUFJLENBQUNHLFNBQUwsQ0FBZU0sT0FEM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJGLGVBV0U7QUFBRyx1QkFBUyxFQUFDLFdBQWI7QUFBQSxtQ0FDU1QsSUFBSSxDQUFDRyxTQUFMLENBQWVPLElBRHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE0QkQsQ0F4Q0Q7O0dBQU1uQixTO1VBQ1dFLGtELEVBR2tCSyxvRDs7O0tBSjdCUCxTO0FBMENOLCtEQUFlQSxTQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY2hhcmFjdGVyL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VRdWVyeSwgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXG5pbXBvcnQgIHtDb250YWluZXJ9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udGFpbmVyJ1xuXG5jb25zdCBHRVRfQ0hBUkFDVEVSID0gZ3FsYFxuICBxdWVyeSBnZXRDaGFyYWN0ZXIoJGlkIDogSUQhKXtcbiAgICBjaGFyYWN0ZXIoaWQ6ICRpZCl7XG4gICAgICBuYW1lXG4gICAgICBzdGF0dXNcbiAgICAgIHNwZWNpZXNcbiAgICAgIHR5cGVcbiAgICAgIGdlbmRlclxuICAgICAgaW1hZ2VcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IENoYXJhY3RlciA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgcXVlcnk6IHtpZH0gfSA9IHJvdXRlclxuICBjb25zb2xlLmxvZyhpZCArIFwiaGlcIilcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlUXVlcnkoR0VUX0NIQVJBQ1RFUiwge1xuICAgIHZhcmlhYmxlczoge2lkfVxuICAgIH0pO1xuXG4gICAgaWYobG9hZGluZykgcmV0dXJuIDxoMj5DYXJnYW5kby4uLjwvaDI+XG4gICAgICBjb25zb2xlLmxvZyhkYXRhLmNoYXJhY3Rlci5uYW1lKVxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG10LTVcIiBzdHlsZT17eyBtYXhXaWR0aDogJzU0MHB4JyB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZy0wXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEuY2hhcmFjdGVyLmltYWdlfSBhbHQ9e2RhdGEuY2hhcmFjdGVyLm5hbWV9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntkYXRhLmNoYXJhY3Rlci5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cbiAgICAgICAgICAgICAgICBFc3RhdHVzOiB7ZGF0YS5jaGFyYWN0ZXIuc3RhdHVzfVxuICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cbiAgICAgICAgICAgICAgICBHZW5kZXI6IHtkYXRhLmNoYXJhY3Rlci5nZW5kZXJ9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgU3BlY2llczoge2RhdGEuY2hhcmFjdGVyLnNwZWNpZXN9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgVGlwbzoge2RhdGEuY2hhcmFjdGVyLnR5cGV9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/character/[id].js\n");

/***/ })

});