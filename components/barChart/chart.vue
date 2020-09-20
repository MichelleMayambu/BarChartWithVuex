
<script>
import { mapFields, mapMultiRowFields } from "vuex-map-fields";
import { Bar , mixins } from "vue-chartjs";
import axios from "axios";
export default {
  extends: Bar,
  mixins: [mixins.reactiveData],
  props: {
    data: { type: Object, default: null },
  },
  data() {
    return {
    }
  },
  computed:{
    ...mapMultiRowFields(["chartData.chartDetails.defaultData"])
    
  },
  created() {
    axios.get("http://localhost:4000/defaultData").then(res => {
      let responseData = res.data;
      this.chartData = {
         labels: responseData.map(item => item.month),
          datasets: [{
              label: "sales",
             backgroundColor:"#43A047",
             data: responseData.map(item => item.value)
          } 
          ]
      }
    })
    console.log(" response array", this.responseArray)
  },
  mounted() {
    this.renderChart(this.chartData, {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            stacked: true,
            gridLines: {
              display: false
            }
          }
        ],
        yAxes: [
          {
            stacked: true,
            ticks: {
              min: 0,
              max: 100
            }
          }
        ]
      }
    });
  }
};
</script>
