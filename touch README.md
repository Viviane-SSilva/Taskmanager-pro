# 🧠 TaskManager Pro

TaskManager Pro é uma API RESTful robusta para gerenciamento de tarefas pessoais. O projeto permite que usuários se cadastrem, façam login e organizem suas tarefas de forma segura e eficiente.

---

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Express**
- **JavaScript moderno (ES6+)**
- **PostgreSQL**
- **Autenticação com JWT e Bcrypt**
- **Prisma (ou Knex)**
- **Docker & Docker Compose**
- **Testes automatizados (Jest + Supertest)**
- **CI/CD com GitHub Actions**

---

## 📌 Funcionalidades

- [x] Cadastro e login de usuários
- [x] Autenticação com JWT
- [x] CRUD de tarefas pessoais
- [ ] Filtros e busca de tarefas
- [ ] Testes de autenticação e tarefas
- [ ] Deploy automatizado

---

## 📁 Estrutura de Pastas

src/
├── controllers/
├── routes/
├── models/
├── middlewares/
├── services/
├── config/
└── app.js


---

## ⚙️ Como rodar o projeto localmente

```bash
# Clone o repositório
git clone https://github.com/VIviane-SSilva/taskmanager-pro.git
cd taskmanager-pro

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env

# Rode o projeto
npm run dev

npm test

# Build e execução via Docker Compose
docker-compose up --build
