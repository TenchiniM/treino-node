import { createServer } from `node:http`;

const server = createServer((req, res) => {
    let nome: string = "Maycon";
    let idade: number = 23; 
    res.end(`Ola, meu nome e: ${nome} e tenho: ${idade} anos `); // finalizando exibindo um texto
}); // variavel server recebe a função createServer que recebe uma função com dois parametros req e res
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000'); // exibe uma mensagem no console
});
// server escuta a porta 3000 e exibe uma mensagem no console