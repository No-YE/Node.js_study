var url = require('url');
var querystring = require('querystring');
var curURL = url.parse('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=hell');
var curStr = url.format(curURL);
var param = querystring.parse(curURL.query);

console.log('주소 문자열: %s',curStr);
console.dir(curURL);
console.log('요청 파라미터 중 query의 값: %s',param.query);
console.log('원본 요청 파라미터: %s',querystring.stringify(param));