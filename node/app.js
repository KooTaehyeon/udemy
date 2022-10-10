const http = require('http');

// 서버에 요청이 들어올떄마다 node.js 를 호출하는 콜백함수
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  //process.exit();  //서버 종료
  res.setHeader('content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node.js Server</h1></body>');
  res.write('</html>');
  res.end();
});
server.listen(3003);
