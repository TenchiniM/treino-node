import  Express  from 'express';

const router = Express.Router(); // cria um objeto de roteamento


router.get('/', (req, res) => {
    res.json({ produtos: [] });
}); // /produtos, outro diretorio

router.get('/:id', (req, res) => {
    const { id } = req.params;
    // id é uma variável que recebe o valor do parametro da requisição
    res.json({ id, name: 'Teclado XYZ', price: 90 });
    // responde com um json com as chaves id, name e price
}); // /diretorio com id, dinamico
// qualquer coisa digitada depois de /produtos/ é considerado um id



export default router; // exporta o objeto de roteamento