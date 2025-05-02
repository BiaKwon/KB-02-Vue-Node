// 전개 연산자 실습
const personalInfo = {
  name: '이효석',
  age: `Don't ask this :)`,
  email: 'xenosign@naver.com',
};

const jobInfo = {
  position: '코딩 강사',
  experience: '?년',
};

// 정보 하나로 합친 후, 주소 정보 추가
const profile = {
  ...personalInfo,
  ...jobInfo,
  addr: '서대문구',
};

// 구조 분해 할당
const { name, age, email, position, experience, addr } = profile;

// 각 변수 콘솔에 출력
console.log('이름: ', name);
console.log('나이: ', age);
console.log('이메일: ', email);
console.log('직책: ', position);
console.log('경력: ', experience);
console.log('지역: ', addr);
