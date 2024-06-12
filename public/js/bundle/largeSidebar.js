(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["largeSidebar"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/containers/layouts/common/footer.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/containers/layouts/common/footer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["currentUser"])),
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobile_device_detect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobile-device-detect */ "./node_modules/mobile-device-detect/dist/index.js");
/* harmony import */ var mobile_device_detect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobile_device_detect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _TopNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopNav */ "./resources/src/containers/layouts/largeSidebar/TopNav.vue");
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
//
//
//
//
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
  components: {
    Topnav: _TopNav__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      isDisplay: true,
      isMenuOver: false,
      isStyle: true,
      selectedParentMenu: "",
      isMobile: mobile_device_detect__WEBPACK_IMPORTED_MODULE_0__["isMobile"]
    };
  },
  mounted: function mounted() {
    this.toggleSelectedParentMenu();
    window.addEventListener("resize", this.handleWindowResize);
    document.addEventListener("click", this.returnSelectedParentMenu);
    this.handleWindowResize();
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener("click", this.returnSelectedParentMenu);
    window.removeEventListener("resize", this.handleWindowResize);
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["getSideBarToggleProperties", "currentUserPermissions"])),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(["changeSecondarySidebarProperties", "changeSecondarySidebarPropertiesViaMenuItem", "changeSecondarySidebarPropertiesViaOverlay", "changeSidebarProperties"])), {}, {
    handleWindowResize: function handleWindowResize() {
      if (window.innerWidth <= 1200) {
        if (this.getSideBarToggleProperties.isSideNavOpen) {
          this.changeSidebarProperties();
        }

        if (this.getSideBarToggleProperties.isSecondarySideNavOpen) {
          this.changeSecondarySidebarProperties();
        }
      } else {
        if (!this.getSideBarToggleProperties.isSideNavOpen) {
          this.changeSidebarProperties();
        }
      }
    },
    toggleSelectedParentMenu: function toggleSelectedParentMenu() {
      var currentParentUrl = this.$route.path.split("/").filter(function (x) {
        return x !== "";
      })[1];

      if (currentParentUrl !== undefined || currentParentUrl !== null) {
        this.selectedParentMenu = currentParentUrl.toLowerCase();
      } else {
        this.selectedParentMenu = "dashboard";
      }
    },
    toggleSubMenu: function toggleSubMenu(e) {
      var hasSubmenu = e.target.dataset.submenu;
      var parent = e.target.dataset.item;

      if (hasSubmenu) {
        this.selectedParentMenu = parent;
        this.changeSecondarySidebarPropertiesViaMenuItem(true);
      } else {
        this.selectedParentMenu = parent;
        this.changeSecondarySidebarPropertiesViaMenuItem(false);
      }
    },
    removeOverlay: function removeOverlay() {
      this.changeSecondarySidebarPropertiesViaOverlay();

      if (window.innerWidth <= 1200) {
        this.changeSidebarProperties();
      }

      this.toggleSelectedParentMenu();
    },
    returnSelectedParentMenu: function returnSelectedParentMenu() {
      if (!this.isMenuOver) {
        this.toggleSelectedParentMenu();
      }
    },
    toggleSidebarDropdwon: function toggleSidebarDropdwon(event) {
      var dropdownMenus = this.$el.querySelectorAll(".dropdown-sidemenu.open");
      event.currentTarget.classList.toggle("open");
      dropdownMenus.forEach(function (dropdown) {
        dropdown.classList.remove("open");
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobile_device_detect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobile-device-detect */ "./node_modules/mobile-device-detect/dist/index.js");
/* harmony import */ var mobile_device_detect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobile_device_detect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_clickaway__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-clickaway */ "./node_modules/vue-clickaway/dist/vue-clickaway.common.js");
/* harmony import */ var vue_clickaway__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_clickaway__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_flag_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-flag-icon */ "./node_modules/vue-flag-icon/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils */ "./resources/src/utils/index.js");
var _objectSpread2;

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
// import Sidebar from "./Sidebar";

 // import { setTimeout } from 'timers';




/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [vue_clickaway__WEBPACK_IMPORTED_MODULE_1__["mixin"]],
  components: {
    FlagIcon: vue_flag_icon__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      langs: ["en", "fr", "ar", "de", "es", "it", "Ind", "thai", "tr_ch", "sm_ch", "tur", "ru", "hn", "vn"],
      isDisplay: true,
      isStyle: true,
      isSearchOpen: false,
      isMouseOnMegaMenu: true,
      isMegaMenuOpen: false,
      is_Load: false // alerts:0,

    };
  },
  mounted: function mounted() {
    if (this.$i18n.locale == "ar") {
      this.changetoRtl();
    } else {
      this.changetoLtr();
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])(["currentUser", "getSideBarToggleProperties", "currentUserPermissions"])),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])(["changetoLtr", "changetoRtl", "changeThemeRtl", "changeSecondarySidebarProperties", "changeSidebarProperties", "changeThemeMode", "logout"])), {}, (_objectSpread2 = {
    logoutUser: function logoutUser() {
      this.$store.dispatch("logout");
    },
    SetLocal: function SetLocal(locale) {
      this.$i18n.locale = locale;

      if (this.$i18n.locale == "ar") {
        this.changetoRtl();
      } else {
        this.changetoLtr();
      }

      this.$store.dispatch("language/setLanguage", locale);
      Fire.$emit("ChangeLanguage");
    },
    handleFullScreen: function handleFullScreen() {
      _utils__WEBPACK_IMPORTED_MODULE_4__["default"].toggleFullScreen();
    }
  }, _defineProperty(_objectSpread2, "logoutUser", function logoutUser() {
    this.logout();
  }), _defineProperty(_objectSpread2, "closeMegaMenu", function closeMegaMenu() {
    this.isMegaMenuOpen = false;
  }), _defineProperty(_objectSpread2, "toggleMegaMenu", function toggleMegaMenu() {
    this.isMegaMenuOpen = !this.isMegaMenuOpen;
  }), _defineProperty(_objectSpread2, "toggleSearch", function toggleSearch() {
    this.isSearchOpen = !this.isSearchOpen;
  }), _defineProperty(_objectSpread2, "sideBarToggle", function sideBarToggle(el) {
    if (this.getSideBarToggleProperties.isSideNavOpen && this.getSideBarToggleProperties.isSecondarySideNavOpen && mobile_device_detect__WEBPACK_IMPORTED_MODULE_0__["isMobile"]) {
      this.changeSidebarProperties();
      this.changeSecondarySidebarProperties();
    } else if (this.getSideBarToggleProperties.isSideNavOpen && this.getSideBarToggleProperties.isSecondarySideNavOpen) {
      this.changeSecondarySidebarProperties();
    } else if (this.getSideBarToggleProperties.isSideNavOpen) {
      this.changeSidebarProperties();
    } else if (!this.getSideBarToggleProperties.isSideNavOpen && !this.getSideBarToggleProperties.isSecondarySideNavOpen && !this.getSideBarToggleProperties.isActiveSecondarySideNav) {
      this.changeSidebarProperties();
    } else if (!this.getSideBarToggleProperties.isSideNavOpen && !this.getSideBarToggleProperties.isSecondarySideNavOpen) {
      this.changeSidebarProperties();
      this.changeSecondarySidebarProperties();
    }
  }), _objectSpread2))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar */ "./resources/src/containers/layouts/largeSidebar/Sidebar.vue");
/* harmony import */ var _TopNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopNav */ "./resources/src/containers/layouts/largeSidebar/TopNav.vue");
/* harmony import */ var _common_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/footer */ "./resources/src/containers/layouts/common/footer.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Sidebar: _Sidebar__WEBPACK_IMPORTED_MODULE_0__["default"],
    TopNav: _TopNav__WEBPACK_IMPORTED_MODULE_1__["default"],
    appFooter: _common_footer__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {};
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])(["getSideBarToggleProperties"])),
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/containers/layouts/common/footer.vue?vue&type=template&id=1dfb17ff&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/containers/layouts/common/footer.vue?vue&type=template&id=1dfb17ff&scoped=true& ***!
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
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "footer_wrap" }, [
      _c("div", { staticClass: "flex-grow-1" }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=template&id=696fbebe&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=template&id=696fbebe&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "side-content-wrap",
      on: {
        mouseenter: function ($event) {
          _vm.isMenuOver = true
        },
        mouseleave: function ($event) {
          _vm.isMenuOver = false
        },
        touchstart: function ($event) {
          _vm.isMenuOver = true
        },
      },
    },
    [
      _c(
        "vue-perfect-scrollbar",
        {
          ref: "myData",
          staticClass: "sidebar-left rtl-ps-none ps scroll",
          class: { open: _vm.getSideBarToggleProperties.isSideNavOpen },
          attrs: {
            settings: { suppressScrollX: true, wheelPropagation: false },
          },
        },
        [
          _c("div", [
            _c("ul", { staticClass: "navigation-left" }, [
              _c(
                "li",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value:
                        _vm.currentUserPermissions &&
                        _vm.currentUserPermissions.includes("products_view"),
                      expression:
                        "currentUserPermissions   &&   currentUserPermissions.includes('products_view') ",
                    },
                  ],
                  staticClass: "nav-item",
                  class: { active: _vm.selectedParentMenu == "dashboard" },
                  attrs: { "data-item": "dashboard" },
                  on: { mouseenter: _vm.toggleSubMenu },
                },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-item-hold",
                      attrs: { tag: "a", to: "/app/dashboard" },
                    },
                    [
                      this.$i18n.locale == "ar"
                        ? _c("i", {
                            staticClass: "nav-icon i-Bar-Chart",
                            staticStyle: {
                              display: "inline",
                              "font-size": "20px",
                              "padding-left": "28px",
                              "padding-right": "28px",
                              float: "right",
                            },
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      this.$i18n.locale == "en"
                        ? _c("i", {
                            staticClass: "nav-icon i-Bar-Chart",
                            staticStyle: {
                              display: "inline",
                              "font-size": "20px",
                              "padding-left": "28px",
                              "padding-right": "28px",
                              float: "left",
                            },
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "nav-text",
                          staticStyle: { "font-size": "15px" },
                        },
                        [_vm._v(_vm._s(_vm.$t("dashboard")))]
                      ),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value:
                        _vm.currentUserPermissions &&
                        _vm.currentUserPermissions.includes("products_view"),
                      expression:
                        "currentUserPermissions   &&   currentUserPermissions.includes('products_view') ",
                    },
                  ],
                  staticClass: "nav-item",
                  class: { active: _vm.selectedParentMenu == "Users" },
                  attrs: { "data-item": "Users" },
                  on: { mouseenter: _vm.toggleSubMenu },
                },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-item-hold",
                      attrs: { tag: "a", to: "/app/People/Users" },
                    },
                    [
                      this.$i18n.locale == "ar"
                        ? _c("i", {
                            staticClass: "nav-icon i-Administrator",
                            staticStyle: {
                              display: "inline",
                              "font-size": "20px",
                              "padding-left": "28px",
                              "padding-right": "28px",
                              float: "right",
                            },
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      this.$i18n.locale == "en"
                        ? _c("i", {
                            staticClass: "nav-icon i-Administrator",
                            staticStyle: {
                              display: "inline",
                              "font-size": "20px",
                              "padding-left": "28px",
                              "padding-right": "28px",
                              float: "left",
                            },
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "nav-text",
                          staticStyle: { "font-size": "15px" },
                        },
                        [_vm._v(_vm._s(_vm.$t("Users")))]
                      ),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value:
                        _vm.currentUserPermissions &&
                        _vm.currentUserPermissions.includes("products_view"),
                      expression:
                        "currentUserPermissions   &&   currentUserPermissions.includes('products_view') ",
                    },
                  ],
                  staticClass: "nav-item",
                  class: { active: _vm.selectedParentMenu == "category" },
                  attrs: { "data-item": "category" },
                  on: { mouseenter: _vm.toggleSubMenu },
                },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-item-hold",
                      attrs: { tag: "a", to: "/app/settings/Categories" },
                    },
                    [
                      this.$i18n.locale == "ar"
                        ? _c("i", {
                            staticClass: "nav-icon i-Duplicate-Layer",
                            staticStyle: {
                              display: "inline",
                              "font-size": "20px",
                              "padding-left": "28px",
                              "padding-right": "28px",
                              float: "right",
                            },
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      this.$i18n.locale == "en"
                        ? _c("i", {
                            staticClass: "nav-icon i-Duplicate-Layer",
                            staticStyle: {
                              display: "inline",
                              "font-size": "20px",
                              "padding-left": "28px",
                              "padding-right": "28px",
                              float: "left",
                            },
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "nav-text",
                          staticStyle: { "font-size": "15px" },
                        },
                        [_vm._v(_vm._s(_vm.$t("Categories")))]
                      ),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value:
                        _vm.currentUserPermissions &&
                        _vm.currentUserPermissions.includes("products_view"),
                      expression:
                        "currentUserPermissions   &&   currentUserPermissions.includes('products_view') ",
                    },
                  ],
                  staticClass: "nav-item",
                  class: { active: _vm.selectedParentMenu == "setting_system" },
                  attrs: { "data-item": "setting_system" },
                  on: { mouseenter: _vm.toggleSubMenu },
                },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-item-hold",
                      attrs: { tag: "a", to: "/app/settings/System_settings" },
                    },
                    [
                      this.$i18n.locale == "ar"
                        ? _c("i", {
                            staticClass: "nav-icon i-Data-Settings",
                            staticStyle: {
                              display: "inline",
                              "font-size": "20px",
                              "padding-left": "28px",
                              "padding-right": "28px",
                              float: "right",
                            },
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      this.$i18n.locale == "en"
                        ? _c("i", {
                            staticClass: "nav-icon i-Data-Settings",
                            staticStyle: {
                              display: "inline",
                              "font-size": "20px",
                              "padding-left": "28px",
                              "padding-right": "28px",
                              float: "left",
                            },
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "nav-text",
                          staticStyle: { "font-size": "15px" },
                        },
                        [_vm._v(_vm._s(_vm.$t("SystemSettings")))]
                      ),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value:
                        _vm.currentUserPermissions &&
                        _vm.currentUserPermissions.includes("products_view"),
                      expression:
                        "currentUserPermissions   &&   currentUserPermissions.includes('products_view') ",
                    },
                  ],
                  staticClass: "nav-item",
                  class: { active: _vm.selectedParentMenu == "notification" },
                  attrs: { "data-item": "notification" },
                  on: { mouseenter: _vm.toggleSubMenu },
                },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-item-hold",
                      attrs: { tag: "a", to: "/app/settings/Notifications" },
                    },
                    [
                      this.$i18n.locale == "ar"
                        ? _c("i", {
                            staticClass: "nav-icon i-Mail",
                            staticStyle: {
                              display: "inline",
                              "font-size": "20px",
                              "padding-left": "28px",
                              "padding-right": "28px",
                              float: "right",
                            },
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      this.$i18n.locale == "en"
                        ? _c("i", {
                            staticClass: "nav-icon i-Mail",
                            staticStyle: {
                              display: "inline",
                              "font-size": "20px",
                              "padding-left": "28px",
                              "padding-right": "28px",
                              float: "left",
                            },
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "nav-text",
                          staticStyle: { "font-size": "15px" },
                        },
                        [_vm._v(_vm._s(_vm.$t("Notification")))]
                      ),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value:
                        _vm.currentUserPermissions &&
                        _vm.currentUserPermissions.includes("products_view"),
                      expression:
                        "currentUserPermissions   &&   currentUserPermissions.includes('products_view') ",
                    },
                  ],
                  staticClass: "nav-item",
                  class: { active: _vm.selectedParentMenu == "ad" },
                  attrs: { "data-item": "ad" },
                  on: { mouseenter: _vm.toggleSubMenu },
                },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-item-hold",
                      attrs: { tag: "a", to: "/app/settings/Ads" },
                    },
                    [
                      this.$i18n.locale == "ar"
                        ? _c("i", {
                            staticClass: "nav-icon i-Cloud-Video",
                            staticStyle: {
                              display: "inline",
                              "font-size": "20px",
                              "padding-left": "28px",
                              "padding-right": "28px",
                              float: "right",
                            },
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      this.$i18n.locale == "en"
                        ? _c("i", {
                            staticClass: "nav-icon i-Cloud-Video",
                            staticStyle: {
                              display: "inline",
                              "font-size": "20px",
                              "padding-left": "28px",
                              "padding-right": "28px",
                              float: "left",
                            },
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "nav-text",
                          staticStyle: { "font-size": "15px" },
                        },
                        [_vm._v(_vm._s(_vm.$t("Ad")))]
                      ),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value:
                        _vm.currentUserPermissions &&
                        _vm.currentUserPermissions.includes("products_view"),
                      expression:
                        "currentUserPermissions   &&   currentUserPermissions.includes('products_view') ",
                    },
                  ],
                  staticClass: "nav-item",
                  class: { active: _vm.selectedParentMenu == "about" },
                  attrs: { "data-item": "about" },
                  on: { mouseenter: _vm.toggleSubMenu },
                },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-item-hold",
                      attrs: { tag: "a", to: "/app/settings/Abouts" },
                    },
                    [
                      this.$i18n.locale == "ar"
                        ? _c("i", {
                            staticClass: "nav-icon i-Information",
                            staticStyle: {
                              display: "inline",
                              "font-size": "20px",
                              "padding-left": "28px",
                              "padding-right": "28px",
                              float: "right",
                            },
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      this.$i18n.locale == "en"
                        ? _c("i", {
                            staticClass: "nav-icon i-Information",
                            staticStyle: {
                              display: "inline",
                              "font-size": "20px",
                              "padding-left": "28px",
                              "padding-right": "28px",
                              float: "left",
                            },
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "nav-text",
                          staticStyle: { "font-size": "15px" },
                        },
                        [_vm._v(_vm._s(_vm.$t("About")))]
                      ),
                    ]
                  ),
                ],
                1
              ),
            ]),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "vue-perfect-scrollbar",
        {
          staticClass: "sidebar-left-secondary ps rtl-ps-none",
          class: {
            open: _vm.getSideBarToggleProperties.isSecondarySideNavOpen,
          },
          attrs: {
            settings: { suppressScrollX: true, wheelPropagation: false },
          },
        },
        [
          _c("div", { ref: "sidebarChild" }, [
            _c(
              "ul",
              {
                staticClass: "childNav d-none",
                class: { "d-block": _vm.selectedParentMenu == "episodes" },
                attrs: { "data-parent": "episodes" },
              },
              [
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/episodes/store" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Add-File" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v(_vm._s(_vm.$t("AddEpisode"))),
                        ]),
                      ]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/episodes/list" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Files" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v(_vm._s(_vm.$t("episodesList"))),
                        ]),
                      ]
                    ),
                  ],
                  1
                ),
              ]
            ),
            _vm._v(" "),
            _c(
              "ul",
              {
                staticClass: "childNav d-none",
                class: { "d-block": _vm.selectedParentMenu == "movies" },
                attrs: { "data-parent": "movies" },
              },
              [
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/movies/store" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Add-File" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v(_vm._s(_vm.$t("AddMovie"))),
                        ]),
                      ]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { attrs: { tag: "a", to: "/app/movies/list" } },
                      [
                        _c("i", { staticClass: "nav-icon i-Files" }),
                        _vm._v(" "),
                        _c("span", { staticClass: "item-name" }, [
                          _vm._v(_vm._s(_vm.$t("moviesList"))),
                        ]),
                      ]
                    ),
                  ],
                  1
                ),
              ]
            ),
            _vm._v(" "),
            _c(
              "ul",
              {
                staticClass: "childNav d-none",
                class: { "d-block": _vm.selectedParentMenu == "settings" },
                attrs: { "data-parent": "settings" },
              },
              [
                _vm.currentUserPermissions &&
                _vm.currentUserPermissions.includes("setting_system")
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              tag: "a",
                              to: "/app/settings/System_settings",
                            },
                          },
                          [
                            _c("i", {
                              staticClass: "nav-icon i-Data-Settings",
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(_vm._s(_vm.$t("SystemSettings"))),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.currentUserPermissions &&
                _vm.currentUserPermissions.includes("permissions_view")
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              tag: "a",
                              to: "/app/settings/permissions",
                            },
                          },
                          [
                            _c("i", { staticClass: "nav-icon i-Key" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(_vm._s(_vm.$t("GroupPermissions"))),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.currentUserPermissions &&
                _vm.currentUserPermissions.includes("category")
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: { tag: "a", to: "/app/settings/Categories" },
                          },
                          [
                            _c("i", {
                              staticClass: "nav-icon i-Duplicate-Layer",
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "item-name" }, [
                              _vm._v(_vm._s(_vm.$t("Categories"))),
                            ]),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
              ]
            ),
          ]),
        ]
      ),
      _vm._v(" "),
      _c("div", {
        staticClass: "sidebar-overlay",
        class: { open: _vm.getSideBarToggleProperties.isSecondarySideNavOpen },
        on: {
          click: function ($event) {
            return _vm.removeOverlay()
          },
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=template&id=7dfa9f1c&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=template&id=7dfa9f1c& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "main-header" }, [
    _c(
      "div",
      { staticClass: "logo" },
      [
        _c("router-link", { attrs: { to: "/app/dashboard" } }, [
          _c("img", {
            staticStyle: { width: "170px" },
            attrs: {
              src: "/images/" + _vm.currentUser.logo,
              alt: "",
              height: "60",
            },
          }),
        ]),
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "menu-toggle", on: { click: _vm.sideBarToggle } },
      [
        _c("div", { staticStyle: { "background-color": "white" } }),
        _vm._v(" "),
        _c("div", { staticStyle: { "background-color": "white" } }),
        _vm._v(" "),
        _c("div", { staticStyle: { "background-color": "white" } }),
      ]
    ),
    _vm._v(" "),
    _c("div", { staticStyle: { margin: "auto" } }),
    _vm._v(" "),
    _c("div", { staticClass: "header-part-right" }, [
      _c(
        "div",
        { staticClass: "dropdown" },
        [
          _c(
            "b-dropdown",
            {
              staticClass: "m-md-2 d-none  d-md-block",
              attrs: {
                id: "dropdown",
                text: "Dropdown Button",
                "toggle-class": "text-decoration-none",
                "no-caret": "",
                variant: "link",
              },
            },
            [
              _c("template", { slot: "button-content" }, [
                _c("i", {
                  staticClass: "i-Globe text-muted header-icon",
                  staticStyle: { "background-color": "white" },
                  attrs: {
                    role: "button",
                    id: "dropdownMenuButton",
                    "data-toggle": "dropdown",
                    "aria-haspopup": "true",
                    "aria-expanded": "false",
                  },
                }),
              ]),
              _vm._v(" "),
              _c(
                "vue-perfect-scrollbar",
                {
                  ref: "myData",
                  staticClass:
                    "dropdown-menu-right rtl-ps-none notification-dropdown ps scroll",
                  attrs: {
                    settings: {
                      suppressScrollX: true,
                      wheelPropagation: false,
                    },
                  },
                },
                [
                  _c("div", { staticClass: "menu-icon-grid" }, [
                    _c(
                      "a",
                      {
                        staticStyle: { "font-size": "16px" },
                        on: {
                          click: function ($event) {
                            return _vm.SetLocal("en")
                          },
                        },
                      },
                      [
                        _c("i", {
                          staticClass:
                            "flag-icon flag-icon-squared flag-icon-gb",
                          attrs: { title: "en" },
                        }),
                        _vm._v(" English\n            "),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticStyle: { "font-size": "16px" },
                        on: {
                          click: function ($event) {
                            return _vm.SetLocal("ar")
                          },
                        },
                      },
                      [
                        _c("i", {
                          staticClass:
                            "flag-icon flag-icon-squared flag-icon-sa",
                          attrs: { title: "sa" },
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "title-lang" }, [
                          _vm._v("Arabic"),
                        ]),
                      ]
                    ),
                  ]),
                ]
              ),
            ],
            2
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "dropdown" },
        [
          _c(
            "b-dropdown",
            {
              staticClass: "m-md-2 user col align-self-end d-md-block",
              attrs: {
                id: "dropdown-1",
                text: "Dropdown Button",
                "toggle-class": "text-decoration-none",
                "no-caret": "",
                variant: "link",
              },
            },
            [
              _c("template", { slot: "button-content" }, [
                _c("img", {
                  attrs: {
                    src: "/images/avatar/" + _vm.currentUser.avatar,
                    id: "userDropdown",
                    alt: "",
                    "data-toggle": "dropdown",
                    "aria-haspopup": "true",
                    "aria-expanded": "false",
                  },
                }),
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "dropdown-menu-right",
                  attrs: { "aria-labelledby": "userDropdown" },
                },
                [
                  _c("div", { staticClass: "dropdown-header" }, [
                    _c("i", { staticClass: "i-Lock-User mr-1" }),
                    _vm._v(" "),
                    _c("span", [_vm._v(_vm._s(_vm.currentUser.username))]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "dropdown-item",
                      attrs: { to: "/app/profile" },
                    },
                    [_vm._v(_vm._s(_vm.$t("profil")))]
                  ),
                  _vm._v(" "),
                  _vm.currentUserPermissions &&
                  _vm.currentUserPermissions.includes("setting_system")
                    ? _c(
                        "router-link",
                        {
                          staticClass: "dropdown-item",
                          attrs: { to: "/app/settings/System_settings" },
                        },
                        [_vm._v(_vm._s(_vm.$t("Settings")))]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "dropdown-item",
                      attrs: { href: "#" },
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.logoutUser($event)
                        },
                      },
                    },
                    [_vm._v(_vm._s(_vm.$t("logout")))]
                  ),
                ],
                1
              ),
            ],
            2
          ),
        ],
        1
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=template&id=427f8858&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=template&id=427f8858& ***!
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
    { staticClass: "app-admin-wrap layout-sidebar-large clearfix" },
    [
      _c("top-nav"),
      _vm._v(" "),
      _c("sidebar"),
      _vm._v(" "),
      _c("main", [
        _c(
          "div",
          {
            staticClass: "main-content-wrap d-flex flex-column flex-grow-1",
            class: {
              "sidenav-open": _vm.getSideBarToggleProperties.isSideNavOpen,
            },
          },
          [
            _c(
              "transition",
              { attrs: { name: "page", mode: "out-in" } },
              [_c("router-view")],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "flex-grow-1" }),
            _vm._v(" "),
            _c("appFooter"),
          ],
          1
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/src/containers/layouts/common/footer.vue":
/*!************************************************************!*\
  !*** ./resources/src/containers/layouts/common/footer.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_vue_vue_type_template_id_1dfb17ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.vue?vue&type=template&id=1dfb17ff&scoped=true& */ "./resources/src/containers/layouts/common/footer.vue?vue&type=template&id=1dfb17ff&scoped=true&");
/* harmony import */ var _footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.vue?vue&type=script&lang=js& */ "./resources/src/containers/layouts/common/footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _footer_vue_vue_type_template_id_1dfb17ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _footer_vue_vue_type_template_id_1dfb17ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1dfb17ff",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/containers/layouts/common/footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/containers/layouts/common/footer.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/src/containers/layouts/common/footer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/containers/layouts/common/footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/containers/layouts/common/footer.vue?vue&type=template&id=1dfb17ff&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/src/containers/layouts/common/footer.vue?vue&type=template&id=1dfb17ff&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_1dfb17ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./footer.vue?vue&type=template&id=1dfb17ff&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/containers/layouts/common/footer.vue?vue&type=template&id=1dfb17ff&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_1dfb17ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_1dfb17ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/Sidebar.vue":
/*!*******************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/Sidebar.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar_vue_vue_type_template_id_696fbebe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=696fbebe&scoped=true& */ "./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=template&id=696fbebe&scoped=true&");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js& */ "./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sidebar_vue_vue_type_template_id_696fbebe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sidebar_vue_vue_type_template_id_696fbebe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "696fbebe",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/containers/layouts/largeSidebar/Sidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=template&id=696fbebe&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=template&id=696fbebe&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_696fbebe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=template&id=696fbebe&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=template&id=696fbebe&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_696fbebe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_696fbebe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/TopNav.vue":
/*!******************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/TopNav.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopNav_vue_vue_type_template_id_7dfa9f1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopNav.vue?vue&type=template&id=7dfa9f1c& */ "./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=template&id=7dfa9f1c&");
/* harmony import */ var _TopNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopNav.vue?vue&type=script&lang=js& */ "./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TopNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopNav_vue_vue_type_template_id_7dfa9f1c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopNav_vue_vue_type_template_id_7dfa9f1c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/containers/layouts/largeSidebar/TopNav.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopNav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=template&id=7dfa9f1c&":
/*!*************************************************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=template&id=7dfa9f1c& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_template_id_7dfa9f1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopNav.vue?vue&type=template&id=7dfa9f1c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=template&id=7dfa9f1c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_template_id_7dfa9f1c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_template_id_7dfa9f1c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/index.vue":
/*!*****************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/index.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_427f8858___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=427f8858& */ "./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=template&id=427f8858&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_427f8858___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_427f8858___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/containers/layouts/largeSidebar/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=template&id=427f8858&":
/*!************************************************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=template&id=427f8858& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_427f8858___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=427f8858& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=template&id=427f8858&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_427f8858___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_427f8858___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/src/utils/index.js":
/*!**************************************!*\
  !*** ./resources/src/utils/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var toggleFullScreen = function toggleFullScreen() {
  var doc = window.document;
  var docEl = doc.documentElement;
  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  } else {
    cancelFullScreen.call(doc);
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  toggleFullScreen: toggleFullScreen
});

/***/ })

}]);