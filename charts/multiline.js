Vue.component('multibar-chart', {
  extends: VueChartJs.HorizontalBar,
  props: ['data', 'options'],
  mounted () {
    var data = this.data || {
      labels: ["Mediterranean Migrant Crisis",
      "Protests of Islam critical PEGIDA movement in Dresden",
      "Financial Crisis in Greece",
      "Ukraine conflict between Russia and Western Countries"],
      datasets: [
        {
          label: 'Very high trust',
          borderColor: '#A0B7C1',
          backgroundColor: '#A0B7C1',
          data: [0.03,0.03,0.04,0.02]
        },
        {
          label: 'High trust',
          borderColor: '#D7E1CA',
          backgroundColor: '#D7E1CA',
          data: [0.45,0.37,0.31,0.3]
        },
        {
          label: 'No answer',
          borderColor: '#E7DDBB',
          backgroundColor: '#E7DDBB',
          data: [0.02,0.04,0.02,0.02]
        },
        {
          label: 'Low trust',
          borderColor: '#E2A390',
          backgroundColor: '#E2A390',
          data: [0.41,0.41,0.46,0.52]
        },
        {
          label: 'Very low trust',
          borderColor: '#A8573B',
          backgroundColor: '#A8573B',
          data: [0.09,0.15,0.17,0.14]
        }
      ]
    };

    var options = this.options || {
      scales: {
        yAxes:  [
          {
            display: true,
            stacked: false,
            ticks: {
              beginAtZero: true
            }
          }
        ],
        xAxes: [
          {
            stacked: false,
            categoryPercentage: 1/2,
            barPercentage: 2/3
          }
        ]
      }
    };

    this.renderChart(data, options);
  }
})
