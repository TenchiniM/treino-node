"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.default.Router(); // cria um objeto de roteamento
router.get('/produtos', function (req, res) {
    var produtos = [];
    res.json({ produtos: [] });
}); // /produtos, outro diretorio
router.get('/produtos/:id', function (req, res) {
    var id = req.params.id;
    // id é uma variável que recebe o valor do parametro da requisição
    res.json({ id: id, name: 'Teclado XYZ', price: 90 });
    // responde com um json com as chaves id, name e price
    console.log(req.params);
    res.json({ name: 'Produto 1', price: 100 });
}); // /diretorio com id, dinamico
// qualquer coisa digitada depois de /produtos/ é considerado um id
exports.default = router; // exporta o objeto de roteamento
