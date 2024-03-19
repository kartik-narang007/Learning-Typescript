# Private Public in TypeScript

Private variables in TypeScript are always accessible only within the class not outside it.
By default in TypeScript all variables are public variables

    class User{
        email: string
        name: string
        private city: string = "Jaipur"
        constructor(email:string, name: string){
            this.email = email;
            this.name = name;
        }
    }

    const hitesh = new User("h@h.com", "hitesh")
    hitesh.city // this will give an error due to private variable

