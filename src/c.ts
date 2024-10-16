// Processamento de sinais de voz ou de comunicação em um sistema de engenharia de
// telecomunicações
// Conjunto dos Numeros Reais
 
// Simulação de captura de um sinal de voz
function capturarSinal(): number[] {
    const sinal: number[] = [];
    const tamanho = 50; // Número de amostras

    // Gerar amostras aleatórias entre -1 e 1
    for (let i = 0; i < tamanho; i++) {
        const amplitude = (Math.random() * 2 - 1).toFixed(2); // Valor entre -1.00 e 1.00
        sinal.push(parseFloat(amplitude));
    }

    return sinal;
}

// Processar o sinal de voz
function processarSinal(sinal: number[]): number[] {
    const resultado = sinal.map(amplitude => {
        // Exemplo de processamento: normalizar para o intervalo [0, 1]
        return (amplitude + 1) / 2; // Transformar -1 a 1 em 0 a 1
    });
    return resultado;
}

// Exibir resultados
function exibirResultados(sinalOriginal: number[], sinalProcessado: number[]): void {
    console.log("Sinal Original:", sinalOriginal);
    console.log("Sinal Processado:", sinalProcessado);
}



const sinal = capturarSinal();

// Processa o sinal
const sinalProcessado = processarSinal(sinal);

// Exibe os resultados
exibirResultados(sinal, sinalProcessado);
