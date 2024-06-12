
<template>
  <div class="main-content">
    <breadcumb :page="$t('Ad')" :folder="$t('Settings')"/>

    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>
    <b-card class="wrapper" v-if="!isLoading">
      <vue-good-table
        mode="remote"
        :columns="columns"
        :totalRows="totalRows"
        :rows="ads"
        @on-page-change="onPageChange"
        @on-per-page-change="onPerPageChange"
        @on-sort-change="onSortChange"
        @on-search="onSearch"
        :search-options="{
        enabled: true,
        placeholder: $t('Search_this_table'),  
      }"
        :select-options="{ 
          enabled: true ,
          clearSelectionText: '',
        }"
        @on-selected-rows-change="selectionChanged"
        :pagination-options="{
        enabled: true,
        mode: 'records',
        nextLabel: 'next',
        prevLabel: 'prev',
      }"
        styleClass="table-hover tableOne vgt-table"
      >
        <div slot="selected-row-actions">
          <button class="btn btn-danger btn-sm" @click="delete_by_selected()"> {{ $t('Del') }}</button>
        </div>
        <div slot="table-actions" class="mt-2 mb-3">
          <b-button @click="New_Ad()" class="btn-rounded" variant="btn btn-primary btn-icon m-1">
            <i class="i-Add"></i>
             {{ $t('Add') }}
          </b-button>
        </div>

        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'actions'">
            <a @click="Edit_Ad(props.row)" title="Edit" v-b-tooltip.hover>
              <i class="i-Edit text-25 text-success"></i>
            </a>
            <a title="Delete" v-b-tooltip.hover @click="Delete_Ad(props.row.id)">
              <i class="i-Close-Window text-25 text-danger"></i>
            </a>
          </span>
          <span v-else-if="props.column.field == 'image'">
            <b-img
              thumbnail
              height="50"
              width="50"
              fluid
              :src="'/images/ads/' + props.row.image"
              alt="image"
            ></b-img>
          </span>
        </template>
      </vue-good-table>
    </b-card>

    <validation-observer ref="Create_ad">
      <b-modal hide-footer size="md" id="New_ad" :title="editmode?$t('Edit'):$t('Add')">
        <b-form @submit.prevent="Submit_Ad" enctype="multipart/form-data">
          <b-row>
            <!-- Ad Name -->



                      <b-col md="6" class="mb-2">

                      <b-form-group :label="$t('ads')">
                      <!-- <input type="file" ref="fileInput" @change="handleFileUpload_q3"> -->

                      <b-form-input
                    :placeholder="$t('ads')"
                 
                    aria-describedby="Name-feedback"
                    label="ads"
                    v-model="ad.ads"
                  ></b-form-input>

                      </b-form-group>



                      <!-- <b-form-group :label="$t('ads')">
                  <b-form-input
                    :placeholder="$t('ads')"
                 
                    aria-describedby="Name-feedback"
                    label="ads"
                    v-model="ad.ads"
                  ></b-form-input>
                  <b-form-invalid-feedback id="Name-feedback"> </b-form-invalid-feedback>
                </b-form-group> -->

                      </b-col>




 

            <b-col md="12" class="mt-3">
              <b-button variant="primary" type="submit"  :disabled="SubmitProcessing"> {{  $t('submit') }}</b-button>
                <div v-once class="typo__p" v-if="SubmitProcessing">
                  <div class="spinner sm spinner-primary mt-3"></div>
                </div>
            </b-col>

          </b-row>
        </b-form>
      </b-modal>
    </validation-observer>
  </div>
</template>

<script>
import NProgress from "nprogress";

import VueTagsInput from "@johmun/vue-tags-input";

export default {
  metaInfo: {
    title: "Ad"
  },
  data() {
    return {
      isLoading: true,
      SubmitProcessing:false,
      serverParams: {
        columnFilters: {},
        sort: {
          field: "id",
          type: "desc"
        },
        page: 1,
        perPage: 10
      },
      selectedIds: [],
      totalRows: "",
      search: "",
      data: new FormData(),
      editmode: false,
      ads: [],
      videoFile: null,
      limit: "10",
      ad: {
        id: "",
        ads: "",
        name:"",
    
      }
    };
  },
  computed: {
    columns() {
      return [
   
        {
          label: this.$t("AdName"),
          field: "ads",
          tdClass: "text-left",
          thClass: "text-left"
        },
 
        {
          label: this.$t("Action"),
          field: "actions",
          html: true,
          tdClass: "text-right",
          thClass: "text-right",
          sortable: false
        }
      ];
    }
  },
  components: {
   
    VueTagsInput
  },
  methods: {


    handleFileUpload_q3(event) {
      this.videoFile = event.target.files[0];
      
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
      formData.append('q', "ads");

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
          // console.log(response.data)
          // if(response.data.q == "video_q1"){
            this.ad.ads = response.data.url;
          // }else if(response.data.q == "video_q2"){
          //   this.movie.video_q2 = response.data.url;
          // }else if(response.data.q == "video_q3"){
          //   this.movie.video_q3 = response.data.url;
          // }
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
    //---- update Params Table
    updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },

    //---- Event Page Change
    onPageChange({ currentPage }) {
      if (this.serverParams.page !== currentPage) {
        this.updateParams({ page: currentPage });
        this.Get_Ads(currentPage);
      }
    },

    //---- Event Per Page Change
    onPerPageChange({ currentPerPage }) {
      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.updateParams({ page: 1, perPage: currentPerPage });
        this.Get_Ads(1);
      }
    },

    //---- Event on Sort Change
    onSortChange(params) {
      this.updateParams({
        sort: {
          type: params[0].type,
          field: params[0].field
        }
      });
      this.Get_Ads(this.serverParams.page);
    },

    //---- Event Select Rows
    selectionChanged({ selectedRows }) {
      this.selectedIds = [];
      selectedRows.forEach((row, index) => {
        this.selectedIds.push(row.id);
      });
    },

    //---- Event on Search

    onSearch(value) {
      this.search = value.searchTerm;
      this.Get_Ads(this.serverParams.page);
    },

    //---- Validation State Form

    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },

    //------------- Submit Validation Create & Edit Ad
    Submit_Ad() {
      this.$refs.Create_ad.validate().then(success => {
        if (!success) {
          this.makeToast(
            "danger",
            this.$t("Please_fill_the_form_correctly"),
            this.$t("Failed")
          );
        } else {
          if (!this.editmode) {
            this.Create_Ad();
          } else {
            this.Update_Ad();
          }
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

    //------------------------------ Event Upload Image -------------------------------\
    async onFileSelected(e) {
      const { valid } = await this.$refs.Image.validate(e);

      if (valid) {
        this.ad.image = e.target.files[0];
      } else {
        this.ad.image = "";
      }
    },

    //------------------------------ Modal (create Ad) -------------------------------\
    New_Ad() {
      this.reset_Form();
      this.editmode = false;
      this.$bvModal.show("New_ad");
    },

    //------------------------------ Modal (Update Ad) -------------------------------\
    Edit_Ad(ad) {
      this.Get_Ads(this.serverParams.page);
      this.reset_Form();
      this.ad = ad;
      this.editmode = true;
      this.$bvModal.show("New_ad");
    },

    //---------------------------------------- Get All ads-----------------\
    Get_Ads(page) {
      // Start the progress bar.
      NProgress.start();
      NProgress.set(0.1);
      axios
        .get(
          "api/ads?page=" +
            page +
            "&SortField=" +
            this.serverParams.sort.field +
            "&SortType=" +
            this.serverParams.sort.type +
            "&search=" +
            this.search +
            "&limit=" +
            this.limit
        )
        .then(response => {
          this.ads = response.data.ads;
          
          console.log(response.data )
          console.log( "ssssss" )
          this.totalRows = response.data.totalRows;

          // Complete the animation of theprogress bar.
          NProgress.done();
          this.isLoading = false;
        })
        .catch(response => {
          // Complete the animation of theprogress bar.
          NProgress.done();
          setTimeout(() => {
            this.isLoading = false;
          }, 500);
        });
    },

    //---------------------------------------- Create new ad-----------------\
    Create_Ad() {
      var self = this;
      self.SubmitProcessing = true;
      self.data.append("ads", self.ad.ads);
  
      axios
        .post("ads", self.data)
        .then(response => {
          self.SubmitProcessing = false;
          Fire.$emit("Event_Ad");

          this.makeToast(
            "success",
            this.$t("Create.TitleAd"),
            this.$t("Success")
          );
        })
        .catch(error => {
           self.SubmitProcessing = false;
          this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
        });
    },

    //---------------------------------------- Update Ad-----------------\
    Update_Ad() {
      var self = this;
       self.SubmitProcessing = true;
       self.data.append("ads", self.ad.ads);
      self.data.append("_method", "put");

      axios
        .post("ads/" + self.ad.id, self.data)
        .then(response => {
           self.SubmitProcessing = false;
          Fire.$emit("Event_Ad");

          this.makeToast(
            "success",
            this.$t("Update.TitleAd"),
            this.$t("Success")
          );
        })
        .catch(error => {
           self.SubmitProcessing = false;
          this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
        });
    },

    //---------------------------------------- Reset Form -----------------\
    reset_Form() {
      this.ad = {
        id: "",
        ads: "",
      
      
      };
      this.data = new FormData();
    },

    //---------------------------------------- Delete Ad -----------------\
    Delete_Ad(id) {
      this.$swal({
        title: this.$t("Delete.Title"),
        text: this.$t("Delete.Text"),
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Delete.cancelButtonText"),
        confirmButtonText: this.$t("Delete.confirmButtonText")
      }).then(result => {
        if (result.value) {
          axios
            .delete("ads/" + id)
            .then(() => {
              this.$swal(
                this.$t("Delete.Deleted"),
                this.$t("Delete.TitleAd"),
                "success"
              );

              Fire.$emit("Delete_Ad");
            })
            .catch(() => {
              this.$swal(
                this.$t("Delete.Failed"),
                this.$t("Delete.Therewassomethingwronge"),
                "warning"
              );
            });
        }
      });
    },

    //---- Delete ads by selection

    delete_by_selected() {
      this.$swal({
        title: this.$t("Delete.Title"),
        text: this.$t("Delete.Text"),
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Delete.cancelButtonText"),
        confirmButtonText: this.$t("Delete.confirmButtonText")
      }).then(result => {
        if (result.value) {
          // Start the progress bar.
          NProgress.start();
          NProgress.set(0.1);
          axios
            .post("ads/delete/by_selection", {
              selectedIds: this.selectedIds
            })
            .then(() => {
              this.$swal(
                this.$t("Delete.Deleted"),
                this.$t("Delete.TitleAd"),
                "success"
              );

              Fire.$emit("Delete_Ad");
            })
            .catch(() => {
              // Complete the animation of theprogress bar.
              setTimeout(() => NProgress.done(), 500);
              this.$swal(
                this.$t("Delete.Failed"),
                this.$t("Delete.Therewassomethingwronge"),
                "warning"
              );
            });
        }
      });
    }
  }, //end Methods
  created: function() {
    this.Get_Ads(1);

    Fire.$on("Event_Ad", () => {
      setTimeout(() => {
        this.Get_Ads(this.serverParams.page);
        this.$bvModal.hide("New_ad");
      }, 500);
    });

    Fire.$on("Delete_Ad", () => {
      setTimeout(() => {
        this.Get_Ads(this.serverParams.page);
      }, 500);
    });
  }
};
</script>