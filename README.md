# AutoDoc

O **AutoDoc** é uma aplicação desktop automatizada e inteligente desenvolvida para otimizar o processo de preenchimento de documentos corporativos em formato Word (`.docx`). Com uma interface moderna voltada para o estilo *Dark Minimalist*, o sistema mitiga erros humanos ao capturar dados estruturados via interface web local e injetá-los dinamicamente em modelos pré-definidos.

---

## Tecnologias Utilizadas

O projeto foi construído utilizando uma arquitetura híbrida (Web-Desktop):

- **Backend:** Python 3.13 & Flask (Servidor micro-framework robusto)
- **Manipulação de Ficheiros:** `python-docx` (Leitura e escrita de estruturas XML do Word)
- **Interface Gráfica:** HTML5, CSS3 (Custom Dark Theme) e JavaScript Moderno (ES6)
- **Integração Nativa OS:** Tkinter (`filedialog` assíncrono acionado via Threads dedicadas)
- **Distribuição:** PyInstaller (Compilação para executável binário `.exe`)

---

## Funcionalidades Principais

- **Automação de Tags:** Substituição precisa de marcações como `{{CLIENTE_NOME}}` tanto em parágrafos de texto fluido quanto dentro de células de tabelas complexas.
- **Seleção Nativa de Diretórios:** Integração com o explorador do Windows para seleção de ficheiros de modelo e definição da pasta de destino do output.
- **Regras de Negócio Dinâmicas (RG Novo):** Vinculação lógica em tempo real através do front-end que replica o CPF no campo de RG e bloqueia a edição manual quando a opção "RG Novo" é acionada.
- **Nomenclatura Automatizada:** Geração automática e padronizada do nome do ficheiro final baseado no nome do cliente (`Processo_Nome_Do_Cliente.docx`).
- **Abertura Automatizada:** Inicialização em segundo plano que dispara o navegador padrão de forma autónoma através de subprocessos em Threads temporizadoras.

---

## Estrutura do Projeto

```text
AutoDoc/
├── backend/
│   └── app.py              # Lógica de rotas Flask, Threads do Tkinter e parser do docx
├── documentos/             # Diretório padrão local para armazenamento de templates
├── frontend/
│   ├── css/
│   │   └── style.css       # Interface customizada Streetwear/Dark Minimalist
│   ├── js/
│   │   ├── api.js          # Consumo de API local encapsulado com Fetch API
│   │   └── script.js       # Manipulação do DOM, regras de RG e escutadores de eventos
│   └── index.html          # Estrutura e formulários dinâmicos da aplicação
├── main.py                 # Ponto de entrada do sistema e trigger do webbrowser
└── requirements.txt        # Ficheiro de dependências do ecossistema Python
