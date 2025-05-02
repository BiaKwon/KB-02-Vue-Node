// 예제 1
// 함수 선언식
function add1(a, b) {
  return a + b;
}

// 함수 표현문
let add2 = function (a, b) {
  return a + b;
};

// 화살표 함수
let add3 = (a, b) => {
  return a + b;
};

// 예제 2
// 함수 선언식
function toUpperCase1(str) {
  return str.toUpperCase();
}

// 함수 표현문
let toUpperCase2 = function (str) {
  return str.toUpperCase();
};

// 화살표 함수
let toUpperCase3 = (str) => {
  return str.toUpperCase();
};

// 예제 3
// 함수 선언문
function sumArray1(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// 함수 표현문
let sumArray2 = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

// 화살표 함수
let sumArray3 = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
