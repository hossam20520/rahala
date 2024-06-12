<template>
 
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      isOpen: false,
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
      
    };
  },

  computed: {
    ...mapGetters(["getThemeMode", "getcompactLeftSideBarBgColor"]),
  },

  methods: {
    ...mapActions([
      "changeThemeRtl",
      "changeThemeLayout",
      "changeThemeMode",
      "changecompactLeftSideBarBgColor",
    ]),

    SetLocal(locale) {
      this.$i18n.locale = locale;
      this.$store.dispatch("language/setLanguage", locale);
      Fire.$emit("ChangeLanguage");
    },
   
  },
};
</script>

<style lang="scss" scoped>
</style>