const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  try {
    //Simulate an error: accessing a property of an undefined object
    //const data = undefined.someProperty; 
    response.writeHead(200);
    response.end(JSON.stringify({ message: 'Hello, World!' }));
  } catch (error) {
    console.error('Error during request processing:', error);
    response.writeHead(500, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ error: 'Internal Server Error' }));
  }
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running at http://localhost:8080');
}).on('error', err => {
  console.error('Server failed to start:', err);
});

//This improved version uses try...catch to handle exceptions gracefully and also adds an error listener to the server to detect start up failures.