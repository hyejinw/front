'use strict';
let text1 = 'ABCDEFGHIJKLMNOPQRSTUBWXYZabcde';
let text2 =' ABC       BDEF GHIABC JKLMNO  PQR  ABC       BDEF GHI JKLMNO  PQR      '

// demo.innerHTML = text1;
// demo.innerHTML = text1.length;
// demo.innerHTML = text1.substring(0,10);
// demo.innerHTML = text1.slice(10);
// demo.innerHTML = text1.substr(10); // 중간 줄은 잘 사용하지 않는다는 의미!
// demo.innerHTML = text1.replace('abc', 'opq');
// demo.innerHTML = text2.replace('ABC', 'OPQ');
// demo.innerHTML = text2.toLowerCase();
// demo.innerHTML = text2.concat('안녕');   ABC BDEF GHIABC JKLMNO PQR ABC BDEF GHI JKLMNO PQR안녕
// demo.innerHTML = text2.concat('안녕', 1234);  안녕과 1234를 넣겠다!
// demo.innerHTML = concat('안녕', 1234);        // 오류다!!! 이렇게 쓰는 건 안 된당
// demo.innerHTML = text2.trim() + 'abc';        공백을 없애고 abc를 넣겠다.
// demo.innerHTML = 'abc'+ text2.trimEnd() + 'abc';        
// demo.innerHTML = 'abc'+ text2.replaceAll(' ','') + 'abc';        
// demo.innerHTML = text1.charAt(5);        
// demo.innerHTML = text1.charCodeAt(0);     
let mbc = text2.split('ABC');     
// demo.innerHTML = mbc;
// demo.innerHTML = typeod(mbc);

let temp = '';
for(let item of mbc) {
  console.log(item);
  temp += item;
}
demo.innerHTML = temp;


let title =['지역번호','국번호','전화번호'];
let tels = '010-3423-2704';
let kbs = tels.split('-');

kbs.forEach((tel, i) => {
  console.log(title[i] + ": " + tel);
});

// demo.innerHTML = text1.indexOf('a');
// demo.innerHTML = text1.lastIndexOf('a');
// demo.innerHTML = text2.indexOf('A');
// demo.innerHTML = text2.lastIndexOf('A');
// demo.innerHTML = text1.search('t');
// demo.innerHTML = text1.match('ABC');
// demo.innerHTML = text1.match('A BC');
demo.innerHTML = text1.includes('ABC');

let price = 100; // 가격
let vat = 0.25;    //부가세
// let total = price * (1+vat);

// demo.innerHTML = total;

// let str = "총 금액 : " + total;
let str = `총 금액 : ${price * (1+vat)}원`;    //EL 표기법 Expression Language => ${}


demo.innerHTML = str;






