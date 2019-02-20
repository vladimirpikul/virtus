const viewsChart = function drawChart() {
  if(!$('.views-chart').length) return;

  const $myVievsChart = $('.views-chart')[0];

  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    const data = google.visualization.arrayToDataTable([
      ['Day', 'Views'],
      ['SUN', 600],
      ['MON', 1050],
      ['TUE', 850],
      ['WED', 950],
      ['THU', 700],
      ['FRI', 1200],
      ['SAT', 800],
    ]);

    const options = {
      curveType: 'function',
      chartArea: {
        left: 0, bottom: 50, width: '100%', height: '75%',
      },
      fontSize: 16,
      backgroundColor: 'transparent',
      vAxis: {
        gridlines: { count: 0 },
      },
      hAxis: {
        textStyle: {
          color: '#fff',
          bold: true,
        },
        viewWindow: {
          min: 1,
          max: 6
        },
      },
    };

    if ($(window).width() < 480) {
      options.chartArea.height = '55%';
      options.hAxis.textStyle.fontSize = 12;
    }

    const chart = new google.visualization.LineChart($myVievsChart);
    chart.draw(data, options);
  }
};
export default viewsChart;
