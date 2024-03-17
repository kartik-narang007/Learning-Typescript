# Type Aliases

In TypeScript, a type alias allows you to create a new name for any type. This can be particularly useful for simplifying complex type definitions, improving code readability, and providing semantic meaning to types.

    type User{
        name: string;
        email: string;
        isActive: boolean;
    }

    function createUser(user: User): User{
        return {name:"", email:"", isActive: true}
    }

    createUser({name:"", email:"", isActive: true});

so here we just created a new type in TypeScript named `User` and then we created a function which takes a data of type User and also it is compulsory for the function to return the data of type User. So if we not return and pass the data of type `User` it will show us error.

Talking about the use case suppose there are 8 functions in our TypeScript code which uses same type of data again and again but with different values so we have to pass write it every time.

To get rid of if we can give that data a Type Alias and use that anywhere. A good example of it is written below that we picked up from TypeScript docs.

    type Point = {
    x: number;
    y: number;
    };
    
    // Exactly the same as the earlier example
    function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
    }
    
    printCoord({ x: 100, y: 100 });

