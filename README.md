# Evento Comentários Back-end

## Sobre
Este projeto é o back-end do sistema "Evento Comentários Front-end". Ele é responsável por gerenciar os comentários e autenticação dos usuários utilizando o GitHub. O back-end foi desenvolvido usando Node.js, Express, Prisma e Socket.IO.
Você pode acessar o front-end em: https://github.com/Igorsouza1/Evento-Comentarios-Front-end

## Características
* Autenticação via GitHub
* Gerenciamento de comentários
* Comunicação em tempo real com o front-end usando Socket.IO
* Armazenamento de dados com Prisma

## Tecnologias utilizadas
* Node.js
* Express
* Prisma
* Socket.IO
* JSON Web Tokens (JWT)
* CORS
* Axios
* TypeScript

## Como executar o projeto
1. Clone o repositório em sua máquina local
2. Instale as dependências do projeto com npm install ou yarn
3. Execute prisma generate para gerar o cliente Prisma
4. Configure o arquivo .env com as credenciais do GitHub e a URL do front-end
5. Inicie o servidor de desenvolvimento com npm run dev ou yarn dev
6. O servidor estará disponível na porta especificada no arquivo .env (por padrão, a porta 3000).

## Personalização
Para personalizar o projeto, edite os arquivos TypeScript conforme necessário. Certifique-se de atualizar as informações no arquivo .env, incluindo as credenciais do GitHub e a URL do front-end, conforme necessário.
