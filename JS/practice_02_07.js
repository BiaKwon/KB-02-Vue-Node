// 전개 연산자 예제
const fruits = ['수박', '딸기', '바나나'];
console.log(fruits);
console.log(...fruits);

function conLog(a, b, c) {
  console.log(a, b, c);
}

conLog(fruits[0], fruits[1], fruits[2]);

// 전개 연산자 이용
conLog(...fruits);

// 문자열을 배열로 바꾸기
const str = 'apple';
const strArr = str.split('');
const strArr2 = [...str];
console.log(strArr);
console.log(strArr2);

// 하드 카피 (값을 복사)하고 싶을 때
const arr = [1, 2, 3, 4, 5];

const copyArr = arr; // 메모리 복사
const hardCopyArr = [...arr]; // 하드 카피

console.log(arr === copyArr);
console.log(arr === hardCopyArr);

// 여러개 객체 속성 하나로 합칠 때
const person = {
  name: 'bia',
  age: 1,
};

const schoolInfo = {
  title: 'student',
  school: 'sogang',
};

const profile = {
  ...person,
  ...schoolInfo,
  location: 'seoul',
};

console.log(profile);
