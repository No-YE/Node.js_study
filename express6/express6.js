var express = require('express'),
    http = require('http'),
    path = require('path');

var bodyParser = require('body-parser'),
    static = require('serve-static');

var app = express();

var port = 3000;

app.set('port', process.env.PORT || port);

app.use(bodyParser.urlencoded({extend: false}));

app.use(bodyParser.json());

app.use(static(path.join(__dirname, './')));

app.use(function(req, res, next) {
    console.log('첫 번째 미들웨어에서 요청을 처리함.');

    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;

    res.writeHead('200', {'Content-Type':'text/html; charset=utf8'});
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
    res.write('<div><p>Param id: ' + paramId + '</p></div>');
    res.write('<div><p>Param id: ' + paramPassword + '</p></div>');
    res.end();
});

http.createServer(app).listen(port, function() {
    console.log('Express 서버가 ' + port + '번 포트에서 시작됨');
})