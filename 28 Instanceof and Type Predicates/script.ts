function logValue(x: Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    }else{
        console.log(x.toUpperCase());
    }
}


type Fish = {swim: ()=> void}
    type Bird = {fly: ()=> void}

    function isFish(pet: Fish | Bird) pet is Fish{
        return (pet as Fish).swim !== undefined
    }

    // now if it returns true then if will return pet as Fish

    function getFood(pet : Fish | Bird){
        if(isFish(pet)){
            pet
            return "Fish Food"
        }else{
            return "Bird Food"
        }
    }