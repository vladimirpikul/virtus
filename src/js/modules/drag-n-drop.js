const dragDrop = function () {
  $('.sortable').sortable({
    connectWith: $('.sortable'),
  }).disableSelection();
};
export default dragDrop;
