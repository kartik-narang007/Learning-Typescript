var User = {
    name: "Kartik",
    email: "narangk007@gmail.com",
    isCoder: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "Kartik", isPaid: false });
function createCourse() {
    //return {}; // will give an error
    return { name: "Typescript Course", price: 0 }; // now this will not give us any error.
}
