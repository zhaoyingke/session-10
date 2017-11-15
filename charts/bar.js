Vue.component('bar-chart', {
  extends: VueChartJs.Bar,
  props: ['data', 'options'],
  mounted () {
    var data = this.data || {
      labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: '#b879f7',
          data: [40, 20, 10, 15, 17, 20, 25, 30, 40, 50, 50, 40],
          datalabels: {
            align: 'end',
            anchor: 'end'
          }
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
					color: '#9260c4',
					font: {
						weight: 'bold'
					},
					formatter: Math.round
				}
			},
      scales: {
        yAxes:  [
          {
            display: false,
            ticks: {
              beginAtZero: true
            }
          }
        ],
        xAxes: [
          {
            categoryPercentage: 1,
            barPercentage: 2/3
          }
        ]
      }
    };

    this.renderChart(data, options);
  }
})
