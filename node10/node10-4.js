var http = require('http');
var fs = require('fs');

var server = http.createServer();

var port = 3001;
server.listen(port, function() {
    console.log('웹 서버가 시작되었습니다.: %d',port);
});

server.on('connection', function(socket) {
    console.log('클라이언트가 접속했습니다. : %s, %d', socket.remoteAddress, socket.remotePort);
});

server.on('request', function(req, res) {
    console.log('클라이언트 요청이 들어왔습니다.');
    
    var filename = './node10/house.png';
    var infile = fs.createReadStream(filename, {flags: 'r'});

    infile.pipe(res);
});

server.on('close', function() {
    console.log('서버가 종료됩니다.');
});