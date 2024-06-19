// 페이지 로드시 스크롤을 맨 위로 이동
window.onload = function () {
  window.scrollTo(0, 0);
};

$(document).ready(function () {
  // 중앙 배치할 요소 선택자
  var element1 = $(".fly-in-text");

  // 스크롤 이벤트 핸들러
  $(window).scroll(function () {
    var elementHeight1 = element1.outerHeight();
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    var windowCenter = scrollTop + windowHeight / 2;

    // 요소를 화면 중앙에 배치하고 고정
    element1.css({
      top: windowCenter - elementHeight1 / 2,
      position: "fixed",
    });
  });
});

$(document).ready(function () {
  var welcomSection = $(".welcome-section"),
    enterButton = welcomSection.find(".enter-button");

  setTimeout(function () {
    welcomSection.removeClass("content-hidden");
  }, 800);
});

$(document).ready(function () {
  setTimeout(function () {
    $("#myText").text("we move life");
  }, 850);
});

$(document).ready(function () {
  setTimeout(function () {
    $(".welcome-section").css({
      backgroundColor: "transparent",
      opacity: 0,
      visibility: "hidden",
      display: "none",
    });
  }, 2200);
});
