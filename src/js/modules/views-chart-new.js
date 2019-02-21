const viewsChartNew = function drawViewsChart() {
    if (!$('.views-chart-new').length) return;

    const $myVievsChart = $('.views-chart-new')[0].getContext('2d');
    var chart = new Chart($myVievsChart, {
        type: 'line',

        data: {
            labels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
            datasets: [{
                backgroundColor: '#2c4767',
                borderColor: '#2196f3',
                data: [600, 1050, 850, 950, 750, 1200, 800],
            }]
        },

        options: {
            maintainAspectRatio: false,
            legend: {
                display: false,
            },
            scales: {
                xAxes: [{
                    offset: true,
                    position: 'left',
                    ticks: {
                        min: 'MON',
                        max: 'FRI',
                        fontColor: '#fff',
                        fontSize: 16
                    },
                    gridLines: {
                        offsetGridLines: 'true',
                        color: '#454858'
                    }
                }],
                yAxes: [{
                    display: false,
                }],
            },
            layout: {
                padding: {
                    top: 150,
                    bottom: 0
                }
            }
        }
    });
};
export default viewsChartNew;