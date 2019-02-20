const dragDrop = function () {
  if(!$('.sortable')) return;

  const $mySortableTable = $('.sortable');

  $mySortableTable.sortable({
    placeholder: 'ui-state-highlight',
    connectWith: $('.sortable'),
  }).disableSelection();
};

export default dragDrop;
