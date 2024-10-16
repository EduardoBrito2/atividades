// Contagem do número de linhas de um arquivo de log;
//Conjunto dos Números Inteiros.
const fs = require('fs');

function contarLinhasLog(nomeArquivo:any):any {
    try {
        const conteudo = fs.readFileSync(nomeArquivo, 'utf-8');
        const linhas = conteudo.split('\n');
        let contador = 0;
        for (let i = 0; i < linhas.length; i++) {
            const linha = linhas[i].trim();
            if (linha !== '') {
                contador++;
            }
        }
        
        return contador;
    } catch (error) {
        console.error(`O arquivo '${nomeArquivo}' não foi encontrado.`);
        return 0;
    }
}

const nomeArquivo = 'teste.log'; 
const totalLinhas = contarLinhasLog(nomeArquivo); // Conta as linhas

console.log(`Total de linhas no arquivo '${nomeArquivo}': ${totalLinhas}`);
