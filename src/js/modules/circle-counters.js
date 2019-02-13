const circleCounters = function circleCounters() {
  $('.views-counter').circleProgress({
    value: 0.75,
    size: 80,
    fill: '#2492ea',
    startAngle: 4.7,
  }).on('circle-animation-progress', function (event, progress, stepValue) {
    $(this).find('.percents').text(`${Math.round(stepValue * 100)}%`);
  });
  $('.visitors-counter').circleProgress({
    value: 0.35,
    size: 80,
    fill: '#2492ea',
    startAngle: 4.7,
  }).on('circle-animation-progress', function (event, progress, stepValue) {
    $(this).find('.percents').text(`${Math.round(stepValue * 100)}%`);
  });
  $('.impression-counter').circleProgress({
    value: 0.62,
    size: 80,
    fill: '#2492ea',
    startAngle: 4.7,
  }).on('circle-animation-progress', function (event, progress, stepValue) {
    $(this).find('.percents').text(`${Math.round(stepValue * 100)}%`);
  });
};

export default circleCounters;
