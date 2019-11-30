<script>
import { Radar } from 'vue-chartjs';

export default {
  extends: Radar,
  name: 'chart',
  props: ['param'],
  data () {
    return {
      data: {
        labels: ['保障・安定', '自律・独立', '社会貢献', 'ワークライフバランス', '成長、挑戦'],
        datasets: [{
          label: '',
          data: this.param,
          backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
        }]
      },
      options: {
        legend: {
            display: false,
            labels:{
              defaultFontSize: 110,
               fontColor: 'red'
            }
        },
        scale: {
          angleLines: {
            display: false
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 100
          }
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>