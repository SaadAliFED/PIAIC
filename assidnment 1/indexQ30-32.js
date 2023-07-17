var users = ['admin', 'ali', 'zya', 'eizan'];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var username = users_1[_i];
    if (username.toLowerCase() === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
}
console.log("q31");
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _a = 0, users_2 = users; _a < users_2.length; _a++) {
        var user = users_2[_a];
        console.log("Hello, ".concat(user, "! Welcome to the system."));
    }
}
users = [];
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _b = 0, users_3 = users; _b < users_3.length; _b++) {
        var user = users_3[_b];
        console.log("Hello, ".concat(user, "! Welcome to the system."));
    }
}
console.log("Q32");
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
var current_users = ['admin', 'ali', 'zya', 'eizan', 'sha'];
console.log(current_users);
var new_users = ['ali', 'zya', 'qasim', 'haider', 'own'];
for (var _c = 0, new_users_1 = new_users; _c < new_users_1.length; _c++) {
    var matchingUser = new_users_1[_c];
    if (current_users.indexOf(matchingUser) !== -1) {
        console.log(matchingUser + " already in current user");
    }
    else {
        console.log(matchingUser + " is available.");
    }
}
