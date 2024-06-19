// 숫자 카운트
// 지구 카운트
let earthCountBox = document.querySelector("#earthCount");
let earthCount = 0;
let earthNum = 8576929;
// 8576929
let earthCounting = setInterval(function () {
  if (earthCount >= earthNum) {
    earthCount = earthNum;
    clearInterval(earthCounting);
  } else {
    earthCount += 123280;
  }
  earthCountBox.innerHTML = new Intl.NumberFormat().format(earthCount);
}, 10);

// 햄버거 카운트
let hamCountBox = document.querySelector("#hamCount");
let hamCount = 0;
let hamNum = 188087538;
// 8576929
let hamCounting = setInterval(function () {
  if (hamCount >= hamNum) {
    hamCount = hamNum;
    clearInterval(hamCounting);
  } else {
    hamCount += 3032850;
  }
  hamCountBox.innerHTML = new Intl.NumberFormat().format(hamCount);
}, 10);

// 자동차 카운트
let carCountBox = document.querySelector("#carCount");
let carCount = 0;
let carNum = 2070024;
// 8576929
let carCounting = setInterval(function () {
  if (carCount >= carNum) {
    carCount = carNum;
    clearInterval(carCounting);
  } else {
    carCount += 30320;
  }
  carCountBox.innerHTML = new Intl.NumberFormat().format(carCount);
}, 10);
