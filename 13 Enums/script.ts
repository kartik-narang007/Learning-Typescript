enum SeatChoice{
    AISLE,
    MIDDLE,
    WINDOW
}

const knSeat = SeatChoice.WINDOW;



enum SeatChoice2{
    AISLE = 0,
    MIDDLE,
    WINDOW
}

console.log(SeatChoice2.WINDOW)  // logs 2
console.log(SeatChoice2.MIDDLE)  // logs 1



enum SeatChoice3{
    AISLE = 10,
    MIDDLE = 20,
    WINDOW = 30,
}


enum SeatChoice4{
    AISLE = "aisle",
    MIDDLE = "middle",
    WINDOW = 30,
}