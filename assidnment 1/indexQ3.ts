let personName = "zaYya raJa";

console.log("LowerCase :", personName.toLowerCase());
console.log("UpperCase :", personName.toUpperCase());

const words = personName.split(" ");
const titleCase = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
const titleyCase = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");


console.log('TitleCase false:', titleCase);
console.log("TitleCase true:" , titleyCase)
