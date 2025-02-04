import express, { Express } from "express";

const router = express.Router(); // cria um objeto de roteamento

router.get(); // função que permite que o servidor receba requisições do tipo get

export default router;

router.get('/ping', (req, res) => {
    res.json({ pong: true });
    // responde com um json com a chave pong e valor true
    // /ping no diretorio no navegador me leva a outra pagina
    // pong: true é o que aparece na outra pagina
});

router.post('/produtos', (req, res) => {
    res.json({ pong: true });
}); // diretorio para post

router.get('/produtos', (req, res) => {
    let produtos = [];
    res.json({ produtos: [] });
}); // /produtos, outro diretorio

router.get('/produtos/:id', (req, res) => {
    const { id } = req.params;
    // id é uma variável que recebe o valor do parametro da requisição
    res.json({ id, name: 'Teclado XYZ', price: 90 });
    // responde com um json com as chaves id, name e price
    console.log(req.params);

    res.json({ name: 'Produto 1', price: 100 });
}); // /diretorio com id, dinamico
// qualquer coisa digitada depois de /produtos/ é considerado um id

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