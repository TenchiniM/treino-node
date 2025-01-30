import  express  from "express";

const server = express();

server.get("/", (req, res) => {
  res.send("Hello World!"); //res - item de resposta
});                           //.send - envia a resposta

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});