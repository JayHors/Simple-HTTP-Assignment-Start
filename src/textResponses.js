const hello = 'Hello World!';

function getTimeString() {
  const d = new Date();
  return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
}

function getTime(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(getTimeString());
  response.end();
}
function getHello(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(hello);
  response.end();
}

module.exports.getHello = getHello;
module.exports.getTime = getTime;
module.exports.getTimeString = getTimeString;
module.exports.hello = hello;
