const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3000;
//REQUISIÇÃO
server.use(middlewares);
server.use(jsonServer.rewriter({
  "/todos_os_livros": "/livros",
  "/adicionar_livros": "/livros",
  "/editar_livros/:id": "/livros/:id",
  "/deletar_livros/:id": "/livros/:id"
//METODOS
}))
server.use(router);
server.listen(port, () => { console.log(`JSON Server está rodando na porta ${port}`) })