const calendar = function createCalendar() {
  jqueryDatepicker($);
  $('.calendar').datepicker({
    nextText: '<img class="nextImg" src="assets/images/chevron-right.png" />',
    prevText: '<img class="prevImg" src="assets/images/chevron-left.png" />',
    showOtherMonths: true,
  });
};

export default calendar;
