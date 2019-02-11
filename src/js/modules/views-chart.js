const viewsChart = function drawChart() {
  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    const data = google.visualization.arrayToDataTable([
      ['Day', 'Views'],
      ['MON', 1000],
      ['TUE', 1170],
      ['WED', 660],
      ['THU', 1030],
      ['FRI', 1030],
    ]);

    const options = {
      title: 'Company Performance',
      curveType: 'function',
      legend: { position: 'top' },
      backgroundColor: '#2f3242',
    };

    const chart = new google.visualization.LineChart($('#views-chart')[0]);

    chart.draw(data, options);
  }
};

export default viewsChart;
