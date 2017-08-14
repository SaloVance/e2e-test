const http = require('http');
const fs = require('fs');
const open = require('open');
const dir = '.';

let server;

server = http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html',
    });

    let path = request.url.split('?')[0];

    if (path === '/report'){
        var body = [];
        request.on('data', (chunk) => {
            body.push(chunk);
        }).on('end', function() {
            body = Buffer.concat(body).toString();
            let result = JSON.parse(body);
            let failedCount = 0;
            console.log('\n-----------test result--------------');
            Object.keys(result).forEach( (key) => {
                if (!result[key]) {
                    failedCount++;
                }
                console.log(`${result[key] ? 'success' : 'fail'} -> ${key}`);
            });
            console.log('-------------------------------------\n');

            response.end();
            console.log('> test server exit');
            process.exit(failedCount > 0 ? 1 : 0);
        });
    } else {
        let file;
        if (path === '/'){
            file = dir + '/test.html';
        } else if (/\.js$/.test(path)){
            file = dir + path;
        }
        response.end(file ? fs.readFileSync(file) : '');
    }
}).listen(8888);

console.log('> test server started at port: 8888');
open('http://localhost:8888/');