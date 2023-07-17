let allGuests = ["saad", "manan", "tayyab", "shajar"]
// manan is always lazy he whouldn`t come
let unattendedGuest = 'manan';

console.log("Original Guest List: ", allGuests);
console.log("Guest who can't make it: ", unattendedGuest);
let newGuest = 'aftab';
// const removeManan = allGuests.filter(g => g == unattendedGuest);
// const mananIndex = allGuests.indexOf(unattendedGuest)
// allGuests.splice(mananIndex)
// add aftab
const removeManan: number = allGuests.indexOf(unattendedGuest);
if (removeManan !== -1) {
  allGuests.splice(removeManan, removeManan, newGuest);
}
console.log("Updated Guest List: ", allGuests);
console.log("\nInvitations:");
for (const guest of allGuests) {
  const message: string = `Dear ${guest}, you are cordially invited to dinner. We would be honored to have your presence.`;
  console.log(message);
}

console.log("Question 16")
console.log("i got bigger dinner table. let  add more guest");
// let newGuests = ['ali','adnan','usama'];
let newGueststart = "ali";
allGuests.unshift(newGueststart);
console.log("Updated Guest List new menbers are added: " + allGuests);
const addmiddleGuest = "zayya";
const addendGuest = 'haider';
// const midOfArray = Math.floor(allGuests.length/2);
const midOfArray = allGuests.length / 2 + 1;
allGuests.splice(midOfArray, 0, addmiddleGuest);
console.log("new member added in mid " + allGuests);
allGuests.push(addendGuest);
console.log("new member added at end " + allGuests);
for (const guest of allGuests) {
  const message: string = `Dear ${guest}, you are cordially invited to dinner. We would be honored to have your presence.`;
  console.log(message);
}
console.log("Question 17");
// need to remove guests as table is not arived yet
console.log("sorry ,need to remove guests as table is not arived yet only two people are allowed")
allGuests.splice(2);

console.log("updated list of guests removed list " + allGuests);
for (const guest of allGuests) {
  const message: string = `Dear ${guest}, you are cordially invited to dinner. We would be honored to have your presence.`;
  console.log(message);
}