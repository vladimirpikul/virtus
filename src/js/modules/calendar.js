const calendar = function createCalendar() {
  jqueryDatepicker($);
  $('#calendar').datepicker({
    autoSize: true,
  });
};

export default calendar;
