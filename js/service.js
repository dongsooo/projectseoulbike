$('select[name="tickets"]').change(function () {
  $("#cost").html($(this).val());
  $(".pay").html($(this).val());
});
