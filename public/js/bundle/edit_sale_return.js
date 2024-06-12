(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit_sale_return"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/sale_return/edit_sale_return.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/sale_return/edit_sale_return.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: "Edit Return"
  },
  data: function data() {
    return {
      focused: false,
      timer: null,
      search_input: '',
      product_filter: [],
      isLoading: true,
      warehouses: [],
      SubmitProcessing: false,
      clients: [],
      products: [],
      details: [],
      detail: {},
      sale_return: {
        id: "",
        date: "",
        notes: "",
        statut: "",
        client_id: "",
        warehouse_id: "",
        tax_rate: 0,
        TaxNet: 0,
        shipping: 0,
        discount: 0
      },
      total: 0,
      GrandTotal: 0,
      product: {
        id: "",
        code: "",
        stock: "",
        quantity: 1,
        discount: "",
        DiscountNet: "",
        discount_Method: "",
        sale_unit_id: "",
        name: "",
        no_unit: "",
        unitSale: "",
        Net_price: "",
        Total_price: "",
        Unit_price: "",
        subtotal: "",
        product_id: "",
        detail_id: "",
        taxe: "",
        tax_percent: "",
        tax_method: "",
        product_variant_id: "",
        del: ""
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["currentUser"])),
  methods: {
    handleFocus: function handleFocus() {
      this.focused = true;
    },
    handleBlur: function handleBlur() {
      this.focused = false;
    },
    //--- Submit Validate Update Sale Return
    Submit_Sale_return: function Submit_Sale_return() {
      var _this = this;

      this.$refs.edit_sale_return.validate().then(function (success) {
        if (!success) {
          _this.makeToast("danger", _this.$t("Please_fill_the_form_correctly"), _this.$t("Failed"));
        } else {
          _this.Update_Return();
        }
      });
    },
    //---Submit Validation Update Detail
    submit_Update_Detail: function submit_Update_Detail() {
      var _this2 = this;

      this.$refs.Update_Detail.validate().then(function (success) {
        if (!success) {
          return;
        } else {
          _this2.Update_Detail();
        }
      });
    },
    //---Validate State Fields
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
    //------ Show Modal Update Detail Product
    Modal_Updat_Detail: function Modal_Updat_Detail(detail) {
      this.detail = {};
      this.detail.name = detail.name;
      this.detail.detail_id = detail.detail_id;
      this.detail.Unit_price = detail.Unit_price;
      this.detail.tax_method = detail.tax_method;
      this.detail.discount_Method = detail.discount_Method;
      this.detail.discount = detail.discount;
      this.detail.quantity = detail.quantity;
      this.detail.tax_percent = detail.tax_percent;
      this.$bvModal.show("form_Update_Detail");
    },
    //------ Submit Update Detail Product
    Update_Detail: function Update_Detail() {
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id === this.detail.detail_id) {
          this.details[i].tax_percent = this.detail.tax_percent;
          this.details[i].Unit_price = this.detail.Unit_price;
          this.details[i].quantity = this.detail.quantity;
          this.details[i].tax_method = this.detail.tax_method;
          this.details[i].discount_Method = this.detail.discount_Method;
          this.details[i].discount = this.detail.discount;

          if (this.details[i].discount_Method == "2") {
            //Fixed
            this.details[i].DiscountNet = this.detail.discount;
          } else {
            //Percentage %
            this.details[i].DiscountNet = parseFloat(this.detail.Unit_price * this.details[i].discount / 100);
          }

          if (this.details[i].tax_method == "1") {
            //Exclusive
            this.details[i].Net_price = parseFloat(this.detail.Unit_price - this.details[i].DiscountNet);
            this.details[i].taxe = parseFloat(this.detail.tax_percent * (this.detail.Unit_price - this.details[i].DiscountNet) / 100);
          } else {
            //Inclusive
            this.details[i].Net_price = parseFloat((this.detail.Unit_price - this.details[i].DiscountNet) / (this.detail.tax_percent / 100 + 1));
            this.details[i].taxe = parseFloat(this.detail.Unit_price - this.details[i].Net_price - this.details[i].DiscountNet);
          }

          this.$forceUpdate();
        }
      }

      this.Calcul_Total();
      this.$bvModal.hide("form_Update_Detail");
    },
    // Search Products
    search: function search() {
      var _this3 = this;

      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }

      if (this.search_input.length < 1) {
        return this.product_filter = [];
      }

      if (this.sale_return.warehouse_id != "" && this.sale_return.warehouse_id != null) {
        this.timer = setTimeout(function () {
          var product_filter = _this3.products.filter(function (product) {
            return product.code === _this3.search_input || product.barcode.includes(_this3.search_input);
          });

          if (product_filter.length === 1) {
            _this3.SearchProduct(product_filter[0]);
          } else {
            _this3.product_filter = _this3.products.filter(function (product) {
              return product.name.toLowerCase().startsWith(_this3.search_input.toLowerCase()) || product.code.toLowerCase().startsWith(_this3.search_input.toLowerCase()) || product.barcode.toLowerCase().startsWith(_this3.search_input.toLowerCase());
            });
          }
        }, 800);
      } else {
        this.makeToast("warning", this.$t("SelectWarehouse"), this.$t("Warning"));
      }
    },
    // get Result Value Search Product
    getResultValue: function getResultValue(result) {
      return result.code + " " + "(" + result.name + ")";
    },
    // Submit Search Product
    SearchProduct: function SearchProduct(result) {
      this.product = {};

      if (this.details.length > 0 && this.details.some(function (detail) {
        return detail.code === result.code;
      })) {
        this.makeToast("warning", this.$t("AlreadyAdd"), this.$t("Warning"));
      } else {
        this.product.code = result.code;
        this.product.no_unit = 1;
        this.product.stock = result.qte_sale;

        if (result.qte_sale < 1) {
          this.product.quantity = result.qte_sale;
        } else {
          this.product.quantity = 1;
        }

        this.product.product_variant_id = result.product_variant_id;
        this.Get_Product_Details(result.id);
      }

      this.search_input = '';
      this.product_filter = [];
    },
    //---------------------- Event Select Warehouse ------------------------------\\
    Selected_Warehouse: function Selected_Warehouse(value) {
      this.search_input = '';
      this.product_filter = [];
      this.Get_Products_By_Warehouse(value);
    },
    //------------------------------------ Get Products By Warehouse -------------------------\\
    Get_Products_By_Warehouse: function Get_Products_By_Warehouse(id) {
      var _this4 = this;

      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
      axios.get("Products/Warehouse/" + id + "?stock=" + 0).then(function (response) {
        _this4.products = response.data;
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();
      })["catch"](function (error) {});
    },
    //----------------------------------------- Add Product -------------------------\\
    add_product: function add_product() {
      if (this.details.length > 0) {
        this.Last_Detail_id();
      } else if (this.details.length === 0) {
        this.product.detail_id = 1;
      }

      this.details.push(this.product);
    },
    //-----------------------------------Verified QTY ------------------------------\\
    Verified_Qty: function Verified_Qty(detail, id) {
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id == id) {
          if (isNaN(detail.quantity)) {
            this.details[i].quantity = 1;
          }

          this.Calcul_Total();
          this.$forceUpdate();
        }
      }
    },
    //-----------------------------------increment QTY ------------------------------\\
    increment: function increment(detail, id) {
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id == id) {
          this.formatNumber(this.details[i].quantity++, 2);
        }
      }

      this.$forceUpdate();
      this.Calcul_Total();
    },
    //-----------------------------------decrement QTY ------------------------------\\
    decrement: function decrement(detail, id) {
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id == id) {
          if (detail.quantity - 1 > 0) {
            this.formatNumber(this.details[i].quantity--, 2);
          }
        }
      }

      this.$forceUpdate();
      this.Calcul_Total();
    },
    //------------------------------Formetted Numbers -------------------------\\
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
    //-----------------------------------------Calcul Total ------------------------------\\
    Calcul_Total: function Calcul_Total() {
      this.total = 0;

      for (var i = 0; i < this.details.length; i++) {
        var tax = this.details[i].taxe * this.details[i].quantity;
        this.details[i].subtotal = parseFloat(this.details[i].quantity * this.details[i].Net_price + tax);
        this.total = parseFloat(this.total + this.details[i].subtotal);
      }

      var total_without_discount = parseFloat(this.total - this.sale_return.discount);
      this.sale_return.TaxNet = parseFloat(total_without_discount * this.sale_return.tax_rate / 100);
      this.GrandTotal = parseFloat(total_without_discount + this.sale_return.TaxNet + this.sale_return.shipping);
      var grand_total = this.GrandTotal.toFixed(2);
      this.GrandTotal = parseFloat(grand_total);
    },
    //---------- keyup OrderTax
    keyup_OrderTax: function keyup_OrderTax() {
      if (isNaN(this.sale_return.tax_rate)) {
        this.sale_return.tax_rate = 0;
      } else {
        this.Calcul_Total();
      }
    },
    //---------- keyup Discount
    keyup_Discount: function keyup_Discount() {
      if (isNaN(this.sale_return.discount)) {
        this.sale_return.discount = 0;
      } else {
        this.Calcul_Total();
      }
    },
    //---------- keyup Shipping
    keyup_Shipping: function keyup_Shipping() {
      if (isNaN(this.sale_return.shipping)) {
        this.sale_return.shipping = 0;
      } else {
        this.Calcul_Total();
      }
    },
    //-----------------------------------Delete Detail Product ------------------------------\\
    delete_Product_Detail: function delete_Product_Detail(id) {
      for (var i = 0; i < this.details.length; i++) {
        if (id === this.details[i].detail_id) {
          this.details.splice(i, 1);
          this.Calcul_Total();
        }
      }
    },
    //-----------------------------------verified Qty If Null || 0 ------------------------------\\
    verifiedForm: function verifiedForm() {
      if (this.details.length <= 0) {
        this.makeToast("warning", this.$t("AddProductToList"), this.$t("Warning"));
        return false;
      } else {
        var count = 0;

        for (var i = 0; i < this.details.length; i++) {
          if (this.details[i].quantity == "" || this.details[i].quantity === 0) {
            count += 1;
          }
        }

        if (count > 0) {
          this.makeToast("warning", this.$t("AddQuantity"), this.$t("Warning"));
          return false;
        } else {
          return true;
        }
      }
    },
    //--------------------------------- Update Return -------------------------\\
    Update_Return: function Update_Return() {
      var _this5 = this;

      if (this.verifiedForm()) {
        this.SubmitProcessing = true;
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
        nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.set(0.1);
        var id = this.$route.params.id;
        axios.put("returns/sale/".concat(id), {
          date: this.sale_return.date,
          client_id: this.sale_return.client_id,
          warehouse_id: this.sale_return.warehouse_id,
          statut: this.sale_return.statut,
          notes: this.sale_return.notes,
          tax_rate: this.sale_return.tax_rate,
          TaxNet: this.sale_return.TaxNet,
          discount: this.sale_return.discount,
          shipping: this.sale_return.shipping,
          GrandTotal: this.GrandTotal,
          details: this.details
        }).then(function (response) {
          nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();

          _this5.makeToast("success", _this5.$t("Update.TitleReturn"), _this5.$t("Success"));

          _this5.SubmitProcessing = false;

          _this5.$router.push({
            name: "index_sale_return"
          });
        })["catch"](function (error) {
          nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done();

          _this5.makeToast("danger", _this5.$t("InvalidData"), _this5.$t("Failed"));

          _this5.SubmitProcessing = false;
        });
      }
    },
    //-------------------------------- Get Last Detail Id -------------------------\\
    Last_Detail_id: function Last_Detail_id() {
      this.product.detail_id = 0;
      var len = this.details.length;
      this.product.detail_id = this.details[len - 1].detail_id + 1;
    },
    //---------------------------------get Product Details ------------------------\\
    Get_Product_Details: function Get_Product_Details(product_id) {
      var _this6 = this;

      axios.get("Products/" + product_id).then(function (response) {
        _this6.product.del = 0;
        _this6.product.id = 0;
        _this6.product.discount = 0;
        _this6.product.DiscountNet = 0;
        _this6.product.discount_Method = "2";
        _this6.product.product_id = response.data.id;
        _this6.product.name = response.data.name;
        _this6.product.Net_price = response.data.Net_price;
        _this6.product.Unit_price = response.data.Unit_price;
        _this6.product.taxe = response.data.tax_price;
        _this6.product.tax_method = response.data.tax_method;
        _this6.product.tax_percent = response.data.tax_percent;
        _this6.product.unitSale = response.data.unitSale;
        _this6.product.sale_unit_id = response.data.sale_unit_id;

        _this6.add_product();

        _this6.Calcul_Total();
      });
    },
    //---------------------------------------Get Elements ------------------------------\\
    GetElements: function GetElements() {
      var _this7 = this;

      var id = this.$route.params.id;
      axios.get("returns/sale/".concat(id, "/edit")).then(function (response) {
        _this7.sale_return = response.data.sale_return;
        _this7.details = response.data.details;
        _this7.clients = response.data.clients;
        _this7.warehouses = response.data.warehouses;

        _this7.Get_Products_By_Warehouse(_this7.sale_return.warehouse_id);

        _this7.Calcul_Total();

        _this7.isLoading = false;
      })["catch"](function (response) {
        setTimeout(function () {
          _this7.isLoading = false;
        }, 500);
      });
    }
  },
  //----------------------------- Created function-------------------
  created: function created() {
    this.GetElements();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/sale_return/edit_sale_return.vue?vue&type=template&id=76fb84d7&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/app/pages/sale_return/edit_sale_return.vue?vue&type=template&id=76fb84d7& ***!
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
        attrs: {
          page: _vm.$t("EditSaleReturn"),
          folder: _vm.$t("ListReturns"),
        },
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
            { ref: "edit_sale_return" },
            [
              _c(
                "b-form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.Submit_Sale_return($event)
                    },
                  },
                },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { lg: "12", md: "12", sm: "12" } },
                        [
                          _c(
                            "b-card",
                            [
                              _c(
                                "b-row",
                                [
                                  _c(
                                    "b-col",
                                    {
                                      staticClass: "mb-3",
                                      attrs: { lg: "4", md: "4", sm: "12" },
                                    },
                                    [
                                      _c("validation-provider", {
                                        attrs: {
                                          name: "date",
                                          rules: { required: true },
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (validationContext) {
                                                return [
                                                  _c(
                                                    "b-form-group",
                                                    {
                                                      attrs: {
                                                        label: _vm.$t("date"),
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
                                                            "date-feedback",
                                                          type: "date",
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.sale_return
                                                              .date,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.sale_return,
                                                              "date",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "sale_return.date",
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-invalid-feedback",
                                                        {
                                                          attrs: {
                                                            id: "OrderTax-feedback",
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
                                          3294755613
                                        ),
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    {
                                      staticClass: "mb-3",
                                      attrs: { lg: "4", md: "4", sm: "12" },
                                    },
                                    [
                                      _c("validation-provider", {
                                        attrs: {
                                          name: "Customer",
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
                                                      label: _vm.$t("Customer"),
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
                                                            "Choose_Customer"
                                                          ),
                                                        options:
                                                          _vm.clients.map(
                                                            function (clients) {
                                                              return {
                                                                label:
                                                                  clients.name,
                                                                value:
                                                                  clients.id,
                                                              }
                                                            }
                                                          ),
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.sale_return
                                                            .client_id,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.sale_return,
                                                            "client_id",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "sale_return.client_id",
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
                                          2689704660
                                        ),
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    {
                                      staticClass: "mb-3",
                                      attrs: { lg: "4", md: "4", sm: "12" },
                                    },
                                    [
                                      _c("validation-provider", {
                                        attrs: {
                                          name: "warehouse",
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
                                                        _vm.$t("warehouse"),
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
                                                        disabled:
                                                          _vm.details.length >
                                                          0,
                                                        reduce: function (
                                                          label
                                                        ) {
                                                          return label.value
                                                        },
                                                        placeholder:
                                                          _vm.$t(
                                                            "Choose_Warehouse"
                                                          ),
                                                        options:
                                                          _vm.warehouses.map(
                                                            function (
                                                              warehouses
                                                            ) {
                                                              return {
                                                                label:
                                                                  warehouses.name,
                                                                value:
                                                                  warehouses.id,
                                                              }
                                                            }
                                                          ),
                                                      },
                                                      on: {
                                                        input:
                                                          _vm.Selected_Warehouse,
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.sale_return
                                                            .warehouse_id,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.sale_return,
                                                            "warehouse_id",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "sale_return.warehouse_id",
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
                                          3409615934
                                        ),
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    {
                                      staticClass: "mb-5",
                                      attrs: { md: "12" },
                                    },
                                    [
                                      _c("h6", [
                                        _vm._v(_vm._s(_vm.$t("ProductName"))),
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "autocomplete",
                                          attrs: { id: "autocomplete" },
                                        },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.search_input,
                                                expression: "search_input",
                                              },
                                            ],
                                            staticClass: "autocomplete-input",
                                            attrs: {
                                              placeholder: _vm.$t(
                                                "Scan_Search_Product_by_Code_Name"
                                              ),
                                            },
                                            domProps: {
                                              value: _vm.search_input,
                                            },
                                            on: {
                                              keyup: function ($event) {
                                                return _vm.search()
                                              },
                                              focus: _vm.handleFocus,
                                              blur: _vm.handleBlur,
                                              input: function ($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.search_input =
                                                  $event.target.value
                                              },
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "ul",
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value: _vm.focused,
                                                  expression: "focused",
                                                },
                                              ],
                                              staticClass:
                                                "autocomplete-result-list",
                                            },
                                            _vm._l(
                                              _vm.product_filter,
                                              function (product_fil) {
                                                return _c(
                                                  "li",
                                                  {
                                                    staticClass:
                                                      "autocomplete-result",
                                                    on: {
                                                      mousedown: function (
                                                        $event
                                                      ) {
                                                        return _vm.SearchProduct(
                                                          product_fil
                                                        )
                                                      },
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.getResultValue(
                                                          product_fil
                                                        )
                                                      )
                                                    ),
                                                  ]
                                                )
                                              }
                                            ),
                                            0
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("b-col", { attrs: { md: "12" } }, [
                                    _c("h5", [
                                      _vm._v(
                                        _vm._s(_vm.$t("order_products")) + " *"
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "table-responsive" },
                                      [
                                        _c(
                                          "table",
                                          { staticClass: "table table-hover" },
                                          [
                                            _c(
                                              "thead",
                                              { staticClass: "bg-gray-300" },
                                              [
                                                _c("tr", [
                                                  _c(
                                                    "th",
                                                    { attrs: { scope: "col" } },
                                                    [_vm._v("#")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "th",
                                                    { attrs: { scope: "col" } },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t("ProductName")
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "th",
                                                    { attrs: { scope: "col" } },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "Net_Unit_Price"
                                                          )
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "th",
                                                    { attrs: { scope: "col" } },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t("CurrentStock")
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "th",
                                                    { attrs: { scope: "col" } },
                                                    [
                                                      _vm._v(
                                                        _vm._s(_vm.$t("Qty"))
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "th",
                                                    { attrs: { scope: "col" } },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t("Discount")
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "th",
                                                    { attrs: { scope: "col" } },
                                                    [
                                                      _vm._v(
                                                        _vm._s(_vm.$t("Tax"))
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "th",
                                                    { attrs: { scope: "col" } },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t("SubTotal")
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "th",
                                                    {
                                                      staticClass:
                                                        "text-center",
                                                      attrs: { scope: "col" },
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fa fa-trash",
                                                      }),
                                                    ]
                                                  ),
                                                ]),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "tbody",
                                              [
                                                _vm.details.length <= 0
                                                  ? _c("tr", [
                                                      _c(
                                                        "td",
                                                        {
                                                          attrs: {
                                                            colspan: "9",
                                                          },
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "NodataAvailable"
                                                              )
                                                            )
                                                          ),
                                                        ]
                                                      ),
                                                    ])
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _vm._l(
                                                  _vm.details,
                                                  function (detail) {
                                                    return _c(
                                                      "tr",
                                                      {
                                                        key: detail.detail_id,
                                                        class: {
                                                          row_deleted:
                                                            detail.del === 1 ||
                                                            detail.no_unit ===
                                                              0,
                                                        },
                                                      },
                                                      [
                                                        _c("td", [
                                                          _vm._v(
                                                            _vm._s(
                                                              detail.detail_id
                                                            )
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("td", [
                                                          _c("span", [
                                                            _vm._v(
                                                              _vm._s(
                                                                detail.code
                                                              )
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("br"),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "badge badge-success",
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  detail.name
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("i", {
                                                            directives: [
                                                              {
                                                                name: "show",
                                                                rawName:
                                                                  "v-show",
                                                                value:
                                                                  detail.no_unit !==
                                                                  0,
                                                                expression:
                                                                  "detail.no_unit !== 0",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "i-Edit",
                                                            on: {
                                                              click: function (
                                                                $event
                                                              ) {
                                                                return _vm.Modal_Updat_Detail(
                                                                  detail
                                                                )
                                                              },
                                                            },
                                                          }),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("td", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.currentUser
                                                                .currency
                                                            ) +
                                                              " " +
                                                              _vm._s(
                                                                _vm.formatNumber(
                                                                  detail.Net_price,
                                                                  3
                                                                )
                                                              )
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("td", [
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "badge badge-outline-warning",
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  detail.stock
                                                                ) +
                                                                  " " +
                                                                  _vm._s(
                                                                    detail.unitSale
                                                                  )
                                                              ),
                                                            ]
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("td", [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "quantity",
                                                            },
                                                            [
                                                              _c(
                                                                "b-input-group",
                                                                [
                                                                  _c(
                                                                    "b-input-group-prepend",
                                                                    [
                                                                      _c(
                                                                        "span",
                                                                        {
                                                                          directives:
                                                                            [
                                                                              {
                                                                                name: "show",
                                                                                rawName:
                                                                                  "v-show",
                                                                                value:
                                                                                  detail.no_unit !==
                                                                                  0,
                                                                                expression:
                                                                                  "detail.no_unit !== 0",
                                                                              },
                                                                            ],
                                                                          staticClass:
                                                                            "btn btn-primary btn-sm",
                                                                          on: {
                                                                            click:
                                                                              function (
                                                                                $event
                                                                              ) {
                                                                                return _vm.decrement(
                                                                                  detail,
                                                                                  detail.detail_id
                                                                                )
                                                                              },
                                                                          },
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "-"
                                                                          ),
                                                                        ]
                                                                      ),
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c("input", {
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model.number",
                                                                          value:
                                                                            detail.quantity,
                                                                          expression:
                                                                            "detail.quantity",
                                                                          modifiers:
                                                                            {
                                                                              number: true,
                                                                            },
                                                                        },
                                                                      ],
                                                                    staticClass:
                                                                      "form-control",
                                                                    attrs: {
                                                                      min: 0.0,
                                                                      disabled:
                                                                        detail.del ===
                                                                          1 ||
                                                                        detail.no_unit ===
                                                                          0,
                                                                    },
                                                                    domProps: {
                                                                      value:
                                                                        detail.quantity,
                                                                    },
                                                                    on: {
                                                                      keyup:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          return _vm.Verified_Qty(
                                                                            detail,
                                                                            detail.detail_id
                                                                          )
                                                                        },
                                                                      input:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          if (
                                                                            $event
                                                                              .target
                                                                              .composing
                                                                          ) {
                                                                            return
                                                                          }
                                                                          _vm.$set(
                                                                            detail,
                                                                            "quantity",
                                                                            _vm._n(
                                                                              $event
                                                                                .target
                                                                                .value
                                                                            )
                                                                          )
                                                                        },
                                                                      blur: function (
                                                                        $event
                                                                      ) {
                                                                        return _vm.$forceUpdate()
                                                                      },
                                                                    },
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "b-input-group-append",
                                                                    [
                                                                      _c(
                                                                        "span",
                                                                        {
                                                                          directives:
                                                                            [
                                                                              {
                                                                                name: "show",
                                                                                rawName:
                                                                                  "v-show",
                                                                                value:
                                                                                  detail.no_unit !==
                                                                                  0,
                                                                                expression:
                                                                                  "detail.no_unit !== 0",
                                                                              },
                                                                            ],
                                                                          staticClass:
                                                                            "btn btn-primary btn-sm",
                                                                          on: {
                                                                            click:
                                                                              function (
                                                                                $event
                                                                              ) {
                                                                                return _vm.increment(
                                                                                  detail,
                                                                                  detail.detail_id
                                                                                )
                                                                              },
                                                                          },
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "+"
                                                                          ),
                                                                        ]
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ],
                                                                1
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("td", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.currentUser
                                                                .currency
                                                            ) +
                                                              " " +
                                                              _vm._s(
                                                                _vm.formatNumber(
                                                                  detail.DiscountNet *
                                                                    detail.quantity,
                                                                  2
                                                                )
                                                              )
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("td", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.currentUser
                                                                .currency
                                                            ) +
                                                              " " +
                                                              _vm._s(
                                                                _vm.formatNumber(
                                                                  detail.taxe *
                                                                    detail.quantity,
                                                                  2
                                                                )
                                                              )
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("td", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.currentUser
                                                                .currency
                                                            ) +
                                                              " " +
                                                              _vm._s(
                                                                detail.subtotal.toFixed(
                                                                  2
                                                                )
                                                              )
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c(
                                                          "td",
                                                          {
                                                            directives: [
                                                              {
                                                                name: "show",
                                                                rawName:
                                                                  "v-show",
                                                                value:
                                                                  detail.no_unit !==
                                                                  0,
                                                                expression:
                                                                  "detail.no_unit !== 0",
                                                              },
                                                            ],
                                                          },
                                                          [
                                                            _c(
                                                              "a",
                                                              {
                                                                staticClass:
                                                                  "btn btn-icon btn-sm",
                                                                attrs: {
                                                                  title:
                                                                    "Delete",
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      $event
                                                                    ) {
                                                                      return _vm.delete_Product_Detail(
                                                                        detail.detail_id
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
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    )
                                                  }
                                                ),
                                              ],
                                              2
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "offset-md-9 col-md-3 mt-4",
                                    },
                                    [
                                      _c(
                                        "table",
                                        {
                                          staticClass:
                                            "table table-striped table-sm",
                                        },
                                        [
                                          _c("tbody", [
                                            _c("tr", [
                                              _c(
                                                "td",
                                                { staticClass: "bold" },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.$t("OrderTax"))
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("td", [
                                                _c("span", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.currentUser.currency
                                                    ) +
                                                      " " +
                                                      _vm._s(
                                                        _vm.sale_return.TaxNet.toFixed(
                                                          2
                                                        )
                                                      ) +
                                                      " (" +
                                                      _vm._s(
                                                        _vm.formatNumber(
                                                          _vm.sale_return
                                                            .tax_rate,
                                                          2
                                                        )
                                                      ) +
                                                      " %)"
                                                  ),
                                                ]),
                                              ]),
                                            ]),
                                            _vm._v(" "),
                                            _c("tr", [
                                              _c(
                                                "td",
                                                { staticClass: "bold" },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.$t("Discount"))
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.currentUser.currency
                                                  ) +
                                                    " " +
                                                    _vm._s(
                                                      _vm.sale_return.discount.toFixed(
                                                        2
                                                      )
                                                    )
                                                ),
                                              ]),
                                            ]),
                                            _vm._v(" "),
                                            _c("tr", [
                                              _c(
                                                "td",
                                                { staticClass: "bold" },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.$t("Shipping"))
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.currentUser.currency
                                                  ) +
                                                    " " +
                                                    _vm._s(
                                                      _vm.sale_return.shipping.toFixed(
                                                        2
                                                      )
                                                    )
                                                ),
                                              ]),
                                            ]),
                                            _vm._v(" "),
                                            _c("tr", [
                                              _c("td", [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "font-weight-bold",
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(_vm.$t("Total"))
                                                    ),
                                                  ]
                                                ),
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "font-weight-bold",
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.currentUser.currency
                                                      ) +
                                                        " " +
                                                        _vm._s(
                                                          _vm.GrandTotal.toFixed(
                                                            2
                                                          )
                                                        )
                                                    ),
                                                  ]
                                                ),
                                              ]),
                                            ]),
                                          ]),
                                        ]
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    {
                                      staticClass: "mb-3",
                                      attrs: { lg: "4", md: "4", sm: "12" },
                                    },
                                    [
                                      _c("validation-provider", {
                                        attrs: {
                                          name: "Order Tax",
                                          rules: { regex: /^\d*\.?\d*$/ },
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (validationContext) {
                                                return [
                                                  _c(
                                                    "b-form-group",
                                                    {
                                                      attrs: {
                                                        label:
                                                          _vm.$t("OrderTax"),
                                                      },
                                                    },
                                                    [
                                                      _c(
                                                        "b-input-group",
                                                        {
                                                          attrs: {
                                                            append: "%",
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
                                                                "OrderTax-feedback",
                                                              label:
                                                                "Order Tax",
                                                            },
                                                            on: {
                                                              keyup: function (
                                                                $event
                                                              ) {
                                                                return _vm.keyup_OrderTax()
                                                              },
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.sale_return
                                                                  .tax_rate,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.sale_return,
                                                                    "tax_rate",
                                                                    _vm._n($$v)
                                                                  )
                                                                },
                                                              expression:
                                                                "sale_return.tax_rate",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-invalid-feedback",
                                                        {
                                                          attrs: {
                                                            id: "OrderTax-feedback",
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
                                          2565157719
                                        ),
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    {
                                      staticClass: "mb-3",
                                      attrs: { lg: "4", md: "4", sm: "12" },
                                    },
                                    [
                                      _c("validation-provider", {
                                        attrs: {
                                          name: "Discount",
                                          rules: { regex: /^\d*\.?\d*$/ },
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (validationContext) {
                                                return [
                                                  _c(
                                                    "b-form-group",
                                                    {
                                                      attrs: {
                                                        label:
                                                          _vm.$t("Discount"),
                                                      },
                                                    },
                                                    [
                                                      _c(
                                                        "b-input-group",
                                                        {
                                                          attrs: {
                                                            append:
                                                              _vm.currentUser
                                                                .currency,
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
                                                                "Discount-feedback",
                                                              label: "Discount",
                                                            },
                                                            on: {
                                                              keyup: function (
                                                                $event
                                                              ) {
                                                                return _vm.keyup_Discount()
                                                              },
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.sale_return
                                                                  .discount,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.sale_return,
                                                                    "discount",
                                                                    _vm._n($$v)
                                                                  )
                                                                },
                                                              expression:
                                                                "sale_return.discount",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-invalid-feedback",
                                                        {
                                                          attrs: {
                                                            id: "Discount-feedback",
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
                                          535361776
                                        ),
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    {
                                      staticClass: "mb-3",
                                      attrs: { lg: "4", md: "4", sm: "12" },
                                    },
                                    [
                                      _c("validation-provider", {
                                        attrs: {
                                          name: "Shipping",
                                          rules: { regex: /^\d*\.?\d*$/ },
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (validationContext) {
                                                return [
                                                  _c(
                                                    "b-form-group",
                                                    {
                                                      attrs: {
                                                        label:
                                                          _vm.$t("Shipping"),
                                                      },
                                                    },
                                                    [
                                                      _c(
                                                        "b-input-group",
                                                        {
                                                          attrs: {
                                                            append:
                                                              _vm.currentUser
                                                                .currency,
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
                                                                "Shipping-feedback",
                                                              label: "Shipping",
                                                            },
                                                            on: {
                                                              keyup: function (
                                                                $event
                                                              ) {
                                                                return _vm.keyup_Shipping()
                                                              },
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.sale_return
                                                                  .shipping,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.sale_return,
                                                                    "shipping",
                                                                    _vm._n($$v)
                                                                  )
                                                                },
                                                              expression:
                                                                "sale_return.shipping",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-invalid-feedback",
                                                        {
                                                          attrs: {
                                                            id: "Shipping-feedback",
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
                                          1484868304
                                        ),
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    {
                                      staticClass: "mb-3",
                                      attrs: { lg: "4", md: "4", sm: "12" },
                                    },
                                    [
                                      _c("validation-provider", {
                                        attrs: {
                                          name: "Status",
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
                                                      label: _vm.$t("Status"),
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
                                                            "Choose_Status"
                                                          ),
                                                        options: [
                                                          {
                                                            label: "Received",
                                                            value: "received",
                                                          },
                                                          {
                                                            label: "Pending",
                                                            value: "pending",
                                                          },
                                                        ],
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.sale_return
                                                            .statut,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.sale_return,
                                                            "statut",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "sale_return.statut",
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
                                          3638193680
                                        ),
                                      }),
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
                                        { attrs: { label: _vm.$t("Note") } },
                                        [
                                          _c("textarea", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.sale_return.notes,
                                                expression: "sale_return.notes",
                                              },
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              rows: "4",
                                              placeholder: _vm.$t("Afewwords"),
                                            },
                                            domProps: {
                                              value: _vm.sale_return.notes,
                                            },
                                            on: {
                                              input: function ($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.sale_return,
                                                  "notes",
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
                                    { attrs: { md: "12" } },
                                    [
                                      _c(
                                        "b-form-group",
                                        [
                                          _c(
                                            "b-button",
                                            {
                                              attrs: {
                                                variant: "primary",
                                                disabled: _vm.SubmitProcessing,
                                              },
                                              on: {
                                                click: _vm.Submit_Sale_return,
                                              },
                                            },
                                            [_vm._v(_vm._s(_vm.$t("submit")))]
                                          ),
                                          _vm._v(" "),
                                          _vm.SubmitProcessing
                                            ? _vm._m(0)
                                            : _vm._e(),
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
      _vm._v(" "),
      _c(
        "validation-observer",
        { ref: "Update_Detail" },
        [
          _c(
            "b-modal",
            {
              attrs: {
                "hide-footer": "",
                size: "md",
                id: "form_Update_Detail",
                title: _vm.detail.name,
              },
            },
            [
              _c(
                "b-form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.submit_Update_Detail($event)
                    },
                  },
                },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { lg: "12", md: "12", sm: "12" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: "Product Price",
                              rules: { required: true, regex: /^\d*\.?\d*$/ },
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (validationContext) {
                                  return [
                                    _c(
                                      "b-form-group",
                                      {
                                        attrs: {
                                          label: _vm.$t("ProductPrice"),
                                          id: "Price-input",
                                        },
                                      },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            label: "Product Price",
                                            state:
                                              _vm.getValidationState(
                                                validationContext
                                              ),
                                            "aria-describedby":
                                              "Price-feedback",
                                          },
                                          model: {
                                            value: _vm.detail.Unit_price,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.detail,
                                                "Unit_price",
                                                _vm._n($$v)
                                              )
                                            },
                                            expression: "detail.Unit_price",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          { attrs: { id: "Price-feedback" } },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                validationContext.errors[0]
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
                            ]),
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { lg: "12", md: "12", sm: "12" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: "Tax Method",
                              rules: { required: true },
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var valid = ref.valid
                                  var errors = ref.errors
                                  return _c(
                                    "b-form-group",
                                    { attrs: { label: _vm.$t("TaxMethod") } },
                                    [
                                      _c("v-select", {
                                        class: {
                                          "is-invalid": !!errors.length,
                                        },
                                        attrs: {
                                          state: errors[0]
                                            ? false
                                            : valid
                                            ? true
                                            : null,
                                          reduce: function (label) {
                                            return label.value
                                          },
                                          placeholder: _vm.$t("Choose_Method"),
                                          options: [
                                            { label: "Exclusive", value: "1" },
                                            { label: "Inclusive", value: "2" },
                                          ],
                                        },
                                        model: {
                                          value: _vm.detail.tax_method,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.detail,
                                              "tax_method",
                                              $$v
                                            )
                                          },
                                          expression: "detail.tax_method",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("b-form-invalid-feedback", [
                                        _vm._v(_vm._s(errors[0])),
                                      ]),
                                    ],
                                    1
                                  )
                                },
                              },
                            ]),
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { lg: "12", md: "12", sm: "12" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: "Order Tax",
                              rules: { required: true, regex: /^\d*\.?\d*$/ },
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (validationContext) {
                                  return [
                                    _c(
                                      "b-form-group",
                                      { attrs: { label: _vm.$t("OrderTax") } },
                                      [
                                        _c(
                                          "b-input-group",
                                          { attrs: { append: "%" } },
                                          [
                                            _c("b-form-input", {
                                              attrs: {
                                                label: "Order Tax",
                                                state:
                                                  _vm.getValidationState(
                                                    validationContext
                                                  ),
                                                "aria-describedby":
                                                  "OrderTax-feedback",
                                              },
                                              model: {
                                                value: _vm.detail.tax_percent,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.detail,
                                                    "tax_percent",
                                                    _vm._n($$v)
                                                  )
                                                },
                                                expression:
                                                  "detail.tax_percent",
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          {
                                            attrs: { id: "OrderTax-feedback" },
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                validationContext.errors[0]
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
                            ]),
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { lg: "12", md: "12", sm: "12" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: "Discount Method",
                              rules: { required: true },
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var valid = ref.valid
                                  var errors = ref.errors
                                  return _c(
                                    "b-form-group",
                                    {
                                      attrs: {
                                        label: _vm.$t("Discount_Method"),
                                      },
                                    },
                                    [
                                      _c("v-select", {
                                        class: {
                                          "is-invalid": !!errors.length,
                                        },
                                        attrs: {
                                          reduce: function (label) {
                                            return label.value
                                          },
                                          placeholder: _vm.$t("Choose_Method"),
                                          state: errors[0]
                                            ? false
                                            : valid
                                            ? true
                                            : null,
                                          options: [
                                            { label: "Percent %", value: "1" },
                                            { label: "Fixed", value: "2" },
                                          ],
                                        },
                                        model: {
                                          value: _vm.detail.discount_Method,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.detail,
                                              "discount_Method",
                                              $$v
                                            )
                                          },
                                          expression: "detail.discount_Method",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("b-form-invalid-feedback", [
                                        _vm._v(_vm._s(errors[0])),
                                      ]),
                                    ],
                                    1
                                  )
                                },
                              },
                            ]),
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { lg: "12", md: "12", sm: "12" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: "Discount Rate",
                              rules: { required: true, regex: /^\d*\.?\d*$/ },
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (validationContext) {
                                  return [
                                    _c(
                                      "b-form-group",
                                      { attrs: { label: _vm.$t("Discount") } },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            label: "Discount",
                                            state:
                                              _vm.getValidationState(
                                                validationContext
                                              ),
                                            "aria-describedby":
                                              "Discount-feedback",
                                          },
                                          model: {
                                            value: _vm.detail.discount,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.detail,
                                                "discount",
                                                _vm._n($$v)
                                              )
                                            },
                                            expression: "detail.discount",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          {
                                            attrs: { id: "Discount-feedback" },
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                validationContext.errors[0]
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
                            ]),
                          }),
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
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { variant: "primary", type: "submit" },
                                },
                                [_vm._v(_vm._s(_vm.$t("submit")))]
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

/***/ "./resources/src/views/app/pages/sale_return/edit_sale_return.vue":
/*!************************************************************************!*\
  !*** ./resources/src/views/app/pages/sale_return/edit_sale_return.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_sale_return_vue_vue_type_template_id_76fb84d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit_sale_return.vue?vue&type=template&id=76fb84d7& */ "./resources/src/views/app/pages/sale_return/edit_sale_return.vue?vue&type=template&id=76fb84d7&");
/* harmony import */ var _edit_sale_return_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit_sale_return.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/sale_return/edit_sale_return.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_sale_return_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_sale_return_vue_vue_type_template_id_76fb84d7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_sale_return_vue_vue_type_template_id_76fb84d7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/sale_return/edit_sale_return.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/sale_return/edit_sale_return.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/sale_return/edit_sale_return.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_sale_return_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit_sale_return.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/sale_return/edit_sale_return.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_sale_return_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/sale_return/edit_sale_return.vue?vue&type=template&id=76fb84d7&":
/*!*******************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/sale_return/edit_sale_return.vue?vue&type=template&id=76fb84d7& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_sale_return_vue_vue_type_template_id_76fb84d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit_sale_return.vue?vue&type=template&id=76fb84d7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/app/pages/sale_return/edit_sale_return.vue?vue&type=template&id=76fb84d7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_sale_return_vue_vue_type_template_id_76fb84d7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_sale_return_vue_vue_type_template_id_76fb84d7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);