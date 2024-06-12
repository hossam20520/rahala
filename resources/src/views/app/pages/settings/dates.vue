
<template>
  <div class="main-content">
    <breadcumb :page="$t('Date')" :folder="$t('Settings')"/>

    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>
    <b-card class="wrapper" v-if="!isLoading">
      <vue-good-table
        mode="remote"
        :columns="columns"
        :totalRows="totalRows"
        :rows="dates"
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
          <b-button @click="New_Date()" class="btn-rounded" variant="btn btn-primary btn-icon m-1">
            <i class="i-Add"></i>
             {{ $t('Add') }}
          </b-button>
        </div>

        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'actions'">
            <a @click="Edit_Date(props.row)" title="Edit" v-b-tooltip.hover>
              <i class="i-Edit text-25 text-success"></i>
            </a>
            <a title="Delete" v-b-tooltip.hover @click="Delete_Date(props.row.id)">
              <i class="i-Close-Window text-25 text-danger"></i>
            </a>
          </span>
          <span v-else-if="props.column.field == 'image'">
            <b-img
              thumbnail
              height="50"
              width="50"
              fluid
              :src="'/images/dates/' + props.row.image"
              alt="image"
            ></b-img>
          </span>
        </template>
      </vue-good-table>
    </b-card>

    <validation-observer ref="Create_date">
      <b-modal hide-footer size="md" id="New_date" :title="editmode?$t('Edit'):$t('Add')">
        <b-form @submit.prevent="Submit_Date" enctype="multipart/form-data">
          <b-row>
            <!-- Date Name -->



            <b-col md="12">
                  <validation-provider
                    name="ar_Name"
                    :rules="{  min:3 , max:55}"
                    v-slot="validationContext">
                    <b-form-group :label="$t('Name_ar_name')">
                      <b-form-input
                        :state="getValidationState(validationContext)"
                        aria-describedby="Name-feedback"
                        label="ar_name"
                        :placeholder="$t('Name_ar_name')"
                        v-model="date.ar_name"
                      ></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
            </b-col>



            <b-col md="12">
              <validation-provider  >
                    <b-form-group slot-scope="{ valid, errors }" :label="$t('Name_en_name')">
                  <validation-provider
                    name="en_Name"
                    :rules="{required:true , min:3 , max:55}"
                    v-slot="validationContext">
                    <b-form-group :label="$t('Name_en_name')">
                      <b-form-input
                        :state="getValidationState(validationContext)"
                        aria-describedby="Name-feedback"
                        label="en_name"
                        :placeholder="$t('Name_en_name')"
                        v-model="date.en_name"
                      ></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-form-group>
                  </validation-provider>
            </b-col>

    
               <b-col md="12">
                  <validation-provider name=" date">
                    <b-form-group slot-scope="{ valid, errors }" :label="$t('date')">
                      <v-select
               :class="{'is-invalid': !!errors.length}"
               :state="errors[0] ? false : (valid ? true : null)"
               v-model="date.date_name"
               :reduce="label => label.value"
               :placeholder="$t('date')"
               :options="
                       [
                     {label: 'Sunday', value: 'Sunday'},
                     {label: 'Monday', value: 'Monday'},
                     {label: 'Tuesday', value: 'Tuesday'},
                     {label: 'Wednesday', value: 'Wednesday'},
                     {label: 'Thursday', value: 'Thursday'},
                     {label: 'Friday', value: 'Friday'},
                     {label: 'Saturday', value: 'Saturday'},
 
                      ]"
             ></v-select>
                      <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
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
                        v-model="date.category"
                        multiple
                        :options="categories.map(categories => ({label: categories.name, value: categories.id}))"
                      />
                      <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>




                <b-col md="6" class="mb-2">
                  <validation-provider name="rate" :rules="{ required: true, min: 1, max: 55 }"
                    v-slot="validationContext">
                    <b-form-group :label="$t('rate')">
                      <b-form-input :state="getValidationState(validationContext)" aria-describedby="Name-feedback"
                        label="rate" :placeholder="$t('rate')" v-model="date.rate"></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0]
                      }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>



            <!-- -Date Image -->
            <b-col md="12">
              <validation-provider name="Image" ref="Image" rules="mimes:image/*">
                <b-form-group slot-scope="{validate, valid, errors }" :label="$t('DateImage')">
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
    title: "Date"
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
      dates: [],
      limit: "10",
      selectedIds: [],
      categories: [],
      date: {
        id: "",
        category:"",
        rate:"",
        ar_name: "",
        en_name: "",
        date_name:"",
        image: ""
      }
    };
  },
  computed: {
    columns() {
      return [
        {
          label: this.$t("DateImage"),
          field: "image",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.$t("en_name"),
          field: "en_name",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.$t("ar_name"),
          field: "ar_name",
          tdClass: "text-left",
          thClass: "text-left"
        },

        {
          label: this.$t("date_name"),
          field: "date_name",
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
        this.Get_Dates(currentPage);
      }
    },

    //---- Event Per Page Change
    onPerPageChange({ currentPerPage }) {
      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.updateParams({ page: 1, perPage: currentPerPage });
        this.Get_Dates(1);
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
      this.Get_Dates(this.serverParams.page);
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
      this.Get_Dates(this.serverParams.page);
    },

    //---- Validation State Form

    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },

    //------------- Submit Validation Create & Edit Date
    Submit_Date() {
      this.$refs.Create_date.validate().then(success => {
        if (!success) {
          this.makeToast(
            "danger",
            this.$t("Please_fill_the_form_correctly"),
            this.$t("Failed")
          );
        } else {
          if (!this.editmode) {
            this.Create_Date();
          } else {
            this.Update_Date();
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
        this.date.image = e.target.files[0];
      } else {
        this.date.image = "";
      }
    },

    //------------------------------ Modal (create Date) -------------------------------\
    New_Date() {
      this.reset_Form();
      this.editmode = false;
      this.$bvModal.show("New_date");
    },

    //------------------------------ Modal (Update Date) -------------------------------\
    Edit_Date(date) {
      this.Get_Dates(this.serverParams.page);
      this.reset_Form();
      this.date = date;
      this.editmode = true;
      this.$bvModal.show("New_date");
    },

    //---------------------------------------- Get All dates-----------------\
    Get_Dates(page) {
      // Start the progress bar.
      NProgress.start();
      NProgress.set(0.1);
      axios
        .get(
          "dates?page=" +
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
          this.dates = response.data.dates;
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

    //---------------------------------------- Create new date-----------------\
    Create_Date() {
      var self = this;
      self.SubmitProcessing = true;
      self.data.append("ar_name", self.date.ar_name);
      self.data.append("en_name", self.date.en_name);
      self.data.append("date_name", self.date.date_name);
      self.data.append("rate", self.date.rate);
      self.data.append("category_id", self.date.category);


      self.data.append("image", self.date.image);
      axios
        .post("dates", self.data)
        .then(response => {
          self.SubmitProcessing = false;
          Fire.$emit("Event_Date");

          this.makeToast(
            "success",
            this.$t("Create.TitleDate"),
            this.$t("Success")
          );
        })
        .catch(error => {
           self.SubmitProcessing = false;
          this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
        });
    },

    //---------------------------------------- Update Date-----------------\
    Update_Date() {
      var self = this;
       self.SubmitProcessing = true;
      self.data.append("en_name", self.date.en_name);
      self.data.append("ar_name", self.date.ar_name);
      self.data.append("date_name", self.date.date_name);
      self.data.append("image", self.date.image);
      self.data.append("rate", self.date.rate);
      self.data.append("category_id", self.date.category);
      self.data.append("_method", "put");

      axios
        .post("dates/" + self.date.id, self.data)
        .then(response => {
           self.SubmitProcessing = false;
          Fire.$emit("Event_Date");

          this.makeToast(
            "success",
            this.$t("Update.TitleDate"),
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
      this.date = {
        id: "",
        ar_name: "",
        en_name: "",
        image: "",
        rate: "",
        category_id: ""
      };
      this.data = new FormData();
    },

    //---------------------------------------- Delete Date -----------------\
    Delete_Date(id) {
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
            .delete("dates/" + id)
            .then(() => {
              this.$swal(
                this.$t("Delete.Deleted"),
                this.$t("Delete.TitleDate"),
                "success"
              );

              Fire.$emit("Delete_Date");
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

    //---- Delete dates by selection

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
            .post("dates/delete/by_selection", {
              selectedIds: this.selectedIds
            })
            .then(() => {
              this.$swal(
                this.$t("Delete.Deleted"),
                this.$t("Delete.TitleDate"),
                "success"
              );

              Fire.$emit("Delete_Date");
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
    this.Get_Dates(1);

    Fire.$on("Event_Date", () => {
      setTimeout(() => {
        this.Get_Dates(this.serverParams.page);
        this.$bvModal.hide("New_date");
      }, 500);
    });

    Fire.$on("Delete_Date", () => {
      setTimeout(() => {
        this.Get_Dates(this.serverParams.page);
      }, 500);
    });
  }
};
</script>