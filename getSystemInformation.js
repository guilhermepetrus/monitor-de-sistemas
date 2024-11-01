const os = require('node:os');

function gestSystemInformation() {

    const systemPlatformMap = {
        "win32": "Windows",
        "linux": "Linux",
        "darwin": "MacOS"
    }
    
    const platform = systemPlatformMap[os.platform()];
    const arch = os.arch();
    const cpu = os.cpus()[0].model;

    //tempo de atividade em dias
    const uptimeDays = Math.floor(os.uptime() / 60 / 60 / 24)
    const uptimeDaysInSeconds = uptimeDays * 24 * 60 * 60
  
    //tempo de atividade em horas
    const uptimeHours = Math.floor((os.uptime() - uptimeDaysInSeconds) / 60 / 60)
    const uptimeHoursInSeconds = uptimeHours * 60 * 60
    
    //tempo de atividade em minutos
    const uptimeMins = Math.floor((os.uptime() - uptimeDaysInSeconds - uptimeHoursInSeconds) / 60)
    const uptimeMinsInSeconds = uptimeMins * 60
  
    //tempo de atividade em segundos
    const uptimeSecs = Math.floor(os.uptime() - uptimeDaysInSeconds - uptimeHoursInSeconds - uptimeMinsInSeconds)
  
    //string com o tempo de atividade formatada
    const uptime = `${uptimeDays}:${uptimeHours}:${uptimeMins}:${uptimeSecs}`

    //ram total em GB
    const ramTotal = os.totalmem() / 1024 / 1024 / 1024;

    //ram em uso em GB
    const ramUsage = (os.totalmem() - os.freemem()) / 1024 / 1024 /1024

    //percentual de ram em uso
    const ramUsagePercent = Math.round((ramUsage / ramTotal) * 100);

    return {platform, arch, cpu, uptime, ramTotal, ramUsage, ramUsagePercent};
}

module.exports = gestSystemInformation;