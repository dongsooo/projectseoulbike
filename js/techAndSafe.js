/*버튼 클릭시 색 변경*/
$("#techButton li").eq(0).addClass("active");
$("#techImgBox").addClass("active");

/*
만약에 첫번쨰 버튼에 액티브가 있으면
태크이미지에 액티브를 넣고,
태크이미지2에 액티브를 뺌 
두번째 버튼에 액티브가 있으면
테크이미지2에 액티브를 넣고,
태크이미지에 액티브를 뺌
**/
$("#techButton li")
  .eq(0)
  .click(function () {
    $(".active").removeClass("active");
    $("#techButton li").eq(1).removeClass("active");
    $("#techButton li").eq(0).addClass("active");
    $("#techImgBox").addClass("active");

    return false;
  });

$("#techButton li")
  .eq(1)
  .click(function () {
    $(".active").removeClass("active");
    $("#techButton li").eq(0).removeClass("active");
    $("#techButton li").eq(1).addClass("active");
    $("#techImgBox2").addClass("active");

    return false;
  });

/*이용안내 숨겨놓기*/

$("#slide>ul>li").eq(0).siblings().hide();
$("#slide>ul>li").hide().eq(0).show();
$(".btn>li").first().addClass("check");

let nth = 0;
const MAX = $(".btn>li").length - 1;
let auto = 0;

$(".next").click(function () {
  $("#slide>ul>li").eq(nth).fadeOut(500);
  nth++;
  if (nth > MAX) nth = 0;
  //다음 슬라이드
  $("#slide>ul>li")
    .eq(nth)
    .fadeIn(500, function () {
      $(".btn>li").removeClass("check").eq(nth).addClass("check");
    });
});

$(".prev").click(function () {
  $("#slide>ul>li").eq(nth).fadeOut(500); //현재 슬라이드
  nth--;
  if (nth < 0) nth = MAX;
  //다음 슬라이드
  $("#slide>ul>li")
    .eq(nth)
    .fadeIn(500, function () {
      $(".btn>li").removeClass("check").eq(nth).addClass("check");
    });
});

$(".btn>li").click(function () {
  let checkBtn = $(this).index();
  if (nth == checkBtn) return;
  $(".btn>li").removeClass("check").eq(checkBtn).addClass("check");
  $("#slide>ul>li").eq(nth).fadeOut(500);
  $("#slide>ul>li").eq(checkBtn).fadeIn(500);
  nth = checkBtn;
});

// 서비스 메뉴 관련 함수
$("#serviceTextBox").show();
$("#buyTicketBox").hide();

// 티켓창 보여주기, 숨기기
$("#ticketBox li").click(function () {
  $("#buyTicketBox").show();
  $("#serviceTextBox").hide();
  $("#main_contentBox").hide();
  $("#story").hide();
  $("#techAndSafe").hide();
  $("#newsRoom").hide();

  return false;
});

$("#buyTicketExitBtn").click(function () {
  $("#buyTicketBox").hide();
  $("#serviceTextBox").show();
  $("#serviceTextBox").show();
  $("#main_contentBox").show();
  $("#story").show();
  $("#techAndSafe").show();
  $("#newsRoom").show();
});

// 티켓 선택창 가격 자동 변경
$('select[name="tickets"]').change(function () {
  $("#cost").html($(this).val());
  $(".pay").html($(this).val());
});

// 뉴스룸관련 함수
// $("#newsRoomShowAndHide").hide();
$("#noticeBoardContent").hide();

$("#noticeBoard li").click(function () {
  $("#noticeBoardContent").show();
  $("#serviceTextBox").hide();
  $("#main_contentBox").hide();
  $("#story").hide();
  $("#techAndSafe").hide();
  $("#newsRoomShowAndHide").hide();

  return false;
});

$("#showAndHideBtn").click(function () {
  $("#noticeBoardContent").hide();
  $("#serviceTextBox").show();
  $("#main_contentBox").show();
  $("#story").show();
  $("#techAndSafe").show();
  $("#newsRoomShowAndHide").show();
});

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
