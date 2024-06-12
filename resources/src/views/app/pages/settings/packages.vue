<template>
  <div class="main-content">
    <breadcumb :page="$t('Package')" :folder="$t('Settings')"/>

    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>
    <b-card class="wrapper" v-if="!isLoading">
      <vue-good-table
        mode="remote"
        :columns="columns"
        :totalRows="totalRows"
        :rows="packages"
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
          <b-button @click="New_Package()" class="btn-rounded" variant="btn btn-primary btn-icon m-1">
            <i class="i-Add"></i>
             {{ $t('Add') }}
          </b-button>
        </div>

        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'actions'">
            <a @click="Edit_Package(props.row)" title="Edit" v-b-tooltip.hover>
              <i class="i-Edit text-25 text-success"></i>
            </a>
            <a title="Delete" v-b-tooltip.hover @click="Delete_Package(props.row.id)">
              <i class="i-Close-Window text-25 text-danger"></i>
            </a>
          </span>
          <span v-else-if="props.column.field == 'image'">
            <b-img
              thumbnail
              height="50"
              width="50"
              fluid
              :src="'/images/packages/' + props.row.image"
              alt="image"
            ></b-img>
          </span>
        </template>
      </vue-good-table>
    </b-card>

    <validation-observer ref="Create_package">
      <b-modal hide-footer size="md" id="New_package" :title="editmode?$t('Edit'):$t('Add')">
        <b-form @submit.prevent="Submit_Package" enctype="multipart/form-data">
          <b-row>
            <!-- Package Name -->



            <b-col md="12">
                  <validation-provider
                    name="ar_Name"
                    :rules="{required:true , min:3 , max:55}"
                    v-slot="validationContext">
                    <b-form-group :label="$t('Package_ar_name')">
                      <b-form-input
                        :state="getValidationState(validationContext)"
                        aria-describedby="Name-feedback"
                        label="Package_ar_name"
                        :placeholder="$t('Package_ar_name')"
                        v-model="package.ar_name"
                      ></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
            </b-col>

            <!-- Package -->
            <b-col md="12">
              <validation-provider
                    name="Package_en_name"
                    :rules="{required:true , min:3 , max:55}"
                    v-slot="validationContext">
                    <b-form-group :label="$t('Package_en_name')">
                      <b-form-input
                        :state="getValidationState(validationContext)"
                        aria-describedby="Name-feedback"
                        label="Package_en_name"
                        :placeholder="$t('Package_en_name')"
                        v-model="package.en_name"
                      ></b-form-input>
                      <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
            </b-col>

 

            <b-col md="12">
                  <validation-provider
                    name="days"
                    :rules="{ regex: /^\d*\.?\d*$/}"
                    v-slot="validationContext"
                  >
                    <b-form-group :label="$t('days')">
                      <b-form-input
                        :state="getValidationState(validationContext)"
                        aria-describedby="StockAlert-feedback"
                        label="days"
                        :placeholder="$t('days')"
                        v-model="package.days"
                      ></b-form-input>
                      <b-form-invalid-feedback
                        id="StockAlert-feedback"
                      >{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>




                <b-col md="12">
                  <validation-provider
                    name="price"
                    :rules="{ regex: /^\d*\.?\d*$/}"
                    v-slot="validationContext"
                  >
                    <b-form-group :label="$t('price')">
                      <b-form-input
                        :state="getValidationState(validationContext)"
                        aria-describedby="StockAlert-feedback"
                        label="price"
                        :placeholder="$t('price')"
                        v-model="package.price"
                      ></b-form-input>
                      <b-form-invalid-feedback
                        id="StockAlert-feedback"
                      >{{ validationContext.errors[0] }}</b-form-invalid-feedback>
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
    title: "Package"
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
      packages: [],
      limit: "10",
      package: {
        id: "",
        days:"",
        price:"",
        ar_name: "",
        en_name: "",
       
      }
    };
  },
  computed: {
    columns() {
      return [
 
        {
          label: this.$t("Package_en_name"),
          field: "en_name",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.$t("Package_ar_name"),
          field: "ar_name",
          tdClass: "text-left",
          thClass: "text-left"
        },

        {
          label: this.$t("days"),
          field: "days",
          tdClass: "text-left",
          thClass: "text-left"
        },

        {
          label: this.$t("price"),
          field: "price",
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
        this.Get_Packages(currentPage);
      }
    },

    //---- Event Per Page Change
    onPerPageChange({ currentPerPage }) {
      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.updateParams({ page: 1, perPage: currentPerPage });
        this.Get_Packages(1);
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
      this.Get_Packages(this.serverParams.page);
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
      this.Get_Packages(this.serverParams.page);
    },

    //---- Validation State Form

    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },

    //------------- Submit Validation Create & Edit Package
    Submit_Package() {
      this.$refs.Create_package.validate().then(success => {
        if (!success) {
          this.makeToast(
            "danger",
            this.$t("Please_fill_the_form_correctly"),
            this.$t("Failed")
          );
        } else {
          if (!this.editmode) {
            this.Create_Package();
          } else {
            this.Update_Package();
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
        this.package.image = e.target.files[0];
      } else {
        this.package.image = "";
      }
    },

    //------------------------------ Modal (create Package) -------------------------------\
    New_Package() {
      this.reset_Form();
      this.editmode = false;
      this.$bvModal.show("New_package");
    },

    //------------------------------ Modal (Update Package) -------------------------------\
    Edit_Package(packagee) {
      this.Get_Packages(this.serverParams.page);
      this.reset_Form();
      this.package = packagee;
      this.editmode = true;
      this.$bvModal.show("New_package");
    },

    //---------------------------------------- Get All packages-----------------\
    Get_Packages(page) {
      // Start the progress bar.
      NProgress.start();
      NProgress.set(0.1);
      axios
        .get(
          "packages?page=" +
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
          this.packages = response.data.packages;
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

    //---------------------------------------- Create new package-----------------\
    Create_Package() {
      var self = this;
      self.SubmitProcessing = true;
      self.data.append("ar_name", self.package.ar_name);
      self.data.append("en_name", self.package.en_name);
      self.data.append("days", self.package.days);
      self.data.append("price", self.package.price);
     
      axios
        .post("packages", self.data)
        .then(response => {
          self.SubmitProcessing = false;
          Fire.$emit("Event_Package");

          this.makeToast(
            "success",
            this.$t("Create.TitlePackage"),
            this.$t("Success")
          );
        })
        .catch(error => {
           self.SubmitProcessing = false;
          this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
        });
    },

    //---------------------------------------- Update Package-----------------\
    Update_Package() {
      var self = this;
       self.SubmitProcessing = true;
      self.data.append("en_name", self.package.en_name);
      self.data.append("ar_name", self.package.ar_name);
      self.data.append("days", self.package.days);
      self.data.append("price", self.package.price);
      self.data.append("_method", "put");

      axios
        .post("packages/" + self.package.id, self.data)
        .then(response => {
           self.SubmitProcessing = false;
          Fire.$emit("Event_Package");

          this.makeToast(
            "success",
            this.$t("Update.TitlePackage"),
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
      this.package = {
        id: "",
        ar_name: "",
        en_name: "",
        days: "",
        price:"",
      };
      this.data = new FormData();
    },

    //---------------------------------------- Delete Package -----------------\
    Delete_Package(id) {
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
            .delete("packages/" + id)
            .then(() => {
              this.$swal(
                this.$t("Delete.Deleted"),
                this.$t("Delete.TitlePackage"),
                "success"
              );

              Fire.$emit("Delete_Package");
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

    //---- Delete packages by selection

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
            .post("packages/delete/by_selection", {
              selectedIds: this.selectedIds
            })
            .then(() => {
              this.$swal(
                this.$t("Delete.Deleted"),
                this.$t("Delete.TitlePackage"),
                "success"
              );

              Fire.$emit("Delete_Package");
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
    this.Get_Packages(1);

    Fire.$on("Event_Package", () => {
      setTimeout(() => {
        this.Get_Packages(this.serverParams.page);
        this.$bvModal.hide("New_package");
      }, 500);
    });

    Fire.$on("Delete_Package", () => {
      setTimeout(() => {
        this.Get_Packages(this.serverParams.page);
      }, 500);
    });
  }
};
</script>