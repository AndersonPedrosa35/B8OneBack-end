# Bem vindo ao repositório B8OneBack-end
## O que foi desenvolvido ?
 O objetivo era criar e enviar produtos para o frontend do projeto, as duas rotas do frontend onde acontece a lógica do frontend em conjunto com o backend são :
  ``` https://b8-one-front-end.vercel.app/ ```
  ``` https://b8-one-front-end.vercel.app/create ```

## Ferramentas 
  - Utilização do Express para o servidor
  - Utilização do MongoDB para o banco de dados
  - Utilização da estrutura MSC
  - Utilização do padrão Rest
  - Utilização de ALGUMAS regras do SOLID, retirando somente os padrão para porgramação orientada a objetos

## Iniciar o projeto
  Entre no terminal, e vá até o diretório que vc quer que esteja este projeto, digite git clone e a url desse repositório (https://github.com/AndersonPedrosa35/B8OneFront-end), assim que carregar, entre no diretório do projeto e digite ```npm install``` para baixar e carregar as dependências do projeto.
  
Entre no diretório do projeto, e digite ```yarn start``` ou ```npm start```
Então o projeto será carregado na porta 3000 da sua rede local(localhost);
  
 ###AVISO
 Para iniciar o projeto corretamente, precisará clonar também o repositório de Backend que se encontra em (https://github.com/AndersonPedrosa35/B8OneBack-end).

 Crie um arquivo ```.env``` para configurar as variáveis de ambiente do projeto do BackEnd, tenha como base o .env.example para criação das variáveis, assim que criado, basta colocar os seus dados, exemplo ```DB_URL``` coloque a sua rede local (localhost), ```DB_NAME``` coloque o nome do banco que ficará no MongoDB que vai ser armazenado as mensagens, e ```PORT``` será a porta que será executada a aplicação.
 
 Entre no diretório do projeto de Backend, e digite ```yarn start``` ou ```npm start```
 Então o projeto de Backend será carregado na porta que você especificou no .env da sua rede local(localhost);

## Deploy
https://b8-one-front-end.vercel.app/
