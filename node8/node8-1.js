var fs = require('fs');

var infile = fs.createReadStream('./node8/output.txt', {flags: 'r'});
var outfile = fs.createWriteStream('./node8/output2.txt', {flags: 'w'});

infile.on('data', function(data) {
    console.log('읽어 들인 데이터', data);
    outfile.write(data);
});

infile.on('end', function() {
    console.log('파일 읽기 종료.');
    outfile.end(function() {
        console.log('파일 쓰기 종료.');
    });
});