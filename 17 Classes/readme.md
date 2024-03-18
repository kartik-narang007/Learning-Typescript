# Classes in TypeScript

Creating classes in TypeScript is almost same as creating classes in JavaScript.

    class User{
        email: string
        name: string
        city: string = ""
        constructor(email: string, name: string){
            this.email = email;
            this.name = name;
        }
    }

    const kartik = new User("k@k.com", "kartik");

    kartik.city = "Sri Ganganagar";

