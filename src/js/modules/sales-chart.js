const salesChart = function drawSalesChart() {
  if (!$('.sales-chart').length) return;

  const $mySalesChart = $('.sales-chart')[0].getContext('2d');
  const chart = new Chart($mySalesChart, {
    type: 'bar',

    data: {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      datasets: [{
        backgroundColor: '#505464',
        hoverBackgroundColor: '#2196f3',
        data: [700, 1000, 800, 500, 300, 500, 500, 700, 600, 900, 800, 250],
      }],
    },

    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [{
          ticks: {
            fontColor: '#fff',
            fontSize: 16,
          },
          gridLines: {
            display: false,
          },
        }],
        yAxes: [{
          ticks: {
            display: false,
          },
          gridLines: {
            color: '#454858',
          },
        }],
      },
      layout: {
        padding: {
          top: 100,
        },
      },
    },
  });
};

export default salesChart;
