// CommonJS 방식 예제 (pg. 16)
// Module.js (모듈 받기)

const animals = require('./practice_03_01');

console.log(animals);
console.log(animals.animals);

// animals 객체로 받았으므로
animals.showAnimals();

/*
// 구조분해 할당으로 모듈 받기
// CommonJS 보단 ES6에서 자주 쓰는 방식
// CommonJs 에서 이 방식으로 받으면 this 에러 날 가능성 높음
const { animals, showAnimals } = require('./practice_03_01');
console.log(animals);

showAnimals();
*/
