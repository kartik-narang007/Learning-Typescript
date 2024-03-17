# Object in TypeScript

In Javascript we create object as:

    const User = {
        name:"Kartik",
        email:"narangk007@gmail.com",
        isCoder: true,
    }

Creating Object by functions

    function createUser({name: string, isPaid: boolean}){}

    createUser({name:"Kartik", isPaid: false});

But in TypeScript it's not a good way in TypeScript we can do this as:-

    function createCourse():{}{
        return {};
    }


Here the first set of parethesis is to specify the return type as object and the second set is for block. By this we just specified that this function should return an object.

We can tell it to return a specific object too.

    function createCourse():{name:string, price: number}{
            return {}; // will give an error
            return{name: "Typescript Course", price: 0}; // now 
            this will not give us any error.
    }