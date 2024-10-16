//  Marcação de temperaturas, em graus celsius, sem considerar frações de graus, em lugares de 
//elevada variação de temperatura entre as estações do ano;

// Conjuntos dos números Inteiro;
//Conjunto Real se considerar frações;


const temperaturas: number[] = [];


function adicionarTemperatura(temperatura: number): void {
    const tempArredondada = Math.round(temperatura);
    temperaturas.push(tempArredondada);
    console.log(`Temperatura ${tempArredondada}°C adicionada.`);
}

// Função para exibir temperaturas
function exibirTemperaturas(): void {
    if (temperaturas.length === 0) {
        console.log("Nenhuma temperatura registrada.");
        return;
    }
    
    console.log("\nTemperaturas Registradas:");
    temperaturas.forEach((temp, index) => {
        console.log(`${index + 1}: ${temp}°C`);
    });
}

// Função principal para simular chamadas de função
function main(): void {
    // Exemplo de chamadas de função
    adicionarTemperatura(25);
    adicionarTemperatura(18);
    adicionarTemperatura(30);
    
    exibirTemperaturas();
    
    // Você pode adicionar mais temperaturas chamando `adicionarTemperatura` novamente
    adicionarTemperatura(22);
    
    // Exibir temperaturas novamente
    exibirTemperaturas();
}

// Inicia o programa
main();