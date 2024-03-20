function identityOne(val: boolean | number) : boolean | number{
    return val;
}

function identityOne(val: any): any{
    return val;
}

function identityThree<T>(val: T): T{
    return val;
}