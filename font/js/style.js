/*이미지 나타나기*/

const imgBoxPOS = $("#imgBox").offset();
const imgBoxTOP = $("#imgBox").offset().top;

$(window).scroll(function () {
  if (scrollY >= 60) {
    $("#content1Box").addClass("show");
    $("#content2Box").addClass("show");
  } else {
    $("#content1Box").removeClass("show");
    $("#content2Box").removeClass("show");
  }
});

$(window).scroll(function () {
  if (scrollY >= 360) {
    $("#content3Box").addClass("show");
    $("#content4Box").addClass("show");
  } else {
    $("#content3Box").removeClass("show");
    $("#content4Box").removeClass("show");
  }
});

/*이미지 클릭하면 화면 크기 변경*/

$("#content2Box").click(function () {
  $("#content1").addClass("active");
  $("#content1TextBox").addClass("active");

  $("#content2").addClass("active");
  $("#content2TextBox").addClass("active");
});

$("#content1Box").click(function () {
  $("#content1").removeClass("active");
  $("#content1TextBox").removeClass("active");

  $("#content2").removeClass("active");
  $("#content2TextBox").removeClass("active");
});

$("#content3Box").click(function () {
  $("#content4").addClass("active");
  $("#content4TextBox").addClass("active");

  $("#content3").addClass("active");
  $("#content3TextBox").addClass("active");
});

$("#content4Box").click(function () {
  $("#content4").removeClass("active");
  $("#content4TextBox").removeClass("active");

  $("#content3").removeClass("active");
  $("#content3TextBox").removeClass("active");
});
