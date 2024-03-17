let score: number | string = 33;
score = 44;
score = "55";

type Users = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let kartik: Users | Admin = {
  name: "Kartik",
  id: 334,
};

kartik = { username: "KN", id: 334 };

function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
// const data3: string[] | number[] = ["1","2",3];
const data3: (string | number)[] = ["1", 2, "3", 4];



let seatAllotment: "aisle" | "middle" | "window"
// seatAllotment = "random"; error