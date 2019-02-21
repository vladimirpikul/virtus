import viewsCart from './modules/views-chart';
import salesChart from './modules/sales-chart';
import calendar from './modules/calendar';
import circleCounters from './modules/circle-counters';
import dragDrop from './modules/drag-n-drop';
import viewsChartNew from './modules/views-chart-new';

$(document).ready(() => {
  viewsCart();
  salesChart();
  calendar();
  circleCounters();
  dragDrop();
  viewsChartNew();
});
