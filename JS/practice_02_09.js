// 원시 타입과 비원시 타입
const locationTwo = {};

console.log(locationOne === locationTwo);

const jsonLocation1 = JSON.parse(locationOne);
const jsonLocation2 = JSON.parse(locationTwo);
