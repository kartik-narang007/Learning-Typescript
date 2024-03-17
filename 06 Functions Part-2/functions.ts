function multiplyTwo(num:number): number{
    // this will tell typescript to only return the type number data.
    //return "hello" //and now writing this will show us error.
    return num *2; //no error
}

multiplyTwo(1);

//arrow functions

const getHello = (s:string):string =>{
    return "";
}

const heroes = ["thor", "ironman", "batman"];


    heroes.map((hero):string=>{
        return `hero is ${hero}` //no error
        //return 2; //will show error because we have specified the 
        //return type as string
    })


    function handleError(errmsg: string): never{
        throw new Error(errmsg);
    }