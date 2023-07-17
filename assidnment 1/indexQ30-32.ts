let users = ['admin', 'ali', 'zya', 'eizan'];
for (const username of users) {
  if (username.toLowerCase() === 'admin') {
    console.log('Hello admin, would you like to see a status report?');
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}
console.log("q31")
if (users.length === 0) {
  console.log("We need to find some users!");
} else {
  for (const user of users) {
    console.log(`Hello, ${user}! Welcome to the system.`);
  }
}

users = [];

if (users.length === 0) {
  console.log("We need to find some users!");
} else {
  for (const user of users) {
    console.log(`Hello, ${user}! Welcome to the system.`);
  }
}

console.log("Q32")
// let current_users =  ['admin', 'ali', 'zya', 'eizan','sha'];
// console.log(current_users)
// let new_users = ['ali', 'zya', 'qasim', 'haider', 'own']
// for (let matchingUser of new_users) {
//     if (current_users.filter(u => u == matchingUser)) {
//       console.log(matchingUser + " already in current user")
//     }
//     // if (current_users.indexOf(matchingUser) !== -1) {
//     //   console.log(matchingUser + " already in current user")
//     // }
// }
let current_users =  ['admin', 'ali', 'zya', 'eizan', 'sha'];
console.log(current_users);

let new_users = ['ali', 'zya', 'qasim', 'haider', 'own'];

for (let matchingUser of new_users) {
  if (current_users.indexOf(matchingUser) !== -1) {
    console.log(matchingUser + " already in current user");
  } else {
    console.log(matchingUser + " is available.");
  }
}