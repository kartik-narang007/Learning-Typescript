const kUser: (string|number)[] = ["kn",1];

let anotherUser: [string,number,boolean];
    // anotherUser = [131, "kn", boolean] will give an error because tuple is used and it should be in correct order.


type otherUser = [number,string]
const otherUser: otherUser= [112, "example@google.com"];