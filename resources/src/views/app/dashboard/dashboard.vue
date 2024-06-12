<template>
   
  <!-- ============ Body content start ============= -->
  <div   class="main-content">
    <b-row>
      <h3>{{$t('User')}}</h3>
      </b-row>

    <b-row>
      <!-- ICON BG -->
      <!-- https://cdn-icons-png.flaticon.com/512/5412/5412646.png -->
 

      <b-col lg="3" md="6" sm="12">
        <b-card class="card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center">
          <img style="width: 25%;" src="https://cdn-icons-png.flaticon.com/512/3048/3048122.png"/>
          <div class="content">
            <p class="text-muted mt-2 mb-0">{{$t('Clients')}}</p>
            <p
              class="text-primary text-24 line-height-1 mb-2"
            > 0</p>
          </div>
        </b-card>
      </b-col>

<!--       
      <b-col lg="3" md="6" sm="12">
        <b-card class="card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center">
          <img style="width: 25%;" src="https://cdn-icons-png.flaticon.com/512/3997/3997718.png"/>
          <div class="content">
            <p class="text-muted mt-2 mb-0">{{$t('Subscriper')}}</p>
            <p
              class="text-primary text-24 line-height-1 mb-2"
            > 0</p>
          </div>
        </b-card>
      </b-col> -->






    </b-row>





    <!-- <b-row>
      <h3>{{$t('SeriesD')}}</h3>
      </b-row> -->

    <!-- <b-row>
 

      <b-col lg="3" md="6" sm="12">
        <b-card class="card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center">
          <img style="width: 25%;" src="https://cdn-icons-png.flaticon.com/512/2696/2696537.png"/>
          <div class="content">
            <p class="text-muted mt-2 mb-0">{{$t('Series')}}</p>
            <p
              class="text-primary text-24 line-height-1 mb-2"
            > 0</p>
          </div>
        </b-card>
      </b-col>

      
      <b-col lg="3" md="6" sm="12">
        <b-card class="card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center">
          <img style="width: 25%;" src="https://cdn-icons-png.flaticon.com/512/1179/1179069.png"/>
          <div class="content">
            <p class="text-muted mt-2 mb-0">{{$t('Movies')}}</p>
            <p
              class="text-primary text-24 line-height-1 mb-2"
            > 0</p>
          </div>
        </b-card>
      </b-col>


      <b-col lg="3" md="6" sm="12">
        <b-card class="card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center">
          <img style="width: 25%;" src="https://cdn-icons-png.flaticon.com/512/6724/6724239.png"/>
          <div class="content">
            <p class="text-muted mt-2 mb-0">{{$t('Category')}}</p>
            <p
              class="text-primary text-24 line-height-1 mb-2"
            > 0</p>
          </div>
        </b-card>
      </b-col>



    </b-row> -->
 
  </div>
  <!-- ============ Body content End ============= -->
</template>
<script>
// import ECharts modules manually to reduce bundle size
import "echarts/lib/chart/pie";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";

import ECharts from "vue-echarts/components/ECharts.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    "v-chart": ECharts
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Dashboard"
  },
  data() {
    return {
      sales: [],
      stock_alerts: [],
 
      products: [],
      CurrentMonth: "",
      loading: true,
      echartSales: {},
      echartProduct: {},
      echartCustomer: {},
      echartPayment: {}
    };
  },
  computed: {
    ...mapGetters(["currentUser"]),
 
 
  },
  methods: {
    //---------------------------------- Report Dashboard With Echart
 
    //------------------------------Get Month -------------------------\\
 
 
  },
  async mounted() {
 
  }
};
</script>