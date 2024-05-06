const accountId = 144553;
let accountEmail = "sandeep@google.com"
var accountPassword = "12345"
accountCity = "Bhubaneswar"
let accountState;

// accountId = 2  // not allowed

accountEmail = "sd@sd.com"
accountPassword = "525252"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope or functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
