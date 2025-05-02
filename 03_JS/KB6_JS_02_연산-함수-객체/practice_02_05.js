const exArr = ['T1', 'T2', 'e', 't'];
// 배열 가장 앞의 값 제거
exArr.shift();
console.log(exArr);

// 배열 가장 뒤에 'z'추가
exArr.push('z');
console.log(exArr);

// 해당 배열 하나의 문자열로 합치고 출력
const str = exArr.join('');
console.log(str);
