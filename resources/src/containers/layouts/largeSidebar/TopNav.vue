<template>
  <div class="main-header">
    <div class="logo">
       <router-link to="/app/dashboard">
        <img :src="'/images/'+currentUser.logo" alt  style="width: 170px;" height="60">
       </router-link>
    </div>

    <div @click="sideBarToggle" class="menu-toggle">
      <div style="background-color: white;"></div>
      <div style="background-color: white;"></div>
      <div style="background-color: white;"></div>
    </div>

    <div style="margin: auto"></div>

    <div class="header-part-right">
 
      <!-- Full screen toggle -->
      <!-- <i class="i-Full-Screen header-icon d-none d-sm-inline-block" @click="handleFullScreen"></i> -->
      <!-- Grid menu Dropdown -->

      <div class="dropdown">
        <b-dropdown
          id="dropdown"
          text="Dropdown Button"
          class="m-md-2 d-none  d-md-block"
          toggle-class="text-decoration-none"
          no-caret
          variant="link">


      
 

          <template slot="button-content" >
            <i style="background-color:white"
              class="i-Globe text-muted header-icon"
              role="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            ></i>
          </template>
          <vue-perfect-scrollbar 
            :settings="{ suppressScrollX: true, wheelPropagation: false }"
            ref="myData"
            class="dropdown-menu-right rtl-ps-none notification-dropdown ps scroll"
          >
            <div class="menu-icon-grid">
              <a @click="SetLocal('en')"  style="font-size: 16px;">
                <i title="en" class="flag-icon flag-icon-squared flag-icon-gb"></i> English
              </a>
        
              <a @click="SetLocal('ar')"  style="font-size: 16px;">
                <i title="sa" class="flag-icon flag-icon-squared flag-icon-sa"></i>
                <span class="title-lang">Arabic</span>
              </a>
  
 
            </div>
          </vue-perfect-scrollbar>
        </b-dropdown>
      </div>
      <!-- Notificaiton -->
   
      <!-- Notificaiton End -->

      <!-- User avatar dropdown -->
      <div class="dropdown">
        <b-dropdown
          id="dropdown-1"
          text="Dropdown Button"
          class="m-md-2 user col align-self-end d-md-block"
          toggle-class="text-decoration-none"
          no-caret
          variant="link"
        >
          <template slot="button-content" >
            <img
              :src="'/images/avatar/'+currentUser.avatar"
              id="userDropdown"
              alt
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
          </template>

          <div class="dropdown-menu-right" aria-labelledby="userDropdown">
            <div class="dropdown-header">
              <i class="i-Lock-User mr-1"></i> <span >{{currentUser.username}}</span>
            </div>
            <router-link to="/app/profile" class="dropdown-item">{{$t('profil')}}</router-link>
            <router-link
              v-if="currentUserPermissions && currentUserPermissions.includes('setting_system')"
              to="/app/settings/System_settings"
              class="dropdown-item"
            >{{$t('Settings')}}</router-link>
            <a class="dropdown-item" href="#" @click.prevent="logoutUser">{{$t('logout')}}</a>
          </div>
        </b-dropdown>
      </div>
    </div>
  </div>

  <!-- header top menu end -->
</template>
<script>
// import Sidebar from "./Sidebar";
import { isMobile } from "mobile-device-detect";
import { mixin as clickaway } from "vue-clickaway";
// import { setTimeout } from 'timers';
import FlagIcon from "vue-flag-icon";
import {
    mapActions,
    mapGetters,
} from "vuex";

import Util from "../../../utils";

export default {
  mixins: [clickaway],
  components: {
    FlagIcon
  },

  data() {
  
    return {
      langs: [
        "en",
        "fr",
        "ar",
        "de",
        "es",
        "it",
        "Ind",
        "thai",
        "tr_ch",
        "sm_ch",
        "tur",
        "ru",
        "hn",
        "vn"
      ],
      
      isDisplay: true,
      isStyle: true,
      isSearchOpen: false,
      isMouseOnMegaMenu: true,
      isMegaMenuOpen: false,
      is_Load:false,
      // alerts:0,
     
    };
  },
  mounted() {
    if( this.$i18n.locale == "ar"){
        this.changetoRtl();
      }else{
       this.changetoLtr(); 
      }

  },
  
   computed: {
     
     ...mapGetters([
       "currentUser",
      "getSideBarToggleProperties",
      "currentUserPermissions",
   
    ]),


  },

  methods: {

 

    
    ...mapActions([
      "changetoLtr",
      "changetoRtl",
    "changeThemeRtl",
      "changeSecondarySidebarProperties",
      "changeSidebarProperties",
      "changeThemeMode",
      "logout",
    ]),

    logoutUser() {
      this.$store.dispatch("logout");
    },

    SetLocal(locale) {
      this.$i18n.locale = locale;

      if( this.$i18n.locale == "ar"){
        this.changetoRtl();
      }else{
       this.changetoLtr(); 
      }


      this.$store.dispatch("language/setLanguage", locale);
      Fire.$emit("ChangeLanguage");
    },

    handleFullScreen() {
      Util.toggleFullScreen();
    },
    logoutUser() {
      this.logout();
    },

    closeMegaMenu() {
      this.isMegaMenuOpen = false;
    },
    toggleMegaMenu() {
      this.isMegaMenuOpen = !this.isMegaMenuOpen;
    },
    toggleSearch() {
      this.isSearchOpen = !this.isSearchOpen;
    },


    
    sideBarToggle(el) {
      if (
        this.getSideBarToggleProperties.isSideNavOpen &&
        this.getSideBarToggleProperties.isSecondarySideNavOpen &&
        isMobile
      ) {
        this.changeSidebarProperties();
        this.changeSecondarySidebarProperties();
      } else if (
        this.getSideBarToggleProperties.isSideNavOpen &&
        this.getSideBarToggleProperties.isSecondarySideNavOpen
      ) {
        this.changeSecondarySidebarProperties();
      } else if (this.getSideBarToggleProperties.isSideNavOpen) {
        this.changeSidebarProperties();
      } else if (
        !this.getSideBarToggleProperties.isSideNavOpen &&
        !this.getSideBarToggleProperties.isSecondarySideNavOpen &&
        !this.getSideBarToggleProperties.isActiveSecondarySideNav
      ) {
        this.changeSidebarProperties();
      } else if (
        !this.getSideBarToggleProperties.isSideNavOpen &&
        !this.getSideBarToggleProperties.isSecondarySideNavOpen
      ) {

        this.changeSidebarProperties();
        this.changeSecondarySidebarProperties();
      }
    }
  }
};
</script>



