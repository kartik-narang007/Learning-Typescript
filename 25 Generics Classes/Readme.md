# Generics Classes

    interface Database{
        connection: string,
        username: string,
        password: string
    }

    function anotherFunction <T, U extends Database>(valOne:T,  val Two:U):object{
        return {
            valOne, 
            valTwo
        }
    }

