//Definição de preço, incluindo centavos, de mercadorias de uma loja
//conjunto dos Reais

interface Item {
    preco: number;
    quantidade: number;
}

// Objeto para armazenar os preços dos itens
const precos: Record<string, Item> = {};

// Função para adicionar um item com seu preço
function adicionarItem(nome: string, preco: number, quantidade: number): void {
    if (preco && quantidade>= 0) {
        precos[nome] = { preco, quantidade }; // Armazenando como objeto
        console.log(`Item '${nome}', quantidade ${quantidade} adicionado com preço R$${preco.toFixed(2)}`);
    } else {
        console.error('Produto não cadastrado pois o valor de preço ou quantidade é negativo');
    }
}

// Função para exibir os preços dos itens
function exibirPrecos(): void {
    console.log("\nPreços das Mercadorias:");
    for (const [nome, { preco, quantidade }] of Object.entries(precos)) {
        console.log(`${nome}: quantidade: ${quantidade}, R$${preco.toFixed(2)}`);
    }
}

// Objeto para registrar os produtos vendidos
const vendidos: Record<string, number> = {};

// Função para exibir produtos vendidos
function vendido(): void {
    console.log('\nProdutos vendidos');
    for (const [nome, quantVendida] of Object.entries(vendidos)) {
        if (precos[nome]) {
            const { preco, quantidade } = precos[nome];
            console.log(`${nome}: quantidade disponível: ${quantidade}, R$${preco.toFixed(2)}`);
            console.log(`${nome}: estoque atualizado: ${quantidade - quantVendida}, R$${preco.toFixed(2)}`);
            console.log(`${nome}: quantidade vendida: ${quantVendida}`);
        }
    }
}

// Função para registrar produtos vendidos
function registrarVenda(nome: string, quantidadeVendida: number): void {
    if (precos[nome]) {
        if (!vendidos[nome]) {
            vendidos[nome] = 0;
        }
        vendidos[nome] += quantidadeVendida;
    } else {
        console.error('Produto não encontrado.');
    }
}


adicionarItem("Produto A", 29.99, 15);
adicionarItem("Produto B", 10.50, 30);
exibirPrecos();
registrarVenda("Produto A", 5);
vendido();
registrarVenda('Produto B', 5);
vendido();
