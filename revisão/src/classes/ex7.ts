class Ponto {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    distancia(ponto: Ponto): number {
        const deltaX = ponto.x - this.x;  // Diferença entre as coordenadas X
        const deltaY = ponto.y - this.y;  // Diferença entre as coordenadas Y
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);  // Fórmula da distância Euclidiana
    }
}

// const ab = new Ponto(3, 5);
// const ba = new Ponto(1, 2);
// console.log("Distancia entre ab e ba: " + ab.distancia(ba).toFixed(4));  // Distância entre ab e ba

class Rectangle{
    inferiorEsquerdo: Ponto;
    superiorDireirto: Ponto;

    constructor(ie:Ponto,sd:Ponto){
        this.inferiorEsquerdo = ie;
        this.superiorDireirto = sd;
    }

    area():number {
        // Largura: diferença entre as coordenadas x
        const largura = this.superiorDireirto.x - this.inferiorEsquerdo.x;
        // Altura: diferença entre as coordenadas y
        const altura = this.superiorDireirto.y - this.inferiorEsquerdo.y;
        // Calculando a área
        return largura * altura;
    }
}

let ie = new Ponto(3,5);
let sd = new Ponto(1,2)
const r = new Rectangle(ie,sd);
console.log("Area: "+ r.area());