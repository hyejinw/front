'use strict';


//오늘 날짜를 전역변수로 선언
const today = new Date();  // calendar, date
const year = today.getFullYear();  // 연도 4자리
const month = today.getMonth()+1;    // 월(0~11): 기존 월보다 -1 되어서 출력
const date = today.getDate();      // 일
const hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
const yymmdd = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;

//오늘 날짜 출력
function fCheck1() {
  let temp = year + "-" + month + "-" + date;
  document.getElementById("date1").value = temp;
}

//날짜 비교 (isSameDay (날짜형식1, 날짜형식2))
function fCheck2() {
  let start = document.getElementById("date1").value;
  let end = document.getElementById("date2").value;

  const startDate = new Date(start);   // 날짜 형식으로 바뀐다   --> 둘의 형식을 맞춰주기!
  const endDate = new Date(end); 
  let temp;

  if(isSameDay(startDate, endDate)) temp = "같다";    // 이 부분 다시!! : 자주 쓰이는 만큼 미리 함수를 만들어서 호출해 쓰는 게 좋다.
  else temp = "다르다";

  demo.innerHTML = "비교한 날짜는 " + temp;
}

function isSameDay(startDate, endDate) {
  return startDate.getFullYear() === endDate.getFullYear() &&
  startDate.getMonth() === endDate.getMonth() &&
  startDate.getDate() === endDate.getDate()
}

