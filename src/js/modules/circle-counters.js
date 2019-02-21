const circleCounters = function circleCounters() {
  const $counter = $('.circle-counter');

  $.each($counter, function () {
    $(this).circleProgress({
      value: $(this).attr('data-value') * 0.01,
      size: 75,
      thickness: 4,
      fill: '#2492ea',
      emptyFill: '#505464',
      startAngle: 4.7,
    }).on('circle-animation-progress', function (event, progress, stepValue) {
      $(this).find('.percents').text(`${Math.round(stepValue * 100)}%`);
    });
  });
};

export default circleCounters;
