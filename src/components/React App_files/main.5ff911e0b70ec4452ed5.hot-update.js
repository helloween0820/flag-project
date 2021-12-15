webpackHotUpdate("main",{

/***/ "./src/components/CountryList.tsx":
/*!****************************************!*\
  !*** ./src/components/CountryList.tsx ***!
  \****************************************/
/*! exports provided: CountryList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryList", function() { return CountryList; });
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _styles_CountryList_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/CountryList.css */ "./src/styles/CountryList.css");
/* harmony import */ var _styles_CountryList_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_CountryList_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Country__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Country */ "./src/components/Country.tsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/sebastiancaicedo/Documents/React/flag-project/src/components/CountryList.tsx",
    _s = __webpack_require__.$Refresh$.signature();









const CountryList = () => {
  _s();

  const [countryList, setCountryList] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const [paises, setPaises] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const [busqueda, setBusqueda] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const [darkMode, setDarkMode] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const [continente, setContinentes] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(["Americas", "Asia", "Europe", "Oceania", "Africa"]);
  const [continenteSelect, setContinenteSelec] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    getPaies();
  }, []);

  const getPaies = async () => {
    await axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("https://restcountries.com/v2/all").then(response => {
      setCountryList(response.data);
      setPaises(response.data);
    }).catch(() => {
      console.log("hubo un error, que dolor que dolor que pena");
    });
  };

  const handleChange = e => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = busqueda => {
    setCountryList(paises.filter(i => i.name.toLowerCase().includes(busqueda.toLowerCase()) && i.region));
  };

  const [checked, setChecked] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const mainClass = darkMode ? "is-dark-mode" : "is-light-mode";

  function changeMedia(mq) {
    setDarkMode(mq.matches);
    setChecked(mq.matches);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addListener(changeMedia);
    setDarkMode(mq.matches);
    setChecked(mq.matches);
    return () => {
      mq.removeListener(changeMedia);
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: "box",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        to: "/",
        className: "link",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h1", {
          className: "text",
          children: "Where in the world?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "dark-mode",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
          className: "p",
          onClick: changeMedia,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
            className: "moon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__["FontAwesomeIcon"], {
              icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMoon"],
              className: "moonn"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, undefined), "Dark Mode"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: "input",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "buscador",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "dropdown",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("select", {
            className: "select",
            onChange: e => {
              setContinenteSelec(e.target.value);
              console.log(e.target.value);
              const America = paises.filter(i => i.region.includes(e.target.value) || i.region !== e.target.value && setCountryList(countryList));
              {
                console.log(America);
                setCountryList(America);
              }
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
              children: " filtrar por region "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, undefined), continente.map(i => {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                value: i,
                children: [" ", i, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 24
              }, undefined);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
          className: "buscar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
          value: busqueda,
          placeholder: "Busca por un pa\xECs",
          type: "text",
          onChange: handleChange,
          className: "search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "text-alert",
        children: countryList.length === 0 && busqueda && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
          children: ["no se pudo encontrar un pa\xEDs con el nombre:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("strong", {
            children: [" ", busqueda, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: "container",
      children: countryList.map(({
        name,
        flag,
        population,
        capital,
        region
      }) => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "left",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_Country__WEBPACK_IMPORTED_MODULE_5__["Country"], {
            flag: flag,
            name: name,
            population: population,
            region: region,
            capital: capital
          }, name, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 13
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 5
  }, undefined);
};

_s(CountryList, "bKudZKse5lcLelwb52UJSu4keN4=");

_c = CountryList;

var _c;

__webpack_require__.$Refresh$.register(_c, "CountryList");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.5ff911e0b70ec4452ed5.hot-update.js.map