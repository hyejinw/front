'use strict';
let su1 = 10;
let su2 = -20;
let su3 = 3.14;
let su4 = -3.14;
let su5 = -31.4;
let num = 0;

num = Math.min(su1, su2);
num = Math.min(su1, su2, su3, su4);
num = Math.max(su1, su2, su3, su4, su5);

num = Math.ceil(su3);     // 무조건 올림  4 (큰 걸로)
num = Math.floor(su3);    // 무조건 내림  3 (작은 걸로)
num = Math.ceil(su4);     // -3.14 => -3
num = Math.floor(su4);    // -3.14 => -4

num = Math.trunc(su3);    // 무조건 자르기  truncate
num = Math.trunc(su4);    // 무조건 자르기

num = Math.pow(2,5);      // 지수값   2^5
num = Math.sqrt(4);       // 제곱근 (루트) 2  sqrt 철자 유의


num = Math.abs(-9);       // 절대값

num = Math.random();      // 0에서부터 1보다 작은 실수형 난수
num = Math.random()*10;   
num = parseInt(Math.random()*10);   
num = parseInt(Math.random()*10) + 1;   
num = Math.floor(Math.random()*10) + 1; 
num = Math.floor(Math.random() * 4) + 2
num = Math.floor(Math.random()*(45+1-1)) + 1;  // 1에서 45까지

// num = Math.floor(Math.random()*(10+5-1)) + 5;  // 아님
num = Math.floor(Math.random() * (10-5+1)) + 5   // 5 ~ 10까지의 난수

// 소수 반올림 : toFixed()
num = su3.toFixed(1);   // 매개변수가 없으면 정수반올림, 매개변수가 있으면 소수이하 반올림.
num = su3.toFixed(2);
// num = su3.toFixed(-1);   이건 불가능.

num = Math.round(su3);   // 정수 반올림만 가능하다.
demo.innerHTML = num;