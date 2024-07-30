const http = require('http');

function checkHttpService(host, port, path = '/healthCheck', timeout = 1000) {
  return new Promise((resolve, reject) => {
    const options = {
      host,
      port,
      path,
      timeout,
    };

    console.log('this is options', options);

    const req = http.get(options, (res) => {
      // Check if the status code indicates a successful response
      const isSuccess = res.statusCode >= 200 && res.statusCode < 300;
      console.log('Response status code:', res.body);
      res.on('data', () => {}); // Consume response data to free up memory
      res.on('end', () => resolve(isSuccess));
    });
    req.on('timeout', () => {
      console.log('Request timed out');
      req.destroy();
      resolve(false);
    });

    req.on('error', (err) => {
      console.log('Request error:', err);
      resolve(false);
    });

    req.end();
  });
}

// Usage
const checkService = async ()=>{
  const status =  await checkHttpService('localhost', 3001)
  console.log('this is status 1',status)
  return status
}
console.log('this is status',checkService())
