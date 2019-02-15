const salesChart = function drawSalesChart() {
  google.charts.load('current', { packages: ['corechart', 'bar'] });
  google.charts.setOnLoadCallback(drawColColors);

  function drawColColors() {
    const data = google.visualization.arrayToDataTable([
      ['Number', 'Sales'],
      [1, 500],
      [2, 1000],
      [3, 700],
      [4, 300],
      [5, 200],
      [6, 300],
      [7, 300],
      [8, 600],
      [9, 400],
      [10, 900],
      [11, 800],
      [12, 100],
    ]);

    const options = {
      title: 'Sales report',
      titleTextStyle: {
        color: '#fff',
        fontSize: 24.5,
        bold: false,
        fontName: 'Montserrat',
      },
      colors: ['#505464'],
      tooltip: { trigger: 'none' },
      backgroundColor: '#2f3242',
      legend: { position: 'none' },
      chartArea: {
        left: 30, bottom: 30, top: 95, right: 30,
      },
      vAxis: {
        gridlines: { count: 7, color: '#515464' },
        textStyle: { color: '#2f3242' },
      },
      hAxis: {
        gridlines: { count: 0 },
      },
    };

    if ($('.sales-chart')[0]) {
      const chart = new google.visualization.ColumnChart($('.sales-chart')[0]);
      chart.draw(data, options);
    }
  }
};

export default salesChart;
