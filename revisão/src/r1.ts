class Pessoa{
    nome:string;
    email:string;

    constructor(nome:string,email:string){
        this.nome = nome;
        this.email = email;
    }
}

const c = new Pessoa('eduardo','e@gmail.com');
console.log(c.nome, c.email);
console.log(c.email)