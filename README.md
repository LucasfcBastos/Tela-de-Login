# 1. PLAYTEST

Um sistema simples de tela de login para que pessoas que estejam aprendendo programação possam entender como que é um codigo em JavaScript para desenvolver uma tela de cadastro e de login. O sistema tem as seguintes funcionalidades:

- O tema da cor se alto adapta
- Rotas expecifica para cada tela
- Dados em variáveis estáticas
- Arquitetura cliente-servidor
- Criptografica em senhas
- Geração de token
- Autenticação de usuario

# 2. DESENVOLVIMENTO

Lucas Bastos Franco
 - Instagram: https://www.instagram.com/lucas.bf_gts/
 - Linkedin: https://www.linkedin.com/in/lucas-bastos-811a172a7/
 - Github: https://github.com/LucasfcBastos

# 3. TECNOLOGIAS UTILIZADAS

<table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
    <tr>
        <td style="border: 1px solid black; text-align: center">
            REACT
        </td>
        <td style="border: 1px solid black; text-align: center">
            VITE
        </td>
        <td style="border: 1px solid black; text-align: center">
            NODE.JS
        </td>
    </tr>
    <tr>
        <td style="border: 1px solid black; text-align: center">
            <img height="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
        </td>
        <td style="border: 1px solid black; text-align: center">
            <img height="50px" src="https://pt.vite.dev/logo.svg" />
        </td>
        <td style="border: 1px solid black; text-align: center">
            <img height="50px" src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" />
        </td>
    </tr>
    <tr>
        <td style="border: 1px solid black; text-align: center">
            EXPRESS
        </td>
        <td style="border: 1px solid black; text-align: center">
            GIT
        </td>
        <td style="border: 1px solid black; text-align: center">
            GITHUB
        </td>
    </tr>
    <tr>
        <td style="border: 1px solid black; text-align: center">
            <img height="50px" src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" />
        </td>
        <td style="border: 1px solid black; text-align: center">
            <img height="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
        </td>
        <td style="border: 1px solid black; text-align: center">
            <img height="50px" src="https://cdn.worldvectorlogo.com/logos/github-icon-2.svg" />
        </td>
    </tr>
</table>
<br/>

# 4. INSTALAÇÃO DO PROJETO

### Baixar o Projeto

Primeiro é necessário ter o Git instalado:
```bash
sudo apt install npm
```

Clone o projeto com:
```bash
git https://github.com/LucasfcBastos/Tela-de-Login.git
```

Depois entre na pasta do projeto:
```bash
cd Tela-de-Login
```

### Windows:

Entra neste site:
```bash
https://nodejs.org/pt-br/download
```

Baixa a versão:
```bash
Baixe o Node.js® v20.20.1 (LTS) para Windows usando Chocolatey com npm
```

Execute o instalador .msi

### Linux:

Instalação do npm:
```bash
sudo apt update
sudo apt install npm
```

Instalação do nvm:
```bash
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Recarrega o terminal:
```bash
source ~/.bashrc
```

Instalação da versão do node:
```bash
nvm install 20
```

Utilização da versão do node:
```bash
nvm use 20
```

### Mac:

Instalar Homebrew:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Depois instalar Node:
```bash
brew install node
```
<br/>

# 5. RODAR O PROJETO

### Backend:

Entra dentro do back:
```bash
cd backend/
```

Instalar as independencias:
```bash
npm install express cors bcrypt jsonwebtoken dotenv
```

Rodar o servidor:
```bash
node server.js
```

### Frontend:

Em outro bash, entrar dentro do front:
```bash
cd frontend/
```

Instalar as independencias:
```bash
npm install axios react-router-dom vite-plugin-svgr
```

Rodar o projeto:
```bash
npm run dev
```
