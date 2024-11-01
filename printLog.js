function printLog({ platform, arch, cpu, uptime, ramUsage, ramTotal, ramUsagePercent }) {
    console.log('## MONITOR DE SISTEMAS');
    console.log(`Sitema operacional: ${platform}
Arquitetura do sistema: ${arch}
Modelo do processador: ${cpu}
Tempo de atividade: ${uptime}
Memória em uso: ${ramUsagePercent}%`);
}

module.exports = printLog;