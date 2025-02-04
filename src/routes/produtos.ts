import  Express  from 'express';]

const router = Express.Router(); // cria um objeto de roteamento


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



export default router; // exporta o objeto de roteamento