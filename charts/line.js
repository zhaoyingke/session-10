Vue.component('line-chart', {
  extends: VueChartJs.Line,
  props: ['data', 'options'],
  mounted () {
    var data = this.data || {
      labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
      datasets: [
        {
          label: 'GitHub Commits',
          borderColor: '#f87979',
          backgroundColor: 'transparent',
          data: [40, 20, 10, 15, 17, 20, 25, 30, 40, 50, 50, 40]
        }
      ]
    };

    var options = this.options || {
      scales: {
        yAxes: [
          {
            ticks: {
              min: 0,
              max: 60
            }
          }
        ]
      }
    };

    this.renderChart(data, options);
  }
})
