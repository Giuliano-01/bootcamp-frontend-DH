function division(a,b){
    
    if(a==0||b==0){
        console.log("no se puede dividir por cero");
        console.warn("no se puede dividir por cero");
        console.error("no se puede dividir por cero");
    }else{
        return a/b;
    }
    
}
module.exports = division;

/*
 console.warn();
 console.error();
*/