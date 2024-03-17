function multiplyTwo(num) {
    // this will tell typescript to only return the type number data.
    //return "hello" //and now writing this will show us error.
    return num * 2; //no error
}
multiplyTwo(1);
//arrow functions
var getHello = function (s) {
    return "";
};
var heroes = ["thor", "ironman", "batman"];
heroes.map(function (hero) {
    return "hero is ".concat(hero); //no error
    //return 2; //will show error because we have specified the 
    //return type as string
});
function handleError(errmsg) {
    throw new Error(errmsg);
}
