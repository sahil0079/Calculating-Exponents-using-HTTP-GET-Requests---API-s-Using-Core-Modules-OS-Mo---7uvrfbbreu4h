const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  const { pathname, query } = parsedUrl;
  if (req.method === 'GET' && pathname === '/') {
    const num1 = parseInt(query.num1);
    const num2 = parseInt(query.num2);

    if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 < 0) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Invalid input. Please provide valid positive integers');
    } else if (num1 === 0 || num2 === 0) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('The operation cannot be performed');
    } else {
      //calculate the power 
      const result = Math.pow(num1, num2);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`The result is ${result}`);
    }

  }

});


module.exports = server;
