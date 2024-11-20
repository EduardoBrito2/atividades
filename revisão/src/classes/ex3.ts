class Aleatorio{
    get():number{
        return Math.floor(Math.random() * 100 + 1)
    }
}
const jk = new Aleatorio();


for(let i:number = 0;i<5;i++){
    console.log(jk.get())
}