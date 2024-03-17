var hero; // type any
function getHero() {
    return "thor";
}
hero = getHero();
var hero2; // type any
function getHero2() {
    return true;
}
hero2 = getHero2();
var hero3;
function getHero3() {
    //return true;  //hero3 = getHero3() shows an error
    return "string";
}
hero3 = getHero3();
