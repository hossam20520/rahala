<template>
  <div class="main-content">
    <breadcumb :page=" $t('updateEpisodes')  " :folder="$t('Episodes')"/>
    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>

    <validation-observer ref="Edit_Episode" v-if="!isLoading">
      <b-form @submit.prevent="Submit_Episode" enctype="multipart/form-data">
        <b-row>
          <b-col md="8">
            <b-card>
              <b-card-body>
                <b-row>
  

 
                  <b-col lg="12" md="12" sm="12" class="mb-2">
                  <validation-provider name="filler" :rules="{ required: true }">
                    <b-form-group slot-scope="{ valid, errors }" :label="$t('filler')">
                      <v-select :class="{ 'is-invalid': !!errors.length }"
                        :state="errors[0] ? false : (valid ? true : null)" v-model="episode.filler"
                        :reduce="label => label.value" :placeholder="$t('Choose_filler')" :options="[
                            { label: 'No', value: 'no' },
                            { label: 'Yes', value: 'yes' },
                         
                          ]"></v-select>
                      <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>



                  <b-col md="6" class="mb-2">
                  <validation-provider name="ar_Name_episodes" :rules="{ required: true, min: 3, max: 55 }"
                    v-slot="validationContext">
                    <b-form-group :label="$t('ar_Name_episodes')">
                      <b-form-input :state="getValidationState(validationContext)" aria-describedby="Name-feedback"
                        label="ar_Name_episodes" :placeholder="$t('ar_Name_episodes')" v-model="episode.ar_name"></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0]
                      }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>



                <b-col md="6" class="mb-2">
                  <validation-provider name="en_Name_episodes" :rules="{ required: true, min: 3, max: 55 }"
                    v-slot="validationContext">
                    <b-form-group :label="$t('en_Name_episodes')">
                      <b-form-input :state="getValidationState(validationContext)" aria-describedby="Name-feedback"
                        label="en_Name_episodes" :placeholder="$t('en_Name_episodes')" v-model="episode.en_name"></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0]
                      }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>




  


                <b-col md="6" class="mb-2">
                  <validation-provider name="Video_quality_1" :rules="{ required: true, min: 1, max: 55 }"
                    v-slot="validationContext">
                    <b-form-group :label="$t('Video_quality_1')">
                      <b-form-input :state="getValidationState(validationContext)" aria-describedby="Name-feedback"
                        label="Video_quality_1" :placeholder="$t('Video_quality_1')" v-model="episode.video_q1"></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0]
                      }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>


 
   

 
                <b-col md="6" class="mb-2">
                  <validation-provider name="Video_quality_2" :rules="{ required: true, min: 1, max: 55 }"
                    v-slot="validationContext">
                    <b-form-group :label="$t('Video_quality_2')">
                      <b-form-input :state="getValidationState(validationContext)" aria-describedby="Name-feedback"
                        label="Video_quality_2" :placeholder="$t('Video_quality_2')" v-model="episode.video_q2"></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0]
                      }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>




                <b-col md="6" class="mb-2">
                  <validation-provider name="Video_quality_2" :rules="{ required: true, min: 1, max: 55 }"
                    v-slot="validationContext">
                    <b-form-group :label="$t('Video_quality_3')">
                      <b-form-input :state="getValidationState(validationContext)" aria-describedby="Name-feedback"
                        label="Video_quality_3" :placeholder="$t('Video_quality_3')" v-model="episode.video_q3"></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0]
                      }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>
 



 


                  <!-- Episode Number-->
            <b-col md="6" class="mb-2">
                  <validation-provider
                    name="Episode Number"
                    :rules="{ regex: /^\d*\.?\d*$/}"
                    v-slot="validationContext"
                  >
                    <b-form-group :label="$t('episodeNumber')">
                      <b-form-input
                        :state="getValidationState(validationContext)"
                        aria-describedby="StockAlert-feedback"
                        label="episode_number"
                        :placeholder="$t('episode_number')"
                        v-model="episode.episode_number"
                      ></b-form-input>
                      <b-form-invalid-feedback
                        id="StockAlert-feedback"
                      >{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>


 
 

 
                </b-row>
              </b-card-body>
            </b-card>
          </b-col>
          <b-col md="4">
            <b-card>
              <div class="card-header">
                <h5>{{  $t('MultipleImage') }}</h5>
              </div>
              <div class="card-body">
                <b-row class="form-group">
                  <b-col md="12 mb-5">
                    <div
                      id="my-strictly-unique-vue-upload-multiple-image"
                      class="d-flex justify-content-center">
                      <vue-upload-multiple-image
                      @upload-success="uploadImageSuccess"
                      @before-remove="beforeRemove"
                      dragText="Drag & Drop Multiple images For episode"
                      dropText="Drag & Drop image"
                      browseText="(or) Select"
                      accept=image/gif,image/jpeg,image/png,image/bmp,image/jpg
                      primaryText='success'
                      markIsPrimaryText='success'
                      popupText='have been successfully uploaded'
                      :data-images="images"
                      idUpload="myIdUpload"
                      :showEdit="false"
                      />
                    </div>
                  </b-col>
 
           
                </b-row>
              </div>
            </b-card>
          </b-col>
          <b-col md="12" class="mt-3">
             <b-button variant="primary" type="submit" :disabled="SubmitProcessing">{{ $t('submit') }}</b-button>
              <div v-once class="typo__p" v-if="SubmitProcessing">
                <div class="spinner sm spinner-primary mt-3"></div>
              </div>
          </b-col>
        </b-row>
      </b-form>
    </validation-observer>
  </div>
</template>

<script>
import VueUploadMultipleImage from "vue-upload-multiple-image";
import VueTagsInput from "@johmun/vue-tags-input";
import NProgress from "nprogress";

export default {
  metaInfo: {
    title: "Edit Episode"
  },
  data() {
    return {
      tag: "",
      len: 8,
      images: [],
      imageArray: [],
      change: false,
      isLoading: true,
      SubmitProcessing:false,
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
      filler:"",
        publish_status:"",
        episode_number:"",
        premium:"",
        ar_name: "",
        en_name: "",
        image: "",
        video_q1:"",
        video_q2:"",
        video_q3:"",
        age:"",
        status:"",
        aired:"",
        aired_start_date: new Date().toISOString().slice(0, 10),
        aired_end_date: new Date().toISOString().slice(0, 10),
        category:"",
        story_ar:"",
        story_en:"",
        category_id:"",
        rate:"",
      },
      code_exist: ""
    };
  },

  components: {
    VueUploadMultipleImage,
    VueTagsInput
  },

  methods: {

    handleFileUpload_q1(event) {
      this.videoFile = event.target.files[0];
      console.log(this.videoFile)
      this.uploadVideo("video_q1")
      
    },



    handleFileUpload_q2(event) {
      this.videoFile = event.target.files[0];
      console.log(this.videoFile)
      this.uploadVideo("video_q2")
      
    },


    handleFileUpload_q3(event) {
      this.videoFile = event.target.files[0];
      console.log(this.videoFile)
      this.uploadVideo("video_q3")
      
    },

    uploadVideo(q) {
 

      this.UploadEpisode(q);
 
    },




    
    UploadEpisode(q) {
      // Start the progress bar.
      NProgress.start();
      // NProgress.set(0.1);
      var self = this;


      const formData = new FormData();
      formData.append('video', this.videoFile);
      formData.append('q', q);

      self.SubmitProcessing = true;

 
      // Send Data with axios
      axios.post("Episodes/upload", formData , {
          headers: {
          'Content-Type': 'multipart/form-data'
        }
        }).then(response => {
          // Complete the animation of theprogress bar.
          NProgress.done();
          self.SubmitProcessing = false;
          console.log(response.data)
          if(response.data.q == "video_q1"){
            this.episode.video_q1 = response.data.url;
          }else if(response.data.q == "video_q2"){
            this.episode.video_q2 = response.data.url;
          }else if(response.data.q == "video_q3"){
            this.episode.video_q3 = response.data.url;
          }
          // this.$router.push({ name: "index_episodes" });

          
          this.makeToast(
            "success",
            this.$t("Successfully_Created"),
            this.$t("Success")
          );


        })
        .catch(error => {
          // Complete the animation of theprogress bar.
          NProgress.done();
          if (error.errors.code.length > 0) {
            self.code_exist = error.errors.code[0];
          }


          this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
          self.SubmitProcessing = false;
        });
    },



    //------------- Submit Validation Update Episode
    Submit_Episode() {
      this.$refs.Edit_Episode.validate().then(success => {
        if (!success) {
          this.makeToast(
            "danger",
            this.$t("Please_fill_the_form_correctly"),
            this.$t("Failed")
          );
        } else {
          this.Update_Episode();
        }
      });
    },

    //------ Validation state fields
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },

    //------ Toast
    makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },

    //------Show Notification If Variant is Duplicate
    showNotifDuplicate() {
      this.makeToast(
        "warning",
        this.$t("VariantDuplicate"),
        this.$t("Warning")
      );
    },

   

    //------ event upload Image Success
    uploadImageSuccess(formData, index, fileList, imageArray) {
      this.images = fileList;
    },

    //------ event before Remove image
    beforeRemove(index, done, fileList) {
      var remove = confirm("remove image");
      if (remove == true) {
        this.images.splice(index, 1);
        done();
      } else {
      }
    },

    //---------------------------------------Get Episode Elements ------------------------------\
    GetElements() {
      let id = this.$route.params.id;
      axios
        .get(`Episodes/${id}/edit`)
        .then(response => {
          this.episode = response.data.episode;
           this.categories  = response.data.category;
        
          this.images = response.data.episode.images;
    
          this.isLoading = false;
        })
        .catch(response => {
          setTimeout(() => {
            this.isLoading = false;
          }, 500);
        });
    },

 
 

    //------------------------------ Update Episode ------------------------------\
    Update_Episode() {
      NProgress.start();
      NProgress.set(0.1);
      var self = this;
      self.SubmitProcessing = true;
 

       // append objet episode
      Object.entries(self.episode).forEach(([key, value]) => {
        self.data.append(key, value);
      });

  

      //append array images
      if (self.images.length > 0) {
        for (var k = 0; k < self.images.length; k++) {
          Object.entries(self.images[k]).forEach(([key, value]) => {
              self.data.append("images[" + k + "][" + key + "]", value);
          });
        }
      }

      self.data.append("_method", "put");

      //send Data with axios
      axios.post("Episodes/" + this.episode.id, self.data).then(response => {
          NProgress.done();
          self.SubmitProcessing = false;
          this.$router.push({ name: "index_episodes" });
          this.makeToast(
            "success",
            this.$t("Successfully_Updated"),
            this.$t("Success")
          );
        })
        .catch(error => {
          if (error.errors.code.length > 0) {
              self.code_exist = error.errors.code[0];
          }
          NProgress.done();
          this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
          self.SubmitProcessing = false;
        });
    }
  }, //end Methods

  //-----------------------------Created function-------------------

  created: function() {
    this.GetElements();
    this.imageArray = [];
    this.images = [];
  }
};
</script>
