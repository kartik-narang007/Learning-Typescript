interface NewUser{
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    startTrail(): string
    getCoupon(couponName: string, value: number):number
}

interface NewUser{
    githubToken: string,
}


interface Admin extends NewUser{
    role: "admin" | "ta" | "learner",
}