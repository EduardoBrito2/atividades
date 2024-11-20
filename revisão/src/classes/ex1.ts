class Filme{
    titulo:string;
    duracao:number;

    constructor(titulo:string,duracao:number){
        this.titulo = titulo;
        this.duracao = duracao;
    }

    print(){
        console.log(`O filme ${this.titulo}, tem uma duração de ${this.duracao} min`)
    }
}

const ce = new Filme('Casa monstro',150);
const gh = new Filme('Matix',116)

ce.print();
gh.print();
