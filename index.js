'use strict';


var http = require( 'http' );
var fs = require( 'fs' );

var server = http.createServer();
server.on('request', function ( request, response ) {
    response.setHeader( "Content-Type", "text/html; charset=utf-8" );
    if( request.method === 'GET' && request.url === '/hello') {
        fs.readFile( './index.html', 'utf-8', function( err, data ) {
            response.write( data );
            response.end();
        });
        
    } else {
        response.statusCode = 404;
        response.write('<img src="./cat.jpg" alt="cat" />');
        response.write('sorry... you are not a king...');
        response.end();
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