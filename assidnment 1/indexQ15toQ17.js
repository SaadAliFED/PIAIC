var allGuests = ["saad", "manan", "tayyab", "shajar"];
// manan is always lazy he whouldn`t come
var unattendedGuest = 'manan';
console.log("Original Guest List: ", allGuests);
console.log("Guest who can't make it: ", unattendedGuest);
var newGuest = 'aftab';
// const removeManan = allGuests.filter(g => g == unattendedGuest);
// const mananIndex = allGuests.indexOf(unattendedGuest)
// allGuests.splice(mananIndex)
// add aftab
var removeManan = allGuests.indexOf(unattendedGuest);
if (removeManan !== -1) {
    allGuests.splice(removeManan, removeManan, newGuest);
}
console.log("Updated Guest List: ", allGuests);
console.log("\nInvitations:");
for (var _i = 0, allGuests_1 = allGuests; _i < allGuests_1.length; _i++) {
    var guest = allGuests_1[_i];
    var message = "Dear ".concat(guest, ", you are cordially invited to dinner. We would be honored to have your presence.");
    console.log(message);
}
console.log("Question 16");
console.log("i got bigger dinner table. let  add more guest");
// let newGuests = ['ali','adnan','usama'];
var newGueststart = "ali";
allGuests.unshift(newGueststart);
console.log("Updated Guest List new menbers are added: " + allGuests);
var addmiddleGuest = "zayya";
var addendGuest = 'haider';
// const midOfArray = Math.floor(allGuests.length/2);
var midOfArray = allGuests.length / 2 + 1;
allGuests.splice(midOfArray, 0, addmiddleGuest);
console.log("new member added in mid " + allGuests);
allGuests.push(addendGuest);
console.log("new member added at end " + allGuests);
for (var _a = 0, allGuests_2 = allGuests; _a < allGuests_2.length; _a++) {
    var guest = allGuests_2[_a];
    var message = "Dear ".concat(guest, ", you are cordially invited to dinner. We would be honored to have your presence.");
    console.log(message);
}
console.log("Question 17");
// need to remove guests as table is not arived yet
console.log("sorry ,need to remove guests as table is not arived yet only two people are allowed");
allGuests.splice(2);
console.log("updated list of guests removed list " + allGuests);
for (var _b = 0, allGuests_3 = allGuests; _b < allGuests_3.length; _b++) {
    var guest = allGuests_3[_b];
    var message = "Dear ".concat(guest, ", you are cordially invited to dinner. We would be honored to have your presence.");
    console.log(message);
}
