import express from "express"; // importando biblioteca express 
import helmet from 'helmet'; // importando biblioteca helmet
import path from "path"; // importando biblioteca path 
//path trabalha com pastas e arquivos
import router from './routes'; // importando o arquivo index.ts da pasta routes
import produtosRouter from './routes/produtos'; // importando o arquivo produtos.ts da pasta routes
const server = express(); // criando servidor em express


 server.use(helmet());
// use é função do express que permite colocar as coisas que queremos usar no servidor
// colocando o helmet dentro do servidor
// helmet é um pacote que ajuda a proteger o servidor de algumas vulnerabilidades conhecidas
server.use(express.json());
// diz que o cabeçalho da requisição é um json 
// express.json() é uma função que permite que o servidor entenda requisições em formato json
server.use(express.urlencoded({ extended: true }));
// armazena informações que pode ser passadas para o servidor
// permite que o servidor entenda requisições em formato urlencoded (url)
server.use(express.static(path.join(__dirname, "../public")));
// express.static é uma função que permite que o servidor acesse arquivos estáticos
// path.join é uma função que junta caminhos de arquivos
// __dirname é uma variável global que retorna o diretório do arquivo atual
// "../public" é o caminho do diretório que queremos acessar 

server.use('/' , router); // diz que o servidor vai usar o arquivo index.ts da pasta routes
server.use('/produtos', produtosRouter); // diz que o servidor vai usar o arquivo produtos.ts da pasta routes
server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
// .listen - função que faz o servidor escutar uma porta
// 3000 - porta que o servidor vai escutar
// função de callback que mostra no console que o servidor está rodando na porta 3000

