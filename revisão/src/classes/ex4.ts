class Carro{
    modelo:string = "Gol";
    marca:string = "VW";

    setMarca(marca:string){
        return (this.marca = marca);
    }
    setModelo(modelo:string){
        return (this.modelo = modelo);
    }
    print(){
        console.log(this.setModelo(this.modelo) +" "+ this.setMarca(this.marca));
    }
}

const ca = new Carro();
ca.print();