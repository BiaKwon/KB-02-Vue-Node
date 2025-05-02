// ES6 방식으로 보내기 (pg.22)
// 마지막에 한번에 보내는 방식
const animals = ['cat', 'dog'];

function showAnimals() {
  animals.map((el) => console.log(`el: ${el}`));
}

export { animals, showAnimals };
