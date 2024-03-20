# Generics in Arrays and Arrow Functions

    function getSearchProducts<T>(products: T[]): T[]{
        const myIndex = 3;
        return products[myIndex];
    }

in case of Arrow Functions

    const getMoreSearchProducts = <T>(products: T[]):T => {
        // do some database operations

        const myIndex = 4;
        return products[myIndex];
    }