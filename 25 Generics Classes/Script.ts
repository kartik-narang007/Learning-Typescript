interface Database{
    connection: string,
    username: string,
    password: string
}

function anotherFunction <T, U extends Database>(valOne:T,  valTwo:U):object{
    return {
        valOne, 
        valTwo
    }
}