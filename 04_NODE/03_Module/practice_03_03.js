// ES6 방식으로 모듈 보내기
// 한번에 모듈 못보냄 (각각 보내야)
// 변수 앞에 export 붙이기만 하면 돼
export const animals = ['dog', 'cat'];

export function showAnimals() {
  animals.map(function (el) {
    console.log(`el: ${el}`);
  });
}
