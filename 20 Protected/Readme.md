# Protected Keyword in TypeScript


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

Now if we create a subUser class which inherits properties like this:-

    class SubUser{
        isFamily : boolean = true
        changeCourseCount(){
            this._courseCount = 4
        }
    }

now if we do that then we will get an error in our IDE which will say:-  

    Property '_courseCount' is private and only accessible with    
    class user

that means we need a keyword which if used will make the `_courseCount` property unaccessible outside the class but accessible in child class. So that keyword is `Protected`.

now if we do `protected _courseCount` then it will show us no Error.