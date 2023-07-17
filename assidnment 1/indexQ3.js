var personName = "zaYya raJa";
console.log("LowerCase :", personName.toLowerCase());
console.log("UpperCase :", personName.toUpperCase());
var words = personName.split(" ");
var titleCase = words.map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); }).join(" ");
var titleyCase = words.map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); }).join(" ");
console.log('TitleCase false:', titleCase);
console.log("TitleCase true:", titleyCase);
