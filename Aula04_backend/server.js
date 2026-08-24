//importando modulo nativo http do node.js
const http = require('http');

//2 definir a porta do servidor
const PORTA = 30000;

// 3 criar o servidor HTTP (Garçom)
const server = http.createServer((req, res) => {
    //Exibe no terminal a nota solicitada em tempo real
    console.log(`[PEDIDO RECEBIDO] Método: ${req.method}| Rota: ${req.url}`);

    //NOta1: Pagina inicial (retorna HTML)
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end(`
            <h1 style="color: red; font-family: sans-serif;">🍟 Bem-vindo a lanchonete digital Node.js!</h1>
            <p style="font-family: sans-serif;"> servidor nativo rodando com sucesso em VS code </p>
            <ul>
            <li><a href="/cardapio">cardapio</a>(API de Cardapio em JSON)</li>
            <li><a href="/alunos">/alunos</a>(API de alunos em JSON)</li>
            </ul>
            `)
    }
    //ROTA 2: API do cardapio (retorna JSON)
    else if (req.url === '/cardapio') {
        res.writeHead(200, { 'Content-Typle': 'application/json; charset=UTF-8' });

        const produtos = [
            { id: 1, nome: "X-Node Burguer", preco: 25.50 },
            { id: 2, nome: 'Batat HTTP Cross', preco: 12.00 },
            { id: 3, nome: 'Suco de Reposição 200 OK', preco: 8.50 }
        ];
        // Converte o objeto/array JavaScript em texto JSON antes de Enviar
        res.end(JSON.stringify(produtos, null, 2));
    }
    //ROTA 3: API de ALunos(Retorna jSOON)
    else if (req.url === '/alunos') {
        res.writeHead(200, { 'Content-Type': 'text/html; chaset=UTF-8' });
        const turma = [
            { id: 100, nome: "Ana Silva", status: "Aprovada" },
            { id: 101, nome: "Carlos Eduardo", status: "Estudando" }
        ];
                res.end(JSON.stringify(turma, null, 2));
    }
    //Rota 404:  Pedido n encontrado
    else{
        res.writeHead(404,{'Content-Type': 'text/html; charset=UTF-8'});
        res.end("<h1 style='color': red; font-family: seans-serif;>❌ Erro 404: Esse item não existe no caradpio!</h1>");
    }
});
//Ativar o servidor para escuta de requisiçoes
server.listen(PORTA, () => {
    console.log('#--------------------------------#');
    console.log('#🚀 Servidor rodando com sucesso! #');
    console.log(`#💻 'http://localhost:${PORTA}'     #`);
    console.log('#--------------------------------#');
});