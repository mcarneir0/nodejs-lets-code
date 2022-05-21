import { once } from 'events';
import fs from 'fs';
import readLine from 'readline';

const path = "C:/GitHub/nodejs-lets-code/aula-03/";
const file = "package.json";

//  Listar o conteúdo de um diretório

//  Usando Promises
fs.promises.readdir(path).then(files => console.log(files));

//  Usando Async / Await
async function readdirAsync(dir) {
    const files = await fs.promises.readdir(dir);
    console.log(files);
}
readdirAsync(path);


//  Operações de Leitura

//  Usando Promisses
fs.promises.readFile(path + file, 'utf-8').then(content => console.log(content));

//  Async / Await
async function readfileAsync(dir, file) {
    const file_readed = await fs.promises.readFile(dir + file, 'utf-8');
    console.log(file_readed);
}
readfileAsync(path, file);


//  Ler arquivo linha a linha

const read_stream = fs.createReadStream(path + file, 'utf-8');

const reader = readLine.createInterface({
    input: read_stream,
    crlfDelay: Infinity
});

reader.on('line', line => console.log(line));
once(reader, 'close');


//  Operações de Escrita

//  Criando arquivo
const content = "Teste";
const arquivo = path + "novo_arquivo.txt";

fs.promises.writeFile(arquivo, content, 'utf-8')
    .then(() => console.log("Arquivo criado"))
    .catch(console.log);

//  Adicionando informações no arquivo
const info = "\nNova linha";
fs.promises.appendFile(arquivo, info, 'utf-8');

//  Excluindo arquivo
//  fs.promises.rm(arquivo);
