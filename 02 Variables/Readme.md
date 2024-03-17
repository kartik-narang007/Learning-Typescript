# Creating Variables in TypeScript

    let variablename: type = value;
    let variable : string = "Hello World from Kartik Narang";
    tsc variablesMe.ts

## More About Variables in TypeScript

Now Once we decalred the type of variable then unlike Javascript we will not be able to change it again it will be same for whole code and if we try to change it our IDE will show Error.
so if i do:-

    variable = true;

this will give me an error.
        
    Type 'boolean' is not assignable to type 'string'.ts(2322)
    let greetings: string


and if you write a "." after the "variable" you will se all the string methods