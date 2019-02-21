const dragDrop = () => {
  const $mySortableTable = $('.sortable');

  $mySortableTable.sortable({
    placeholder: 'ui-state-highlight',
    connectWith: $mySortableTable,
  }).disableSelection();
};

export default dragDrop;
