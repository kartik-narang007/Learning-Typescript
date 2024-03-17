var score = 33;
score = 44;
score = "55";
var kartik = {
    name: "Kartik",
    id: 334,
};
kartik = { username: "KN", id: 334 };
function printId(id) {
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    }
    else {
        // Here, id is of type 'number'
        console.log(id);
    }
}
function welcomePeople(x) {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    }
    else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
// const data3: string[] | number[] = ["1","2",3];
var data3 = ["1", 2, "3", 4];
var seatAllotment;
// seatAllotment = "random"; error
