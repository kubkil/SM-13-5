const os = require('os');
const colors = require('colors');
const formatTime = require('./formatTime');

function getOSinfo() {
  let type = os.type();
  if (type === "Darwin") {
    type = 'OSX';
  } else if (type === 'Windows_NT') {
    type = 'Windows';
  }

  const release = os.release();
  const cpu = os.cpus()[0].model;
  const userInfo = os.userInfo();

  console.log(colors.grey('System:'), type);
  console.log(colors.red('Release:'), release);
  console.log(colors.cyan('CPU model:'), cpu);
  console.log(colors.green('User name:'), userInfo.username);
  console.log(colors.yellow('Home dir:'), userInfo.homedir);
  // w jaki sposób os.uptime trafia jako argument do funkcji time?
  formatTime.print(os.uptime());
}

exports.print = getOSinfo;
