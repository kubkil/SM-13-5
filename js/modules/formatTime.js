const os = require('os');
const colors = require('colors');

function calcTime(time) {
  let hours = Math.floor(time / 3600);
  time = time - hours * 3600;
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);
  time = hours + 'h ' + minutes + 'min ' + seconds + 'sec';
  console.log(colors.rainbow('Uptime is: ') + time);
}

exports.print = calcTime;