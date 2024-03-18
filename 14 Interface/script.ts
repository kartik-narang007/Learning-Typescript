interface User{
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string
}

const kartik: User = {
    dbId: 77,
    email: "k@k.com",
    userId: 7007,
}



interface User2{
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string
    startTrail: ()=>string
}

const narang: User2 = {
    dbId: 77,
    email: "k@k.com",
    userId: 7007,
    startTrail: ()=>{
        return "Trail started";
    }
}