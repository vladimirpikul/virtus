const viewsChart = function drawChart() {
  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    const data = google.visualization.arrayToDataTable([
      ['Day', 'Views'],
      ['SUN', 700],
      ['MON', 1100],
      ['TUE', 900],
      ['WED', 1000],
      ['THU', 800],
      ['FRI', 1200],
      ['SAT', 800],
    ]);

    const options = {
      curveType: 'function',
      chartArea: {
        left: 0, bottom: 50, width: '100%', height: '75%',
      },
      fontSize: 16,
      backgroundColor: '#2f3242',
      vAxis: {
        gridlines: { count: 0 },
      },
      hAxis: {
        textStyle: { color: '#fff' },
      },
    };

    if ($('.views-chart')[0]) {
      const chart = new google.visualization.LineChart($('.views-chart')[0]);
      chart.draw(data, options);
    }
  }
};
export default viewsChart;
