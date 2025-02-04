

import express from "express"; // importando biblioteca express 
import helmet from 'helmet'; // importando biblioteca helmet
import path from "path"; // importando biblioteca path 
//path trabalha com pastas e arquivos


const router = express.Router(); // cria um objeto de roteamento


router.get('/', (req, res) => {
    res.send('Hello from the root route!');
}); // função que permite que o servidor receba requisições do tipo get

router.get('/ping', (req, res) => {
    res.json({ pong: true });
    // responde com um json com a chave pong e valor true
    // /ping no diretorio no navegador me leva a outra pagina
    // pong: true é o que aparece na outra pagina
});


router.get('/voos/:from/:to', (req, res) => {
    const { from, to } = req.params;
    // from e to são variáveis que recebem os valores dos parametros da requisição
    // req.params é um objeto que contém os parametros da requisição
    // tudo digitado depois da primeira barra, aparece no console
    res.json({
        flight: {
            from: from.toLocaleUpperCase(),
            to: to.toUpperCase(),
            price: 123456,
        }
    });
    console.log(req.params); // o que aparece na pagina
});

router.get("/", (req, res) => {
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

export default router; // exporta o objeto de roteamento