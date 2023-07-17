let magicians: string[] = ['ali', 'zya', 'own']
function show_magicians(magicians: string[]) {
    for (let mag of magicians) {
        console.log(` ${mag} `)
    }
}

show_magicians(magicians);
console.log("q43")

function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];

    for (const magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }

    return greatMagicians;
}

// Create an array of magician's names
// const magicianes: string[] = ["Merlin", "Houdini", "David Copperfield"];

// Call the show_magicians() function to display the original list
// console.log("Original List:");
show_magicians(magicians);

// Call the make_great() function to modify the list
const greatMagicians = make_great(magicians);

// Call the show_magicians() function again to display the modified list
console.log("\nModified List:");
show_magicians(greatMagicians);