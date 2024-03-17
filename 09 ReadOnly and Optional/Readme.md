# Readonly and Optional

    type User = {
        readonly _id: string;
        name: string;
        email: string;
        isActive: boolean;
        credCardDetails ?: number;
    }

    let myUser : User = {
        _id: "1234",
        name: "h",
        email:"h@h.com",
        isActive:false,
    }

    myUser.email = "h@gmail.com";
    myUser._id = "500";

now suppose that you are saving this data in a database for example:- `MongoDb` and you want that the `id` cannot be changed. So you can go ahead and markdown it as `readonly`.

Now in last line when you try to change the `_id` of myUser you will see that your IDE is diving an error.

    Cannot assign to '_id' because it is a read-only property.

now suppose that a user register on our site but he doesn't have credit card so we can mark the `credCardDetails` as `optional` by simply write `?` after it's name. Now it will not throw an error if we don't pass the `creadCardDetails`



## Combining Of Types

    type cardNumber = {
        cardnumber: string
    }

    type cardDate = {
        cardDate: string
    }

    type cardDetails = cardNumber & cardDate & {
        cvv : number
    }