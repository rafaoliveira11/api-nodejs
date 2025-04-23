import http from "http";

const rotas = {
  "/": "API com Express e Node.js",
  "/posts": "Rota de postagens",
  "/autores": "Rota de autores",
}

const api = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text-plain" });
  res.end(rotas[req.url]);
});

api.listen(3000, () => {
  console.log("API Iniciada.")
});
