# Enums in TypeScript

### Why enums exist?

enums exists because there are certain times when you want to restrict somebody's choice or with the values that are offered here. For an example,  on an ecommerce website when somebody is placing an order and you want to restrict that order status, such that the order can only be in the wishlist or the order can only be delivered, it can be shipped or returned.


Let's take an example of airplane. There are always three types of seats one is `AISLE` the other is `MIDDLE` and `WINDOW`. So we want to restrict the user's choice.

Now one easy way to use constants

    const AISLE = 0;
    const MIDDLE = 1;
    const WINDOW = 2;

    if(seat == AISLE){

    }


but this is not a good code or not a good idea.


You can do that by using enums.

    enum SeatChoice{
        AISLE,
        MIDDLE,
        WINDOW
    }

    const knSeat = SeatChoice.WINDOW;

now if you initialized one value as a number then the other values shall be auto incremented. 
For Example:- 

    enum SeatChoice{
        AISLE = 0,
        MIDDLE,
        WINDOW
    }

    console.log(SeatChoice.WINDOW)  // logs 2
    console.log(SeatChoice.MIDDLE)  // logs 1

and if you don't want values to be auto incremented then you can give them separate value too

    enum SeatChoice{
        AISLE = 10,
        MIDDLE = 20,
        WINDOW = 30,
    }

    

also you can assing string and number at the same time too

    enum SeatChoice{
        AISLE = "aisle",
        MIDDLE = "middle",
        WINDOW = 30,
    }



## Conversion of enum in Javascript

    enum SeatChoice{
        AISLE,
        MIDDLE,
        WINDOW,
    }

when typescript convert this simple code in Javascript it looks like this:-

    "use strict";
    var SeatChoice;
    (function (SeatChoice) {
        SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
        SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
        SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
    })(SeatChoice || (SeatChoice = {}));

some people don't want typescript to create lengthy javascript code so the just do this simple step, they just `const` before the `enum`.


    enum SeatChoice{
        AISLE,
        MIDDLE,
        WINDOW,
    }

    const knSeat = seatChoice.AISLE

now the `javascript` code will look like this:-

    "use strict";
    const knSeat = 0 /* SeatChoice.AISLE */;
