(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail_movie"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/episodes/index_episodes_list.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/episodes/index_episodes_list.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: "Episodes"
  },
  data: function data() {
    return {
      serverParams: {
        sort: {
          field: "id",
          type: "desc"
        },
        page: 1,
        perPage: 10
      },
      selectedIds: [],
      ImportProcessing: false,
      data: new FormData(),
      import_episodes: "",
      search: "",
      totalRows: "",
      isLoading: true,
      spinner: false,
      limit: "10",
      Filter_name: "",
      Filter_en_name: "",
      Filter_ar_name: "",
      episodes: {}
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["currentUserPermissions"])), {}, {
    columns: function columns() {
      return [{
        label: this.$t("image"),
        field: "image",
        type: "image",
        html: true,
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("ar_Name_episodes"),
        field: "ar_name",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("en_Name_episodes"),
        field: "en_name",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("status"),
        field: "status",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Action"),
        field: "actions",
        html: true,
        tdClass: "text-right",
        thClass: "text-right",
        sortable: false
      }];
    }
  }),
  methods: {
    //-------------------------------------- Episodes PDF ------------------------------\
    Episode_PDF: function Episode_PDF() {
      var self = this;
      var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_2__["default"]("p", "pt");
      var columns = [{
        title: "ar_name",
        dataKey: "ar_name"
      }, {
        title: "en_name",
        dataKey: "en_name"
      }];
      pdf.autoTable(columns, self.episodes);
      pdf.text("Episode List", 40, 25);
      pdf.save("Episode_List.pdf");
    },
    //----------------------------------- Show import episodes -------------------------------\
    Show_import_episodes: function Show_import_episodes() {
      this.$bvModal.show("importEpisodes");
    },
    //------------------------------ Event Import episodes -------------------------------\
    onFileSelected: function onFileSelected(e) {
      this.import_episodes = "";
      var file = e.target.files[0];
      var errorFilesize;

      if (file["size"] < 1048576) {
        // 1 mega = 1,048,576 Bytes
        errorFilesize = false;
      } else {
        this.makeToast("danger", this.$t("file_size_must_be_less_than_1_mega"), this.$t("Failed"));
      }

      if (errorFilesize === false) {
        this.import_episodes = file;
      }
    },
    //----------------------------------------Submit  import episodes-----------------\
    Submit_import: function Submit_import() {
      var _this = this;

      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      var self = this;
      self.ImportProcessing = true;
      self.data.append("episodes", self.import_episodes);
      axios.post("Episodes/import/csv", self.data).then(function (response) {
        self.ImportProcessing = false;

        if (response.data.status === true) {
          _this.makeToast("success", _this.$t("Successfully_Imported"), _this.$t("Success"));

          Fire.$emit("Event_import");
        } else if (response.data.status === false) {
          _this.makeToast("danger", _this.$t("field_must_be_in_csv_format"), _this.$t("Failed"));
        } // Complete the animation of theprogress bar.


        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
      })["catch"](function (error) {
        self.ImportProcessing = false; // Complete the animation of theprogress bar.

        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();

        _this.makeToast("danger", _this.$t("Please_follow_the_import_instructions"), _this.$t("Failed"));
      });
    },
    //------ Toast
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    //----Update Params Table
    updateParams: function updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },
    //---- Event Page Change
    onPageChange: function onPageChange(_ref) {
      var currentPage = _ref.currentPage;

      if (this.serverParams.page !== currentPage) {
        this.updateParams({
          page: currentPage
        });
        this.Get_Episodes(currentPage);
      }
    },
    //---- Event Per Page Change
    onPerPageChange: function onPerPageChange(_ref2) {
      var currentPerPage = _ref2.currentPerPage;

      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.updateParams({
          page: 1,
          perPage: currentPerPage
        });
        this.Get_Episodes(1);
      }
    },
    //---- Event Select Rows
    selectionChanged: function selectionChanged(_ref3) {
      var _this2 = this;

      var selectedRows = _ref3.selectedRows;
      this.selectedIds = [];
      selectedRows.forEach(function (row, index) {
        _this2.selectedIds.push(row.id);
      });
    },
    //---- Event Sort Change
    onSortChange: function onSortChange(params) {
      var field = "";

      if (params[0].field == "brand") {
        field = "brand_id";
      } else if (params[0].field == "category") {
        field = "category_id";
      } else {
        field = params[0].field;
      }

      this.updateParams({
        sort: {
          type: params[0].type,
          field: field
        }
      });
      this.Get_Episodes(this.serverParams.page);
    },
    //---- Event Search
    onSearch: function onSearch(value) {
      this.search = value.searchTerm;
      this.Get_Episodes(this.serverParams.page);
    },
    //------ Reset Filter
    Reset_Filter: function Reset_Filter() {
      this.search = "";
      this.Filter_name = "";
      this.Filter_ar_name = "";
      this.Filter_en_name = "";
      this.Get_Episodes(this.serverParams.page);
    },
    //------------------------------------ Episodes Excel ------------------------------\
    Episode_Excel: function Episode_Excel() {
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      axios.get("Episodes/export/Excel", {
        responseType: "blob",
        // important
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "List_Episodes.xlsx");
        document.body.appendChild(link);
        link.click(); // Complete the animation of theprogress bar.

        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
      })["catch"](function () {
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
      });
    },
    // Simply replaces null values with strings=''
    setToStrings: function setToStrings() {},
    //----------------------------------- Get All Episodes ------------------------------\
    Get_Episodes: function Get_Episodes(page) {
      var _this3 = this;

      // Start the progress bar.
      var id = this.$route.params.id;
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      this.setToStrings();
      axios.get("Episodes?page=" + page + "&en_name=" + this.Filter_en_name + "&id=" + id + "&ar_name=" + this.Filter_ar_name + "&SortField=" + this.serverParams.sort.field + "&SortType=" + this.serverParams.sort.type + "&search=" + this.search + "&limit=" + this.limit).then(function (response) {
        _this3.episodes = response.data.episodes;
        _this3.totalRows = response.data.totalRows; // Complete the animation of theprogress bar.

        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        _this3.isLoading = false;
      })["catch"](function (response) {
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
        setTimeout(function () {
          _this3.isLoading = false;
        }, 500);
      });
    },
    //----------------------------------- Remove Episode ------------------------------\
    Remove_Episode: function Remove_Episode(id) {
      var _this4 = this;

      this.$swal({
        title: this.$t("Delete.Title"),
        text: this.$t("Delete.Text"),
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Delete.cancelButtonText"),
        confirmButtonText: this.$t("Delete.confirmButtonText")
      }).then(function (result) {
        if (result.value) {
          // Start the progress bar.
          nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
          nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
          axios["delete"]("Episodes/" + id).then(function () {
            _this4.$swal(_this4.$t("Delete.Deleted"), _this4.$t("Delete.EpisodeDeleted"), "success");

            Fire.$emit("Delete_Episode");
          })["catch"](function () {
            // Complete the animation of theprogress bar.
            setTimeout(function () {
              return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
            }, 500);

            _this4.$swal(_this4.$t("Delete.Failed"), _this4.$t("Delete.AlreadyLinked"), "warning");
          });
        }
      });
    },
    //---- Delete episodes by selection
    delete_by_selected: function delete_by_selected() {
      var _this5 = this;

      this.$swal({
        title: this.$t("Delete.Title"),
        text: this.$t("Delete.Text"),
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Delete.cancelButtonText"),
        confirmButtonText: this.$t("Delete.confirmButtonText")
      }).then(function (result) {
        if (result.value) {
          // Start the progress bar.
          nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
          nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
          axios.post("Episodes/delete/by_selection", {
            selectedIds: _this5.selectedIds
          }).then(function () {
            _this5.$swal(_this5.$t("Delete.Deleted"), _this5.$t("Delete.EpisodeDeleted"), "success");

            Fire.$emit("Delete_Episode");
          })["catch"](function () {
            // Complete the animation of theprogress bar.
            setTimeout(function () {
              return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
            }, 500);

            _this5.$swal(_this5.$t("Delete.Failed"), _this5.$t("Delete.Therewassomethingwronge"), "warning");
          });
        }
      });
    }
  },
  //end Methods
  //-----------------------------Created function-------------------
  created: function created() {
    var _this6 = this;

    this.Get_Episodes(1);
    Fire.$on("Delete_Episode", function () {
      _this6.Get_Episodes(_this6.serverParams.page); // Complete the animation of theprogress bar.


      setTimeout(function () {
        return nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
      }, 500);
    });
    Fire.$on("Event_import", function () {
      setTimeout(function () {
        _this6.Get_Episodes(_this6.serverParams.page);

        _this6.$bvModal.hide("importEpisodes");
      }, 500);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/movies/Detail_Movie.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/movies/Detail_Movie.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: "Detail Movie"
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
      movie: {},
      roles: {},
      variants: []
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["currentUser"])),
  methods: {
    //------- printmovie
    print_movie: function print_movie() {
      var divContents = document.getElementById("print_movie").innerHTML;
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
    //----------------------------------- Get Details Movie ------------------------------\
    showDetails: function showDetails() {
      var _this = this;

      var id = this.$route.params.id;
      axios.get("Movies/Detail/".concat(id)).then(function (response) {
        _this.movie = response.data;
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/episodes/index_episodes_list.vue?vue&type=template&id=03bb181e&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/episodes/index_episodes_list.vue?vue&type=template&id=03bb181e& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
        attrs: { page: _vm.$t("episodesListt"), folder: _vm.$t("Episodes") },
      }),
      _vm._v(" "),
      _vm.isLoading
        ? _c("div", {
            staticClass: "loading_page spinner spinner-primary mr-3",
          })
        : _c(
            "div",
            [
              _c(
                "vue-good-table",
                {
                  attrs: {
                    mode: "remote",
                    columns: _vm.columns,
                    totalRows: _vm.totalRows,
                    rows: _vm.episodes,
                    "select-options": {
                      enabled: true,
                      clearSelectionText: "",
                    },
                    "search-options": {
                      enabled: true,
                      placeholder: _vm.$t("Search_this_table"),
                    },
                    "pagination-options": {
                      enabled: true,
                      mode: "records",
                      nextLabel: "next",
                      prevLabel: "prev",
                    },
                    styleClass: "tableOne vgt-table",
                  },
                  on: {
                    "on-page-change": _vm.onPageChange,
                    "on-per-page-change": _vm.onPerPageChange,
                    "on-sort-change": _vm.onSortChange,
                    "on-search": _vm.onSearch,
                    "on-selected-rows-change": _vm.selectionChanged,
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "table-row",
                      fn: function (props) {
                        return [
                          props.column.field == "actions"
                            ? _c(
                                "span",
                                [
                                  _c(
                                    "router-link",
                                    {
                                      directives: [
                                        {
                                          name: "b-tooltip",
                                          rawName: "v-b-tooltip.hover",
                                          modifiers: { hover: true },
                                        },
                                      ],
                                      attrs: {
                                        title: "View",
                                        to: {
                                          name: "detail_episode",
                                          params: { id: props.row.id },
                                        },
                                      },
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "i-Eye text-25 text-info",
                                      }),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "router-link",
                                    {
                                      directives: [
                                        {
                                          name: "b-tooltip",
                                          rawName: "v-b-tooltip.hover",
                                          modifiers: { hover: true },
                                        },
                                      ],
                                      attrs: {
                                        title: "Edit",
                                        to: {
                                          name: "edit_episode",
                                          params: { id: props.row.id },
                                        },
                                      },
                                    },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "i-Edit text-25 text-success",
                                      }),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm.currentUserPermissions &&
                                  _vm.currentUserPermissions.includes(
                                    "products_delete"
                                  )
                                    ? _c(
                                        "a",
                                        {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover",
                                              modifiers: { hover: true },
                                            },
                                          ],
                                          attrs: { title: "Delete" },
                                          on: {
                                            click: function ($event) {
                                              return _vm.Remove_Episode(
                                                props.row.id
                                              )
                                            },
                                          },
                                        },
                                        [
                                          _c("i", {
                                            staticClass:
                                              "i-Close-Window text-25 text-danger",
                                          }),
                                        ]
                                      )
                                    : _vm._e(),
                                ],
                                1
                              )
                            : props.column.field == "image"
                            ? _c(
                                "span",
                                [
                                  _c("b-img", {
                                    attrs: {
                                      thumbnail: "",
                                      height: "50",
                                      width: "50",
                                      fluid: "",
                                      src:
                                        "/images/episodes/" + props.row.image,
                                      alt: "image",
                                    },
                                  }),
                                ],
                                1
                              )
                            : _vm._e(),
                        ]
                      },
                    },
                  ]),
                },
                [
                  _c(
                    "div",
                    {
                      attrs: { slot: "selected-row-actions" },
                      slot: "selected-row-actions",
                    },
                    [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-danger",
                          on: {
                            click: function ($event) {
                              return _vm.delete_by_selected()
                            },
                          },
                        },
                        [_vm._v(_vm._s(_vm.$t("Del")))]
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "mt-2 mb-3",
                      attrs: { slot: "table-actions" },
                      slot: "table-actions",
                    },
                    [
                      _vm.currentUserPermissions &&
                      _vm.currentUserPermissions.includes("episodes_add")
                        ? _c(
                            "router-link",
                            {
                              staticClass:
                                "btn-sm btn btn-primary btn-icon m-1",
                              attrs: { to: "/app/episodes/store" },
                            },
                            [
                              _c("span", { staticClass: "ul-btn__icon" }, [
                                _c("i", { staticClass: "i-Add" }),
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "ul-btn__text ml-1" }, [
                                _vm._v(_vm._s(_vm.$t("Add"))),
                              ]),
                            ]
                          )
                        : _vm._e(),
                    ],
                    1
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "b-sidebar",
                {
                  attrs: {
                    id: "sidebar-right",
                    title: _vm.$t("Filter"),
                    "bg-variant": "white",
                    right: "",
                    shadow: "",
                  },
                },
                [
                  _c(
                    "div",
                    { staticClass: "px-3 py-2" },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { md: "12" } },
                            [
                              _c(
                                "b-form-group",
                                { attrs: { label: _vm.$t("ar_name") } },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      label: "ar Name Episode",
                                      placeholder: _vm.$t("SearchByName"),
                                    },
                                    model: {
                                      value: _vm.Filter_ar_name,
                                      callback: function ($$v) {
                                        _vm.Filter_ar_name = $$v
                                      },
                                      expression: "Filter_ar_name",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { md: "12" } },
                            [
                              _c(
                                "b-form-group",
                                { attrs: { label: _vm.$t("En_name") } },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      label: "en Name Episode",
                                      placeholder: _vm.$t("SearchByName"),
                                    },
                                    model: {
                                      value: _vm.Filter_en_name,
                                      callback: function ($$v) {
                                        _vm.Filter_en_name = $$v
                                      },
                                      expression: "Filter_en_name",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { md: "6", sm: "12" } },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: {
                                    variant: "primary m-1",
                                    size: "sm",
                                    block: "",
                                  },
                                  on: {
                                    click: function ($event) {
                                      return _vm.Get_Episodes(
                                        _vm.serverParams.page
                                      )
                                    },
                                  },
                                },
                                [
                                  _c("i", { staticClass: "i-Filter-2" }),
                                  _vm._v(
                                    "\n             " +
                                      _vm._s(_vm.$t("Filter")) +
                                      "\n            "
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { md: "6", sm: "12" } },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: {
                                    variant: "danger m-1",
                                    size: "sm",
                                    block: "",
                                  },
                                  on: {
                                    click: function ($event) {
                                      return _vm.Reset_Filter()
                                    },
                                  },
                                },
                                [
                                  _c("i", { staticClass: "i-Power-2" }),
                                  _vm._v(
                                    "\n             " +
                                      _vm._s(_vm.$t("Reset")) +
                                      "\n            "
                                  ),
                                ]
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
                ]
              ),
              _vm._v(" "),
              _c(
                "b-modal",
                {
                  attrs: {
                    "ok-only": "",
                    "ok-title": "Cancel",
                    size: "md",
                    id: "importEpisodes",
                    title: _vm.$t("import_episodes"),
                  },
                },
                [
                  _c(
                    "b-form",
                    {
                      attrs: { enctype: "multipart/form-data" },
                      on: {
                        submit: function ($event) {
                          $event.preventDefault()
                          return _vm.Submit_import($event)
                        },
                      },
                    },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            {
                              staticClass: "mb-3",
                              attrs: { md: "12", sm: "12" },
                            },
                            [
                              _c(
                                "b-form-group",
                                [
                                  _c("input", {
                                    attrs: {
                                      type: "file",
                                      label: "Choose File",
                                    },
                                    on: { change: _vm.onFileSelected },
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "b-form-invalid-feedback",
                                    {
                                      staticClass: "d-block",
                                      attrs: { id: "File-feedback" },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.$t("field_must_be_in_csv_format")
                                        )
                                      ),
                                    ]
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
                            { attrs: { md: "6", sm: "12" } },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: {
                                    type: "submit",
                                    variant: "primary",
                                    disabled: _vm.ImportProcessing,
                                    size: "sm",
                                    block: "",
                                  },
                                },
                                [_vm._v(_vm._s(_vm.$t("submit")))]
                              ),
                              _vm._v(" "),
                              _vm.ImportProcessing ? _vm._m(0) : _vm._e(),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { md: "6", sm: "12" } },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: {
                                    href: "/import/exemples/import_episodes.csv",
                                    variant: "info",
                                    size: "sm",
                                    block: "",
                                  },
                                },
                                [_vm._v(_vm._s(_vm.$t("Download_exemple")))]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-col", { attrs: { md: "12", sm: "12" } }, [
                            _c(
                              "table",
                              {
                                staticClass:
                                  "table table-bordered table-sm mt-4",
                              },
                              [
                                _c("tbody", [
                                  _c("tr", [
                                    _c("td", [
                                      _vm._v(
                                        _vm._s(_vm.$t("en_Name_episode")) + " "
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c("th", [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "badge badge-outline-success",
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(_vm.$t("Field_is_required"))
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ]),
                                  _vm._v(" "),
                                  _c("tr", [
                                    _c("td", [
                                      _vm._v(_vm._s(_vm.$t("ar_Name_episode"))),
                                    ]),
                                    _vm._v(" "),
                                    _c("th", [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "badge badge-outline-success",
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(_vm.$t("Field_is_required"))
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ]),
                                ]),
                              ]
                            ),
                          ]),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/movies/Detail_Movie.vue?vue&type=template&id=29bc277e&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/movies/Detail_Movie.vue?vue&type=template&id=29bc277e& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
        attrs: { page: _vm.$t("MovieDetails"), folder: _vm.$t("Movies") },
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
                    { attrs: { id: "print_movie" } },
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
                                    " " + _vm._s(_vm.$t("Name_ar_name_mov"))
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(" " + _vm._s(_vm.movie.ar_name)),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [
                                  _vm._v(
                                    " " + _vm._s(_vm.$t("Name_en_nameMov"))
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(" " + _vm._s(_vm.movie.en_name)),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v(" " + _vm._s(_vm.$t("age")))]),
                                _vm._v(" "),
                                _c("th", [_vm._v(" " + _vm._s(_vm.movie.age))]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [
                                  _vm._v(" " + _vm._s(_vm.$t("rate"))),
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(" " + _vm._s(_vm.movie.rate)),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [
                                  _vm._v(" " + _vm._s(_vm.$t("status"))),
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(" " + _vm._s(_vm.movie.status)),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [
                                  _vm._v(" " + _vm._s(_vm.$t("aired"))),
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(" " + _vm._s(_vm.movie.aired)),
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
                                    " " + _vm._s(_vm.movie.aired_start_date)
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
                                    " " + _vm._s(_vm.movie.aired_end_date)
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
                                  _vm._v(" " + _vm._s(_vm.movie.premium)),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [
                                  _vm._v(" " + _vm._s(_vm.$t("story_ar"))),
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(" " + _vm._s(_vm.movie.story_ar)),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [
                                  _vm._v(" " + _vm._s(_vm.$t("story_en"))),
                                ]),
                                _vm._v(" "),
                                _c("th", [
                                  _vm._v(" " + _vm._s(_vm.movie.story_en)),
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
                                  _vm.movie.images,
                                  function (image, index) {
                                    return _c("b-carousel-slide", {
                                      key: index,
                                      attrs: {
                                        "img-src": "/images/movies/" + image,
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

/***/ "./resources/src/views/app/pages/episodes/index_episodes_list.vue":
/*!************************************************************************!*\
  !*** ./resources/src/views/app/pages/episodes/index_episodes_list.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_episodes_list_vue_vue_type_template_id_03bb181e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_episodes_list.vue?vue&type=template&id=03bb181e& */ "./resources/src/views/app/pages/episodes/index_episodes_list.vue?vue&type=template&id=03bb181e&");
/* harmony import */ var _index_episodes_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index_episodes_list.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/episodes/index_episodes_list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_episodes_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_episodes_list_vue_vue_type_template_id_03bb181e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_episodes_list_vue_vue_type_template_id_03bb181e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/episodes/index_episodes_list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/episodes/index_episodes_list.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/episodes/index_episodes_list.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_episodes_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index_episodes_list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/episodes/index_episodes_list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_episodes_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/episodes/index_episodes_list.vue?vue&type=template&id=03bb181e&":
/*!*******************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/episodes/index_episodes_list.vue?vue&type=template&id=03bb181e& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_episodes_list_vue_vue_type_template_id_03bb181e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index_episodes_list.vue?vue&type=template&id=03bb181e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/episodes/index_episodes_list.vue?vue&type=template&id=03bb181e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_episodes_list_vue_vue_type_template_id_03bb181e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_episodes_list_vue_vue_type_template_id_03bb181e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/views/app/pages/movies/Detail_Movie.vue":
/*!***************************************************************!*\
  !*** ./resources/src/views/app/pages/movies/Detail_Movie.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Detail_Movie_vue_vue_type_template_id_29bc277e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Detail_Movie.vue?vue&type=template&id=29bc277e& */ "./resources/src/views/app/pages/movies/Detail_Movie.vue?vue&type=template&id=29bc277e&");
/* harmony import */ var _Detail_Movie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Detail_Movie.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/movies/Detail_Movie.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Detail_Movie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Detail_Movie_vue_vue_type_template_id_29bc277e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Detail_Movie_vue_vue_type_template_id_29bc277e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/movies/Detail_Movie.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/movies/Detail_Movie.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/src/views/app/pages/movies/Detail_Movie.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_Movie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Detail_Movie.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/movies/Detail_Movie.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_Movie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/movies/Detail_Movie.vue?vue&type=template&id=29bc277e&":
/*!**********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/movies/Detail_Movie.vue?vue&type=template&id=29bc277e& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_Movie_vue_vue_type_template_id_29bc277e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Detail_Movie.vue?vue&type=template&id=29bc277e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/movies/Detail_Movie.vue?vue&type=template&id=29bc277e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_Movie_vue_vue_type_template_id_29bc277e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_Movie_vue_vue_type_template_id_29bc277e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);