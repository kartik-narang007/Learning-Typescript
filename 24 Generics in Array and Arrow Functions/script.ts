function getSearchProducts<T>(products: T[]): T{
    const myIndex = 3;
    return products[myIndex];
}

const getMoreSearchProducts = <T>(products: T[]):T => {
    // do some database operations

    const myIndex = 4;
    return products[myIndex];
}