
<template>
  <div class="main-content">
    <breadcumb :page="$t('Series')" :folder="$t('Series')"/>

    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>
    <b-card class="wrapper" v-if="!isLoading">
      <vue-good-table
        mode="remote"
        :columns="columns"
        :totalRows="totalRows"
        :rows="serieses"
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
          <b-button @click="New_Series()" class="btn-rounded" variant="btn btn-primary btn-icon m-1">
            <i class="i-Add"></i>
             {{ $t('Add') }}
          </b-button>
        </div>

        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'actions'">

            <router-link
              v-b-tooltip.hover
              title="View"
              :to="{ name:'detail_series', params: { id: props.row.id} }">
              <i class="i-Eye text-25 text-info"></i>
          </router-link>


            <a @click="Edit_Series(props.row)" title="Edit" v-b-tooltip.hover>
              <i class="i-Edit text-25 text-success"></i>
            </a>
            <a   v-if="currentUserPermissions && currentUserPermissions.includes('products_delete')" title="Delete" v-b-tooltip.hover @click="Delete_Series(props.row.id)">
              <i class="i-Close-Window text-25 text-danger"></i>
            </a>


             

            <router-link
            class=" "
            :to="{ name:'storeE_episodes', params: { id: props.row.id} }" 
           >
            <i class="i-Add text-25"></i>
        
          </router-link>


            <!-- <a title="add"  v-b-tooltip.hover @click="Delete_Series(props.row.id)">
              <i class="i-Add text-25"></i>
            </a> -->


          </span>
          <span v-else-if="props.column.field == 'image'">
            <b-img
              thumbnail
              height="50"
              width="50"
              fluid
              :src="'/images/serieses/' + props.row.image"
              alt="image"
            ></b-img>
          </span>
        </template>
      </vue-good-table>
    </b-card>

    <validation-observer ref="Create_series">
      <b-modal hide-footer size="md" id="New_series" :title="editmode?$t('Edit'):$t('Add')">
        <b-form @submit.prevent="Submit_Series" enctype="multipart/form-data">
          <b-row>
            <!-- Series Name -->



               <!-- Category -->
               <b-col md="12">
                  <validation-provider name="category" :rules="{ required: false}">
                    <b-form-group slot-scope="{ valid, errors }" :label="$t('Categorie')">
                      <v-select
                        :class="{'is-invalid': !!errors.length}"
                        :state="errors[0] ? false : (valid ? true : null)"
                        :reduce="label => label.value"
                        :placeholder="$t('Choose_Category')"
                        v-model="series.category_id"
                        multiple
                        :options="categories.map(categories => ({label: categories.name, value: categories.id}))"
                     
                        />
                      <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>


            <b-col md="12">
                  <validation-provider
                    name="ar_Name_episode"
                    :rules="{required:true , min:3 , max:55}"
                    v-slot="validationContext">
                    <b-form-group :label="$t('ar_Name_episode')">
                      <b-form-input
                        :state="getValidationState(validationContext)"
                        aria-describedby="Name-feedback"
                        label="ar_Name_episode"
                        :placeholder="$t('ar_Name_episode')"
                        v-model="series.ar_name"
                      ></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
            </b-col>

            <!-- Series -->
            <b-col md="12">
              <validation-provider
                    name="en_Name_episode"
                    :rules="{required:true , min:3 , max:55}"
                    v-slot="validationContext">
                    <b-form-group :label="$t('en_Name_episode')">
                      <b-form-input
                        :state="getValidationState(validationContext)"
                        aria-describedby="Name-feedback"
                        label="en_Name_episode"
                        :placeholder="$t('en_Name_episode')"
                        v-model="series.en_name"
                      ></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
            </b-col>


            <b-col md="12">
                  <validation-provider name="status" :rules="{ required: true }">
                    <b-form-group slot-scope="{ valid, errors }" :label="$t('status')">
                      <v-select :class="{ 'is-invalid': !!errors.length }"
                        :state="errors[0] ? false : (valid ? true : null)" v-model="series.status"
                        :reduce="label => label.value" :placeholder="$t('Choose_status')" :options="[
                            { label: 'Finished airing', value: 'Finished' },
                            { label: 'Currently airing', value: 'airing' },
                            { label: 'Not yet aired', value: 'not_airing' },
                          ]"></v-select>
                      <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>


                

                <b-col md="12">
                  <validation-provider name="rate" :rules="{ required: true, min: 1, max: 55 }"
                    v-slot="validationContext">
                    <b-form-group :label="$t('rate')">
                      <b-form-input :state="getValidationState(validationContext)" aria-describedby="Name-feedback"
                        label="rate" :placeholder="$t('rate')" v-model="series.rate"></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0]
                      }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>


                <b-col md="12">
                  <validation-provider name="publish_status" :rules="{ required: true }">
                    <b-form-group slot-scope="{ valid, errors }" :label="$t('publish_status')">
                      <v-select :class="{ 'is-invalid': !!errors.length }"
                        :state="errors[0] ? false : (valid ? true : null)" v-model="series.publish_status"
                        :reduce="label => label.value" :placeholder="$t('Choose_publish_status')" :options="[
                            { label: 'top', value: 'top' },
                            { label: 'new', value: 'new' },
                            { label: 'normal', value: 'normal' },
                          ]"></v-select>
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
                        v-model="series.story_ar"
                      ></textarea>
                    </b-form-group>
                  </b-col>



                  <b-col md="12" class="mb-2">
                    <b-form-group :label="$t('story_en')">
                      <textarea
                        rows="4"
                        class="form-control"
                        :placeholder="$t('story_en')"
                        v-model="series.story_en"
                      ></textarea>
                    </b-form-group>
                  </b-col>


                  <b-col lg="12" md="12" sm="12" class="mb-2">
                  <validation-provider name="premium" :rules="{ required: true }">
                    <b-form-group slot-scope="{ valid, errors }" :label="$t('premium')">
                      <v-select :class="{ 'is-invalid': !!errors.length }"
                        :state="errors[0] ? false : (valid ? true : null)" v-model="series.premium"
                        :reduce="label => label.value" :placeholder="$t('Choose_premium')" :options="[
                            { label: 'No', value: 'no' },
                            { label: 'Yes', value: 'yes' },
                         
                          ]"></v-select>
                      <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>



                <b-col lg="6" md="6" sm="12" class="mb-2">
                  <validation-provider name="age" :rules="{ required: true }">
                    <b-form-group slot-scope="{ valid, errors }" :label="$t('age')">
                      <v-select :class="{ 'is-invalid': !!errors.length }"
                        :state="errors[0] ? false : (valid ? true : null)" v-model="series.age"
                        :reduce="label => label.value" :placeholder="$t('Choose_age')" :options="[
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
                  <validation-provider name="aired" :rules="{ required: true, min: 2, max: 55 }"
                    v-slot="validationContext">
                    <b-form-group :label="$t('aired')">
                      <b-form-input :state="getValidationState(validationContext)" aria-describedby="Name-feedback"
                        label="aired" :placeholder="$t('aired_en')" v-model="series.aired"></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0]
                      }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>


            <!-- -Series Image -->
            <b-col md="12">
              <validation-provider name="Image" ref="Image" rules="mimes:image/*">
                <b-form-group slot-scope="{validate, valid, errors }" :label="$t('SeriesImage')">
                  <input
                    :state="errors[0] ? false : (valid ? true : null)"
                    :class="{'is-invalid': !!errors.length}"
                    @change="onFileSelected"
                    label="Choose Image"
                    type="file"
                  >
                  <b-form-invalid-feedback id="Image-feedback">{{  errors[0]  }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
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

export default {
  metaInfo: {
    title: "Series"
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
      categories:[],
      totalRows: "",
      search: "",
      data: new FormData(),
      editmode: false,
      serieses: [],
      limit: "10",
      series: {
        id: "",
        category_id:"",
        rate:"",
        publish_status:"",
        ar_name: "",
        en_name: "",
        story_en:"",
        story_ar:"",
        age:"",
        premium:"",
        status:"",
        image: ""
      }
    };
  },
  computed: {
    columns() {
      return [
      {
          label: this.$t("image"),
          field: "image",
          type: "image",
          html: true,
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.$t("ar_Name_episode"),
          field: "ar_name",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.$t("en_Name_episode"),
          field: "en_name",
          tdClass: "text-left",
          thClass: "text-left"
        },

        {
          label: this.$t("status"),
          field: "status",
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

  methods: {
    //---- update Params Table
    updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },

    //---- Event Page Change
    onPageChange({ currentPage }) {
      if (this.serverParams.page !== currentPage) {
        this.updateParams({ page: currentPage });
        this.Get_Seriess(currentPage);
      }
    },

    //---- Event Per Page Change
    onPerPageChange({ currentPerPage }) {
      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.updateParams({ page: 1, perPage: currentPerPage });
        this.Get_Seriess(1);
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
      this.Get_Seriess(this.serverParams.page);
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
      this.Get_Seriess(this.serverParams.page);
    },

    //---- Validation State Form

    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },

    //------------- Submit Validation Create & Edit Series
    Submit_Series() {
      this.$refs.Create_series.validate().then(success => {
        if (!success) {
          this.makeToast(
            "danger",
            this.$t("Please_fill_the_form_correctly"),
            this.$t("Failed")
          );
        } else {
          if (!this.editmode) {
            this.Create_Series();
          } else {
            this.Update_Series();
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
        this.series.image = e.target.files[0];
      } else {
        this.series.image = "";
      }
    },

    //------------------------------ Modal (create Series) -------------------------------\
    New_Series() {
      this.reset_Form();
      this.editmode = false;
      this.$bvModal.show("New_series");
    },

    //------------------------------ Modal (Update Series) -------------------------------\
    Edit_Series(series) {
      this.Get_Seriess(this.serverParams.page);
      this.reset_Form();
      this.series = series;
      this.editmode = true;
      this.$bvModal.show("New_series");
    },

    //---------------------------------------- Get All serieses-----------------\
    Get_Seriess(page) {
      // Start the progress bar.
      NProgress.start();
      NProgress.set(0.1);
      axios
        .get(
          "serieses?page=" +
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
          this.serieses = response.data.serieses;
          this.totalRows = response.data.totalRows;
          
          this.categories = response.data.categories;

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

    //---------------------------------------- Create new series-----------------\
    Create_Series() {
      var self = this;
      self.SubmitProcessing = true;
      self.data.append("ar_name", self.series.ar_name);
      self.data.append("en_name", self.series.en_name);
      self.data.append("story_en", self.series.story_en);
      self.data.append("story_ar", self.series.story_ar);
      self.data.append("status", self.series.status);
      self.data.append("aired", self.series.aired);
      self.data.append("age", self.series.age);
      self.data.append("category_id", self.series.category_id);
      self.data.append("rate", self.series.rate);
      self.data.append("publish_status", self.series.publish_status);
      self.data.append("premium", self.series.premium);
      self.data.append("image", self.series.image);
      axios
        .post("serieses", self.data)
        .then(response => {
          self.SubmitProcessing = false;
          Fire.$emit("Event_Series");

          this.makeToast(
            "success",
            this.$t("Create.TitleSeries"),
            this.$t("Success")
          );
        })
        .catch(error => {
           self.SubmitProcessing = false;
          this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
        });
    },

    //---------------------------------------- Update Series-----------------\
    Update_Series() {
      var self = this;
       self.SubmitProcessing = true;
       self.data.append("ar_name", self.series.ar_name);
      self.data.append("en_name", self.series.en_name);
      self.data.append("story_en", self.series.story_en);
      self.data.append("story_ar", self.series.story_ar);
      self.data.append("status", self.series.status);
      self.data.append("aired", self.series.aired);
      self.data.append("age", self.series.age);
      self.data.append("category_id", self.series.category_id);
      self.data.append("rate", self.series.rate);
      self.data.append("publish_status", self.series.publish_status);
      self.data.append("premium", self.series.premium);
      self.data.append("image", self.series.image);
      self.data.append("_method", "put");

      axios
        .post("serieses/" + self.series.id, self.data)
        .then(response => {
           self.SubmitProcessing = false;
           Fire.$emit("Event_Series");

          this.makeToast(
            "success",
            this.$t("Update.TitleSeries"),
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
      this.series = {
        id: "",
        category_id:"",
        rate:"",
        publish_status:"",
        ar_name: "",
        en_name: "",
        story_en:"",
        story_ar:"",
        age:"",
        premium:"",
        status:"",
        image: ""
      };
      this.data = new FormData();
    },

    //---------------------------------------- Delete Series -----------------\
    Delete_Series(id) {
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
            .delete("serieses/" + id)
            .then(() => {
              this.$swal(
                this.$t("Delete.Deleted"),
                this.$t("Delete.TitleSeries"),
                "success"
              );

              Fire.$emit("Delete_Series");
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


    GetElements() {
      axios
        .get("Episodes/create")
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

    //---- Delete serieses by selection

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
            .post("serieses/delete/by_selection", {
              selectedIds: this.selectedIds
            })
            .then(() => {
              this.$swal(
                this.$t("Delete.Deleted"),
                this.$t("Delete.TitleSeries"),
                "success"
              );

              Fire.$emit("Delete_Series");
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
    this.Get_Seriess(1);
 this.GetElements();
    Fire.$on("Event_Series", () => {
      setTimeout(() => {
        this.Get_Seriess(this.serverParams.page);
        this.$bvModal.hide("New_series");
      }, 500);
    });

    Fire.$on("Delete_Series", () => {
      setTimeout(() => {
        this.Get_Seriess(this.serverParams.page);
      }, 500);
    });
  }
};
</script>