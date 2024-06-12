<template>
  <div class="main-content">
    <breadcumb :page="$t('SystemSettings')" :folder="$t('Settings')"/>
    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>

    <!-- System Settings -->
    <validation-observer ref="form_setting" v-if="!isLoading">
      <b-form @submit.prevent="Submit_Setting">
        <b-row>
          <b-col lg="12" md="12" sm="12">
            <b-card no-body :header="$t('SystemSettings')">
              <b-card-body>
                <b-row>
    
 

                  <!-- - Logo -->
                  <b-col lg="4" md="4" sm="12">
                    <validation-provider name="Logo" ref="Logo" rules="mimes:image/*|size:200">
                      <b-form-group
                        slot-scope="{validate, valid, errors }"
                        :label="$t('ChangeLogo')"
                      >
                        <input
                          :state="errors[0] ? false : (valid ? true : null)"
                          :class="{'is-invalid': !!errors.length}"
                          @change="onFileSelected"
                          label="Choose Logo"
                          type="file"
                        >
                        <b-form-invalid-feedback id="Logo-feedback">{{ errors[0] }}</b-form-invalid-feedback>
                      </b-form-group>
                    </validation-provider>
                  </b-col>

 
 

                   <!-- Default Language -->
                  <b-col lg="4" md="4" sm="12">
                    <validation-provider name="DefaultLanguage" :rules="{ required: true}">
                    <b-form-group slot-scope="{ valid, errors }" :label="$t('DefaultLanguage')">
                      <v-select
                        :class="{'is-invalid': !!errors.length}"
                        :state="errors[0] ? false : (valid ? true : null)"
                        v-model="setting.default_language"
                        :reduce="label => label.value"
                        :placeholder="$t('DefaultLanguage')"
                              :options="
                                  [
                                  {label: 'English', value: 'en'},
                      
                                  {label: 'Arabic', value: 'ar'},
                        
                              ]"                     
                      ></v-select>
                        <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                         </b-form-group>
                    </validation-provider>
                  </b-col>

 

                  <b-col md="12">
                    <b-form-group>
                      <b-button variant="primary" type="submit">{{$t('submit')}}</b-button>
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-form>
    </validation-observer>

 

 

 

    <!-- Server SMTP -->
 

    <!-- Clear Cache -->
      <b-form @submit.prevent="Clear_Cache" v-if="!isLoading">
        <b-row class="mt-5">
          <b-col lg="12" md="12" sm="12">
            <b-card no-body :header="$t('Clear_Cache')">
              <b-card-body>
                <b-row>

                  <b-col md="12">
                    <b-form-group>
                      <b-button variant="primary" @click="Clear_Cache()" >{{$t('Clear_Cache')}}</b-button>
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import NProgress from "nprogress";

export default {
  metaInfo: {
    title: "System Settings"
  },
  data() {
    return {
      
      isLoading: true,
      data: new FormData(),
      settings: [],
      currencies: [],
      clients: [],
      warehouses: [],
      setting: {
        client_id: "",
        warehouse_id: "",
        currency_id: "",
        email: "",
        logo: "",
        CompanyName: "",
        CompanyPhone: "",
        CompanyAdress: "",
        footer:"",
        developed_by:"",
        default_language:"",
      },

      pos_settings:{
        note_customer:"",
        show_note:"",
        show_barcode:"",
        show_discount:"",
        show_phone:"",
        show_email:"",
        show_address:"",
        show_customer:"",
      },

      gateway:{
        stripe_key:"",
        stripe_secret:"",
        deleted:false,
      },
      sms:{
        gateway:'Twilio',
        TWILIO_SID:'',
        TWILIO_TOKEN:'',
        TWILIO_FROM:'',
      },
      server: {
        host: "",
        port: "",
        username: "",
        password: "",
        encryption: ""
      }
    };
  },

  methods: {
    ...mapActions(["refreshUserPermissions"]),


      SetLocal(locale) {
      this.$i18n.locale = locale;
      this.$store.dispatch("language/setLanguage", locale);
      Fire.$emit("ChangeLanguage");
    },

    //------------- Submit Validation Setting
    Submit_Setting() {
      this.$refs.form_setting.validate().then(success => {
        if (!success) {
          this.makeToast(
            "danger",
            this.$t("Please_fill_the_form_correctly"),
            this.$t("Failed")
          );
        } else {
          this.Update_Settings();
        }
      });
    },


     //------------- Submit Validation Pos Setting
    Submit_Pos_Settings() {
      this.$refs.Submit_Pos_Settings.validate().then(success => {
        if (!success) {
          this.makeToast(
            "danger",
            this.$t("Please_fill_the_form_correctly"),
            this.$t("Failed")
          );
        } else {
          this.Update_Pos_Settings();
        }
      });
    },

    //------------- Submit Validation SMTP
    Submit_SMTP() {
      this.$refs.form_smtp.validate().then(success => {
        if (!success) {
          this.makeToast(
            "danger",
            this.$t("Please_fill_the_form_correctly"),
            this.$t("Failed")
          );
        } else {
            this.Update_Smtp();
        }
      });
    },

     //------------- Submit Validation Payment
    Submit_Payment() {
      this.$refs.form_payment.validate().then(success => {
        if (!success) {
          this.makeToast(
            "danger",
            this.$t("Please_fill_the_form_correctly"),
            this.$t("Failed")
          );
        } else {
            this.Update_Payment();
        }
      });
    },

      //------------- Submit Validation SMS
    Submit_sms() {
      this.$refs.form_sms.validate().then(success => {
        if (!success) {
          this.makeToast(
            "danger",
            this.$t("Please_fill_the_form_correctly"),
            this.$t("Failed")
          );
        } else {
            this.Update_SMS();
        }
      });
    },

    //------ Toast
    makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },

    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },

    //------------------------------ Event Upload Logo -------------------------------\\
    async onFileSelected(e) {
      const { valid } = await this.$refs.Logo.validate(e);

      if (valid) {
        this.setting.logo = e.target.files[0];
      } else {
        this.setting.logo = "";
      }
    },


  
    //---------------------------------- Update Settings ----------------\\
    Update_Settings() {
      NProgress.start();
      NProgress.set(0.1);
      var self = this;
      self.data.append("client", self.setting.client_id);
      self.data.append("warehouse", self.setting.warehouse_id);
      self.data.append("currency", self.setting.currency_id);
      self.data.append("email", self.setting.email);
      self.data.append("logo", self.setting.logo);
      self.data.append("CompanyName", self.setting.CompanyName);
      self.data.append("CompanyPhone", self.setting.CompanyPhone);
      self.data.append("CompanyAdress", self.setting.CompanyAdress);
      self.data.append("footer", self.setting.footer);
      self.data.append("developed_by", self.setting.developed_by);
      self.data.append("default_language", self.setting.default_language);
      self.data.append("_method", "put");

      axios
        .post("settings/" + self.setting.id, self.data)
        .then(response => {
          Fire.$emit("Event_Setting");
          this.makeToast(
            "success",
            this.$t("Successfully_Updated"),
            this.$t("Success")
          );
          this.refreshUserPermissions();
          NProgress.done();
          this.SetLocal(self.setting.default_language);
        })
        .catch(error => {
          this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
          NProgress.done();
        });
    }, 


 

    //---------------------------------- Update SMTP ----------------\\
    Update_Smtp() {
      NProgress.start();
      NProgress.set(0.1);
      axios
        .put("SMTP/" + this.server.id, {
          host: this.server.host,
          port: this.server.port,
          username: this.server.username,
          password: this.server.password,
          encryption: this.server.encryption
        })
        .then(response => {
          Fire.$emit("Event_Smtp");
          this.makeToast(
            "success",
            this.$t("Successfully_Updated"),
            this.$t("Success")
          );
          NProgress.done();
        })
        .catch(error => {
          NProgress.done();
          this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
        });
    },

    //---------------------------------- Update Payment Gateway ----------------\\
 
 
     //---------------------------------- get_sms_config ----------------\\
    get_sms_config() {
      axios
        .get("get_sms_config")
        .then(response => {
          this.sms = response.data.sms;
        })
        .catch(error => {
        });
    },   


    //---------------------------------- Clear_Cache ----------------\\
    Clear_Cache() {
      NProgress.start();
      NProgress.set(0.1);
      axios
        .get("Clear_Cache")
        .then(response => {
          this.makeToast(
            "success",
            this.$t("Cache_cleared_successfully"),
            this.$t("Success")
          );
          NProgress.done();
        })
        .catch(error => {
          NProgress.done();
          this.makeToast("danger", this.$t("Failed_to_clear_cache"), this.$t("Failed"));
        });
    },   

     //---------------------------------- GET Payment_Gateway ----------------\\
    Get_Payment_Gateway() {
      axios
        .get("Get_payment_gateway")
        .then(response => {
          this.gateway = response.data.gateway;
        })
        .catch(error => {
        });
    },

    //---------------------------------- Get SETTINGS ----------------\\
    Get_Settings() {
      axios
        .get("getSettings")
        .then(response => {
          this.setting    = response.data.settings;
 
 
 
 
 
          this.isLoading = false;
        })
        .catch(error => {
          setTimeout(() => {
            this.isLoading = false;
          }, 500);
        });
    },

    //---------------------------------- GET SMTP ----------------\\ 
    Get_SMTP() {
      axios
        .get("getSMTP")
        .then(response => {
          this.server = response.data.server;
        })
        .catch(error => {
        });
    },


 //---------------------------------- Get_pos_Settings ----------------\\ 
    get_pos_Settings() {
      axios
        .get("get_pos_Settings")
        .then(response => {
          this.pos_settings = response.data.pos_settings;
        })
        .catch(error => {
        });
    },

   
  }, //end Methods

  //----------------------------- Created function-------------------

  created: function() {
    this.Get_Settings();

    Fire.$on("Event_Smtp", () => {
      this.Get_SMTP(); 
    });

     Fire.$on("Event_payment", () => {
      this.Get_Payment_Gateway();
    });

    Fire.$on("Event_Setting", () => {
      this.Get_Settings();
    });

     Fire.$on("Event_Pos_Settings", () => {
      this.get_pos_Settings();
    });

    Fire.$on("Event_sms", () => {
      this.get_sms_config();
    });
  }
};
</script>