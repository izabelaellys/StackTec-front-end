let myHeaders = new Headers();
myHeaders.append("Cookie", "bezkoder=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBmYXRlYy5zcC5nb3YuYnIiLCJpYXQiOjE2ODczOTE1MzQsImV4cCI6MTY4NzQ3NzkzNH0.pJaKcbywdKYFtZ7TGa4r6Ly44R4H4Kb0PMuuUhb2pRmxqz-BNllUR6jJDhSrqLn1xqZ9SXQAmi_nETQq-lxcFg; Path=/api; Max-Age=60; Expires=Wed, 21 Jun 2023 23:53:14 GMT; HttpOnly");

let requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://localhost:8080//api/tag/v1.1/POO", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));