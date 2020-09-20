<template>
    <div> 
        <v-card>
          <v-card-title>BarChart</v-card-title>
        <v-row>
            <v-col cols="12" md="5">
                 <div id="inputs" class="form-group col-11 row">
              <div v-for="(i,index) in defaultData" :key="index">
                {{ i.month}}
                  <v-text-field
                   id="input"
                      v-model.number="defaultData[index].value"
                      class="pa-1"
                      xmsmall
                      dense
                      type="number"
                      min="0"
                      max="100"
                      solo
                      @click="refreshChart">
                  </v-text-field>
                </div>
                 </div>
              <v-btn color="success" small dense outlined rounded @click="postDataToServer">PostData</v-btn>

            </v-col>
           <v-col cols="12" md="7">
             <v-btn color="success" small dense outlined rounded @click="loadData">Generate Chart Data</v-btn>
             <chart v-if="loaded"
             :key="chartKey"
             :data="chartdata"
             :options="chartOptions"
             :styles="styles"
                    />
            </v-col>
        </v-row>
         </v-card>           
        </div>
</template>

<script>
import chart from "~/components/barChart/chart.vue";
import { mapFields, mapMultiRowFields } from "vuex-map-fields";
import { mapActions} from 'vuex';
import axios from "axios";

export default {
    components:{
        chart
    },
    data() {
        return {
          sourceData :this.defaultData,
          loaded : false,
           chartKey: 0,
             chartColors: {
                 green: "#43A047",
                  red: "#F4511E",
                 yellow: "#FB8C00"
            },
        chartdata: {
            labels: [],
            datasets: [
                {
                label: 'Totoal Sales Of The Year 2020 %',
                backgroundColor: [],
                data: []
                }
            ]
            },
            chartOptions: {
            responsive: true,
            maintainAspectRatio: false
            },
            styles: {
            width: "600px",
            height: "400px",
            position: "relative"
            }
        }
    },
      watch: {
    data: function() {
      this._chart.destroy();
      this.renderBarChart();
      }
    },
    mounted() {
      this.$store.dispatch("chartData/loadData");
    },
    computed: {
          ...mapMultiRowFields(["chartData.chartDetails.defaultData"]), 
    },
    created() {
      this.$store.dispatch("chartData/loadData");
      this.fillData();
  },
  methods:{
    fillData(){
      this.refreshChart();
    },
    refreshChart(){
     this.chartdata ={
            hoverBackgroundColor: "red",
            hoverBorderWidth: 10,
            labels: [],
            datasets: [
                {
                label: 'Totoal Sales Of The Year 2020 %',
                backgroundColor: [],
                data: []
                }
            ]
            };
            this.pushData();
            this.chartKey += 1
           
    },
    pushData() {
      //1. loop through our sampleData object array
       for( let i = 0; i < this.defaultData.length ; i++ ) {
                 //2 define colors for our values
                 console.log("data from store", this.defaultData)
                  this.chartdata.labels.push(this.defaultData[i].month);
                  this.chartdata.datasets[0].data.push(this.defaultData[i].value);
                if(this.chartdata.datasets[0].data[i] < 50 ) {
                    this.chartdata.datasets[0].backgroundColor[i] = this.chartColors.red;
                } else if(this.chartdata.datasets[0].data[i] > 70 ){
                    this.chartdata.datasets[0].backgroundColor[i] = this.chartColors.green;
                } else{
                     this.chartdata.datasets[0].backgroundColor[i] = this.chartColors.yellow;
                }
            }
          
       },
    loadData() {
    this.loaded= true;
    this.refreshChart();
  },
  postDataToServer() {
    axios.post("API address here", {
     headers: {
      "Content-Type": "application/json"
     }, 
       "payload" : this.defaultData
    });
     console.log("postdata", this.defaultData)
    alert("data has been posted");
  }
  },
  
}
</script>
