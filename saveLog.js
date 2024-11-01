const path = require('node:path');
const fs = require('node:fs');

function saveLog({ platform, arch, cpu, uptime, ramUsage, ramTotal, ramUsagePercent }) {
    
    const logContent = `## DETALHES DO SISTEMA
Sistema Operacional: ${platform}
Arquitetura do Sistema: ${arch}
Modelo do Processador: ${cpu}
Tempo de Atividade do Sistema: ${uptime}
Uso de Memória RAM: ${ramUsage.toFixed(2)} GB / ${ramTotal.toFixed(2)} GB (${ramUsagePercent}%)
------------------------------\n`;
  
    const logDir = path.join("/", "log")
    
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir)
    }
  
    const logFilePath = path.join(logDir, "log.txt")
    fs.appendFileSync(logFilePath, logContent)
  }

  module.exports = saveLog;