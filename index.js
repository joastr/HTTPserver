'use strict';


var http = require( 'http' );
var fs = require( 'fs' );

var server = http.createServer();
server.on('request', function ( request, response ) {
    response.setHeader( "Content-Type", "text/html; charset=utf-8" );
    if( request.method === 'GET' && request.url === '/hello') {
        fs.readFile( './index.html', 'utf-8', function( err, data ) {
            response.writeHead(200, {'Content-type':'text/html'});
            response.write( data );
            response.end();
        });
        
    } else {
        fs.readFile('./cat.jpg', function(err, data) {
            response.writeHead(404, {'Content-type':'image/jpg'});
            response.write(data);
            response.write('sorry... you are not a king...');
            response.statusCode = 404;
            response.end();
        })
        
    }
});
server.listen(8081);






/*
server.on('request', function (request, response) {
    response.write('Hello world!');
    response.end();
});
server.listen(9000);
*/