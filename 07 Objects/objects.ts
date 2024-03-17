const User = {
    name:"Kartik",
    email:"narangk007@gmail.com",
    isCoder: true,
}

function createUser({name: string, isPaid: boolean}){}

    createUser({name:"Kartik", isPaid: false});

    function createCourse():{name:string, price: number}{
        //return {}; // will give an error
        return{name: "Typescript Course", price:0}; // now this will not give us any error.
}