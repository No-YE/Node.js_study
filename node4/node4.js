var path = require('path');

var directories = ["users", "mike", "docs"];
var docsDirectory = directories.join(path.sep);
console.log('문서 디렉터리: %s', docsDirectory);
var curPath = path.join('/Users/mike', 'nodepad.exe');
console.log('파일 패스: %s', curPath);

var filename = "C:\\Users\\mike\\notepad.exe";
var dirname = path.dirname(filename);
var basename = path.basename(filename);
var extname = path.extname(filename);

console.log('디렉터리: %s\n파일 이름: %s\n확장자: %s',dirname, basename, extname);