# AutoDoc

O **AutoDoc** é uma aplicação desktop automatizada e inteligente desenvolvida para otimizar o processo de preenchimento de documentos corporativos em formato Word (`.docx`). Com uma interface moderna voltada para o estilo *Dark Minimalist*, o sistema mitiga erros humanos ao capturar dados estruturados via interface web local e injetá-los dinamicamente em modelos pré-definidos.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando uma arquitetura híbrida (Web-Desktop):

- **Backend:** Python 3.13 & Flask (Servidor micro-framework robusto)
- **Manipulação de Ficheiros:** `python-docx` (Leitura e escrita de estruturas XML do Word)
- **Interface Gráfica:** HTML5, CSS3 (Custom Dark Theme) e JavaScript Moderno (ES6)
- **Integração Nativa OS:** Tkinter (`filedialog` assíncrono acionado via Threads dedicadas)
- **Distribuição:** PyInstaller (Compilação para executável binário `.exe`)

---

## ✨ Funcionalidades Principais

- **Automação de Tags:** Substituição precisa de marcações como {{CLIENTE_NOME}} tanto em parágrafos de texto fluido quanto dentro de células de tabelas complexas.
- **Seleção Nativa de Diretórios:** Integração com o explorador do Windows para seleção de ficheiros de modelo e definição da pasta de destino do output.
- **Regras de Negócio Dinâmicas (RG Novo):** Vinculação lógica em tempo real através do front-end que replica o CPF no campo de RG e bloqueia a edição manual quando a opção "RG Novo" é acionada.
- **Nomenclatura Automatizada:** Geração automática e padronizada do nome do ficheiro final baseado no nome do cliente (`Processo_Nome_Do_Cliente.docx`).
- **Abertura Automatizada:** Inicialização em segundo plano que dispara o navegador padrão de forma autónoma através de subprocessos em Threads temporizadoras.

---

## 🚀 Como Executar o Projeto

### Em Modo de Desenvolvimento
Se você deseja rodar ou modificar o código-fonte, garanta que possui o Python 3.13 instalado no seu ambiente e siga os passos abaixo no terminal:

1. **Clonar o repositório:**
   git clone https://github.com/teu-usuario/AutoDoc.git
   cd AutoDoc

2. **Instalar as dependências necessárias:**
   pip install -r requirements.txt

3. **Executar o script principal:**
   python main.py

💡 O sistema irá inicializar o servidor local Flask em segundo plano e abrirá automaticamente o seu navegador padrão no endereço `http://127.0.0.1:5000`.

### Gerando o Executável (.exe) para a Empresa
Para empacotar a aplicação em um binário isolado que roda em qualquer máquina Windows (sem a necessidade de instalar o Python ou dependências na máquina do usuário):

1. **Instalar o PyInstaller:**
   pip install pyinstaller

2. **Executar o comando de compilação na raiz do projeto:**
   pyinstaller --noconfirm --onedir --windowed --add-data "frontend;frontend" --add-data "documentos;documentos" --add-data "backend;backend" main.py

📂 O executável final e todas as suas dependências estarão disponíveis prontos para distribuição na pasta `dist/main/main.exe`.

---

## 📦 Como Instalar e Usar (Utilizadores da Empresa)

Para os operadores e funcionários da empresa, o processo de instalação foi completamente simplificado através da aba de distribuição do GitHub:

1. Acesse a seção de **Releases** deste repositório e faça o download do arquivo `AutoDoc.zip`.
2. Extraia o conteúdo do arquivo `.zip` em uma pasta de sua preferência no computador.
3. Clique duas vezes no arquivo `main.exe` (se preferir, clique com o botão direito e selecionando *Enviar para > Atalho na Área de Trabalho*).
4. O programa iniciará os serviços internos e abrirá a interface automaticamente no seu navegador.

---

## 📝 Mapeamento de Tags Suportadas

Para criar ou atualizar modelos de contratos e declarações no Word, adicione as seguintes tags exatamente nos locais onde as informações digitadas na interface devem ser injetadas:

| Categoria | Tag do Modelo | Descrição |
| :--- | :--- | :--- |
| **Cliente** | `{{CLIENTE_NOME}}` | Nome Completo do Titular |
| **Cliente** | `{{CLIENTE_CPF}}` | Cadastro de Pessoa Física |
| **Cliente** | `{{CLIENTE_RG}}` | Registro Geral (Carteira de Identidade) |
| **Cliente** | `{{CLIENTE_NACIONALIDADE}}` | Nacionalidade do Titular |
| **Cliente** | `{{CLIENTE_ESTADO_CIVIL}}` | Estado Civil do Titular |
| **Cliente** | `{{CLIENTE_DATA_NASC}}` | Data de Nascimento |
| **Endereço** | `{{END_CEP}}` | CEP Residencial |
| **Endereço** | `{{END_LOGRADOURO}}` | Nome da rua, avenida ou logradouro |
| **Endereço** | `{{END_NUMERO}}` | Número residencial |
| **Endereço** | `{{END_COMPLEMENTO}}` | Apartamento, Bloco, Casa, etc. |
| **Endereço** | `{{END_BAIRRO}}` | Bairro de residência |
| **Endereço** | `{{END_MUNICIPIO}}` | Cidade do cliente |
| **Endereço** | `{{END_UF}}` | Estado (Unidade da Federação) |
| **Representante** | `{{REP_NOME}}` | Nome do Representante Legal (injetado se ativo) |
| **Representante** | `{{REP_CPF}}` | CPF do Representante Legal |
| **Representante** | `{{REP_RG}}` | RG do Representante Legal |

📑 *(A lista completa de mapeamentos encontra-se documentada para manutenção no arquivo `backend/app.py`)*.

---

## 🧑‍💻 Autor

Desenvolvido por **David Lucas Rodrigues Feitosa** *Estudante de Ciência da Computação – Instituto Federal do Ceará (IFCE), Campus Tianguá.*
