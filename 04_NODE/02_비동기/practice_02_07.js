// 실습 콜백 코드를 promise로 구현하기
const shouldIBuyLotto = new Promise((resolve, reject) => {
  console.log('나 로또 사도 될까?');
  const randNum = parseInt(Math.random() * 10);
  console.log(`나온 숫자는 ${randNum}`);

  if (randNum >= 5) {
    resolve('아싸! 로또 사자!');
  } else {
    reject('아.. 망했어요..');
  }
});

shouldIBuyLotto
  .then((result) => console.log(result))
  .catch((err) => {
    console.log(err);
  });
