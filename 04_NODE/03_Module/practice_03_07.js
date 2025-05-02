// ES6 방식으로 보내기 (pg.26)
// export default
const animals = {
  animals: ['dog', 'cat'],
  showAnimals() {
    this.animals.map((el) => console.log(el));
  },
};

export default animals;
