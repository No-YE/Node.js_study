var winston = require('winston');    				
var winstonDaily = require('winston-daily-rotate-file');    
var moment = require('moment');    				

function timeStampFormat() {
    return moment().format('YYYY-MM-DD HH:mm:ss.SSS ZZ'); 
};

var logger = new (winston.Logger)({
    transports: [
        new (winstonDaily)({
            name: 'info-file',
            filename: './node9/log/server',
            datePattern: '_yyyy-MM-dd.log',
            colorize: false,
            maxsize: 50000000,
            maxFiles: 1000,
            level: 'info',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        }),
        new (winston.transports.Console)({
            name: 'debug-console',
            colorize: true,
            level: 'debug',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        })
    ],
    exceptionHandlers: [
        new (winstonDaily)({
            name: 'exception-file',
            filename: './node9/log/exception',
            datePattern: '_yyyy-MM-dd.log',
            colorize: false,
            maxsize: 50000000,
            maxFiles: 1000,
            level: 'error',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        }),
        new (winston.transports.Console)({
            name: 'exception-console',
            colorize: true,
            level: 'debug',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        })
    ]
});



var fs = require('fs');

var inname = './node9/output.txt';
var outname = './node9/output2.txt';

fs.exists(outname, function (exists) {
    if (exists) {
    	fs.unlink(outname, function (err) {
    		if (err) throw err;
    		logger.info('기존 파일 [' + outname +'] 삭제함.');
    	});
    }
    
    var infile = fs.createReadStream(inname, {flags: 'r'} );
	var outfile = fs.createWriteStream(outname, {flags: 'w'});

	infile.pipe(outfile);
	logger.info('파일 복사 [' + inname + '] -> [' + outname + ']');
});


