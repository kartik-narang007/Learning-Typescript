# Union Types in TypeScript

This is helpful in the situations in which you are not sure which type of data is going to come in.
Union is the combination of two or three or more types of data.

    let score: number | string = 33;
    score = 44;
    score = "55";

Normally it would have show the error but because now we just used `union` of types so now score can be both `number` or a `string`.

### Another Good Example

    type User = {
        name: string;
        id: number
    }

    type Admin = {
        username: string;
        id: number
    }

    let kartik: User | Admin = {
        name: "Kartik",
        id: 334
    };

    kartik = {username: "KN", id: 334};

## Working with Union Types

Suppose if we create a type of `string` and `number` then we can only use the methods which are available for both of them not only for the single one. For example:-

    function printId(id: number | string) {
        console.log(id.toUpperCase());
        Property 'toUpperCase' does not exist on type 'string |  
        number'.
        Property 'toUpperCase' does not exist on type 'number'.
    }

in above code we can't use the `toUpperCase` method because it's only available for `string`.

The solution is to narrow the union with the code:-

    function printId(id: number | string){
        if(typeof id === "string"){
            console.log(id.toUpperCase());
        }else{
            console.log(id);
        }
    }
now it won't show the error.

Another example is to use a function like Array.isArray:

    function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    } else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
        }
    }


## A General Mistake and it's fixture

    const data: number[] = [1,2,3];
    const data2: string[] = ["1","2","3"];
    const data3: string[] | number[] = ["1","2",3];

This will result into an error because the declaration of `data3` by this syntax in saying that the `data3` can either be of type all `strings` or all `numbers` not a combination of `strings` and `numbers`. To solve this we can simply use this syntax.

    const data3: (string|number)[] = ["1",2,"3",4];


## Something more

    let seatAllotment: "aisle" | "middle" | "window"
    seatAllotment = "random";        // will result an error 
    because it can only be of 3 decalred types


another example of it:-

    let pi: 3.14 = 3.14;
    pi = 3.145    // will result an error.