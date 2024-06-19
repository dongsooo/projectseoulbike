$(".loginBtn").click(function () {
  $("#loginBG").show();
  $("html, body").css("overflow", "hidden");
  return false;
});

$(".logCnCl").click(function () {
  $("#loginBG").hide();
  $("html, body").css("overflow", "");
});
