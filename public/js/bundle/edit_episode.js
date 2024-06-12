(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit_episode"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/episodes/Edit_episode.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/episodes/Edit_episode.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: "Edit Episode"
  },
  data: function data() {
    return {
      tag: "",
      len: 8,
      images: [],
      imageArray: [],
      change: false,
      isLoading: true,
      SubmitProcessing: false,
      data: new FormData(),
      Subcategories: [],
      units: [],
      units_sub: [],
      brands: [],
      roles: {},
      variants: [],
      videoFile: null,
      categories: [],
      episode: {
        filler: "",
        publish_status: "",
        episode_number: "",
        premium: "",
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
      },
      code_exist: ""
    };
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
      this.UploadEpisode(q);
    },
    UploadEpisode: function UploadEpisode(q) {
      var _this = this;

      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.start(); // NProgress.set(0.1);

      var self = this;
      var formData = new FormData();
      formData.append('video', this.videoFile);
      formData.append('q', q);
      self.SubmitProcessing = true; // Send Data with axios

      axios.post("Episodes/upload", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (response) {
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done();
        self.SubmitProcessing = false;
        console.log(response.data);

        if (response.data.q == "video_q1") {
          _this.episode.video_q1 = response.data.url;
        } else if (response.data.q == "video_q2") {
          _this.episode.video_q2 = response.data.url;
        } else if (response.data.q == "video_q3") {
          _this.episode.video_q3 = response.data.url;
        } // this.$router.push({ name: "index_episodes" });


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
    //------------- Submit Validation Update Episode
    Submit_Episode: function Submit_Episode() {
      var _this2 = this;

      this.$refs.Edit_Episode.validate().then(function (success) {
        if (!success) {
          _this2.makeToast("danger", _this2.$t("Please_fill_the_form_correctly"), _this2.$t("Failed"));
        } else {
          _this2.Update_Episode();
        }
      });
    },
    //------ Validation state fields
    getValidationState: function getValidationState(_ref) {
      var dirty = _ref.dirty,
          validated = _ref.validated,
          _ref$valid = _ref.valid,
          valid = _ref$valid === void 0 ? null : _ref$valid;
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
    //---------------------------------------Get Episode Elements ------------------------------\
    GetElements: function GetElements() {
      var _this3 = this;

      var id = this.$route.params.id;
      axios.get("Episodes/".concat(id, "/edit")).then(function (response) {
        _this3.episode = response.data.episode;
        _this3.categories = response.data.category;
        _this3.images = response.data.episode.images;
        _this3.isLoading = false;
      })["catch"](function (response) {
        setTimeout(function () {
          _this3.isLoading = false;
        }, 500);
      });
    },
    //------------------------------ Update Episode ------------------------------\
    Update_Episode: function Update_Episode() {
      var _this4 = this;

      nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.set(0.1);
      var self = this;
      self.SubmitProcessing = true; // append objet episode

      Object.entries(self.episode).forEach(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            key = _ref3[0],
            value = _ref3[1];

        self.data.append(key, value);
      }); //append array images

      if (self.images.length > 0) {
        for (var k = 0; k < self.images.length; k++) {
          Object.entries(self.images[k]).forEach(function (_ref4) {
            var _ref5 = _slicedToArray(_ref4, 2),
                key = _ref5[0],
                value = _ref5[1];

            self.data.append("images[" + k + "][" + key + "]", value);
          });
        }
      }

      self.data.append("_method", "put"); //send Data with axios

      axios.post("Episodes/" + this.episode.id, self.data).then(function (response) {
        nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done();
        self.SubmitProcessing = false;

        _this4.$router.push({
          name: "index_episodes"
        });

        _this4.makeToast("success", _this4.$t("Successfully_Updated"), _this4.$t("Success"));
      })["catch"](function (error) {
        if (error.errors.code.length > 0) {
          self.code_exist = error.errors.code[0];
        }

        nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done();

        _this4.makeToast("danger", _this4.$t("InvalidData"), _this4.$t("Failed"));

        self.SubmitProcessing = false;
      });
    }
  },
  //end Methods
  //-----------------------------Created function-------------------
  created: function created() {
    this.GetElements();
    this.imageArray = [];
    this.images = [];
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/episodes/Edit_episode.vue?vue&type=template&id=56f160b0&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/episodes/Edit_episode.vue?vue&type=template&id=56f160b0& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
        attrs: { page: _vm.$t("updateEpisodes"), folder: _vm.$t("Episodes") },
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
            { ref: "Edit_Episode" },
            [
              _c(
                "b-form",
                {
                  attrs: { enctype: "multipart/form-data" },
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.Submit_Episode($event)
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
                                          attrs: {
                                            lg: "12",
                                            md: "12",
                                            sm: "12",
                                          },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "filler",
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
                                                            _vm.$t("filler"),
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
                                                                "Choose_filler"
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
                                                              _vm.episode
                                                                .filler,
                                                            callback: function (
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.episode,
                                                                "filler",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "episode.filler",
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
                                              2636266354
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
                                              name: "ar_Name_episodes",
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
                                                                "ar_Name_episodes"
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
                                                                "ar_Name_episodes",
                                                              placeholder:
                                                                _vm.$t(
                                                                  "ar_Name_episodes"
                                                                ),
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.episode
                                                                  .ar_name,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.episode,
                                                                    "ar_name",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "episode.ar_name",
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
                                              827361414
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
                                              name: "en_Name_episodes",
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
                                                                "en_Name_episodes"
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
                                                                "en_Name_episodes",
                                                              placeholder:
                                                                _vm.$t(
                                                                  "en_Name_episodes"
                                                                ),
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.episode
                                                                  .en_name,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.episode,
                                                                    "en_name",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "episode.en_name",
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
                                              2305397126
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
                                                                _vm.episode
                                                                  .video_q1,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.episode,
                                                                    "video_q1",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "episode.video_q1",
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
                                              264725992
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
                                                                _vm.episode
                                                                  .video_q2,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.episode,
                                                                    "video_q2",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "episode.video_q2",
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
                                              3551396136
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
                                                                _vm.episode
                                                                  .video_q3,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.episode,
                                                                    "video_q3",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "episode.video_q3",
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
                                              842115560
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
                                              name: "Episode Number",
                                              rules: { regex: /^\d*\.?\d*$/ },
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
                                                                "episodeNumber"
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
                                                                "StockAlert-feedback",
                                                              label:
                                                                "episode_number",
                                                              placeholder:
                                                                _vm.$t(
                                                                  "episode_number"
                                                                ),
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.episode
                                                                  .episode_number,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.episode,
                                                                    "episode_number",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "episode.episode_number",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-invalid-feedback",
                                                            {
                                                              attrs: {
                                                                id: "StockAlert-feedback",
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
                                              877279764
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
                                                "Drag & Drop Multiple images For episode",
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

/***/ "./resources/src/views/app/pages/episodes/Edit_episode.vue":
/*!*****************************************************************!*\
  !*** ./resources/src/views/app/pages/episodes/Edit_episode.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_episode_vue_vue_type_template_id_56f160b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit_episode.vue?vue&type=template&id=56f160b0& */ "./resources/src/views/app/pages/episodes/Edit_episode.vue?vue&type=template&id=56f160b0&");
/* harmony import */ var _Edit_episode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit_episode.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/episodes/Edit_episode.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_episode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_episode_vue_vue_type_template_id_56f160b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_episode_vue_vue_type_template_id_56f160b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/episodes/Edit_episode.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/episodes/Edit_episode.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/src/views/app/pages/episodes/Edit_episode.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_episode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit_episode.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/episodes/Edit_episode.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_episode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/episodes/Edit_episode.vue?vue&type=template&id=56f160b0&":
/*!************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/episodes/Edit_episode.vue?vue&type=template&id=56f160b0& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_episode_vue_vue_type_template_id_56f160b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit_episode.vue?vue&type=template&id=56f160b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/episodes/Edit_episode.vue?vue&type=template&id=56f160b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_episode_vue_vue_type_template_id_56f160b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_episode_vue_vue_type_template_id_56f160b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);