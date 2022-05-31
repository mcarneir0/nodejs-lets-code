import fs from 'fs';
import http from 'http';

//  Verifica se o arquivo.txt existe
//  Caso sim, continua a execução
//  Caso não, cria o arquivo.txt
fs.promises.stat('./arquivo.txt').catch(() => {
    fs.promises.writeFile('./arquivo.txt', 'Arquivo criado em ' + new Date().toLocaleString()).then(() => {
        console.log('Arquivo criado');
    }).catch(console.log);
});

//  Função para ler o conteúdo do arquivo.txt
async function lerArquivo() {
    const conteudo = await fs.promises.readFile('./arquivo.txt', 'utf-8');
    return conteudo;
}

//  Função para fazer o append do conteúdo do arquivo.txt
async function appendArquivo(texto) {
    await fs.promises.appendFile('./arquivo.txt', '\n' + texto, 'utf-8');
    return;
}

//  Cria o servidor
const server = http.createServer(async (req, res) => {
    const { method, url } = req;

    switch (method) {
        case 'GET':
            res.end(await lerArquivo());
            break;

        case 'POST':
            await appendArquivo(url.substring(1));
            res.end('Conteúdo adicionado');
            break;

        default:
            res.writeHead(404);
            res.end('Método não encontrado');
    }
});

//  Inicia o servidor na porta 3000
server.listen(3000);
console.log('Servidor rodando em http://localhost:3000');
