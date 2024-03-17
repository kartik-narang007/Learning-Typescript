let hero; // type any
function getHero(){
    return "thor";
} 
hero = getHero();


let hero2; // type any
function getHero2(){
    return true;
}
hero2 = getHero2();


let hero3: string;
function getHero3(){
    //return true;  //hero3 = getHero3() shows an error
    return "string";
}

hero3 = getHero3();