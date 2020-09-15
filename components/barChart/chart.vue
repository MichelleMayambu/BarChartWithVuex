<script>
import { mapFields, mapMultiRowFields } from "vuex-map-fields";
import { Bar } from "vue-chartjs";
export default {
  extends: Bar,
  props: {
    data: { type: Object, default: null }
  },
  computed:{
    chartData: function() {
      return this.data;
    },
    ...mapMultiRowFields(["chartData.chartDetails.defaultData"])
    
  },
  mounted() {
    this.renderChart(this.data, {
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
