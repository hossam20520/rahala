(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail_episode"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/episodes/Detail_Episode.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/episodes/Detail_Episode.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_barcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-barcode */ "./node_modules/vue-barcode/index.js");
/* harmony import */ var vue_barcode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_barcode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: "Detail Episode"
  },
  components: {
    barcode: vue_barcode__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      len: 8,
      images: [],
      imageArray: [],
      isLoading: true,
      episode: {},
      roles: {},
      variants: []
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["currentUser"])),
  methods: {
    //------- printepisode
    print_episode: function print_episode() {
      var divContents = document.getElementById("print_episode").innerHTML;
      var a = window.open("", "", "height=500, width=500");
      a.document.write('<link rel="stylesheet" href="/assets_setup/css/bootstrap.css"><html>');
      a.document.write("<body >");
      a.document.write(divContents);
      a.document.write("</body></html>");
      a.document.close();
      a.print();
    },
    //------------------------------Formetted Numbers -------------------------\
    formatNumber: function formatNumber(number, dec) {
      var value = (typeof number === "string" ? number : number.toString()).split(".");
      if (dec <= 0) return value[0];
      var formated = value[1] || "";
      if (formated.length > dec) return "".concat(value[0], ".").concat(formated.substr(0, dec));

      while (formated.length < dec) {
        formated += "0";
      }

      return "".concat(value[0], ".").concat(formated);
    },
    //----------------------------------- Get Details Episode ------------------------------\
    showDetails: function showDetails() {
      var _this = this;

      var id = this.$route.params.id;
      axios.get("Episodes/Detail/".concat(id)).then(function (response) {
        _this.episode = response.data;
        _this.isLoading = false;
      })["catch"](function (response) {
        setTimeout(function () {
          _this.isLoading = false;
        }, 500);
      });
    }
  },
  //end Methods
  //-----------------------------Created function-------------------
  created: function created() {
    this.showDetails();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/episodes/Detail_Episode.vue?vue&type=template&id=0348b3d7&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/episodes/Detail_Episode.vue?vue&type=template&id=0348b3d7& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "main-content" },
    [
      _c("breadcumb", {
        attrs: { page: _vm.$t("EpisodeDetails"), folder: _vm.$t("Episodes") },
      }),
      _vm._v(" "),
      _vm.isLoading
        ? _c("div", {
            staticClass: "loading_page spinner spinner-primary mr-3",
          })
        : _vm._e(),
      _vm._v(" "),
      !_vm.isLoading
        ? _c(
            "b-card",
            { attrs: { "no-body": "" } },
            [
              _c("b-card-header"),
              _vm._v(" "),
              _c(
                "b-card-body",
                [
                  _c(
                    "b-row",
                    { attrs: { id: "print_episode" } },
                    [
                      _c("b-col", { attrs: { md: "8" } }, [
                        _c(
                          "table",
                          {
                            staticClass:
                              "table table-hover table-bordered table-md",
                          },
                          [
                            _c("tbody", [
                              _c("tr", [
                                _c("td", [
                                  _vm._v(
                                    " " + _vm._s(_vm.$t("ar_Name_episodes"))
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(" " + _vm._s(_vm.episode.ar_name)),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [
                                  _vm._v(
                                    " " + _vm._s(_vm.$t("en_Name_episodes"))
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(" " + _vm._s(_vm.episode.en_name)),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v(" " + _vm._s(_vm.$t("age")))]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(" " + _vm._s(_vm.episode.age)),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [
                                  _vm._v(" " + _vm._s(_vm.$t("rate"))),
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(" " + _vm._s(_vm.episode.rate)),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [
                                  _vm._v(" " + _vm._s(_vm.$t("status"))),
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(" " + _vm._s(_vm.episode.status)),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [
                                  _vm._v(" " + _vm._s(_vm.$t("aired"))),
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(" " + _vm._s(_vm.episode.aired)),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [
                                  _vm._v(
                                    " " + _vm._s(_vm.$t("aired_start_date"))
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    " " + _vm._s(_vm.episode.aired_start_date)
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [
                                  _vm._v(
                                    " " + _vm._s(_vm.$t("aired_end_date"))
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(
                                    " " + _vm._s(_vm.episode.aired_end_date)
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [
                                  _vm._v(" " + _vm._s(_vm.$t("premium"))),
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(" " + _vm._s(_vm.episode.premium)),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [
                                  _vm._v(" " + _vm._s(_vm.$t("story_ar"))),
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(" " + _vm._s(_vm.episode.story_ar)),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [
                                  _vm._v(" " + _vm._s(_vm.$t("story_en"))),
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(" " + _vm._s(_vm.episode.story_en)),
                                ]),
                              ]),
                            ]),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "mb-30", attrs: { md: "4" } },
                        [
                          _c(
                            "div",
                            { staticClass: "carousel_wrap" },
                            [
                              _c(
                                "b-carousel",
                                {
                                  attrs: {
                                    id: "carousel-1",
                                    interval: 2000,
                                    controls: "",
                                    background: "#ababab",
                                    "img-width": "1024",
                                    "img-height": "480",
                                  },
                                  on: {
                                    "sliding-start": _vm.onSlideStart,
                                    "sliding-end": _vm.onSlideEnd,
                                  },
                                },
                                _vm._l(
                                  _vm.episode.images,
                                  function (image, index) {
                                    return _c("b-carousel-slide", {
                                      key: index,
                                      attrs: {
                                        "img-src": "/images/episodes/" + image,
                                      },
                                    })
                                  }
                                ),
                                1
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c("b-col", { staticClass: "mt-4", attrs: { md: "5" } }, [
                        _c("table", {
                          staticClass: "table table-hover table-sm",
                        }),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/src/views/app/pages/episodes/Detail_Episode.vue":
/*!*******************************************************************!*\
  !*** ./resources/src/views/app/pages/episodes/Detail_Episode.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Detail_Episode_vue_vue_type_template_id_0348b3d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Detail_Episode.vue?vue&type=template&id=0348b3d7& */ "./resources/src/views/app/pages/episodes/Detail_Episode.vue?vue&type=template&id=0348b3d7&");
/* harmony import */ var _Detail_Episode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Detail_Episode.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/episodes/Detail_Episode.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Detail_Episode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Detail_Episode_vue_vue_type_template_id_0348b3d7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Detail_Episode_vue_vue_type_template_id_0348b3d7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/episodes/Detail_Episode.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/episodes/Detail_Episode.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/episodes/Detail_Episode.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_Episode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Detail_Episode.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/episodes/Detail_Episode.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_Episode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/episodes/Detail_Episode.vue?vue&type=template&id=0348b3d7&":
/*!**************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/episodes/Detail_Episode.vue?vue&type=template&id=0348b3d7& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_Episode_vue_vue_type_template_id_0348b3d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Detail_Episode.vue?vue&type=template&id=0348b3d7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/episodes/Detail_Episode.vue?vue&type=template&id=0348b3d7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_Episode_vue_vue_type_template_id_0348b3d7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_Episode_vue_vue_type_template_id_0348b3d7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);