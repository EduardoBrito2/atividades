class Pessoa1{
    nome:string;
    email:string;

    constructor(nome:string,email:string){
        this.nome = nome;
        this.email = email
    }
    imprimir():void{
        console.log('Nome: '+this.nome);
        console.log('Email: '+this.email);
    }
}

const d = new Pessoa1('eduardo','e@gmail.com');
d.imprimir();

class Cliente extends Pessoa1{
    saldo:number;

    constructor(nome:string,email:string,saldo:number){
        super(nome,email);
        this.saldo = saldo;
    }

    imprimir(): void {
        super.imprimir();
        console.log("Saldo: "+ this.saldo);
    }
}

const p = new Cliente('eduardo','e@gmail.com',3.695)
p.imprimir()