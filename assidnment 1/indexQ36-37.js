function make_shirt(size, message) {
    console.log("The shirt size is ".concat(size, " and the message printed on it is: \"").concat(message, "\"."));
}
// Call the function
make_shirt("M", "Hello, World!");
console.log("q37");
function make_shirtM(size, message) {
    if (size === void 0) { size = "L"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The shirt size is ".concat(size, " and the message printed on it is: \"").concat(message, "\"."));
}
// Call the function with default values
make_shirtM(); // Large shirt with default message
make_shirtM("M"); // Medium shirt with default message
make_shirt("S", "Hello, OpenAI!"); // Small shirt with custom message
