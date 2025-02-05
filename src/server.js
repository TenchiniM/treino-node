"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express"); // importando biblioteca express 
var helmet_1 = require("helmet"); // importando biblioteca helmet
var path = require("path");
//import path from "path"; // importando biblioteca path 
//path trabalha com pastas e arquivos
var routes_1 = require("./routes"); // importando o arquivo index.ts da pasta routes
var produtos_1 = require("./routes/produtos"); // importando o arquivo produtos.ts da pasta routes
var server = (0, express_1.default)(); // criando servidor em express
server.use((0, helmet_1.default)());
// use é função do express que permite colocar as coisas que queremos usar no servidor
// colocando o helmet dentro do servidor
// helmet é um pacote que ajuda a proteger o servidor de algumas vulnerabilidades conhecidas
server.use(express_1.default.json());
// diz que o cabeçalho da requisição é um json 
// express.json() é uma função que permite que o servidor entenda requisições em formato json
server.use(express_1.default.urlencoded({ extended: true }));
// armazena informações que pode ser passadas para o servidor
// permite que o servidor entenda requisições em formato urlencoded (url)
server.use(express_1.default.static(path.join(__dirname, "../public")));
// express.static é uma função que permite que o servidor acesse arquivos estáticos
// path.join é uma função que junta caminhos de arquivos
// __dirname é uma variável global que retorna o diretório do arquivo atual
// "../public" é o caminho do diretório que queremos acessar 
server.use('/', routes_1.default); // diz que o servidor vai usar o arquivo index.ts da pasta routes
server.use('/produtos', produtos_1.default); // diz que o servidor vai usar o arquivo produtos.ts da pasta routes
server.listen(3000, function () {
    console.log("Server is running on port 3000");
});
// .listen - função que faz o servidor escutar uma porta
// 3000 - porta que o servidor vai escutar
// função de callback que mostra no console que o servidor está rodando na porta 3000
