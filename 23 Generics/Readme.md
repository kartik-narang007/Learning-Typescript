# Generics in TypeScript

    function identityOne(val: boolean | number) : boolean | number{
        return val;
    }

    function identityOne(val: any): any{
        return val;
    }


now problem with function `identityTwo` is that it can take any type of value and can return different type of value. 

To resolve this issue we use `Generics`.

    function identityThree<T>(val: T): T{
        return val;
    }

now we can take any type of value but we have to return the same type of value.

That is the problem that Generics solve.