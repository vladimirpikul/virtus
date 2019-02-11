import viewsCart from './modules/views-chart';
import salesChart from './modules/sales-chart';
import calendar from './modules/calendar';

$(document).ready(() => {
  viewsCart();
  salesChart();
  calendar();
});
