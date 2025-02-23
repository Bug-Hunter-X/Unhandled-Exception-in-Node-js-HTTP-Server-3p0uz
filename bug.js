const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello, World!' }));
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running at http://localhost:8080');
});

//This is a simple Node.js HTTP server. However, it lacks proper error handling.  If an error occurs during request processing, it will crash the server without any indication of the problem.

// Example of an unhandled error: Attempting to access a property of an undefined object