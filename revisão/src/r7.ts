import Pessoa5 from "./r6";

class Cliente extends Pessoa5{
    saldo:number;
    
    constructor(nome:string, email:string,nasc:string,saldo:number){
        super(nome,email,nasc);
        this.saldo = saldo;
    }

    imprimir(): void {
        super.imprimir()
        console.log('Saldo: ' + this.saldo);
    }
}

const t = new Cliente('eduardo', 'e@gmail.com','11/08/04',3698.23);
t.imprimir()