var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
var knSeat = SeatChoice.WINDOW;
var SeatChoice2;
(function (SeatChoice2) {
    SeatChoice2[SeatChoice2["AISLE"] = 0] = "AISLE";
    SeatChoice2[SeatChoice2["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice2[SeatChoice2["WINDOW"] = 2] = "WINDOW";
})(SeatChoice2 || (SeatChoice2 = {}));
console.log(SeatChoice2.WINDOW); // logs 2
console.log(SeatChoice2.MIDDLE); // logs 1
var SeatChoice3;
(function (SeatChoice3) {
    SeatChoice3[SeatChoice3["AISLE"] = 10] = "AISLE";
    SeatChoice3[SeatChoice3["MIDDLE"] = 20] = "MIDDLE";
    SeatChoice3[SeatChoice3["WINDOW"] = 30] = "WINDOW";
})(SeatChoice3 || (SeatChoice3 = {}));
var SeatChoice4;
(function (SeatChoice4) {
    SeatChoice4["AISLE"] = "aisle";
    SeatChoice4["MIDDLE"] = "middle";
    SeatChoice4[SeatChoice4["WINDOW"] = 30] = "WINDOW";
})(SeatChoice4 || (SeatChoice4 = {}));
