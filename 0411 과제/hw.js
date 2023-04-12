'use strict';

function fCheck() {
  let n = myform.n.value.trim();  
  let identity_1 = myform.identity_1.value;       // name으로 값 가져오기 
  let identity_2 = myform.identity_2.value; 
  let mid = document.getElementById("mid").value.trim();   //id로 값 가져오기
  let pwd = document.getElementById("pwd").value.trim();  
  let chk_pwd = document.getElementById("chk_pwd").value.trim();

  let hint = document.getElementById("hint").value; 
  let finder = document.getElementById("finder").value.trim();
  
  let email_1 = myform.email_1.value; 
  let email_2 = myform.email_2.value; 
  let email_3 = myform.email_3.value; 
  
  let cellph_1 = myform.cellph_1.value; 
  let cellph_2 = myform.cellph_2.value; 
  let cellph_3 = myform.cellph_3.value; 
  
  let job = document.getElementById("job").value; 
  
  let receive ="";
    if(document.getElementById("receive_1").checked) receive = "수신";      // 값을 가져와서 비교한다.
    if(document.getElementById("receive_2").checked) receive = "수신 거부";  

  let into ="";
    if(document.getElementById("into_1").checked) into = "생두";      
    if(document.getElementById("into_2").checked) into = "원두";      
    if(document.getElementById("into_3").checked) into = "로스팅";      
    if(document.getElementById("into_4").checked) into = "핸드드립";      
    if(document.getElementById("into_5").checked) into = "에스프레소";      
    if(document.getElementById("into_6").checked) into = "창업";      
    if(document.getElementById("into_7").checked) into = "모르겠음";      

  let route = document.getElementById("route").value; 

  let barrier = document.getElementById("barrier").value; 


// front 검사
  if(n == "") {
    // alert("이름을 입력해주세요 :)");
    Swal.fire(
      '',
      '이름을 입력해주세요 :)',
      'question'
    )
    myform.n.focus();
    return false;
  }
  else if(identity_1 == "" || identity_2 == "") {
    Swal.fire(
      '',
      '주민등록번호를 입력해주세요 :)',
      'question'
    )
    myform.identity_1.focus();
    return false;
  }
  else if(mid == "") {
    Swal.fire(
      '',
      '아이디를 입력해주세요 :)',
      'question'
    )
    myform.mid.focus();
    return false;
  }
  else if(pwd == "") {
    Swal.fire(
      '',
      '비밀번호를 입력해주세요 :)',
      'question'
    )
    myform.pwd.focus();
    return false;
  }
  else if(pwd != chk_pwd) {
    Swal.fire(
      '',
      '비밀번호와 확인 값이 다릅니다 :)',
      'question'
    )
    myform.chk_pwd.focus();
    return false;
  }
  else if(email_1 == "") {
    Swal.fire(
      '',
      '이메일을 입력해주세요 :)',
      'question'
    )
    myform.email_1.focus();
    return false;
  }
  else if(email_2 == "" && email_3 == "") {
    Swal.fire(
      '',
      '이메일을 완성해주세요 :)',
      'question'
    )
    myform.email_2.focus();
    return false;
  }
  else if(cellph_1 == "" || cellph_2 == "" || cellph_3 == "") {
    Swal.fire(
      '',
      '핸드폰 번호를 입력해주세요 :)',
      'question'
    )
    myform.cellph_1.focus();
    return false;
  }
  else if(route == "") {
    Swal.fire(
      '',
      '가입 경로를 선택해주세요 :)',
      'question'
    )
    myform.route.focus();
    return false;
  }
  else {
    myform.n.value = n;  // trim한 값을 다시 변수에 넣는다.  
    myform.mid.value = mid;   
    myform.pwd.value = pwd;   
    myform.chk_pwd.value = chk_pwd;   
    myform.finder.value = finder;   
    myform.submit();         // trim한 뒤 최종적으로 수정된 myform을 서버에 보낸다.
  }
}
