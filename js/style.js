/*마우스 휠 이벤트*/

// 주 메뉴 1번의 언더라인 지정
// $("#lnb > ul > li").eq(0).addClass("check");
let liNth = 0;

$("#lnb > ul > li").click(function () {
  liNth = $(this).index();
  $("#lnb > ul>li").removeClass("check");
  $("#lnb > ul>li").eq(liNth).addClass("check");
});
//따릉이 이ㅑㅇ기
$(window).scroll(function () {
  if (scrollY >= 1600 && scrollY < 3080) {
    $("#lnb > ul > li").eq(0).addClass("check");
  } else {
    $("#lnb > ul > li").eq(0).removeClass("check");
  }
});
//기술과 안전
$(window).scroll(function () {
  if (scrollY >= 3080 && scrollY < 5870) {
    $("#lnb > ul > li").eq(1).addClass("check");
  } else {
    $("#lnb > ul > li").eq(1).removeClass("check");
  }
});
//서비스
$(window).scroll(function () {
  if (scrollY >= 5870 && scrollY < 6660) {
    $("#lnb > ul > li").eq(2).addClass("check");
  } else {
    $("#lnb > ul > li").eq(2).removeClass("check");
  }
});
// 뉴스룸
$(window).scroll(function () {
  if (scrollY >= 6660) {
    $("#lnb > ul > li").eq(3).addClass("check");
  } else {
    $("#lnb > ul > li").eq(3).removeClass("check");
  }
});
/*이미지 나타나기*/

const imgBoxTOP = $("#imgBox").offset().top;

$(window).scroll(function () {
  if (scrollY >= imgBoxTOP && scrollY <= imgBoxTOP + 1260) {
    $("#content1Box").addClass("show");
    $("#content2Box").addClass("show");
  } else {
    $("#content1Box").removeClass("show");
    $("#content2Box").removeClass("show");
  }
});

$(window).scroll(function () {
  if (scrollY >= imgBoxTOP + 260 && scrollY <= imgBoxTOP + 1330) {
    $("#content3Box").addClass("show");
    $("#content4Box").addClass("show");
  } else {
    $("#content3Box").removeClass("show");
    $("#content4Box").removeClass("show");
  }
});

const storyContent1POS = $("#storyContent1").offset();
const storyContent1TOP = $("#storyContent1").offset().top;
console.log(storyContent1TOP);
$(window).scroll(function () {
  if (scrollY >= 1123 && scrollY <= 2123) {
    $("#storyContent1").addClass("show");
    $("#storyContent2").addClass("show");
  } else {
    $("#storyContent1").removeClass("show");
    $("#storyContent2").removeClass("show");
  }
});

$(window).scroll(function () {
  if (scrollY >= 1223 && scrollY <= 2223) {
    $("#storyContent3").addClass("show");
    $("#storyContent4").addClass("show");
  } else {
    $("#storyContent3").removeClass("show");
    $("#storyContent4").removeClass("show");
  }
});

$(window).scroll(function () {
  if (scrollY >= 2723 && scrollY <= 3623) {
    $("#storyIntro").addClass("show");
  } else {
    $("#storyIntro").removeClass("show");
  }
});

$(window).scroll(function () {
  if (scrollY >= 5523 && scrollY <= 6550) {
    $("#ticketBox").addClass("active");
  } else {
    $("#ticketBox").removeClass("active");
  }
});

/*이미지 클릭하면 화면 크기 변경*/

$("#content2Box").click(function () {
  $("#content1").addClass("active");
  $("#content1TextBox").addClass("active");
  $("#content1 img:nth-child(4)").removeClass("active");

  $("#content2").addClass("active");
  $("#content2TextBox").addClass("active");
});

$("#content1Box").click(function () {
  $("#content1").removeClass("active");
  $("#content1TextBox").removeClass("active");
  $("#content1 img:nth-child(4)").addClass("active");

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

// 숫자 카운트
// 지구 카운트
$("#earth > p").fadeOut(200);
$("#hambuger > p").fadeOut(200);
$("#car > p").fadeOut(200);
let earthCountBox = document.querySelector("#earthCount");
let earthCount = 0;
let earthNum = 8576929;

// 8576929
$(window).scroll(function (event) {
  if (scrollY >= 2073) {
    let countFinished = 0; // 카운트가 끝난 횟수
    let totalCounts = 3; // 총 카운트할 개수

    // 지구 카운트
    let earthCountBox = document.querySelector("#earthCount");
    let earthCount = 0;
    let earthNum = 8576929;
    let earthCounting = setInterval(function () {
      if (earthCount >= earthNum) {
        earthCount = earthNum;
        clearInterval(earthCounting);
        countFinished++; // 카운트가 끝남을 표시
        if (countFinished === totalCounts) {
          showTextAndCallback();
        }
      } else {
        earthCount += 123280;
        earthCountBox.innerHTML = new Intl.NumberFormat().format(earthCount);
      }
    }, 10);

    // 햄버거 카운트
    let hamCountBox = document.querySelector("#hamCount");
    let hamCount = 0;
    let hamNum = 188087538;
    let hamCounting = setInterval(function () {
      if (hamCount >= hamNum) {
        hamCount = hamNum;
        clearInterval(hamCounting);
        countFinished++; // 카운트가 끝남을 표시
        if (countFinished === totalCounts) {
          showTextAndCallback();
        }
      } else {
        hamCount += 3032850;
        hamCountBox.innerHTML = new Intl.NumberFormat().format(hamCount);
      }
    }, 10);

    // 자동차 카운트
    let carCountBox = document.querySelector("#carCount");
    let carCount = 0;
    let carNum = 2070024;
    let carCounting = setInterval(function () {
      if (carCount >= carNum) {
        carCount = carNum;
        clearInterval(carCounting);
        countFinished++; // 카운트가 끝남을 표시
        if (countFinished === totalCounts) {
          showTextAndCallback();
        }
      } else {
        carCount += 30320;
        carCountBox.innerHTML = new Intl.NumberFormat().format(carCount);
      }
    }, 10);
  } else {
    return false;
  }
  $(this).off(event);
});

function showTextAndCallback() {
  $("#earth > p").fadeIn(500);
  $("#hambuger > p").fadeIn(500);
  $("#car > p").fadeIn(500);
}
// 기술과 안전
$("#safeImgBox").fadeOut();

$("#safeImgBox").offset().top;
console.log($("#safeImgBox").offset().top);
$(window).scroll(function () {
  if (scrollY >= 4600) {
    $("#safeImgBox").fadeIn(1000);
  } else {
    $("#safeImgBox").fadeOut(1000);
  }
});

/*버튼 클릭시 색 변경*/
$("#techButton li").eq(0).addClass("active");
$("#techImgBox").addClass("active");

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

// $("#buyTicketBox").hide();

// $("#ticketBox li").click(function () {
//   $("#buyTicketBox").show();
//   $(
//     "#serviceTextBox, #contentWrap, #story, #techAndSafe, #newsRoom, #maper"
//   ).hide();
//   return false;
// });

// $("#buyTicketExitBtn").click(function () {
//   $("#buyTicketBox").hide();
//   $(
//     "#serviceTextBox, #contentWrap, #story, #techAndSafe, #newsRoom, #maper"
//   ).show();
// });

// 티켓 선택창 가격 자동 변경
$('select[name="tickets"]').change(function () {
  $("#cost").html($(this).val());
  $(".pay").html($(this).val());
});

// 뉴스룸관련 함수

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

// 로그인 버튼
$("#loginBG").hide();

$(".loginBtn").click(function () {
  $("#loginBG").show();
  $("html, body").css("overflow", "hidden");
  return false;
});

$(".logCnCl").click(function () {
  $("#loginBG").hide();
  $("html, body").css("overflow", "");
});

// 하단 자전거 애니메이션
const rideBike = $("footer").offset().top;
console.log(rideBike);

$(window).scroll(function () {
  if (scrollY >= 7450) {
    $(".bike").addClass("active");
  } else {
    $(".bike").removeClass("active");
  }
});
