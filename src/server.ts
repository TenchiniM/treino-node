import express from "express"; // importando biblioteca express 
import helmet from 'helmet'; // importando biblioteca helmet
import path from "path"; // importando biblioteca path 
//path trabalha com pastas e arquivos

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

server.get('/ping', (req, res) => {
    res.json({ pong: true });
    // responde com um json com a chave pong e valor true
    // /ping no diretorio no navegador me leva a outra pagina
    // pong: true é o que aparece na outra pagina
});

server.get('/produtos', (req, res) => {
    res.json({pong: true});
}); // /produtos, outro diretorio

server.get("/", (req, res) => {
    // "/" é a rota principal do servidor
    let msg = "Hello World!";

    res.json({ msg });
    //res - item de resposta
    //.send - envia a resposta
    // .json - envia a resposta em formato json
});
// .get - função que permite que o servidor receba requisições do tipo get
// "/" - caminho da requisição
// req - item de requisição
// res - item de resposta


server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
// .listen - função que faz o servidor escutar uma porta
// 3000 - porta que o servidor vai escutar
// função de callback que mostra no console que o servidor está rodando na porta 3000

