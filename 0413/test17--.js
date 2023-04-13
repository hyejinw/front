'use strict';


//오늘 날짜를 전역변수로 선언
const today = new Date();  // 자바: calendar, date
const year = today.getFullYear();  // 연도 4자리
const month = today.getMonth()+1;    // 월(0~11): 기존 월보다 -1 되어서 출력
const date = today.getDate();      // 일
const hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
const yymmdd = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;

//표준 날짜 출력
function fCheck1() {
  console.log("표준 날짜 : " + today);
  demo.innerHTML = today;
}


//편집 날짜 출력
function fCheck2() {
  console.log("편집 날짜 : " + yymmdd);
  demo.innerHTML = yymmdd;
}


//편집 날짜(요일) 출력
function fCheck3() {
  let str = today.getDay();      //  자바 스크립트, 자바: 일(0) | 데이터 베이스: 일(1) 
  let week = ['일','월','화','수','목','금','토'];

  demo.innerHTML = week[str] + '요일';
}

//그 달의 마지막 날짜 출력
function fCheck4() {

  let mon = prompt("마지막 날짜를 출력할 년과 월을 입력하세요.(yyyy-mm)");   // 창에 직접 띄워 입력값을 받아온다.
  let temp = mon.split("-");
  let yy = temp[0];   //연도
  let mm = temp[1];   //월

  let str = new Date(yy,mm,0);   //  new Date(년,월,일,시,분,초)

  // let strDate = (str.getFullYear()) + "-";
  // strDate += (str.getMonth() + 1) + "-";
  // strDate += str.getDate();
  // strDate = "해당 월의 마지막 일자? " + strDate;

  let strDate = "해당 월의 마지막 일자? " + yy + "-" +mm +"-"+str.getDate();
  demo.innerHTML = strDate ;
}