# Functions in TypeScript


    function addTwo(num){
       num.toUpperCase() 
       return num + 2;
    }

    addTwo(5);

in this code i'm taking the argument num and i've not defined is type that means i can take variable of any type as input and return that as an output so that's why i'm allowed to use the upperCase method here with the num which is not a good way and goind to break my code.

Another problem is if i go and conver the 5 into string like this `addTwo("5")`, this shouldn't be working but at this moment it's not showing any error. Now try to fix that to do this specify the type of `num`

    function addTwo(num: number){
        num.toUpperCase(); //will show error
        ...
    }

    addTwo("5") //argument of type 'string' is not assignable to 
    the parameter of type number.

so this is the good practice in typescript.


## Default Value

    function loginUser(name: string,email:string,isPaid:boolean){

    }

    loginUser("h", "h@h.com");

this will show us an error `Expected 3 arguments, but got 2.ts(2554)
functions.ts(18, 43): An argument for 'isPaid' was not provided.`


To fix this:-

    function loginUser(name: string,email:string,isPaid:boolean = false){
        //we passed a default value
    }
    loginUser("h", "h@h.com"); // no Error.