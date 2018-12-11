'use strict';
/*
var fs = require('fs');
var colors = require('colors');



var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/hello') {
        fs.readFile('./index.html', 'utf-8', function(err,data){
            console.log(data);
            response.write(data);
            response.end();
        });
            
    } else {
            response.setHeader("Content-Type", "FILEINFO_MIME_TYPE");
            response.statusCode = 404;
            fs.readFile('./cat.jpg', function (err, data){
                response.write(data);
                response.end();
            });
        }
});

server.listen(8080);

*/

var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function (request, response) {
    
    if (request.method === 'GET' && request.url === '/hello') {
		response.setHeader("Content-Type", "text/html; charset=utf-8");
		fs.readFile('./index.html', 'utf-8', function(err, data) {
			response.write(data);
			response.end();
		});
	
    } else {
		response.setHeader("Content-Type", "FILEINFO_MIME_TYPE");
		fs.readFile('./cat.jpg', function(err, data) {
			response.statusCode = 404;
            response.write(data);
            response.write('Sorry you are not king of the animals...');
			response.end();
		});
    }
});

server.listen(8080);
/*
server.on('request', function (request, response) {
    response.write('Hello world!');
    response.end();
});
server.listen(9000);
*/