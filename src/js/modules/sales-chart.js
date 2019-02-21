const salesChart = function drawSalesChart() {
  const $mySalesChart = $('.sales-chart')[0];

  if (!$mySalesChart) return;

  google.charts.load('current', { packages: ['corechart', 'bar'] });
  google.charts.setOnLoadCallback(drawColColors);

  function drawColColors() {
    const data = google.visualization.arrayToDataTable([
      ['Number', 'Sales'],
      [1, 700],
      [2, 1000],
      [3, 800],
      [4, 500],
      [5, 300],
      [6, 500],
      [7, 500],
      [8, 700],
      [9, 600],
      [10, 900],
      [11, 800],
      [12, 200],
    ]);

    const options = {
      colors: ['#505464'],
      tooltip: { trigger: 'none' },
      backgroundColor: '#2f3242',
      legend: { position: 'none' },
      chartArea: {
        left: 35, bottom: 50, top: 95, right: 35,
      },
      vAxis: {
        gridlines: { count: 7, color: '#515464' },
        textStyle: { color: '#2f3242' },
      },
      hAxis: {
        gridlines: { count: 0 },
      },
    };

    const chart = new google.visualization.ColumnChart($mySalesChart);
    chart.draw(data, options);
  }
};

export default salesChart;
