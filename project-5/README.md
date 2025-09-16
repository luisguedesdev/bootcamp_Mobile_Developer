# Project 5 --- Simple Fastify API

API extremamente simples feita com **Fastify + TypeScript**, criada para
fins de aprendizado no bootcamp.

## 🚀 O que ela faz

- Expõe **duas coleções fixas**:
  - **Teams** (escuderias da F1 2025)\
  - **Drivers** (pilotos da F1 2025)\
- Endpoints básicos de listagem e busca por ID.\
- Retorna sempre JSON.\
- Inclui configuração de **CORS liberado** para qualquer origem.

## 📦 Tecnologias

- [Node.js](https://nodejs.org/)\
- [Fastify](https://fastify.dev/)\
- [TypeScript](https://www.typescriptlang.org/)\
- [@fastify/cors](https://github.com/fastify/fastify-cors)

## 📁 Estrutura

    project-5/
    ├─ src/
    │  └─ server.ts   # código principal
    ├─ .env
    ├─ .gitignore
    ├─ package.json
    ├─ README.md
    └─ tsconfig.json

## ▶️ Como rodar

```bash
# instalar dependências
npm install

# iniciar o servidor
npm run dev
```

Servidor disponível em:

    http://localhost:3333

## 🌐 Endpoints

#### `GET /teams`

Retorna todas as escuderias.

#### `GET /drivers`

Retorna todos os pilotos.

#### `GET /drivers/:id`

Busca um piloto pelo ID.\

- **200 OK**: retorna o piloto.\
- **404 Not Found**: retorna `{ "message": "Driver not found" }`.

---

✅ Simples, direto, fácil de entender.
