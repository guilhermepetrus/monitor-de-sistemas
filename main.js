const getSystemInformation = require('./getSystemInformation');
const printLog = require('./printLog');
const saveLog = require('./saveLog');

setInterval(() => {
    const systemInfo = getSystemInformation();
    console.clear();
    printLog(systemInfo);
    saveLog(systemInfo);
  }, 1000)