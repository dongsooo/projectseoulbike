// $("#newsRoomShowAndHide").hide();
// $("#noticeBoardContent").hide();

// $("#noticeBoard li").click(function () {
//   $("#noticeBoardContent").show();
//   $("#newsRoomShowAndHide").hide();
//   return false;
// });

// $("#showAndHideBtn").click(function () {
//   $("#noticeBoardContent").hide();
//   $("#newsRoomShowAndHide").show();
// });

$(".anw").hide();

$(".qus").click(function () {
  $(".anw").slideUp(200);

  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    $(this).css("border-bottom", "");
  } else {
    $(".active").removeClass("active");
    $(this).addClass("active");
    $(this).next(".anw").slideDown(200);
  }
  return false;
});

$(".anw").click(function () {
  $(".active").removeClass("active");
  $(this).removeClass("active");
  $(this).slideUp(200);
});
