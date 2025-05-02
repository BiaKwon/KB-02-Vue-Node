// 구조 분해 할당 예제
const user = {
  id: 1,
  name: 'dayeon',
  email: 'dayeon1211m@gmail.com',
};

const { id, name, email } = user;
console.log(id, name, email);

const fruits = ['수박', '딸기', '바나나'];
const [a, b, c] = fruits;
console.log(a, b, c);
