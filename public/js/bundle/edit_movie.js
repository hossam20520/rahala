(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit_movie"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/movies/Edit_movie.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/movies/Edit_movie.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_upload_multiple_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-upload-multiple-image */ "./node_modules/vue-upload-multiple-image/src/main.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
    title: "Edit Movie"
  },
  data: function data() {
    var _ref;

    return _ref = {
      tag: "",
      len: 8,
      images: [],
      imageArray: [],
      change: false,
      isLoading: true,
      SubmitProcessing: false,
      data: new FormData(),
      categories: [],
      Subcategories: [],
      units: [],
      units_sub: [],
      brands: [],
      roles: {},
      variants: [],
      videoFile: null
    }, _defineProperty(_ref, "categories", []), _defineProperty(_ref, "movie", {
      publish_status: "",
      ar_name: "",
      en_name: "",
      image: "",
      video_q1: "",
      video_q2: "",
      video_q3: "",
      age: "",
      status: "",
      aired: "",
      aired_start_date: new Date().toISOString().slice(0, 10),
      aired_end_date: new Date().toISOString().slice(0, 10),
      category: "",
      story_ar: "",
      story_en: "",
      category_id: "",
      rate: ""
    }), _defineProperty(_ref, "code_exist", ""), _ref;
  },
  components: {
    VueUploadMultipleImage: vue_upload_multiple_image__WEBPACK_IMPORTED_MODULE_0__["default"],
    VueTagsInput: _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  methods: {
    handleFileUpload_q1: function handleFileUpload_q1(event) {
      this.videoFile = event.target.files[0];
      console.log(this.videoFile);
      this.uploadVideo("video_q1");
    },
    handleFileUpload_q2: function handleFileUpload_q2(event) {
      this.videoFile = event.target.files[0];
      console.log(this.videoFile);
      this.uploadVideo("video_q2");
    },
    handleFileUpload_q3: function handleFileUpload_q3(event) {
      this.videoFile = event.target.files[0];
      console.log(this.videoFile);
      this.uploadVideo("video_q3");
    },
    uploadVideo: function uploadVideo(q) {
      this.UploadMovie(q);
    },
    UploadMovie: function UploadMovie(q) {
      var _this = this;

      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.start(); // NProgress.set(0.1);

      var self = this;
      var formData = new FormData();
      formData.append('video', this.videoFile);
      formData.append('q', q);
      self.SubmitProcessing = true; // Send Data with axios

      axios.post("Movies/upload", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (response) {
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done();
        self.SubmitProcessing = false;
        console.log(response.data);

        if (response.data.q == "video_q1") {
          _this.movie.video_q1 = response.data.url;
        } else if (response.data.q == "video_q2") {
          _this.movie.video_q2 = response.data.url;
        } else if (response.data.q == "video_q3") {
          _this.movie.video_q3 = response.data.url;
        } // this.$router.push({ name: "index_movies" });


        _this.makeToast("success", _this.$t("Successfully_Created"), _this.$t("Success"));
      })["catch"](function (error) {
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done();

        if (error.errors.code.length > 0) {
          self.code_exist = error.errors.code[0];
        }

        _this.makeToast("danger", _this.$t("InvalidData"), _this.$t("Failed"));

        self.SubmitProcessing = false;
      });
    },
    //------------- Submit Validation Update Movie
    Submit_Movie: function Submit_Movie() {
      var _this2 = this;

      this.$refs.Edit_Movie.validate().then(function (success) {
        if (!success) {
          _this2.makeToast("danger", _this2.$t("Please_fill_the_form_correctly"), _this2.$t("Failed"));
        } else {
          _this2.Update_Movie();
        }
      });
    },
    //------ Validation state fields
    getValidationState: function getValidationState(_ref2) {
      var dirty = _ref2.dirty,
          validated = _ref2.validated,
          _ref2$valid = _ref2.valid,
          valid = _ref2$valid === void 0 ? null : _ref2$valid;
      return dirty || validated ? valid : null;
    },
    //------ Toast
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    //------Show Notification If Variant is Duplicate
    showNotifDuplicate: function showNotifDuplicate() {
      this.makeToast("warning", this.$t("VariantDuplicate"), this.$t("Warning"));
    },
    //------ event upload Image Success
    uploadImageSuccess: function uploadImageSuccess(formData, index, fileList, imageArray) {
      this.images = fileList;
    },
    //------ event before Remove image
    beforeRemove: function beforeRemove(index, done, fileList) {
      var remove = confirm("remove image");

      if (remove == true) {
        this.images.splice(index, 1);
        done();
      } else {}
    },
    //-------------- Movie Get Elements
    getCategory: function getCategory() {
      var _this3 = this;

      axios.get("Movies/create").then(function (response) {
        _this3.categories = response.data.category;
        _this3.isLoading = false;
      })["catch"](function (response) {
        setTimeout(function () {
          _this3.isLoading = false;
        }, 500);

        _this3.makeToast("danger", _this3.$t("InvalidData"), _this3.$t("Failed"));
      });
    },
    //---------------------------------------Get Movie Elements ------------------------------\
    GetElements: function GetElements() {
      var _this4 = this;

      var id = this.$route.params.id;
      axios.get("Movies/".concat(id, "/edit")).then(function (response) {
        _this4.movie = response.data.movie;
        _this4.movie.category_id = response.data.movie.category.split(',').map(Number);
        _this4.images = response.data.movie.images;
        _this4.isLoading = false;
      })["catch"](function (response) {
        setTimeout(function () {
          _this4.isLoading = false;
        }, 500);
      });
    },
    //------------------------------ Update Movie ------------------------------\
    Update_Movie: function Update_Movie() {
      var _this5 = this;

      nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.set(0.1);
      var self = this;
      self.SubmitProcessing = true; // append objet movie

      Object.entries(self.movie).forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            key = _ref4[0],
            value = _ref4[1];

        self.data.append(key, value);
      }); //append array images

      if (self.images.length > 0) {
        for (var k = 0; k < self.images.length; k++) {
          Object.entries(self.images[k]).forEach(function (_ref5) {
            var _ref6 = _slicedToArray(_ref5, 2),
                key = _ref6[0],
                value = _ref6[1];

            self.data.append("images[" + k + "][" + key + "]", value);
          });
        }
      }

      self.data.append("_method", "put"); //send Data with axios

      axios.post("Movies/" + this.movie.id, self.data).then(function (response) {
        nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done();
        self.SubmitProcessing = false;

        _this5.$router.push({
          name: "index_movies"
        });

        _this5.makeToast("success", _this5.$t("Successfully_Updated"), _this5.$t("Success"));
      })["catch"](function (error) {
        if (error.errors.code.length > 0) {
          self.code_exist = error.errors.code[0];
        }

        nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done();

        _this5.makeToast("danger", _this5.$t("InvalidData"), _this5.$t("Failed"));

        self.SubmitProcessing = false;
      });
    }
  },
  //end Methods
  //-----------------------------Created function-------------------
  created: function created() {
    this.GetElements();
    this.getCategory();
    this.imageArray = [];
    this.images = [];
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/movies/Edit_movie.vue?vue&type=template&id=0d1ab6cc&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/movies/Edit_movie.vue?vue&type=template&id=0d1ab6cc& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
        attrs: { page: _vm.$t("UpdateMovie"), folder: _vm.$t("Movies") },
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
            "validation-observer",
            { ref: "Edit_Movie" },
            [
              _c(
                "b-form",
                {
                  attrs: { enctype: "multipart/form-data" },
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.Submit_Movie($event)
                    },
                  },
                },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { md: "8" } },
                        [
                          _c(
                            "b-card",
                            [
                              _c(
                                "b-card-body",
                                [
                                  _c(
                                    "b-row",
                                    [
                                      _c(
                                        "b-col",
                                        {
                                          staticClass: "mb-2",
                                          attrs: { md: "6" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "Name_ar_name_mov",
                                              rules: {
                                                required: true,
                                                min: 3,
                                                max: 55,
                                              },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (
                                                    validationContext
                                                  ) {
                                                    return [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t(
                                                                "Name_ar_name_mov"
                                                              ),
                                                          },
                                                        },
                                                        [
                                                          _c("b-form-input", {
                                                            attrs: {
                                                              state:
                                                                _vm.getValidationState(
                                                                  validationContext
                                                                ),
                                                              "aria-describedby":
                                                                "Name-feedback",
                                                              label:
                                                                "Name_ar_name_mov",
                                                              placeholder:
                                                                _vm.$t(
                                                                  "Name_ar_name_mov"
                                                                ),
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.movie
                                                                  .ar_name,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.movie,
                                                                    "ar_name",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "movie.ar_name",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-invalid-feedback",
                                                            {
                                                              attrs: {
                                                                id: "Name-feedback",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  validationContext
                                                                    .errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              616949601
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          staticClass: "mb-2",
                                          attrs: { md: "6" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "Name_en_nameMov",
                                              rules: {
                                                required: true,
                                                min: 3,
                                                max: 55,
                                              },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (
                                                    validationContext
                                                  ) {
                                                    return [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t(
                                                                "Name_en_nameMov"
                                                              ),
                                                          },
                                                        },
                                                        [
                                                          _c("b-form-input", {
                                                            attrs: {
                                                              state:
                                                                _vm.getValidationState(
                                                                  validationContext
                                                                ),
                                                              "aria-describedby":
                                                                "Name-feedback",
                                                              label:
                                                                "Name_en_nameMov",
                                                              placeholder:
                                                                _vm.$t(
                                                                  "Name_en_nameMov"
                                                                ),
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.movie
                                                                  .en_name,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.movie,
                                                                    "en_name",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "movie.en_name",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-invalid-feedback",
                                                            {
                                                              attrs: {
                                                                id: "Name-feedback",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  validationContext
                                                                    .errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              3471725726
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          staticClass: "mb-2",
                                          attrs: {
                                            lg: "12",
                                            md: "12",
                                            sm: "12",
                                          },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "publish_status",
                                              rules: { required: true },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (ref) {
                                                    var valid = ref.valid
                                                    var errors = ref.errors
                                                    return _c(
                                                      "b-form-group",
                                                      {
                                                        attrs: {
                                                          label:
                                                            _vm.$t(
                                                              "publish_status"
                                                            ),
                                                        },
                                                      },
                                                      [
                                                        _c("v-select", {
                                                          class: {
                                                            "is-invalid":
                                                              !!errors.length,
                                                          },
                                                          attrs: {
                                                            state: errors[0]
                                                              ? false
                                                              : valid
                                                              ? true
                                                              : null,
                                                            reduce: function (
                                                              label
                                                            ) {
                                                              return label.value
                                                            },
                                                            placeholder: _vm.$t(
                                                              "Choose_publish_status"
                                                            ),
                                                            options: [
                                                              {
                                                                label: "normal",
                                                                value: "normal",
                                                              },
                                                              {
                                                                label: "new",
                                                                value: "new",
                                                              },
                                                              {
                                                                label: "top",
                                                                value: "top",
                                                              },
                                                            ],
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.movie
                                                                .publish_status,
                                                            callback: function (
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.movie,
                                                                "publish_status",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "movie.publish_status",
                                                          },
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "b-form-invalid-feedback",
                                                          [
                                                            _vm._v(
                                                              _vm._s(errors[0])
                                                            ),
                                                          ]
                                                        ),
                                                      ],
                                                      1
                                                    )
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              1798556170
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          staticClass: "mb-2",
                                          attrs: { lg: "6", md: "6", sm: "12" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "age",
                                              rules: { required: true },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (ref) {
                                                    var valid = ref.valid
                                                    var errors = ref.errors
                                                    return _c(
                                                      "b-form-group",
                                                      {
                                                        attrs: {
                                                          label: _vm.$t("age"),
                                                        },
                                                      },
                                                      [
                                                        _c("v-select", {
                                                          class: {
                                                            "is-invalid":
                                                              !!errors.length,
                                                          },
                                                          attrs: {
                                                            state: errors[0]
                                                              ? false
                                                              : valid
                                                              ? true
                                                              : null,
                                                            reduce: function (
                                                              label
                                                            ) {
                                                              return label.value
                                                            },
                                                            placeholder:
                                                              _vm.$t(
                                                                "Choose_Method"
                                                              ),
                                                            options: [
                                                              {
                                                                label: "8",
                                                                value: "8",
                                                              },
                                                              {
                                                                label: "9",
                                                                value: "9",
                                                              },
                                                              {
                                                                label: "10",
                                                                value: "10",
                                                              },
                                                              {
                                                                label: "11",
                                                                value: "11",
                                                              },
                                                              {
                                                                label: "12",
                                                                value: "12",
                                                              },
                                                              {
                                                                label: "13",
                                                                value: "13",
                                                              },
                                                              {
                                                                label: "14",
                                                                value: "14",
                                                              },
                                                              {
                                                                label: "15",
                                                                value: "15",
                                                              },
                                                              {
                                                                label: "16",
                                                                value: "16",
                                                              },
                                                              {
                                                                label: "17",
                                                                value: "17",
                                                              },
                                                              {
                                                                label: "18",
                                                                value: "18",
                                                              },
                                                              {
                                                                label: "19",
                                                                value: "19",
                                                              },
                                                              {
                                                                label: "20",
                                                                value: "20",
                                                              },
                                                              {
                                                                label: "21",
                                                                value: "21",
                                                              },
                                                              {
                                                                label: "22",
                                                                value: "22",
                                                              },
                                                              {
                                                                label: "23",
                                                                value: "23",
                                                              },
                                                              {
                                                                label: "24",
                                                                value: "24",
                                                              },
                                                              {
                                                                label: "25",
                                                                value: "25",
                                                              },
                                                              {
                                                                label: "26",
                                                                value: "26",
                                                              },
                                                              {
                                                                label: "27",
                                                                value: "27",
                                                              },
                                                              {
                                                                label: "28",
                                                                value: "28",
                                                              },
                                                              {
                                                                label: "29",
                                                                value: "29",
                                                              },
                                                              {
                                                                label: "30",
                                                                value: "30",
                                                              },
                                                              {
                                                                label: "31",
                                                                value: "31",
                                                              },
                                                              {
                                                                label: "32",
                                                                value: "32",
                                                              },
                                                              {
                                                                label: "33",
                                                                value: "33",
                                                              },
                                                              {
                                                                label: "34",
                                                                value: "34",
                                                              },
                                                              {
                                                                label: "35",
                                                                value: "35",
                                                              },
                                                              {
                                                                label: "36",
                                                                value: "36",
                                                              },
                                                              {
                                                                label: "37",
                                                                value: "37",
                                                              },
                                                              {
                                                                label: "38",
                                                                value: "38",
                                                              },
                                                              {
                                                                label: "39",
                                                                value: "39",
                                                              },
                                                              {
                                                                label: "40",
                                                                value: "40",
                                                              },
                                                              {
                                                                label: "41",
                                                                value: "41",
                                                              },
                                                              {
                                                                label: "42",
                                                                value: "42",
                                                              },
                                                              {
                                                                label: "43",
                                                                value: "43",
                                                              },
                                                              {
                                                                label: "44",
                                                                value: "44",
                                                              },
                                                              {
                                                                label: "45",
                                                                value: "45",
                                                              },
                                                              {
                                                                label: "46",
                                                                value: "46",
                                                              },
                                                              {
                                                                label: "47",
                                                                value: "47",
                                                              },
                                                              {
                                                                label: "48",
                                                                value: "48",
                                                              },
                                                              {
                                                                label: "49",
                                                                value: "49",
                                                              },
                                                              {
                                                                label: "50",
                                                                value: "50",
                                                              },
                                                            ],
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.movie.age,
                                                            callback: function (
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.movie,
                                                                "age",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "movie.age",
                                                          },
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "b-form-invalid-feedback",
                                                          [
                                                            _vm._v(
                                                              _vm._s(errors[0])
                                                            ),
                                                          ]
                                                        ),
                                                      ],
                                                      1
                                                    )
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              3436727179
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          staticClass: "mb-2",
                                          attrs: { md: "6" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "rate",
                                              rules: {
                                                required: true,
                                                min: 1,
                                                max: 55,
                                              },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (
                                                    validationContext
                                                  ) {
                                                    return [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t("rate"),
                                                          },
                                                        },
                                                        [
                                                          _c("b-form-input", {
                                                            attrs: {
                                                              state:
                                                                _vm.getValidationState(
                                                                  validationContext
                                                                ),
                                                              "aria-describedby":
                                                                "Name-feedback",
                                                              label: "rate",
                                                              placeholder:
                                                                _vm.$t("rate"),
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.movie.rate,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.movie,
                                                                    "rate",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "movie.rate",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-invalid-feedback",
                                                            {
                                                              attrs: {
                                                                id: "Name-feedback",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  validationContext
                                                                    .errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              147709170
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          staticClass: "mb-2",
                                          attrs: { md: "6" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "Video_quality_1",
                                              rules: {
                                                required: true,
                                                min: 1,
                                                max: 55,
                                              },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (
                                                    validationContext
                                                  ) {
                                                    return [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t(
                                                                "Video_quality_1"
                                                              ),
                                                          },
                                                        },
                                                        [
                                                          _c("b-form-input", {
                                                            attrs: {
                                                              state:
                                                                _vm.getValidationState(
                                                                  validationContext
                                                                ),
                                                              "aria-describedby":
                                                                "Name-feedback",
                                                              label:
                                                                "Video_quality_1",
                                                              placeholder:
                                                                _vm.$t(
                                                                  "Video_quality_1"
                                                                ),
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.movie
                                                                  .video_q1,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.movie,
                                                                    "video_q1",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "movie.video_q1",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-invalid-feedback",
                                                            {
                                                              attrs: {
                                                                id: "Name-feedback",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  validationContext
                                                                    .errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              1261846993
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          staticClass: "mb-2",
                                          attrs: { md: "6" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "Video_quality_2",
                                              rules: {
                                                required: true,
                                                min: 1,
                                                max: 55,
                                              },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (
                                                    validationContext
                                                  ) {
                                                    return [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t(
                                                                "Video_quality_2"
                                                              ),
                                                          },
                                                        },
                                                        [
                                                          _c("b-form-input", {
                                                            attrs: {
                                                              state:
                                                                _vm.getValidationState(
                                                                  validationContext
                                                                ),
                                                              "aria-describedby":
                                                                "Name-feedback",
                                                              label:
                                                                "Video_quality_2",
                                                              placeholder:
                                                                _vm.$t(
                                                                  "Video_quality_2"
                                                                ),
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.movie
                                                                  .video_q2,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.movie,
                                                                    "video_q2",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "movie.video_q2",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-invalid-feedback",
                                                            {
                                                              attrs: {
                                                                id: "Name-feedback",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  validationContext
                                                                    .errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              3412430353
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          staticClass: "mb-2",
                                          attrs: { md: "6" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "Video_quality_2",
                                              rules: {
                                                required: true,
                                                min: 1,
                                                max: 55,
                                              },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (
                                                    validationContext
                                                  ) {
                                                    return [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t(
                                                                "Video_quality_3"
                                                              ),
                                                          },
                                                        },
                                                        [
                                                          _c("b-form-input", {
                                                            attrs: {
                                                              state:
                                                                _vm.getValidationState(
                                                                  validationContext
                                                                ),
                                                              "aria-describedby":
                                                                "Name-feedback",
                                                              label:
                                                                "Video_quality_3",
                                                              placeholder:
                                                                _vm.$t(
                                                                  "Video_quality_3"
                                                                ),
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.movie
                                                                  .video_q3,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.movie,
                                                                    "video_q3",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "movie.video_q3",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-invalid-feedback",
                                                            {
                                                              attrs: {
                                                                id: "Name-feedback",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  validationContext
                                                                    .errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              3637435089
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          staticClass: "mb-2",
                                          attrs: { lg: "6", md: "6", sm: "12" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "status",
                                              rules: { required: true },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (ref) {
                                                    var valid = ref.valid
                                                    var errors = ref.errors
                                                    return _c(
                                                      "b-form-group",
                                                      {
                                                        attrs: {
                                                          label:
                                                            _vm.$t("status"),
                                                        },
                                                      },
                                                      [
                                                        _c("v-select", {
                                                          class: {
                                                            "is-invalid":
                                                              !!errors.length,
                                                          },
                                                          attrs: {
                                                            state: errors[0]
                                                              ? false
                                                              : valid
                                                              ? true
                                                              : null,
                                                            reduce: function (
                                                              label
                                                            ) {
                                                              return label.value
                                                            },
                                                            placeholder:
                                                              _vm.$t(
                                                                "Choose_status"
                                                              ),
                                                            options: [
                                                              {
                                                                label:
                                                                  "Finished airing",
                                                                value:
                                                                  "Finished",
                                                              },
                                                              {
                                                                label:
                                                                  "Currently airing",
                                                                value: "airing",
                                                              },
                                                              {
                                                                label:
                                                                  "Not yet aired",
                                                                value:
                                                                  "not_airing",
                                                              },
                                                            ],
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.movie.status,
                                                            callback: function (
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.movie,
                                                                "status",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "movie.status",
                                                          },
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "b-form-invalid-feedback",
                                                          [
                                                            _vm._v(
                                                              _vm._s(errors[0])
                                                            ),
                                                          ]
                                                        ),
                                                      ],
                                                      1
                                                    )
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              1314197788
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          staticClass: "mb-2",
                                          attrs: { md: "6" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "aired",
                                              rules: {
                                                required: true,
                                                min: 2,
                                                max: 55,
                                              },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (
                                                    validationContext
                                                  ) {
                                                    return [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t("aired"),
                                                          },
                                                        },
                                                        [
                                                          _c("b-form-input", {
                                                            attrs: {
                                                              state:
                                                                _vm.getValidationState(
                                                                  validationContext
                                                                ),
                                                              "aria-describedby":
                                                                "Name-feedback",
                                                              label: "aired",
                                                              placeholder:
                                                                _vm.$t("aired"),
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.movie.aired,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.movie,
                                                                    "aired",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "movie.aired",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-invalid-feedback",
                                                            {
                                                              attrs: {
                                                                id: "Name-feedback",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  validationContext
                                                                    .errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              627422130
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          staticClass: "mb-2",
                                          attrs: { md: "6" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "aired_start_date",
                                              rules: {
                                                required: true,
                                                min: 2,
                                                max: 55,
                                              },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (
                                                    validationContext
                                                  ) {
                                                    return [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t(
                                                                "aired_start_date"
                                                              ),
                                                          },
                                                        },
                                                        [
                                                          _c("b-form-input", {
                                                            attrs: {
                                                              state:
                                                                _vm.getValidationState(
                                                                  validationContext
                                                                ),
                                                              "aria-describedby":
                                                                "Name-feedback",
                                                              label:
                                                                "aired_start_date",
                                                              placeholder:
                                                                _vm.$t(
                                                                  "aired_start_date"
                                                                ),
                                                              type: "date",
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.movie
                                                                  .aired_start_date,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.movie,
                                                                    "aired_start_date",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "movie.aired_start_date",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-invalid-feedback",
                                                            {
                                                              attrs: {
                                                                id: "Name-feedback",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  validationContext
                                                                    .errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              1572586248
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          staticClass: "mb-2",
                                          attrs: { md: "6" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "aired_end_date",
                                              rules: {
                                                required: true,
                                                min: 2,
                                                max: 55,
                                              },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (
                                                    validationContext
                                                  ) {
                                                    return [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t(
                                                                "aired_end_date"
                                                              ),
                                                          },
                                                        },
                                                        [
                                                          _c("b-form-input", {
                                                            attrs: {
                                                              state:
                                                                _vm.getValidationState(
                                                                  validationContext
                                                                ),
                                                              "aria-describedby":
                                                                "Name-feedback",
                                                              label:
                                                                "aired_end_date",
                                                              placeholder:
                                                                _vm.$t(
                                                                  "aired_end_date"
                                                                ),
                                                              type: "date",
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.movie
                                                                  .aired_end_date,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.movie,
                                                                    "aired_end_date",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "movie.aired_end_date",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-invalid-feedback",
                                                            {
                                                              attrs: {
                                                                id: "Name-feedback",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  validationContext
                                                                    .errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              589037672
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          staticClass: "mb-2",
                                          attrs: { md: "6" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "category",
                                              rules: { required: false },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (ref) {
                                                    var valid = ref.valid
                                                    var errors = ref.errors
                                                    return _c(
                                                      "b-form-group",
                                                      {
                                                        attrs: {
                                                          label:
                                                            _vm.$t("Categorie"),
                                                        },
                                                      },
                                                      [
                                                        _c("v-select", {
                                                          class: {
                                                            "is-invalid":
                                                              !!errors.length,
                                                          },
                                                          attrs: {
                                                            state: errors[0]
                                                              ? false
                                                              : valid
                                                              ? true
                                                              : null,
                                                            reduce: function (
                                                              label
                                                            ) {
                                                              return label.value
                                                            },
                                                            placeholder:
                                                              _vm.$t(
                                                                "Choose_Category"
                                                              ),
                                                            multiple: "",
                                                            options:
                                                              _vm.categories.map(
                                                                function (
                                                                  categories
                                                                ) {
                                                                  return {
                                                                    label:
                                                                      categories.name,
                                                                    value:
                                                                      categories.id,
                                                                  }
                                                                }
                                                              ),
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.movie
                                                                .category_id,
                                                            callback: function (
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.movie,
                                                                "category_id",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "movie.category_id",
                                                          },
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "b-form-invalid-feedback",
                                                          [
                                                            _vm._v(
                                                              _vm._s(errors[0])
                                                            ),
                                                          ]
                                                        ),
                                                      ],
                                                      1
                                                    )
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              1192012184
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          staticClass: "mb-2",
                                          attrs: { md: "12" },
                                        },
                                        [
                                          _c(
                                            "b-form-group",
                                            {
                                              attrs: {
                                                label: _vm.$t("story_ar"),
                                              },
                                            },
                                            [
                                              _c("textarea", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: _vm.movie.story_ar,
                                                    expression:
                                                      "movie.story_ar",
                                                  },
                                                ],
                                                staticClass: "form-control",
                                                attrs: {
                                                  rows: "4",
                                                  placeholder:
                                                    _vm.$t("story_ar"),
                                                },
                                                domProps: {
                                                  value: _vm.movie.story_ar,
                                                },
                                                on: {
                                                  input: function ($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.movie,
                                                      "story_ar",
                                                      $event.target.value
                                                    )
                                                  },
                                                },
                                              }),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          staticClass: "mb-2",
                                          attrs: { md: "12" },
                                        },
                                        [
                                          _c(
                                            "b-form-group",
                                            {
                                              attrs: {
                                                label: _vm.$t("story_en"),
                                              },
                                            },
                                            [
                                              _c("textarea", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: _vm.movie.story_en,
                                                    expression:
                                                      "movie.story_en",
                                                  },
                                                ],
                                                staticClass: "form-control",
                                                attrs: {
                                                  rows: "4",
                                                  placeholder:
                                                    _vm.$t("story_en"),
                                                },
                                                domProps: {
                                                  value: _vm.movie.story_en,
                                                },
                                                on: {
                                                  input: function ($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.movie,
                                                      "story_en",
                                                      $event.target.value
                                                    )
                                                  },
                                                },
                                              }),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          staticClass: "mb-2",
                                          attrs: {
                                            lg: "12",
                                            md: "12",
                                            sm: "12",
                                          },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "premium",
                                              rules: { required: true },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (ref) {
                                                    var valid = ref.valid
                                                    var errors = ref.errors
                                                    return _c(
                                                      "b-form-group",
                                                      {
                                                        attrs: {
                                                          label:
                                                            _vm.$t("premium"),
                                                        },
                                                      },
                                                      [
                                                        _c("v-select", {
                                                          class: {
                                                            "is-invalid":
                                                              !!errors.length,
                                                          },
                                                          attrs: {
                                                            state: errors[0]
                                                              ? false
                                                              : valid
                                                              ? true
                                                              : null,
                                                            reduce: function (
                                                              label
                                                            ) {
                                                              return label.value
                                                            },
                                                            placeholder:
                                                              _vm.$t(
                                                                "Choose_premium"
                                                              ),
                                                            options: [
                                                              {
                                                                label: "No",
                                                                value: "no",
                                                              },
                                                              {
                                                                label: "Yes",
                                                                value: "yes",
                                                              },
                                                            ],
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.movie.premium,
                                                            callback: function (
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.movie,
                                                                "premium",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "movie.premium",
                                                          },
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "b-form-invalid-feedback",
                                                          [
                                                            _vm._v(
                                                              _vm._s(errors[0])
                                                            ),
                                                          ]
                                                        ),
                                                      ],
                                                      1
                                                    )
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              249574408
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { md: "4" } },
                        [
                          _c("b-card", [
                            _c("div", { staticClass: "card-header" }, [
                              _c("h5", [
                                _vm._v(_vm._s(_vm.$t("MultipleImage"))),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "card-body" },
                              [
                                _c(
                                  "b-row",
                                  { staticClass: "form-group" },
                                  [
                                    _c("b-col", { attrs: { md: "12 mb-5" } }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "d-flex justify-content-center",
                                          attrs: {
                                            id: "my-strictly-unique-vue-upload-multiple-image",
                                          },
                                        },
                                        [
                                          _c("vue-upload-multiple-image", {
                                            attrs: {
                                              dragText:
                                                "Drag & Drop Multiple images For movie",
                                              dropText: "Drag & Drop image",
                                              browseText: "(or) Select",
                                              accept:
                                                "image/gif,image/jpeg,image/png,image/bmp,image/jpg",
                                              primaryText: "success",
                                              markIsPrimaryText: "success",
                                              popupText:
                                                "have been successfully uploaded",
                                              "data-images": _vm.images,
                                              idUpload: "myIdUpload",
                                              showEdit: false,
                                            },
                                            on: {
                                              "upload-success":
                                                _vm.uploadImageSuccess,
                                              "before-remove": _vm.beforeRemove,
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ]),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "mt-3", attrs: { md: "12" } },
                        [
                          _c(
                            "b-button",
                            {
                              attrs: {
                                variant: "primary",
                                type: "submit",
                                disabled: _vm.SubmitProcessing,
                              },
                            },
                            [_vm._v(_vm._s(_vm.$t("submit")))]
                          ),
                          _vm._v(" "),
                          _vm.SubmitProcessing ? _vm._m(0) : _vm._e(),
                        ],
                        1
                      ),
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
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "typo__p" }, [
      _c("div", { staticClass: "spinner sm spinner-primary mt-3" }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/src/views/app/pages/movies/Edit_movie.vue":
/*!*************************************************************!*\
  !*** ./resources/src/views/app/pages/movies/Edit_movie.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_movie_vue_vue_type_template_id_0d1ab6cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit_movie.vue?vue&type=template&id=0d1ab6cc& */ "./resources/src/views/app/pages/movies/Edit_movie.vue?vue&type=template&id=0d1ab6cc&");
/* harmony import */ var _Edit_movie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit_movie.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/movies/Edit_movie.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_movie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_movie_vue_vue_type_template_id_0d1ab6cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_movie_vue_vue_type_template_id_0d1ab6cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/movies/Edit_movie.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/movies/Edit_movie.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/src/views/app/pages/movies/Edit_movie.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_movie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit_movie.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/movies/Edit_movie.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_movie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/movies/Edit_movie.vue?vue&type=template&id=0d1ab6cc&":
/*!********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/movies/Edit_movie.vue?vue&type=template&id=0d1ab6cc& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_movie_vue_vue_type_template_id_0d1ab6cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit_movie.vue?vue&type=template&id=0d1ab6cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/movies/Edit_movie.vue?vue&type=template&id=0d1ab6cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_movie_vue_vue_type_template_id_0d1ab6cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_movie_vue_vue_type_template_id_0d1ab6cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);