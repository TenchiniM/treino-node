import express from 'express';

const router = express.Router();

router.get('/:from/:to', (req, res) => {
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

export default router; // exporta o objeto de roteamento