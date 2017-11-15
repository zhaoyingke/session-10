Vue.component('doughnut-chart', {
  extends: VueChartJs.Doughnut,
  props: ['data', 'options'],
  mounted () {
    var data = this.data || {
      labels: ['Olga', 'Elsa', 'Lina'],
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: ['#f779b8', '#f87979', '#f7b879'],
          data: [40, 20, 10]
        }
      ]
    };

    var options = this.options || {
      tooltips: {
        enabled: false
      },
			plugins: {
				datalabels: {
          display: true,
					color: '#fff',
					font: {
						weight: 'bold'
					}
				}
			}
    };

    this.renderChart(data, options);
  }
})
