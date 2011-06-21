var static = require('node-static');

var port = process.env.PORT || 1337;

//
// Create a node-static server instance to serve the './public' folder
//
var file = new(static.Server)('./public');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    });
}).listen(port);

console.log('static fileserver listening to port ' + port)