var fs = require('fs');
fs.mkdir('./node8/file', 0666, function(err) {
    if(err) throw err;
    console.log('새로운 file 폴더를 만들었습니다.');
    
    fs.rmdir('./node8/file', function(err) {
        if(err) throw err;
        console.log('file 폴더를 삭제했습니다.');
    });
    
});