import { DataUtil } from "./r4";

export default class Pessoa5{
    nome:string;
    email:string;
    nasc:string

    constructor(nome:string,email:string,nasc:string){
        this.nome=nome;
        this.email=email;
        this.nasc=nasc;
    }
    idade(nasc:string):number{
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
    numBissextos():number{
        const ano:number = parseInt(this.nasc.substring(6,10));
        const hoje = new Date();
        const anoatual:number = hoje.getFullYear()
        let quant:number = 0;

        for(let x= ano; x <= anoatual;x++){
            if(DataUtil.isBissexto(x)){
                // console.log(x)
                quant++;
                // return quant;
            }
        }
            return quant;
    }
    faixaEtaria(){
        if(this.idade(this.nasc)<13){
            return "Criança";
        }
        else{
            if(this.idade(this.nasc)<18){
                return "Adolecente";
            }
            else{
                if(this.idade(this.nasc)<60){
                    return "Adulto";
                }
                else{
                    if(this.idade(this.nasc)<100){
                        return "Idoso";
                    }
                    else{
                        return "Matusalem";
                    }
                }
            }
        }
    }

    imprimir():void{
        console.log('Nome: '+ this.nome);
        console.log('Email: '+ this.email);
        console.log('Nascimento: '+ this.nasc);
        console.log('Idade: '+ this.idade(this.nasc))
        console.log('Anos Bissextos: '+ this.numBissextos())
        console.log('Faixa etária: '+ this.faixaEtaria())
    }
}

const g = new Pessoa5('eduardo','e@gmail.com','11/08/2004');
g.imprimir()