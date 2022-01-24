// dependencies
const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');
const textHandler = require('./textResponses.js');
const imgHandler = require('./imageResponses.js');
// port
const port = process.env.PORT || process.env.NODE_PORT || 3500;

function onRequest(request, response) {
  switch (request.url) {
    case '/': case '/index':
      htmlHandler.getIndex(request, response);
      break;
    case '/page2':
      htmlHandler.getPage2(request, response);
      break;
    case '/time':
      textHandler.getTime(request, response);
      break;
    case '/hello':
      textHandler.getHello(request, response);
      break;
    case '/timeJSON':
      jsonHandler.getTimeJSON(request, response);
      break;
    case '/helloJSON':
      jsonHandler.getHelloJSON(request, response);
      break;
    case '/dankmemes':
      imgHandler.getImage(request, response);
      break;
    default:
      htmlHandler.getIndex(request, response);
      break;
  }
}

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on localhost port ${port}`);
});
