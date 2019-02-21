const calendar = function createCalendar() {
  const  $myCalendar = $('.calendar');

  $myCalendar.datepicker({
    showOtherMonths: true,
  });
};

export default calendar;
