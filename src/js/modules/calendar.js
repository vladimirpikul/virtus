const calendar = function createCalendar() {
  const  $myCalendar = $('.calendar');

  $myCalendar.datepicker({
    showOtherMonths: true,
    dayNamesMin: [ "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT" ],
  });
};

export default calendar;
