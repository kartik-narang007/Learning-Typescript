class User2{
    protected _courseCount :number = 1
    readonly city: string = "Sri Ganganagar"
    constructor(
        public email: string,
        public name: string
    ){}

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount():number{
        return this._courseCount;
    }

    set courseCount(courseNum){
        if(courseNum <=1){
            throw new Error ("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}

class SubUser extends User2{
    isFamily : boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}