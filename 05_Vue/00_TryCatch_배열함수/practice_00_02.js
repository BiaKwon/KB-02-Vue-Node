// try-catch 구문 예제
setInterval(function () {
  try {
    const rand = parseInt(Math.random() * 10);
    console.log(`random Number: ${rand}`);

    if (rand > 5) return console.log('로또사자!');
    throw new Error('망했어요');
  } catch (error) {
    // 에러 발생시
    console.error(`error: ${error}`);
  }
}, 2000);
