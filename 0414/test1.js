'use strict';

function regCheck() {
  // 정규 표현식 변수를 먼저 만들어 놓는다.
  const regex1 = /atom/g; // 'atom'이라는 문자열이 포함: true, 아니면: false. (g: 전체 다 비교)
  const regex2 = /mbc|kbs|sbs/g;     // mbc 또는 kbs 또는 sbs 문자열을 포함하고 있는가?
  const regex3 = /홍길(동|순)/g;      // '홍길동 | 홍길순'이 맞는가?

  const regex4 = /[a-z]/gm;          // 영문 소문자를 포함하고 있느냐?    m이 없으면 한 줄만 비굥! 
  const regex5 = /[^a-z]/gm;         // 영문 소문자만 포함하고 있느냐?
  const regex6 = /[A-Z]/gm;         // 영문 대문자를 포함하고 있느냐?
  const regex7 = /[^A-Z]/gm;         // 영문 대문자만 포함하고 있느냐?
  
  const regex8 = /[0-9]/gm;         // 숫자를 포함하고 있느냐?
  const regex9 = /[^0-9]/gm;         // 숫자만 포함하고 있느냐?
  
  const regex10 = /[가-힣]/gm;         // 한글을 포함하고 있느냐?
  const regex11 = /[^가-힣]/gm;         // 한글만 포함하고 있느냐?
  
  const regex12 = /[a-zA-Z0-9]/gm;         // 영문자와 숫자를 포함하고 있느냐?
  const regex13 = /[^a-zA-Z0-9]/gm;         // 영문자와 숫자만 포함하고 있느냐?
  
  const regex14 = /[^a-zA-Z0-9_]/gm;         // 영문자와 숫자와 밑줄(_)만 포함하고 있느냐?
  
  const regex21 = /\./g;               // .을 포함하고 있느냐?
  const regex22 = /\d/g;               // 숫자를 포함하고 있느냐? digit의 의미!
  const regex23 = /\D/g;               // 숫자를 포함하고 있지 않느냐? digit의 의미!
  const regex24 = /\w/g;               // 영문자/숫자/_를 포함하고 있느냐?
  const regex25 = /\W/g;               // 영문자/숫자/_만을 포함하고 있지 않느냐?

  const regex26 = /\s/g;               // 공백을 포함하고 있느냐? space의 의미!
  

  // 와일드 카드 : 1개 글자만 포함 유무(?), 복수 개 문자의 포함 유무(+,*)  : 이 부분! 다시!!
  const regex31 = /홍길?동/g;         // '홍길동'의 '동' 0개 글자의 포함 유무      걸림: 홍길, 홍길이, 홍길동 ++
  const regex32 = /홍길+동/g;         // '홍길동'의 '동' 1개 이상 글자의 포함 유무  걸림: 홍, 홍길, 홍길동 ++     
  const regex33 = /홍길*동/g;         // '홍길동'의 '동' 0개 이상 글자의 포함 유무   걸림: 홍길, 홍길동 ++  


  let content = document.getElementById("content").value.trim();

  if(content == "") alert("문자열을 입력하세요");
  // else if(!content.match(regex1)) alert("atom 문자열을 포함하고 있지 않습니다.");
  // else if(!content.match(regex2)) alert("방송국을 선택하세요.");
  // else if(!content.match(regex3)) alert("홍길동/홍길순이 아닙니다.");

  // else if(!regex4.test(content)) alert("영문 소문자가 아닙니다.");
  // else if(regex5.test(content)) alert("영문 소문자 외 다른 문자를 포함하고 있습니다.");
  // else if(!regex6.test(content)) alert("영문 대문자가 아닙니다.");
  // else if(regex7.test(content)) alert("영문 대문자 외 다른 문자를 포함하고 있습니다.");
  
  // else if(!regex8.test(content)) alert("숫자를 포함하고 있지 않습니다.");
  // else if(regex9.test(content)) alert("숫자 외 다른 문자를 포함하고 있습니다.");
  
  // else if(!regex10.test(content)) alert("한글을 포함하고 있지 않습니다.");
  // else if(regex11.test(content)) alert("한글 외 다른 문자를 포함하고 있습니다.");      ㅇㄹㄴㅇㄹ 이런 것도 안 됨!
  
  // else if(!regex12.test(content)) alert("영문자나 숫자를 포함하고 있지 않습니다.");
  // else if(regex13.test(content)) alert("영문자와 숫자 외 다른 문자를 포함하고 있습니다.");
  
  // else if(regex14.test(content)) alert("영문자와 숫자, 밑줄 외 다른 문자를 포함하고 있습니다.");
  
  
  // else if(!regex21.test(content)) alert("입력 데이터 중 .을 포함하지 않았습니다.");
  // else if(!regex22.test(content)) alert("입력 데이터 중 숫자를 포함하지 않았습니다.");
  // else if(regex23.test(content)) alert("입력 데이터 중 숫자를 포함하지 않았습니다.");
  // else if(regex24.test(content)) alert("입력 데이터 중 영문자/숫자/_를 포함하고 있습니다.");
  // else if(regex25.test(content)) alert("입력 데이터 중 영문자/숫자/_만 사용가능합니다.");
  
  // else if(regex26.test(content)) alert("입력 데이터 중 공백을 포함하고 있습니다.");
  
  else if(regex31.test(content)) alert("입력 데이터 중 홍길동을 포함하고 있습니다.");
  // else if(regex32.test(content)) alert("입력 데이터 중 홍길'동'을 포함하고 있습니다.");
  // else if(regex33.test(content)) alert("입력 데이터 중 홍길'동'을 포함하고 있습니다.");


  else alert("정상적으로 통과!!!!");
}