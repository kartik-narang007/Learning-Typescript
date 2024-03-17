# Arrays in TypeScript

    const superHeroes = []

when you do only this and hover over it, it just shows you the type `never`.

    const superHeroes: never[]

and when we try to push something into the array like:- 

    superHeroes.push("spiderman")

then it says:- 

    Argument of type 'string' is not assignable to parameter of 
    type 'never'.

we will correct this simply by doing this:-

    const superHeroes: string[] = [];
    superHeroes.push("spiderman"); // now this won't show any 
    error.

one more syntax to do this is:-

    const heroPower : Array<number> = [];
    heroPower.push(2);


## pushing aiased type data in array

you can do this also:-

    type User = {
        name: string,
        isActive: boolean,
    }

    const allUser : User[] = [];

    allUser.push("") // will give the error.

    allUser.push({name: "kartik", isActive: true})


## Array in Array

    const MLModels: number [][] = [
        [255,255,255],
        []
    ]