# 🖥️ Monitor de Sistemas

Repositório dedicado a uma aplicação construída em **Node.js** para monitoramento básico de um sistema operacional. A aplicação exibe dados em tempo real no console e registra essas informações em um arquivo de log.

---

## ✅ Requisitos

- Node.js **v14** ou superior

---

## ⚙️ Instalação

Clone o repositório e execute o arquivo principal:

```bash
git clone https://github.com/seu-usuario/monitor-de-sistemas.git
cd monitor-de-sistemas
node main.js
```

---

## 🔧 Funcionalidades

- Exibe:
  - Plataforma e arquitetura do sistema
  - Modelo do processador
  - Tempo de atividade (uptime)
  - Consumo de memória RAM (em porcentagem)
- Gera e atualiza automaticamente um arquivo `log.txt` com o histórico das execuções (diretório `/log`)
- As informações são atualizadas a cada segundo no terminal

---

## 📁 Estrutura do Projeto

- `main.js` – arquivo principal que orquestra a coleta e impressão dos dados
- `getSystemInformation.js` – coleta as informações do sistema operacional
- `printLog.js` – exibe os dados formatados no console
- `saveLog.js` – salva os dados em um arquivo de log no diretório `/log`

---

## 🛠️ Tecnologias Utilizadas

- **Node.js** – plataforma para execução do projeto
- **Módulo `os`** – coleta informações do sistema operacional
- **Módulo `fs`** – manipulação de arquivos para gerar o log

---

## 📊 Exemplo de Saída

```
## MONITOR DE SISTEMAS
Sistema operacional: Linux
Arquitetura do sistema: x64
Modelo do processador: Intel(R) Xeon(R) CPU
Tempo de atividade: 1:12:05:34
Memória em uso: 35%
```

> 📝 O log é salvo automaticamente em `/log/log.txt`.
