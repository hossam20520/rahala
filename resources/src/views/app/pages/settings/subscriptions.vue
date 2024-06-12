<template>
  <div class="main-content">
    <breadcumb :page="$t('Subscription')" :folder="$t('Settings')"/>

    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>
    <b-card class="wrapper" v-if="!isLoading">
      <vue-good-table
        mode="remote"
        :columns="columns"
        :totalRows="totalRows"
        :rows="subscriptions"
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
        <!-- <div slot="table-actions" class="mt-2 mb-3">
          <b-button @click="New_Subscription()" class="btn-rounded" variant="btn btn-primary btn-icon m-1">
            <i class="i-Add"></i>
             {{ $t('Add') }}
          </b-button>
        </div> -->

        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'actions'">
            <!-- <a @click="Edit_Subscription(props.row)" title="Edit" v-b-tooltip.hover>
              <i class="i-Edit text-25 text-success"></i>
            </a> -->
            <a title="Delete" v-b-tooltip.hover @click="Delete_Subscription(props.row.id)">
              <i class="i-Close-Window text-25 text-danger"></i>
            </a>
          </span>
          <span v-else-if="props.column.field == 'image'">
            <b-img
              thumbnail
              height="50"
              width="50"
              fluid
              :src="'/images/subscriptions/' + props.row.image"
              alt="image"
            ></b-img>
          </span>
        </template>
      </vue-good-table>
    </b-card>

 
  </div>
</template>

<script>
import NProgress from "nprogress";

export default {
  metaInfo: {
    title: "Subscription"
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
      subscriptions: [],
      limit: "10",
      subscription: {
        id: "",
        ar_name: "",
        en_name: "",
        image: ""
      }
    };
  },
  computed: {
    columns() {
      return [
      {
          label: this.$t("firstname"),
          field: "user.firstname",
          tdClass: "text-left",
          thClass: "text-left"
        },

        {
          label: this.$t("lastname"),
          field: "user.lastname",
          tdClass: "text-left",
          thClass: "text-left"
        },

        {
          label: this.$t("email"),
          field: "user.email",
          tdClass: "text-left",
          thClass: "text-left"
        },


        {
          label: this.$t("phone"),
          field: "user.phone",
          tdClass: "text-left",
          thClass: "text-left"
        },

  
        {
          label: this.$t("Package_ar_name"),
          field: "package.ar_name",
          tdClass: "text-left",
          thClass: "text-left"
        },


        {
          label: this.$t("start_date"),
          field: "start_date",
          tdClass: "text-left",
          thClass: "text-left"
        },

        {
          label: this.$t("end_date"),
          field: "start_date",
          tdClass: "text-left",
          thClass: "text-left"
        },


        {
          label: this.$t("amount"),
          field: "amount",
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
        this.Get_Subscriptions(currentPage);
      }
    },

    //---- Event Per Page Change
    onPerPageChange({ currentPerPage }) {
      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.updateParams({ page: 1, perPage: currentPerPage });
        this.Get_Subscriptions(1);
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
      this.Get_Subscriptions(this.serverParams.page);
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
      this.Get_Subscriptions(this.serverParams.page);
    },

    //---- Validation State Form

    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },

    //------------- Submit Validation Create & Edit Subscription
    Submit_Subscription() {
      this.$refs.Create_subscription.validate().then(success => {
        if (!success) {
          this.makeToast(
            "danger",
            this.$t("Please_fill_the_form_correctly"),
            this.$t("Failed")
          );
        } else {
          if (!this.editmode) {
            this.Create_Subscription();
          } else {
            this.Update_Subscription();
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
        this.subscription.image = e.target.files[0];
      } else {
        this.subscription.image = "";
      }
    },

    //------------------------------ Modal (create Subscription) -------------------------------\
    New_Subscription() {
      this.reset_Form();
      this.editmode = false;
      this.$bvModal.show("New_subscription");
    },

    //------------------------------ Modal (Update Subscription) -------------------------------\
    Edit_Subscription(subscription) {
      this.Get_Subscriptions(this.serverParams.page);
      this.reset_Form();
      this.subscription = subscription;
      this.editmode = true;
      this.$bvModal.show("New_subscription");
    },

    //---------------------------------------- Get All subscriptions-----------------\
    Get_Subscriptions(page) {
      // Start the progress bar.
      NProgress.start();
      NProgress.set(0.1);
      axios
        .get(
          "subscriptions?page=" +
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
          this.subscriptions = response.data.subscriptions;
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

    //---------------------------------------- Create new subscription-----------------\
    Create_Subscription() {
      var self = this;
      self.SubmitProcessing = true;
      self.data.append("ar_name", self.subscription.ar_name);
      self.data.append("en_name", self.subscription.en_name);
      self.data.append("image", self.subscription.image);
      axios
        .post("subscriptions", self.data)
        .then(response => {
          self.SubmitProcessing = false;
          Fire.$emit("Event_Subscription");

          this.makeToast(
            "success",
            this.$t("Create.TitleSubscription"),
            this.$t("Success")
          );
        })
        .catch(error => {
           self.SubmitProcessing = false;
          this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
        });
    },

    //---------------------------------------- Update Subscription-----------------\
    Update_Subscription() {
      var self = this;
       self.SubmitProcessing = true;
      self.data.append("en_name", self.subscription.en_name);
      self.data.append("ar_name", self.subscription.ar_name);
      self.data.append("image", self.subscription.image);
      self.data.append("_method", "put");

      axios
        .post("subscriptions/" + self.subscription.id, self.data)
        .then(response => {
           self.SubmitProcessing = false;
          Fire.$emit("Event_Subscription");

          this.makeToast(
            "success",
            this.$t("Update.TitleSubscription"),
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
      this.subscription = {
        id: "",
        ar_name: "",
        en_name: "",
        image: ""
      };
      this.data = new FormData();
    },

    //---------------------------------------- Delete Subscription -----------------\
    Delete_Subscription(id) {
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
            .delete("subscriptions/" + id)
            .then(() => {
              this.$swal(
                this.$t("Delete.Deleted"),
                this.$t("Delete.TitleSubscription"),
                "success"
              );

              Fire.$emit("Delete_Subscription");
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

    //---- Delete subscriptions by selection

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
            .post("subscriptions/delete/by_selection", {
              selectedIds: this.selectedIds
            })
            .then(() => {
              this.$swal(
                this.$t("Delete.Deleted"),
                this.$t("Delete.TitleSubscription"),
                "success"
              );

              Fire.$emit("Delete_Subscription");
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
    this.Get_Subscriptions(1);

    Fire.$on("Event_Subscription", () => {
      setTimeout(() => {
        this.Get_Subscriptions(this.serverParams.page);
        this.$bvModal.hide("New_subscription");
      }, 500);
    });

    Fire.$on("Delete_Subscription", () => {
      setTimeout(() => {
        this.Get_Subscriptions(this.serverParams.page);
      }, 500);
    });
  }
};
</script>