# Interfaces Vs Types

In TypeScript, both types and interfaces serve similar purposes: they allow you to define the shape of data. However, there are some differences between them in terms of capabilities and use cases. 


`1.` You can add more properties in the interfaces on the go. Check the code below to see an Example:-

    interface User{
        readonly dbId: number,
        email: string,
        userId: number,
        googleId?: string,
        startTrail(): string
        getCoupon(couponName: string, value: number):number
    }

    interface User{
        githubToken: string,
    }

that's how we added new property in `githubtoken` in our `User` interface and this will not show any error.

`2.` To extend `type` we used `intersections` but in case of `interfaces` we can use `extends` keyword.

    interface Admin extends User{
        role: "admin" | "ta" | "learner"
    }

now it will contain properties of `User` as well.