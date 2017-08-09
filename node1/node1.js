var result=0;
var Person={name:"pig", age:5};
var nconf = require('nconf');
nconf.env();

console.time('duration_sum');

for(var i=1; i<=1000; i++) {
    result+=i;
}

console.timeEnd('duration_sum');
console.log('%d',result);

console.log("현재 실행한 파일의 이름: %s",__filename);
console.log("현재 실행한 파일의 패스: %s",__dirname);

console.dir(Person);
console.log('argv 속성의 파라미터 수: ',+process.argv.length);

console.dir(process.argv);

if(process.argv.length > 2) {
    console.log("세 번재 피라미터의 값: %s",process.argv[2]);
}

process.argv.forEach(function(item, index) {
    console.log(index+':',item);
});

console.dir(process.env);
console.log("OS 환경 변수의 값:"+nconf.get('OS'));