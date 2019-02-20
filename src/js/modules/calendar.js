const calendar = function createCalendar() {
  if(!$('.calendar')) return;

  const  $myCalendar = $('.calendar');

  $myCalendar.datepicker({
    showOtherMonths: true,
  });
};

export default calendar;
