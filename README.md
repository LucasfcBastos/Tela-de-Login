# 1. COMO FAZER O PROJETO FUNCIONAR

## 1.1. Baixar o Projeto

### Linux / Mac:

Instalação do npm:
```bash
sudo apt install npm
```

Instalação do nvm:
```bash
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Instalação da versão do node:
```bash
nvm install 20
```

Utilização da versão do node:
```bash
nvm use 20
```

## 1.2. Rodar o projeto

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
---
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
---