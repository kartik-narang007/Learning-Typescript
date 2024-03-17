# Tuples in TypeScript

Let's say we want to declare an Array

    const user: (string|number)[] = ["kn",1]

now this can be random like

    ["kn", 1]
    [1, "kn"]

let's say our data is coming from an api and in api's data comes in specific order like first string and then number not in random order like the one above we want it in the order that first string and then number. That's where the tuples come into the picture.

    let user: [string,number,boolean];
    user = [131, "kn", boolean]

now this will throw an error because we have to give the values in the user array in specific order `string` -> `number` -> `boolean`.

## Tuples in Type Aliasing

    type User = [number,string]
    const newUser: User=[112, "example@google.com"];


## Problem with tuples

If I do this for above `User` Array:-

    newUser.push(true);

then you will find that it will not show any error on the IDE this is not right since `true` is a `boolean` that's why it should not be allowed to be pushed into the `newUser` array since it's a tuple that supports only `number` and `string` type values.