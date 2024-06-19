var container = document.getElementById("map");
var options = {
  center: new kakao.maps.LatLng(37.517575, 127.0551556),
  level: 4,
};

var map = new kakao.maps.Map(container, options);

var positions = [
  {
    title: "따릉이 대여소",
    latlng: new kakao.maps.LatLng(37.514575, 127.0495556),
  },
  {
    title: "따릉이 대여소",
    latlng: new kakao.maps.LatLng(37.513475, 127.0535556),
  },
  {
    title: "따릉이 대여소",
    latlng: new kakao.maps.LatLng(37.518575, 127.0536556),
  },
  {
    title: "따릉이 대여소",
    latlng: new kakao.maps.LatLng(37.517875, 127.0537356),
  },
  {
    title: "따릉이 대여소",
    latlng: new kakao.maps.LatLng(37.517575, 127.0551556),
  },
  {
    title: "따릉이 대여소",
    latlng: new kakao.maps.LatLng(37.515475, 127.0594556),
  },
  {
    title: "따릉이 대여소",
    latlng: new kakao.maps.LatLng(37.514575, 127.052656),
  },
  {
    title: "따릉이 대여소",
    latlng: new kakao.maps.LatLng(37.516875, 127.0527356),
  },
  //
  {
    title: "따릉이 대여소",
    latlng: new kakao.maps.LatLng(37.513575, 127.0495556),
  },
  {
    title: "따릉이 대여소",
    latlng: new kakao.maps.LatLng(37.514475, 127.0555556),
  },
  {
    title: "따릉이 대여소",
    latlng: new kakao.maps.LatLng(37.515575, 127.0586556),
  },
  {
    title: "따릉이 대여소",
    latlng: new kakao.maps.LatLng(37.516875, 127.0527356),
  },
  {
    title: "따릉이 대여소",
    latlng: new kakao.maps.LatLng(37.517575, 127.0525556),
  },
  {
    title: "따릉이 대여소",
    latlng: new kakao.maps.LatLng(37.515475, 127.0582556),
  },
  {
    title: "따릉이 대여소",
    latlng: new kakao.maps.LatLng(37.514575, 127.0539356),
  },
  {
    title: "따릉이 대여소",
    latlng: new kakao.maps.LatLng(37.516875, 127.0527356),
  },
];

// 마커 이미지의 이미지 주소입니다
var imageSrc =
  "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

for (var i = 0; i < positions.length; i++) {
  // 마커 이미지의 이미지 크기 입니다
  var imageSize = new kakao.maps.Size(24, 35);

  // 마커 이미지를 생성합니다
  var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    map: map, // 마커를 표시할 지도
    position: positions[i].latlng, // 마커를 표시할 위치
    title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
    image: markerImage, // 마커 이미지
  });
}

// 로그인창 관련
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
