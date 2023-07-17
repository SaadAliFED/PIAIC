// let namearray = ['saad','manan','tayyab','shajer'];
let namearray = ["saad", "manan", "tayyab", "shajar"]
// show by index
console.log(namearray[0] + "is my friend");
console.log(namearray[1] + "is my friend");
console.log(namearray[2] + "is my friend");
console.log(namearray[2] + "is my friend");
// show through for loop

console.log("for loop")
// for let name in namearray;
for (let i = 0; i < namearray.length; i++) {
    const element = namearray[i];
    console.log(element + "is my friend")
}
