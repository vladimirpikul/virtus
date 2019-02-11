const salesChart = function drawSalesChart() {
  google.charts.load('current', { packages: ['corechart', 'bar'] });
  google.charts.setOnLoadCallback(drawColColors);

  function drawColColors() {
    const data = new google.visualization.DataTable();
    data.addColumn('timeofday', 'Time of Day');
    data.addColumn('number', 'Sales');

    data.addRows([
      [{ v: [8, 0, 0], f: '8 am' }, 6],
      [{ v: [9, 0, 0], f: '9 am' }, 11],
      [{ v: [10, 0, 0], f: '10 am' }, 8],
      [{ v: [11, 0, 0], f: '11 am' }, 3],
      [{ v: [12, 0, 0], f: '12 pm' }, 2],
      [{ v: [13, 0, 0], f: '1 pm' }, 3],
      [{ v: [14, 0, 0], f: '2 pm' }, 3],
      [{ v: [15, 0, 0], f: '3 pm' }, 8],
      [{ v: [16, 0, 0], f: '4 pm' }, 5],
      [{ v: [17, 0, 0], f: '5 pm' }, 9],
    ]);

    const options = {
      title: 'Sales report',
      colors: ['#505464'],
      backgroundColor: '#2f3242',
    };

    const chart = new google.visualization.ColumnChart($('#sales-chart')[0]);
    chart.draw(data, options);
  }
};

export default salesChart;
