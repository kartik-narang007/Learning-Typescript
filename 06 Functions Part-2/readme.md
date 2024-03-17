# Better Way to write Functions

In typescript we can specify that a function must return values with specified data type.

    function multiplyTwo(num: number){
        return "hello";
    }
This was showing no error but it should have shown one.
To fix this we can do this :-

    function multiplyTwo(num:number): number{
        // this will tell typescript to only return the type number
        data.
        return "hello" //and now writing this will show us error.
    }



## Specify return type in arrow functions

    const getHello = (s:string):string =>{
        return "";
    }


## Another good practice

    const heroes = ["thor", "ironman", "batman"];


    heroes.map((hero):string=>{
        return `hero is ${hero}` //no error
        return 2; //will show error because we have specified the 
        return type as string
    })

now one more thing is here we have no need to specify the type of the hero because typescript will automatically figure this out by the data type in heroes array.

## return type never

Whenever we are trying to throw an error by calling a function we should always use the return type `never`.

    function handleError(errmsg: string): never{
        throw new Error(errmsg);
    }