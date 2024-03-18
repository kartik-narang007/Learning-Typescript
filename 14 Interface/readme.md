# Interface in TypeScript
Interfaces are similar to type aliases, except they only apply to object types.

    interface User{
        readonly dbId: number
        email: string,
        userId: number,
        googleId?: string
    }

    const kartik: User = {
        dbId: 77
        email: "k@k.com",
        userId: "k@0007",
    }

now what makes interfaces intresting is definition of functions

    
    interface User{
        readonly dbId: number
        email: string,
        userId: number,
        googleId?: string
        startTrail: ()=>string
    }

    const kartik: User = {
        dbId: 77,
        email: "k@k.com",
        userId: "k@0007",
        startTrail = ()=>{
            return "Trail started",
        }
    }


another way to define functions in interface

    startTrail() : string;



