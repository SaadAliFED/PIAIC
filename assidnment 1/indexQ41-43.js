var magicians = ['ali', 'zya', 'own'];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var mag = magicians_1[_i];
        console.log(" ".concat(mag, " "));
    }
}
show_magicians(magicians);
console.log("q43");
function make_great(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        greatMagicians.push("".concat(magician, " the Great"));
    }
    return greatMagicians;
}
// Create an array of magician's names
// const magicianes: string[] = ["Merlin", "Houdini", "David Copperfield"];
// Call the show_magicians() function to display the original list
// console.log("Original List:");
show_magicians(magicians);
// Call the make_great() function to modify the list
var greatMagicians = make_great(magicians);
// Call the show_magicians() function again to display the modified list
console.log("\nModified List:");
show_magicians(greatMagicians);
