<template>
  <div  
    class="side-content-wrap" 
    @mouseenter="isMenuOver = true"
    @mouseleave="isMenuOver = false"
    @touchstart="isMenuOver = true"
  >
    <vue-perfect-scrollbar  
      :settings="{ suppressScrollX: true, wheelPropagation: false }"
      :class="{ open: getSideBarToggleProperties.isSideNavOpen }"
      ref="myData"
      class="sidebar-left rtl-ps-none ps scroll"
    >
      <div>
        <ul class="navigation-left" >



 


          
          <li  v-show="currentUserPermissions   &&   currentUserPermissions.includes('products_view') " 
            @mouseenter="toggleSubMenu"
            :class="{ active: selectedParentMenu == 'dashboard' }"
            class="nav-item"
            data-item="dashboard"
          >
            <router-link tag="a" class="nav-item-hold" to="/app/dashboard">
              <!-- <img src="https://cdn-icons-png.flaticon.com/512/11451/11451050.png" style="display: inline; font-size: 20px; padding-left: 10px;  padding-right: 10px;">  -->
            
            
            
              <i v-if="this.$i18n.locale == 'ar'" class="nav-icon i-Bar-Chart" style="display: inline; font-size: 20px; padding-left: 28px;  padding-right: 28px; float: right;"></i>
              <i v-if="this.$i18n.locale == 'en'" class="nav-icon i-Bar-Chart" style="display: inline; font-size: 20px; padding-left: 28px;  padding-right: 28px; float: left;"></i>
            
            
            
              <span class="nav-text"  style="  font-size: 15px;">{{ $t("dashboard") }}</span>
            </router-link>
          </li>


 


          <li  v-show="currentUserPermissions   &&   currentUserPermissions.includes('products_view') " 
            @mouseenter="toggleSubMenu"
            :class="{ active: selectedParentMenu == 'Users' }"
            class="nav-item"
            data-item="Users"
          >
            <router-link tag="a" class="nav-item-hold" to="/app/People/Users">
              <!-- <img src="https://cdn-icons-png.flaticon.com/512/11451/11451050.png" style="display: inline; font-size: 20px; padding-left: 10px;  padding-right: 10px;">  -->
              <i v-if="this.$i18n.locale == 'ar'" class="nav-icon i-Administrator" style="display: inline; font-size: 20px; padding-left: 28px;  padding-right: 28px;   float: right;"></i>
              <i v-if="this.$i18n.locale == 'en'" class="nav-icon i-Administrator" style="display: inline; font-size: 20px; padding-left: 28px;  padding-right: 28px; float: left;"></i>
              
              
              
              <span class="nav-text"  style="  font-size: 15px;">{{ $t("Users") }}</span>
            </router-link>
          </li>




          <!-- <li v-show="currentUserPermissions   &&   currentUserPermissions.includes('products_view') " 
            @mouseenter="toggleSubMenu"
            :class="{ active: selectedParentMenu == 'episodes' }"
            class="nav-item"
            data-item="episodes"
          >
            <router-link tag="a" class="nav-item-hold" to="/app/episodes/list">
             
              <i v-if="this.$i18n.locale == 'ar'" class="nav-icon i-Movie" style="display: inline; font-size: 20px; padding-left: 28px;  padding-right: 28px; float: right;"></i>
              <i v-if="this.$i18n.locale == 'en'" class="nav-icon i-Movie" style="display: inline; font-size: 20px; padding-left: 28px;  padding-right: 28px; float: left;"></i>
            
           
             
           
              <span class="nav-text"  style="  font-size: 15px;">{{ $t("Episodes") }}</span>
            </router-link>
          </li> -->






          <!-- <li  v-show="currentUserPermissions   &&   currentUserPermissions.includes('products_view') " 
            @mouseenter="toggleSubMenu"
            :class="{ active: selectedParentMenu == 'Packages' }"
            class="nav-item"
            data-item="Packages"
          >
            <router-link tag="a" class="nav-item-hold" to="/app/settings/Packages">
             
              <i v-if="this.$i18n.locale == 'ar'" class="nav-icon i-Box-Full" style="display: inline; font-size: 20px; padding-left: 28px;  padding-right: 28px; float: right;"></i>
              <i v-if="this.$i18n.locale == 'en'" class="nav-icon i-Box-Full" style="display: inline; font-size: 20px; padding-left: 28px;  padding-right: 28px; float: left;"></i>
            
           
             
           
              <span class="nav-text"  style="  font-size: 15px;">{{ $t("Package") }}</span>
            </router-link>
          </li> -->





<!-- 
          <li v-show="currentUserPermissions   &&   currentUserPermissions.includes('products_view') " 
            @mouseenter="toggleSubMenu"
            :class="{ active: selectedParentMenu == 'movies' }"
            class="nav-item"
            data-item="movies"
          >
            <router-link tag="a" class="nav-item-hold" to="/app/movies/list">
             
              <i v-if="this.$i18n.locale == 'ar'" class="nav-icon i-TV" style="display: inline; font-size: 20px; padding-left: 28px;  padding-right: 28px; float: right;"></i>
              <i v-if="this.$i18n.locale == 'en'" class="nav-icon i-TV" style="display: inline; font-size: 20px; padding-left: 28px;  padding-right: 28px; float: left;"></i>
            
            
              <span class="nav-text"  style="  font-size: 15px;">{{ $t("Movies") }}</span>
            </router-link>
          </li> -->


          
   
<!-- 
          <li
            
            @mouseenter="toggleSubMenu"
            class="nav-item"
            :class="{ active: selectedParentMenu == 'movies' }"
            data-item="movies"
            :data-submenu="true">
            <a class="nav-item-hold" href="#">
      

              <i class="nav-icon i-TV" style="display: inline; font-size: 20px; padding-left: 10px;  padding-right: 10px;"></i>
              <span class="nav-text"  style="  font-size: 15px;">{{ $t("Movies") }}</span>
              
            </a>
            <div class="triangle"></div>
          </li> -->





          
          <li v-show="currentUserPermissions   &&   currentUserPermissions.includes('products_view') " 
            @mouseenter="toggleSubMenu"
            :class="{ active: selectedParentMenu == 'category' }"
            class="nav-item"
            data-item="category"
          >
            <router-link tag="a" class="nav-item-hold" to="/app/settings/Categories">
              <!-- <img src="https://cdn-icons-png.flaticon.com/512/11451/11451050.png" style="display: inline; font-size: 20px; padding-left: 10px;  padding-right: 10px;">  -->
           
              <i v-if="this.$i18n.locale == 'ar'" class="nav-icon i-Duplicate-Layer" style="display: inline; font-size: 20px; padding-left: 28px;  padding-right: 28px; float: right;"></i>
              <i v-if="this.$i18n.locale == 'en'" class="nav-icon i-Duplicate-Layer" style="display: inline; font-size: 20px; padding-left: 28px;  padding-right: 28px; float: left;"></i>
            
           
             
             
              <span class="nav-text"  style="  font-size: 15px;">{{ $t("Categories") }}</span>
            </router-link>
          </li>





          <!-- <li v-show="currentUserPermissions   &&   currentUserPermissions.includes('products_view') " 
            @mouseenter="toggleSubMenu"
            :class="{ active: selectedParentMenu == 'subscription' }"
            class="nav-item"
            data-item="subscription"
          >
            <router-link tag="a" class="nav-item-hold" to="/app/settings/Subscriptions">
           
              <i v-if="this.$i18n.locale == 'ar'" class="nav-icon i-Credit-Card2" style="display: inline; font-size: 20px; padding-left: 28px;  padding-right: 28px; float: right;"></i>
              <i v-if="this.$i18n.locale == 'en'" class="nav-icon i-Credit-Card2" style="display: inline; font-size: 20px; padding-left: 28px;  padding-right: 28px; float: left;"></i>
            
           
              <span class="nav-text"  style="  font-size: 15px;">{{ $t("Subscription") }}</span>
            </router-link>
          </li> -->


      


 
          
          <li v-show="currentUserPermissions   &&   currentUserPermissions.includes('products_view') " 
            @mouseenter="toggleSubMenu"
            :class="{ active: selectedParentMenu == 'setting_system' }"
            class="nav-item"
            data-item="setting_system"
          >
            <router-link tag="a" class="nav-item-hold" to="/app/settings/System_settings">
              <!-- <img src="https://cdn-icons-png.flaticon.com/512/11451/11451050.png" style="display: inline; font-size: 20px; padding-left: 10px;  padding-right: 10px;">  -->
          
             
              <i v-if="this.$i18n.locale == 'ar'" class="nav-icon i-Data-Settings" style="display: inline; font-size: 20px; padding-left: 28px;  padding-right: 28px; float: right;"></i>
              <i v-if="this.$i18n.locale == 'en'" class="nav-icon i-Data-Settings" style="display: inline; font-size: 20px; padding-left: 28px;  padding-right: 28px; float: left;"></i>
            
           
             
              <span class="nav-text"  style="  font-size: 15px;">{{ $t("SystemSettings") }}</span>
            </router-link>
          </li>





<!--                     
          <li v-show="currentUserPermissions   &&   currentUserPermissions.includes('products_view') " 
            @mouseenter="toggleSubMenu"
            :class="{ active: selectedParentMenu == 'date' }"
            class="nav-item"
            data-item="date"
          >
            <router-link tag="a" class="nav-item-hold" to="/app/settings/Dates">
              
             
              <i v-if="this.$i18n.locale == 'ar'" class="nav-icon i-Old-Clock" style="display: inline; font-size: 20px; padding-left: 28px;  padding-right: 28px; float: right;"></i>
              <i v-if="this.$i18n.locale == 'en'" class="nav-icon i-Old-Clock" style="display: inline; font-size: 20px; padding-left: 28px;  padding-right: 28px; float: left;"></i>
            
           
             
              <span class="nav-text"  style="  font-size: 15px;">{{   $t('Date') }}</span>
            </router-link>
          </li> -->

          
 
         


          <li v-show="currentUserPermissions   &&   currentUserPermissions.includes('products_view') " 
            @mouseenter="toggleSubMenu"
            :class="{ active: selectedParentMenu == 'notification' }"
            class="nav-item"
            data-item="notification"
          >
            <router-link tag="a" class="nav-item-hold" to="/app/settings/Notifications">
              <!-- <img src="https://cdn-icons-png.flaticon.com/512/11451/11451050.png" style="display: inline; font-size: 20px; padding-left: 10px;  padding-right: 10px;">  -->
          
             
              <i v-if="this.$i18n.locale == 'ar'" class="nav-icon i-Mail" style="display: inline; font-size: 20px; padding-left: 28px;  padding-right: 28px; float: right;"></i>
              <i v-if="this.$i18n.locale == 'en'" class="nav-icon i-Mail" style="display: inline; font-size: 20px; padding-left: 28px;  padding-right: 28px; float: left;"></i>
 
              <span class="nav-text"  style="  font-size: 15px;">{{   $t('Notification') }}</span>
            </router-link>
          </li>


      


          <li  v-show="currentUserPermissions   &&   currentUserPermissions.includes('products_view') " 
            @mouseenter="toggleSubMenu"
            :class="{ active: selectedParentMenu == 'ad' }"
            class="nav-item"
            data-item="ad"
          >
            <router-link tag="a" class="nav-item-hold" to="/app/settings/Ads">
              <!-- <img src="https://cdn-icons-png.flaticon.com/512/11451/11451050.png" style="display: inline; font-size: 20px; padding-left: 10px;  padding-right: 10px;">  -->
          
             
              <i v-if="this.$i18n.locale == 'ar'" class="nav-icon i-Cloud-Video" style="display: inline; font-size: 20px; padding-left: 28px;  padding-right: 28px; float: right;"></i>
              <i v-if="this.$i18n.locale == 'en'" class="nav-icon i-Cloud-Video" style="display: inline; font-size: 20px; padding-left: 28px;  padding-right: 28px; float: left;"></i>
 
              <span class="nav-text"  style="  font-size: 15px;">{{   $t('Ad') }}</span>
            </router-link>
          </li>



          <li  v-show="currentUserPermissions   &&   currentUserPermissions.includes('products_view') " 
            @mouseenter="toggleSubMenu"
            :class="{ active: selectedParentMenu == 'about' }"
            class="nav-item"
            data-item="about"
          >
            <router-link tag="a" class="nav-item-hold" to="/app/settings/Abouts">
              <i v-if="this.$i18n.locale == 'ar'" class="nav-icon i-Information" style="display: inline; font-size: 20px; padding-left: 28px;  padding-right: 28px; float: right;"></i>
              <i v-if="this.$i18n.locale == 'en'" class="nav-icon i-Information" style="display: inline; font-size: 20px; padding-left: 28px;  padding-right: 28px; float: left;"></i>
              <span class="nav-text"  style="  font-size: 15px;">{{   $t('About') }}</span>
            </router-link>
          </li>


        

         
        </ul>
      </div>
    </vue-perfect-scrollbar>


    <vue-perfect-scrollbar  
      :class="{ open: getSideBarToggleProperties.isSecondarySideNavOpen }"
      :settings="{ suppressScrollX: true, wheelPropagation: false }"
      class="sidebar-left-secondary ps rtl-ps-none"
    >
      <div ref="sidebarChild">





        <ul
          class="childNav d-none"
          data-parent="episodes"
          :class="{ 'd-block': selectedParentMenu == 'episodes' }">

          <li
            class="nav-item" >
            <router-link tag="a" class to="/app/episodes/store">
              <i class="nav-icon i-Add-File"></i>
              <span class="item-name">{{  $t('AddEpisode')  }}</span>
            </router-link>
          </li>


          <li
            class="nav-item" >
            <router-link tag="a" class to="/app/episodes/list">
              <i class="nav-icon i-Files"></i>
              <span class="item-name">{{  $t('episodesList') }}</span>
            </router-link>
          </li>
 
        </ul>



      
            
        <ul
          class="childNav d-none"
          data-parent="movies"
          :class="{ 'd-block': selectedParentMenu == 'movies' }">

          <li
            class="nav-item" >
            <router-link tag="a" class to="/app/movies/store">
              <i class="nav-icon i-Add-File"></i>
              <span class="item-name">{{  $t('AddMovie')  }}</span>
            </router-link>
          </li>


          <li
            class="nav-item"  >
            <router-link tag="a" class to="/app/movies/list">
              <i class="nav-icon i-Files"></i>
              <span class="item-name">{{  $t('moviesList') }}</span>
            </router-link>
          </li>
 
        </ul>
 

        <!-- <ul
          class="childNav d-none"
          data-parent="People"
          :class="{ 'd-block': selectedParentMenu == 'People' }"
        >
 
    
          <li
            class="nav-item"
            v-if="currentUserPermissions && currentUserPermissions.includes('users_view')"
          >
            <router-link tag="a" class to="/app/People/Users">
              <i class="nav-icon i-Administrator"></i>
              <span class="item-name">{{$t('Users')}}</span>
            </router-link>
          </li>
        </ul> -->

        <ul
          class="childNav d-none"
          data-parent="settings"
          :class="{ 'd-block': selectedParentMenu == 'settings' }"
        >
          <li
            class="nav-item"
            v-if="currentUserPermissions && currentUserPermissions.includes('setting_system')"
          >
            <router-link tag="a" class to="/app/settings/System_settings">
              <i class="nav-icon i-Data-Settings"></i>
              <span class="item-name">{{$t('SystemSettings')}}</span>
            </router-link>
          </li>
          <li
            class="nav-item"
            v-if="currentUserPermissions && currentUserPermissions.includes('permissions_view')"
          >
            <router-link tag="a" class to="/app/settings/permissions">
              <i class="nav-icon i-Key"></i>
              <span class="item-name">{{$t('GroupPermissions')}}</span>
            </router-link>
          </li>
  
          <li
            class="nav-item"
            v-if="currentUserPermissions && currentUserPermissions.includes('category')"
          >
            <router-link tag="a" class to="/app/settings/Categories">
              <i class="nav-icon i-Duplicate-Layer"></i>
              <span class="item-name">{{$t('Categories')}}</span>
            </router-link>
          </li>
 
 


 






    
 
 
        </ul>

    
      </div>
    </vue-perfect-scrollbar>
    <div
      @click="removeOverlay()"
      class="sidebar-overlay"
      :class="{ open: getSideBarToggleProperties.isSecondarySideNavOpen }"
    ></div>
  </div>
  <!--=============== Left side End ================-->
</template>

<script>
import { isMobile } from "mobile-device-detect";
import {
    mapActions,
    mapGetters,
} from "vuex";

import Topnav from "./TopNav";

export default {
  components: {
    Topnav
  },

  data() {
    return {
      isDisplay: true,
      isMenuOver: false,
      isStyle: true,
      selectedParentMenu: "",
      isMobile
    };
  },
  mounted() {
    this.toggleSelectedParentMenu();
    window.addEventListener("resize", this.handleWindowResize);
    document.addEventListener("click", this.returnSelectedParentMenu);
    this.handleWindowResize();
  },

  beforeDestroy() {
    document.removeEventListener("click", this.returnSelectedParentMenu);
    window.removeEventListener("resize", this.handleWindowResize);
  },

  computed: {
    ...mapGetters(["getSideBarToggleProperties", "currentUserPermissions"])
  },

  methods: {
    ...mapActions([
      "changeSecondarySidebarProperties",
      "changeSecondarySidebarPropertiesViaMenuItem",
      "changeSecondarySidebarPropertiesViaOverlay",
      "changeSidebarProperties"
    ]),

    handleWindowResize() {
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
    toggleSelectedParentMenu() {
      const currentParentUrl = this.$route.path
        .split("/")
        .filter(x => x !== "")[1];
      if (currentParentUrl !== undefined || currentParentUrl !== null) {
        this.selectedParentMenu = currentParentUrl.toLowerCase();
      } else {
        this.selectedParentMenu = "dashboard";
      }
    },
    toggleSubMenu(e) {
      let hasSubmenu = e.target.dataset.submenu;
      let parent = e.target.dataset.item;

      if (hasSubmenu) {
        this.selectedParentMenu = parent;

        this.changeSecondarySidebarPropertiesViaMenuItem(true);
      } else {
        this.selectedParentMenu = parent;
        this.changeSecondarySidebarPropertiesViaMenuItem(false);
      }
    },

    removeOverlay() {
      this.changeSecondarySidebarPropertiesViaOverlay();
      if (window.innerWidth <= 1200) {
        this.changeSidebarProperties();
      }
      this.toggleSelectedParentMenu();
    },
    returnSelectedParentMenu() {
      if (!this.isMenuOver) {
        this.toggleSelectedParentMenu();
      }
    },

    toggleSidebarDropdwon(event) {
      let dropdownMenus = this.$el.querySelectorAll(".dropdown-sidemenu.open");

      event.currentTarget.classList.toggle("open");

      dropdownMenus.forEach(dropdown => {
        dropdown.classList.remove("open");
      });
    }
  }
};
</script>

<style lang="" scoped>
</style>

