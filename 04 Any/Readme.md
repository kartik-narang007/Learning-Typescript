# Any Keyword
this is the keyword which people use normally to get away  from the syntax of typescript. This is not a good practice
Now let's say we are trying to declare a variable and we have no idea about it's type whether it's going to be a string or a number. 

    let hero;

What we do after sometime is we create a function and this function returns us the a string `thor`

    function getHero(){
        return "thor";
    }
    hero = getHero();

if we go and hover over this we will simply get

    let hero: any

this is being infered as any which is a bad case because typescript here has no idea what to infer as value.

if we check the docs we will find that when typescript can not find out what type will come as future it gives the variable the value `any`.

You can return anything instead a string and that breaks the consistency of the code.

    function getHero(){
        return true;
    }
    hero = getHero();

To get rid of it simply specify a value of hero variable 

    let hero: string;

now if you go and try to return anything else instead of string it will show you the error.

### TypeScript config comes in case

To get rid of it you can do one more thing you can change the compiler flag in TypeScript Config file and use the flag `noImplicitAny` to flag any implicit `any` as an error says the typescript docs.