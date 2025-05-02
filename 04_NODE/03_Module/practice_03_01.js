// CommonJS 방식 예제 (pg 16)
// Animals.js (내보내는 모듈)
/*
const animals = ['dog', 'cat'];

//animals 배열을 animalList 객체로 내보내기
exports.animals = animals;

exports.showAnimals = function showAnimals() {
  // map: 배열의 원소가 el (매개변수)로 주어짐
  animals.map((el) => {
    console.log(`원소: ${el}`);
  });
};
*/

/*
// 객체로 내보내기

module.exports = {
  animals,
  showAnimals,
};
*/

// 함수와 배열을 객체에 통째로 넣어 내보내기
const animals = {
  animals: ['dog', 'cat'],
  showAnimals() {
    this.animals.map((el) => {
      console.log(`el: ${el}`);
    });
  },
};

module.exports = animals;
