# Getters and Setters in TypeScript

Getters and Setters are nothing but a way to provide you access of the properties of an object. These are Specially used for private properties.


    class User{
        private _courseCount :number = 1
        readonly city: string = "Sri Ganganagar"
        constructor(
            public email: string
            public name: string
        ){}

        get getAppleEmail(): string{
            return `apple${this.emal}`
        }

        get courseCount():number{
            return this._courseCount;
        }

        set courseCount(courseNum){
            if(courseNum <=1){
                throw new Error ("Course count should be more than 
                1")
            }
            this._courseCount = courseNum;
        }
    }

In above code the private property `_courseCount` is not accessible outside the class but we want a bevaiour that whenever a new user creates account the `_courseCount` increases.

And to do this we have to create getter and setter for it.

Now just remember in setter if we specify the return type then it will show the error because a setter doesn't return anything it just does operations.


