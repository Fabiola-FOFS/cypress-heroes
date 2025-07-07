# 🧪 Cypress Heroes - Testes Automatizados

Este projeto foi desenvolvido por **Fabiola** como exercício prático de automação de testes utilizando **Cypress**. O objetivo é validar funcionalidades principais da interface de um sistema de gerenciamento de heróis, com foco no fluxo de um **usuário administrador**.

---

## 👩‍💻 Desenvolvedora

- **Nome:** Fabiola
- **Exercício:** Testes Automatizados com Cypress
- **Projeto:** cypress-heroes
- **Objetivo:** Prática de testes E2E (End-to-End)

---

## 📂 Estrutura do Projeto

- `cypress/e2e/` - Arquivos de testes end-to-end
- `cypress/fixtures/` - Arquivos de dados (ex: imagens de avatar)
- `cypress/support/` - Configurações globais e comandos customizados

---

## ✅ Funcionalidades Testadas

### 🔐 Login

- Login com credenciais corretas (`admin@test.com`, `test123`)
- Login com credenciais incorretas (mensagem de erro visível)
- Validação da visibilidade de elementos após login (como o botão "Criar novo herói")

### 🦸‍♀️ Funcionalidades do Admin

- Criação de novo herói (preenchimento de nome, preço, fãs, resgates)
- Upload de imagem (avatar do herói)
- Curtir herói e validar aumento de fãs
- Deletar herói por índice específico (ex: excluir o 3º da lista)
- Verificação da existência e visibilidade de elementos importantes da interface

---

## 📸 Seletores Utilizados

| Componente          | Seletor Cypress (`data-cy`) |
|---------------------|-----------------------------|
| Campo de email      | `data-cy="email"`           |
| Campo de senha      | `data-cy="password"`        |
| Botão de curtir     | `data-cy="like"`            |
| Botão de deletar    | `data-cy="delete"`          |
| Upload de imagem    | `data-cy="avatarFile"`      |
| Input do nome       | `data-cy="nameInput"`       |
| Criar herói         | `[href='/heroes/new']`      |

---

## 🚀 Como Executar os Testes

1. Clone o repositório:
   ```bash
   git clone <URL-do-repo>
   cd cypress-heroes
Instale as dependências:

bash
Copiar
Editar
npm install
Execute o Cypress:

bash
Copiar
Editar
npx cypress open
Escolha o arquivo de teste (ex: admin.cy.js) e clique em "Run".

🛠 Tecnologias Utilizadas
Cypress 14+

Node.js (versão compatível com seu projeto)

JavaScript

Webpack (via Cypress internamente)

HTML/CSS (interface do app)

📝 Observações
O botão de deletar herói é acessado por posição com .eq(2) para remover o terceiro da lista.

As imagens usadas para upload ficam na pasta cypress/fixtures.

O teste utiliza seletores personalizados com data-cy, seguindo boas práticas de automação.

📚 Aprendizados
✔️ Escrever testes end-to-end com Cypress
✔️ Simular interações reais com a interface do usuário
✔️ Testar cenários positivos e negativos
✔️ Manusear arquivos (upload de imagem)
✔️ Trabalhar com listas e índices no DOM

