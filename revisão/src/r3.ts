class Pessoa3{
    nome:string;
    email:string;
    nasc:string

    constructor(nome:string,email:string,nasc:string){
        this.nome=nome;
        this.email=email;
        this.nasc=nasc;
    }
    idade(nasc:string):any{
        const hoje = new Date();
        const ano:number = parseInt(nasc.substring(6,10));
        const mes:number = parseInt(nasc.substring(3,5))-1;
        const dia:number = parseInt(nasc.substring(0,2));
        const datan = new Date(ano,mes,dia);
        let idade = hoje.getFullYear()-datan.getFullYear();
        const m:number = hoje.getMonth()-datan.getMonth();
        if(m < 0 ||(m === 0 && hoje.getDate()<datan.getDate())){
            return idade--;
        }
        else{
            return idade;
        }
    }

    imprimir(){
        console.log('Nome: '+ this.nome);
        console.log('Email: '+ this.email);
        console.log('Nascimento: '+ this.nasc);
        console.log('Idade: '+ this.idade(this.nasc))
    }
}

const e = new Pessoa3('eduardo','e@gmail.com','11/08/2004');
e.imprimir()