type User2 = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    credCardDetails ?: number;
}

let myUser : User2 = {
    _id: "1234",
    name: "h",
    email:"h@h.com",
    isActive:false,
    
}

myUser.email = "h@gmail.com";
// myUser._id = "500";

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv : number
}