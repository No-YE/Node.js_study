var http = require('http');

var server = http.createServer();

var port = 3000;
var host = '192.168.123.148';
server.listen(port, function() {
    console.log('웹 서버가 시작되었습니다.: %s, %d',host,port);
});