'use strict';

let notifi;

function wholeCheck() {
  let pwd = document.getElementById("pwd").value.trim();
  let nick = document.getElementById("nick").value.trim();
  let n = document.getElementById("n").value.trim();
  let email = document.getElementById("email").value.trim();
  let page = document.getElementById("page").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let identity = document.getElementById("identity").value.trim();

  // const regex1 = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[~!@#$%^&*()_+<>?]){4,20}/; 
  // const regex1 = /(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$%^&*()_+,./<>?}{[]\]){4,20}/; 
  // const regex1 = /[0-9a-zA-Z\!\@\#\$\%\^\&\*\(\)\_\+\,\.\?\<\>\[\]\{\}]{4,7}$/g; 
  
  const regex1 = /(?=.*[a-zA-Z])(?=.*[0-9])(?=.*?[~!@#$%^&*()_+,\.?><\[\]{}]){4,20}/;
  

  const regex2 = /[가-힣]+/g;  // 한글만 적어도 1자이상
  const regex3 = /[A-Za-z가-힣]+/g;  // 한글,영문만 적어도 1자이상
  const regex4 = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;  // 이메일 형식에 맞도록
  const regex5 = /^http[s]?:\/\/([\S]{3,})/i;  // URL형식에 맞도록
  const regex6 = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;  // 전화번호형식(지역번호(2~3)-국번호(3~4)-전화번호(4))
  const regex7 = /^([0-9]{6})-([1-4]{1}[0-9]{6})$/g;  // 숫자와 구분자(-)만오되 앞쪽 6자리 - 뒷쪽 1자리(1~4까지의 숫자만)
  
  notifi = "";
  
  // 비밀번호 확인
  if(!regex1.test(pwd)) {
    notifi += "입력하신 비밀번호는 사용하실 수 없습니다.<br/>";
   }
  
  // 닉네임 확인
  else if(!regex2.test(nick)) notifi += "입력하신 닉네임은 사용하실 수 없습니다.<br/>";

  // 성명 확인
  else if(!regex3.test(n)) notifi += "입력하신 성명은 사용하실 수 없습니다.<br/>";

  // 이메일 확인
  else if(!regex4.test(email)) notifi += "입력하신 이메일은 사용하실 수 없습니다.<br/>";
  
  // 홈페이지주소 확인
  // /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
  else if(!regex5.test(page)) notifi += "입력하신 홈페이지 주소는 사용하실 수 없습니다.<br/>";

  // 전화번호 확인
  else if(!regex6.test(phone)) notifi += "입력하신 전화번호는 사용하실 수 없습니다.<br/>";

  // 주민번호 확인
  else if(!regex7.test(identity)) notifi += "입력하신 주민번호는 올바르지 않습니다.";

  else alert("회원가입에 성공했습니다. 환영합니다!");

  demo.innerHTML = "<b class='text-success'>" + notifi + "</b>";

}


function midCheck() {
  let mid = document.getElementById("mid").value.trim();
  const regex = /[a-zA-Z0-9_]{4,20}$/g;   //아이디 : 영문자,숫자,_ 포함으로 4~20 자까지 // 영어 대소문자, 숫자, 언더바 허용
  
  if(!regex.test(mid)) {
    demo1.innerHTML = "<p class='text-danger'>입력하신 아이디는 사용하실 수 없습니다.</p>";
  }
  else demo1.innerHTML = "<p class='text-primary'>사용가능한 아이디 입니다.</p>";
}


function wholeReset() {
  location.reload();
}
