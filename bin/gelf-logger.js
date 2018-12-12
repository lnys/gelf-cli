#!/usr/bin/env node

var program = require('commander');
var gelf = require('../lib/gelf');

process.env.TZ = "Asia/Shanghai";

// 全局配置
program
  .version('0.1.0')
  .option('-h, --host [value]', '服务器IP', '')
  .option('-P, --port [value]', 'UDP端口', '')
  .option('-l, --level [value]', '日志的等级(log, info, error)', 'log')

// Graylog发送日志
program
  .command('send [msg]')
  .description('graylog发送日志')
  .action(function(msg, options){
    var type = options.type || "LOG";
    msg = msg || '';

    if (!msg || 0 === msg.length) {
      console.log("缺少参数");
      return;
    }

    let params = {
      host: program.host,
      port: program.port,
      level: program.level
    };

    gelf.send(msg, params, function() {
      console.log("发送成功...%s", program.host);
    });

    console.log(">>>>>>>>>>>>>>>>>程序结束...");
  });


program
  .command('*')
  .action(function(env){
    console.log('输入的命令错误： "%s"', env);
  });

program.parse(process.argv);