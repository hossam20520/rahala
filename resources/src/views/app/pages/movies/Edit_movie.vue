<template>
  <div class="main-content">
    <breadcumb :page="$t('UpdateMovie')" :folder="$t('Movies')"/>
    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>

    <validation-observer ref="Edit_Movie" v-if="!isLoading">
      <b-form @submit.prevent="Submit_Movie" enctype="multipart/form-data">
        <b-row>
          <b-col md="8">
            <b-card>
              <b-card-body>
                <b-row>
 
                  <b-col md="6" class="mb-2">
                  <validation-provider name="Name_ar_name_mov" :rules="{ required: true, min: 3, max: 55 }"
                    v-slot="validationContext">
                    <b-form-group :label="$t('Name_ar_name_mov')">
                      <b-form-input :state="getValidationState(validationContext)" aria-describedby="Name-feedback"
                        label="Name_ar_name_mov" :placeholder="$t('Name_ar_name_mov')" v-model="movie.ar_name"></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0]
                      }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>



                <b-col md="6" class="mb-2">
                  <validation-provider name="Name_en_nameMov" :rules="{ required: true, min: 3, max: 55 }"
                    v-slot="validationContext">
                    <b-form-group :label="$t('Name_en_nameMov')">
                      <b-form-input :state="getValidationState(validationContext)" aria-describedby="Name-feedback"
                        label="Name_en_nameMov" :placeholder="$t('Name_en_nameMov')" v-model="movie.en_name"></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0]
                      }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>


                <b-col lg="12" md="12" sm="12" class="mb-2">
                  <validation-provider name="publish_status" :rules="{ required: true }">
                    <b-form-group slot-scope="{ valid, errors }" :label="$t('publish_status')">
                      <v-select :class="{ 'is-invalid': !!errors.length }"
                        :state="errors[0] ? false : (valid ? true : null)" v-model="movie.publish_status"
                        :reduce="label => label.value" :placeholder="$t('Choose_publish_status')" :options="[
                             { label: 'normal', value: 'normal' },
                            { label: 'new', value: 'new' },
                            { label: 'top', value: 'top' },
                          
                         
                          ]"></v-select>
                      <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>



                <b-col lg="6" md="6" sm="12" class="mb-2">
                  <validation-provider name="age" :rules="{ required: true }">
                    <b-form-group slot-scope="{ valid, errors }" :label="$t('age')">
                      <v-select :class="{ 'is-invalid': !!errors.length }"
                        :state="errors[0] ? false : (valid ? true : null)" v-model="movie.age"
                        :reduce="label => label.value" :placeholder="$t('Choose_Method')" :options="[
                            { label: '8', value: '8' },
                            { label: '9', value: '9' },
                            { label: '10', value: '10' },
                            { label: '11', value: '11' },
                            { label: '12', value: '12' },
                            { label: '13', value: '13' },
                            { label: '14', value: '14' },
                            { label: '15', value: '15' },
                            { label: '16', value: '16' },
                            { label: '17', value: '17' },
                            { label: '18', value: '18' },
                            { label: '19', value: '19' },
                            { label: '20', value: '20' },
                            { label: '21', value: '21' },
                            { label: '22', value: '22' },
                            { label: '23', value: '23' },
                            { label: '24', value: '24' },
                            { label: '25', value: '25' },
                            { label: '26', value: '26' },
                            { label: '27', value: '27' },
                            { label: '28', value: '28' },
                            { label: '29', value: '29' },
                            { label: '30', value: '30' },
                            { label: '31', value: '31' },
                            { label: '32', value: '32' },
                            { label: '33', value: '33' },
                            { label: '34', value: '34' },
                            { label: '35', value: '35' },
                            { label: '36', value: '36' },
                            { label: '37', value: '37' },
                            { label: '38', value: '38' },
                            { label: '39', value: '39' },
                            { label: '40', value: '40' },
                            { label: '41', value: '41' },
                            { label: '42', value: '42' },
                            { label: '43', value: '43' },
                            { label: '44', value: '44' },
                            { label: '45', value: '45' },
                            { label: '46', value: '46' },
                            { label: '47', value: '47' },
                            { label: '48', value: '48' },
                            { label: '49', value: '49' },
                            { label: '50', value: '50' }
                          ]"></v-select>
                      <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>




                <b-col md="6" class="mb-2">
                  <validation-provider name="rate" :rules="{ required: true, min: 1, max: 55 }"
                    v-slot="validationContext">
                    <b-form-group :label="$t('rate')">
                      <b-form-input :state="getValidationState(validationContext)" aria-describedby="Name-feedback"
                        label="rate" :placeholder="$t('rate')" v-model="movie.rate"></b-form-input>
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
                        label="Video_quality_1" :placeholder="$t('Video_quality_1')" v-model="movie.video_q1"></b-form-input>
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
                        label="Video_quality_2" :placeholder="$t('Video_quality_2')" v-model="movie.video_q2"></b-form-input>
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
                        label="Video_quality_3" :placeholder="$t('Video_quality_3')" v-model="movie.video_q3"></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0]
                      }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>
        

 

                <b-col lg="6" md="6" sm="12" class="mb-2">
                  <validation-provider name="status" :rules="{ required: true }">
                    <b-form-group slot-scope="{ valid, errors }" :label="$t('status')">
                      <v-select :class="{ 'is-invalid': !!errors.length }"
                        :state="errors[0] ? false : (valid ? true : null)" v-model="movie.status"
                        :reduce="label => label.value" :placeholder="$t('Choose_status')" :options="[
                            { label: 'Finished airing', value: 'Finished' },
                            { label: 'Currently airing', value: 'airing' },
                            { label: 'Not yet aired', value: 'not_airing' },
                          ]"></v-select>
                      <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>






                
                <b-col md="6" class="mb-2">
                  <validation-provider name="aired" :rules="{ required: true, min: 2, max: 55 }"
                    v-slot="validationContext">
                    <b-form-group :label="$t('aired')">
                      <b-form-input :state="getValidationState(validationContext)" aria-describedby="Name-feedback"
                        label="aired" :placeholder="$t('aired')" v-model="movie.aired"></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0]
                      }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>









                <b-col md="6" class="mb-2">
                  <validation-provider name="aired_start_date" :rules="{ required: true, min: 2, max: 55 }"
                    v-slot="validationContext">
                    <b-form-group :label="$t('aired_start_date')">
                      <b-form-input :state="getValidationState(validationContext)" aria-describedby="Name-feedback"
                        label="aired_start_date" :placeholder="$t('aired_start_date')"
                        type="date"
                        v-model="movie.aired_start_date"></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0]
                      }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>








                <b-col md="6" class="mb-2">
                  <validation-provider name="aired_end_date" :rules="{ required: true, min: 2, max: 55 }"
                    v-slot="validationContext">
                    <b-form-group :label="$t('aired_end_date')">
                      <b-form-input :state="getValidationState(validationContext)" aria-describedby="Name-feedback"
                        
                        label="aired_end_date" :placeholder="$t('aired_end_date')"
                        type="date"
                        v-model="movie.aired_end_date"></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0]
                      }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>





               <!-- Category -->
                 <b-col md="6" class="mb-2">
                  <validation-provider name="category" :rules="{ required: false}">
                    <b-form-group slot-scope="{ valid, errors }" :label="$t('Categorie')">
                      <v-select
                        :class="{'is-invalid': !!errors.length}"
                        :state="errors[0] ? false : (valid ? true : null)"
                        :reduce="label => label.value"
                        :placeholder="$t('Choose_Category')"
                        multiple
                        v-model="movie.category_id"
                        :options="categories.map(categories => ({label: categories.name, value: categories.id}))"
                      />
                      <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>





                <b-col md="12" class="mb-2">
                    <b-form-group :label="$t('story_ar')">
                      <textarea
                        rows="4"
                        class="form-control"
                        :placeholder="$t('story_ar')"
                        v-model="movie.story_ar"
                      ></textarea>
                    </b-form-group>
                  </b-col>



                  <b-col md="12" class="mb-2">
                    <b-form-group :label="$t('story_en')">
                      <textarea
                        rows="4"
                        class="form-control"
                        :placeholder="$t('story_en')"
                        v-model="movie.story_en"
                      ></textarea>
                    </b-form-group>
                  </b-col>



                  <b-col lg="12" md="12" sm="12" class="mb-2">
                  <validation-provider name="premium" :rules="{ required: true }">
                    <b-form-group slot-scope="{ valid, errors }" :label="$t('premium')">
                      <v-select :class="{ 'is-invalid': !!errors.length }"
                        :state="errors[0] ? false : (valid ? true : null)" v-model="movie.premium"
                        :reduce="label => label.value" :placeholder="$t('Choose_premium')" :options="[
                            { label: 'No', value: 'no' },
                            { label: 'Yes', value: 'yes' },
                         
                          ]"></v-select>
                      <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
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
                      dragText="Drag & Drop Multiple images For movie"
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
    title: "Edit Movie"
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
      categories: [],
      Subcategories: [],
      units: [],
      units_sub: [],
      brands: [],
      roles: {},
      variants: [],
      videoFile: null,
      categories: [],
      movie: {
        publish_status:"",
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
 

      this.UploadMovie(q);
 
    },




    
    UploadMovie(q) {
      // Start the progress bar.
      NProgress.start();
      // NProgress.set(0.1);
      var self = this;


      const formData = new FormData();
      formData.append('video', this.videoFile);
      formData.append('q', q);

      self.SubmitProcessing = true;

 
      // Send Data with axios
      axios.post("Movies/upload", formData , {
          headers: {
          'Content-Type': 'multipart/form-data'
        }
        }).then(response => {
          // Complete the animation of theprogress bar.
          NProgress.done();
          self.SubmitProcessing = false;
          console.log(response.data)
          if(response.data.q == "video_q1"){
            this.movie.video_q1 = response.data.url;
          }else if(response.data.q == "video_q2"){
            this.movie.video_q2 = response.data.url;
          }else if(response.data.q == "video_q3"){
            this.movie.video_q3 = response.data.url;
          }
          // this.$router.push({ name: "index_movies" });

          
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



    //------------- Submit Validation Update Movie
    Submit_Movie() {
      this.$refs.Edit_Movie.validate().then(success => {
        if (!success) {
          this.makeToast(
            "danger",
            this.$t("Please_fill_the_form_correctly"),
            this.$t("Failed")
          );
        } else {
          this.Update_Movie();
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
    //-------------- Movie Get Elements
    getCategory() {
      axios
        .get("Movies/create")
        .then(response => {
          this.categories  = response.data.category;

          this.isLoading = false;
        })
        .catch(response => {
          setTimeout(() => {
            this.isLoading = false;
          }, 500);
          this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
        });
    },
    //---------------------------------------Get Movie Elements ------------------------------\
    GetElements() {
      let id = this.$route.params.id;
      axios
        .get(`Movies/${id}/edit`)
        .then(response => {
          this.movie = response.data.movie;
         
          this.movie.category_id = response.data.movie.category.split(',').map(Number);
        
          this.images = response.data.movie.images;
    
          this.isLoading = false;
        })
        .catch(response => {
          setTimeout(() => {
            this.isLoading = false;
          }, 500);
        });
    },

 
 

    //------------------------------ Update Movie ------------------------------\
    Update_Movie() {
      NProgress.start();
      NProgress.set(0.1);
      var self = this;
      self.SubmitProcessing = true;
 

       // append objet movie
      Object.entries(self.movie).forEach(([key, value]) => {
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
      axios.post("Movies/" + this.movie.id, self.data).then(response => {
          NProgress.done();
          self.SubmitProcessing = false;
          this.$router.push({ name: "index_movies" });
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
    this.getCategory();
    this.imageArray = [];
    this.images = [];
  }
};
</script>
