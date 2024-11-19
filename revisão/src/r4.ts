export class DataUtil{
    static isBissexto(ano:number){
        if(ano % 400 == 0){
            return true;
        }
        else{
            if(ano % 4 == 0 && ano % 100 != 0){
                return true;
            }
        }
    }
}


const r = DataUtil.isBissexto(4005)