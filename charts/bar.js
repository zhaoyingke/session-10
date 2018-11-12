Vue.component('bar-chart', {
  extends: VueChartJs.Bar,
  props: ['data', 'options'],
  mounted () {
    var data = this.data || {
      labels: ["AB","BC","MB","NB","NL","NS","NT","ON","PE","QC","SK","YT","NONE Specified"],
      datasets: [
        {
          label: "Somme d'argent sinistré",
          backgroundColor: '#A0B7C1',
          data: [123329.58,44331.04,16918.27,8765.05,1550,4120,0,223692.22,0,116520.37,17046.26,0,11181],
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
      legend: {
        display: true
      },
			plugins: {
				datalabels: {
          display: true,
					color: '#A0B7C1',
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
